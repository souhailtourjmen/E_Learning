import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  useMemo,
>>>>>>> 7e2863bb (screen in progress)
  useState,
} from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Card, Text } from "../../../../components";
import { Avatar, Layout } from "@ui-kitten/components";
import { styles } from "./styles";
import { BORDERRADIUS } from "../../../../constant";
import useBigCardCourseViewController from "./viewController";
=======
  useState,
} from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Card, Text } from "../../../../components";
import { Avatar, Layout } from "@ui-kitten/components";
import { styles } from "./styles";
<<<<<<< HEAD
>>>>>>> d32799fd (screen in progress)
=======
import { BORDERRADIUS } from "../../../../constant";
>>>>>>> 5bdf0af8 (- ADD element in screen home)

type BigCardCourseProps = {
  item: any;
};

const BigCardCourse = ({ item }: BigCardCourseProps): ReactElement => {
  const { width, height } = useWindowDimensions();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7e2863bb (screen in progress)
  const { handleNavigateToDetatils } = useBigCardCourseViewController();
  const renderContent = useMemo(() => {
    if (item) {
      return (
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text
            category="h5"
            style={{
              alignSelf: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
            numberOfLines={1}
          >
            {item?.matiere}
          </Text>
          <View style={{ alignItems: "center" }}>
            <Text category="p1">{item?.niveau}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text category="h6">{item?.titre}</Text>
          </View>
        </View>
      );
    }
    return null;
  }, [item]);
  
  const _displayWithImage = useMemo(() => {
    if (item?.photo) {
      return (
        <ImageBackground
          source={{
            uri: item?.photo,
          }}
          borderRadius={BORDERRADIUS.radius_15}
          style={{ width: "100%", height: "100%" }}
        >
          {renderContent}
        </ImageBackground>
      );
    }
    return renderContent;
  }, [item?.photo, renderContent]);
<<<<<<< HEAD
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
  return (
    <Layout
      level="2"
      style={[{ width: width * 0.55, height: height * 0.17 }, styles.container]}
    >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <ImageBackground
        source={{
          uri: item.image,
        }}
        borderRadius={ BORDERRADIUS.radius_15}
        style={{width: "100%", height: "100%",}}
      >
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
          category="h6"
            style={{
              alignSelf: "center",
              marginTop: "30%",
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            
              elevation: 5,
            }}
            numberOfLines={1}
          >
            {item?.name}
          </Text>
        </View>
      </ImageBackground>
=======
      <TouchableOpacity onPress={() => handleNavigateToDetatils(item?.id,item?.titre)}>
        {_displayWithImage}
      </TouchableOpacity>
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
>>>>>>> 68f5f074 (- ADD element in screen home)
      <TouchableOpacity onPress={() => handleNavigateToDetatils(item?.id,item?.titre)}>
        {_displayWithImage}
      </TouchableOpacity>
=======
      <View
        style={{ padding: "5%", alignContent: "center", alignItems: "center" }}
=======
      <ImageBackground
        source={{
          uri: item.image,
        }}
        borderRadius={ BORDERRADIUS.radius_15}
        style={{width: "100%", height: "100%",}}
>>>>>>> 5bdf0af8 (- ADD element in screen home)
      >
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
          }}
        >
<<<<<<< HEAD
          {item?.name}
        </Text>
      </View>
>>>>>>> d32799fd (screen in progress)
<<<<<<< HEAD
>>>>>>> 7e2863bb (screen in progress)
=======
=======
          <Text
          category="h6"
            style={{
              alignSelf: "center",
              marginTop: "30%",
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            
              elevation: 5,
            }}
            numberOfLines={1}
          >
            {item?.name}
          </Text>
        </View>
      </ImageBackground>
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
    </Layout>
  );
};

export default BigCardCourse;
