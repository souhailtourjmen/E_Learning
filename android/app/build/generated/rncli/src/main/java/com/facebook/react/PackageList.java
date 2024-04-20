
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

<<<<<<< HEAD
// @shopify/flash-list
import com.shopify.reactnative.flash_list.ReactNativeFlashListPackage;
// react-native-config
import com.lugg.RNCConfig.RNCConfigPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.RNGestureHandlerPackage;
=======
// react-native-config
import com.lugg.RNCConfig.RNCConfigPackage;
>>>>>>> 9ce4bce8 (rename project)
// react-native-keychain
import com.oblador.keychain.KeychainPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-localize
import com.zoontek.rnlocalize.RNLocalizePackage;
<<<<<<< HEAD
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
=======
>>>>>>> 9ce4bce8 (rename project)
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
<<<<<<< HEAD
// react-native-svg
import com.horcrux.svg.SvgPackage;
=======
>>>>>>> 9ce4bce8 (rename project)
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// react-native-video
import com.brentvatne.react.ReactVideoPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
<<<<<<< HEAD
      new ReactNativeFlashListPackage(),
      new RNCConfigPackage(),
      new RNGestureHandlerPackage(),
      new KeychainPackage(),
      new LinearGradientPackage(),
      new RNLocalizePackage(),
      new ReanimatedPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new SvgPackage(),
=======
      new RNCConfigPackage(),
      new KeychainPackage(),
      new LinearGradientPackage(),
      new RNLocalizePackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
>>>>>>> 9ce4bce8 (rename project)
      new VectorIconsPackage(),
      new ReactVideoPackage()
    ));
  }
}
