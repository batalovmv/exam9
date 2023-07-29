import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Button, Header} from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { changeImage, changeName, changeMail, changePhone,  toExit, addItem } from '../../features/ContactSlice';





const EditPage = () => {
  const inputData = useAppSelector((state) => state.contacts.contacts);
  const [navigateState, setNavigateSate] = useState(false)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  if (navigateState) {
    setTimeout(() => {
      navigate('/dishes')
    }, 0)
  }

  const redirect = () => {
    setNavigateSate(!navigateState)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputData.mail.length > 0 && inputData.phone !== 0 && inputData.name.length > 0) {
      if (inputData.image.length === 0) {
        dispatch(changeImage('https://kartinkof.club/uploads/posts/2022-12/1670493543_kartinkof-club-p-kartinki-net-8.jpg'))

      }
      dispatch(addItem(inputData))
      dispatch(toExit())
      redirect()
    } else {
      alert('Введены не все данные')
    }



  };


  return (
    <>
      <NavLink to="/dishes">Главная страница</NavLink>
      <Header> Добавьте товар</Header>
      <Form onSubmit={handleSubmit}>
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
        <h3>Превью картинки</h3>
        <img className="imgBlock" src={inputData.image} alt="некорректная ссылка" />

        <Form.Field

          type="submit"
          id='form-button-control-public'
          control={Button}
          content='Отправить'
          label='Отправить данные'
        />
      </Form>
    </>
  )
}

export default EditPage