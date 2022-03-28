import axios from "axios";
import { CLIENT_ID } from "./constants";
import { getUrl } from "./helpers";
import { configureLocalStorage } from "./localStorage/helpers";
import { FeedData, User } from "./types";

export function getRandomFeeds(page = 1): Promise<{ data: FeedData[] }> {
  const url = `/photos/random/`;
  const params = {
    count: 10,
    page,
    client_id: CLIENT_ID,
  };
  const cachingParams = {
    key: `Feed Data-${page}`,
    time: 60 * 5 * 1000,
  };

  if (page < 3) {
    return configureLocalStorage(getUrl(url), cachingParams, params);
  }

  return axios.get(getUrl(url), { params });
}

export function fetchUsersData(username: string): Promise<{ data: User }> {
  const url = `/users/${username}`;
  const params = {
    client_id: CLIENT_ID,
  };
  const cachingParams = {
    key: username,
    time: 60 * 5 * 1000,
  };

  return configureLocalStorage(getUrl(url), cachingParams, params);
}

export function fetchUserPhtots(
  username: string,
  page = 1
): Promise<{ data: FeedData[] }> {
  const url = `/users/${username}/photos`;
  const params = {
    client_id: CLIENT_ID,
    page,
  };
  const cachingParams = {
    key: username + page,
    time: 60 * 5 * 1000,
  };

  if (page < 3) {
    return configureLocalStorage(getUrl(url), cachingParams, params);
  }

  return axios.get(getUrl(url), { params });
}

