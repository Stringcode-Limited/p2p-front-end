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
import Login from "./pages/home/login/Login";
import Signup from "./pages/home/signup/Signup";
import EmailSmsVerification from "./pages/home/emailSmsVerification/EmailSmsVerification";
import Setup from "./pages/home/setupaccount/Setup";
import ReleasingCryptoPage from "./pages/app/app-home-page/releasingCrypto/releasingCryptoPage/ReleasingCryptoPage";
import CryptoReleasedPage from "./pages/app/app-home-page/cryptoReleased/CryptoReleasedPage/CryptoReleasedPage";
import P2PSellPage from "./pages/app/app-home-page/p2pSell/P2PSellPage/P2PSellPage";
import CryptoSold from "./pages/app/app-home-page/cryptoSold/CryptoSoldPage/CryptoSold";
import WaitingPaymentPage from "./pages/app/app-home-page/waitingPayment/waitingPaymentPage/WaitingPaymentPage";
import SellUsdtPage from "./pages/app/app-home-page/sellUsdt/sellUsdtPage/SellUsdtPage";
import ManageCryptoPage from "./pages/app/app-wallet-page/ManageCrypto/ManageCryptoPage/ManageCryptoPage"
import TransferPage from "./pages/app/app-wallet-page/Transfer/TransferPage/TransferPage";
import VerifyWithPinPage from "./pages/app/app-wallet-page/VerifyWithPin/VerifyWithPinPage/VerifyWithPinPage";
import CompletePage from "./pages/app/app-wallet-page/complete/CompletePage/CompletePage";
import MakePaymentPage from "./pages/app/app-home-page/Makepayment/Makepaymentpage/MakePaymentPage";
import TransactiondetailPage from './pages/app/app-wallet-page/Transactiondetail/Transactiondetailpage/TransactiondetailPage';
import OrderBodyPage from "./pages/app/app-home-page/OrderCreated/OrderBodypage/OrderBodyPage";
import FundPage from "./pages/app/app-wallet-page/Fund/FundPage/FundPage";
import BuyUsdtPage from "./pages/app/app-home-page/BuyUsdt/BuyusdtPage/BuyUsdtPage";
import TermsandRules from "./pages/home/termsandRules/TermsandRules";


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
          <Route path="/termsandRules" element={<TermsandRules/>}/>
        </Route>
        <Route path="/app" element={<AppRouteWrapper />}>
          <Route index element={<AppHomePage />} />
          <Route path="OrderCreated" element={<OrderBodyPage/>}/>
          <Route path="Makepayment" element={<MakePaymentPage/>}/>
          <Route path="Transactiondetail" element={<TransactiondetailPage/>}/>
          <Route path="BuyUsdt" element={<BuyUsdtPage/>}/>
          <Route path="P2Psell" element={<P2PSellPage/>}/>
          <Route path="releasingcrypto" element={<ReleasingCryptoPage/>} />
          <Route path="cryptoreleased" element={<CryptoReleasedPage/>} />
          <Route path="cryptosold" element={<CryptoSold/>}/>
          <Route path="waitingPayment" element={<WaitingPaymentPage/>}/>
          <Route path="sellUsdt" element={<SellUsdtPage/>}/>
          <Route path="order" element={<AppOrderPage />} />
          <Route path="pitch" element={<AppPitchPage />} />
          <Route path="wallet" element={<AppWalletPage />} />
          <Route path="wallet/transactiondetails" element={<TransactiondetailPage />} />
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
