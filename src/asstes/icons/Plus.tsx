import {Path, Svg} from 'react-native-svg';

export default ({width = 20, height = 20, stroke = '#85AA9F'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 4.167v11.666M4.168 10h11.667"></Path>
    </Svg>
  );
};
