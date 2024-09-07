import Image from "next/image";
import * as styles from "./DeliveryInfo.css";
import React from "react";
import { precautions } from "@/constants/info";
import Link from "next/link";
import {
  nextButton,
  prevButton,
  SuscribeButtonWrapper,
} from "../subscribeShop/SubscribeShop.css";

export default function DeliveryInfoPage() {
  const id = "4407"
  return (
    <div className={styles.wrapperContainer}>
      <section className={styles.deliveryInfoTopContent}>
        <div>
          <div className={styles.deliveryInfoTitle}>- 정기구독 배송안내 -</div>
          <div className={styles.deliveryInfoTextRow}>
            고객님의 정기구독 발송 예정일은
          </div>
          <div className={styles.deliveryInfoTextRow}>
            <span className={styles.deliveryInfoTextHighlight}>09월 17일</span>{" "}
            입니다.
          </div>
          <div className={styles.deliveryInfoTextRow3}>
            <em>풀 플랜</em> - 하루 <em>두 끼</em>
            <span> 기준, </span>
            <em>2</em>주마다 정기 배송됩니다. (28팩, 2주)
          </div>
        </div>
      </section>

      <section className={styles.deliveryInfoImageBox}>
        <Image
          src="/delivery_schedule.png"
          alt="배송 스케줄 이미지"
          width={500}
          height={300}
          layout="responsive"
        />
      </section>

      <section className={styles.deliveryInfoMidContent}>
        <h2 className={styles.deliveryTitle}>- 주의사항 -</h2>
        <div className={styles.deliveryInfoMidContentBox}>
          {precautions.map((item) => (
            <div
              key={item.id}
              className={styles.deliveryInfoMidContentInnerBox}
            >
              <Image
                src={item.imgSrc}
                alt={item.alt}
                width={120}
                height={108}
              />
              <div className={styles.deliveryInfoMidContentText}>
                {item.title}
              </div>
              <div className={styles.deliveryInfoMidSubText}>
                {item.description.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.PackageImageSection}>
        <Image
          className={styles.PackageImage}
          src="/delivery_package.webp"
          alt="패키지"
          width={560}
          height={708}
        />
      </section>
      <section className={SuscribeButtonWrapper}>
        <Link href="/" passHref>
          <button className={prevButton}>홈으로</button>
        </Link>
        <Link href={`/order/ordersheet/subscribe/${id}`} passHref>
          <button className={nextButton}>주문하러 가기</button>
        </Link>
      </section>
    </div>
  );
}
