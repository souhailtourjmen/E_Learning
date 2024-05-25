import React, { ReactElement, Suspense, useMemo } from "react";
import { SafeAreaView } from "react-native";
import { STYLES } from "../../styles";
import { LayoutAnimated } from "../../layouts";
import { UpdateProfile } from "../../modules";
import useUpdateProfileScreenViewModels from "./viewModel";
import { Spinner } from "@ui-kitten/components";
import { Loader, View } from "../../components";

type propsUpdateProfileScreen = {};
const UpdateProfileScreen = (): ReactElement => {
  const { defaultValues } = useUpdateProfileScreenViewModels();
  const _renderValues = useMemo(() => {
    if (defaultValues?.email) {
      return <UpdateProfile defaultValues={defaultValues} />;
    }
    return <Loader />;
  }, [defaultValues]);
  return (
    <SafeAreaView style={STYLES.safeAreaBgBackground}>
      <Suspense fallback={<Spinner style={{ flex: 1 }} />}>
        <LayoutAnimated>{_renderValues}</LayoutAnimated>
      </Suspense>
    </SafeAreaView>
  );
};
export default UpdateProfileScreen;
