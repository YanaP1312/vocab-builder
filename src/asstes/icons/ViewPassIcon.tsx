import {Svg, ClipPath, Defs, G, Path} from 'react-native-svg';

export default ({width = 20, height = 20, stroke = '#121417'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
      <G
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_83_22612)">
        <Path d="M.833 10S4.167 3.333 10 3.333 19.167 10 19.167 10 15.833 16.667 10 16.667.833 10 .833 10"></Path>
        <Path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_83_22612">
          <Path fill="#fff" d="M0 0h20v20H0z"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
};
