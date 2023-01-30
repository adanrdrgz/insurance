import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const CostText = styled.p`
  color: #0083BF;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const CostResult = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6DA;
  margin-top: 1rem;
  position: relative;
`;

const Result = ({cost}) => {

   

    return ( 
         (cost === 0) ? 
         <Message>Choose brand, year and insurance</Message> 
         : 
         
         (
            <CostResult>
                <TransitionGroup
                  component="span"
                  className="resultado"
                >
                    <CSSTransition
                      classNames="resultado"
                      key={cost}
                      timeout={{ enter: 500, exit: 500}}
                    >
                        <CostText>
                            Insurance cost: $<span>{cost}</span>
                        </CostText>
                    </CSSTransition>
                </TransitionGroup>
            </CostResult>
             
         )
     );
}
 
Result.propTypes = {
  cost: PropTypes.number.isRequired
}

export default Result; 