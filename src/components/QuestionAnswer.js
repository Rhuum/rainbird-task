import React from 'react';
import { Prompt } from './Styles';
import Respond from './Respond'

const QuestionAnswer = ({ data }) => {
  // Assuming this is the question structure
  // If multiple, use switch case depending on question parameters.
  if (data.question) {
    return (
      <>
        <Prompt>{data.question.prompt}</Prompt>
        <Respond props={data}/>
      </>
    )
  } else {
    const [ answer ] = data;
    return (
      <Prompt>
        {answer.subject}&nbsp;
        {answer.relationship}&nbsp;
        {answer.object}&nbsp;
        ({answer.certainty}% certainty)
      </Prompt>
    )
    // If multiple answers to one response exists
    // return (
    //   <>
    //     {data.map((option, index) => (
    //       <Prompt key={index}>
    //        {option.subject}
    //        {option.relationship}
    //        {option.object}
    //        ({option.certainty}% certainty)
    //       </Prompt>
    //     ))}
    //   </>
    // )
  }
}

export default QuestionAnswer
