import BaseApiInstance from '../BaseApiInstance';

/**
 * @description Klient API dla produktów 
 * @method getAllProducts
 * @method getProductById
 * @returns dane z API
 */

class ProductsClient {
    private BaseApiInstance: BaseApiInstance;

    constructor() {
        this.BaseApiInstance = BaseApiInstance.getInstance();
    }

    public async getAllProducts() {
        return await this.BaseApiInstance.get('/products')
            .then(res => res.data)
    }

    public async getProductById(id: number) {
        return await this.BaseApiInstance.get(`/products/${id}`)
            .then(res => res.data)
    }
}

export default ProductsClient;