import {Path, Svg} from 'react-native-svg';

export default ({width = 16, height = 17, stroke = '#85AA9F'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 16 17">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        d="M11.334 2.5a1.885 1.885 0 1 1 2.667 2.667l-9 9-3.667 1 1-3.667z"></Path>
    </Svg>
  );
};
