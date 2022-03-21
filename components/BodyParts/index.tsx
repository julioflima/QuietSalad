import * as React from 'react';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Text,
  TSpan,
} from 'react-native-svg';
import {gradientSlider} from '../../constants/gradient';
import {IBodyEnabledPart, IBodyParts} from '../../interfaces/IBodyParts';
import {Container} from './styles';

interface IBodyPartsProps {
  indexGradientSlider: number;
  bodyParts: IBodyParts;
}

const BodyParts: React.FC<IBodyPartsProps> = ({
  indexGradientSlider = 0,
  bodyParts,
}) => {
  const bodyIds: readonly string[] = bodyParts.enabled.map(item => item.id);

  type TBodyId = typeof bodyIds[number];

  const initialMuscles = bodyIds.reduce(
    (acc, curr) => ({...acc, [curr as TBodyId]: false}),
    {},
  );

  type TMuscles = {[key in TBodyId]: boolean};

  const bodyPartsEnabled: IBodyEnabledPart<TBodyId>[] = bodyParts.enabled;
  const bodyPartsDisabled: string[] = bodyParts.disabled;

  const [muscles, setMuscles] = React.useState<TMuscles>(initialMuscles);

  const handleOnPress = (muscle: keyof TMuscles) =>
    setMuscles(oldState => ({...oldState, [muscle]: !oldState[muscle]}));

  return (
    <Container>
      <Svg width={422} height={376} fill="none">
        <G id="BodyPartsDisabledFront" fill="#D6D9E0">
          {bodyPartsDisabled.map(item => (
            <Path d={item} />
          ))}
        </G>
        <G id="BodyPartsEnabledFront">
          {bodyPartsEnabled.map(part => (
            <G key={part.id + 'Parts'} id={part.id}>
              {part.paths.map((path, index) => (
                <Path
                  onPress={() => handleOnPress(part.id)}
                  key={part.id + 'Paths' + index}
                  d={path.d}
                  fill={
                    muscles[part.id]
                      ? `url(#${part.id + 'Parts' + 'Grad'})`
                      : '#fff'
                  }
                />
              ))}
              <Defs>
                <LinearGradient
                  id={part.id + 'Parts' + 'Grad'}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%">
                  <Stop
                    offset="0%"
                    stopColor={gradientSlider[indexGradientSlider].start}
                  />
                  <Stop
                    offset="100%"
                    stopColor={gradientSlider[indexGradientSlider].stop}
                  />
                </LinearGradient>
              </Defs>
            </G>
          ))}
          {bodyPartsEnabled.map(part => (
            <G key={part.id + 'Text' + String(part.line.paths)}>
              {muscles[part.id] && (
                <G fill="#018ABE">
                  <Text fontSize={12} fontWeight={500} letterSpacing={0.2}>
                    <TSpan x={part.text.x} y={part.text.y}>
                      {part.text.name}
                    </TSpan>
                  </Text>
                  {part.line.paths.map((path, index) => (
                    <Path
                      key={part.id + 'LinePaths' + index}
                      d={path.d}
                      stroke="#018ABE"
                      strokeLinecap="round"
                    />
                  ))}
                </G>
              )}
            </G>
          ))}
        </G>
      </Svg>
    </Container>
  );
};

export default BodyParts;
