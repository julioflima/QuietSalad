import {StyleSheet} from 'react-native';

const borderWidth = 4;

export const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: 'red',
    borderWidth,
    left: -borderWidth / 2,
  },
  inactiveMark: {
    borderColor: 'grey',
    borderWidth,
    left: -borderWidth / 2,
  },
});

export const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 16,
    paddingBottom: 32,
  },
  sliderContainer: {
    paddingVertical: 16,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const customStyles4 = StyleSheet.create({
  track: {
    backgroundColor: '#D6E8EE',
    borderRadius: 4,
    height: 10,
    shadowColor: 'rgba(1, 142, 191, 0.3)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
});
