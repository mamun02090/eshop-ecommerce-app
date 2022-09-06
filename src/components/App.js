import { BrowserRouter , Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/style.css";
import MainLayout from "./MainLayout";
import Cart from "./pages/Cart";
import Gadgets from "./pages/Gadgets";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDescription from "./pages/ProductDescription";
import Signup from './pages/Signup'
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import {CartProvider} from '../contexts/CartHandleContext';
import MyOrder from "./pages/MyOrder";
import { OrderProvider } from "../contexts/OrderHandleContext";
import OrderItemDetails from "./pages/OrderDetails";
import ContactUs from "./pages/ContactUs";
import Shirts from "./pages/Shirts";
import Groceries from "./pages/Groceries"
import Books from "./pages/Books"

function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <MainLayout>
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path='gadgets' element={<Gadgets/>}></Route>
                <Route path='shirts' element={<Shirts/>}></Route>
                <Route path='groceries' element={<Groceries/>}></Route>
                <Route path='books' element={<Books/>}></Route>
                <Route path="product_description/:id" element={<ProductDescription />}></Route>
                <Route path='signup' element={<PublicRoute><Signup/></PublicRoute>}></Route>
                <Route path='login' element={<PublicRoute><Login/></PublicRoute>}></Route>
                <Route path='cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
                <Route path='my_order' element={<MyOrder/>}></Route>
                <Route path='my_order/my_order_details/:orderId' element={<OrderItemDetails/>}></Route>
                <Route path='contact_us' element={<ContactUs/>}></Route>

              </Routes>
            </MainLayout>
          </OrderProvider>
        </CartProvider>         
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
