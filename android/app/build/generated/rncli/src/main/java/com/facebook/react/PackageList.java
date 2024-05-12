
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
<<<<<<< HEAD
=======
>>>>>>> 3179387e (add feature chat module)
// @shopify/flash-list
import com.shopify.reactnative.flash_list.ReactNativeFlashListPackage;
// react-native-config
import com.lugg.RNCConfig.RNCConfigPackage;
<<<<<<< HEAD
<<<<<<< HEAD
// react-native-gesture-handler
import com.swmansion.gesturehandler.RNGestureHandlerPackage;
<<<<<<< HEAD
<<<<<<< HEAD
=======
// react-native-config
import com.lugg.RNCConfig.RNCConfigPackage;
>>>>>>> 9ce4bce8 (rename project)
=======
>>>>>>> 38206cac (- add ui kitten)
=======
=======
>>>>>>> a2d98ded (rename project)
<<<<<<< HEAD
>>>>>>> b980ea3d (rename project)
=======
=======
// react-native-gesture-handler
import com.swmansion.gesturehandler.RNGestureHandlerPackage;
>>>>>>> 1b7ac40d (- add ui kitten)
>>>>>>> 214ba539 (- add ui kitten)
// react-native-keychain
import com.oblador.keychain.KeychainPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-localize
import com.zoontek.rnlocalize.RNLocalizePackage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
=======
>>>>>>> 9ce4bce8 (rename project)
=======
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
>>>>>>> 38206cac (- add ui kitten)
=======
=======
>>>>>>> 214ba539 (- add ui kitten)
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
=======
>>>>>>> a2d98ded (rename project)
<<<<<<< HEAD
>>>>>>> b980ea3d (rename project)
=======
=======
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
>>>>>>> 1b7ac40d (- add ui kitten)
>>>>>>> 214ba539 (- add ui kitten)
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// react-native-svg
import com.horcrux.svg.SvgPackage;
=======
>>>>>>> 9ce4bce8 (rename project)
=======
// react-native-svg
import com.horcrux.svg.SvgPackage;
>>>>>>> 38206cac (- add ui kitten)
=======
=======
>>>>>>> 214ba539 (- add ui kitten)
// react-native-svg
import com.horcrux.svg.SvgPackage;
=======
>>>>>>> a2d98ded (rename project)
<<<<<<< HEAD
>>>>>>> b980ea3d (rename project)
=======
=======
// react-native-svg
import com.horcrux.svg.SvgPackage;
>>>>>>> 1b7ac40d (- add ui kitten)
>>>>>>> 214ba539 (- add ui kitten)
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
<<<<<<< HEAD
=======
>>>>>>> 3179387e (add feature chat module)
      new ReactNativeFlashListPackage(),
      new RNCConfigPackage(),
<<<<<<< HEAD
<<<<<<< HEAD
      new RNGestureHandlerPackage(),
      new KeychainPackage(),
      new LinearGradientPackage(),
      new RNLocalizePackage(),
      new ReanimatedPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new SvgPackage(),
=======
<<<<<<< HEAD
<<<<<<< HEAD
      new RNCConfigPackage(),
      new RNGestureHandlerPackage(),
      new KeychainPackage(),
      new LinearGradientPackage(),
      new RNLocalizePackage(),
      new ReanimatedPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
<<<<<<< HEAD
>>>>>>> 9ce4bce8 (rename project)
=======
      new SvgPackage(),
>>>>>>> 38206cac (- add ui kitten)
=======
=======
=======
      new RNGestureHandlerPackage(),
>>>>>>> 1b7ac40d (- add ui kitten)
>>>>>>> 214ba539 (- add ui kitten)
      new KeychainPackage(),
      new LinearGradientPackage(),
      new RNLocalizePackage(),
      new ReanimatedPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
<<<<<<< HEAD
>>>>>>> a2d98ded (rename project)
<<<<<<< HEAD
>>>>>>> b980ea3d (rename project)
=======
=======
      new SvgPackage(),
>>>>>>> 1b7ac40d (- add ui kitten)
>>>>>>> 214ba539 (- add ui kitten)
      new VectorIconsPackage(),
      new ReactVideoPackage()
    ));
  }
}
