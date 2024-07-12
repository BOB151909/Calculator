import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(display);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator" style={{ textAlign: 'center', display: "flex", justifyContent: "center", padding: '50px' }}>
      <Card style={{ width: '18rem' }}>
        <input type="text" value={display} readOnly />
        <input type="text" value={result} readOnly style={{ marginTop: '10px' }} />
        <div className="buttons" style={{ padding: "2px" }}>
          <button onClick={() => handleButtonClick('7')} className='btn m-2 btn-dark'>7</button>
          <button onClick={() => handleButtonClick('8')} className='btn m-2 btn-dark'>8</button>
          <button onClick={() => handleButtonClick('9')} className='btn m-2 btn-dark'>9</button>
          <button onClick={() => handleButtonClick('+')} className='btn m-2 btn-primary'>+</button><br />
          <button onClick={() => handleButtonClick('4')} className='btn m-2 btn-dark'>4</button>
          <button onClick={() => handleButtonClick('5')} className='btn m-2 btn-dark'>5</button>
          <button onClick={() => handleButtonClick('6')} className='btn m-2 btn-dark'>6</button>
          <button onClick={() => handleButtonClick('-')} className='btn m-2 btn-danger'>-</button><br />
          <button onClick={() => handleButtonClick('1')} className='btn m-2 btn-dark'>1</button>
          <button onClick={() => handleButtonClick('2')} className='btn m-2 btn-dark'>2</button>
          <button onClick={() => handleButtonClick('3')} className='btn m-2 btn-dark'>3</button>
          <button onClick={() => handleButtonClick('*')} className='btn m-2 btn-warning'>*</button><br />
          <button onClick={() => handleButtonClick('C')} className='btn m-2 btn-light'>C</button>
          <button onClick={() => handleButtonClick('0')} className='btn m-2 btn-dark'>0</button>
          <button onClick={() => handleButtonClick('=')} className='btn m-2 btn-info'>=</button>
          <button onClick={() => handleButtonClick('/')} className='btn m-2 btn-success'>/</button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
