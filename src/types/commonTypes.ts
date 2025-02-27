/* eslint-disable @typescript-eslint/no-explicit-any */
export type ConfigValue = string | number | boolean | object | any;
export enum ConfigKeys {
    Environment = 'Environment',
}

export type FirebaseConfigValue = object;
export enum FirebaseConfigKeys {
    Analytics = 'Analytics',
}

export enum InitializationArea {
    Environment = 'Environment',
    Theme = 'Theme',
    Firebase = 'Firebase',
}

export interface InitializationError {
    area: InitializationArea;
    message: string;
    errorObject?: object;
}
