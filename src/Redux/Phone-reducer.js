const EDIT_PHONE = 'EDIT-PHONE';

const phoneReducer = (store, action) => {
    if(action.store = EDIT_PHONE){
        store.Phone = action.event.event
        store.Email = 'INFO@GMAIL.COM'
    }

    return store;
}

export default phoneReducer;