import Link from 'next/link';
import React from 'react';
import MarqueeList from '../Marquee';
import RetroGrid from '../magicui/retro-grid';
import TextShimmer from '../magicui/animated-shiny-text';
import {cn} from '../../lib/utils';
import Meteors from '../magicui/meteors';
import { IoMdStarOutline } from "react-icons/io";

import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";

type Props = {
  version: string;
  stars: number;
};

function randomStep(step: number) {
  return Math.random() * step * 2;
}

export function HomepageHero({ version, stars: initialStars }: Props) {
  const [githubstars, setStars] = React.useState(initialStars);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    (async () => {
      const res = await fetch('https://api.github.com/repos/OpenDeepLearningAI/OpenML-Guide');
      const repo = await res.json();
      const latestStars = repo.stargazers_count ?? initialStars;
      console.log('latestStars', latestStars);
      if (latestStars > initialStars) {
        const diff = latestStars - initialStars;
        const step = 1000 / diff;
        let currentStars = initialStars;

        const update = () => {
          currentStars += 1;
          setStars(currentStars);
          if (currentStars < latestStars) {
            timeoutId = setTimeout(update, randomStep(step));
          }
        };
        timeoutId = setTimeout(update, randomStep(step));
      }
    })();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [initialStars]);

  return (
    <div className="relative">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300 dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIxNDIiCiAgaGVpZ2h0PSI3MSIKICB2aWV3Qm94PSIwIDAgMTQyIDcxIgogIGZpbGw9Im5vbmUiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CiAgICA8cmVjdCB4PSIwLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iI2ZmZiIgLz4KICAgIDxyZWN0IHg9IjcxLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iI2ZmZiIgLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjE0MiIgaGVpZ2h0PSI3MSIgZmlsbD0id2hpdGUiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+')] bg-bottom bg-repeat bg-[size:142px_71px] dark:bg-[url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIxNDIiCiAgaGVpZ2h0PSI3MSIKICB2aWV3Qm94PSIwIDAgMTQyIDcxIgogIGZpbGw9Im5vbmUiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CiAgICA8cmVjdCB4PSIwLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iIzExMSIgLz4KICAgIDxyZWN0IHg9IjcxLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iIzExMSIgLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjE0MiIgaGVpZ2h0PSI3MSIgZmlsbD0id2hpdGUiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+')]"></div> */}
      <div className="relative overflow-x-hidden z-10 max-w-screen-xl flex flex-col justify-center items-center mx-auto pt-16 px-4 text-center">
        
        {/* <div className="mt-6">
          <a
            className="badge"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to OpenDeepLearning🔥
          </a>
        </div> */}
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-max",
          )}
        >
          <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Welcome to OpenDeepLearning</span>
          </TextShimmer>
        </div>
        <h1 className="homepage-hero-headline">
         Learn skills for <br className="sm:hidden" />
         building <br className="hidden sm:block" />
         AI-driven <br className="sm:hidden" />
         products.
        </h1>
        <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
          Courses, math, code, news, community, books for building AI-driven products.
        </p>
        <div className="mt-6 mb-5 flex justify-center space-x-4">
          <Link href="/docs/getting-started">
            <div className="inline-block py-3 px-6 rounded bg-gradient-to-b from-blue-600 to-blue-700 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Get started <span className="inline-block transition-all duration-200">&rarr;</span>
            </div>
          </Link>
          <Link href="/docs/getting-started">
            {/* 灰色 */}
            <div className="inline-block py-3 px-6 rounded bg-gray-200 text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Visit Our Github <span className="inline-block transition-all duration-200">&rarr;</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-2 bg-opacity-50 text-gray-600 gap-1 text-lg dark:text-gray-400 flex items-center"
          >
            GitHub <IoMdStarOutline className="text-xl inline-block" /> {githubstars}
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-2 bg-white bg-opacity-50 text-gray-600 text-lg dark:bg-gray-900 dark:text-gray-400"
          >
            Version <strong>{version}</strong>
          </a> */}
          
        </div>
        <div className="-z-10 absolute inset-0 transform -scale-x-100">
          <Meteors number={15} />
        </div>
      </div>

      <MarqueeList />
    </div>
  );
}
