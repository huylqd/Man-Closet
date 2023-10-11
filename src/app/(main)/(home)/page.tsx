import { ImgProductBanner } from "@/components/banner";
import { GridProduct, OfferList, ProductCarousel, ProductList } from "@/components/main/pageComponents/home";
import React from "react";

// demo data
import { productCarouselData } from "./demo.data";
import { BannerCarousel } from "@/components/carousel";

const Home = () => {
  return (
    <div className="pb-10">
      <section>
        <BannerCarousel/>
      </section>
      <section className="pt-10 md:py-16 section_container">
        <ProductCarousel title="Sản Phẩm Đặc Sắc" data={productCarouselData}/>
      </section>
      <section className="pt-10 md:py-16 section_container">
        <ProductList title="Sản Phẩm Mới Nhất" data={productCarouselData}/>
      </section>
      <section className="pt-10 md:py-16 section_container">
        <OfferList/>
      </section>
      <section className="pt-10 md:py-16">
        <ImgProductBanner/>
      </section>
      <section className="section_container">
        <GridProduct/>
      </section>
    </div>
  );
};

export default Home;
