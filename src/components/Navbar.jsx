import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-800 shadow-md">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4 lg:px-6">
        {/* Logo */}
        <NavLink to="/">
          <div className="ml-2">
            <img src="logo.png" alt="Logo" className="h-14 w-auto" />
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center font-medium text-slate-100 space-x-8">
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green-400 transition duration-200 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Cart Link */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-white hover:text-green-400 transition duration-200" />
            {cart.length > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                items-center justify-center animate-bounce rounded-full text-white"
              >
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
