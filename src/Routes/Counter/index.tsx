import React, { useState } from 'react';

export interface ICounterProps {
  name?: string;
}

export function Counter(props: ICounterProps): React.ReactElement {
  const [count, setCount] = useState(0);
  const handleAdd = (number: number): void => {
    console.log('🚀 ~ file: index.tsx:10 ~ handleAdd ~ number', number);
    setCount(count + number);
  };
  const handleSubtract = (number: number): void => {
    console.log('🚀 ~ file: index.tsx:14 ~ handleSubtract ~ number', number);
    setCount(count - number);
  };
  const handleReset = (): void => {
    console.log('🚀 ~ file: index.tsx:18 ~ handleReset ~ handleReset');
    setCount(0);
  };

  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => handleAdd(1)}>Add</button>
      <button disabled={count <= 0} onClick={() => handleSubtract(1)}>Subtract</button>
      <button disabled={count === 0} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
