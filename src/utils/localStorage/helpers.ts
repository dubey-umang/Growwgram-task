import { CachingParams } from "../types";
import axios from "axios";

export function getFromLocalStorage(key: string) {
  try {
    const data = localStorage.getItem(key);
    const response = JSON.parse(data as string);

    if (response.time) {
      if (response.time > new Date().getTime()) {
        return response.data;
      }
      return null;
    } else {
      return response.data;
    }
  } catch {
    return null;
  }
}

export function getStaleDataFromLocalStorage(key: string) {
  try {
    const data = localStorage.getItem(key);
    const response = JSON.parse(data as string);

    return response;
  } catch {
    return null;
  }
}

export function setToLocalStorage(value: any, cachingParams: CachingParams) {
  try {
    const data = {} as Record<string, any>;
    data.data = value;

    if (cachingParams.time) {
      data.time = new Date().getTime() + cachingParams.time;
    }
    localStorage.setItem(cachingParams.key, JSON.stringify(data));
  } catch {}
}

async function fetchApiData(url: string, params: object, cachingParams: CachingParams) {
  try {
    const response = await axios.get(url, { params });
    setToLocalStorage(response, cachingParams);
    return response;
  } catch (error) {
    const response = getStaleDataFromLocalStorage(cachingParams.key)
    if(response){
      return response.data;
    }
    throw error;
  }
}

export function configureLocalStorage(
  url: string,
  cachingParams: CachingParams,
  params: any
) {
  const data = getFromLocalStorage(cachingParams.key);

  if (data) {
    return Promise.resolve(data);
  } else {
    return fetchApiData(url, params, cachingParams);
  }
}

export function hardRefresh() {
  localStorage.clear();
  window.location.reload();
}
