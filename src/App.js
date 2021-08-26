import React from 'react';
import a from './App.module.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {languageChange, metaTitle} from "./Redux/Store";

const App = (props) => {
    return(
        <>
            <Router>
                <div className={a.background}>
                    <div className={a.container}>
                        <div>
                            <Header
                                Menu = {props.store.Menu.Menu}
                                Logo = {props.store.TextSiteStore._Logo}
                                Phone = {props.store.Contacts.Phone}
                                Email = {props.store.Contacts.Email}
                                _Language = {props.store.TextSiteStore._Language}
                                _TopHEaderBar = {props.store.TextSiteStore._TopHEaderBar}
                                _CloseTopHeaderBar = {props.store.TextSiteStore._CloseTopHeaderBar}
                                languageChange = {languageChange}
                                metaTitle = {metaTitle}
                            />
                        </div>
                    </div>
                </div>
                <div className={a.container}>
                    <div>
                        <>
                            <Switch>
                                {localStorage.getItem('language') !== null ?
                                    localStorage.getItem('language') === 'ru' ?
                                        props.store.Menu.Menu.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.mainRu />}
                                            />
                                        ))
                                        :
                                        props.store.Menu.Menu.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.mainEn />}
                                            />
                                        ))
                                    :
                                    props.store.Menu.Menu.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            children={<route.mainEn/>}
                                        />
                                    ))
                                }

                            </Switch>
                        </>
                    </div>

                </div>
                <div className={a.background}>
                    <Footer
                        Menu = {props.store.Menu.Menu}
                    />
                </div>
            </Router>
        </>

    )
}

export default App;
