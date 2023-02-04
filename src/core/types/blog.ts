import { BaseType } from ".";

export type Blog = {
  image?: string;
  source: string;
  url?: string;
} & BaseType;
