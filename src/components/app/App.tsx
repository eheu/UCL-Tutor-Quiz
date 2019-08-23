import React, { useState, useRef, RefObject } from "react";
import { Layout } from "../layout/Layout";
import { QuizQuestion } from "../levels/QuizQuestion";
import { TimelineMax } from "gsap";

interface QuizLevel {
  question: string;
  correctAnswer: string;
  hint?: string;
}

const levels: QuizLevel[] = [{ question: "1", correctAnswer: "a", hint: "Hint: svaret er a" }, { question: "2", correctAnswer: "b" }, { question: "3", correctAnswer: "c" }, { question: "4", correctAnswer: "d" }, { question: "5", correctAnswer: "e" }, { question: "6", correctAnswer: "f" }, { question: "7", correctAnswer: "g" }, { question: "8", correctAnswer: "h" }, { question: "9", correctAnswer: "i" }, { question: "10", correctAnswer: "j" }];
const timeLine = new TimelineMax();

const App = () => {
  const [count, setCount] = useState(0);
  const main: RefObject<HTMLDivElement> = useRef(null);
  return (
    <Layout>
      <div ref={main}>
        <QuizQuestion
          {...levels[count]}
          timeLine={timeLine}
          renderNextLevel={() => {
            setCount(count + 1);
          }}
        />
      </div>
    </Layout>
  );
};

export { App };
