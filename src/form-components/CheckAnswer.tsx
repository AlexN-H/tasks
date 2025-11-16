import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>('');
    
    function updateAnswer(answer: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(answer.target.value)
    }

    let result;
    if(answer === expectedAnswer){
        result = "✔️"
    }else{
        result = "❌"
    }

    return <div>
    <Form.Group controlId="formAnswer">
    <Form.Label>Enter Answer</Form.Label>
      <Form.Control
        value={answer}
        onChange={updateAnswer} />
    </Form.Group>
    <div>
        answer is {result}
    </div>
  </div>;

}
