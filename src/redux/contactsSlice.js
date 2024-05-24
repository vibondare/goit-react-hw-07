import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: { items: [], loading: false, error: false },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.contacts.error = true;
        state.contacts.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.contacts.error = true;
        state.contacts.loading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      }),
});

export const selectContacts = (state) => state.contacts.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

export const selectLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;
export default slice.reducer;
