import {HttpParams} from "@angular/common/http";
import {Pagination} from "../types/pagination.types";

export const createFormData = (req?: any): FormData => {
    let options: FormData = new FormData();
    if (req) {
        Object.keys(req).forEach(key => {
            if (req[key] !== null && req[key] !== undefined) {
                options.append(key, req[key]);
            }
        });
    }
    return options;
};

export const createHttpParams = (req?: Pagination): HttpParams => {
    let options: HttpParams = new HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (req[key] !== '' && req[key] !== null && req[key] !== undefined) {
                if (key === 'page') {
                    options = options.append(key, req[key] + 1);
                } else {
                    options = options.append(key, req[key]);
                }
            }
        });
    }
    return options;
};
