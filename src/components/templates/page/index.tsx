import React, { PropsWithChildren } from "react";
import { PageContainer } from "./style";

const PageTemplate = ({ children }: PropsWithChildren) => {
  return <PageContainer>{children}</PageContainer>;
};

export default PageTemplate;
