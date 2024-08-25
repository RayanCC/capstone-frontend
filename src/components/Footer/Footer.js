import "../Footer/footer.scss";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import FooterNav from "../FooterNav/FooterNav";


const Footer = () => {
    return (
      <div className="footer">
        <BackToTopButton />
        <FooterNav />
        <p className="footer-copyright">&copy;BlueFamily Inc. All Right Reserved. </p>
      </div>
    );
  };
  
  export default Footer;