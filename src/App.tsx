import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <h1>This is The Heading</h1>
                        <header className="App-header">
                            UM COS420 with React Hooks and TypeScript
                        </header>
                        <hr />
                        <Counter />
                        <hr />
                        <RevealAnswer />
                        <hr />
                        <TwoDice />
                        <hr />
                        <ChangeType />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

