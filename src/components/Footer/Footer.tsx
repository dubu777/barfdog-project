import Image from "next/image";
import * as styles from "./Footer.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.innerFooterWrapper}>
            <Image
            src={'/logo-black.png'}
            alt="로고"
            width={204}
            height={35.46}
            />
        </div>
      </div>
    </footer>
  );
}
