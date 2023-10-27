import TitleDivide from "@/components/titleDivide";
import React from "react";
import { bannerData, trendingProducts } from "./demo.data";
import { ProductCardV1 } from "@/components/card";
import { v4 as uuidv4 } from "uuid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridView } from "@/components/dataViews";

const Banner = ({
  label,
  href,
  imageUrl,
  btnContent,
}: {
  label: string;
  btnContent: string;
  href: string;
  imageUrl: string | StaticImageData;
}) => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded shadow h-full w-full">
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <h3 className="text-xl md:text-2xl font-medium">{label}</h3>
        <Link href={href}>
          <Button variant={"primary"}>{btnContent}</Button>
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <figure className="relative w-[100px] h-[100px]">
          <Image
            src={imageUrl}
            alt="banner item"
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        </figure>
      </div>
    </div>
  );
};

const GridProduct = () => {
  return (
    <div className="py-16">
      <div>
        <TitleDivide title="Sản Phẩm Trending" align="center" />
      </div>
      <div>
        <GridView className="py-3 gap-y-6" marginLeft="30px" wrap previews={4}>
          {trendingProducts.map((item: any) => (
            <ProductCardV1 key={uuidv4()} data={item} marginLeft="30px" />
          ))}
        </GridView>
        <div className="flex md:flex-row flex-col gap-4 md:gap-6 md:py-10 py-6">
          {bannerData.map((item) => (
            <div className="flex-1" key={uuidv4()}>
              <Banner {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridProduct;
