
import { layoutContainer, mainLayoutWrapper } from "@/styles/common.css";
import * as styles from "./main.css";
import MainBannerSlider from "@/components/Main/MainBanner";
import MainRecipe from "@/components/Main/MainRecipe";
import BarfSection from "@/components/Main/Description";

export default function Home() {
  return (
    <div className={layoutContainer}>
      <div className={mainLayoutWrapper}>
        <MainBannerSlider/>
        <MainRecipe />
        <BarfSection />
      </div>
    </div>
  );
}
