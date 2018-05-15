import { Observable } from 'rxjs/Observable'
import { ajax as ajaxRequest } from 'rxjs/observable/dom/ajax'
import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable'

const headers = {
  Accept: 'application/json',
}

const headersWithPayload = {
  ...headers,
  'Content-Type': 'application/json;charset=utf-8',
}

const post = <A>(url: string, body: A): Observable<AjaxResponse> =>
  ajaxRequest.post(url, JSON.stringify(body), headersWithPayload)

// tslint:disable-next-line no-any
const get = <A = any>(url: string): Observable<A> =>
  ajaxRequest.getJSON(url, headers)

export const api = { post, get }
