import React from "react";
import { useTranslation } from "react-i18next";
import Sk1 from "../assets/img/sk1.png";
import Sk2 from "../assets/img/sk2.png";
import Sk3 from "../assets/img/sk3.png";
import Sk4 from "../assets/img/sk4.png";

const Skils = () => {
  const { t } = useTranslation();

  return (
    <section className="container1">
      <h2 className="font-semibold text-center text-2xl leading-[167%] text-black my-10">
        {t("Skills")}
      </h2>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="rounded-[10px] bg-[#f5f5f5] p-7">
          <img src={Sk1} alt="" className="w-75" />
          <br />
          <h3 className="font-semibold text-xl leading-[267%] text-[#263238]">
            {t("Speaking")}
          </h3>
          <p className="font-normal text-base text-[#8f95a5] whitespace-pre-line">
            {t("SpeakingText")}
          </p>
          <br />
          <button className="w-57.5 h-15 rounded-[5px] bg-[#263238] font-medium text-lg text-white">
            {t("Learn more")}
          </button>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="rounded-[10px] bg-[#f5f5f5] p-7">
              <img src={Sk2} alt="" className="w-50" />
              <h3 className="font-semibold text-xl leading-[267%] text-[#263238]">
                {t("Writing")}
              </h3>
              <p className="font-normal text-base text-[#8f95a5] whitespace-pre-line">
                {t("WritingText")}
              </p>
              <br />
              <button className="w-57.5 h-15 rounded-[5px] bg-[#263238] font-medium text-lg text-white">
                {t("Learn more")}
              </button>
            </div>
            <div className="rounded-[10px] bg-[#f5f5f5] p-7">
              <img src={Sk3} alt="" className="w-65" />
              <br />
              <h3 className="font-semibold text-xl leading-[267%] text-[#263238]">
                {t("Reading")}
              </h3>
              <p className="font-normal text-base text-[#8f95a5] whitespace-pre-line">
                {t("ReadingText")}
              </p>
              <br />
              <button className="w-57.5 h-15 rounded-[5px] bg-[#263238] font-medium text-lg text-white">
                {t("Learn more")}
              </button>
            </div>
          </div>
          <div className="rounded-[10px] bg-[#f5f5f5] p-7 mt-5 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="font-semibold text-xl leading-[267%] text-[#263238]">
                {t("Listening")}
              </h3>
              <p className="font-normal text-base text-[#8f95a5] whitespace-pre-line">
                {t("ListeningText")}
              </p>
              <br />
              <button className="w-57.5 h-15 rounded-[5px] bg-[#263238] font-medium text-lg text-white">
                {t("Learn more")}
              </button>
            </div>
            <img src={Sk4} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
