import { Hero } from "@/components/landing/hero";
import { Moments } from "@/components/landing/moments";
import { BigPicture } from "@/components/landing/big-picture";
import { Methodology } from "@/components/landing/methodology";
import { PracticeSlider } from "@/components/landing/practice-slider";
import { Fit } from "@/components/landing/fit";
import { Reviews } from "@/components/landing/reviews";
import { Faq } from "@/components/landing/faq";
import { Authority } from "@/components/landing/authority";
import { Footer } from "@/components/landing/footer";
import { MobileSticky } from "@/components/landing/mobile-sticky";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Moments />
        <BigPicture />
        <Methodology />
        <PracticeSlider />
        <Fit />
        <Reviews />
        <Faq />
        <Authority />
      </main>
      <Footer />
      <MobileSticky />
    </>
  );
}
