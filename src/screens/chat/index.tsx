import React, { ReactElement } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { STYLES } from "../../styles";
import { LayoutAnimated } from "../../layouts";
import ChatRoom from "../../modules/ChatRoom";

type propsChatScreen = {};
const ChatScreen = (): ReactElement => {
  return (
    <>
      <SafeAreaView style={STYLES.safeAreaBgBackground}>
        <LayoutAnimated>
          <ChatRoom />
        </LayoutAnimated>
      </SafeAreaView>
    </>
  );
};
export default ChatScreen;
