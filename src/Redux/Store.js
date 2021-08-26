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
import aboutReducer from "./About-reducer";
import closeTopBarActionCreatorReduce from "./closeTopBarActionCreator-reducer";

let renderEntireTree = () => {}

const store = {
    _About: {en: [
            {'id': 1, 'title': 'Technologies:', 'description': 'Ant Design, HTML5, CSS3, Sass/SCSS, JavaScript'},
            {'id': 2, 'title': 'Frameworks and Libraries:', 'description': 'React.js (Redux, context API), JQuery, Bootstrap 4, Materialize, SASS, Less'},
            {'id': 3, 'title': 'Background knowledge:', 'description': 'PHP(Smarty), MySQLi, PHP(Twig), GraphlQL'},
            {'id': 4, 'title': 'Operating Systems:', 'description': 'Windows, Linux'},
            {'id': 5, 'title': 'Development Environment and Tools:', 'description': 'IntelliJ IDEA, Chrome DevTools, Firefox Firebug, WebStorm, Visual Studio Code, ATOM'},
            {'id': 6, 'title': 'Source Control:', 'description': 'Git'},
            {'id': 7, 'title': 'Package Managers:', 'description': 'npm, gulp'}
        ], ru: [
            {'id': 1, 'title': 'Технологии:', 'description': 'Ant Design, HTML5, CSS3, Sass/SCSS, JavaScript'},
            {'id': 2, 'title': 'Фреймворк и библиотеки:', 'description': 'React.js (Redux, context API), JQuery, Bootstrap 4, Materialize, SASS, Less'},
            {'id': 3, 'title': 'Бэкенд:', 'description': 'PHP(Smarty), MySQLi, PHP(Twig), GraphlQL'},
            {'id': 4, 'title': 'Операционные системы:', 'description': 'Windows, Linux'},
            {'id': 5, 'title': 'Среда разработки и инструменты:', 'description': 'IntelliJ IDEA, Chrome DevTools, Firefox Firebug, WebStorm, Visual Studio Code, ATOM'},
            {'id': 6, 'title': 'Контроль:', 'description': 'Git'},
            {'id': 7, 'title': 'Менеджеры пакетов:', 'description': 'npm, gulp'}
        ]},
    Menu: {
        Menu:[
            {
                path: "/",
                exact: true,
                titleEn: () => 'Home',
                titleRu: () => 'Главная',
                mainEn: () => <MainEn
                    About = {store._About}
                    _MetaTitle = {store.TextSiteStore._MetaTitle}
                    _Logo = {store.TextSiteStore._Logo}
                    _Theme = {store.TextSiteStore._Theme}
                />,
                mainRu: () => <MainRu
                    About = {store._About}
                    _MetaTitle = {store.TextSiteStore._MetaTitle}
                    _Logo = {store.TextSiteStore._Logo}
                    _Theme = {store.TextSiteStore._Theme}
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
        ]
    },
    Contacts:{
        Phone: '+375(33)640-98-68',
        Email: 'ALIAKSANDR.KOVALIOU@GMAIL.COM',
    },
    TextSiteStore:{
        _MetaTitle: '🎉 ᐅ Александр Ковалёв',
        _Language: 'ru',
        _Logo: Logo,
        _TopHEaderBar: 'open',
        _CloseTopHeaderBar: 'closeTopBar',
        _Theme:[
            {'LoadingContent': 1000}
        ],
    },
    dispatch(action) {
        renderEntireTree(store)

        switch (action.type) {
            case 'EDIT-PHONE':
                phoneReducer(store, action)
                store.Contacts.Phone = action.event;
                store.Contacts.Email = 'INFO@GMAIL.COM'
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
                closeTopBarActionCreatorReduce(store,action)
                break;
            case 'LANGUAGE':
                languageReducer(store, action)
                break;
            case 'ABOUT':
                aboutReducer(store, action)
                break;
            default:
                console.log( "Нет таких значений" );
        }
    },
    getState(){
        return this.store;
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
        document.title = `${store.TextSiteStore._MetaTitle} | ${e}`;
        localStorage.setItem('page', e)
    },
    languageChange = (event) => {
        localStorage.getItem('language') === 'ru' ?
            store.dispatch(
                {type: 'LANGUAGE', Language: event.target.value, MetaTitle: '🎉 ᐅ Александр Ковалёв'}
            )
            :
            store.dispatch(
                {type: 'LANGUAGE', Language: event.target.value, MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou'}
            )
        ;
    },
    editPhone = (event) => {
        store.dispatch({type: 'EDIT-PHONE', event: event.event})
    },
    renderState = (observer) => {
        renderEntireTree = observer;
        localStorageState();
    },
    localStorageState = () => {
        localStorage.getItem('page') === null ?
            document.title = `🎉 ᐅ Aliaksandr Kavaliou | Home`
            :
            document.title = `${store.TextSiteStore._MetaTitle} | ${localStorage.getItem('page')}`
        ;
    }


export default store;
window.store = store;
