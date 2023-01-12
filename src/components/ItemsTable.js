import React, {useContext, useState} from 'react';
import Items from './Items';
import ItemContext from '../ItemContext';
import Pagination from './Pagination';

const ItemsTable = () => {

    const {apiData} = useContext(ItemContext);
    const {filterData} = useContext(ItemContext);
    const {modalIsOpen} = useContext(ItemContext);
    const {closeModal} = useContext(ItemContext);
    const {modalData} = useContext(ItemContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    //GET CURRENT ITEMS

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentItems);

    console.log("API DATA:" + apiData);
    console.log("API DATA LENGTH:" + apiData.length)
    console.log("FILTER DATA: " + filterData);
    console.log("MODAL IS OPEN:" + modalIsOpen);
    console.log("MODAL DATA:" + modalData);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const paginateNext = () => {
        if(currentPage === Math.ceil(apiData.length / itemsPerPage)) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage+1);
        }
    }

    const paginatePrev = () => {
        if(currentPage === 1) {
            setCurrentPage(2);
        } else {
            setCurrentPage(currentPage-1);
        }
    }


  return (
      <>
    <div className="flex flex-col m-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Id
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Year
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Items items={currentItems}/>          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    {modalIsOpen ? 
    <>
        <div href="#" style={{backgroundColor: modalData.color}} className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 fixed top-1/2 left-1/2 transform -translate-x-1/2 transform -translate-y-1/2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{modalData.name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Id: {modalData.id}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Year: {modalData.year}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Color: {modalData.color}</p>                
            <p className="font-normal text-gray-700 dark:text-gray-400">Pantone Value: {modalData.pantone_value}</p>  
            <button onClick={() => closeModal()}>Exit</button>    
        </div>
        </> : ''}

    {apiData.length > 1 ? (
         <Pagination 
            itemsPerPage={itemsPerPage}
            totalItems={apiData.length}
            paginate={paginate}
            paginateNext={paginateNext}
            paginatePrev={paginatePrev}
        />
    ) : ("")
    }</>
  )
}

export default ItemsTable