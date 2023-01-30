import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Result from './components/Result'
import Spinner from './components/Spinner'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resume, setResume] = useState({
    cost: 0,
    data: {
      brand: '',
      year: '',
      insurance: ''
    }
  });

  const [loading, setLoading] = useState(false)

  const {cost, data} = resume;
  
  return (
    <>
      <Container>
        <Header 
         title = 'Car Insurance'
        />
      </Container>

      <FormContainer>
        <Form 
          setResume = {setResume}
          setLoading={setLoading}
        />

        { loading ? <Spinner /> : null}

        <Resume 
          data={data}
        />
        
        {!loading ?
          <Result 
            cost = {cost}
          />
        :
          null
        }
        
      </FormContainer>
    </>
  )
}

export default App
