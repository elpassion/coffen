import React from "react";

import { TabBar } from "./TabBar";

import { Container } from "styles/commonStyles";
import { Wrapper, View } from "./style";

export const TabbedWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <View>
        <Container>{children}</Container>
      </View>

      <TabBar />
    </Wrapper>
  );
};
