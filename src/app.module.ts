import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyConfigModule } from './dummy-config/dummy-config.module';
import { CONFIG_VALUE } from './dummy-config/config-value';

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [DummyConfigModule],
            inject: [CONFIG_VALUE],
            useFactory: (configValue: number) => ({
                maxRedirects: configValue,
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
