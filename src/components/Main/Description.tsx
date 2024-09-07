import React from 'react';
import Image from 'next/image';
import * as styles from './Description.css'; // Import vanilla-extract styles

const BarfSection = () => {
  return (
    <div className={styles.wrapperContainerOuter}>
          <section className={styles.mainPageBarfraw}>
            <div className={styles.mainPageInner}>
              <div className={styles.mainPageLeftbox}>
                <div className={styles.mainPageImageWrap}>
                  <div className={styles.imageContainer}>
                    <span className={styles.imageContainer2}>
                    <Image
                      alt="바프 생식 이미지"
                      src="/barfraw.png"
                      layout="fill"
                      objectFit="cover"
                      sizes="100vw"
                      quality={75}
                    />
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.mainPageRightbox}>
                <p className={styles.rightText}>ABOUT BARF</p>
                <h1 className={styles.rightTitle}>바프식이란?</h1>
                <h3 className={styles.rightContent}>
                  B.A.R.F.(Biologically Appropriate Raw Food)는 생물학적으로 적절한 생식이라는 뜻으로, 생고기와
                  뼈, 야채를 적절히 배합하여 반려동물에게 단백질과 지방을 신선한 상태에서 섭취할 수 있도록 돕는
                  식단을 뜻합니다.
                  <br />
                  바프독의 모든 레시피는 고기와 뼈, 내장, 신선한 야채를 완벽한 비율로 배합하여 건강한 영양을
                  공급합니다.
                </h3>
              </div>
            </div>
          </section>
    </div>
  );
};

export default BarfSection;
