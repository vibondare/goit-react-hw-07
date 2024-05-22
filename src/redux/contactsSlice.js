import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: { items: [] },
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.items.push(action.payload.contact);
      },
      prepare: (newContact) => {
        const id = crypto.randomUUID();
        return {
          payload: {
            contact: { newContact, id },
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.contacts.items;
export default slice.reducer;
