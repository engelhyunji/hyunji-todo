import React from 'react'
import styled from 'styled-components'

    function Header() {
    return (
        <Section>
            <span>Hynji Todo List</span>
            <HeaderName>React</HeaderName>
        </Section>
        )
    }

    export default Header

    const Section = styled.section`
        margin: 15px 20px;
        font-weight: bolder
    `;

    const HeaderName = styled.span`
        float: right;
    `;