import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
<<<<<<< HEAD
  useMemo,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  useMemo,
>>>>>>> 7e2863bb (screen in progress)
>>>>>>> 2960beef (Add screen filter for course by niveau)
  useState,
} from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2960beef (Add screen filter for course by niveau)
  View,
  useWindowDimensions,
} from "react-native";
import { Card, Text } from "..";
import { Avatar, Layout } from "@ui-kitten/components";
import { styles } from "./styles";
import { BORDERRADIUS } from "../../constant";
import useBigCardCourseViewController from "./viewController";
<<<<<<< HEAD
=======
=======
  useState,
} from "react";
import {
  ImageBackground,
  StyleSheet,
=======
>>>>>>> 343adf8e (- add dynamic screen details)
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
<<<<<<< HEAD
>>>>>>> 5bdf0af8 (- ADD element in screen home)
=======
import useBigCardCourseViewController from "./viewController";
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 2960beef (Add screen filter for course by niveau)

type BigCardCourseProps = {
  item: any;
  widthHard?: any;
};

const BigCardCourse = ({
  item,
  widthHard,
}: BigCardCourseProps): ReactElement => {
  const { width, height } = useWindowDimensions();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e2863bb (screen in progress)
=======
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)
>>>>>>> 2960beef (Add screen filter for course by niveau)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2960beef (Add screen filter for course by niveau)
=======
>>>>>>> f69bf6ed (- add design progression)
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
<<<<<<< HEAD
<<<<<<< HEAD
          {/* {renderContent} */}
=======
          {renderContent}
>>>>>>> 2960beef (Add screen filter for course by niveau)
=======
          {/* {renderContent} */}
>>>>>>> f69bf6ed (- add design progression)
        </ImageBackground>
      );
    }
    return renderContent;
  }, [item?.photo, renderContent]);
<<<<<<< HEAD
  return (
    <TouchableOpacity
      onPress={() => handleNavigateToDetatils(item?.id, item?.titre)}
    >
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
=======
=======
>>>>>>> d32799fd (screen in progress)
=======
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)
  return (
<<<<<<< HEAD
>>>>>>> 2960beef (Add screen filter for course by niveau)
=======
    <TouchableOpacity
      onPress={() => handleNavigateToDetatils(item?.id, item?.titre)}
    >
>>>>>>> f69bf6ed (- add design progression)
    <Layout
      level="2"
      style={[
        { width: widthHard ? widthHard : width * 0.55, height: height * 0.17 },
        styles.container,
      ]}
    >
<<<<<<< HEAD
<<<<<<< HEAD
        {_displayWithImage}
    </Layout>
      </TouchableOpacity>
  );
};

export default memo(BigCardCourse);
=======
=======
>>>>>>> f69bf6ed (- add design progression)
<<<<<<< HEAD:src/modules/home/components/bigCardCourse/index.tsx
<<<<<<< HEAD
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
=======
>>>>>>> 11b8c648 (- add dynamic screen details)
      <TouchableOpacity onPress={() => handleNavigateToDetatils(item?.id,item?.titre)}>
=======
      <TouchableOpacity
        onPress={() => handleNavigateToDetatils(item?.id, item?.titre)}
      >
>>>>>>> 525059d7 (Add screen filter for course by niveau):src/components/bigCardCourse/index.tsx
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
<<<<<<< HEAD
>>>>>>> 68f5f074 (- ADD element in screen home)
=======
=======
      <TouchableOpacity onPress={() => handleNavigateToDetatils(item?.id,item?.titre)}>
        {_displayWithImage}
      </TouchableOpacity>
>>>>>>> 343adf8e (- add dynamic screen details)
<<<<<<< HEAD
>>>>>>> 11b8c648 (- add dynamic screen details)
=======
=======
        {_displayWithImage}
>>>>>>> 1d913c27 (- add design progression)
>>>>>>> f69bf6ed (- add design progression)
    </Layout>
      </TouchableOpacity>
  );
};

<<<<<<< HEAD
export default BigCardCourse;
>>>>>>> 2960beef (Add screen filter for course by niveau)
=======
export default memo(BigCardCourse);
>>>>>>> f69bf6ed (- add design progression)
