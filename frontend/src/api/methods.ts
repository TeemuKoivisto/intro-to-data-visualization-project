import axios, { AxiosError } from 'axios'
import { parse } from 'papaparse'

const { REACT_APP_API_URL } = process.env
export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

/**
 * Generates requests using axios since fetch is slightly annoying.
 *
 * Instead of returning Promise<T> whenever there's an error, it throws
 * an Error and computation is stopped inside mobx stores which use this.
 * @param path - The path after the API_URL
 * @param options - Axios options object
 */
const createRequest = (path: string, options: any) : Promise<any> => {
  return axios(`${REACT_APP_API_URL}/${path}`, options)
    .then(res => res.data)
    .catch((err: AxiosError) => {
      if (err.response) {
        throw new Error(err.response.data.message || err.response.data)
      }
      throw err
    })
}

export const getCsv = <T>(path: string, parser: (row: any) => any) : Promise<T> =>
  new Promise((resolve, reject) => {
    parse(path, {
      delimiter: ',',
      download: true,
      header: true,
      skipEmptyLines: true,
      complete(results) {
        resolve(results.data.map(row => parser(row)) as unknown as T)
      },
      error(err: any) {
        reject(err)
      }
    })
  })

export const get = <T>(path: string, headers = defaultHeaders) : Promise<T> =>
  createRequest(path, { headers, method: 'GET' })

export const post = <T>(path: string, data: any, headers = defaultHeaders) : Promise<T> =>
  createRequest(path, { headers, data, method: 'POST' })

export const put = <T>(path: string, data: any, headers = defaultHeaders) : Promise<T> =>
  createRequest(path, { headers, data, method: 'PUT' })

export const del = <T>(path: string, headers = defaultHeaders) : Promise<T> =>
  createRequest(path, { headers, method: 'DELETE' })
