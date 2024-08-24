import "../Footer/footer.scss";
import BackToTopButton from "../BackToTopButton/BackToTopButton";


const Footer = () => {
    return (
      <div className="footer">
        <BackToTopButton />
        <p className="footer-copyright">&copy;BlueFamily Inc. All Right Reserved. </p>
      </div>
    );
  };
  
  export default Footer;