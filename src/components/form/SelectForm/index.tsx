import React, { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { styles } from "./styles";

import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import CustomSelect from "../../CustomSelect";
import { Text, View } from "../..";
import { COLORS } from "../../../constant";

type propsSelectForm = {
  control?: Control<any> | undefined;
  items?: any[];
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, any>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  label?: ReactElement | undefined;
  styleComponent?: ViewStyle | undefined;
  style?: ViewStyle | undefined;
};

const SelectForm = ({
  control,
  name,
  rules = {},
  label,
  styleComponent,
  style,
  items,
}: propsSelectForm): ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View
          style={[{ flexDirection: "column", alignItems: "baseline" }, style]}
        >
          {label ? (
            <View>{label}</View>
          ) : (
            <View>
              <Text>{""}</Text>
            </View>
          )}

          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8", borderRadius: 30 },
              styleComponent,
            ]}
          >
            {items && (
              <CustomSelect
                styleSelect={[
                  // styles.styleSelect,
                  {
                    shadowColor: COLORS.background,
                    // borderColor: COLORS.lightGray,
                    borderRadius: 30,
                  },
                ]}
                items={items}
                setSelectedValue={(item: string) => onChange(item)}
                selectedValue={value}
                colorIcon={COLORS.lightGray}
                textSelect={{ color: "#011A33A3" }}
                hidenIndexInTitle
              />
            )}
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </View>
      )}
    />
  );
};
export default SelectForm;
