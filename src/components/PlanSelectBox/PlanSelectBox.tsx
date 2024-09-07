import React from "react";
import * as styles from "./PlanSelectBox.css";
import { calculatePrices } from "@/utils/calculatePrices";
import Image from "next/image";

interface PlanBoxProps {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  bestLabel?: string;
  mealsPerDay: number;
  weeks: number;
  packs: number;
  discount: string;
  isSelected: boolean;
  option: string | null; 
  onSelect: (id: string) => void;
}

export default function PlanBox({
  id,
  title,
  subtitle,
  imageSrc,
  bestLabel,
  mealsPerDay,
  weeks,
  packs,
  discount,
  isSelected,
  onSelect,
  option,
}: PlanBoxProps) {
  const { totalPrice, finalPrice, pricePerPack, gramsPerPack } = calculatePrices(id, option)
console.log(totalPrice);

  return (
    <label
      htmlFor={id}
      className={styles.subscribePlansContainer({ isSelected })}
      onClick={() => onSelect(id)}
    >
      <div>
        {bestLabel && <i className={styles.bestLabel}>{bestLabel}</i>}
        <ul className={styles.planDetails}>
          <li>
            <div className={styles.planImgWrapper}>
              <div className={styles.planImgBox}>
                <Image
                  src={imageSrc}
                  alt={`${title} 아이콘`}
                  className={styles.planImage}
                  layout="fill"
                />
              </div>
            </div>
            <h2 className={styles.planTitle}>{title}</h2>
          </li>
          <li>
            <p className={styles.planSubtitle}>{subtitle}</p>
          </li>
          <div className={styles.planContentWrapper}>
            <li>
              <div className={styles.planContentBox}>
                하루에 {mealsPerDay}팩
              </div>
              <div className={styles.planContentBox}>{weeks}주 정기배송</div>
              <div className={styles.planContentBox}>
                {gramsPerPack}(1팩기준)
              </div>
              <div className={styles.planContentBox}>
                {packs}팩 x {pricePerPack}
              </div>
            </li>
          </div>
          <li>
            <div className={styles.planPrice}>
              {discount}%
              <span className={styles.planPrice2}> {totalPrice}</span>
            </div>
            <div className={styles.planFinalPrice}>{finalPrice}</div>
          </li>
        </ul>
      </div>
      <input
        id={id}
        type="radio"
        name="plan"
        value={id}
        className={styles.planInput}
      />
      <span className={styles.selectButton({ isSelected })}>{isSelected ? "선택됨" : "플랜 선택"}</span>
    </label>
  );
}
