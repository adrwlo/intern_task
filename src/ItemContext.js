import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ItemContext = createContext();

export function ItemProvider({children}) {
    const [apiData, setApiData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [modalData, setModalData] = useState([]);
    const [modalIsOpen, setIsOpenModal] = useState(false);
    const [filterError, setFilterError] = useState(false);

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(
              `https://reqres.in/api/products`
            );
            setApiData(res.data.data);
          } 
          catch (error){
            console.log(error);
            alert(error);
          }
        }
        fetchData();
      }, []);

      const openModal = (id) => {
            let newModalData = apiData.find(item => item.id === id)
            setModalData(newModalData);
            setIsOpenModal(true);
      }

      const closeModal = () => {
          setIsOpenModal(!modalIsOpen);
      }

      const filterApiData = (id) => {
        let numberId = parseInt(id);

        if (isNaN(numberId)) {
          setFilterData('');
          setFilterError(false);
        }else{
          let newFilterData = apiData.find(item => item.id === numberId);
          if(newFilterData === undefined) {
            setFilterError(true);
          }
          else {
            setFilterData(newFilterData); 
            setFilterError(false);
          }
        }
      }

      return (
        <ItemContext.Provider value={{apiData, modalData, openModal, modalIsOpen, closeModal, filterApiData, filterData, filterError}}>{children}</ItemContext.Provider>
      );
}

export default ItemContext;

