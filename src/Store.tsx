import React from 'react'

interface IState {
  services: []
}
interface IAction {
  type: string,
  payload: any
}

const initialState:IState = {
  services: []
}

export const Store = React.createContext<IState>(initialState)

function reducer(state:IState, action: IAction):IState {
  switch (action.type) {
    case "FETCH_SERVICE":
      return { ...state, services: action.payload}

    default:
      return state;
  }
}

export function StoreProvider(props: any) : JSX.Element{
  return (
    <Store.Provider value={initialState}>
      {props.children}
    </Store.Provider>
  )
}
