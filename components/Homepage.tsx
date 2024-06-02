import { Benefits } from './Benefits';
import { Features } from './Features';
import styles from './Homepage.module.css';
import { HomepageHero } from './HomepageHero';
import { HomepageLogos } from './HomepageLogos';
import MarqueeList from './Marquee';

export function Homepage() {
  return (
    <>
      <HomepageHero initialStars={100} />
      <div className={styles.content}>
        <a
          href="https://reactcosmos.org/demo/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demoPreview}
        >
          <img src="/demo.png" className={'imgc'} />
        </a>
        {/* <HomepageLogos /> */}
         {/* <Benefits /> */}
         <MarqueeList />
        {/*<Features /> */}
      </div>
    </>
  );
}
