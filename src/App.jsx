// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { 
//   createBrowserRouter, 
//   createRoutesFromElements, 
//   Route, 
//   RouterProvider,
// } from "react-router-dom";

// // Components
// // import Navbar from "./components/Navbar";
// import ProgramError from "./components/ProgramError";
// import Error from "./components/Error";

// // Routes
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Facility from "./routes/Facility";
// import Admission from "./routes/Admission";
// import Contact from "./routes/Contact";
// import UndergraduatePrograms, { programsLoader } from "./routes/UndergraduatePrograms";
// import ProgramDetails, { programDetailsLoader } from "./routes/ProgramDetails";

// //layout import
// import RootLayout from "./layouts/RootLayout";
// import ProgramLayout from "./layouts/ProgramLayout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home/>} />
//       <Route path="home" element={<Home/>}/>
//       <Route path="about" element={<About />} />
//       <Route path="facility" element={<Facility />} />
//       <Route path="programs" element={<ProgramLayout />} >

//         <Route 
//           index
//           element={<UndergraduatePrograms />} 
//           loader={programsLoader}
//         />
//         <Route 
//           path=":id" 
//           element={<ProgramDetails />}
//           loader={programDetailsLoader}
//         />
//       </Route>
//       <Route path="contact" element={<Contact />} />
//       <Route path="apply" element={<Admission />} />
//       <Route path="*" element={<Error />} />
//     </Route>
//   )
// );

// import { Routes, Route } from "react-router-dom";

// // Routes
// import Logout from "./Logout";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Facility from "./routes/Facility";
// import Admission from "./routes/Admission";
// import Contact from "./routes/Contact";
// import UndergraduatePrograms, { programsLoader } from "./routes/UndergraduatePrograms";
// import ProgramDetails, { programDetailsLoader } from "./routes/ProgramDetails";

// // Layouts
// import RootLayout from "./layouts/RootLayout";
// import ProgramLayout from "./layouts/ProgramLayout";
// import Error from "./components/Error";
// import ProgramError from "./components/ProgramError";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<RootLayout />}>
//         {/* Homepage */}
//         <Route index element={<Home />} />
//         <Route path="home" element={<Home />} />

//         {/* Other pages */}
//         <Route path="about" element={<About />} />
//         <Route path="facility" element={<Facility />} />
//         <Route path="apply" element={<Admission />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="logout" element={<Logout />} />

//         {/* Programs with nested routes */}
//         <Route path="programs" element={<ProgramLayout />} errorElement={<ProgramError />}>
//           <Route index element={<UndergraduatePrograms />} loader={programsLoader} />
//           <Route path=":id" element={<ProgramDetails />} loader={programDetailsLoader} />
//         </Route>

//         {/* 404 fallback */}
//         <Route path="*" element={<Error />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

// src/App.jsx
// import { 
//   createBrowserRouter, 
//   createRoutesFromElements, 
//   Route, 
//   RouterProvider,
// } from "react-router-dom";

// // Components
// import ProgramError from "./components/ProgramError";
// import Error from "./components/Error";

// // Routes
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Facility from "./routes/Facility";
// import Admission from "./routes/Admission";
// import Contact from "./routes/Contact";
// import UndergraduatePrograms, { programsLoader } from "./routes/UndergraduatePrograms";
// import ProgramDetails, { programDetailsLoader } from "./routes/ProgramDetails";

// // Layouts
// import RootLayout from "./layouts/RootLayout";
// import ProgramLayout from "./layouts/ProgramLayout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       {/* Homepage */}
//       <Route index element={<Home />} />

//       {/* Other pages */}
//       <Route path="about" element={<About />} />
//       <Route path="facility" element={<Facility />} />
//       <Route path="apply" element={<Admission />} />
//       <Route path="contact" element={<Contact />} />

//       {/* Programs section with nested routes */}
//       <Route path="programs" element={<ProgramLayout />} errorElement={<ProgramError />}>
//         <Route 
//           index 
//           element={<UndergraduatePrograms />} 
//           loader={programsLoader} 
//         />
//         <Route 
//           path=":id" 
//           element={<ProgramDetails />} 
//           loader={programDetailsLoader} 
//         />
//       </Route>

//       {/* Catch-all for 404 */}
//       <Route path="*" element={<Error />} />
//     </Route>
//   )
// );

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;


import { Routes, Route } from "react-router-dom";

// Routes
import Logout from "./Logout";
import Home from "./routes/Home";
import About from "./routes/About";
import Facility from "./routes/Facility";
import Admission from "./routes/Admission";
import Contact from "./routes/Contact";
import UndergraduatePrograms from "./routes/UndergraduatePrograms";
import ProgramDetails from "./routes/ProgramDetails";

// Layouts
import RootLayout from "./layouts/RootLayout";
import ProgramLayout from "./layouts/ProgramLayout";
import Error from "./components/Error";
import ProgramError from "./components/ProgramError";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Homepage */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />

        {/* Other pages */}
        <Route path="about" element={<About />} />
        <Route path="facility" element={<Facility />} />
        <Route path="apply" element={<Admission />} />
        <Route path="contact" element={<Contact />} />
        <Route path="logout" element={<Logout />} />

        {/* Programs with nested routes */}
        <Route path="programs" element={<ProgramLayout />} errorElement={<ProgramError />}>
          <Route index element={<UndergraduatePrograms />} />
          <Route path=":id" element={<ProgramDetails />} />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
