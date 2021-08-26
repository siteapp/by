import MainEn from "../Components/Main/En/Main";
import MainRu from "../Components/Main/Ru/Main";
import AboutEn from "../Components/Page/About/En/About";
import AboutRu from "../Components/Page/About/Ru/About";
import DevelopenEn from "../Components/Page/Developen/En/Developen";
import DevelopenRu from "../Components/Page/Developen/Ru/Developen";
import ContactsEn from "../Components/Page/Contacts/En/Contacts";
import ContactsRu from "../Components/Page/Contacts/Ru/Contacts";

import Logo from "../logo.png";

let initialState = {
    _MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou',
    _Logo: Logo,
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
    _Theme:[
        {'LoadingContent': 1000}
    ],
    Menu:[
        {
            path: "/",
            exact: true,
            titleEn: () => 'Home',
            titleRu: () => 'Главная',
            mainEn: () => <MainEn
                About = {initialState._About}
                _MetaTitle = {initialState._MetaTitle}
                _Logo = {initialState._Logo}
                _Theme = {initialState._Theme}
            />,
            mainRu: () => <MainRu
                About = {initialState._About}
                _MetaTitle = {initialState._MetaTitle}
                _Logo = {initialState._Logo}
                _Theme = {initialState._Theme}
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
}

const menuReducer = (store = initialState, action) => {

    return store;
}

export default menuReducer;