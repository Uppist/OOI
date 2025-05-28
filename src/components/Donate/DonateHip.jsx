/** @format */

import React, { useEffect, useState } from "react";
import styles from "./donate.module.css";
import pageConfig from "./PageLocation";
import generateRandom from "./RandomNumbers";
import axios from "axios";
import down from "../../assets/Donate/down.svg";

import { useLocation } from "react-router-dom";
import InputField from "./Input";
import DonationButton from "./DonationButton";

export default function DonateHip() {
  const [isData, setIsData] = useState({
    firstName: "",
    middleName: "",
    Surname: "",
    phone_number: "",
    amount: "",
    frequency: "",
    title: "",
    email: "",
  });

  function Details(e) {
    setIsData({ ...isData, [e.target.name]: e.target.value });
  }

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Title");

  const options = ["Mr.", "Mrs.", "Miss", "Dr."];

  function Dropdown() {
    setIsDropDown((prev) => !prev);
  }

  function Select(options) {
    setSelectedOption(options);
    setIsDropDown(false);
  }

  const currentConfig = pageConfig[location.pathname];
  const color = currentConfig.color;
  const [generatedCode, setGeneratedCode] = useState("");
  useEffect(() => {
    setGeneratedCode(generateRandom(5));
  }, []);

  const newReference = currentConfig.reference + "_" + generatedCode;

  const data = {
    email: isData.email,
    amount: isData.amount,
    first_name: isData.firstName,
    phone_number: isData.phone_number,
    last_name: isData.Surname,
    middle_name: isData.middleName,
    subaccount_code: currentConfig.code,
    reference: newReference,

    account_name: currentConfig.name,
  };
  const [isError, setIsError] = useState({});

  function Error() {
    const errors = {};
    if (!isData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!isData.amount) {
      errors.amount = "Amount is required";
    }
    if (!isData.middleName) {
      errors.middleName = "Middle Name is required";
    }
    if (!isData.Surname) {
      errors.Surname = "Surname is required";
    }
    if (!isData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(isData.email)) {
      errors.email = "Email is invalid";
    }
    if (!isData.phone_number) {
      errors.phone_number = "Phone Number is required";
    }
    setIsError(errors);
    return errors;
  }

  function Submit(e) {
    e.preventDefault();
    const errors = Error();

    // If there are any errors, don't submit
    if (Object.keys(errors).length > 0) {
      console.log("Form has errors:", errors);
      return;
    }
    console.log("data", data);

    axios
      .post("https://api.luround.com/v1/payments/initialize-ooi-payment", data)
      .then((res) => {
        window.location.href = res.data;
        console.log("data", data);
      });
  }

  return (
    <div className={styles.donate}>
      <form onSubmit={Submit}>
        <div className={styles.logoName}>
          <h2 style={{ color }}>Donate</h2>
          <span style={{ color }}>{currentConfig.title}</span>
        </div>
        <DonationButton
          color={color}
          currentConfig={currentConfig}
          isData={isData}
          setIsData={setIsData}
          Details={Details}
          isError={isError}
        />
        <div className={styles.information}>
          <label htmlFor=''>Personal Information</label>
          <div className={styles.input}>
            <div className={styles.title} onClick={Dropdown}>
              <span>{selectedOption}</span>
              <img src={down} alt='' />
            </div>
            {isDropDown && (
              <div className={styles.dropdown}>
                {options.map((data, index) => (
                  <>
                    <span key={index} onClick={() => Select(data)}>
                      {data}
                    </span>
                    <hr />
                  </>
                ))}
              </div>
            )}
            <InputField
              isData={isData}
              Details={Details}
              color={color}
              currentConfig={currentConfig}
              isError={isError}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
