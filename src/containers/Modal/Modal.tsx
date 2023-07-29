import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Button, Header, Modal } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react'
import { changeImage, changeName, changeMail, changePhone, closeForModul, removeItem, changeItem, toExit, toNewOpen, setReload } from '../../features/OrderSlice';





const ModalForm1 = () => {
  const openForModul = useAppSelector((state) => state.contacts.openForModul);
  const inputData = useAppSelector((state) => state.contacts.contacts);
  const key = useAppSelector((state) => state.contacts.key);
  const dispatch = useAppDispatch();


  const newHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeItem(key))
    dispatch(toExit())
    dispatch(closeForModul())
    dispatch(setReload())
  };

  return (
    <Modal
      onClose={() => { dispatch(closeForModul()), console.log(`false`, open) }}
      onOpen={() => { dispatch(toNewOpen(true)), console.log(`false`, open) }}
      open={openForModul}
    >
      <Modal.Header>Контакт</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Header> Данные контакта</Header>
          <Form onSubmit={newHandleSubmit}>
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


          

            <Button
              type="button"
              content='Изменить'
              onClick={() => {
                dispatch(changeItem(key))
                dispatch(toExit())
                dispatch(closeForModul())
                dispatch(setReload())
              }}
            />
            <Button
              type="button"
              content='Удалить'
              onClick={() => {
                dispatch(removeItem(key))
                dispatch(toExit())
                dispatch(closeForModul())
                dispatch(setReload())
              }}
            />

          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal >
  )
}

export default ModalForm1