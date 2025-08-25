export function getDateString(offset: number) {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() - offset);
  return d.toISOString().slice(0, 10);
}
