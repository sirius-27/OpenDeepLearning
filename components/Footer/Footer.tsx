import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";

const footerData = [
  {
    title: "Learn",
    links: [
      { name: "Courses", href: "/courses" },
      { name: "Resources", href: "/resources" },
      { name: "Blog", href: "/blog" },
      { name: "YouTube", href: "https://www.youtube.com/@OpenDeepLearningAI", target: "_blank" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Hackathons", href: "/hackathons" },
      { name: "Sponsor", href: "#" },
      { name: "Contact Us", href: "mailto:maintainer.odl@gmail.com", target: "_blank" }
    ]
  },
  {
    title: "Community",
    links: [
      { name: "Discord", href: "https://discord.com/invite/bxnwugmNZg", target: "_blank" },
      { name: "Reddit", href: "https://www.reddit.com/r/opendeeplearning/", target: "_blank" },
      { name: "Contributing", href: "/contributing" },
      { name: "Hugging Face", href: "https://huggingface.co/OpenDeepLearning", target: "_blank" }
    ]
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/OpenDeepLearningAI", target: "_blank" },
      { name: "X", href: "https://x.com/ODL_AI", target: "_blank" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/opendeeplearning", target: "_blank" },
      { name: "Instagram", href: "https://www.instagram.com/opendeeplearning/", target: "_blank" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container text-[14px] mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-500 dark:text-gray-200 mb-4">© 2023-{new Date().getFullYear()} OpenDeepLearning</h3>
          </div>
          {footerData.map((section) => (
            <div key={section.title} className="w-full md:w-1/6 mb-6 md:mb-0">
              <h3 className="text-gray-800 dark:text-gray-200 font-bold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mb-3">
                    <a href={link.href} className={`text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200`} target={link.target} rel="noopener noreferrer">
                      {link.name}
                      {
                        link.target === "_blank" && (
                          <LuArrowUpRight className="inline-block ml-1" />
                        )
                      }
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export {Footer};
