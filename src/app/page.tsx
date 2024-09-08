
import { layoutContainer, mainLayoutWrapper } from "@/styles/common.css";
import * as styles from "./main.css";
import MainBannerSlider from "@/components/Main/MainBanner";
import MainRecipe from "@/components/Main/MainRecipe";
import BarfSection from "@/components/Main/Description";
import Description2 from "@/components/Main/Description2";
import DifferenceSection from "@/components/Main/BarfGood";
import PremiumBarfSection from "@/components/Main/BarfSection";

export default function Home() {
  return (
    <div className={layoutContainer}>
      <div className={mainLayoutWrapper}>
        <MainBannerSlider/>
        <MainRecipe />
        <BarfSection />
        <Description2/>
        <DifferenceSection/>
        <PremiumBarfSection/>
      </div>
    </div>
  );
}
