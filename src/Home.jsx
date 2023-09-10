import { useFilterContext } from "./Context/FilterContext";
import { useProductContext } from "./Context/ProductContext";
import Products from "./Products"

 const Home = () => {

  
  const { filter_Products } = useFilterContext();
  
  return (
    <div>
    
        <Products products={filter_Products} />
    
    </div>
  )
}

export default Home