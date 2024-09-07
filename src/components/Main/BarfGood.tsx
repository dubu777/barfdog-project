import React from 'react';
import Image from 'next/image';
import * as styles from './BarfGood.css';
import { layoutContainer, layoutContainerr, layoutWrapper } from '@/styles/common.css';

const DifferenceSection = () => {
  return (
    <div className={layoutContainerr}>
      <div className={layoutWrapper}>
        <div className={styles.wrapperRow}>
          <div className={styles.differenceInner}>
            <p className={styles.diffText}>CEHCK POINT</p>
            <h1 className={styles.diffTitle}>바프독을 선택해야 하는 이유</h1>
          </div>
          <section className={styles.differenceSection}>
            <ul className={styles.differenceUl}>
              <li className={styles.differenceLi}>
                <p className={styles.mainTitle}>
                  완벽한 영양구성<br />Real B.A.R.F.
                </p>
                <div className={styles.imageContainer}>
                  <Image
                    alt="카드 이미지"
                    src="/leftPic.png"
                    width={260}
                    height={260}
                  />
                </div>
                <p className={styles.mainText}>
                  생고기, 뼈, 내장, 채소와 과일을<br />완벽한 비율로 구성한 건강한 한끼
                </p>
              </li>
              <li>
                <p className={styles.mainTitle}>
                  국내최초 국내유일<br />Double meats
                </p>
                <div className={styles.imageContainer}>
                  <Image
                    alt="카드 이미지"
                    src="/midPic.webp"
                    width={260}
                    height={260}
                  />
                </div>
                <p className={styles.mainText}>
                  모든 레시피에 두 가지 고기를<br />풍부하게 담은 균형잡힌 한끼
                </p>
              </li>
              <li className={styles.mainTextWrapper}>
                <p className={styles.mainTitle}>
                  미국사료협회 영양기준<br />AAFCO
                </p>
                <div className={styles.imageContainer}>
                  <Image
                    alt="카드 이미지"
                    src="/rightPic.webp"
                    width={260}
                    height={260}
                  />
                </div>
                <p className={styles.mainText}>
                  국제 기준(AAFCO)부터 NRC, fediaf까지<br />모든 영양 가이드라인을 준수
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
