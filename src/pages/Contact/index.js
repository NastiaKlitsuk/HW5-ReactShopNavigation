import React from 'react';
import { 
    Layout, 
    Heading, 
    Section, 
    InputField
  } from '../../components/';


export default ({ links }) => (
    <Layout>
        <Section>
            <Heading size={2}>Contact</Heading>
            <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <InputField name="Name" type="text" />
                <InputField name="Email" type="email" />
                <InputField name="Message" type="textarea" />
            </div>
        </Section>
    </Layout>
)