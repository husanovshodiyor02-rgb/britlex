import React from 'react'
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
import { Trans, useTranslation } from "react-i18next";

const Showcase = () => {
    const { t } = useTranslation();
  return (
    <section className="container1">
      <div className="flex flex-col md:flex-row items-center justify-between my-15">
        <div className="relative">
          <h1 className="font-semibold md:text-[44px] text-3xl leading-[125%] text-black">
            <Trans i18nKey="learn">
              Learn <br /> Any Foreign <br /> Language
            </Trans>
          </h1>
          <img
            src={Img2}
            alt=""
            className="w-15 absolute top-15 sm:left-75 left-45"
          />
          <p className="font-normal text-lg text-[#8f95a5] py-12">
            <Trans i18nKey="with">
              With our teachers who write a program for <br /> each student, you
              will be able to make your <br /> first sketch after the first
              lesson.
            </Trans>
          </p>
          <button className="w-57 h-17 rounded-[15px] bg-[#263238] font-normal text-xl text-white">
            {t("Get started")}
          </button>
        </div>
        <div>
          <img src={Img1} alt="" className="w-110 md:h-110 h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Showcase