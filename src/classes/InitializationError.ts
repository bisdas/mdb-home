/**
 * Represents an error that occurs during the initialization process.
 * This class extends the native JavaScript `Error` class, adding
 * custom properties to provide more context about the initialization
 * error.
 */
export class InitializationError extends Error {
    /**
     * The area or module where the initialization error occurred.
     */
    area: string;

    /**
     * An optional original error object that might have triggered the initialization error.
     */
    errorObject?: Error;

    /**
     * Creates an instance of InitializationError.
     * @param area - The area or module where the error occurred.
     * @param message - The error message.
     * @param [errorObject] - Error object that triggered the initialization error.
     */
    constructor(area: string, message: string, errorObject?: Error) {
        super(message);
        this.name = 'InitializationError';
        this.area = area;
        this.errorObject = errorObject;
    }
}
