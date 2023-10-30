'use client'
import { ImgProductBanner } from "@/components/banner";
import { GridProduct, OfferList, ProductCarousel, ProductList } from "@/components/main/pageComponents/home";
import React from "react";

// demo data
import { productCarouselData } from "./demo.data";
import { BannerCarousel } from "@/components/carousel";
import { listProduct } from "@/data/product";

const Home = () => {
  return (
    <div>
      <section>
        <BannerCarousel/>
      </section>
      <section className="pt-10 md:py-16 section_container">
        <ProductCarousel title="Sản Phẩm Đặc Sắc" data={listProduct()}/>
      </section>
      <section className="pt-10 md:py-16 section_container">
        <ProductList title="Sản Phẩm Mới Nhất" data={listProduct()}/>
      </section>
      <section className="pt-10 md:py-16 section_container">
        <OfferList/>
      </section>
      <section className="pt-10 md:py-16">
        <ImgProductBanner/>
      </section>
      <section className="section_container pt-10 md:py-16">
        <GridProduct/>
      </section>
    </div>
  );
};

export default Home;
