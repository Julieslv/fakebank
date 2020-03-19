import React, { useState, useEffect } from "react"
import Header from './header'

const HeaderInfoContainer = () => {

  const [ info, setInfo ] = useState([]);
  // const [ pagination, setPagination ] = useState([]);

  useEffect( () => {
    fetch('http://dev-test.torca.io/info')
      .then(response => response.json())
      .then(results => {
        const info = results.data[0];
        setInfo(info);
      }).catch(err => {
        console.log(err);
      });
  }, []);


  return <Header color="#006BCD" info={info}/>
}

export default HeaderInfoContainer
