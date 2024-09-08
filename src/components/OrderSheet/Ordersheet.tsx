import React from 'react';
import * as styles from './Ordersheet.css';

export default function OrderSheet() {
  return (
    <section className={styles.ordersheetContentBox}>
      <div className={styles.ordersheetTitle}>주문내역</div>
      <div className={styles.ordersheetFlexTitleBox}>
        <div>상품정보</div>
        <div>수량</div>
        <div className={styles.ordersheetNoneBox}>총 주문금액</div>
        <div >쿠폰할인</div>
        <div>쿠폰적용</div>
      </div>
      <ul>
        <li className={styles.ordersheetFlexBox}>
          <div className={styles.ordersheetInfoCol}>
            <p>[정기구독] 토핑 플랜</p>
            <p className={styles.ordersheetRecipeName}>
              DUCK&amp;LAMB + 레시피 (145.0g)
            </p>
          </div>
          <div className={styles.ordersheetCountCol}>1 개</div>
          <div className={styles.ordersheetPriceCol}>
            <div className={styles.ordersheetPriceInner}>172,550원</div>
            <span>172,550원</span>
          </div>
          <div className={styles.ordersheetCouponColRed}>0원</div>
          <div className={styles.ordersheetApplyCouponCol}>
            <button type="button" className={styles.ordersheetButton}>
              쿠폰 선택
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

