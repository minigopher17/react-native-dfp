
import {
  NativeModules,
} from 'react-native';

module.exports = {
  get RNBanner() {
    return require('./RNDFPBanner').default;
  },
  get Interstitial() {
    return require('./RNDFPInterstitial').default;
  }
};
