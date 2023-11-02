import styles from "./Hero.module.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <div className={styles.bg}>
        <img alt="Logo" src={logo}></img>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/company/89610561/admin/feed/posts/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.linked}
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550298382617"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.linked}
              icon={faInstagram}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550298382617"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.linked}
              icon={faFacebookSquare}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <h1>100%</h1>
            <h5>Shift coverage</h5>
          </div>
          <div>
            <h1>24/7</h1>
            <h5>communication</h5>
          </div>
          <div>
            <h1>100%</h1>
            <h5>client satisfaction</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
