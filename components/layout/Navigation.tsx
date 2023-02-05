import classnames from "classnames";
import Link from "next/link";
import styles from "./Navigation.module.scss";

type NavigationProps = {
  scrolled: boolean;
};

export const Navigation = ({ scrolled }: NavigationProps) => {
  return (
    <nav
      className={classnames(styles.navbar, scrolled && styles.navbarShaddow)}
    >
      <div className={styles.logo}>Calculator </div>
      <div>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/countries">countries</Link>
          </li>
          <li>
            <Link href="/history">Tips history</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
