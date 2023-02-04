import { Timestamp } from "firebase/firestore";

export type Profile = {
  knowledge: {
    education: Education[];
    work: WorkExperience[];
  };
  personalInfo: {
    contact: string;
    email: string;
    firstname: string;
    lastname: string;
    image: string;
    location: string;
    role: string;
    socials: Social[];
  };
  skills: {
    hardSkills: string[];
    softSkills: string[];
    languages: string[];
    interests: string[];
  };
};

export type Education = {
  name: string;
  description: string;
  start: Timestamp;
  end: Timestamp;
  field: string;
};

export type WorkExperience = {
  company: string;
  start: Timestamp;
  end: Timestamp;
  modality: string;
  role: string;
  technologies: string[];
};

export type Social = {
  link: string;
  name: string;
};
