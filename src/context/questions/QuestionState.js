import React, {useReducer} from 'react'
import QuestionContext from './questionContext'
import questionReducer from './questionReducer'


const QuestionState = (props) => {
    const initialState = {
        name: "Nick Gill",
        email: "ng@nickgillham.co.uk"
    }

    const [state, dispatch] = useReducer(questionReducer, initialState)

    return (
        <QuestionContext.Provider
        value={{
            name: state.name,
            email: state.email
        }}
        >
            {props.children}
        </QuestionContext.Provider>
    )

}
export default QuestionState