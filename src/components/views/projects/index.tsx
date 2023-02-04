import React, { useContext } from "react";
import { ColorPallete } from "../../../constants/styles";
import { AppContext } from "../../../core/context/app-provider";
import CustomCarousel from "../../molecules/carousel";
import ScrollView from "../../templates/scroll_view";

const ProjectsScrollView = () => {
  const { projects } = useContext(AppContext);

  return (
    <ScrollView id="projects" bgColor={ColorPallete.secundary_dark}>
      <CustomCarousel
        data={projects}
        description="Showcase of most relevant projects"
        dark={true}
      />
    </ScrollView>
  );
};

export default ProjectsScrollView;
