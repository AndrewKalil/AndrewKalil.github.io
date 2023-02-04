import React, { PropsWithChildren } from "react";
import { Blog } from "../../../core/types/blog";
import { Project } from "../../../core/types/project";
import { GlassFilter } from "../../views/hero/style";
import Button from "../button";
import {
  ButtonsContainer,
  CardBackground,
  CardContainer,
  CardTitle,
} from "./style";

type CardProps = (Project | Blog) & {
  dark?: boolean;
  source?: string;
};

const Card = ({
  children,
  id,
  title,
  description,
  source,
  image,
  dark,
  url,
}: PropsWithChildren<CardProps>) => {
  const openExternalSource = () => {
    if (source) {
      window.open(source, "_blank");
    }
  };

  const openExternalDemo = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <>
      <CardContainer>
        <CardBackground image={`${image}`} />
        <GlassFilter style={{ borderRadius: "12px" }} />
        <ButtonsContainer>
          {source && (
            <Button dark action={openExternalSource}>
              code
            </Button>
          )}
          {url && (
            <Button dark action={openExternalDemo}>
              Check it out
            </Button>
          )}
        </ButtonsContainer>
        {children}
      </CardContainer>
      <CardTitle dark={dark}>
        {title.length > 30 ? `${title.substring(0, 30)} ...` : title}
      </CardTitle>
    </>
  );
};

export default Card;
