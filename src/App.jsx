import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";




import AboutWhy from "./pages/about/AboutWhy";
import AboutCode from "./pages/about/AboutCode";
import AboutHis from "./pages/about/AboutHis";
import AdmissionJuniorPage from "./pages/admissions/AdmissionJuniorPage/AdmissionJuniorPage";
import AdmissionSeniorPage from "./pages/admissions/AdmissionSeniorPage/AdmissionSeniorPage";
import AdmissionForm from "./pages/Admissionform/AdmissionForm";


function App() {
  const Layout = () => {
    return (
     
      <div className="app">
      
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      

      </div>

    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
       
        {
          path: "/aboutwhy",
          element: <AboutWhy />,
        },
        {
          path: "/aboutcode",
          element: <AboutCode />,
        },
        {
          path: "/abouthis",
          element: <AboutHis />,
        },
      
        {
          path: "/admissionjunior",
          element: <AdmissionJuniorPage />,
        },
        {
          path: "/admissionsenior",
          element: <AdmissionSeniorPage/>,
        },
      
      ],
    },
    
    {
      path: "/admissionform",
      element: <AdmissionForm/>,
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;