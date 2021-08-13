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
                    main: () => 'Home'
                },
                {
                    path: "/about",
                    exact: true,
                    main: () => 'About'
                },
                {
                    path: "/web-developen",
                    exact: true,
                    main: () => 'Web site'
                },
                {
                    path: "/contacts",
                    exact: true,
                    main: () => 'Contacts'
                }
            ],
            _Logo: Logo,
            Phone: '+375(33)640-98-68',
            Email: 'ALIAKSANDR.KOVALIOU@GMAIL.COM',
            _MetaTitle: '🎉 ᐅ Aliaksandr Kavaliou',
            _TopHEaderBar: 'open',
            _CloseTopHeaderBar: 'closeTopBar'
        };

        this.editPhoneHeader = this.editPhoneHeader.bind(this);
        this.metaTitle = this.metaTitle.bind(this);
        this.closeTopHeader = this.closeTopHeader.bind(this);
        this.openTopBar = this.openTopBar.bind(this);
    }

    componentDidMount() {
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
    openTopBar = (event) =>{
        this.setState({
            _TopHEaderBar: 'openTopBarElement',
            _CloseTopHeaderBar: 'openTopBar'
        });

        localStorage.removeItem('closeTopHEaderBar');
    }

    render(){
        const {
            Menu,
            _Logo,
            Phone,
            Email,
            _MetaTitle,
            _TopHEaderBar,
            _CloseTopHeaderBar
        } = this.state;

        //save page name | MetaTitle
        localStorage.getItem('page') === null ? document.title = `${_MetaTitle} | Home` : document.title = `${_MetaTitle} | ${localStorage.getItem('page')}`;

        return(
            <App
                Menu = {Menu}
                Logo = {_Logo}
                Phone = {Phone}
                Email = {Email}
                _TopHEaderBar = {_TopHEaderBar}
                _CloseTopHeaderBar = {_CloseTopHeaderBar}
                editPhoneHeader = {this.editPhoneHeader}
                metaTitle = {this.metaTitle}
                closeTopHeader = {this.closeTopHeader}
                openTopBar = {this.openTopBar}
            />
        )
    }
}

export default State;