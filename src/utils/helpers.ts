import { BASE_URL } from "./constants";

export function truncateUsername(username: string, upto: number) {
  if (!username) return '';
  if (username.length < upto) return username;
  return (username.substring(0, upto) + '...');
}

export function getUrl(remainingUrl: string) {
  return BASE_URL + remainingUrl;
}



