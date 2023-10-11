import TitleDivide from "@/components/titleDivide";
import React from "react";
import { banner1, banner2, trendingProducts } from "./demo.data";
import { ProductCardV1 } from "@/components/card";
import { v4 as uuidv4 } from "uuid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Banner = ({
  label,
  href,
  imageUrl,
  btnContent
}: {
  label: string;
  btnContent: string
  href: string;
  imageUrl: string | StaticImageData;
}) => {
  return (
    <div className="bg-white dark:bg-zinc-90 p-6">
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
    <div>
      <div>
        <TitleDivide title="Sản Phẩm Trending" align="center" />
      </div>
      <div>
        <div className="flex ml-[-30px] py-4">
          {trendingProducts.map((item) => (
            <ProductCardV1
              key={uuidv4()}
              data={item}
              marginLeft={30}
              previews={4}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col gap-4 md:gap-6 py-4">
          <div className="grow"><Banner {...banner1}/></div>
          <div className="grow"><Banner {...banner2}/></div>
        </div>
      </div>
    </div>
  );
};

export default GridProduct;
