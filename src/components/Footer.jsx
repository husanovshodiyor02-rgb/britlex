import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/img/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="container1">
      <hr className="text-[#c4c4c4]" />
      <div className="flex flex-col md:flex-row items-center justify-between my-10">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <a href="#" className="font-normal text-xl text-[#8f95a5] whitespace-pre-line">
          {t("TermsAndConditions")} • {t("PrivacyPolicy")} • {t("CookiePolicy")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
