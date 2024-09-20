import { useState } from 'react';
import data from '../data.json';
import './App.css';

function Job(props) {

  return (
    <div className='job'>
      {props.featured ? <div className='stroke'></div> : null}
      <img src={`.${props.logo}`} alt={`${props.company} logo`} className='logo' />
      <div className='info'>
        <div className="main_tags">
          <h3>{props.company}</h3>
          {props.newchance ? <h4 className='tag first'>new!</h4> : null}
          {props.featured ? <h4 className='tag second'>featured!</h4> : null}
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
      <div className="sepprator"></div>
      <div className='tablets'>
        {props.tablets.map((tag, index) => (
          <button className="tablet_button" key={index} onClick={() => props.addKeyword(tag)} >{tag}</button>
        ))}
      </div>
    </div>
  );
}

function SearchBar({keywords, rmvKeyword, clearkeywords}) {
  return (
    <div className='searchbar_container'>
      {keywords.map((e, index) => (
        <div className="searchbar_tag" key={index}>
          <h2 className="searchbar_tag_text">{e}</h2>
          <button className='tag_close' onClick={() => rmvKeyword(e)}><img src='../images/icon-remove.svg' alt='close' /></button> {/* Handle button click */}
        </div>
      ))}
      <button className='clearing_button' onClick={clearkeywords}>clear</button>
    </div>
  );
}

function extractObjectsContainingAll(miny, largeArray) {
  return largeArray.filter(obj => 
    miny.every(keyword => obj.tablets.includes(keyword))
  );
}

function JobsWrapper({ data, keywords, addKeyword}) {

  const alljobcells = data.map((job, index) => ({
    key: index,
    company: job.company,
    logo: job.logo,
    newchance: job.newchance,
    featured: job.featured,
    position: job.position,
    postedAt: job.postedAt,
    contract: job.contract,
    location: job.location,
    tablets: [job.role, job.level, ...job.languages, ...job.tools]
  }));

  const requested_props = keywords; // Use keywords directly
  const requestedjobs = extractObjectsContainingAll(requested_props, alljobcells);

  return (
    <>
      {requestedjobs.map(job => (
        <Job key={job.key} {...job} addKeyword={addKeyword}/>
      ))}
    </>
  );
}

function App() {
  const [keywords, setKeywords] = useState([]);

  function addKeyword(word) {
    if (!keywords.includes(word)) {
      setKeywords([...keywords, word]); // Create a new array
    }
  }

  function rmvKeyword(word) {
    setKeywords(keywords.filter(item => item !== word));
  }

  function clearkeywords(){
    setKeywords([])
  }

  return (
    <>
      <header></header>
      <div className="wrapper">
        {keywords.length > 0 ? <SearchBar keywords={keywords} rmvKeyword={rmvKeyword} clearkeywords={clearkeywords}/> : <div className='filler'></div>}
        <JobsWrapper data={data} keywords={keywords} addKeyword={addKeyword}/>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://x.com/Asem_Algably_UX">Asem Algably</a>.
      </div>
    </>
  );
}

export default App;
