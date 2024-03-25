import './Search.css'
import search from '../../assets/images/search.png'

function Search() {
  return (
    <>
        <div className="search">
            <img src={search}/>
            <input type="search" placeholder='Search'/>
        </div>
    </>
  )
}

export default Search