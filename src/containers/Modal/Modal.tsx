import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Button, Header, Modal } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react'
import { useNavigate } from 'react-router'
import { useEffect } from "react";
import React, { useState } from 'react'
import { changeImage, changeName, changeMail, changePhone, toNavigateState, changeItem, toExit, addItem } from '../../features/OrderSlice';





const ModalForm = () => {
  const open = useAppSelector((state) => state.contacts.open);
  const newOne = useAppSelector((state) => state.contacts.new);
  const inputData = useAppSelector((state) => state.contacts.contacts);
  const [navigateState, setNavigateSate] = useState(false)
  const key = useAppSelector((state) => state.contacts.key);
  const dispatch = useAppDispatch();
  
  const navigate = useNavigate()
  // useEffect(() => {
   
  // }, [])
  if (navigateState) {
    setTimeout(() => {
      navigate('/dishes')
    }, 1000)
  }

  const redirect = () => {
    setNavigateSate(!navigateState)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(inputData))
    dispatch(toExit())
    redirect()

  };
  const newHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeItem(key))
    dispatch(toExit())
    redirect()

  };

  return (
    <>
      <Header> Добавьте товар</Header>
      <Form onSubmit={!newOne ? handleSubmit : newHandleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            type='text'
            onChange={(e) => { dispatch(changeName(e.target.value)) }}
            id='form-input-control-first-name'
            control={Input}
            htmlFor="name"
            label='Имя'
            placeholder='Имя'
            value={inputData.name}

          />
          <Form.Field
            type='number'
            onChange={(e) => { dispatch(changePhone(e.target.value)) }}
            id='form-input-control-phone'
            control={Input}
            label='Телефон'
            placeholder='Номер телефона'
            value={inputData.phone}
          />
          <Form.Field
            type='text'
            onChange={(e) => { dispatch(changeMail(e.target.value)) }}
            id='form-input-control-adress'
            control={Input}
            label='email'
            placeholder='Email'
            value={inputData.mail}
          />
          <Form.Field
            type='text'
            onChange={(e) => { dispatch(changeImage(e.target.value)) }}
            id='form-input-control-adress'
            control={Input}
            label='ссылка'
            placeholder='Cсылка на изображение'
            value={inputData.image}
          />

        </Form.Group>


        <Form.Field

          type="submit"
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          label='Label with htmlFor'
        />
      </Form>
    </>
  )
}

export default ModalForm