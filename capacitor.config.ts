import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'OklaBackend',
  webDir: 'dist',
  plugins: {
  SplashScreen: {
  launchShowDuration: 3000,
  launchAutoHide: true, //this
  launchFadeOutDuration: 3000,
  backgroundColor: "#ffffffff",
  androidSplashResourceName: "splash", //this
  androidScaleType: "CENTER_CROP", //this
  showSpinner: true,
  androidSpinnerStyle: "large",
  iosSpinnerStyle: "small",
  spinnerColor: "#999999",
  splashFullScreen: true,
  splashImmersive: true,
  layoutName: "launch_screen",
  useDialog: true
    },
  },
};

export default config;
