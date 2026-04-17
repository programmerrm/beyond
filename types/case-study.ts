import { StaticImageData } from "next/image";

export type Tag = {
  id: number;
  name: string;
};

export type Info = {
  company: {
    title: string;
    name: string;
  };
  category: {
    title: string;
    name: string;
  };
  timelines: {
    title: string;
    months: string;
  };
  related_tags: {
    title: string;
    tags: Tag[];
  };
};

export type ContentSection = {
  id: number;
  title: string;
  sub_title?: string;
  key_title?: string;
  description?: string;
  list?: string;
  image?: StaticImageData;
};

export type ResultSection = {
  id: number;
  title: string;
  sub_title: string;
  list: string;
};

export type ConclusionSection = {
  id: number;
  title: string;
  description: string;
};

export type CaseStudyType = {
  id: number;
  title: string;
  slug: string;
  image: StaticImageData;
  description: string;
  info: Info;
  overview: ContentSection[];
  challenge: ContentSection[];
  solution: ContentSection[];
  system_capability: ContentSection[];
  integration_readiness: ContentSection[];
  operational_impact: ContentSection[];
  results: ResultSection[];
  conclusion: ConclusionSection[];
};
