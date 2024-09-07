import { useRouter } from "next/navigation";
import * as styles from "./MobileNavBar.css";

export default function MobileNavBar() {
  const router = useRouter();

  
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navWrapper}>
      <li>
          <button className={styles.menu} onClick={() => router.push('/surveyGuide')}>
            정기구독
          </button>
        </li>
        <li>
          <button className={styles.menu}>
            샵
          </button>
        </li>
        <li>
          <button  className={styles.menu}>
            레시피
          </button>
        </li>
        <li>
          <button className={styles.menu}>
            커뮤니티
          </button>
        </li>
        <li>
          <button className={styles.menu}>
            리뷰
          </button>
        </li>
      </ul>
    </nav>
  );
}
