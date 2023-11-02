import styles from "./About.module.css";
import club from "../assets/club.jpg";
import corporate from "../assets/hotel-security.jpg";
import retail from "../assets/retail-security.jpg";
import service from "../assets/service.png";
import suit from "../assets/suit.png";
import quality from "../assets/quality.png";

const About = () => {
  return (
    <>
      <div className={styles.cont2cont}>
        <div className={styles.cont3cont}>
          <h1>Our promise</h1>
          <div className={styles.cont3}>
            <div className={styles.promisecont}>
              <div className={styles.card2}>
                <img
                  src={service}
                  alt="Hospitality"
                  className={styles.overlapImage2}
                />
                <h5>Exceptional Customer Service:</h5>
                <p>
                  We promise to deliver unparalleled customer service. Our
                  dedicated team will be readily available to address your
                  concerns and answer your questions.
                </p>
              </div>
              <div className={styles.card2}>
                <img
                  src={suit}
                  alt="Hospitality"
                  className={styles.overlapImage2}
                />
                <h5>Tailored Solutions:</h5>
                <p>
                  We understand that every client is unique, and so are their
                  security needs. We promise to provide you with personalized
                  security solutions that fit your specific requirements.
                </p>
              </div>
              <div className={styles.card2}>
                <img
                  src={quality}
                  alt="Hospitality"
                  className={styles.overlapImage2}
                />
                <h5>High-Quality officers:</h5>
                <p>
                  We promise to provide the highest quality of service. Our
                  commitment to excellence means that you can rely on us for
                  superior security solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.first}>
          <h1>Bespoke security, tailored to your needs</h1>
          <br />
          <h5>
            At Brown's Security, we pride ourselves on being the premier
            security provider in Newcastle upon Tyne. Our mission is clear: to
            offer bespoke security solutions to the hospitality, retail, and
            corporate sectors...
          </h5>
        </div>
        <div className={styles.cont2}>
          <div className={styles.servicecont}>
            <div className={styles.card}>
              <img
                src={club}
                alt="Hospitality"
                className={styles.overlapImage}
              />
              <h5>Hospitality</h5>
              <p>Creating safe and memorable occasions.</p>
            </div>
            <div className={styles.card}>
              <img
                src={corporate}
                alt="Hospitality"
                className={styles.overlapImage}
              />
              <h5>Retail</h5>
              <p>
                Protecting your store and your <br /> Profits.
              </p>
            </div>
            <div className={styles.card}>
              <img
                src={retail}
                alt="Hospitality"
                className={styles.overlapImage}
              />
              <h5>Corporate</h5>
              <p>Uninterrupted Operations.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
