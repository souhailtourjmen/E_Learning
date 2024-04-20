import { StyleSheet, View, FlatList, ViewToken, SafeAreaView } from 'react-native';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  withSpring,
  withTiming
} from 'react-native-reanimated';

import useNavigationController from '../../navigation/viewController';


import data,{ OnboardingData } from './data';
import { ActionButton, CustomButton, RenderItem } from '../../components/onboarding';
import { STYLES } from '../../styles';
import { Pagination } from '../../components/pagination';

const OnboardingScreen = () => {


  const { handleNavigate } =
    useNavigationController();

  const flatListRef: any = useAnimatedRef<FlatList<OnboardingData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index !== null) {
        flatListIndex.value = viewableItems[0].index;
      }
    },
    [flatListIndex],
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });



  return (
    <SafeAreaView style={STYLES.safeAreaBgBackground}>
      <View style={styles.container}>
        <Animated.FlatList
          ref={flatListRef}
          onScroll={onScroll}
          data={data}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} x={x} />;
          }}
          keyExtractor={item => item.id.toString()}
          scrollEventThrottle={16}
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
        />
        <View style={styles.Pagination}>
          <Pagination data={data} x={x} />
        </View>

        <View style={styles.bottomContainer}>
          <ActionButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
            type='login'
            x={x}
          />

          <ActionButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
            type='register'
            x={x}
          />
          <CustomButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
            x={x}
          />

          {/* <Link
            text={useText(TEXT.ONBOARDING.invited)}
            color={COLORS.primary}
            style={{
              display: 'flex'
            }}
            onPress={() => handleNavigate({ screen: ROUTES.HomeBottom })}
            disabled={false}
          /> */}
        </View>
      </View>
    </SafeAreaView>

  );
};

export default memo(OnboardingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    // width: LAYOUT.window.width,
    // height: LAYOUT.window.height,
    marginBottom: 50
  },
  Pagination: {
    position: 'absolute',
    bottom:"15%",
    alignSelf: 'center',
  },

  bottomContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 180,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 1,
    right: 0,
  },
});
