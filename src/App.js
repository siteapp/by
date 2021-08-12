import React from 'react';
import a from './App.module.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = (props) => {
    const {
        Menu,
        Logo,
        Phone,
        Email,
        _TopHEaderBar,
        editPhoneHeader,
        metaTitle,
        closeTopHeader,
        openTopBar,
        _CloseTopHeaderBar
    } = props;

    return(
        <>
            <Router>
                <div className={a.background}>
                    <div className={a.container}>
                        <div>
                            <Header
                                Menu = {Menu}
                                Logo = {Logo}
                                Phone = {Phone}
                                Email = {Email}
                                _TopHEaderBar = {_TopHEaderBar}
                                _CloseTopHeaderBar = {_CloseTopHeaderBar}
                                editPhoneHeader = {editPhoneHeader}
                                metaTitle = {metaTitle}
                                closeTopHeader = {closeTopHeader}
                                openTopBar = {openTopBar}
                            />
                        </div>
                    </div>
                </div>
                <div className={a.container}>
                    <div>
                        <Main />
                        <>
                            <Switch>
                                {Menu.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                        </>
                    </div>
                    <div>
                        <Footer
                            Menu = {Menu}
                        />
                    </div>
                </div>
            </Router>
        </>

    )
}

export default App;
