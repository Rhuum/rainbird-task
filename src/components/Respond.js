import React, { useState } from 'react';
import { Loading, Error } from './Misc';
import { Button, Select } from './Styles';
import { useResponse, useInteraction } from '@rainbird/sdk-react';

const Respond = ({props}) => {
  const { data, loading, error } = useInteraction();
  const sendResponse = useResponse();
  const [selectValue, setSelectValue] = useState('England');
  const handleInputChange = e => setSelectValue(e.target.value);
  const sendObj = [{
    subject: props.question.subject,
    relationship: props.question.relationship,
    object: selectValue,
    cf: 75
  }];
  const handleResponse = () => {
    sendResponse(sendObj);
  };

  return (
    <>
      { loading && <Loading /> }
      { error && <Error /> }
      { data && data.ok && <p>Success!</p> }
      <Select
        value={selectValue}
        onChange={handleInputChange}
      >
        {data.data.question.concepts.map((option, index) => (
          <option
            key={index}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </Select>
      <Button onClick={handleResponse}>
        Respond
      </Button>
    </>
  )
}

export default Respond
