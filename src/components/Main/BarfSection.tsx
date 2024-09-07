import React from 'react';
import Image from 'next/image';
import * as styles from './BarfSection.css';
import { layoutContainer, layoutWrapper } from '@/styles/common.css';

const PremiumBarfSection = () => {
  return (
    
    <div className={layoutContainer}>
      <div className={layoutWrapper}>
          <section className={styles.premiumSection}>
            <h2 className={styles.premiumTitle}>PREMIUM <br /> REAL BARF</h2>
            <div className={styles.gridContainer}>
              <div className={styles.imageContainer}>
                <Image
                  alt="인공 조미료"
                  src="/barfPack.webp"
                  width={607}
                  height={591}
                />
              </div>
              <div className={styles.textbox} id="trigger">
                <ul className={styles.textList}>
                  <li data-aos="fade-up" data-aos-delay="0" data-aos-anchor="#trigger">영양보존 100%</li>
                  <li data-aos="fade-up" data-aos-delay="50" data-aos-anchor="#trigger">100% 휴먼그레이드</li>
                  <li data-aos="fade-up" data-aos-delay="100" data-aos-anchor="#trigger">NO 유전자 변형 원료 (NON-GMO)</li>
                  <li data-aos="fade-up" data-aos-delay="150" data-aos-anchor="#trigger">NO 방부제·보존제</li>
                  <li data-aos="fade-up" data-aos-delay="200" data-aos-anchor="#trigger">NO 중국산재료</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default PremiumBarfSection;
