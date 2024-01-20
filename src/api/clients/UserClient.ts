import BaseApiInstance from '../BaseApiInstance';

/**
 * @description Klient API dla użytkowników
 * @method getAllUsers
 * @method getUserById
 * @returns dane z API
 */

class UserClient {
    private BaseApiInstance: BaseApiInstance;

    constructor() {
        this.BaseApiInstance = BaseApiInstance.getInstance();
    }

    public async getAllUsers() {
        return await this.BaseApiInstance.get('/users')
            .then(res => res.data)
    }

    public async getUserById(id: number) {
        return await this.BaseApiInstance.get(`/users/${id}`)
            .then(res => res.data)
    }
}

export default UserClient;
