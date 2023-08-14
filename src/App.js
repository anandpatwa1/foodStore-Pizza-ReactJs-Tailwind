import { Provider } from "react-redux";
import store from "./store/store";
import BestPizza from "./components/BestPizza";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProdectsA from "./components/ProdectsA";
import SectionB from "./components/SectionB";
import SpecialCombo from "./components/SpecialCombo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Admin from "./components/fonalOrder/Admin";


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="bg-slate-100 text-gray-900 ">
          <Routes>
            <Route path="/" element={
              <div>
                <Navbar />
                <HeroSection />
                <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" className="btn btn-xs">1</a>
                  <a href="#item2" className="btn btn-xs">2</a>
                  <a href="#item3" className="btn btn-xs">3</a>
                  <a href="#item4" className="btn btn-xs">4</a>
                </div>
                <Offer />
                <BestPizza />
                <ProdectsA />
                <SectionB />
                <SpecialCombo />
                <Review />
                <Footer />
              </div>
            } />
            <Route path="/cart" element={
              <div>
                <Navbar />
                <Cart />
                <Footer />
              </div>
            } />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Provider>
    </Router >
  );
}

export default App;
