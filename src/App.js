import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <h1>Mock Api Checking</h1>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
}

export default App;
