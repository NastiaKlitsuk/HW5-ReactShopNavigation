import React from 'react';
import { HeroArea, Heading } from '../../components/';
import T from 'i18n-react';
import { connect } from 'react-redux';

export const HomeHeroArea = ({name, isLoggedIn}) => (
    <HeroArea>
        <Heading size={1}>
            {
                isLoggedIn ?
                <T.span text={{ key: "welcome", userName: name }}/> :
                <span>Home page</span>
            }
        </Heading>
    </HeroArea>
)

const mapStateToProps = ({ user: { name }, loginReducer: { isLoggedIn }}) => ({
    name,
    isLoggedIn
})

export default connect(mapStateToProps)(HomeHeroArea);
