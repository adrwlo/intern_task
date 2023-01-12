import React, {useContext} from 'react'
import ItemContext from '../ItemContext'

const FilterItem = () => {
  const {openModal} = useContext(ItemContext);
  const {}

  return (
    <>
    {items.map(item => {
      return(
        <tr onClick={() => openModal(item.id)} style={{backgroundColor: item.color}}>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.id}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.name}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.year}</td>
        </tr>)
      })}
  </>
  )
}

export default FilterItem