import React, { useState, useEffect } from "react";
import Choosing from "./gamestates/Choosing";

import Playing from "./gamestates/Playing";

export default function PlayArea({ setScore, score }) {
  const [playing, setPlaying] = useState(false);
  const [userPicked, setUserPicked] = useState();
  const [timerId, setTimerId] = useState();
  const [computerPick, setComputerPick] = useState({ pick: "", done: false });
  const [winner, setWinner] = useState({
    checking: true,
    won: false,
    message: "",
  });
  const generateComputerPick = async () => {
    const pick = Math.floor(Math.random() * 5) + 1;

    switch (pick) {
      case 1:
        setComputerPick({ pick: "rock", done: true });

        break;
      case 2:
        setComputerPick({ pick: "scissors", done: true });
        break;
      case 3:
        setComputerPick({ pick: "paper", done: true });
        break;
      case 4:
        setComputerPick({ pick: "spock", done: true });
        break;
      case 5:
        setComputerPick({ pick: "lizard", done: true });
        break;
    }
  };

  const checkWinner = async (user, pc) => {
    const winMessage = "You have won!";
    const loseMessage = "You have lost!";
    const TieMessage = "Its a tie!";
    console.log(score);
    console.log((user == "rock" && pc == "scissors") || pc == "lizard");
    switch (true) {
      case (user == "rock" && pc == "scissors") ||
        (user == "rock" && pc == "lizard"):
        setWinner({ checking: false, won: true, message: winMessage });
        setScore(score + 1);
        break;
      case (user == "scissors" && pc == "paper") ||
        (user == "scissors" && pc == "lizard"):
        setWinner({ checking: false, won: true, message: winMessage });
        setScore(score + 1);
        break;
      case (user == "paper" && pc == "spock") ||
        (user == "paper" && pc == "rock"):
        setWinner({ checking: false, won: true, message: winMessage });
        setScore(score + 1);
        break;
      case (user == "lizard" && pc == "spock") ||
        (user == "lizard" && pc == "paper"):
        setWinner({ checking: false, won: true, message: winMessage });
        setScore(score + 1);
        break;
      case (user == "spock" && pc == "rock") ||
        (user == "spock" && pc == "scissors"):
        setWinner({ checking: false, won: true, message: winMessage });
        setScore(score + 1);
        break;
      case user == pc:
        setWinner({ checking: false, won: false, message: TieMessage });

        break;
      default:
        setWinner({ checking: false, won: false, message: loseMessage });
        setScore(0);
    }
  };

  useEffect(() => {
    if (computerPick.done) {
      checkWinner(userPicked, computerPick.pick);
    }
  }, [userPicked, computerPick]);

  const start = async (picked) => {
    setComputerPick({});
    setPlaying(!playing);
    setUserPicked(picked);
    let timerKillId = setTimeout(function () {
      generateComputerPick();
      setTimerId(timerKillId);
    }, 3000);
  };

  const stop = () => {
    clearTimeout(timerId);
    setPlaying(false);
    setUserPicked();
    setComputerPick({});
  };

  return (
    <section>
      {!playing ? (
        <Choosing start={start} />
      ) : (
        <Playing
          start={start}
          stop={stop}
          picked={userPicked}
          winner={winner}
          computerPicked={computerPick.done ? computerPick : ""}
        />
      )}
    </section>
  );
}
