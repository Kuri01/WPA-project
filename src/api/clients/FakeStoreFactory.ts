import ProductsClient from './ProductsClient';
import UserClient from './UserClient';

/**
 * @description Fabryka, która tworzy instancje klientów API (Wzorzec projektowy Factory)
 * @method create
 * @param type - typ klienta API
 */

class FakeStoreApiFactory {
    public static create(type: 'products' | 'user') {
        switch (type) {
            case 'products':
                return new ProductsClient();
            case 'user':
                return new UserClient();
            default:
                throw new Error('Unknown API type');
        }
    }
}

export default FakeStoreApiFactory;
