import { AppRouteWrapper, HomeRouteWrapper } from "./components";
import {
  AboutPage,
  AppHomePage,
  AppOrderPage,
  AppPitchPage,
  AppSettingsPage,
  AppWalletPage,
  HomePage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeRouteWrapper />}>
          <Route path="/" element={<HomePage app="P2P APP" home="Home" contactus="ContactUs" faq="FAQs" login="Login" />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        <Route path="/app" element={<AppRouteWrapper />}>
          <Route index element={<AppHomePage />} />
          <Route path="order" element={<AppOrderPage />} />
          <Route path="pitch" element={<AppPitchPage />} />
          <Route path="wallet" element={<AppWalletPage />} />
          <Route path="settings" element={<AppSettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
