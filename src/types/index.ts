export type TPostStatus = "published" | "draft" | "block" | "all";

export interface TPost {
  id: number;
  title: string;
  body: string;
  status: TPostStatus;
  topRate: boolean;
}
