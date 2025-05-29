
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import ProductManagement from "./pages/paths/ProductManagement";
import UXResearch from "./pages/paths/UXResearch";
import ProductMarketing from "./pages/paths/ProductMarketing";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          <Route path="community" element={<Community />} />
          <Route path="paths">
            <Route path="product-management" element={<ProductManagement />} />
            <Route path="ux-research" element={<UXResearch />} />
            <Route path="product-marketing" element={<ProductMarketing />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
