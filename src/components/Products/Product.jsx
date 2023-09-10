import { data } from "autoprefixer";
import { useEffect, useState } from "react"

const Product = ()  => {
    const [products, setProducts] = useState([]);

  useEffect(()=> {
    async function fetchData() {
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>json)
            console.log(res)

            setProducts(res);
        } catch (err) {
            console.log(err);
        }
    }   
    fetchData();
  }, [])
 
  return (
    <div>
        {products.map((product, i) => (
            <>
                <div key={i}>{product.title}</div>
                <img src={product.image}/>
            </>
        ))}

    </div>
  )
}

export default Product