import styles from "./Footer.module.css";
import ContactForm from "./Contactform";

const Footer = () => {
  return (
    <div className={styles.bg}>
      <footer className={styles.footer}>
        <div className={styles.contactform}>
          <div className={styles.contacttitle}>
            <h3>Want to know more?</h3>
            <h4>Contact Us...</h4>
          </div>
          <ContactForm />
        </div>

        <div className={styles.footertext}>
          <div className={styles.text}>
            <h4>Phone:</h4>
            <p> +44 (0) Enter number</p>
            <h4>Opening Hours:</h4>
            <p>Monday-Friday: 9am-6pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
