// import { Outlet } from 'react-router'
// import Navbar from '../components/Navbar'

// const RootLayout = () => {
//   return (
//     <div className='school'>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   )
// }

// export default RootLayout

// src/layouts/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* Shared navigation */}
      <Navbar />

      {/* Main content for each route */}
      <main>
        <Outlet />
      </main>

      {/* Shared footer */}
      
    </div>
  );
};

export default RootLayout;
