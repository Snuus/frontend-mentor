import React, { useState, useEffect } from "react";
import PlayButton from "../../PlayButton";
import { tw } from "twind";
export default function Playing({
  computerPicked,
  start,
  picked,
  winner,
  stop,
}) {
  useEffect(() => {}, [computerPicked, winner]);

  return (
    <section
      className={tw` grid  grid-rows-1  justify-items-center mt-14 max-w-xl m-auto `}
    >
      <div className={tw`grid grid-cols-2 gap-12 text-center `}>
        {" "}
        <div className={tw``}>
          <PlayButton stop={() => stop()} order={"1"} shape={picked} />
          <p className={tw`my-5 uppercase tracking-widest font-medium`}>
            You picked
          </p>
        </div>
        <div className={tw`  `}>
          {!computerPicked.done ? (
            <PlayButton start={start} order={"2"} shape={"placeholder"} />
          ) : (
            <PlayButton start={start} order={"2"} shape={computerPicked.pick} />
          )}

          <p className={tw`uppercase my-5 tracking-wide font-medium`}>
            The house picked
          </p>
        </div>
      </div>
      {computerPicked.done && !winner.checking ? (
        <p className={tw`text-center text-2xl`}>{winner.message}</p>
      ) : (
        <p></p>
      )}
    </section>
  );
}
