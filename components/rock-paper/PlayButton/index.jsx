import React from "react";
import { tw } from "twind";

export default function PlayButton({ shape, order, stop, start, gridPos }) {
  return (
    <button
      onClick={start ? () => start(shape) : stop}
      className={tw`w-28   h-28 order-${order} col-start-${gridPos} p-5 rounded-full ${
        shape === "placeholder" ? "bg-placeholder" : "bg-white"
      } rounded-lg border-[15px] flex justify-center items-center ${
        shape === "placeholder" ? "border-placeholder" : `border-${shape}`
      }`}
    >
      <img className={tw` `} src={`images/icon-${shape}.svg`} alt="" />
    </button>
  );
}
