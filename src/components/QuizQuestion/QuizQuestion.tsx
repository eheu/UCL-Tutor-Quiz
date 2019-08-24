import React, { FC, useRef, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { TimelineMax, Sine } from "gsap";
// import * as UCL from "./ucl.svg";
import "./quizquestion.css";

interface IProps {
  renderNextLevel: () => void;
  question: string;
  correctAnswer: string;
  hint?: string;
  timeLine: TimelineMax;
}

const QuizQuestion: FC<IProps> = ({ question, correctAnswer, hint = undefined, renderNextLevel, timeLine }) => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const loadingDivRef = useRef<SVGSVGElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (values: any) => {
    timeLine.play();
    const loadingDiv = loadingDivRef.current as SVGSVGElement;
    loadingDiv.style.visibility = "visible";
    await sleep(3000);
    loadingDiv.style.visibility = "hidden";
    if ((values.answer as string).trim().toLowerCase() !== correctAnswer) {
      return { [FORM_ERROR]: "Forkert svar!" };
    } else {
      renderNextLevel();
    }
  };

  useEffect(() => {
    timeLine.paused &&
      timeLine.staggerTo(
        loadingDivRef.current!.children,
        0.3,
        {
          y: -10,
          repeat: -1,
          repeatDelay: 0.1,
          yoyo: true,
          ease: Sine.easeInOut
        },
        0.3
      );
    timeLine.pause();
  });

  return (
    <Form
      onSubmit={onSubmit}
      render={({ submitError, handleSubmit, submitting, pristine }) => (
        <>
          <form onSubmit={handleSubmit}>
            <span className="question">{question}</span>
            <Field name="answer">{({ input }) => <input {...input} ref={inputRef} type="text" placeholder="Dit svar" />}</Field>
            <button type="submit" disabled={submitting || pristine}>
              Svar
            </button>
            <div className="error">
              {submitError && <span className="errorMessage">{submitError}</span>}
              {submitError && hint && <span className="hint">{hint}</span>}
            </div>

            {/* <UCL />x  */}

            <svg ref={loadingDivRef} height="100" width="200" visibility="hidden">
              <circle cx="50" cy="50" r="10" fill="black" />
              <circle cx="100" cy="50" r="10" fill="black" />
              <circle cx="150" cy="50" r="10" fill="black" />
            </svg>
          </form>
          {/* {submitError && <span ref={failXRef}>X</span>}
          {submitError || <span ref={successCheckMarkRef}>&#10004;</span>} */}
        </>
      )}
    />
  );
};

export { QuizQuestion };
