import React, { useState } from "react";
import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const[mode, setMode] = useState<boolean>(false)

    const[name, setName] = useState<string>('Your Name')

    const[isStudent, setStudent] = useState<boolean>(true)

    
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type = "switch"
                id = "Edit-Mode-Check"
                label = "Edit"
                checked = {mode}
                onChange = {updateMode}
            />
            {mode ? (
                <Form.Group controlId="EditMode">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
                />

                <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
                />
                </Form.Group>
            ):(
                <p>
                {name} is {isStudent ? "a student": "not a student"}
                </p>
            )}


        </div>
    );
}
