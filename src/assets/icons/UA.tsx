import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';

export default ({width = 28, height = 28}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 28 28">
      <G clipPath="url(#clip0_68_16377)">
        <Path
          fill="#FFDA44"
          d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14"></Path>
        <Path
          fill="#338AF3"
          d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14"></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_68_16377">
          <Path fill="#fff" d="M0 0h28v28H0z"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
};
