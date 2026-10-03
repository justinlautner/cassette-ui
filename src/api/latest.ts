const API_URL = process.env.EXPO_PUBLIC_API_URL;
const AUTHORIZATION = process.env.EXPO_PUBLIC_AUTHORIZATION;
const USER_ID = process.env.EXPO_PUBLIC_USER_ID;

export interface LatestItem {
  Id: string;
  Name?: string;
  ImageTags?: {
    Primary?: string;
  };
}

export async function fetchLatest(): Promise<LatestItem[]> {
  if (!API_URL) {
    throw new Error('API_URL is not configured');
  }

  const response = await fetch(`${API_URL}/Items/Latest?userId=${USER_ID}&parentId=7e64e319657a9516ec78490da03edccb&fields=PrimaryImageAspectRatio&fields=MediaSourceCount&includeItemTypes=Audio&imageTypeLimit=1&enableImageTypes=Primary&enableImageTypes=Thumb
`, {
  headers: {
    Authorization: `${AUTHORIZATION}`,
    Accept: 'application/json',
  },
});
  if (!response.ok) {
    throw new Error(`Could not fetch latest items (${response.status})`);
  }

  return response.json() as Promise<LatestItem[]>;
}