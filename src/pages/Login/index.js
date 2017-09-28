import React from 'react';
import './login.css';
import {
    Layout,
    Heading,
    Section
} from '../../components/';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions';
import { Field } from 'react-redux-form';

export const Login = ({ links, loggedIn, isLoggingInProgress}) => (
    <form>
        <Layout>
            <Section>
                <Heading size={2}>Login</Heading>
                    <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Field model="user.name">
                            <label>Username</label>
                            <input type="text" />
                        </Field>
                        <Field model="user.password">
                            <label>Password</label>
                            <input type="password" />
                        </Field>
                        <Link to="/" className="product-wrapping-link">
                            <button type="submit" onClick={() => login()}>Login</button>
                        </Link>
                        <div className="loging-inprocess">
                        { 
                            isLoggingInProgress ?
                            <Heading size={2}>Loggin in, please wait...</Heading> :
                            <span></span>
                        }
                        </div>
                    </div> 
            </Section>
        </Layout>
    </form>
);

const mapStateToProps = ({ loginReducer: { isLoggingInProgress }}) => ({
    isLoggingInProgress
})

export default withRouter(connect(mapStateToProps, {login})(Login));