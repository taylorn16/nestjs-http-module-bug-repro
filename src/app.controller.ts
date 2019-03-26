import { Controller, Get, HttpService } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly http: HttpService,
        ) { }

    @Get()
    async getHello(): Promise<string> {
        await this.http.get('http://www.cnn.com').toPromise();
        return this.appService.getHello();
    }
}
