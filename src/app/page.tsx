import FeaturedCardsSection from "@/components/Sections/FeaturedCardsSection";
import FeaturedProductsSection from "@/components/Sections/FeaturedProductsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/HeaderTop";
import HeroSection from "@/components/Sections/HeroSection";
import MoreProductsSection from "@/components/Sections/NewArrivalCardsSection";
import NewArrivalsProductSection from "@/components/Sections/NewArrivalsProductSection";
import SectionHeading from "@/components/Sections/SectionHeading";
import ShopNowCard from "@/components/Sections/CardSection";
import Card from "@/components/Sections/SmallCard";
import Image from "next/image";
import BestSellerProductSection from "@/components/Sections/BestSellerProductSection";
import TagSection from "@/components/Sections/TagSection";
import TestimonialSection from "@/components/Sections/TestimonialSection";
import DealsOfDaySection from "@/components/Sections/DealsOfDaySection";

export default function Home() {



  return (
    <>
      <HeroSection />
      <Card />
      <ShopNowCard />
      <SectionHeading title={"New Arrivals"} description={"Dont miss this opportunity at a special discount just for this week."} />
      <NewArrivalsProductSection />
      <MoreProductsSection />
      <SectionHeading title={"Featured Products"} description={"Do not miss the current offers until the end of March."} />
      <FeaturedProductsSection />
      <FeaturedCardsSection />
      <SectionHeading title={"Best Sellers"} description={"Some of the new products arriving this weeks"} />
      <BestSellerProductSection />
      <TagSection />
      <SectionHeading title={"Deals of the Day"} description={"The freshest greengrocer products are waiting for you"} />

      <DealsOfDaySection />
      <SectionHeading title={"Popular Companies"} description={"Some of the new products arriving this weeks"} />
      <TestimonialSection />


    </>
  )
}
