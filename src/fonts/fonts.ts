import { Noto_Sans_KR } from 'next/font/google';
import localFont from "next/font/local";
export const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});



export const globalFont = localFont({
  src: [
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Pretendard-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--main-font",
  display: "swap",
});