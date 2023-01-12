import React, {useContext} from 'react'
import ItemContext from '../ItemContext'

const Items = ({items}) => {
  const {openModal} = useContext(ItemContext);

  // if(items.length === 1) {
  //   return (
  //       <tr onClick={() => openModal(items.id)} style={{backgroundColor: items.color}}>
  //         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{items.id}</td>
  //         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{items.name}</td>
  //         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{items.year}</td>
  //       </tr>
  //   )
  // }else {
    return (
    <>
      {items.map((item, index) => {
        return(
          <tr onClick={() => openModal(item.id)} style={{backgroundColor: item.color}} key={index}>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.id}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.year}</td>
          </tr>)
        })}
    </>)
  }

export default Items