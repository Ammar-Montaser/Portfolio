import { useAppDispatch } from "../../../../Hooks/ReduxHooks";
import { appSliceActions } from "./../../../../Redux/appSlice";
import "./DarkModeButton.css";

function Toggle() {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      dispatch(appSliceActions.changeMode("light"));
      localStorage.setItem("theme", "light");
      document.documentElement.className = "light";
    } else {
      dispatch(appSliceActions.changeMode("dark"));
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
    }
  };

  return (
    <div className={"ml-8  "}>
      <div onClick={handleOnClick} className="orb"></div>

      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}
export default Toggle;
