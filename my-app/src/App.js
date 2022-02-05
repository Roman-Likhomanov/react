import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialaized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper' >
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content' >
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path="/dialogs" element={<DialogsContainer
                            />} />
                            <Route path="/profile/*" element={<ProfileContainer
                            />} />
                            <Route path="/users" element={<UsersContainer
                            />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialaized: state.app.initialaized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default SamuraiJSApp;