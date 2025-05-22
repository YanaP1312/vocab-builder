import {Path, Svg} from 'react-native-svg';

export default ({width = 18, height = 25, fill = '#85AA9F'}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 18 25">
      <Path
        fill={fill}
        d="M2 12.439c0 .382.146.707.45 1l8.759 8.568c.236.247.55.37.91.37.73 0 1.302-.56 1.302-1.302 0-.36-.146-.685-.393-.932L5.133 12.44l7.895-7.704c.247-.258.393-.584.393-.944A1.28 1.28 0 0 0 12.12 2.5c-.36 0-.674.124-.91.37l-8.76 8.57a1.38 1.38 0 0 0-.449.999"></Path>
    </Svg>
  );
};
