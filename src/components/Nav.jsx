import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div className=" flex justify-center">
    
        <ul className="flex p-4 ">
        
          <li className="p-3 text-2xl font-semibold hover:text-red-500">
             <NavLink to="/">
                   Home
             </NavLink>
          </li>

          <li className="p-3 text-2xl font-semibold hover:text-red-500">
             <NavLink to="/shop">
                   Shop
             </NavLink>
          </li>


        </ul>

    </div>
  )
}

export default Nav