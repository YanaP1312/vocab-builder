import {Path, Svg} from 'react-native-svg';

export default ({width = 20, height = 20, stroke = '#85AA9F'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.332 10h13.333m0 0-3.333-3.333M16.665 10l-3.333 3.333"></Path>
    </Svg>
  );
};
