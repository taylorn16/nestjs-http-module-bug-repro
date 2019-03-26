import { ValueProvider } from '@nestjs/common/interfaces';

export const CONFIG_VALUE = Symbol('CONFIG_VALUE');

export const CONFIG_VALUE_PROVIDER: ValueProvider<number> = {
    provide: CONFIG_VALUE,
    useValue: 42,
};
