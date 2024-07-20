import React from "react";
import moment from "moment";
import styles from "./styles";
import { Avatar, Card } from "@ui-kitten/components";
import { useColorScheme } from "../../../hooks";
import { COLORS } from "../../../constant";
import { Text, View } from "../../../components";

import { Image } from "react-native";
const ChatMessage = ({ message, myId }: any) => {
  moment.locale("fr");
  const isMyMessage = () => {
    return message?.nom === myId;
  };

  const theme = useColorScheme();
  return (
    <View style={styles.container} key={message?._id}>
      <Card
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? COLORS.primary : COLORS.background,
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
            minHeight: 50,
            padding: 0,
          },
        ]}
      >
        {!isMyMessage() && (
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            {message?.photo && <Avatar source={{ uri: message?.photo }} />}
            <Text> </Text>
            <Text
              style={styles.name}
            >{`${message?.nom} ${message?.prenom}`}</Text>
          </View>
        )}
        <Text
          style={[
            styles.message,
            isMyMessage() && { color: COLORS.background },
          ]}
        >
          {message?.contenu}
        </Text>
        <Text style={styles.time}>{moment(message?.createdAt).fromNow()}</Text>
      </Card>
    </View>
  );
};

export default ChatMessage;
