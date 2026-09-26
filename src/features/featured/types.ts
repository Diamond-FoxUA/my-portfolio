interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Stack {
  id: number;
  value: string;
}

interface ExtraUrl {
  text: string;
  link: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  imgUrl: string;
  features: Feature[];
  stack: Stack[];
  liveUrl?: string;
  githubUrl?: string;
  extraUrl?: ExtraUrl;
}
