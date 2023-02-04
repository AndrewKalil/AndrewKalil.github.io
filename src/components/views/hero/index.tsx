import React from "react";
import ScrollView from "../../templates/scroll_view";
import { Content, GlassFilter, HeroContainer } from "./style";

const HeroScrollView = () => {
  return (
    <ScrollView id="hero">
      <HeroContainer image={require("../../../assets/vikings.jpg")}>
        <GlassFilter />
        <Content>
          "The road might be long. The journey might be challenging and full of
          dangers. Take a rest, if you must, but never turn back. Your very next
          step can be your moment of triumph. Your very next battle can be your
          greatest victory. Keep walking, warrior."
        </Content>
      </HeroContainer>
    </ScrollView>
  );
};

export default HeroScrollView;
