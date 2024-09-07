'use client'
import React, { useState } from 'react';
import * as styles from './Reserves.css';
import { receiverInfoTitle } from './ReceiverInfo.css';

const Reserves = () => {
  const [points, setPoints] = useState<number>(0);

  const handleUseAllPoints = () => {
    setPoints(1000); 
  };

  return (
    <section className={styles.reservesSection}>
      <div className={receiverInfoTitle}>적립금</div>
      <div className={styles.flexBox}>
        <p className={styles.reservesText}>적립금 사용</p>
        <div className={styles.inputBox}>
          <div className={styles.inputWrap}>
            <input
              id="discountReward"
              type="text"
              className={styles.inputField}
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={handleUseAllPoints}
          >
            모두 사용
          </button>
          <span className={styles.pointBox}>
            <p className={styles.pointText}>보유 적립금</p>
            <p>0 P</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Reserves;
