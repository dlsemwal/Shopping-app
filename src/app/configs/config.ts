export const config = {
    baseUrl: 'http://10.0.29.42:4002',
    imgUrl: 'https://jsonplaceholder.typicode.com/photos',
    commentUrl: 'https://jsonplaceholder.typicode.com/comments',
    usersUrl: 'https://jsonplaceholder.typicode.com/users',
    perPageData: 10,
    get loginUrl() {
        return `${this.baseUrl}/api/restaurants/login`;
    },
    get listUrl() {
        // tslint:disable-next-line:max-line-length
        return `${this.baseUrl}/api/products?filter=%7B%22where%22:%7B%22restaurant_id%22:%221%22,%22deleted%22:false%7D,%22include%22:%5B%22productCategory%22,%22cuisine%22%5D,%22order%22:%22id+desc%22%7D`;
    }

};


const server = 'http://enigmatic-reef-16960.herokuapp.com/api';
export const productsUrl = `${server}/products`;
export const productsUrlByCatId = `${productsUrl}/byCategoryId/`;
export const categoriesUrl = `${server}/categories`;
export const productServer = `${server}/categories/dashboard-products`;
export const productByIdUrl = (id) => {
    return `${server}/products/${id}/details`;
};
export const loginUrl = `${server}/auth/login`;
export const cartUrl = `${server}/carts`;
export const signupUrl = `${server}/auth/sign-up`;
export const brandsUrl = `${server}/brands`;
export const allProductsUrl = `${categoriesUrl}/dashboard-products`;
export const brandsByCatUrl = (id) => {
    return `${server}/categories/${id}/brand-count`
}

export const orderUrl = `${server}/order`;
export const placeOrderUrl = `${orderUrl}/placeOrder`;
export const myOrdersUrl = `${orderUrl}/myOrders`;
