import { ServiceAction, ServiceState, GET_COMPANIES, GET_SERVICES, SET_LOADING, SET_ERROR } from '../types';

const initialState: ServiceState = {
  data: null,
  loading: false,
  error: ''
}

export default (state:ServiceState, action:ServiceAction):ServiceState => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        data: action.payload,
        loading: false,
        error:''
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR : 
      return{
        ...state,
        error: action.payload,
        loading: false
      }
  
    default:
      return state;
  }
}