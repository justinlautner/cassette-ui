import { ImageSourcePropType } from "react-native";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const AUTHORIZATION = process.env.EXPO_PUBLIC_AUTHORIZATION;

export function fetchItemImage(id: string, tag: string): ImageSourcePropType {
  if (!API_URL) {
    throw new Error('API_URL is not configured');
  }

  return {
    uri: `${API_URL}/Items/${id}/Images/Primary?fillHeight=500&fillWidth=500&quality=96&tag=${tag}`,
    headers: {
        Authorization: `${AUTHORIZATION}`,
        Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
    },
  }
}

