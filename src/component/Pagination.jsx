import React, {useState} from 'react'
import defaultLogo from '../images/Pokemon-Logo.png'
const Pagination = ({ pokemon, RenderComponent, title, pageLimit, dataLimit }) =>  {
    const [pages] = useState(Math.round(pokemon.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return pokemon.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        //shows starting point of paginated groups. 
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    return (
        <div>
        <h1>{title}</h1>
        {/* <div><img className="logo" src={defaultLogo} alt='logo'/></div> */}
    
        {/* show the posts, 10 posts at a time */}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} pokemon={d} />
          ))}
        </div>
    
        {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            prev
          </button>
    
          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
    
          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            next
          </button>
        </div>
      </div>
    );
  }

  export default Pagination