import { Module } from '@nestjs/common';
import { CONFIG_VALUE_PROVIDER } from './config-value';

@Module({
  providers: [CONFIG_VALUE_PROVIDER],
  exports: [CONFIG_VALUE_PROVIDER],
})
export class DummyConfigModule {}
