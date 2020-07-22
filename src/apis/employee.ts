import fetch from 'node-fetch'

// axios 무거움
// node-fetch
// gittrends
/**
 * request
 * response
 * error  interface
 */

export interface IEmployeesRequest {}

export interface IEmployeesResponse {
  status: string
  data: IEmployee[]
}

export interface IEmployeesError {}

export interface IEmployee {
  id: number
  email: string
  avatar: string
  first_name: string
  last_name: string
}

export const fetchEmployees = (): Promise<IEmployeesResponse> => {
  return fetch('user/1').then((response) => {
    try {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<IEmployeesResponse>
    } catch (e) {
      throw new Error(response.statusText)
    }
  })
}

export interface IEmployeeRequest {}

export interface IEmployeeResponse {
  ad: any
  data: IEmployee
}

export interface IEmployeeError {}

export const fetchEmployee = (): Promise<IEmployeeResponse> => {
  return fetch('https://reqres.in/api/users/2').then((response) => {
    try {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<IEmployeeResponse>
    } catch (error) {
      throw new Error(response.statusText)
    }
  })
}
