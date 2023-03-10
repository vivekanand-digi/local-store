import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';

function App() {
  const [myData, setMyData] = useLocalStorage('myDataKey', '');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setMyData(inputValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter some data:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>My data from local storage: {myData}</p>
    </div>
  );
}

export default App;

