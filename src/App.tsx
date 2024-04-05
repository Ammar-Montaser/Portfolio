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

  return (
    <div className="layout duration-1000 ">
      <Nav className="fixed" />
      {screenLoading && (
        <div>
          <Preloader advice={advice} />
          <Footer className="absolute bottom-0" />
        </div>
      )}
      {!screenLoading ? (
        <div>
          {" "}
          <div className="content">
            <MainPage />
          </div>
          <Footer className="absolute " />
        </div>
      ) : null}
    </div>
  );
}

export default App;
