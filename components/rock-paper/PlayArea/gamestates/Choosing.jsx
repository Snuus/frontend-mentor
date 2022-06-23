import React from "react";
import PlayButton from "../../PlayButton";
import { tw } from "twind";
export default function Choosing({ start }) {
  return (
    <section
      className={tw` grid  grid-rows-3  justify-items-center mt-14 max-w-xl m-auto`}
      style={{
        backgroundImage: `url(${"images/bg-pentagon.svg"})`,
        backgroundPosition: "center",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={tw`grid grid-cols-3 `}>
        {" "}
        <PlayButton
          start={start}
          gridPos={"2"}
          order={"2"}
          shape={"scissors"}
        />
      </div>

      <div className={tw`grid grid-cols-3  my-[-5px] `}>
        {" "}
        <PlayButton start={start} gridPos={"1"} order={"1"} shape={"spock"} />
        <PlayButton start={start} gridPos={"3"} order={"3"} shape={"paper"} />
      </div>
      <div className={tw`grid grid-cols-6 gap-12 my-[10px] `}>
        {" "}
        <PlayButton start={start} gridPos={"2"} order={"1"} shape={"lizard"} />
        <PlayButton start={start} gridPos={"4"} order={"3"} shape={"rock"} />
      </div>
    </section>
  );
}
