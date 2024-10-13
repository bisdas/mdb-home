/* eslint-disable @typescript-eslint/no-explicit-any */
export type ConfigValue = string | number | boolean | object | any;

export enum ConfigKeys {
    Environment = 'Environment',
}

export enum InitializationArea {
    Environment = 'Environment',
}

export interface InitializationError {
    area: InitializationArea;
    message: string;
    errorObject?: object;
}
