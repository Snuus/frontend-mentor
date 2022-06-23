import Scoreboard from "../../components/rock-paper/Scoreboard";
import Head from "next/head";
import { useState, useEffect } from "react";
import PlayArea from "../../components/rock-paper/PlayArea/";
import { tw } from "twind";
export default function Home() {
  const [score, setScore] = useState(0);

  useEffect(() => {}, [score]);

  return (
    <main id="rock-paper-globals">
      <Scoreboard score={score} />
      <PlayArea setScore={setScore} score={score} />
      <footer className={tw` flex justify-center  w-full items-center mt-28`}>
        <button
          className={tw`uppercase text-xl tracking-widest font-medium  border px-12 py-2 rounded-lg`}
        >
          Rules
        </button>
      </footer>
    </main>
  );
}
