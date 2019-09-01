import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { QuizQuestion } from "../QuizQuestion/QuizQuestion";
import { TimelineMax } from "gsap";
import { Line } from "rc-progress";

interface IQuestion {
  question: string;
  correctMd5Answers: string[];
  hint?: string;
  confetti?: boolean;
}

const questions: IQuestion[] = [
  { question: "101010.\nHvilket decimaltal er det? 🤔", correctMd5Answers: ["a1d0c6e83f027327d8461063f4ac58a6"], hint: "Hvad er svaret på livet, universet og alt?" },
  { question: "SELECT * FROM Customers.\nHvilket sprog er det? 🤔", correctMd5Answers: ["ac5c74b64b4b8352ef2f181affb5ac2a"], hint: "Mange kalder det \"Sequel\", men kun få har hørt om 1'eren." },
  { question: "1415926535.\nHvilken konstant tænker jeg på? 🤔", correctMd5Answers: ["72ab8af56bddab33b269c5964b26620a", "d2a0d0339fb01d4a6fb8089979c04fe0", "eccbc87e4b5ce2fe28308fd9f2a7baf3"], hint: "Mangler der et tal før decimalerne?" },
  { question: "3  6  8  4  8  10  5  10.\nHvad er det næste tal i rækken? 🤔", correctMd5Answers: ["c20ad4d76fe97759aa27a0c99bff6710"], hint: "Det er ikke dobbelt så svært at gange og dividere som at lægge til." },
  { question: "21  3  10  70  10  17  119  17.\nHvad er det næste tal i rækken? 🤔", correctMd5Answers: ["1ff1de774005f8da13f42943881c655f"], hint: "Dette mønster kan få dig i syv sind." },
  { question: "Console.Writeline(”Hello World”); Hvilket sprog er det? 🤔", correctMd5Answers: ["240aa2cec4b29c56f3bee520a8dcee7e", "a20d785dbacb8f41a3b7392aa7d03b78"], hint: "Hvorfor bruger dataloger briller? Fordi de ikke kan..." },
  { question: "#ff0000.\nHvad betyder det? 🤔", correctMd5Answers: ["c72f8766eb9554693ae3e25342d5d5c0", "bda9643ac6601722a28f238714274da4"], hint: "Svaret er ikke grøn eller blå." },
  { question: "2A.\nHvilket decimaltal er det? 🤔", correctMd5Answers: ["a1d0c6e83f027327d8461063f4ac58a6"], hint: "Der er 256 svarmuligheder." },
  { question: "Du gennemførte quizzen! Tillykke! 🥳", correctMd5Answers: [], confetti: true }
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
      <Line percent={getPercentFromCount(count)} strokeWidth={4} strokeColor={"#FAE769"}   />
    </Layout>
  );

  function getPercentFromCount(count: number): number {
    return (count + 1) / questions.length * 100;
  }
};

export { App };
