import { iocContainer } from './';

import '../controllers/home.controller';

import { AppService } from '../services/app/app.service';
import { NasaService } from '../services/nasa/nasa.service';

iocContainer.registerConfig();
iocContainer.registerSingleton([
    AppService,
    NasaService
]);
