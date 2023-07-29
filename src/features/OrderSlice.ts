import { AxiosRequestConfig, AxiosResponse } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import axios from "../axios/axiosInfo";
interface Contact {
  name: string,
  phone: number | string,
  mail: string,
  image: string,
}
export interface contactsState {
  open: boolean
  new: boolean
  key: string
  arrContacts: Contact[]
  contacts: Contact
  error: Error | null
  isLoading: boolean
}

const initialState: contactsState = {
  open: false,
  new: true,
  key: '',
  arrContacts: [],
  contacts: {
    name: '',
    phone: 0,
    mail: '',
    image: '',
  },
  error: null,
  isLoading: false
}

export const getContacts = createAsyncThunk(
  'post/contacts',
  async () => {
    const response = await axios.get<AxiosRequestConfig, AxiosResponse>('/contacts.json')
    const newData = Object.entries(response.data)
    return newData
  }
)
// export const postContact = createAsyncThunk(
//   'post/contacts',
//   async (contact: Contact) => {
//     await axios.post<AxiosRequestConfig, AxiosResponse>('/contacts.json', contact)
//   }
// )
// export const putContact = createAsyncThunk(
//   'put/contacts',
//   async ( contact: Contact )=> {
//     axios.put<AxiosRequestConfig, AxiosResponse>(`/dishes/${state.key}/.json`, contact)
//     await axios.post<AxiosRequestConfig, AxiosResponse>('contacts.json', contact);
//   }
// )
// export const deleteContact = createAsyncThunk(
//   'delete/contacts',
//   async (key:string) => {
//   await  axios.delete<AxiosRequestConfig, AxiosResponse>(`/dishes/${action.payload}.json`)
//   }
// )

const ContactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    toOpen: (state, action) => {
      state.open = action.payload
      state.new = false
      state.contacts.name = ''
      state.contacts.mail = ''
      state.contacts.phone = ''
      state.contacts.image = ''
    },
    toNewOpen: (state, action) => {
      state.open = true
      state.new = true
      state.contacts.name = action.payload[1].name
      state.contacts.price = action.payload[1].price
      state.contacts.phone = action.payload[1].phone
      state.contacts.image = action.payload[1].image
      state.key = action.payload[0]
    },
    toExit: (state) => {
      state.open = false
    },
    changeName: (state, action) => {
      state.contacts.name = action.payload
    },
    changePhone: (state, action) => {
      state.contacts.phone = action.payload
    },
    changeMail: (state, action) => {
      state.contacts.mail = action.payload
    },
    changeImage: (state, action) => {
      state.contacts.image = action.payload
    },
    addItem: (state, action) => {
      axios.post<AxiosRequestConfig, AxiosResponse>('/contacts.json', state.contacts)
    },
    changeItem: (state, action) => {
      axios.put<AxiosRequestConfig, AxiosResponse>(`/dishes/${action.payload}/.json`, state.contacts)
    },
    removeItem: (state, action) => {
      axios.delete<AxiosRequestConfig, AxiosResponse>(`/dishes/${action.payload}.json`)
    },
  },

  extraReducers: builder => {

    builder

      .addCase(getContacts.pending, (state) => {

        state.isLoading = true;

        state.error = null;

      })

      .addCase(getContacts.fulfilled, (state, action) => {
        state.arrContacts = action.payload
        state.isLoading = false;

      })

      .addCase(getContacts.rejected, (state, action) => {

        state.error = action.error as Error;

        state.isLoading = false

      })

  }

})


export const { toOpen, toExit, changeName, changePhone, changeMail, changeImage, changeItem, addItem, removeItem, toNewOpen } = ContactsSlice.actions;
export default ContactsSlice.reducer