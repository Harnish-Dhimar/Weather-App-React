import {React,useRef} from 'react'

function Search(props) {
    const searchInput = useRef();
  return (
    <>
    <div className='search-con'>
      <input type="text" className='input' value={props.searchData} onChange={()=>props.eventHandler(searchInput.current.value)} ref={searchInput}/>
      <button className='btn' onClick={props.searchweather}>Search</button>
    </div>
    </>
  )
}

export default Search