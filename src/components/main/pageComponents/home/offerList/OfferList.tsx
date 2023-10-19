import { v4 as uuidv4 } from "uuid";
import offerListData from "./offer-list.data";

// ui
import { ContentCard } from "@/components/card";
import TitleDivide from "@/components/titleDivide";

const OfferList = () => {
  return (
    <div className="pt-6 pb-2">
      <div>
        <TitleDivide title="Offer của Shop!" align="center" />
      </div>
      <div className="flex flex-wrap ml-[-30px] gap-y-4 py-2">
        {offerListData.map((item) => (
          <ContentCard key={uuidv4()} marginLeft={30} data={item} />
        ))}
      </div>
    </div>
  );
};

export default OfferList;
