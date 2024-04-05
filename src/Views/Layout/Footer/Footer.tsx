import Banner from "./Banner";

function Footer(props: { className?: string }) {
  //
  return (
    <footer
      className={
        props.className +
        " rtl:cairoArabic roboto-regular footer   flex flex-col z-20 text-center justify-center w-full "
      }
    >
      <Banner />
    </footer>
  );
}

export default Footer;
