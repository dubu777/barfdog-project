import Image from 'next/image';
import * as styles from './PaymentMethod.css';

const paymentMethods = [
  {
    id: 'CREDIT_CARD',
    imgSrc: '/order_card.png',
    alt: '카드 이미지',
    label: '신용카드',
  },
  {
    id: 'NAVER_PAY',
    imgSrc: '/order_naver.png',
    alt: '네이버 아이콘',
    label: '네이버페이',
  },
  {
    id: 'KAKAO_PAY',
    imgSrc: '/order_kakao.png',
    alt: '카카오 아이콘',
    label: '카카오페이',
  },
];

export default function PaymentMethod() {
  return (
    <section className={styles.paymentMethodSection}>
      <div className={styles.paymentMethodTitle}>결제수단</div>
      <ul className={styles.paymentMethodGrid}>
        {paymentMethods.map((method) => (
          <li
            key={method.id}
            className={styles.paymentMethodItem}
            data-payment-method={method.id}
          >
            <div className={styles.paymentMethodImage}>
              <Image
                src={method.imgSrc}
                alt={method.alt}
                width={24}
                height={24}
              />
            </div>
            <div className={styles.paymentMethodText}>{method.label}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
