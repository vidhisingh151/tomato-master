// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'
// const FoodItem= ({id,name,price,description,image}) => {
  

//   const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  
  
//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={url+"/images/"+image} alt=''/>
//             {!cartItems[id]
//               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/> 
//               :<div className='food-item-counter'>  
//                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
//                 <p>{cartItems[id]}</p>
//                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/> 
//               </div>  
//               }  
//         </div>
      
//         <div className="food-item-info">  
//         <div className="food-item-name-rating">  
//             <p>{name}</p>  
//             <img src={assets.rating_starts} alt="" />  
//         </div>  
//         <p className="food-item-desc">{description}</p>  
//         <p className="food-item-price">${price}</p>  
//         </div>  
//     </div>
//   )
// }

// export default FoodItem;


// import React from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'

// const FoodItem = ({ id, name, price, description, image }) => {
//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />

//         <div className='food-item-counter'>
//           <img src={assets.add_icon_white} alt="" />
//         </div>
//       </div>

//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>

//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem




// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { StoreContext } from '../../Context/StoreContext'
// import { assets } from '../../assets/assets'

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { addToCart } = useContext(StoreContext)

//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img className="food-item-image" src={image} alt={name} />

//         {/* PLUS ICON */}
//         <img
//           className="add"
//           src={assets.add_icon_white}
//           alt="add"
//           onClick={() => addToCart(id)}
//         />
//       </div>

//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//         </div>

//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem






import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />

        <div className='food-item-counter'>
          {!cartItems[id] ? (
            // ➕ when item not in cart
            <img
              src={assets.add_icon_white}
              alt="add"
              onClick={() => addToCart(id)}
            />
          ) : (
            // ➖ count ➕ when item is in cart
            <>
              <img
                src={assets.remove_icon_red}
                alt="remove"
                onClick={() => removeFromCart(id)}
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt="add"
                onClick={() => addToCart(id)}
              />
            </>
          )}
        </div>
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem











// import React from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'

// const FoodItem = ({ id, name, price, description, image }) => {
//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />

//         <div className='food-item-counter'>
//           <img src={assets.add_icon_white} alt="" />
//         </div>
//       </div>

//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>

//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem







// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'

// const FoodItem = ({ id, name, price, description, image }) => {

//   const { addToCart } = useContext(StoreContext)

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />

//         <div className='food-item-counter'>
//           <img
//             src={assets.add_icon_white}
//             alt="add"
//             onClick={() =>
//                addToCart(id)
              
//               }
//           />
//         </div>
//       </div>

//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="rating" />
//         </div>

//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem


















// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'

// const FoodItem = ({ id, name, price, description, image }) => {

//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />

//         <div className='food-item-counter'>
//           {!cartItems[id] ? (
//             // ➕ when item not in cart
//             <img
//               src={assets.add_icon_white}
//               alt="add"
//               onClick={() => addToCart(id)}
//             />
//           ) : (
//             // ➖ count ➕ when item is in cart
//             <>
//               <img
//                 src={assets.remove_icon_red}
//                 alt="remove"
//                 onClick={() => removeFromCart(id)}
//               />
//               <p>{cartItems[id]}</p>
//               <img
//                 src={assets.add_icon_green}
//                 alt="add"
//                 onClick={() => addToCart(id)}
//               />
//             </>
//           )}
//         </div>
//       </div>

//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="rating" />
//         </div>

//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem








// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'

// const FoodItem = ({ id, name, price, description, image }) => {

//   const { addToCart } = useContext(StoreContext)

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />

//         <div className='food-item-counter'>
//           <img
//             src={assets.add_icon_white}
//             alt="add"
//             onClick={() => addToCart(id)}   // ✅ THIS WAS MISSING
//           />
//         </div>
//       </div>

//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>

//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem




// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'

// const FoodItem = ({ id, name, price, description, image }) => {

//   const { addToCart, cartItems, removeFromCart } = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />

//         {/* CART CONTROLS */}
//         {!cartItems[id] ? (
//           <div className='food-item-counter'>
//             <img
//               src={assets.add_icon_white}
//               alt="add"
//               onClick={() => addToCart(id)}
//             />
//           </div>
//         ) : (
//           <div className='food-item-counter'>
//             <img
//               src={assets.remove_icon_red}
//               alt="remove"
//               onClick={() => removeFromCart(id)}
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               src={assets.add_icon_green}
//               alt="add"
//               onClick={() => addToCart(id)}
//             />
//           </div>
//         )}
//       </div>

//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>

//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem











// import React, { useContext } from "react";
// import "./FoodItem.css";
// import { StoreContext } from "../../Context/StoreContext";

// const FoodItem = ({ _id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart, url } =
//     useContext(StoreContext);

//   return (
//     <div className="food-item">
//       <img src={url + "/images/" + image} alt="" />

//       <div className="food-item-info">
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <p>${price}</p>

//         {!cartItems[_id] ? (
//           <button onClick={() => addToCart(_id)}>+</button>
//         ) : (
//           <div className="food-item-counter">
//             <button onClick={() => removeFromCart(_id)}>-</button>
//             <p>{cartItems[_id]}</p>
//             <button onClick={() => addToCart(_id)}>+</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
