import Spinner from "../../components/UI/spinner/spinner";
import "./ItemBlock.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { add } from "../../features/CartSlice";
import { addItem, changeItem, removeItem, toNewOpen, toOpen } from "../../features/OrderSlice";
import { useEffect, useState } from "react";
import { getItems, removeFromArr } from "../../features/CounterSlice";
import { render } from "react-dom";
interface Contact {
  name: string,
  phone: number | string,
  mail: string,
  image: string,
}
interface Props {
  arr: Contact[]
  name: string
}


const ItemBlock = (props: Props) => {
  const loading = useAppSelector((state) => state.contacts.isLoading);
  const reload = useAppSelector((state) => state.contacts.reload);
  const dispatch = useAppDispatch();
  const arr = props.arr
  useEffect(() => {
    
  }, [reload])
  
  
  return <>
    {!loading && <div className="ItemBlock">
      <h1>{props.name}</h1>
      {arr.map((e: any, index: number) => {
        return <div onClick={() => dispatch(toNewOpen(e))} key={index} className='itemBlock' >
          <img className="imgBlock" src={e[1].image} alt="" />
          <div className="itemBox">
            <h3 className='itemTitle'>  {e[1].name}

            </h3>

          </div>
          {/* <button onClick={() => dispatch(toOpen())}>Redirect</button> */}

        </div>

      })}
    </div>}
    {loading && <Spinner />}

  </>
};

export default ItemBlock;
