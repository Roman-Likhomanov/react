const UPDATE_NEWMESSAGE_BODY = 'UPDATE-NEWMESSAGE-BODY';
const SEND_MESSAGE = 'SEND MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEWMESSAGE_BODY:
            return {
                ...state,
                newMessageBody:action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:"",
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEWMESSAGE_BODY, body: body });

export default dialogsReducer; 