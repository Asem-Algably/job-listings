import { useState } from 'react';
import data from '../data.json'
import './App.css';

function Job({position}) {
  return(
      <h1>{position}</h1>
  )
}

function SearchBar() {
  return(<>
      <h1>searchbar is initialized</h1>
  </>)
}

function JobsWrapper({data}) {
  console.log("done")

  return (
    <>
      {data.map((job, index) => (
        <Job key={index} position={job.position} />
      ))}
    </>
  );
}

function App() {
  const [keywords, setkeywords] = useState([]);
  const jobsdata = data;

  return (
    <>
      <header></header>
      <div className="wrapper">
        <SearchBar />
        <JobsWrapper data={data} />
      </div>
    </>
  );
}

export default App;
