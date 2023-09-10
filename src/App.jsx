import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

// import Product from "./components/Products/Product"
import  Home  from "./Home"
// import Products from "./Products"
import Shop from "./Shop"
import Cart from "./Cart"
import SingleProduct from "./SingleProduct"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WishList from "./WishList"

function App() {

  return (
    <>

    <Router>
    
      <Header />
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/wishlist" element={<WishList />} />


      </Routes>

      <Footer />
    
    </Router>

    </>
  )
}

export default App
