import FeaturedCardsSection from "@/components/Sections/FeaturedCardsSection";
import FeaturedProductsSection from "@/components/Sections/FeaturedProductsSection";
import Footer from "@/components/Sections/Footer";
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

export default function Home() {



  return (
    <>
      <HeroSection></HeroSection>
      <Card></Card>
      <ShopNowCard></ShopNowCard>
      <SectionHeading title={"New Arrivals"} description={"Dont miss this opportunity at a special discount just for this week."} ></SectionHeading>
      <NewArrivalsProductSection></NewArrivalsProductSection>
      <MoreProductsSection></MoreProductsSection>
      <SectionHeading title={"Featured Products"} description={"Do not miss the current offers until the end of March."} ></SectionHeading>
      <FeaturedProductsSection></FeaturedProductsSection>
      <FeaturedCardsSection></FeaturedCardsSection>
      <SectionHeading title={"Best Sellers"} description={"Some of the new products arriving this weeks"} ></SectionHeading>
      <BestSellerProductSection></BestSellerProductSection>
      <TagSection></TagSection>
      <SectionHeading title={"Popular Companies"} description={"Some of the new products arriving this weeks"} ></SectionHeading>
      <TestimonialSection></TestimonialSection>
      

    </>
  )
}
