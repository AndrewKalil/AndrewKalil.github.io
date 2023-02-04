import React from "react";
import PageTemplate from "../../components/templates/page";
import BlogsScrollView from "../../components/views/blogs";
import HeroScrollView from "../../components/views/hero";
import ProfileScrollView from "../../components/views/profile";
import ProjectsScrollView from "../../components/views/projects";

const Home = () => {
  return (
    <PageTemplate>
      <HeroScrollView />
      <ProjectsScrollView />
      <BlogsScrollView />
      <ProfileScrollView />
    </PageTemplate>
  );
};

export default Home;
