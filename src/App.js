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
        editPhoneHeader,
        metaTitle
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
                                editPhoneHeader = {editPhoneHeader}
                                metaTitle = {metaTitle}
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
