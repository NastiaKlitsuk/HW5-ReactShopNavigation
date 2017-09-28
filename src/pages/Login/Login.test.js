import expect from 'expect';
import thunk from 'redux-thunk';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login actions', () => {
    it('creates LOGGING_IN action before user authentication starts', () => {
        const expectedAction = [{
            type: actions.actionTypes.LOGGING_IN,
            isLoggedIn: false,
            isLoggingInProgress: true
        }]
        const store = mockStore({  isLoggedIn: true, isLoggingInProgress: false});
        
        var actualAction = actions.login()(store.dispatch);
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('creates LOGGED_IN action after user authentication', (done) => {
        const expectedActions = [{
            type: actions.actionTypes.LOGGING_IN,
            isLoggedIn: false,
            isLoggingInProgress: true
        },
        {
            type: actions.actionTypes.LOGGED_IN, 
            isLoggedIn: true,
            isLoggingInProgress: false
        }]
        const store = mockStore({  isLoggedIn: true, isLoggingInProgress: false});
        

        return store.dispatch(actions.login())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });
})