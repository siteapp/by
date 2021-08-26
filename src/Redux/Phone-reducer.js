const EDIT_PHONE = 'EDIT-PHONE';

let initialState = {
    Contacts:{
        Phone: '+375(33)640-98-68',
        Email: 'ALIAKSANDR.KOVALIOU@GMAIL.COM',
    }
}

const phoneReducer = (store = initialState, action) => {

    if (action.store = EDIT_PHONE){
        store.Phone = store.Contacts.Phone;
        store.Email = store.Contacts.Email;
    }

    return store;
}

export default phoneReducer;