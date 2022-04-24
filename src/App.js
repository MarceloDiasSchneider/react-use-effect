import { useState, useEffect } from "react";

function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Previous
      </button>
      <h2>Source id: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Next
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
