import React from 'react';
import * as styles from './ShippinInfo.css';

const ShippingInfo = () => {
  return (
    <section className={styles.shippingInfoSection}>
      <h3 className={styles.shippingInfoTitle}>배송 정보</h3>
      <div className={styles.shippingInfoBox}>
        <ul className={styles.gridBox}>
          <li className={styles.leftBox}>
            <span className={styles.itemTitle}>구독 상품</span>
            <p className={styles.itemText}>DUCK&LAMB +</p>
          </li>
          <li className={styles.midBox}>
            <span className={styles.itemTitle}>배송방법</span>
            <p className={styles.itemText}>배송 예정 일시</p>
          </li>
          <li className={styles.rightBox}>
            <span className={styles.itemTitle}>정기구독</span>
            <p className={styles.itemTextD}>
              <span>2024-09-17&nbsp;</span>(배송 후 카톡 안내)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ShippingInfo;
