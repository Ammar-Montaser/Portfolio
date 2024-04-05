import { useAppDispatch } from "../../../../Hooks/ReduxHooks";
import { appSliceActions } from "../../../../Redux/appSlice";

function HamburgerMenuItem(props: {
  text: string;
  handleHover: React.MouseEventHandler<HTMLAnchorElement>;
  handleHoverExit: React.MouseEventHandler<HTMLAnchorElement>;
  href: string;
}) {
  const dispatch = useAppDispatch();

  const toogleMenu = () => {
    window.document.body.classList.toggle("overflow-hidden");

    dispatch(appSliceActions.toogleMobileMenu());
  };
  return (
    <a
      className="poppins-regular p-4   z-50 dark:text-white text-black duration-700 hover:underline  hover:decoration-white hover:underline-offset-8 text-3xl "
      href={props.href}
      onClick={toogleMenu}
      onMouseOver={props.handleHover}
      onMouseLeave={props.handleHoverExit}
    >
      {props.text}
    </a>
  );
}

export default HamburgerMenuItem;
