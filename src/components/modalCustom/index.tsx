import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Card, Text, Modal } from "@ui-kitten/components";

import { RenderIcon } from "..";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constant";

export type PropsModalCustom = {
  children: ReactNode;
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  style?: ViewStyle;
  showCancelButton?: boolean;
};
const ModalCustom = ({
  children,
  visible,
  setVisible,
  style,
  showCancelButton = true,
}: PropsModalCustom): React.ReactElement => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}
    >
      <Card
        disabled={true}
        style={[
          style ? style : { width: 400, height: 400 },
          { position: "relative" },
        ]}
      >
        {showCancelButton && (
          <View style={{ position: "absolute", right: 20, top: 10 }}>
            <RenderIcon
              name={"times"}
              color={COLORS.error}
              onPress={() => setVisible(false)}
            />
          </View>
        )}

        {children}
      </Card>
    </Modal>
  );
};
export default ModalCustom;
