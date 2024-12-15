import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center gap-4 border-b py-4">
      {/* Item Image */}
      <div className="w-28 h-28 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Item Details */}
      <div className="flex flex-col flex-grow">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          {/* Price */}
          <p className="text-green-600 font-bold text-lg">${item.price}</p>
          
          {/* Delete Button */}
          <div
            onClick={removeFromCart}
            className="cursor-pointer p-2 hover:bg-red-100 rounded transition duration-200"
          >
            <FcDeleteDatabase size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
