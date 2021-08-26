import MainEn from "../Components/Main/En/Main";
import MainRu from "../Components/Main/Ru/Main";
import AboutEn from "../Components/Page/About/En/About";
import AboutRu from "../Components/Page/About/Ru/About";
import DevelopenEn from "../Components/Page/Developen/En/Developen";
import DevelopenRu from "../Components/Page/Developen/Ru/Developen";
import ContactsEn from "../Components/Page/Contacts/En/Contacts";
import ContactsRu from "../Components/Page/Contacts/Ru/Contacts";
import Logo from "../logo.png";
import phoneReducer from "./Phone-reducer";
import languageReducer from "./Language-reducer";

let renderEntireTree = () => {
    console.log('SaveChange')
}

const store = {
    _state:{
        _About: {en: [
                {'id': 1, 'title': 'Technologies:', 'description': 'Ant Design, HTML5, CSS3, Sass/SCSS, JavaScript'},
                {'id': 2, 'title': 'Frameworks and Libraries:', 'description': 'React.js, JQuery, Bootstrap 4, Materialize, SASS, Less'},
                {'id': 3, 'title': 'Background knowledge:', 'description': 'PHP(Smarty), MySQLi, PHP(Twig), GraphlQL'},
                {'id': 4, 'title': 'Operating Systems:', 'description': 'Windows, Linux'},
                {'id': 5, 'title': 'Development Environment and Tools:', 'description': 'IntelliJ IDEA, Chrome DevTools, Firefox Firebug, WebStorm, Visual Studio Code, ATOM'},
                {'id': 6, 'title': 'Source Control:', 'description': 'Git'},
                {'id': 7, 'title': 'Package Managers:', 'description': 'npm, gulp'}
            ], ru: [
                {'id': 1, 'title': 'Технологии:', 'description': 'Ant Design, HTML5, CSS3, Sass/SCSS, JavaScript'},
                {'id': 2, 'title': 'Фреймворк и библиотеки:', 'description': 'React.js, JQuery, Bootstrap 4, Materialize, SASS, Less'},
                {'id': 3, 'title': 'Бэкенд:', 'description': 'PHP(Smarty), MySQLi, PHP(Twig), GraphlQL'},
                {'id': 4, 'title': 'Операционные системы:', 'description': 'Windows, Linux'},
                {'id': 5, 'title': 'Среда разработки и инструменты:', 'description': 'IntelliJ IDEA, Chrome DevTools, Firefox Firebug, WebStorm, Visual Studio Code, ATOM'},
                {'id': 6, 'title': 'Контроль:', 'description': 'Git'},
                {'id': 7, 'title': 'Менеджеры пакетов:', 'description': 'npm, gulp'}
            ]},
        Menu:[
            {
                path: "/",
                exact: true,
                titleEn: () => 'Home',
                titleRu: () => 'Главная',
                mainEn: () => <MainEn
                    About = {store._state._About}
                    _MetaTitle = {store._state._MetaTitle}
                    _Logo = {store._state._Logo}
                    _Theme = {store._state._Theme}
                />,
                mainRu: () => <MainRu
                    About = {store._state._About}
                    _MetaTitle = {store._state._MetaTitle}
                    _Logo = {store._state._Logo}
                    _Theme = {store._state._Theme}
                />

            },
            {
                path: "/about",
                exact: true,
                titleEn: () => 'About',
                titleRu: () => 'Обо мне',
                mainEn: () => <AboutEn />,
                mainRu: () => <AboutRu />

            },
            {
                path: "/web-developen",
                exact: true,
                titleEn: () => 'Developen',
                titleRu: () => 'Разработка',
                mainEn: () => <DevelopenEn />,
                mainRu: () => <DevelopenRu />
            },
            {
                path: "/contacts",
                exact: true,
                titleEn: () => 'Contacts',
                titleRu: () => 'Контакты',
                mainEn: () => <ContactsEn />,
                mainRu: () => <ContactsRu />
            }
        ],
        _Logo: Logo,
        Phone: '+375(33)640-98-68',
        Email: 'ALIAKSANDR.KOVALIOU@GMAIL.COM',
        _MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou',
        _TopHEaderBar: 'open',
        _CloseTopHeaderBar: 'closeTopBar',
        _Language: 'en',
        _Theme:[
            {'LoadingContent': 1000}
        ],
    },
    dispatch(action) {
        renderEntireTree(store)

        switch (action.type) {
            case 'EDIT-PHONE':
                phoneReducer(store, action)
                break;
            case 'META-TITLE':
                document.title = `${this.state._MetaTitle} | ${action.e}`;
                localStorage.setItem('page', action.e)
                break;
            case 'OPEN-TOPBAR':
                store._TopHEaderBar = 'openTopBarElement'
                store._CloseTopHeaderBar = 'openTopBar'
                localStorage.removeItem('closeTopHEaderBar');
                break;
            case 'CLOSE-TOPBAR':
                store._TopHEaderBar = action.event
                store._CloseTopHeaderBar = 'closeTopBar'
                localStorage.setItem('closeTopHEaderBar', '1')
                break;
            case 'LANGUAGE':
                languageReducer(store, action)
                break;
            default:
                console.log( "Нет таких значений" );
        }
    },
    getState(){
        return this._state;
    },
    localStorange() {
        localStorage.getItem('language') !== null ?
            localStorage.getItem('language') === 'ru' ?
                store.dispatch({type: 'LANGUAGE', MetaTitle: '🎉 ᐅ Александр Ковалёв', Language: 'ru'})
                :
                store.dispatch({type: 'LANGUAGE', MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou', Language: 'en'})
            :
            console.log('start react app')
        ;
    }
}

export const closeTopBarActionCreator = (event) => {
        store.dispatch({
            type: 'CLOSE-TOPBAR',
            event: 'closeTopHEaderBar'
        })
    },
    openTopBarActionCreator = () => {
        store.dispatch({
            type: 'OPEN-TOPBAR'
        })
    },
    metaTitle = (e) => {
        document.title = `${store._MetaTitle} | ${e}`;
        localStorage.setItem('page', e)
    },
    languageChange = (event) => {
        store.dispatch({type: 'LANGUAGE', Language: event.target.value})
        //debugger
    },
    editPhone = (event) => {
        store.dispatch({type: 'EDIT-PHONE', event: event})
    },
    renderState = (observer) => {
        renderEntireTree = observer;
    }

store.localStorange()
export default store;
window.store = store;
