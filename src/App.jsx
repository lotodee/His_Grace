import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./mainpages/homepage/Home";




import AboutWhy from "./mainpages/about/awhy/Aboutwhy";
import AboutCode from "./mainpages/about/acode/AboutCode";
import AboutHis from "./mainpages/about/ahis/AboutHis";
import AdmissionJuniorPage from "./mainpages/admissions/AdmissionJuniorPage/AdmissionJuniorPage";
import AdmissionSeniorPage from "./mainpages/admissions/AdmissionSeniorPage/AdmissionSeniorPage";
import AdmissionForm from "./mainpages/Admissionform/AdmissionForm";


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