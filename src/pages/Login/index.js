import React from 'react';
import './login.css';
import {
    Layout,
    Heading,
    Section,
    InputField
} from '../../components/';
import {
    Link
} from 'react-router-dom'

export default ({ links, onLoggedIn }) => (
    <form onSubmit={(event) => onLoggedIn(event)}>
        <Layout>
            <Section>
                <Heading size={2}>Login</Heading>
                <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InputField name="Name" type="text" />
                    <InputField name="Password" type="password" />
                    <Link to="/" className="product-wrapping-link">
                        <button type="submit">Login</button>
                    </Link>
                </div>
            </Section>
        </Layout>
    </form>
);