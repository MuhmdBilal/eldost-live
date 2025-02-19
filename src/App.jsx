
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Nav from "./Compounent/Nav/Nav";
import Landing from "./Compounent/Landing/Landing";
import Partner from "./Compounent/Partner/Partner";
import Footer from "./Compounent/Footer/Footer";
import MVP from "./Compounent/MVP/MVP";
import Properties from "./Compounent/Properties/Properties";
import Gold from "./Compounent/Gold/Gold";
import Platinum from "./Compounent/Platinum/Platinum";
import Diamond from "./Compounent/Diamond/Diamond";
import Bronze from "./Compounent/Bronze/Bronze";
import Silver from "./Compounent/Silver/Silver";
import AuthState from "./context/context";
import Staking from "./Compounent/Staking/Staking";
import BuyWVP from "./Compounent/BuyWVP/BuyWVP";
import StakigWMP from "./Compounent/StakigWMP/StakigWMP";
function App() {
  return (
    <>
      {/* <Nav />
      <Landing />

      <About />
      <Partner />

      <FAQ />
      <Partner />
      <Footer /> */}
      <AuthState>
      <BrowserRouter>
      <Nav />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/WMP" element={<MVP />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Gold" element={<Gold />} />
          <Route path="/Bronze" element={<Bronze />} />
          <Route path="/Silver" element={<Silver />} />
          <Route path="/Platinum" element={<Platinum />} />
          <Route path="/Diamond" element={<Diamond />} />
          <Route path="/staking" element={<Staking/>}/>
          <Route path="/BuyMVP" element={<BuyWVP/>}/>
          <Route path="/StakigMVP" element={<StakigWMP/>}/>
         
        </Routes>
      <Footer/>

      </BrowserRouter>
      </AuthState>
    </>
  );
}

export default App;
