import { ConfigKeys, ConfigValue } from 'src/types/commonTypes';

interface Configuration {
    [key: string]: ConfigValue;
}

/**
 * Singleton function for managing configuration settings.
 * @returns {object} An object containing `set` and `get` methods for configuration management.
 */
export const globalConfig = (() => {
    /**
     * Private object to store configuration settings.
     */
    const configuration: Configuration = {};

    return {
        /**
         * Sets a value for a given configuration key.
         * If the key already exists, its value will be updated. Otherwise, a new key-value pair is added.
         * @param key - The configuration key.
         * @param value - The value to set for the given configuration key.
         */
        set(key: string, value: ConfigValue) {
            configuration[key] = value;
        },

        /**
         * Retrieves the value for a given configuration key.
         * If the key does not exist, `undefined` is returned.
         * @param key - The configuration key.
         * @returns The value associated with the given configuration key, or `undefined` if the key does not exist.
         */
        get(key: ConfigKeys): ConfigValue | undefined {
            return configuration[key];
        },
    };
})();
