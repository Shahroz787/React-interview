import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

const DebounceInput = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
      console.log('Input value:', event.target.value);
    };
  
    const debouncedHandleChange = useCallback(debounce(handleChange, 500), []);
  
    return (
      <div>
        <h1>Debounced Input</h1>
        <input type="text" onChange={debouncedHandleChange} />
        <p>Current Value: {inputValue}</p>
      </div>
    );
  };
  
  export default DebounceInput;