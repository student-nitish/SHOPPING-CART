import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-lg font-semibold mb-2">
              Total Items: <span className="font-normal">{cart.length}</span>
            </p>
            <p className="text-lg font-semibold mb-4">
              Total Amount:{" "}
              <span className="font-bold text-green-600">${totalAmount}</span>
            </p>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200"
            >
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
