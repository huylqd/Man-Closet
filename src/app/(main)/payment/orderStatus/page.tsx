"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const OrderStatusPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paymentStatus = searchParams.get("status");
  return (
    <>
      <section className="section_container">
        <div className="flex items-center justify-center h-[80vh] flex-col">
          <div className="pb-10">
            {paymentStatus === "success" && (
              <>
                <h2 className="font-medium text-green-500  text-center pb-2">
                  Thành công
                </h2>
                <p className="font-normal text-gray-500 text-center">
                  Cảm ơn bạn đã mua hàng!
                </p>
              </>
            )}
            {paymentStatus === "failed" && (
              <>
                <h2 className="font-medium text-rose-500  text-center b-2">
                  Thất bại
                </h2>
                <p className="font-normal text-gray-500 text-center">
                  Opps! Có lỗi đã xảy ra, vui lòng thử lại.
                </p>
              </>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/")}
              className="w-fit h-[40px] md:h-[60px] border rounded px-4"
            >
              Quay về trang chủ
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderStatusPage;
