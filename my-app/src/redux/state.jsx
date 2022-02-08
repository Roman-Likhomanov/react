import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Ivan" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Good" },
                { id: 4, message: "Super" },
                { id: 5, message: "Yo" }
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Sveta" }
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
        
}

export default store;
window.store = store;