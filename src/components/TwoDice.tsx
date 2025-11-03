import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [LeftDie, setLeftDie] = useState<number>(1);
    const [RightDie, setRightDie] = useState<number>(2);
    return <div>
        <div>
            <span data-testid="left-die">{LeftDie}</span>
            <span data-testid="right-die">{RightDie} </span>
        </div>

        <div>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
        </div>

        {LeftDie === 1 && RightDie === 1 ? (
                <div>Lose</div>
            ) : LeftDie === RightDie ? (
                <div>Win</div>
            ) : null}


    </div>;
}
