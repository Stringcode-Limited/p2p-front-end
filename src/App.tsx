import { AppRouteWrapper, HomeRouteWrapper } from "./components";
import {
  AboutPage,
  AppHomePage,
  AppOrderPage,
  AppPitchPage,
  AppProfilePage,
  AppSignOutPage,
  AppWalletPage,
  HomePage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import EmailSmsVerification from "./pages/emailSmsVerification/EmailSmsVerification";
import Setup from "./pages/setupaccount/Setup";
import Buyusdt from "./pages/app/app-home-page/BuyUsdt/Buyusdt";
import ReleasingCryptoPage from "./pages/app/app-home-page/releasingCrypto/releasingCryptoPage/ReleasingCryptoPage";
import CryptoReleasedPage from "./pages/app/app-home-page/cryptoReleased/CryptoReleasedPage/CryptoReleasedPage";
import P2PSellPage from "./pages/app/app-home-page/p2pSell/P2PSellPage/P2PSellPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeRouteWrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/verification" element={<EmailSmsVerification/>}/>
          <Route path="/setup" element={<Setup/>}/>
        </Route>
        <Route path="/app" element={<AppRouteWrapper />}>
          <Route index element={<AppHomePage />} />
          <Route path="buyUSDT" element={<Buyusdt/>}/>
          <Route path="P2Psell" element={<P2PSellPage/>}/>
          <Route path="releasingcrypto" element={<ReleasingCryptoPage/>} />
          <Route path="cryptoreleased" element={<CryptoReleasedPage/>} />
          <Route path="order" element={<AppOrderPage />} />
          <Route path="pitch" element={<AppPitchPage />} />
          <Route path="wallet" element={<AppWalletPage />} />
          <Route path="profile" element={<AppProfilePage />} />
          <Route path="signout" element={<AppSignOutPage/>}/>
          </Route>
        
      </Routes>
    </>
  );
}

export default App;
