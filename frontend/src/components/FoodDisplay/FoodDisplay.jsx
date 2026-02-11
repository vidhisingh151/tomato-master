// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../Context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'
// const FoodDisplay = ({category}) => {

//     const {food_list}=useContext(StoreContext)
//   return (

//     <div className='food-display' id='food-display'>
//         <h2>Top dishes near you</h2>
//         <div className="food-display-list">
//             {food_list.map((item,index)=>{
//                 if(category==="All" || category===item.category){

//                   return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//                 }
//             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay;


// import React from 'react'
// import './FoodDisplay.css'
// import { food_list } from '../../assets/assets'
// import FoodItem from '../FoodItem/FoodItem'
// import { StoreContext } from '../../Context/StoreContext';
// import { useContext } from 'react';


// const FoodDisplay = ({ category }) => {
  
//   return (

//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>

//       <div className='food-display-list'>
//         {food_list
//           .filter(item => category === "All" || item.category === category)
//           .map(item => (
//             // <FoodItem
//             //   key={item._id}
//             //   id={item._id}
//             //   name={item.name}
//             //   image={item.image}
//             //   price={item.price}
//             //   description={item.description}
//             // />

//             <FoodItem
//             key={item._id}
//               id={item._id}
//               name={item.name}
//               price={item.price}
//               description={item.description}
//               image={url + "/images/" + item.image}
//             />

//           ))}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay



import React from 'react'
import './FoodDisplay.css'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className='food-display-list'>
        {food_list
          .filter(item => category === "All" || item.category === category)
          .map(item => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
      </div>
    </div>
  )
}

export default FoodDisplay



// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../Context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = () => {

//   const { food_list } = useContext(StoreContext);

//   return (
//     <div className='food-display'>
//       {food_list.map(item => (
//         <FoodItem
//           key={item._id}
//           id={item._id}
//           name={item.name}
//           price={item.price}
//           description={item.description}
//           image={item.image}   // ✅ NO url prefix
          
//         />
//       ))}
//     </div>
//   );
// };

// export default FoodDisplay;
