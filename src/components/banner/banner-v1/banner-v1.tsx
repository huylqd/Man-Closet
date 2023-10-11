import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface BannerV1Props {
  src: string;
  href?: string;
  subTitle: string;
  title: string;
  description: string;
}

const BannerV1 = ({
  src,
  href,
  subTitle,
  title,
  description,
}: BannerV1Props) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Image
        className="absolute inset-0 z-[-1] brightness-[0.65] object-cover"
        layout="fill"
        style={{ objectFit: 'cover' }} 
        src={src}
        alt="banner img"
      />
      <div
        className={cn(
          "section_container h-full flex flex-col justify-center gap-4 md:gap-6"
        )}
      >
        <h4 className="text-lg md:text-xl drop-shadow font-medium text-white">
          {subTitle}
        </h4>
        <h2 className="text-3xl md:text-5xl tracking-wider max-w-2xl leading-snug font-semibold drop-shadow text-white">
          {title}
        </h2>
        <p className="text-sm md:text-base ff-secondary font-medium drop-shadow-sm max-w-2xl text-zinc-200">
          {description}
        </p>
        {href && (
          <Button
            className="w-fit px-10 drop-shadow ff-secondary"
            variant={"primary"}
          >
            Mua Ngay
          </Button>
        )}
      </div>
    </div>
  );
};

export default BannerV1;
