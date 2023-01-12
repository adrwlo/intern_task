import React from 'react'

const Pagination = ({itemsPerPage, totalItems, paginate, paginatePrev, paginateNext}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    
    <nav aria-label="Page navigation example" className="text-center absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ul className="inline-flex -space-x-px">
            <li>
            <a onClick={() => paginatePrev()} href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>

            {pageNumbers.map(number => {
                return(
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {number}
                        </a>
                    </li>
                )})}
        
            <li>
            <a onClick={() => paginateNext()} href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>

  )
}

export default Pagination