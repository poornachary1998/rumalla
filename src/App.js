import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Clients from "./components/Pages/Clients";
import Footer from "./components/Footer/Footer";
import Services from "./components/Pages/Services";
import BackDrop from "./components/Pages/backdrop/BackDrop";
import { useEffect, useState } from "react";
import CdiMainPage from "./components/ClientsPages/CdiMainPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MogasPage from "./components/ClientsPages/MogasPage";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const OpenContactInfo = () => {
    setShowContactInfo(true);
  };
  const CloseContactInfo = () => {
    setShowContactInfo(false);
  };
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  },[])
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header OpenContactInfo={OpenContactInfo} /> <Footer />
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/clients", element: <Clients /> },
        { path: "/clients/cdi", element: <CdiMainPage /> },
        { path: "/clients/mogas", element: <MogasPage /> },
        { path: "/services", element: <Services /> },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* <MogasPage /> */}
      {showContactInfo && <BackDrop CloseContactInfo={CloseContactInfo} />}
      <RouterProvider onUpdate={() => window.scrollTo(0, 0)} router={router} />
      
    </div>
  );
}

export default App;
