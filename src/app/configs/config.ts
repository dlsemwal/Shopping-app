export const errorImage = 'https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg'


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
export const dltCartUrl = `${server}/carts/remove-item`;
export const signupUrl = `${server}/auth/sign-up`;
export const brandsUrl = `${server}/brands`;
export const allProductsUrl = `${categoriesUrl}/dashboard-products`;
export const brandsByCatUrl = (id) => {
    return `${server}/categories/${id}/brand-count`
}

export const orderUrl = `${server}/order`;
export const placeOrderUrl = `${orderUrl}/placeOrder`;
export const myOrdersUrl = `${orderUrl}/myOrders`;
