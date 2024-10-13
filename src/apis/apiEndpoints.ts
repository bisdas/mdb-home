import { Environments } from 'src/constants/commonConstants';

export const WebApiBaseUrl = {
    [Environments.Production]: 'https://web-api.example.com',
    [Environments.Test]: 'https://web-api.test.example.com',
};

export const featureEndpoints = {
    getFeature: 'feature',
};
