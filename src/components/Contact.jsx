import React from "react";
import { useTranslation } from "react-i18next";
import Co1 from "../assets/img/co1.png";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="container1">
      <div className="flex flex-col lg:flex-row items-center justify-between my-20">
        <div>
          <img src={Co1} alt="" className="w-100" />
        </div>
        <div>
          <h1 className="font-semibold text-4xl leading-[167%] text-black">
            {t("ContactUs")}
          </h1>
          <p className="font-normal text-xl text-[#8f95a5] py-10 whitespace-pre-line">
            {t("ContactText")}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border sm:w-110 w-70 h-auto rounded-[10px] border-solid border-[#8f95a5] py-4 pl-6">
              <input
                type="text"
                placeholder={t("EmailPlaceholder")}
                className="border-none outline-0"
              />
            </div>
            <button className="w-61.25 h-15 rounded-[10px] bg-[#263238] font-medium text-xl text-white">
              {t("Subscribe")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
