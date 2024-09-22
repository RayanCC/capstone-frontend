import "../Footer/footer.scss";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import FooterNav from "./components/FooterNav/FooterNav";

const Footer = () => {
  return (
    <footer className="footer">
      <BackToTopButton />
      <FooterNav />
      <p className="footer-copyright">
        &copy;BlueFamily Inc. All Right Reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
