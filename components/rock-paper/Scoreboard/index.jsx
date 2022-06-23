import NextHead from "next/head";
import React, { useState, useEffect } from "react";
import { tw } from "twind";

const Scoreboard = ({ score }) => {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>Twind Next.js Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>

      <section className={tw`py-8`}>
        <header
          className={tw`border-4 flex justify-between p-3 rounded-lg max-w-xs mx-auto border-white border-opacity-[29%]`}
        >
          <img src="/rock-paper-logo.svg" alt="rock-paper-scisson-logo" />

          <div
            className={tw`flex flex-col bg-white py-2  px-5 rounded text-md text-uppercase font-semibold text-center `}
          >
            <span className={tw`text-blue text-xs`}>Score</span>
            <span
              className={tw`text-blackGray font-bold text-5xl text-center inline `}
            >
              {score}
            </span>
          </div>
        </header>
      </section>
    </>
  );
};

export default Scoreboard;
