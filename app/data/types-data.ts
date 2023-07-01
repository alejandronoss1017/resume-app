export type Personal = {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
};

export type AboutMe = {
  title: string;
  body: string[];
};

export type Skill = {
  icon: String;
  text: String;
};

export type Skills = {
  soft: Skill[];
  hard: Skill[];
};

export type Professional = {
  title: string;
  experiences: Experience[];
};

export type Experience = {
  role: string;
  description: string[];
  current: boolean;
};

export type Data = {
  personal: Personal;
  aboutMe: AboutMe;
  skills: Skills;
  professional: Professional;
};

export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};
