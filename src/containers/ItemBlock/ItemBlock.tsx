import Spinner from "../../components/UI/spinner/spinner";
import "./ItemBlock.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toNewOpen } from "../../features/ContactSlice";
import { useEffect } from "react";

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
          <img className="imgBlock" src={e[1].image} alt="некорректная ссылка" />
          <div className="itemBox">
            <h3 className='itemTitle'>  {e[1].name}

            </h3>

          </div>
        </div>

      })}
    </div>}
    {loading && <Spinner />}

  </>
};

export default ItemBlock;
