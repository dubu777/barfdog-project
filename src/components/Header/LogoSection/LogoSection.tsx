"use client"; 

import Link from "next/link";
import * as styles from "./LogoSection.css";
import Image from "next/image";
import Logo from "/public/logo.svg";
import { useMediaQuery } from "react-responsive";


export default function LogoSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <section className={styles.logoContainer}>
      <Link href={"/"} className={styles.logoWrapper}>
        {isMobile ? (
          <Logo  className={styles.logoImg}/>
        ) : (
          <Image
            src={"/logo.png"}
            alt="바프독 로고"
            width={280}
            height={48.67}
            objectFit="contain"
          />
        )}
      </Link>
    </section>
  );
}
