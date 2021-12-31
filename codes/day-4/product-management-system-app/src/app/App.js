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


import AddProduct from '../components/products/add-product/AddProduct';
import ProductList from '../components/products/product-list/ProductList';
import './App.css';
function App() {
  return (
    <div>
      <ProductList />
      <br />
      <br />
      <AddProduct />
    </div>
  );
}

export default App;
