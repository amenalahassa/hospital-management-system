// Purpose: Contains the AppError class which is used to create custom error objects.



export class AppError extends Error {
    // Todo: Add an enum for error codes
    code: number | null;
    name: string;

    constructor(name, message, code) {
        super(message);
        this.code = code;
        this.name = name;
    }

}