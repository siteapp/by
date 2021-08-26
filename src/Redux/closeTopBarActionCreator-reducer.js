const CLOSE_TOPBAR = 'CLOSE-TOPBAR';

const closeTopBarActionCreatorReduce = (store, action) => {
    if(action.store = CLOSE_TOPBAR){
        store._TopHEaderBar = action.event
        store._CloseTopHeaderBar = 'closeTopBar'
        localStorage.setItem('closeTopHEaderBar', '1')
    }

    return store;
}

export default closeTopBarActionCreatorReduce;