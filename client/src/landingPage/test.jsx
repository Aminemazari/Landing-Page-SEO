import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const Graph = () => {
  const [a, setA] = useState(1); // Initial value for 'a'

  const generateData = () => {
    const data = {
      type: 'scatter',
      mode: 'lines',
      x: [],
      y: [],
      name: `a = ${a}`,
    };

    // Adjust the range to cover one period (2π to -2π) and repeat
    for (let t = 2 * Math.PI; t >= -2 * Math.PI; t -= 0.1) {
      if (t < a) {
        data.x.push(t);
        data.y.push(a);
      } else {
        data.x.push(t);
        data.y.push(0);
      }
    }

    return [data];
  };

  const handleChangeA = (e) => {
    setA(Number(e.target.value));
  };

  return (
    <div>
      <label>
        Value of 'a':{' '}
        <input type="number" value={a} step="0.1" onChange={handleChangeA} />
      </label>

      <Plot
        data={generateData()}
        layout={{
          title: 'Periodic Piecewise Function: f(t)',
          xaxis: { title: 't' },
          yaxis: { title: 'f(t)' },
        }}
      />
    </div>
  );
};

export default Graph;
