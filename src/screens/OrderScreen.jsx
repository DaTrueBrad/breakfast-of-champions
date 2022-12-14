import React, {useEffect, useState} from "react";
import axios from 'axios'

const OrderScreen = () => {
  const [bases, setBases] = useState([])
  const [extras, setExtras] = useState([])

  const getData = () => {
    axios
      .get('/api/getOptions')
      .then((res) => {
        console.log(res.data)
        setBases(res.data.bases)
        setExtras(res.data.extras)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getData()
  },[])

  const baseOptions = bases.map((drink) => {
    return <option value={drink.name}>{drink.name}</option>
  })

  const extraOptions = extras.map((x) => {
    return (
      <>
        <label htmlFor={x.name}>{x.name}</label>
        <input type="checkbox" name="extras" id={x.name}/>
      </>
    )
  })

  return (
    <div className="main-page">
      <h1>Order up!</h1>
      <form action="">
        <h3>Select Size</h3>
        <div className="size-container">
          <label htmlFor="small">small</label>
          <input type="radio" id="small" name="size"/>
          <label htmlFor="medium">medium</label>
          <input type="radio" id="medium" name="size"/>
          <label htmlFor="large">large</label>
          <input type="radio" id="large" name="size"/>
          <label htmlFor="x-large">x-large</label>
          <input type="radio" id="x-large" name="size"/>
        </div>
        <select name="" id="">
          <option value="" default disabled selected >Select a Base</option>
          {baseOptions}
        </select>
        <h3>Extras</h3>
        <div>
          {extraOptions}
        </div>
      </form>
    </div>
  );
};

export default OrderScreen;