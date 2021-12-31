import Home from "../components/common/home/Home";
import PageNotFound from "../components/common/page-not-found/PageNotFound";
import AddProduct from "../components/products/add-product/AddProduct";
import ProductDetail from "../components/products/product-detail/ProductDetail";
import ProductList from "../components/products/product-list/ProductList";
import UpdateProduct from "../components/products/update-product/UpdateProduct";

export const appRoutes = [
    {
        id: 1,
        routePath: '/',
        component: Home
    },
    {
        id: 2,
        routePath: '/home',
        component: Home
    },
    {
        id: 3,
        routePath: '/products',
        component: ProductList
    },
    {
        id: 4,
        routePath: '/products/:id',
        component: ProductDetail
    },
    {
        id: 5,
        routePath: '/products/update/:id',
        component: UpdateProduct
    },
    {
        id: 6,
        routePath: '/products/add',
        component: AddProduct
    },
    {
        id: 7,
        routePath: '*',
        component: PageNotFound
    }
]