export namespace Constants {
    export const PUBLIC_STORAGE_ROOT = 'public';
    export const PRIVATE_STORAGE_ROOT = 'private';
    export const enum APP_ROUTES {
        WELCOME = '/',
        LOGIN = '/login',
        WORKSPACE = '/workspace',
        DASHBOARD = '/dashboard',
        PROFILE = '/profile',
        NOT_FOUND = '/404',
    }


    // export enum STORAGE_PATHS {
    //     IMAGES = 'images',
    // }
    //
    // export enum AUTHENTICATED_STORAGE_PATHS {
    //     IMAGES = [PRIVATE_STORAGE_ROOT, STORAGE_PATHS.IMAGES].join('/'),
    // }
}