import React from 'react';
import * as styles from './OrderInfo.css';

const OrdererInfo = () => {
  return (
    <section className={styles.ordererInfoSection}>
      <div className={styles.ordererInfoTitle}>주문자 정보</div>
      <div className={styles.ordererInfoGridBox}>
        <span className={styles.ordererInfoValue}>보내는 분</span>
        <span className={styles.ordererInfoValue}>원재현</span>

        <span className={styles.ordererInfoValue}>이메일</span>
        <span className={styles.ordererInfoValue}>wjh0102420@hanmail.net</span>

        <span className={styles.ordererInfoValue}>연락처</span>
        <span className={styles.ordererInfoValue}>010-5454-1976</span>
      </div>
    </section>
  );
};

export default OrdererInfo;
