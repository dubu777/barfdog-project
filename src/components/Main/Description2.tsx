import React from "react";
import Image from "next/image";
import * as styles from "./Description2.css"; // 스타일링 파일 임포트
import { layoutContainer, layoutWrapper } from "@/styles/common.css";

const Description2 = () => {
  return (
    <div className={layoutContainer}>
      <div className={layoutWrapper}>
    <div className={styles.barfGoodContainer}>
    <section className={styles.barfGoodSection}>
      <ul className={styles.inner}>
        <li className={styles.leftBox}>
          <div className={styles.textBox}>
            <h1 className={styles.text}>
              생식을 하면
              <br />
              어떤점이 바뀔까요?
            </h1>
            <p className={styles.textContent}>
              &nbsp;BARF(Biologically Appropriate Raw Food)는 생물학적으로
              적절한 생식이라는 뜻으로, 생고기와 뼈, 야채를 적절히 배합하여
              반려동물에게 단백질과 지방을 신선한 상태에서 섭취할 수 있도록
              돕습니다. 바프독은 70%의 두 종류 고기와 칼슘이 풍부한 뼈, 내장,
              신선한 야채를 배합해 완벽한 비율의 영양을 공급합니다.
            </p>
          </div>
        </li>
        <li className={styles.rightBox}>
          <div className={styles.imgBox}>
            <div className={styles.barFood1}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.barFood}
                  alt="카드 이미지"
                  src="/barfgood1.png"
                  width={1200}
                  height={456}
                  quality={75}
                />
              </div>
            </div>
            <div className={styles.barFood2}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.barFood3}
                  alt="카드 이미지"
                  src="/barfgood2.webp"
                  width={750}
                  height={635}
                  quality={75}
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    </div>
    </div>
    </div>
  );
};

export default Description2;
