export type Project = {
  id: number;
  project_id: string;
  project_name: string;
  banner_url: string | null;
  image_url: string[];
  video_url: string | null;
  description: string | null;
  tech_stack: string[];
  order: number;
  github_url: string | null;
  website_url: string | null;
  created_at: Date;
  updated_at: Date;
};
