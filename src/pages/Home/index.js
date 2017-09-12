import React from 'react';
import { 
  Layout, 
  Heading, 
  Section, 
  Card,
  InputField
} from '../../components/';
import HomeFooter from './HomeFooter';
import HomeHeroArea from './HomeHeroArea';



export default ({ links }) => (
    <Layout 
        heroContent={HomeHeroArea}
        footerContent={HomeFooter}
    >
        <Section>
            <Heading size={2}>Services</Heading>
                <div className="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Technologies</Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Blog Posts</Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Feedback</Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                  <Card>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</Card>
                </div>
            </Section>
            <Section>
                <Heading size={2}>Contact</Heading>
                <div className="form-group" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                  <InputField name="Name" type="text"/>
                  <InputField name="Email" type="email" />
                  <InputField name="Message" type="textarea" />
                </div>
            </Section>
    </Layout>
)