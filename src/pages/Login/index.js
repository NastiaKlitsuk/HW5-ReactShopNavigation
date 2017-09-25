import React from 'react';
import './login.css';
import {
    Layout,
    Heading,
    Section,
    InputField
} from '../../components/';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedIn } from './actions';

export const Login = ({ links, loggedIn }) => (
    <form>
        <Layout>
            <Section>
                <Heading size={2}>Login</Heading>
                <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InputField name="Name" type="text" />
                    <InputField name="Password" type="password" />
                    <Link to="/" className="product-wrapping-link">
                        <button type="submit" onClick={() => loggedIn()}>Login</button>
                    </Link>
                </div>
            </Section>
        </Layout>
    </form>
);

export default withRouter(connect(null, { loggedIn })(Login));