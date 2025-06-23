/** @format */

import React, { useEffect, useState } from "react";
import styles from "./involve.module.css";
import involve from "./involve.json";
import image3 from "../../../../assets/Programme/TGT/image3.png";
import image4 from "../../../../assets/Programme/TGT/image4.png";
import image5 from "../../../../assets/Programme/TGT/image5.png";
import back from "../../../../assets/Programme/TGT/back.svg";
import { Link } from "react-router-dom";

export default function Involve() {
  const [isPopup, setIsPopup] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const Image = {
    "image1.png": image3,
    "image2.png": image4,
    "image3.png": image5,
  };

  function handlePopup(buttonText) {
    if (buttonText === "Share") {
      setIsPopup(true);
    }
  }

  function closePopup() {
    setIsPopup(false);
  }
  useEffect(() => {
    if (isPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure cleanup if component unmounts
    };
  }, [isPopup]);

  function handleCopy() {
    navigator.clipboard.writeText("https://octoberorange.org/#/donate-to-tgt");
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 2000);
  }

  return (
    <div className={styles.involve}>
      <div className={styles.container}>
        <h2>Get Involved</h2>
        <p>
          At TGT, we believe that everyone can make a difference, no matter how
          small. That is why we are inviting you to get involved with our
          mission to support Nigerian nonprofit organisations.
        </p>
        <p>Here are some specific examples of how you can get involved:</p>
        <div className={styles.container2}>
          {involve.map((data, index) => (
            <div key={index} className={styles.text}>
              <img src={Image[data.img]} alt='' />
              <div>
                <p>
                  {data.span}
                  <span>{data.text}</span>
                </p>
              </div>
              <button onClick={() => handlePopup(data.button)}>
                {data.button === "Share" ? (
                  <label>Share</label>
                ) : (
                  <Link to={data.link}>{data.button}</Link>
                )}
              </button>
            </div>
          ))}
        </div>
        <p>
          No matter how you choose to get involved, your support will make a
          difference. Together, we can make a positive impact on the lives of
          many people. Thank you for your support!
        </p>
      </div>
      <button>
        <Link to='/programmes'>
          <img src={back} alt='' />
          Back
        </Link>
      </button>

      {isPopup && (
        <div className={styles.popup} onClick={closePopup}>
          <div className={styles.popupContent}>
            <div>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.11107 9.70377L4.51834 12.2965C3.44441 13.3704 3.44441 15.1116 4.51834 16.1856L5.81471 17.482C6.88865 18.5559 8.62985 18.5559 9.70377 17.482L12.2966 14.8893M9.05562 12.9447L12.9447 9.05562M9.70377 7.11107L12.2965 4.51834C13.3704 3.44441 15.1116 3.44441 16.1856 4.51834L17.482 5.81471C18.5559 6.88865 18.5559 8.62985 17.482 9.70377L14.8893 12.2966'
                  stroke='currentColor'
                  stroke-width='1.3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span>https://octoberorange.org/#/donate-to-tgt</span>
            </div>
            <button onClick={handleCopy}>
              {" "}
              <svg
                width='13'
                height='17'
                viewBox='0 0 13 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.8155 5.01282L8.17742 0.191795C8.05958 0.0691421 7.89964 0.000156923 7.7329 0H5.66129C5.04962 0 4.46292 0.252585 4.03039 0.702196C3.59784 1.1518 3.35484 1.76159 3.35484 2.39744V3.48718H2.30645C1.69474 3.48718 1.10809 3.73976 0.675547 4.18938C0.242999 4.63898 0 5.24877 0 5.88462V14.6026C0 15.2384 0.242999 15.8482 0.675547 16.2978C1.10809 16.7474 1.69474 17 2.30645 17H8.17742C8.78909 17 9.37577 16.7474 9.80829 16.2978C10.2409 15.8482 10.4839 15.2384 10.4839 14.6026V13.5128H10.6935C11.3052 13.5128 11.8919 13.2603 12.3244 12.8106C12.757 12.361 13 11.7512 13 11.1154V5.44872C12.9934 5.28447 12.9275 5.12885 12.8155 5.01282ZM8.3871 2.23179L10.8529 4.79487H8.3871V2.23179ZM9.22581 14.6026C9.22581 14.8916 9.11535 15.1688 8.91875 15.3731C8.72216 15.5775 8.45545 15.6923 8.17742 15.6923H2.30645C2.0284 15.6923 1.76174 15.5775 1.56513 15.3731C1.36852 15.1688 1.25806 14.8916 1.25806 14.6026V5.88462C1.25806 5.5956 1.36852 5.31842 1.56513 5.11405C1.76174 4.90969 2.0284 4.79487 2.30645 4.79487H3.35484V11.1154C3.35484 11.7512 3.59784 12.361 4.03039 12.8106C4.46292 13.2603 5.04962 13.5128 5.66129 13.5128H9.22581V14.6026ZM10.6935 12.2051H5.66129C5.38326 12.2051 5.11655 12.0903 4.91995 11.886C4.72336 11.6816 4.6129 11.4044 4.6129 11.1154V2.39744C4.6129 2.10842 4.72336 1.83124 4.91995 1.62687C5.11655 1.42251 5.38326 1.30769 5.66129 1.30769H7.12903V5.44872C7.13121 5.62143 7.19814 5.78642 7.31564 5.90856C7.43315 6.03069 7.59192 6.10031 7.75806 6.10256H11.7419V11.1154C11.7419 11.4044 11.6315 11.6816 11.4349 11.886C11.2383 12.0903 10.9716 12.2051 10.6935 12.2051Z'
                  fill='currentColor'
                />
              </svg>
              Copy
            </button>
          </div>
        </div>
      )}

      {/* Copy Success Popup */}
      {isCopy && (
        <div className={styles.copySuccess}>
          <p>Copied successfully!</p>
        </div>
      )}
    </div>
  );
}
