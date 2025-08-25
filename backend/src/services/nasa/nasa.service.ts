import { inject, injectable } from '../../ioc';
import { IConfig, ConfigToken } from '../config/config.interface';


@injectable()
export class NasaService {

    @inject(ConfigToken)
    private config: IConfig;

    public async getAPOD(start_date: string, end_date: string) {
        if (!start_date || !end_date) {
            throw new Error('Both start_date and end_date are required');
        }
        // Validate format YYYY-MM-DD
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(start_date) || !dateRegex.test(end_date)) {
            throw new Error('start_date and end_date must be in format YYYY-MM-DD');
        }
        if (start_date > end_date) {
            throw new Error('start_date must be before end_date');
        }
        // Validate date range
        const minDate = new Date('1995-06-16');
        const maxDate = new Date();
        const start = new Date(start_date);
        const end = new Date(end_date);
        if (start.getTime() < minDate.getTime() || end.getTime() > maxDate.getTime()) {
            throw new Error('Dates must be between Jun 16, 1995 and today');
        }
        let url = `${this.config.nasa_api.url}/planetary/apod?api_key=${this.config.nasa_api.key}&start_date=${encodeURIComponent(start_date)}&end_date=${encodeURIComponent(end_date)}`;
        const response = await fetch(url);
        const data = await response.json();
        // If batch, map array; if single, just filter
        if (Array.isArray(data)) {
            return data.map(item => ({
                date: item.date,
                copyright: item.copyright,
                explanation: item.explanation,
                url: item.url || '',
                title: item.title
            }));
        } else {
            return {
                date: data.date,
                copyright: data.copyright,
                explanation: data.explanation,
                url: data.url || '',
                title: data.title
            };
        }
    }
}
