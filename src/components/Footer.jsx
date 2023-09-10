import {NavLink} from "react-router-dom";

const Footer = () => {
  return (

    <div className="flex flex-col">
    
        <div className="w-full h-60 p-14 flex bg-black">
        
          <div className="w-1/5"></div>

          <div className="w-1/5">
          
            <div className="flex flex-col p-3  pl-4">
              <NavLink to="/" >
                <p className="font-semibold cursor-pointer p-1 text-xl text-white">Shipping & Returns</p>
              </NavLink>

              <NavLink to="/" >
                <p className="font-semibold cursor-pointer p-1 text-xl text-white">Store Policy</p>
              </NavLink>

              <NavLink to="/" >
                <p className="text-xl font-semibold p-1 cursor-pointer text-white">Payment Methods</p>
              </NavLink>

            </div>
          
          </div>

          <div className="w-1/5">
          
              <div className="flex flex-col p-3  pl-4">
              
              <NavLink to="/" >
                <p className="font-semibold cursor-pointer p-1 text-xl text-white">Contact</p>
              </NavLink>

              
                <NavLink to="Tel: 123-456-7890" className="font-semibold cursor-pointer p-1 text-xl text-white">123-456-7890</NavLink>
              

              
                <NavLink to="mailto : info@mysite.com" className="text-xl font-semibold p-1 cursor-pointer text-white">info@mysite.com</NavLink>
              

            </div>
          
          </div>
          
          <div className="w-1/5">
          
              <div className="flex flex-col p-3  pl-4">
                  
                  <NavLink to="/" >
                    <p className="font-semibold cursor-pointer p-1 text-xl text-white">FaceBook</p>
                  </NavLink>

                  <NavLink to="/" >
                    <p className="font-semibold cursor-pointer p-1 text-xl text-white">Instagram</p>
                  </NavLink>

                  <NavLink to="/" >
                    <p className="text-xl font-semibold p-1 cursor-pointer text-white">Pinterest</p>
                  </NavLink>

                </div>
          
          </div>

          <div className="w-1/5"></div>
        
        </div>

        <div className="bg-slate-600 h-12 w-full flex items-center justify-center"> 
          <p className="text-white font-medium text-lg ">© 2035 by Tote. Powered and secured by Wix</p>
        </div>
        
    
    </div>
    
  )
}

export default Footer