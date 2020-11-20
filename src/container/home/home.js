import{useEffect,useState} from 'react';
import {getProducts} from '../../api/api';
import ItemList from '../../componets/itemList/itemList';

const Home = () => {
// llamdo a la promise que nos devuelve un listado de productos para la home
const [items,setItems] = useState([]) 
 
useEffect(()=>{
    getProducts()
    .then(response =>{
      setItems(response)
  },err => {
      console.log(err)
  }).catch(err=>{
      console.log(err)
  }).finally(()=>{})
},[])


    return(
        <div id='Home'>
          <h2>Home</h2>
          <ItemList items={items}/>
        </div>
        
    )
}

export default Home