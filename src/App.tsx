import React from "react";
import "./App.css";
import {Button, Container, Row, Col} from 'react-bootstrap';

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
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Alex Hello World
            </p>
            <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
              }}
            ></div>
            </Col>
            <Col>
              <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
              }}
              ></div>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
        </ul>

        <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
        
        <br></br>

        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthevisualcommunicationguy.com%2F2018%2F11%2F12%2F8-reasons-why-no-one-is-visiting-your-website%2F&psig=AOvVaw1JtqkolOz-MBjPmQH5qW47&ust=1757959901263000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKijgo7t2I8DFQAAAAAdAAAAABAE" alt="Heres a Picture!" />
        </Col>
    </Row>
</Container>
</div>
        
        
    );
}

export default App;
