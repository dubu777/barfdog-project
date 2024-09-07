import type { Metadata } from "next";
import { layoutContainer, layoutWrapper } from "@/styles/common.css";


export const metadata: Metadata = {
  title: "구매페이지 | BARFDOG",
  description:
    "내 반려동물에게 꼭 맞는 1:1 맞춤 플랜, 나이, 품종, 체중, 활동량, 알러지 등을 고려한 완벽한 식단을 간편하게 정기배송 받을 수 있습니다. 바프독 시작하기.",
  icons: "https://www.barfdog.co.kr/favicon/favicon-32x32.png",
};

export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className={layoutContainer}>
          <div className={layoutWrapper}>
            {children}
            </div>
        </div>

  );
}
