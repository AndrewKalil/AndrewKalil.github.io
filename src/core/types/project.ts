import { BaseType } from ".";

export type Project = {
  image?: string;
  url?: string;
  source: string;
} & BaseType;
