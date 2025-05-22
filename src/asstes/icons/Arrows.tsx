import Svg, {Path} from 'react-native-svg';

export default ({width = 24, height = 24, stroke = '#85AA9F'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 17H4m0 0 4-4m-4 4 4 4M4 7h16m0 0-4-4m4 4-4 4"></Path>
    </Svg>
  );
};
