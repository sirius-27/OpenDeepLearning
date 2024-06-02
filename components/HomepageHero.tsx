import Link from 'next/link';
import styles from './HomepageHero.module.css';
import React from 'react';
import TextShimmer from './magicui/animated-shiny-text';
import { cn } from '../lib/utils';

type Props = {
  stars: number;
};

function randomStep(step: number) {
  return Math.random() * step * 2;
}

export function HomepageHero({initialStars}) {
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
    <div className={styles.root}>
      <div className={styles.tilesBg}></div>
      <div className={styles.tiles}></div>
      <div className={styles.content}>
        {/* <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://twitter.com/ReactCosmos/status/1750257520243888429"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Cosmos 6 is here 🎉
          </a>
        </div> */}
        <div className={'w-full flex justify-center mt-20'}>
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-max",
          )}
        >
          <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Welcome to OpenDeepLearning</span>
          </TextShimmer>
        </div>
        </div>
        <h1 className={'homepage-hero-headline'}>
          A better way to <br className="sm:hidden" />
          build <br className="hidden sm:block" />
          React user <br className="sm:hidden" />
          interfaces.
        </h1>
        <p className={styles.subtitle}>
          React Cosmos is a sandbox for developing and testing UI components in
          isolation. <br />
          It&apos;s fast, extendable and easy to install.{' '}
          <span className="whitespace-nowrap">Our users love it.</span>
        </p>
        <div className={styles.actions}>
          <Link className={styles.cta} href="/docs/getting-started">
            Get started <span>→</span>
          </Link>
          <a
            className={styles.secondaryAction}
            href="https://reactcosmos.org/demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo
          </a>
        </div>
        <div className={styles.links}>
          <a
            href="https://github.com/react-cosmos/react-cosmos"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <strong>☆{githubstars}</strong>
          </a>
          {/* <a
            href="https://github.com/react-cosmos/react-cosmos/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Version <strong>{version}</strong>
          </a> */}
        </div>
      </div>
    </div>
  );
}
