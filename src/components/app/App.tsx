import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { QuizQuestion } from "../QuizQuestion/QuizQuestion";
import { TimelineMax } from "gsap";

interface IQuestion {
  question: string;
  correctHashedAnswer: string;
  hint?: string;
}

const questions: IQuestion[] = [{ question: "Spørgsmål a ", correctHashedAnswer: "0CC175B9C0F1B6A831C399E269772661", hint: "Hint: svaret er a" }, { question: "2", correctHashedAnswer: "b" }, { question: "3", correctHashedAnswer: "c" }, { question: "4", correctHashedAnswer: "d" }, { question: "5", correctHashedAnswer: "e" }, { question: "6", correctHashedAnswer: "f" }, { question: "7", correctHashedAnswer: "g" }, { question: "8", correctHashedAnswer: "h" }, { question: "9", correctHashedAnswer: "i" }, { question: "10", correctHashedAnswer: "j" }];
const timeLine = new TimelineMax({ paused: true});

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <QuizQuestion
        {...questions[count]}
        timeLine={timeLine}
        renderNextQuestion={() => {
          setCount(count + 1);
        }}
      />
    </Layout>
  );
};

export { App };