import Spinner from "../../components/UI/spinner/spinner";
import "./ItemBlock.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { add } from "../../features/CartSlice";
import { addItem, changeItem, removeItem, toNewOpen, toOpen } from "../../features/OrderSlice";
import { useEffect } from "react";
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
  const dispatch = useAppDispatch();
  const arr = props.arr




  return <>
    <button className="orderButton" onClick={() => { dispatch(toOpen(e)) }} >Добавить</button>
    {!loading && <div className="ItemBlock">
      <h1>{props.name}</h1>
      {arr.map((e: any) => {
        return <div key={e.index} className='itemBlock' >
          <img className="imgBlock" src={e[1].image} alt="" />
          <div className="itemBox">
            <h3 className='itemTitle'>  {e[1].name}

            </h3>
            <h5 className='itemPrice' >Цена :{e[1].price} тг</h5>
          </div>
          <button className="orderButton" onClick={() => { dispatch(toNewOpen(e)) }} >Изменить</button>
          <button onClick={() => { dispatch(removeItem(e[0])) }}>Удалить</button>
        </div>

      })}
    </div>}
    {loading && <Spinner />}

  </>
};

export default ItemBlock;
