"use client";
import Link from "next/link";
import * as styles from "./Header.css";
import LogoSection from "./LogoSection/LogoSection";
import NavBar from "./NavBar/NavBar";
import UserSection from "./UserSection/UserSection";
import { useMediaQuery } from "react-responsive";
import CartIcon from "/public/cart.svg";
import MyIcon from "/public/mypage.svg";
import MobileNavBar from "./NavBar/MobileNavBar";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.innerHeaderWrapper}>
          {isMobile ? (
            <>
            <div className={styles.headerWrap}>
              <LogoSection />
              <div>
                <ul className={styles.navRight}>
                  <li>
                    <Link href="/">
                      <div className={styles.navImage}>
                        <CartIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <div className={styles.navImage}>
                        <MyIcon />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <MobileNavBar/>
            </>
          ) : (
            <>
              <UserSection />
              <LogoSection />
              <NavBar />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
