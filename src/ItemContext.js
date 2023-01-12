import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ItemContext = createContext();


export function ItemProvider({children}) {
    const [apiData, setApiData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [modalData, setModalData] = useState([]);
    const [modalIsOpen, setIsOpenModal] = useState(false);

    console.log("API DATA: " + apiData);

    useEffect(() => {
        async function fetchData() {
          const res = await axios.get(
            `https://reqres.in/api/products`
          );
          setApiData(res.data.data);
        }
        fetchData();
      }, []);

      const openModal = (id) => {
            let newModalData = apiData.find(item => item.id === id)
            console.log(apiData);
            console.log("NEW MODAL DATA: " + newModalData)
            setModalData(newModalData);
            setIsOpenModal(true);
      }

      const closeModal = () => {
          setIsOpenModal(!modalIsOpen);
      }

      const filterApiData = (id) => {
        console.log("SEARCH INPUT ID:" + id);
        let newFilterData = apiData.find(item => item.id === id)  
        console.log("FILTERED DATA: " + newFilterData);
        setApiData(newFilterData);
      }

      return (
        <ItemContext.Provider value={{apiData, modalData, openModal, modalIsOpen, closeModal, filterApiData, filterData}}>{children}</ItemContext.Provider>
      );
}

export default ItemContext;

