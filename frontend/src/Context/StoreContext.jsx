


// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {

//   const url = "http://localhost:5000";

//   const [food_list, setFoodList] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState("");

//   // ✅ ADD TO CART
//   const addToCart = async (itemId) => {
//     setCartItems(prev => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1
//     }));

//     if (token) {
//       await axios.post(
//         url + "/api/cart/add",
//         { itemId },
//         { headers: { token } }
//       );
//     }
//   };

//   // ✅ REMOVE FROM CART
//   const removeFromCart = async (itemId) => {
//     setCartItems(prev => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1
//     }));

//     if (token) {
//       await axios.post(
//         url + "/api/cart/remove",
//         { itemId },
//         { headers: { token } }
//       );
//     }
//   };

//   // ✅ TOTAL CART AMOUNT (₹ / $)
//   const getTotalCartAmount = () => {
//     let total = 0;
//     for (const itemId in cartItems) {
//       const product = food_list.find(p => p._id === itemId);
//       if (product && cartItems[itemId] > 0) {
//         total += product.price * cartItems[itemId];
//       }
//     }
//     return total;
//   };

//   // ✅ TOTAL CART ITEMS (BADGE COUNT)
//   const getTotalCartItems = () => {
//     let total = 0;
//     for (const itemId in cartItems) {
//       total += cartItems[itemId];
//     }
//     return total;
//   };

//   // ✅ FETCH FOOD
//   const fetchFoodList = async () => {
//     const res = await axios.get(url + "/api/food/list");
//     setFoodList(res.data.data);
//   };

//   useEffect(() => {
//     fetchFoodList();

//     const savedToken = localStorage.getItem("token");
//     if (savedToken) {
//       setToken(savedToken);
//     }
//   }, []);

//   return (
//     <StoreContext.Provider
//       value={{
//         food_list,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         getTotalCartItems,
//         url,
//         token,
//         setToken
//       }}
//     >
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;







import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { food_list as localFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const url = "http://localhost:5000"; // 🔥 BACKEND URL

  const [food_list, setFoodList] = useState(localFoodList);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // ---------------- CART ----------------
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      const food = food_list.find(f => f._id === item);
      if (food) total += food.price * cartItems[item];
    }
    return total;
  };

  // ---------------- BACKEND FOOD (OPTIONAL) ----------------
  const fetchFoodList = async () => {
    try {
      const res = await axios.get(url + "/api/food/list");
      setFoodList(res.data.data);
    } catch (err) {
      console.log("Backend not running, using local food list");
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalCartAmount,
    token,
    setToken,
    url
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
