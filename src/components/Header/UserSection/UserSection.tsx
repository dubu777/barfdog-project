import React from 'react';
import * as styles from './UserSection.css';
import Link from 'next/link';
import Triangle from '/public/triangle.svg';

export default function UserSection() {
  return (
    <section className={styles.userContainer}>
      <ul className={styles.userWrapper}>
        <li className={styles.userClassWrapper}>
          <button type="button" className={styles.userClassButton}>브론즈</button>
          <Link className={styles.username} href="/mypage/orderHistory">
            <em className={styles.userEm}>원재현</em>님
          </Link>
        </li>
        <li className={styles.serviceWrapper}>
          <p className={styles.serviceButton}>고객센터</p>
          <Triangle/>
          <ul className={styles.serviceMenuContainer}>
            <li className={styles.serviceMenu}><Link href="/faq">자주 묻는 질문</Link></li>
            <li className={styles.serviceMenu}><Link href="/mypage/inquiry">1:1 문의</Link></li>
          </ul>
        </li>
        <li>
          <button className={styles.logoutButton} type="button">로그아웃</button>
        </li>
      </ul>
    </section>
  );
};