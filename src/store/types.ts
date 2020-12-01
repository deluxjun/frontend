export const GET_COMPANIES = 'GET_COMPANIES';
export const GET_SERVICES = 'GET_SERVICES';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Service {
  id : number;
  name : string;
}

export interface ServiceData {
  id : number;
  name : string;
}


export interface ServiceState {
  data: ServiceData | null;
  loading: boolean;
  error: string;
}

interface GetServiceAction {
  type: typeof GET_SERVICES;
  payload: ServiceData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type ServiceAction = GetServiceAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}