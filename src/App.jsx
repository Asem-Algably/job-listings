import { useState } from 'react';
import data from '../data.json'
import './App.css';

function Job(props
) {
  return(
      <div className='job'>
      <img src={`.${props.logo}`} alt={`${props.company} logo`} className='logo'/>
      <div className='info'>
      <div className="main_tags">
        <h3>{props.company}</h3>
        <h4>{props.newchance?"new!":null}</h4>
        <h4>{props.featured?"featured!":null}</h4>
      </div>

      <h2>{props.position}</h2>

      <div className="subinfo">
        <span>{props.location}</span>
        <span>.</span>
        <span>{props.postedAt}</span>
        <span>.</span>
        <span>{props.contract}</span>
      </div>
      </div>
      <div className='tablets'>
        <p>{props.level}</p>
        <p>{props.role}</p>
        {props.languages && props.languages.map(lang => <span key={lang}>{lang} </span>)}
        {props.tools && props.tools.map(tool => <span key={tool}>{tool} </span>)}
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
        role={job.role}
        level={job.level}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        languages={job.languages}
        tools={job.tools}
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
