import * as styles from "./Header.css";
import LogoSection from "./LogoSection/LogoSection";
import NavBar from "./NavBar/NavBar";
import UserSection from "./UserSection/UserSection";


export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.innerHeaderWrapper}>
          <UserSection />
          <LogoSection />
          <NavBar />
        </div>
      </div>
    </header>
  );
}
