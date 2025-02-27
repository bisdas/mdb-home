/* eslint-disable no-invalid-this, func-names, @typescript-eslint/ban-types */

// /**
//  * Debounce function
//  * @param func The function to debounce
//  * @param wait The wait time in milliseconds
//  * @param immediate Whether to execute the function immediately
//  * @returns The debounced function
//  */
// export const debounce = (func: Function, wait: number, immediate: boolean) => {
//     let timeout: NodeJS.Timeout | null;

//     return function (this: any, ...args: any[]) {
//         const context = this;
//         const later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };

//         const callNow = immediate && !timeout;
//         clearTimeout(timeout as NodeJS.Timeout);
//         timeout = setTimeout(later, wait);

//         if (callNow) func.apply(context, args);
//     };
// };

/**
 * Throttle function
 * @param func The function to throttle
 * @param limit The limit time in milliseconds
 * @returns The throttled function
 */
export const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean = false;

    return function (this: unknown, ...args: unknown[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// todo: fix the types and eslint errors
