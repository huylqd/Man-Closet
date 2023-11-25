import TitleGap from "@/components/titleGap";
import React from "react";

const Welcome = () => {
  return (
    <>
      <div>
        <TitleGap title="MANCLOSET XIN CHÀO"/>

        <h3 className="text-center max-w-[1000px] mx-auto md:text-md font-medium text-gray-600">
          Chào mừng bạn đến với shop thời trang MANCLOSET. Chúng tôi rất vui khi
          được bạn ghé thăm, và chúng tôi xin đảm bảo rằng nơi đây sẽ nâng cao
          gu thời trang của bạn.
        </h3>
      </div>
    </>
  );
};

export default Welcome;
