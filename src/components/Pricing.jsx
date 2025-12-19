import React from "react";
import { useTranslation } from "react-i18next";
import Pr1 from "../assets/img/pr1.png";
import Pr2 from "../assets/img/pr2.png";
import Pr3 from "../assets/img/pr3.png";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section className="container1">
      <h2 className="font-semibold text-3xl text-center leading-[167%] text-black">
        {t("Pricing")}
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <img src={Pr1} alt="" />
          <h2 className="font-semibold text-2xl leading-[160%] text-[#263238] mt-5 mb-2">
            {t("SelfStudy")}
          </h2>
          <p className="font-normal text-xl text-[#8f95a5] whitespace-pre-line">
            {t("SelfStudyText")}
          </p>
          <div className="w-60 h-11.25 rounded-[5px] bg-[#eee] flex items-center gap-1.5 px-5 mt-10">
            <h3 className="font-normal text-3xl text-[#263238]">
              {t("SelfStudyPrice")}
            </h3>
            <p className="font-normal text-lg text-[#546269]">
              {t("SelfStudyPeriod")}
            </p>
          </div>
        </div>

        <div>
          <img src={Pr2} alt="" />
          <h2 className="font-semibold text-2xl leading-[160%] text-[#263238] mt-15 mb-2">
            {t("LiveClasses")}
          </h2>
          <p className="font-normal text-xl text-[#8f95a5] whitespace-pre-line">
            {t("LiveClassesText")}
          </p>
          <div className="w-60 h-11.25 rounded-[5px] bg-[#eee] flex items-center gap-1.5 px-5 mt-17">
            <h3 className="font-normal text-3xl text-[#263238]">
              {t("LiveClassesPrice")}
            </h3>
            <p className="font-normal text-lg text-[#546269]">
              {t("LiveClassesPeriod")}
            </p>
          </div>
        </div>

        <div>
          <img src={Pr3} alt="" />
          <h2 className="font-semibold text-2xl leading-[160%] text-[#263238] mb-2">
            {t("PersonalTuition")}
          </h2>
          <p className="font-normal text-xl text-[#8f95a5] whitespace-pre-line">
            {t("PersonalTuitionText")}
          </p>
          <div className="w-60 h-11.25 rounded-[5px] bg-[#eee] flex items-center gap-1.5 px-5 mt-15.5">
            <h3 className="font-normal text-3xl text-[#263238]">
              {t("PersonalTuitionPrice")}
            </h3>
            <p className="font-normal text-lg text-[#546269]">
              {t("PersonalTuitionPeriod")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
