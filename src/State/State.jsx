import React from 'react';
import App from '../App';
import Logo from './../logo.png';

class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Menu:[
                {
                    path: "/",
                    exact: true,
                    mainEn: () => 'Home',
                    mainRu: () => 'Главная'

                },
                {
                    path: "/about",
                    exact: true,
                    mainEn: () => 'About',
                    mainRu: () => 'Обо мне'

                },
                {
                    path: "/web-developen",
                    exact: true,
                    mainEn: () => 'Web site',
                    mainRu: () => 'Разработка'
                },
                {
                    path: "/contacts",
                    exact: true,
                    mainEn: () => 'Contacts',
                    mainRu: () => 'Контакты'
                }
            ],
            _Logo: Logo,
            Phone: '+375(33)640-98-68',
            Email: 'ALIAKSANDR.KOVALIOU@GMAIL.COM',
            _MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou',
            _TopHEaderBar: 'open',
            _CloseTopHeaderBar: 'closeTopBar',
            _Language: 'en',
        };

        this.editPhoneHeader = this.editPhoneHeader.bind(this);
        this.metaTitle = this.metaTitle.bind(this);
        this.closeTopHeader = this.closeTopHeader.bind(this);
        this.openTopBar = this.openTopBar.bind(this);
        this.languageChange = this.languageChange.bind(this);
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

    //editor phone
    editPhoneHeader = event => {
        this.setState({
            Phone: event,
            Email: 'INFO@GMAIL.COM'
        });
    }

    //MetaTitle edit fn
    metaTitle = (e) => {
        document.title = `${this.state._MetaTitle} | ${e}`;
        localStorage.setItem('page', e)
    }

    //close TopHeader
    closeTopHeader = (event) => {
        this.setState({
            _TopHEaderBar: event,
            _CloseTopHeaderBar: 'closeTopBar'
        });

        localStorage.setItem('closeTopHEaderBar', '1')
    }

    //delete localStorage closeTopHEaderBar
    openTopBar = (event) => {
        this.setState({
            _TopHEaderBar: 'openTopBarElement',
            _CloseTopHeaderBar: 'openTopBar'
        });

        localStorage.removeItem('closeTopHEaderBar');
    }

    //change value Language
    languageChange = (event) => {
        this.setState({
            _Language: event.target.value
        });

        localStorage.setItem('language', event.target.value)
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
                editPhoneHeader = {this.editPhoneHeader}
                metaTitle = {this.metaTitle}
                languageChange = {this.languageChange}
                closeTopHeader = {this.closeTopHeader}
                openTopBar = {this.openTopBar}
            />
        )
    }
}

export default State;