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
  openForModul: boolean
  open: boolean
  new: boolean
  key: string
  reload: boolean
  navigateState: boolean
  arrContacts: Contact[]
  contacts: Contact
  error: Error | null
  isLoading: boolean
}

const initialState: contactsState = {
  openForModul: false,
  open: false,
  new: true,
  key: '',
  reload: false,
  arrContacts: [],
  navigateState: false,
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
    console.log(newData)
    return newData
  }
)

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
    closeForModul: (state) => {
      state.openForModul = false
    },
    toNewOpen: (state, action) => {
      state.openForModul = true
      state.open = true
      state.new = true
      state.contacts.name = action.payload[1].name
      state.contacts.phone = action.payload[1].price
      state.contacts.phone = action.payload[1].phone
      state.contacts.image = action.payload[1].image
      state.key = action.payload[0]
    },
    toExit: (state) => {
      state.open = false
    },
    toNavigateState: (state, action) => {
      state.navigateState = action.payload
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
      axios.put<AxiosRequestConfig, AxiosResponse>(`/contacts/${action.payload}/.json`, state.contacts)
    },
    removeItem: (state, action) => {
      axios.delete<AxiosRequestConfig, AxiosResponse>(`/contacts/${action.payload}/.json`).then(() => {
      });
    },
    setReload: (state) => {
      state.reload = !state.reload
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
        console.log(`данные получены`);
        state.isLoading = false;

      })

      .addCase(getContacts.rejected, (state, action) => {

        state.error = action.error as Error;

        state.isLoading = false

      })

  }

})


export const { toOpen, toExit, changeName, changePhone, changeMail, changeImage, changeItem, addItem, removeItem, toNewOpen, toNavigateState, setReload, closeForModul } = ContactsSlice.actions;
export default ContactsSlice.reducer