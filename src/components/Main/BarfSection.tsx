'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import * as styles from './BarfSection.css';
import { layoutContainer, layoutWrapper } from '@/styles/common.css';
import { motion, useInView } from 'framer-motion';
import { listItemVariants, textBoxVariants } from '@/constants';

const PremiumBarfSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 

  return (
    
    <div className={layoutContainer}>
      <div className={layoutWrapper}>
          <section className={styles.premiumSection}>
            <h2 className={styles.premiumTitle}>PREMIUM REAL BARF</h2>
            <div className={styles.gridContainer}>
              <div className={styles.imageContainer}>
                <Image
                  alt="인공 조미료"
                  src="/barfPack.webp"
                  layout="fill"
                  style={{objectFit: 'contain'}}
                />
              </div>
              
              <motion.div 
              className={styles.textbox}
              id="trigger"
              ref={ref}
              variants={textBoxVariants} // variants 적용
              initial="hidden" // 초기 상태
              animate={isInView ? "visible" : "hidden"} // 렌더링 시 애니메이션 실행
            >
              {/* 각 리스트 항목에 delay 효과 적용 */}
              <motion.ul className={styles.textList} variants={textBoxVariants}>
                <motion.li className={styles.textLi} variants={listItemVariants} custom={0}>
                  영양보존 100%
                </motion.li>
                <motion.li className={styles.textLi} variants={listItemVariants} custom={1}>
                  100% 휴먼그레이드
                </motion.li>
                <motion.li className={styles.textLi} variants={listItemVariants} custom={2}>
                  NO 유전자 변형 원료 (NON-GMO)
                </motion.li>
                <motion.li className={styles.textLi} variants={listItemVariants} custom={3}>
                  NO 방부제·보존제
                </motion.li>
                <motion.li className={styles.textLi} variants={listItemVariants} custom={4}>
                  NO 중국산재료
                </motion.li>
              </motion.ul>
            </motion.div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default PremiumBarfSection;
