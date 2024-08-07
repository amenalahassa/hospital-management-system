// This class is a base class for any kind of value used in the app. It can be extended to create different types of values.
// It has some property to store the value and his state as loading, error, etc. It only can manipulate his state, not the value itself.

import {AppError} from "./errors";

export class DataValue {
    value: any;
    loading: boolean;
    error: string | AppError;

    constructor(value: any = null, loading: boolean = false, error: any = null) {
        this.value = value;
        this.loading = loading;
        this.error = error;
    }

    setValue(value: any) {
        this.value = value;
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setError(error: any) {
        this.error = error;
    }
}