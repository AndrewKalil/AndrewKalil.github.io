import { PropsWithChildren, useEffect, useState } from "react";
import { createContext } from "react";
import { getBlogs } from "../services/blogs";
import { getProfile } from "../services/profile";
import { getProjects } from "../services/projects";
import { Blog } from "../types/blog";
import { Profile } from "../types/profile";
import { Project } from "../types/project";

export const AppContext = createContext({
  scrollTo: (id: string) => {},
  view: "",
  blogs: [] as Blog[],
  projects: [] as Project[],
  profile: {} as Profile | undefined,
  isNavbarOpen: false,
  setIsNavbarOpen: (value: boolean) => {},
});

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState("hero");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    getBlogs().then((res) => {
      setBlogs(res as Blog[]);
    });
    getProjects().then((res) => {
      setProjects(res as Project[]);
    });
    getProfile().then((res) => {
      setProfile(res as Profile);
    });
  }, []);

  const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setView(id);
    }
  };

  // useEffect(() => {
  //   console.log(view);
  // }, [view]);
  // 098de1a1

  const value = {
    scrollTo,
    view,
    blogs,
    projects,
    profile,
    isNavbarOpen,
    setIsNavbarOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
