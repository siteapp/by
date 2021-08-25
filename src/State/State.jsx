import React from 'react';
import App from '../App';
import Logo from './../logo.png';

import MainEn from "../Components/Main/En/Main";
import MainRu from "../Components/Main/Ru/Main";

import AboutEn from "../Components/Page/About/En/About";
import AboutRu from "../Components/Page/About/Ru/About";

import DevelopenEn from "../Components/Page/Developen/En/Developen";
import DevelopenRu from "../Components/Page/Developen/Ru/Developen";

import ContactsEn from "../Components/Page/Contacts/En/Contacts";
import ContactsRu from "../Components/Page/Contacts/Ru/Contacts";

class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
                        About = {this.state._About}
                        _MetaTitle = {this.state._MetaTitle}
                        _Logo = {this.state._Logo}
                        _Theme = {this.state._Theme}
                    />,
                    mainRu: () => <MainRu
                        About = {this.state._About}
                        _MetaTitle = {this.state._MetaTitle}
                        _Logo = {this.state._Logo}
                        _Theme = {this.state._Theme}
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
            ]
        };

        this.metaTitle = this.metaTitle.bind(this);
        this.languageChange = this.languageChange.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    componentDidMount() {
        localStorage.getItem('language') !== null ?
            localStorage.getItem('language') === 'ru' ?
                this.setState({
                    _Language: localStorage.getItem('language'),
                    _MetaTitle: '🎉 ᐅ Александр Ковалёв'
                })
            :
                this.setState({
                    _Language: localStorage.getItem('language'),
                    _MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou'
                })
        :
            console.log('start react app')
        ;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json; camelcase=1, */*'
            },
        };

        /*fetch('https://dapplets-hiring-api.herokuapp.com/api/v1/tags', requestOptions)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    Tags: responseJson
                });
            })
            .catch(error => {
                console.error(error);
            });*/
    }

    //MetaTitle edit fn
    metaTitle = (e) => {
        document.title = `${this.state._MetaTitle} | ${e}`;
        localStorage.setItem('page', e)
    }

    //change value Language
    languageChange = (event) => {
        this.setState({
            _Language: event.target.value
        });

        localStorage.setItem('language', event.target.value)
     }

    dispatch(action) {
        switch (action.type) {
            case 'EDIT-PHONE':
                this.setState({
                    Phone: action.event,
                    Email: 'INFO@GMAIL.COM'
                });
                break;
            case 'META-TITLE':
                document.title = `${this.state._MetaTitle} | ${action.e}`;
                localStorage.setItem('page', action.e)

                break;
            case 'OPEN-TOPBAR':
                console.log('OPEN-TOPBAR')
                this.setState({
                    _TopHEaderBar: 'openTopBarElement',
                    _CloseTopHeaderBar: 'openTopBar'
                });

                localStorage.removeItem('closeTopHEaderBar');
                break;
            case 'CLOSE-TOPBAR':
                console.log('CLOSE-TOPBAR')
                this.setState({
                    _TopHEaderBar: action.event,
                    _CloseTopHeaderBar: 'closeTopBar'
                });

                localStorage.setItem('closeTopHEaderBar', '1')
                break;
            default:
                console.log( "Нет таких значений" );
        }
    }

    render(){
        const {
            Menu,
            _Logo,
            Phone,
            Email,
            _MetaTitle,
            _TopHEaderBar,
            _CloseTopHeaderBar,
            _Language
        } = this.state;


        //save page name | MetaTitle
        localStorage.getItem('page') === null ? document.title = `${_MetaTitle} | Home` : document.title = `${_MetaTitle} | ${localStorage.getItem('page')}`;

        return(
            <App
                Menu = {Menu}
                Logo = {_Logo}
                Phone = {Phone}
                Email = {Email}
                _Language = {_Language}
                _TopHEaderBar = {_TopHEaderBar}
                _CloseTopHeaderBar = {_CloseTopHeaderBar}
                dispatch = {this.dispatch}
                metaTitle = {this.metaTitle}
                languageChange = {this.languageChange}
            />
        )
    }
}

export default State;