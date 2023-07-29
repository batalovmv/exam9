import "./ContactsBlock.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getContacts, toOpen } from "../../features/OrderSlice";
import ModalForm from "../Modal/Modal";
import { useEffect } from "react";
import ItemBlock from "../ItemBlock/ItemBlock";
import { useNavigate } from 'react-router'
import React, { useState } from 'react'




const ContactsBlock = () => {
  const contactsData = useAppSelector((state) => state.contacts.arrContacts);
  const open = useAppSelector((state) => state.contacts.open);
  const navigateState = useAppSelector((state) => state.contacts.navigateState);
  const reload = useAppSelector((state) => state.contacts.reload);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  if (navigateState) {
    setTimeout(() => {
      navigate('/orders')
    }, 1)
  }

  const redirect = () => {
    dispatch(toOpen())
    navigate('/orders')

  
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch(getContacts())
    }, 1000)
   
  }, [reload])

  return (
    <div className="container">
      <div className="ContactsBlock">
        <div className="Products">

          <button className="orderButton" onClick={redirect} >Добавить новый контакт</button>
          <ItemBlock name={'dishes'} arr={contactsData}></ItemBlock>
          {/* <ItemBlock name={'products'} category={products}></ItemBlock> */}
        </div>

      </div>
      {/* <button onClick={dispatch(toOpen(true))}>Redirect</button> */}
      {open && <ModalForm />}
    </div>


  );
};

export default ContactsBlock;
