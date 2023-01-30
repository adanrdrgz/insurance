import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'



const ResumeContainer = styled.div`
    padding:1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`
const Resume = ({data}) => {
    const {brand, year, insurance} = data;

    if( brand === '' || year === '' || insurance === '') return null;
    return ( 
        <ResumeContainer>
            <h2>Cost Resume</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Insurance: {insurance}</li>
                <li>Year: {year}</li>
            </ul>
        </ResumeContainer>
     );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}
export default Resume ;