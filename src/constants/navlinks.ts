export type NavLinkType = {
  id: string;
  route: string;
  name: string;
  icon?: JSX.Element;
};

export const NAVLINKS: NavLinkType[] = [
  { id: "hero", name: "home", route: "/home" },
  { id: "projects", name: "projects", route: "/projects" },
  { id: "blogs", name: "blogs", route: "/blogs" },
  { id: "profile", name: "profile", route: "/profile" },
];
