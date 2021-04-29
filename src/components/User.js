import React from 'react';
import { Prompt, Button, Input } from './Styles';

const User = ({userData}) => {
  return (
    <>
      <Prompt>Please enter your name</Prompt>
      <form onSubmit={userData.handleSubmit}>
        <Input
          onChange={(e) => userData.setUser(e.target.value)}
          value={userData.user}
        />
        { userData.user && <Button type="submit">Submit</Button> }
      </form>
    </>
  )
}

export default User
