import { ReactNode } from 'react';
import styles from './Benefits.module.css';
import { Rocket } from './Rocket';

export function Benefits() {
  return (
    <div className={styles.root}>
      <ul className={styles.benefits}>
        {/* 使用 cn 将类 {styles.text} 加上 .li */}
        <li className={`${styles.icon} .li`}>
          Prototype quickly, debug easily
          <br />
          and maintain quality at scale.
        </li>
        <li className={`${styles.icon} .li`}>
          <Rocket />
        </li>
        <li className={`${styles.icon} .li`}>
          Stay organized with a well-
          <br />
          designed component library.
        </li>
      </ul>
    </div>
  );
}

// Prototype quickly, debug with ease and
// maintain quality at scale.

type FeatureProps = {
  title: string;
  description: string;
  icon: ReactNode;
};
function Feature({ title, description, icon }: FeatureProps) {
  return (
    <li className={'li'}>
      <strong>
        {icon} {title}
      </strong>{' '}
      {description}
    </li>
  );
}
