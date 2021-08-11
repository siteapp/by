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
            _MetaTitle: 'ᐅ Aliaksandr Kavaliou'
        };

        this.editPhoneHeader = this.editPhoneHeader.bind(this);
        this.metaTitle = this.metaTitle.bind(this);
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

    render(){
        const {
            Menu,
            _Logo,
            Phone,
            Email,
            _MetaTitle
        } = this.state;

        //save page name | MetaTitle
        localStorage.getItem('page') === null ? document.title = `${_MetaTitle} | Home` : document.title = `${_MetaTitle} | ${localStorage.getItem('page')}`;

        return(
            <App
                Menu = {Menu}
                Logo = {_Logo}
                Phone = {Phone}
                Email = {Email}
                editPhoneHeader = {this.editPhoneHeader}
                metaTitle = {this.metaTitle}
            />
        )
    }
}

export default State;