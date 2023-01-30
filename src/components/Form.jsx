import React, { useState } from 'react';
import styled from '@emotion/styled'
import { getYearDif, brandCost, getInsurance } from '../auxi.js'
import PropTypes from 'prop-types'

const Area = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width:100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size:16px;
    width:100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`

const Error = styled.div`
    background-color: red;
    color:white;
    padding:1rem;
    width:100%;
    text-align: center;
    margin-bottom:2rem;
`


const Form = ({setResume, setLoading}) => {
    
    const [ data, setData ] = useState({
        brand: '',
        year: '',
        insurance: ''
    });

    const [error, setError] = useState(false);
    
    //extract state value
    const {brand, year, insurance} = data;

    //Read form data and set it into the state
    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        
    }
    
    //submit 

    const insuranceCost = e => {
        e.preventDefault();

        if (brand.trim() === '' || year.trim() === '' || insurance.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        //standard cost 2000
        let total = 2000;
        //get year difference

        const difference = getYearDif(year)
        

        // 3% less by each previous year
        total -= ((difference * 3) * total) / 100; 
        // American 15%
        // Asian 5%
        // European 30%

        total = brandCost(brand) * total

        //Basic 20% up
        //Full 50%

        total = parseFloat(getInsurance(insurance) * total).toFixed(2)

        setLoading(true);
        setTimeout(() => {
           setLoading(false);

           setResume({
            cost: Number(total),
            data

           })

        }, 3000);

        
    }
    
    return (
        <form 
            onSubmit={insuranceCost}
        >
            {error ? <Error>All fields required</Error> : null}
            <Area>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange = {getData}
                >
                    <option value = ''>--- Select ---</option>
                    <option value = 'American'>American</option>
                    <option value = 'European'>European</option>
                    <option value = 'Asian'>Asian</option>
                </Select>
            </Area>

            <Area>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange = {getData}
                >
                    <option value="">--- Select ---</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Area>

            <Area>
                <Label>Insurance</Label>
                <InputRadio 
                    type="radio"
                    name="insurance"
                    value="Basic"
                    checked={insurance === "Basic"}
                    onChange = {getData}
                />Basic
                <InputRadio 
                    type="radio"
                    name="insurance"
                    value="Full"
                    checked={insurance === "Full"}
                    onChange = {getData}
                />Full
            </Area>
                
            <Button type="submit">Calculate</Button>
            
        </form>
    );
}

Form.propTypes = {
    setResume: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form