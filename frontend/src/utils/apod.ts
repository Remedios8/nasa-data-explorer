import { fetchApod } from '../api/nasaApi';
import { getDateString } from './date';

const CACHE_EXPIRY_MS = 60 * 60 * 1000;

function getCachedData(key: string) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;
  try {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
      return data;
    } else {
      localStorage.removeItem(key);
      return null;
    }
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

function setCachedData(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
}

export async function fetchApodBatchWithCache(batchStart: number, batchSize: number) {
  const startOffset = batchStart;
  const endOffset = batchStart + batchSize - 1;
  const startDate = getDateString(startOffset);
  const endDate = getDateString(endOffset);
  const batchCacheKey = `apod-batch-${startDate}-${endDate}`;
  const cachedBatch = getCachedData(batchCacheKey);
  if (cachedBatch) {
    return cachedBatch;
  } else {
    const res = await fetchApod({ start_date: endDate, end_date: startDate });
    const sorted = [...res.data].sort((a, b) => b.date.localeCompare(a.date));
    setCachedData(batchCacheKey, sorted);
    return sorted;
  }
}
