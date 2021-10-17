import * as React from "react";
import useInterval from "react-useinterval";
import useTimeout from "usetimeout-react-hook";
import { FunctionComponent, useState, useEffect } from "react";

interface ImaProps {
  text: string[];
}

const Ima: FunctionComponent<ImaProps> = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [curText, setCurText] = useState(text[index]);
  const [nextText, setNextText] = useState(text[index + 1]);

  function increment() {
    if (index === text.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  const timerInterval = 5000;

  useInterval(increment, timerInterval);

  useEffect(() => {
    let textToShow = text[index];
    let shownText = "";
    const typeSpeed = timerInterval / 3;
    let timeouts = [];
    textToShow.split("").forEach((letter, i) => {
      timeouts.push(
        setTimeout(() => {
          shownText += letter;
          setCurText(shownText);
        }, i * 50),
      );

      timeouts.push(
        setTimeout(() => {
          shownText = shownText.slice(0, -1);
          setCurText(shownText);
        }, i * 50 + 2500),
      );

      return () => {
        timeouts.forEach((timeout) => {
          clearTimeout(timeout);
        });
      };
    });
  }, [index]);

  function createTypingCounters(shownText: string) {
    shownText += "f";
  }

  return <h2 className="noselect">I am {curText}</h2>;
};

export default Ima;
