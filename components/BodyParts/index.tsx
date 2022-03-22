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
import {Container, Content} from './styles';

interface IBodyPartsProps {
  indexGradientSlider: number;
  left: number;
  bodyParts: IBodyParts;
  injurieState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

const BodyParts: React.FC<IBodyPartsProps> = ({
  indexGradientSlider = 0,
  bodyParts,
  left,
  injurieState,
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

  const [injuries, setInjuries] = injurieState;
  const [muscles, setMuscles] = React.useState<TMuscles>(initialMuscles);

  const handleOnPress = (muscle: keyof TMuscles) => {
    setInjuries(setOldState => [...setOldState, muscle]);
    setMuscles(oldState => ({...oldState, [muscle]: !oldState[muscle]}));
  };

  const handleClear = React.useCallback(() => {
    if (!injuries.length) {
      setMuscles(initialMuscles);
    }
  }, [initialMuscles, injuries.length]);

  React.useEffect(() => {
    handleClear();
  }, [handleClear]);

  return (
    <Container>
      <Content style={{left: left}}>
        <Svg width={430} height={400} viewBox="0 -20 430 430" fill="none">
          <G key="BodyPartsDisabledFront" fill="#D6D9E0">
            {bodyPartsDisabled.map((parts, index) => (
              <Path
                key={parts + 'PartsDisabled' + index}
                id={parts + 'PartsDisabled' + index}
                d={parts}
              />
            ))}
          </G>
          <G id="BodyPartsEnabledFront">
            {bodyPartsEnabled.map((part, index) => (
              <G key={part.id + 'Parts' + index} id={part.id}>
                {part.paths.map((path, indexPath) => (
                  <Path
                    onPress={() => handleOnPress(part.id)}
                    key={part.id + 'Paths' + indexPath}
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
            {bodyPartsEnabled.map((part, index) => (
              <G
                id={part.id + 'PartsText' + index}
                key={part.id + 'Text' + String(part.line.paths)}>
                {muscles[part.id] && (
                  <G fill="#018ABE">
                    <Text fontSize={12} fontWeight={500} letterSpacing={0.2}>
                      <TSpan x={part.text.x} y={part.text.y}>
                        {part.text.name}
                      </TSpan>
                    </Text>
                    {part.line.paths.map((path, indexPath) => (
                      <Path
                        key={part.id + 'LinePaths' + indexPath}
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
      </Content>
    </Container>
  );
};

export default BodyParts;
