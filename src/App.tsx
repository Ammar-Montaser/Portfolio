import { useEffect } from "react";
import "./App.css";
import "normalize.css";
import Nav from "./Views/Layout/NavBar/Nav";
import Preloader from "./Views/Screens/LoadingScreen/Preloader";
import Footer from "./Views/Layout/Footer/Footer";
import "./utils/il8n";
import { useAppDispatch, useAppSelector } from "./Hooks/ReduxHooks";
import { appSliceActions } from "./Redux/appSlice";
// import MainPage from "./Views/MainPage";
import { loadCompliment } from "./Redux/appSlice";
import MainPage from "./Views/MainPage";
import useTheme from "./Hooks/DarkMode";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ErrorScreen from "./Views/Screens/ErrorScreen/ErrorScreen";
function App() {
  const advice = useAppSelector((state) => state.app.compliment);
  const screenLoading = useAppSelector((state) => state.app.loading);
  const dispatch = useAppDispatch();

  useTheme();

  useEffect(() => {
    // fetch random advice from api to loading screen
    dispatch(loadCompliment()).then(() => {
      setTimeout(() => {
        dispatch(appSliceActions.loading());
      }, 5000);
    });

    // Check if the page has already loaded
  }, [dispatch]);

  function Home() {
    return (
      <div>
        {" "}
        {screenLoading && (
          <div className="h-screen relative overflow-hidden">
            {" "}
            <Nav className="fixed" />
            <Preloader advice={advice} />
            <Footer className="absolute bottom-0 " />
          </div>
        )}
        {!screenLoading ? (
          <div>
            <Nav className="fixed" />
            <div className="content">
              <MainPage />
            </div>
            <Footer className="absolute " />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
