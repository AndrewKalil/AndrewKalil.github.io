import React, { useContext } from "react";
import { AppContext } from "../../../core/context/app-provider";

import CustomCarousel from "../../molecules/carousel";
import ScrollView from "../../templates/scroll_view";

const BlogsScrollView = () => {
  const { blogs } = useContext(AppContext);

  return (
    <ScrollView id="blogs">
      <CustomCarousel
        data={blogs}
        description="Showcase of most relevant blogs"
        dark={false}
      />
    </ScrollView>
  );
};

export default BlogsScrollView;
