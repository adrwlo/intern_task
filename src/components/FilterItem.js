import React, {useContext} from 'react'
import ItemContext from '../ItemContext'

const FilterItem = ({filterData}) => {
  const {openModal} = useContext(ItemContext);
  return (
    <>
        <tr onClick={() => openModal(filterData.id)} style={{backgroundColor: filterData.color}}>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{filterData.id}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{filterData.name}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{filterData.year}</td>
        </tr>
  </>
  )
}

export default FilterItem