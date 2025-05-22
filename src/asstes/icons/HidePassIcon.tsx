import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

export default ({width = 20, height = 20, stroke = '#121417'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
      <G
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_83_22606)">
        <Path d="M14.95 14.95A8.4 8.4 0 0 1 10 16.667C4.167 16.667.833 10 .833 10A15.4 15.4 0 0 1 5.05 5.05m3.2-1.517a7.6 7.6 0 0 1 1.75-.2c5.833 0 9.167 6.667 9.167 6.667a15.4 15.4 0 0 1-1.8 2.658m-5.6-.891a2.5 2.5 0 1 1-3.534-3.534M.833.833l18.334 18.334"></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_83_22606">
          <Path fill="#fff" d="M0 0h20v20H0z"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
};
