import axios, { AxiosInstance } from 'axios';

/**
 * @description tworzy singleton, który jest odpowiedzialny za komunikację z API używając biblioteki axios. (Wzorzec projektowy Singleton)
 * @method getInstance
 * @method get
 * @method post
 */

class BaseApiInstance {
    private static instance: BaseApiInstance;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://fakestoreapi.com',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static getInstance(): BaseApiInstance {
        if (!BaseApiInstance.instance) {
            BaseApiInstance.instance = new BaseApiInstance();
        }
        return BaseApiInstance.instance;
    }

    public get(url: string, config = {}) {
        return this.axiosInstance.get(url, config);
    }

    public post(url: string, data = {}, config = {}) {
        return this.axiosInstance.post(url, data, config);
    }
}

export default BaseApiInstance;
