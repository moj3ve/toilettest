import React, { useState } from "react";
import { questions } from "./questions";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { axes } from "./axes";

function Test() {
  const [question, setQuestion] = useState(0);
  const [axess, setAxes] = useState({});
  const history = useHistory();

  const answer = (val: number) => {
    const q = questions[question];
    const a = { ...axess };
    a[q.affect[0]] = (a[q.affect[0]] || 0) + q.affect[1] * val;
    setAxes(a);

    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      let params = "";
      for (let axis of axes) {
        params += (a[axis.id] || 0) + ",";
      }
      history.push("/results/" + params);
    }
  };

  return (
    <div className="App">
      <p>
        <ProgressBar
          now={((question + 1) / questions.length) * 100}
          label={question + 1 + "/" + questions.length}
        />
      </p>
      <p>
        <h2>{questions[question].text}</h2>
      </p>
      {!questions[question].forceYes ? (
        <>
          <p>
            <Button variant="secondary" onClick={() => answer(1)}>
              yes
            </Button>
            <Button variant="secondary" onClick={() => answer(0.5)}>
              maybe yes
            </Button>
            <Button variant="secondary" onClick={() => answer(0)}>
              no idea
            </Button>
            <Button variant="secondary" onClick={() => answer(-0.5)}>
              maybe no
            </Button>
            <Button variant="secondary" onClick={() => answer(-1)}>
              no
            </Button>
          </p>
        </>
      ) : (
        <>
          <p>
            <Button variant="secondary" onClick={() => answer(1)}>
              yes
            </Button>
            <Button variant="secondary" onClick={() => answer(1)}>
              yes
            </Button>
            <Button variant="secondary" onClick={() => answer(1)}>
              yes
            </Button>
            <Button variant="secondary" onClick={() => answer(1)}>
              yes
            </Button>
            <Button variant="secondary" onClick={() => answer(1)}>
              yes
            </Button>
          </p>
        </>
      )}
    </div>
  );
}

export default Test;
