import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import { Footer } from "./components/Footer/Footer";

const config: DocsThemeConfig = {
  logo: (
    <>
      <div className="w-[30px] h-[30px] dark:hidden">
        <img src="/logo/logo-dark.svg" alt="OpenDeepLearning" />
      </div>
      <div className="w-[30px] h-[30px] hidden dark:flex">
        <img src="/logo/logo-light.svg" alt="OpenDeepLearning" />
      </div>

      <span className="text-[21px] font-semibold ml-1">
        <span> OpenDeepLearning </span>
      </span>
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    // { locale: "zh", text: "中文" },
    // { locale: "ru", text: "Русский" },
    // { locale: "jp", text: "日本語" },
    // { locale: "tr", text: "Türkçe" },
    // { locale: "kr", text: "한국어" },
    // { locale: "pt", text: "Português" },
    // { locale: "es", text: "Español" },
  ],
  head: function UseHead() {
    const { title } = useConfig();
    return (
      <>
        <link rel="icon" href="/logo/logo.svg" />
      </>
    );
  },
  project: {
    link: "https://github.com/severus27/OpenML-Guide",
    icon: <FaGithub className="h-[25.5px] w-[25.5px] hover:opacity-60" />,
  },
  chat: {
    link: "https://discord.com/invite/bxnwugmNZg",
    icon: <FaDiscord className="h-[25.5px] w-[25.5px] hover:opacity-60" />,
  },
  navbar: {
    extraContent: (
      <Link href="https://x.com/ODL_AI" target="_blank">
        <FaXTwitter className="h-6 w-6 ml-2 hover:opacity-60" />
      </Link>
    ),
  },
  docsRepositoryBase: "https://github.com/severus27/OpenML-Guide/tree/main/",
  feedback: {
    // useLink: () => "https://github.com/severus27/OpenML-Guide/issues/new",
    content: (
      <>
        <span className="flex gap-[8.5px] h-[19px]">
          <FaGithub className="w-[18px] h-[18px] pt-[1px]" />
          <span> Report an issue </span>
        </span>
      </>
    ),
  },
  editLink: {
    text: (
      <>
        <span className="flex gap-[8.5px] h-[19px]">
          <MdEdit className="w-[18px] h-[18px] pt-[1px]" />
          <span> Edit this page </span>
        </span>
      </>
    ),
  },
  search: {
    placeholder: "Search...",
  },
  sidebar: {
    toggleButton: true,
  },
  // gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath == "/") {
      return {
        titleTemplate: "OpenDeepLearning",
      };
    }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | OpenDeepLearning",
      };
    }
  },
  // primaryHue: 168.5,
  // primarySaturation: 78.4,
  toc: {
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  // banner: {
  //   key: "OpenDeepLearning",
  //   text: (
  //     <a
  //       href="https://github.com/severus27/OpenML-Guide"
  //       target="_blank"
  //       className="text-bold text-[14px]"
  //     >
  //       If you like our work, please give a star ⭐ to OpenDeepLearning on GitHub!
  //     </a>
  //   ),
  // },
  footer: {
    text: (
      <Footer />
      // <div className="flex w-full items-center justify-between text-sm">
      //   <div className="ml-1 text-sm">
      //     <span> © 2023-{new Date().getFullYear()} OpenDeepLearning </span>
      //   </div>
      //   <div className="flex gap-5 text-[20px]">
      //     <a href="https://github.com/open-deeplearning" target="_blank">
      //       <FaGithub className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="https://www.youtube.com/@Open_DeepLearning" target="_blank">
      //       <FaYoutube className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="https://discord.com/invite/QgZHExcssR" target="_blank">
      //       <FaDiscord className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="https://twitter.com/Open_DL_AI" target="_blank">
      //       <FaXTwitter className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="https://www.reddit.com/r/opendeeplearning/" target="_blank">
      //       <FaRedditAlien className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="https://www.instagram.com/opendeeplearning/" target="_blank">
      //       <FaInstagram className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="https://www.linkedin.com/company/opendeeplearning" target="_blank">
      //       <FaLinkedinIn className="hover:text-[#ffffff]" />
      //     </a>
      //     <a href="mailto:teamopendeeplearning@gmail.com" target="_blank">
      //       <TbMailFilled className="hover:text-[#ffffff]" />
      //     </a>
      //   </div>
      // </div>
    ),
  },
};

export default config;
