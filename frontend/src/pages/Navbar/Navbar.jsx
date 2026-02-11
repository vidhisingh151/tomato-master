

// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../Context/StoreContext';

// const Navbar = ({ setShowLogin }) => {

//   const [menu, setMenu] = useState("home");
//   const navigate = useNavigate();

//   const {
//     getTotalCartItems,
//     token,
//     setToken
//   } = useContext(StoreContext);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   return (
//     <div className='navbar'>

//       <Link to='/'>
//         <img src={assets.logo} className='logo' />
//       </Link>

//       <ul className='navbar-menu'>
//         <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
//         <a href='#explore-menu'>Menu</a>
//         <a href='#app-download'>Mobile-App</a>
//         <a href='#footer'>Contact Us</a>
//       </ul>

//       <div className="navbar-right">

//         <div className="navbar-search-icon">
//           <Link to='/cart'>
//             <img src={assets.basket_icon} alt="" />
//           </Link>

//           {getTotalCartItems() > 0 && (
//             <div className="cart-badge">
//               {getTotalCartItems()}
//             </div>
//           )}
//         </div>

//         {!token ? (
//           <button onClick={() => setShowLogin(true)}>Sign in</button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_icon} />
//             <ul className="nav-profile-dropdown">
//               <li onClick={() => navigate('/myorders')}>
//                 <img src={assets.bag_icon} />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const { getTotalCartItems, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} className='logo' />
      </Link>

      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu'>Menu</a>
        <a href='#app-download'>Mobile-App</a>
        <a href='#footer'>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} />
          </Link>

          {getTotalCartItems() > 0 && (
            <div className="cart-badge">{getTotalCartItems()}</div>
          )}
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
