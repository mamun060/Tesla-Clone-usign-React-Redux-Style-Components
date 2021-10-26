import React from 'react'
import Section from './Section'
import styled from 'styled-components';

function Home() {
    return (
        <Container>

            <Section
            title="Model S"
            description="Order Online for Touchless Delivary"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Exiting inventory"
            />

            <Section 
             title="Model Y"
             description="Order Online for Touchless Delivary"
             backgroundImg="model-y.jpg"
             leftBtnText="Custom order"
             rightBtnText="Exiting inventory"
            />

            <Section 
             title="Model 3"
             description="Order Online for Touchless Delivary"
             backgroundImg="model-3.jpg"
             leftBtnText="Custom order"
             rightBtnText="Exiting inventory"
            />

            <Section 
             title="Model X"
             description="Order Online for Touchless Delivary"
             backgroundImg="model-x.jpg"
             leftBtnText="Custom order"
             rightBtnText="Exiting inventory"
            />

            <Section 
             title="Lotest Cost Solar Panels in America"
             description="Money back guarantee"
             backgroundImg="solar-panel.jpg"
             leftBtnText="Order now"
             rightBtnText="Learn more"
            />

            <Section 
             title="Accessories"
             description=""
             backgroundImg="accessories.jpg"
             leftBtnText="Shop Now"
            />

        </Container>
    )
}

export default Home;

const Container = styled.div`
height:100vh;
z-index: 10;
`
