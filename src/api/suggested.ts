const API_URL = process.env.EXPO_PUBLIC_API_URL;
const AUTHORIZATION = process.env.EXPO_PUBLIC_AUTHORIZATION;
const USER_ID = process.env.EXPO_PUBLIC_USER_ID;

export async function fetchSuggested(): Promise<Object[]> {
  if (!API_URL) {
    throw new Error('API_URL is not configured');
  }

  const response = await fetch(`${API_URL}/Items/Suggestions?mediaType=Audio&Limit=20&type=MusicAlbum&userId=${USER_ID}`, {
  headers: {
    Authorization: `${AUTHORIZATION}`,
    Accept: 'application/json',
  },
});
  if (!response.ok) {
    throw new Error(`Could not fetch suggested items (${response.status})`);
  }

  return response.json() as Promise<Object[]>;
}