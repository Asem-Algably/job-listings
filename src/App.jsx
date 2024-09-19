import { useState } from 'react';
import data from '../data.json'
import './App.css';

function Job(props
) {
  return(
      <div className='job'>
        {props.featured?<div className='stroke'></div>:null}

        <img src={`.${props.logo}`} alt={`${props.company} logo`} className='logo'/>
        <div className='info'>
        <div className="main_tags">
          <h3>{props.company}</h3>
          {props.newchance?<h4 className='tag first'>new!</h4>:null}
          {props.featured?<h4 className='tag second'>featured!</h4>:null}
        </div>

        <h2>{props.position}</h2>

        <div className="subinfo">
          <span>{props.postedAt}</span>
          <span>.</span>
          <span>{props.contract}</span>
          <span>.</span>
          <span>{props.location}</span>
        </div>
        </div>
        <div className='tablets'>
          {props.tablets.map((tag, index) => (
            <button key={index}>{tag}</button>  // Use key prop for each button
          ))}
        </div>
      </div>
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
        <Job key={index}
        company={job.company}
        logo={job.logo}
        newchance={job.newchance}
        featured={job.featured}
        position={job.position}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        tablets={[job.role,job.level,...job.languages,...job.tools]}
        />
      ))}
    </>
  );
}

function App(className=appclass) {
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
