import React, { useState } from 'react';
import User from './components/User';
import QuestionAnswer from './components/QuestionAnswer'
import { Loading, Error } from './components/Misc'
import { H1 } from './components/Styles';
import { Rainbird } from '@rainbird/sdk-react';

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const userData = {
    user: user,
    setUser: setUser,
    handleSubmit: handleSubmit
  };

  if (!submitted) {
    return (
      <User userData={userData}/>
    )
  } else {
    return (
      <Rainbird
        baseURL="https://api.rainbird.ai"
        apiKey="8490c85c-ec0f-4dfc-94c6-827ee273d3c8"
        kmID="bfaab567-6494-4dd3-bbdb-0915a32da0f7"
        options={{}}
        subject={user}
        relationship="speaks" // Had "Speaks", threw me :(
        object=""
        onError={e => <Error>{e.message}</Error>}
        onnLoad={<Loading />}
      >
          {({ data }) => ( // this is a response from the /query endpoint
            // ...rest of the app
            <>
              <H1>Rainbird task</H1>
              <QuestionAnswer data={data}/>
            </>
          )}
      </Rainbird>
    )
  }
}

export default App
