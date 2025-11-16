import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(answer: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(answer.target.value)
        }

    let result;
    if(answer === expectedAnswer){
        result = "✔️"
    }else{
        result = "❌"
    }


    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Choose an Answer Below</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                  { options.map((option: string) =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Form.Select>
            </Form.Group>
            <div>
            The users answer is {result}
            </div>
        </div>
    );
}
