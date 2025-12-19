import React, { useState } from 'react'
import Logo from '../assets/img/logo.png'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (e) => {
      i18n.changeLanguage(e.target.value);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header className="container1 sticky top-0 bg-white z-10">
      <div className="flex items-center justify-between py-3">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <ul className="hidden md:flex items-center gap-7 font-medium text-lg text-[#263238]">
          <li>
            <a className="hover:text-black" href="#">
              {t("Home")}
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              {t("Skills")}
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              {t("About us")}
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              {t("Pricing")}
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              {t("Contacts")}
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-7">
          <select
            onChange={changeLang}
            defaultValue="eng"
            className="font-medium text-lg text-[#263238] border-none"
          >
            <option value="eng">Eng</option>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
          </select>
          <button className="w-40 h-12.5 rounded-[5px] border-2 border-solid border-[#263238] font-normal text-xl text-black">
            {t("Let’s Talk")}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl font-bold">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 font-medium text-lg text-[#263238]">
          <a href="#" className="hover:text-black" onClick={toggleMenu}>
            {t("Home")}
          </a>
          <a href="#" className="hover:text-black" onClick={toggleMenu}>
            {t("Skills")}
          </a>
          <a href="#" className="hover:text-black" onClick={toggleMenu}>
            {t("About us")}
          </a>
          <a href="#" className="hover:text-black" onClick={toggleMenu}>
            {t("Pricing")}
          </a>
          <a href="#" className="hover:text-black" onClick={toggleMenu}>
            {t("Contacts")}
          </a>

          <select
            onChange={changeLang}
            defaultValue="eng"
            className="font-medium text-lg text-[#263238] border-none"
          >
            <option value="eng">Eng</option>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
          </select>

          <button className="w-full h-12 rounded-[5px] border-2 border-solid border-[#263238] font-normal text-xl text-black">
            {t("Let’s Talk")}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header