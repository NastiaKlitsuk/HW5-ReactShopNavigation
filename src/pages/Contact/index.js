import React from 'react';
import { 
    Layout, 
    Heading, 
    Section, 
    InputField
  } from '../../components/';


export default ({ links, navigationMessage }) => (
    <Layout>
        <Section>
            <Heading size={2}>Contact</Heading>
            <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <InputField name="Name" type="text" navigationMessage={navigationMessage}/>
                <InputField name="Email" type="email" navigationMessage={navigationMessage}/>
                <InputField name="Message" type="textarea" navigationMessage={navigationMessage}/>
            </div>
        </Section>
    </Layout>
)