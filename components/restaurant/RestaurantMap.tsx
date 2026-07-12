"use client";

import dynamic from "next/dynamic";

const RestaurantMap = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-xl border flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default RestaurantMap;