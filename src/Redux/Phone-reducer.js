const EDIT_PHONE = 'EDIT-PHONE';

const phoneReducer = (store, action) => {
    if(action.store = EDIT_PHONE){
        store._state.Phone = action.event.event
        store._state.Email = 'INFO@GMAIL.COM'
    }

    return store;
}

export default phoneReducer;