import { Link } from "nextra-theme-docs";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={`${styles.root} lg:flex lg:flex-row-reverse`}>
      <div className={`${styles.columns} lg:w-3/4`}>
        <section>
          <h3>Learn</h3>
          <ul>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@OpenDeepLearningAI">
                YouTube ↗
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/hackathons">Hackathons</Link>
            </li>
            <li>
              <Link href="#">Sponsor ↗</Link>
            </li>
            <li>
              <Link href="mailto:maintainer.odl@gmail.com">Contact Us ↗</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Community</h3>
          <ul>
            <li>
              <Link href="https://discord.com/invite/bxnwugmNZg">
                Discord ↗
              </Link>
            </li>
            <li>
              <Link href="https://www.reddit.com/r/opendeeplearning/">
                Reddit ↗
              </Link>
            </li>
            <li>
              <Link href="/contributing">Contributing</Link>
            </li>
            <li>
              <Link href="https://huggingface.co/OpenDeepLearning">
                Hugging Face ↗
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Connect</h3>
          <ul>
            <li>
              <Link href="https://github.com/OpenDeepLearningAI">GitHub ↗</Link>
            </li>
            <li>
              <Link href="https://x.com/ODL_AI">Twitter ↗</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/opendeeplearning">
                LinkedIn ↗
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/opendeeplearning/">
                Instagram ↗
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="lg:w-1/4">
        © 2023-{new Date().getFullYear()} <Link href="/">OpenDeepLearning</Link>.
      </div>
    </div>
  );
}
