import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'system-ui';
  text-align: center;
  color: #5a24fb;
`

const Prompt = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-family: 'monospace';
  color: #5a24fb;
`

const Button = styled.button`
  background-color: #5a24fb;
  border: 1px solid #dedef5;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  display: block;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0,0,0,0.3) 0px 8px 16px -8px;
  color: #fff;
`

const Select = styled.select`
  border: 1px solid #dedef5;
  background-color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
  color: #5a24fb;
`

const Input = styled.input`
  border: 1px solid #dedef5;
  font-size: 1rem;
  padding: 1rem 2rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
  color: #5a24fb;
`
export { H1, Prompt, Button, Select, Input };
