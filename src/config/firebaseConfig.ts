import { FirebaseConfigKeys, FirebaseConfigValue } from 'src/types/commonTypes';

interface Configuration {
    [key: string]: FirebaseConfigValue;
}

/**
 * Singleton function for managing configuration settings.
 * @returns {object} An object containing `set` and `get` methods for configuration management.
 */
export const firebaseConfig = (() => {
    const configuration: Configuration = {};

    return {
        /**
         * Sets a value for a given configuration key.
         * If the key already exists, its value will be updated. Otherwise, a new key-value pair is added.
         * @param key - The configuration key.
         * @param value - The value to set for the given configuration key.
         */
        set(key: string, value: FirebaseConfigValue) {
            configuration[key] = value;
        },

        /**
         * Retrieves the value for a given configuration key.
         * If the key does not exist, `undefined` is returned.
         * @param key - The configuration key.
         * @returns The value associated with the given configuration key, or `undefined` if the key does not exist.
         */
        get(key: FirebaseConfigKeys): FirebaseConfigValue | undefined {
            return configuration[key];
        },
    };
})();
