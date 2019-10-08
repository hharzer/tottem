import { Box } from 'grommet'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Header from '../components/Views/Header'
import ProfileContent from '../components/Views/ProfileContent'
import ProfileDescription from '../components/Views/Nav'
import { RoutingMatchParams, UserProfile } from '../types'
import { Footer } from '../components/Views/Footer'

interface RoutingMatchProps extends RouteComponentProps<RoutingMatchParams> {}

const Profile = (props: RoutingMatchProps) => {
    // Fetch data
    const userProfile: UserProfile = require(`./../data/${props.match.params.profileId.toLocaleLowerCase()}/profile`)
        .default
    const sections = require(`../data/${props.match.params.profileId}/sections`)
        .default

    return (
        <Box align="center" background="light-1">
            <Header />
            <Box margin={{ top: 'large' }} width="xlarge">
                <ProfileDescription {...userProfile} />
                <ProfileContent
                    sections={sections}
                    username={props.match.params.profileId}
                />
                <Footer />
            </Box>
        </Box>
    )
}

export default Profile
