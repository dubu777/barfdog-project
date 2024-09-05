import Link from "next/link";
import * as styles from "./LogoSection.css";
import Image from "next/image";


export default function LogoSection() {
  return (
    <section className={styles.logoContainer}>
      <Link href={'/'} className={styles.logoWrapper}>
        <Image
        src={'/logo.png'}
        alt="바프독 로고"
        width={280}
        height={48.67}
        objectFit="contain"
        />
      </Link>
    </section>
  );
}
