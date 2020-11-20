import { useEffect,useState } from 'react'
import Item from '../Items/item'


const ItemList = ({items}) => {
//map de los items y llamar a item por cada interacion
    return(
        <div id='ItemList'>
            {items.map((item,idx)=>{
                return(
                    <Item item={item}/>
                )
            })

            }
        </div>
    )
}

export default ItemList
