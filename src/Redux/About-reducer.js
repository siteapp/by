const LANGUAGE = 'ABOUT';

let initialState = {
    en: [
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
    ]
}

const aboutReducer = (store = initialState, action) => {

    return store;
}

export default aboutReducer;