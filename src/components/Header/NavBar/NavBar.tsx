import Link from "next/link";
import * as styles from "./NavBar.css";
import CartIcon from '/public/cart.svg';
import MyIcon from '/public/mypage.svg';
import SubscribeIcon from '/public/subscribe.svg';


export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navLeft}>
        <li>
          <div className={styles.subscribe}>
            <Link href="/surveyGuide">
            <SubscribeIcon/>
            </Link>
          </div>
        </li>
        <li className={styles.menuContainer}>
          <Link href="/surveyGuide"
          className={styles.menu}
          >
          샵
          </Link>
          <ul className={styles.submenuContainer}>
          <li className={styles.submenu}>
              <Link href="/surveyGuide">ALL</Link>
            </li>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">생식</Link>
            </li>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">토핑</Link>
            </li>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">굿즈</Link>
            </li>
          </ul>
        </li>
        <li >
          <Link href="/surveyGuide" className={styles.menu}>레시피</Link>
        </li>
        <li className={styles.menuContainer}>
          <Link href="/surveyGuide" className={styles.menu}>커뮤니티</Link>
          <ul className={styles.submenuContainer}>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">공지사항</Link>
            </li>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">이벤트</Link>
            </li>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">블로그</Link>
            </li>
            <li className={styles.submenu}>
              <Link href="/surveyGuide">어바웃</Link>
            </li>
          </ul>
        </li>
        <li >
          <Link href="/surveyGuide" className={styles.menu}>리뷰</Link>
        </li>
      </ul>
      <div >
        <ul className={styles.navRight}>
          <li>
            <Link href="/surveyGuide">
              <div className={styles.navImage}>
                <CartIcon/>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/surveyGuide">
              <div className={styles.navImage}>
                <MyIcon/>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
