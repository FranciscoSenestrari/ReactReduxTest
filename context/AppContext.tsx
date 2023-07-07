import React from 'react'

type State={
    textInput :string
    booleanState:boolean
}
type Action ={
    type:string
    payload?:any
}
const initialState = {
    textInput :'Default Text',
    booleanState:true

}

const AppContext = React.createContext<{
    state: State
    dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch: () => null })

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return { ...state, textInput: action.payload }

        case 'CHANGE_BOOLEAN':
            return { ...state, booleanState: action.payload }
            default:return state
    }
}
const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }