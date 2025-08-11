/** @format */

import React from "react";
import logo from "../../assets/Donate/logo1.svg";
import logo2 from "../../assets/Donate/logo2.svg";
import logo3 from "../../assets/Donate/logo3.svg";
import logo4 from "../../assets/Donate/logo4.svg";
import logo5 from "../../assets/Donate/logo5.svg";
import logo6 from "../../assets/Donate/logo6.svg";

import down from "../../assets/Donate/arrow.svg";
import down2 from "../../assets/Programme/OFF/down.svg";
import down3 from "../../assets/Programme/FFI/down.svg";
import down4 from "../../assets/Programme/TGP/down.svg";
import down5 from "../../assets/Programme/HBI/down.svg";
import down6 from "../../assets/Programme/TGT/down.svg";

const pageConfig = {
  "/donate-to-hip": {
    title: "Health Impact Programme (HIP)",
    logo: logo,
    color: "hsla(219, 79%, 66%, 1)",
    // code: "ACCT_subrum4v715cle9",
    code: "ACCT_z365c0lynd230y8",
    reference: "OOHIP",
    name: "Health Impact Programme",
    arrow: down,
  },
  "/donate-to-off": {
    title: "October Future Fund (OFF)",
    logo: logo2,
    color: "hsla(12, 100%, 60%, 1)",
    // code: "ACCT_k594woq1yw5of7b",
    code: "ACCT_nv7y3oh2piqmmed",
    reference: "OOOFF",
    name: "October Future Fund",
    arrow: down2,
  },
  "/donate-to-ffi": {
    title: "Future Forward Initiative (FFI)",
    logo: logo3,
    color: "hsla(218, 48%, 30%, 1)",
    // code: "ACCT_nvhybe3bqsket3k",
    code: "ACCT_65r7jb7vqjlu71j",
    reference: "OOFFI",
    name: "Future Forward Initiative",
    arrow: down3,
  },
  "/donate-to-tgp": {
    title: "The Gero Programme (TGP)",
    logo: logo4,
    color: "hsla(90, 37%, 50%, 1)",
    // code: "ACCT_a9plyz224kkhcxb",
    code: "ACCT_dys1hx861i77r8k",
    reference: "OOTGP",
    name: "The Gero Programme",
    arrow: down4,
  },
  "/donate-to-hbi": {
    title: "Haven Bloom Initiative (HBI)",
    logo: logo5,
    color: "hsla(263, 100%, 66%, 1)",
    // code: "ACCT_7ft4o8islw3daki",
    code: "ACCT_96rj2zft9hfkjmj",
    reference: "OOHBI",
    name: "Heaven Bloom Initiative",
    arrow: down5,
  },
  "/donate-to-tgt": {
    title: "The Giving Trybe (TGT)",
    logo: logo6,
    color: "hsla(345, 81%, 75%, 1)",
    arrow: down6,
  },
};
export default pageConfig;
