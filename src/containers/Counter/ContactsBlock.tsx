import "./ContactsBlock.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getContacts } from "../../features/OrderSlice";
import ModalForm from "../Modal/Modal";
import { useEffect } from "react";
import ItemBlock from "../ItemBlock/ItemBlock";

import { toOpen, } from "../../features/OrderSlice";


const ContactsBlock = () => {
  const contactsData = useAppSelector((state) => state.contacts.arrContacts);
  const open = useAppSelector((state) => state.contacts.open);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getContacts())
  }, [])

  return (
    <div className="container">
      <div className="ContactsBlock">
        <div className="Products">
          <button className="orderButton" onClick={() => { dispatch(toOpen(true)) }} >Добавить новый контакт</button>
          <ItemBlock name={'dishes'} arr={contactsData}></ItemBlock>
          {/* <ItemBlock name={'products'} category={products}></ItemBlock> */}
        </div>
       
      </div>

      {open && <ModalForm />}
    </div>


  );
};

export default ContactsBlock;
