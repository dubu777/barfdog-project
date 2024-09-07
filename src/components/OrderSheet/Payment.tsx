import React from 'react';
import * as styles from './Payment.css';

export default function Payment() {
  return (
    <section className={styles.paymentSection}>
      <div className={styles.title}>결제금액</div>
      <div className={styles.flexBox}>
        <span>주문금액</span>
        <span>172,550원</span>
      </div>
      <div className={styles.flexBox1}>
        <span>상품 금액</span>
        <span>172,550원</span>
      </div>
      <div className={styles.flexBox2}>
        <span>상품 할인</span>
        <span>&nbsp;0원</span>
      </div>
      <hr />
      <div className={styles.flexBox3}>
        <span>등급 할인</span>
        <span>0원</span>
      </div>
      <div className={styles.flexBox3}>
        <span>쿠폰 할인</span>
        <span>0원</span>
      </div>
      <div className={styles.flexBox3}>
        <span>적립금 사용</span>
        <span>0원</span>
      </div>
      <div className={styles.flexBox4}>
        <span>배송비</span>
        <span>0원</span>
      </div>
      <hr />
      <div className={styles.flexBox5}>
        <span>최종 결제금액</span>
        <span>172,550원</span>
      </div>
      <div className={styles.checkboxWrapper}>
        <label>
          <input type="checkbox" />
          첫 구매 바프독 설명이 포함된 브로슈어를 받겠습니다.
        </label>
      </div>
      <div className={styles.checkboxWrapper}>
        <label>
          <input type="checkbox" />
          개인 정보 수집 이용 동의
          <button className={styles.termsButton} type="button">내용보기</button>
        </label>
      </div>
    </section>
  );
}
