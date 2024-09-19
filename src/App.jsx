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
            <button className="tablet_button" key={index}>{tag}</button>  // Use key prop for each button
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

function extractObjectsContainingAll(miny, largeArray) {
  return largeArray.filter(obj => 
    miny.every(keyword => obj.tablets.includes(keyword))
  );
}

function JobsWrapper({data, keywords}) {
  console.log("done")

  const alljobcells= data.map((job, index) => (
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
  ))

  const requested_props= [job.role,job.level,...job.languages,...job.tools];
  const requestedjobs= extractObjectsContainingAll(requested_props, alljobcells);

  return (
    <>
      
    </>
  );
}

function App(className=appclass) {
  const [keywords, setkeywords] = useState([]);
  const jobsdata = data;

  function addkeyword(word){
    if (!keywords.includes(word)) {
      
      // Add the keyword if it's not found
      setkeywords(keywords.push(keyword)); 

    }
  }

  function rmvkeyword(word){
    setkeywords(keywords.filter(item => item !== word))
  }

  return (
    <>
      <header></header>
      <div className="wrapper">
        <SearchBar />
        <JobsWrapper data={data} keywords={keywords} />
      </div>
    </>
  );
}

export default App;
