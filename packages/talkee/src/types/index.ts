export interface Comment {
  id: number;
  user_id: string;
  site_id: number;
  slug: string;
  favor_count: number;
  reply_count: number;
  arweave_tx_hash: string;
  content: string;
  created_at: string;
  updated_at: string;
  creator: User;
}

export interface Rely {
  id: number;
  user_id: string;
  comment_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  creator: User;
}

export interface Site {
  id: number;
  user_id: number;
  origin: string;
  name: string;
  use_arweave: boolean;
  reward_strategy: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  mixin_user_id: string;
  mixin_identity_number: number;
  full_name: string;
  avatar_url: string;
  created_at: string;
}

export enum AuthMethod {
  MixinOAuth = "mixin_oauth",
  MixinToken = "mixin_token",
  mvm = "mvm",
}

export enum SortMethod {
  CreateAt = "created_at",
  CreateAsc = "created_at_asc",
  FavorCount = "favor_count",
}

export interface BaseParams {
  "X-TALKEE-SITE-ID": string;
  "X-TALKEE-SITE-SLUG": string;
}

export interface PaginationParams {
  limit?: number;
  offset?: number;
}

export interface AuthParams {
  method: AuthMethod;
  mixin_oauth_code?: string;
  mixin_token?: string;
  lang?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}
