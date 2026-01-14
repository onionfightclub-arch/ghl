
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  earnings: string;
}

export interface GeneratedCopy {
  headline: string;
  body: string;
  cta: string;
  strategy: string;
}
