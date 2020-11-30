import React, { useState } from 'react';
import './App.scss';
import { Col, Row, Typography, Steps, Button, message } from 'antd';
import Basic from './components/Basic';

const { Title } = Typography;
const { Step } = Steps;

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1)
  }

  // const onChange = current => {
  //   console.log('onChange:', current);
  //   setCurrent(current)
  // };

  const steps = [
    {
      title: 'First',
      content: <Basic />,
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Third',
      content: 'Second-content',
    },
    {
      title: 'Fourth',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  return (
    <div className="resume__wrapper">
      <Row justify="center">
        <Col xs={24} className="resume__titleWrapper">
          <Title level={1}>Welcome To Resume Generator</Title>
        </Col>
      </Row>
      <Row>
        <Col className="resume__steps" >
          <Steps current={current} direction="vertical">
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
