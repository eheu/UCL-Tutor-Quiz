import React, { FC, useRef, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { TimelineMax, TweenMax } from "gsap";
import md5 from "md5";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import "./quizquestion.css";

interface IProps {
  renderNextQuestion: (success: boolean) => void;
  question: string;
  correctMd5Answers: string[];
  timeLine: TimelineMax;
  hint?: string;
  confetti?: boolean;
}

const QuizQuestion: FC<IProps> = props => {
  const { width, height } = useWindowSize();
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const u = useRef<SVGPathElement>(null);
  const c = useRef<SVGPathElement>(null);
  const l = useRef<SVGPathElement>(null);

  const onSubmit = async (values: any) => {
    props.timeLine.play();
    const md5Answer = md5((values.answer as string).trim().toLowerCase());
    console.log(values.answer);
    await sleep(3000);
    for (let i = 0; i < props.correctMd5Answers.length; i++) {
      const correctHashedAnswer = props.correctMd5Answers[i];
      if (md5Answer !== correctHashedAnswer.trim().toLowerCase() && i === props.correctMd5Answers.length - 1) {
        props.timeLine.restart();
        props.timeLine.pause();
        blinkLogoRed(u, c, l);
        props.renderNextQuestion(false);
        return { [FORM_ERROR]: "Forkert svar!" };
      }
      if (md5Answer === correctHashedAnswer.trim().toLowerCase()) {
        props.timeLine.restart();
        props.timeLine.pause();
        blinkLogoGreen(u, c, l);
        props.renderNextQuestion(true);
        break;
      }
    }
  };

  useEffect(() => {
    rotateLogo(props.timeLine, u, c, l);
  });

  return (
    <>
      {props.confetti && <Confetti width={width} height={height}/>}
      <Form
        onSubmit={onSubmit}
        render={({ submitError, handleSubmit, submitting, pristine }) => (
          <>
            <form onSubmit={handleSubmit}>
              <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="100pt" height="70pt" version="1.1" viewBox="0 0 1000 709">
                <path ref={u} id="u" fill="#ffffff" d=" M 0.00 0.00 L 96.06 0.00 C 100.40 18.33 103.70 37.12 111.48 54.41 C 115.31 63.06 120.47 71.11 126.78 78.16 C 152.36 109.49 192.58 128.40 233.06 127.65 C 277.32 124.98 318.66 97.59 340.01 58.98 C 349.59 40.66 352.50 19.95 356.86 0.00 L 454.74 0.00 C 451.20 20.65 448.38 41.49 442.84 61.74 C 435.47 89.55 421.78 115.49 404.13 138.12 C 380.11 168.84 348.08 193.45 311.71 207.70 C 252.81 231.18 183.98 229.07 127.07 200.84 C 116.35 195.64 106.34 189.15 96.41 182.59 C 78.17 170.21 62.19 154.63 48.91 137.05 C 23.06 102.79 7.23 61.66 0.00 19.54 L 0.00 0.00 Z" opacity="1.00" />
                <path ref={c} id="c" fill="#ffffff" d=" M 500.43 243.52 C 524.46 234.57 550.49 230.36 576.08 233.17 C 577.12 233.50 579.57 232.87 579.14 234.82 C 580.06 264.34 580.41 293.91 578.73 323.41 C 558.65 331.52 536.42 333.17 516.95 342.96 C 505.75 348.93 495.13 356.19 486.28 365.34 C 462.17 389.85 449.34 424.77 451.22 459.03 C 450.76 474.19 453.80 489.39 459.82 503.30 C 471.35 529.96 492.26 552.01 516.99 566.94 C 535.75 577.93 557.86 579.77 578.79 583.70 C 580.41 615.54 579.95 647.44 578.99 679.29 C 537.21 680.13 495.62 667.72 460.20 645.79 C 426.32 624.95 397.57 595.53 378.45 560.58 C 363.46 533.21 354.61 502.31 354.09 471.05 C 354.14 464.37 353.36 457.72 353.36 451.04 C 352.62 390.81 378.80 330.83 423.42 290.38 C 446.19 270.59 472.08 254.07 500.43 243.52 Z" opacity="1.00" />
                <path ref={l} id="l" fill="#ffffff" d=" M 703.94 233.20 C 736.36 231.52 768.87 231.57 801.29 233.17 C 803.34 310.10 801.03 387.07 802.17 464.01 C 802.67 482.86 809.43 501.00 818.79 517.18 C 826.08 529.45 834.17 541.61 845.40 550.67 C 867.33 568.98 895.34 577.51 922.74 583.70 C 925.56 615.54 924.77 647.58 922.91 679.46 C 867.31 675.99 812.16 654.11 771.90 615.14 C 758.97 602.83 748.38 588.37 738.49 573.59 C 716.03 539.05 704.07 498.09 702.88 457.00 C 702.60 449.33 702.98 441.65 703.03 433.98 C 703.95 367.06 701.81 300.11 703.94 233.20 Z" opacity="1.00" />
              </svg>
              <span className="question">{props.question}</span>
              <Field name="answer">{({ input }) => <input {...input} type="text" placeholder="Dit svar" autoComplete="off" disabled={ submitting || props.confetti} />}</Field>
              <button type="submit" disabled={submitting || pristine || props.confetti}>
                Svar
              </button>
              <div className="error">
                {submitError && <span className="errorMessage">{submitError}</span>}
                {submitError && props.hint && <span className="hint">Hint: {props.hint}</span>}
              </div>
              {/* <UCL />x  */}

              {/* <svg ref={loadingDivRef} height="100" width="200" visibility="hidden">
              <circle cx="50" cy="50" r="10" fill="black" />
              <circle cx="100" cy="50" r="10" fill="black" />
              <circle cx="150" cy="50" r="10" fill="black" />
            </svg> */}
              {/* <img ref={loadingDivRef} src={UCL} className="App-logo" alt="logo" /> */}
            </form>
            {/* {submitError && <span ref={failXRef}>X</span>}
          {submitError || <span ref={successCheckMarkRef}>&#10004;</span>} */}
          </>
        )}
      />
    </>
  );
};

function blinkLogoGreen(u: React.RefObject<SVGPathElement>, c: React.RefObject<SVGPathElement>, l: React.RefObject<SVGPathElement>) {
  TweenMax.fromTo(
    [u.current!, c.current!, l.current!],
    0.5,
    {
      fill: "white"
    },
    {
      fill: "green",
      repeat: 1,
      yoyo: true
    }
  );
}

function blinkLogoRed(u: React.RefObject<SVGPathElement>, c: React.RefObject<SVGPathElement>, l: React.RefObject<SVGPathElement>) {
  TweenMax.fromTo(
    [u.current!, c.current!, l.current!],
    0.5,
    {
      fill: "white"
    },
    {
      fill: "red",
      repeat: 1,
      yoyo: true
    }
  );
}

function rotateLogo(timeLine: TimelineMax, u: React.RefObject<SVGPathElement>, c: React.RefObject<SVGPathElement>, l: React.RefObject<SVGPathElement>) {
  timeLine.to(u.current!, 1, {
    rotation: 360,
    transformOrigin: "50% 50%"
  });
  timeLine.to(c.current!, 1, {
    rotation: 360,
    transformOrigin: "50% 50%"
  });
  timeLine.to(l.current!, 1, {
    rotation: 360,
    transformOrigin: "50% 50%"
  });
}

export { QuizQuestion };
