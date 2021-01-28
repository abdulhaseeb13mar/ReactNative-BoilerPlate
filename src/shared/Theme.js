import {Dimensions, Platform, PixelRatio} from 'react-native';

export const colors = {
  primary: '#0a9aea',
  secondary: '#eff7fd',
  lightBackground: '#eeeff0',
  lightGrey: 'rgb(245,245,245)',
  darkGray: '#666565',
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const metrics = {
  width: width,
  height: height,
  defaultMargin: width * 0.05,
  smallMargin: width * 0.03,
  largeMargin: width * 0.08,
};

export const scaleFont = (size) => size * PixelRatio.getFontScale();

export const fonts = {
  primary: Platform.select({
    android: '',
    ios: '',
  }),
  primaryBold: Platform.select({
    android: '',
    ios: '',
  }),
  secondary: Platform.select({
    android: '',
    ios: '',
  }),
  secondaryBold: Platform.select({
    android: '',
    ios: '',
  }),
};

export const text = {
  largeheading: {
    fontSize: 25,
    fontWeight: '700',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  subheading: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
};
