import { Text, TextProps } from 'react-native';

export default function AppText(props: TextProps) {
  return <Text {...props} style={[{ color: '#E4E4E7' }, props.style]} />;
}