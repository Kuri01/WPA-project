import React from 'react';
import ProductsClient from '../api/clients/ProductsClient';
import UserClient from '../api/clients/UserClient';
import useFetch from '../hooks/useFetch';

const FakeStore = () => {
    const productsClient = new ProductsClient();
    const usersClient = new UserClient();

    const {
        data: products,
        error: productsError,
        loading: productsLoading,
        fetchData: fetchProducts,
    } = useFetch(() => productsClient.getAllProducts());

    const { data: users, error: usersError, loading: usersLoading, fetchData: fetchUsers } = useFetch(() => usersClient.getAllUsers());

    return (
        <div>
            <h1>FakeStore</h1>
            <button onClick={fetchProducts} disabled={productsLoading || products}>
                {productsLoading ? 'Loading Products...' : 'Fetch Products'}
            </button>
            <button onClick={fetchUsers} disabled={usersLoading || users}>
                {usersLoading ? 'Loading Users...' : 'Fetch Users'}
            </button>

            {productsError && <p>Error fetching products: {productsError}</p>}
            {usersError && <p>Error fetching users: {usersError}</p>}

            <div>
                <h3>Products</h3>
                <pre>{products && JSON.stringify(products, null, 2)}</pre>
            </div>

            <div>
                <h3>Users</h3>
                <pre>{users && JSON.stringify(users, null, 2)}</pre>
            </div>
        </div>
    );
};

export default FakeStore;
