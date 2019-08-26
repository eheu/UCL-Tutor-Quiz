import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { QuizQuestion } from "../QuizQuestion/QuizQuestion";
import { TimelineMax } from "gsap";

interface IQuestion {
  question: string;
  correctMd5Answers: string[];
  hint?: string;
  confetti?: boolean;
}

const questions: IQuestion[] = [
  { question: "101010", correctMd5Answers: ["a1d0c6e83f027327d8461063f4ac58a6"], hint: "Svaret på livet, universet og alt." },
  { question: "Du gennemførte quizzen! Tillykke!", correctMd5Answers: [] },
  { question: "1415926535", correctMd5Answers: ["72ab8af56bddab33b269c5964b26620a", "d2a0d0339fb01d4a6fb8089979c04fe0", "eccbc87e4b5ce2fe28308fd9f2a7baf3"], hint: "Der mangler et ciffer." },
  { question: "#ff0000", correctMd5Answers: ["c72f8766eb9554693ae3e25342d5d5c0", "bda9643ac6601722a28f238714274da4"], hint: "Svaret er ikke komplementært." },
  { question: "SELECT * FROM Customers", correctMd5Answers: ["ac5c74b64b4b8352ef2f181affb5ac2a"], hint: "Nogle kalder mig en 2'er, men ingen har hørt om 1'eren." },
  { question: "Console.Writeline(”Hello World”);", correctMd5Answers: ["240aa2cec4b29c56f3bee520a8dcee7e", "a20d785dbacb8f41a3b7392aa7d03b78"], hint: "Hvorfor skal dataloger bruge briller? Fordi de ikke kan..." },
  { question: "3 6 8 4 8 10 5 10", correctMd5Answers: ["c20ad4d76fe97759aa27a0c99bff6710"], hint: "Hvilket tal er det næste i rækken?" },
  { question: "21 3 10 70 10 17 119 17", correctMd5Answers: ["1ff1de774005f8da13f42943881c655f"], hint: "Hvilket tal er det næste tal i rækken" },
  { question: "2A", correctMd5Answers: ["a1d0c6e83f027327d8461063f4ac58a6"], hint: "Cirkelkomposition" },
];
const timeLine = new TimelineMax({ paused: true });

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <QuizQuestion
        {...questions[count]}
        timeLine={timeLine}
        renderNextQuestion={(success: boolean) => {
          if (success) setCount(count + 1);
        }}
      />
    </Layout>
  );
};

export { App };
