// import ErrorBoundary from '../components/common/error-boundary/ErrorBoundary';
// import AddProduct from '../components/products/add-product/AddProduct';
// import ProductList from '../components/products/product-list/ProductList';
// import logError from '../services/logerror';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <ErrorBoundary logger={logError}>
//         <ProductList />
//       </ErrorBoundary>
//     </div>
//   );
// }
//export default App;


import './App.css';
import RouteGenerator from '../routes/RouteGenerator';
import DashBoard from '../components/common/dashboard/DashBoard';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <DashBoard />
      <RouteGenerator />
    </Fragment>
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/home' element={<Home />} />
    //   <Route path='/products' element={<ProductList />} />
    //   <Route path='/products/:id' element={<ProductDetail />} />
    //   <Route path='/products/add' element={<AddProduct />} />
    //   <Route path='/products/update/:id' element={<UpdateProduct />} />
    //   <Route path='*' element={<PageNotFound />} />
    // </Routes>
  );
}

export default App;

// function Frag(props) {
//   return props.children
// }
