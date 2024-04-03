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
import Order from "./pages/app/app-home-page/Ordercreated/Order";
import MakePayment from "./pages/app/app-home-page/Makepayment/MakePayment";
import ReleasingCryptoPage from "./pages/app/app-home-page/releasingCrypto/releasingCryptoPage/ReleasingCryptoPage";
import CryptoReleasedPage from "./pages/app/app-home-page/cryptoReleased/CryptoReleasedPage/CryptoReleasedPage";
import P2PSellPage from "./pages/app/app-home-page/p2pSell/P2PSellPage/P2PSellPage";
import CryptoSold from "./pages/app/app-home-page/cryptoSold/CryptoSoldPage/CryptoSold";
import WaitingPaymentPage from "./pages/app/app-home-page/waitingPayment/waitingPaymentPage/WaitingPaymentPage";
import SellUsdtPage from "./pages/app/app-home-page/sellUsdt/sellUsdtPage/SellUsdtPage";
import ManageCryptoPage from "./pages/app/app-wallet-page/ManageCrypto/ManageCryptoPage/ManageCryptoPage";
import TransferPage from "./pages/app/app-wallet-page/Transfer/TransferPage/TransferPage";
import VerifyWithPinPage from "./pages/app/app-wallet-page/VerifyWithPin/VerifyWithPinPage/VerifyWithPinPage";
import CompletePage from "./pages/app/app-wallet-page/complete/CompletePage/CompletePage";
import FundPage from "./pages/app/app-wallet-page/Fund/FundPage/FundPage";
// import transactionDetails from './pages/app/app-home-page/Transactiondetails/transactionDetails';

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
          <Route path="orderCreated" element={<Order/>}/>
          <Route path="Makepayment" element={<MakePayment/>}/>
          <Route path="buyUSDT" element={<Buyusdt/>}/>
          <Route path="P2Psell" element={<P2PSellPage/>}/>
          <Route path="releasingcrypto" element={<ReleasingCryptoPage/>} />
          <Route path="cryptoreleased" element={<CryptoReleasedPage/>} />
          <Route path="cryptosold" element={<CryptoSold/>}/>
          <Route path="waitingPayment" element={<WaitingPaymentPage/>}/>
          <Route path="sellUsdtPage" element={<SellUsdtPage/>}/>
          <Route path="order" element={<AppOrderPage />} />
          <Route path="pitch" element={<AppPitchPage />} />
          <Route path="wallet" element={<AppWalletPage />} />
          {/* <Route path="transactiondetails" element={<TransactionDetails />} /> */}
          <Route path="wallet/manageCrypto" element={<ManageCryptoPage/>} />
          <Route path="wallet/transfer" element={<TransferPage/>} />
          <Route path="wallet/verifywithpin" element={<VerifyWithPinPage/>} />
          <Route path="wallet/complete" element={<CompletePage/>} />
          <Route path="wallet/fund" element={<FundPage/>} />
          <Route path="profile" element={<AppProfilePage />} />
          <Route path="signout" element={<AppSignOutPage/>}/>
          </Route>
        
      </Routes>
    </>
  );
}

export default App;
