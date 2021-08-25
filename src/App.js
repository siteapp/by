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
import {renderState} from "./Store";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }

    render() {
        //save page name | MetaTitle
        localStorage.getItem('page') === null ? document.title = `${this.props.store._MetaTitle} | Home` : document.title = `${this.props.store._MetaTitle} | ${localStorage.getItem('page')}`;

        return(
            <>
                <Router>
                    <div className={a.background}>
                        <div className={a.container}>
                            <div>
                                <Header
                                    Menu = {this.props.store.Menu}
                                    Logo = {this.props.store._Logo}
                                    Phone = {this.props.store.Phone}
                                    Email = {this.props.store.Email}
                                    _Language = {this.props.store._Language}
                                    _TopHEaderBar = {this.props.store._TopHEaderBar}
                                    _CloseTopHeaderBar = {this.props.store._CloseTopHeaderBar}
                                    dispatch = {this.props.store.dispatch}

                                    languageChange = {this.props.store.languageChange}
                                    metaTitle = {this.props.store.metaTitle}
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
                                            this.props.store.Menu.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    children={<route.mainRu />}
                                                />
                                            ))
                                            :
                                            this.props.store.Menu.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    children={<route.mainEn />}
                                                />
                                            ))
                                        :
                                        this.props.store.Menu.map((route, index) => (
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
                            Menu = {this.props.store.Menu}
                        />
                    </div>
                </Router>
            </>

        )
    }

}

export default App;
