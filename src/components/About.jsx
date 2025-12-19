import React from "react";
import { useTranslation } from "react-i18next";
import Ab1 from "../assets/img/ab1.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="container1">
      <div className="flex flex-col md:flex-row items-center justify-between my-15">
        <div>
          <h1 className="font-semibold text-4xl leading-[167%] text-black">
            {t("AboutUs")}
          </h1>
          <p className="font-normal text-xl text-[#8f95a5] py-8 whitespace-pre-line">
            {t("AboutText")}
          </p>
          <div className="flex items-center md:gap-28 gap-8">
            <div>
              <h2 className="font-semibold text-3xl leading-[167%] text-[#2a3246]">
                {t("PupilsCount")}
              </h2>
              <p className="font-normal text-xl text-[#8f95a5]">
                {t("Pupils")}
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-3xl leading-[167%] text-[#2a3246] md:pl-8">
                {t("TeachersCount")}
              </h2>
              <p className="font-normal text-xl text-[#8f95a5]">
                {t("Teachers")}
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-3xl leading-[167%] text-[#2a3246] md:pl-18">
                {t("LanguagesCount")}
              </h2>
              <p className="font-normal text-xl text-[#8f95a5]">
                {t("ForeignLanguages")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={Ab1} alt="" className="w-125" />
        </div>
      </div>
    </section>
  );
};

export default About;
