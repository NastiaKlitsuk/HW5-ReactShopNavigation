import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'

import {
    Route,
    Link
} from 'react-router-dom'

export default ({ match, location }) => (
    <Layout>
        <Section>
            <Heading size={2}>{location.state.title}</Heading>
            <div className="">
                <Card>
                    <p>{location.state.description}</p>
                </Card>
                <img src={location.state.imageUrl} />
            </div>
        </Section>
    </Layout >
)