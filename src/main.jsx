// // import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import './index.css';
// import App from './App.jsx';
// import ProtectedRoute from './ProtectedRoute';
// import Login from './Login';
// import Register from './Register';
// import Logout from './Logout';
// import { AuthProvider } from './AuthContext';

// // layouts & routes from App.jsx
// import RootLayout from './layouts/RootLayout';
// import ProgramLayout from './layouts/ProgramLayout';
// import Home from './routes/Home';
// import About from './routes/About';
// import Facility from './routes/Facility';
// import Admission from './routes/Admission';
// import Contact from './routes/Contact';
// import UndergraduatePrograms, { programsLoader } from './routes/UndergraduatePrograms';
// import ProgramDetails, { programDetailsLoader } from './routes/ProgramDetails';
// import Error from './components/Error';
// import { StrictMode } from 'react';



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       {/* Public routes */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/logout" element={<Logout />}/>

//       {/* Protected routes */}
//       <Route path="/" element={<ProtectedRoute><RootLayout /></ProtectedRoute>} errorElement={<Error />}>
//         <Route index element={<Home />} />
//         <Route path="home" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="facility" element={<Facility />} />
//         <Route path="apply" element={<Admission />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="programs" element={<ProgramLayout />}>
//           <Route index element={<UndergraduatePrograms />} loader={programsLoader} />
//           <Route path=":id" element={<ProgramDetails />} loader={programDetailsLoader} />
        
//         </Route>
//       </Route>
//     </>
//   )
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>,
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import { AuthProvider } from './AuthContext';

// layouts & routes
import RootLayout from './layouts/RootLayout';
import ProgramLayout from './layouts/ProgramLayout';

// pages
import Home from './routes/Home';
import About from './routes/About';
import Facility from './routes/Facility';
import Admission from './routes/Admission';
import Contact from './routes/Contact';
import UndergraduatePrograms from './routes/UndergraduatePrograms';
import ProgramDetails from './routes/ProgramDetails';

// error page
import Error from './components/Error';

// ✅ Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={<ProtectedRoute><RootLayout /></ProtectedRoute>}
        errorElement={<Error />}
      >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="facility" element={<Facility />} />
        <Route path="apply" element={<Admission />} />
        <Route path="contact" element={<Contact />} />

        {/* Programs */}
        <Route path="programs" element={<ProgramLayout />}>
          <Route index element={<UndergraduatePrograms />} />
          <Route path=":id" element={<ProgramDetails />} />
        </Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
