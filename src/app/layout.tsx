import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/global.css";
import { theme } from "@/styles/theme.css";
import { globalFont } from "@/fonts/fonts";
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "바프독 | BARFDOG",
  description:
    "내 반려동물에게 꼭 맞는 1:1 맞춤 플랜, 나이, 품종, 체중, 활동량, 알러지 등을 고려한 완벽한 식단을 간편하게 정기배송 받을 수 있습니다. 바프독 시작하기.",
  icons: "https://www.barfdog.co.kr/favicon/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={theme}>
      <body className={globalFont.variable}>
      <Header/>
        {children}
      </body>
    </html>
  );
}
