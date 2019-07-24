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


const server = 'http://sandip-shopping-app.herokuapp.com/api'
export const productsUrlByCatId = `${server}/products/byCategoryId/`;
export const categoriesUrl = `${server}/categories`
export const productServer = `${server}/categories/dashboard-products`;
export const productByIdUrl = function (id) {
    return `${server}/products/${id}/details`
}
export const loginUrl = `${server}/auth/login`;
export const cartUrl = `${server}/carts`;