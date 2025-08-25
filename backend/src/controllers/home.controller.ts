import { controller, httpGet, queryParam, response } from 'inversify-express-utils';
import { NasaService } from '../services/nasa/nasa.service';
import { inject } from 'inversify';
import * as express from 'express';

@controller('/')
export class HomeController {
    @inject(NasaService)
    private nasaService: NasaService;

    @httpGet('/')
    public get(req: express.Request, res: express.Response): any {
        return res.status(200).send('Hello from NASA Data Explorer!');
    }

    @httpGet('/apod')
    public async getAPOD(@queryParam('start_date') startDate: string, @queryParam('end_date') endDate: string, @response() res: express.Response): Promise<any> {
        try {
            const apod = await this.nasaService.getAPOD(startDate, endDate);
            res.status(200).json(apod);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}
