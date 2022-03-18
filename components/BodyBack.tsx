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
import {IBodyParts} from './interfaces/IBodyParts';

interface IMuscles {
  sternocleido: boolean;
  serratus: boolean;
  latissimus: boolean;
  gluteusMedius: boolean;
  gluteusMaximus: boolean;
  deltoid: boolean;
  triceps: boolean;
  upperBack: boolean;
  soleus: boolean;
  bicepsFemoris: boolean;
  trapezius: boolean;
}

const BodyBack: React.FC<any> = props => {
  const [muscles, setMuscles] = React.useState<IMuscles>({
    sternocleido: false,
    serratus: false,
    latissimus: false,
    gluteusMedius: false,
    gluteusMaximus: false,
    deltoid: false,
    triceps: false,
    upperBack: false,
    soleus: false,
    bicepsFemoris: false,
    trapezius: false,
  });

  const bodyParts: IBodyParts<IMuscles>[] = [
    {
      id: 'sternocleido',
      paths: [
        {
          d: 'M187.585 50.6689C189.423 49.7491 190.649 49.1358 192.793 48.8292C192.487 57.4146 191.108 63.3936 189.27 66.4598C189.883 61.4006 189.27 56.0348 187.585 50.6689Z',
        },
        {
          d: 'M206.425 50.6689C204.587 49.7491 203.361 49.1358 201.217 48.8292C201.523 57.4146 202.749 63.3936 204.74 66.4598C204.127 61.4006 204.74 56.0348 206.425 50.6689Z',
        },
      ],
      text: {
        name: 'Sternocleido-mastoide',
        x: '0.273',
        y: '11.11',
      },
      line: {paths: [{d: 'M190.5 53 127 18'}]},
    },
    {
      id: 'serratus',
      paths: [
        {
          d: 'M179.627 178.069C176.257 176.229 172.888 175.003 169.364 174.39C168.752 157.986 166.454 142.041 162.012 126.557L164.003 111.993C171.049 114.292 178.249 116.592 184.989 117.359C187.746 137.595 181.312 169.79 179.627 178.069Z',
        },
        {
          d: 'M213.941 178.069C217.311 176.229 220.681 175.003 224.204 174.39C224.816 157.986 227.114 142.041 231.556 126.557L229.565 111.993C222.519 114.292 215.319 116.592 208.579 117.359C205.822 137.595 212.256 169.79 213.941 178.069Z',
        },
      ],
      text: {
        name: 'Serratus Posterior',
        x: '278.433',
        y: '178.11',
      },
      line: {paths: [{d: 'M220 130L283.5 165'}]},
    },
    {
      id: 'latissimus',
      paths: [
        {
          d: 'M196.776 117.214V117.21C199.84 117.823 203.829 117.972 207.046 117.665C204.289 138.362 211.029 171.477 212.561 178.989C207.507 182.054 201.681 186.499 196.78 191.71V191.714L196.778 191.712L196.776 191.714V191.71C191.875 186.499 186.059 182.054 181.006 178.989C182.538 171.477 189.278 138.362 186.52 117.665C189.889 117.972 193.713 117.827 196.776 117.214Z',
        },
      ],
      text: {
        name: 'Latissimus Dorsis',
        x: '271.189',
        y: '208.11',
      },
      line: {paths: [{d: 'M196 151L276 195.094'}]},
    },
    {
      id: 'gluteusMedius',
      paths: [
        {
          d: 'M177.943 179.142C173.96 182.822 166.148 197.233 162.625 203.672C162.778 194.626 164.77 185.735 168.752 177.149C171.509 176.689 174.573 177.609 177.943 179.142Z',
        },
        {
          d: 'M215.165 179.142C219.148 182.822 226.654 197.233 230.024 203.672C229.87 194.626 227.879 185.735 224.049 177.149C221.445 176.689 218.382 177.609 215.165 179.142Z',
        },
      ],
      text: {
        name: 'Gluteus Medius',
        x: '18.3504',
        y: '148.11',
      },
      line: {paths: [{d: 'M169.5 188L106 153'}]},
    },
    {
      id: 'gluteusMaximus',
      paths: [
        {
          d: 'M196.018 193.707L195.252 218.543C190.35 225.135 173.96 234.794 172.122 234.794C170.284 234.794 164.31 209.038 163.084 206.278C162.625 205.358 176.564 181.595 179.321 180.062C179.475 180.215 179.628 180.215 179.934 180.369C184.836 183.282 190.35 187.881 196.018 193.707Z',
        },
        {
          d: 'M197.55 193.707L198.163 218.543C202.911 225.135 218.842 234.794 220.68 234.794C222.518 234.794 228.186 209.038 229.564 206.278C230.024 205.358 216.391 181.595 213.787 180.062C213.634 180.215 213.481 180.215 213.174 180.369C208.426 183.282 203.064 187.881 197.55 193.707Z',
        },
      ],
      text: {
        name: 'Gluteus Maximus',
        x: '23.0414',
        y: '259.11',
      },
      line: {paths: [{d: 'M179.5 211L116 246'}]},
    },
    {
      id: 'deltoid',
      paths: [
        {
          d: 'M147.306 115.365C147.306 115.365 171.509 97.7348 171.202 92.0624C170.896 86.3899 162.318 88.8429 159.714 87.4631C157.11 86.0833 158.182 85.1635 158.182 85.1635C146.54 87.1565 143.783 98.3481 147.306 115.365Z',
        },
        {
          d: 'M245.495 115.365C245.495 115.365 221.599 97.7348 221.905 92.0624C222.212 86.3899 230.637 88.8429 233.241 87.4631C235.845 86.0833 234.772 85.1635 234.772 85.1635C246.414 87.1565 249.018 98.3481 245.495 115.365Z',
        },
      ],
      text: {
        name: 'Deltoide',
        x: '67.2457',
        y: '65.11',
      },
      line: {paths: [{d: 'M154 97.5591L104 70'}]},
    },
    {
      id: 'triceps',
      paths: [
        {
          d: 'M147.154 116.899C145.775 122.571 144.55 134.223 144.396 141.581C144.703 146.027 145.775 149.707 147.154 152.773C148.379 155.073 149.911 155.533 151.443 154.766C159.255 151.24 162.012 117.205 163.391 104.634C159.255 109.846 153.434 113.526 147.154 116.899Z',
        },
        {
          d: 'M245.802 116.899C247.18 122.571 248.406 134.223 248.559 141.581C248.253 146.027 247.18 149.707 245.802 152.773C244.576 155.073 243.198 155.533 241.513 154.766C233.7 151.24 231.096 117.205 229.718 104.634C233.854 109.846 239.521 113.526 245.802 116.899Z',
        },
      ],
      text: {
        name: 'Triceps',
        x: '52.2945',
        y: '89.11',
      },
      line: {paths: [{d: 'M151.5 130L88 95'}]},
    },
    {
      id: 'upperBack',
      paths: [
        {
          d: 'M172.888 88.9962C173.961 94.2088 169.518 98.9614 164.923 103.714C164.923 103.714 164.157 110.92 164.31 110.92C175.339 115.519 196.019 117.205 196.019 114.906V92.9823C189.432 89.9161 181.007 88.8429 172.888 88.9962Z',
        },
        {
          d: 'M220.374 88.9963C219.301 94.2088 223.59 98.9614 228.186 103.714C228.186 103.714 228.952 110.92 228.799 110.92C217.923 115.519 197.55 117.205 197.55 114.906V92.829C203.983 89.7628 212.408 88.843 220.374 88.9963Z',
        },
      ],
      text: {
        name: 'Upper Back',
        x: '271.433',
        y: '148.11',
      },
      line: {paths: [{d: 'M213 100L276.5 135'}]},
    },
    {
      id: 'soleus',
      paths: [
        {
          d: 'M177.943 290.752C174.573 290.138 171.815 292.438 170.743 298.264C169.671 304.089 166.76 331.532 166.76 331.532C166.76 331.532 165.075 348.549 172.122 349.316C179.321 350.236 184.529 352.229 185.602 348.243C186.674 344.257 190.35 331.838 188.818 324.173C187.287 316.508 185.755 301.483 185.908 299.184C186.367 294.738 181.312 291.365 177.943 290.752Z',
        },
        {
          d: 'M215.318 290.752C218.688 290.138 221.292 292.438 222.364 298.264C223.436 304.089 226.194 331.532 226.194 331.532C226.194 331.532 227.879 348.549 220.832 349.316C213.786 350.236 208.578 352.229 207.506 348.243C206.433 344.257 202.757 331.838 204.442 324.173C205.974 316.508 207.353 301.483 207.353 299.184C207.046 294.738 211.948 291.365 215.318 290.752Z',
        },
      ],
      text: {
        name: 'Soleus',
        x: '80.1289',
        y: '371.11',
      },
      line: {paths: [{d: 'M176.5 321L113 356'}]},
    },
    {
      id: 'bicepsFemoris',
      paths: [
        {
          d: 'M174.113 235.407C174.113 255.031 173.194 276.187 169.978 290.138C167.986 293.971 167.986 297.957 168.139 301.943L168.752 305.316C169.671 297.344 170.59 291.978 174.726 289.065C174.726 289.065 177.79 288.145 179.781 288.912C181.772 289.679 186.215 293.358 186.674 295.811C187.134 298.111 185.908 307.156 188.206 306.849C190.657 306.389 189.738 303.17 191.423 284.006C193.414 262.849 194.64 222.836 192.648 222.836C186.521 228.355 180.241 232.801 174.113 235.407Z',
        },
        {
          d: 'M219.148 235.407C219.148 255.031 220.067 276.187 223.131 290.138C225.122 293.971 225.122 297.957 224.969 301.943L224.509 305.316C223.59 297.344 222.671 291.978 218.535 289.065C218.535 289.065 215.471 288.145 213.48 288.912C211.489 289.679 207.2 293.358 206.587 295.811C206.128 298.111 207.353 307.156 205.055 306.849C202.604 306.389 203.523 303.17 201.838 284.006C200 262.849 198.622 222.836 200.613 222.836C206.893 228.355 213.021 232.801 219.148 235.407Z',
        },
      ],
      text: {
        name: 'Biceps Femoris',
        x: '34.0027',
        y: '304.11',
      },
      line: {paths: [{d: 'M180.5 255L117 290'}]},
    },
    {
      id: 'trapezius',
      paths: [
        {
          d: 'M200.266 48.8289H196.767H193.767C193.434 54.333 192.067 65.9418 189.268 68.3436C185.768 71.3459 185.768 76.3497 179.269 79.8524C174.113 82.631 164.927 84.1631 160.873 84.8392L160.771 84.8562C160.771 85.5233 161.371 86.7576 163.771 86.3573C166.771 85.8569 194.267 86.8577 196.767 90.8607C199.267 86.8577 226.763 85.8569 229.763 86.3573C232.162 86.7576 232.762 85.5233 232.762 84.8562C228.763 84.189 219.964 82.6545 214.765 79.8524C208.265 76.3497 208.265 71.3459 204.766 68.3436C201.966 65.9418 200.6 54.333 200.266 48.8289Z',
        },
      ],
      text: {
        name: 'Trapezius',
        x: '77.2566',
        y: '41.11',
      },
      line: {paths: [{d: 'M192.5 82L129 47'}]},
    },
  ];

  const handleOnPress = (muscle: keyof IMuscles) =>
    setMuscles(oldState => ({...oldState, [muscle]: !oldState[muscle]}));

  return (
    <Svg
      width={389}
      height={398}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill="#D6D9E0">
        <Path d="M143.017 146.334c3.983 12.265 8.425 12.725 13.327 6.286.459.46.613 18.55-3.064 26.676-3.676 8.278-7.965 24.529-7.965 31.275 0 8.125-11.335.306-10.723-1.533 0 0 2.911-12.878 2.451-17.324-1.225-12.572.766-46.3 5.974-45.38Z" />
        <Path d="M146.847 226.975s-.307-14.258-1.379-13.031c-3.37 3.832-10.263-1.074-11.642-3.067l-1.991 2.147-4.136 5.059c-.459 2.453-1.072 4.599-2.144 6.286.459 0-.919 5.059-.46 5.212 1.072.613 3.217-1.84 3.37-3.526.153-1.686.919-4.753 1.991-4.753.613 0 1.073 0 1.379.154-.306 1.993-.459 4.292-.613 6.592.613.153-1.685 11.192-.153 14.258 1.532 3.066 14.399-1.993 15.318-3.986 1.073-1.993-.153-11.039.46-11.345ZM173.193 351.462c3.217 15.638 4.749 30.509 3.983 44.613 2.145 1.533 4.595 1.073 7.2 0-2.911-13.951-2.605-28.975 0-44.613-3.983.92-7.813.92-11.183 0ZM163.849 214.25c-1.379 0-6.28 57.951 5.361 74.815 2.604-19.317 4.136-37.407 3.217-51.512-2.144-.307-7.199-23.303-8.578-23.303Z" />
        <Path d="m172.581 388.103-7.199 7.359c2.451 1.533 6.28 1.687 10.569 1.38l.613-8.125c-1.072-1.687-2.451-1.687-3.983-.614ZM249.784 146.334c-3.829 12.265-8.272 12.725-13.173 6.286-.46.46-.613 18.55 3.063 26.676 3.677 8.278 7.813 24.529 7.966 31.275 0 8.125 11.182.306 10.569-1.533 0 0-2.91-12.878-2.451-17.324 1.073-12.572-.919-46.3-5.974-45.38Z" />
        <Path d="M246.107 226.975s.306-14.258 1.225-13.031c3.37 3.832 10.11-1.074 11.489-3.067l1.838 2.147 3.983 5.059c.459 2.453 1.072 4.599 2.144 6.286-.459 0 .919 5.059.46 5.212-1.072.613-3.064-1.84-3.37-3.526-.306-1.686-.919-4.753-1.838-4.753-.613 0-1.073 0-1.379.154.306 1.993.46 4.292.613 6.592-.613.153 1.685 11.192.153 14.258-1.532 3.066-14.246-1.993-15.165-3.986-.919-1.993.307-11.039-.153-11.345ZM220.067 351.462c-3.217 15.638-4.749 30.509-3.983 44.613-2.144 1.533-4.595 1.073-7.199 0 2.757-13.951 2.451-28.975 0-44.613 4.136.92 7.812.92 11.182 0ZM229.258 214.25c1.226 0 6.127 57.951-5.208 74.815-2.604-19.317-4.136-37.407-3.063-51.512 1.991-.307 6.893-23.303 8.271-23.303Z" />
        <Path d="m220.527 388.103 7.199 7.359c-2.451 1.533-6.127 1.687-10.416 1.38l-.613-8.125c1.073-1.687 2.451-1.687 3.83-.614ZM213.323 38.404c0-9.045-7.353-16.404-16.391-16.404-9.037 0-16.39 7.359-16.39 16.404 0 4.446.153 7.359.613 9.045 1.072 6.9 1.991 13.645 4.136 16.711l3.216.92c.766-4.753-.153-10.118-2.297-15.944 2.451-.767 5.974-1.993 10.722-1.993 4.749 0 8.119 1.226 10.723 1.993-1.991 5.825-3.064 11.191-2.298 15.944l3.217-.92c1.991-3.22 3.064-9.812 4.136-16.71.306-1.687.613-4.6.613-9.046Z" />
      </G>
      <G id="BodyPartsBack">
        {bodyParts.map(part => (
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
                <Stop offset="0%" stopColor={'#01e0d6'} />
                <Stop offset="100%" stopColor={'#3d38bc'} />
              </LinearGradient>
            </Defs>
          </G>
        ))}
        {bodyParts.map(part => (
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
  );
};

export default BodyBack;
