import { http } from "./http";
import { httpChat } from "./chat";
import {
  AuthParams,
  AuthResponse,
  User,
  Comment,
  PaginationParams,
  AirdropParams,
} from "../types";

export function getMe(): Promise<User> {
  return http.get("/me");
}

export function auth(data: AuthParams): Promise<AuthResponse> {
  return http.post("/auth/login", { data });
}

export function getComments(
  params: PaginationParams & { order_by?: string }
): Promise<{ total: number; comments: Comment[] }> {
  return http.get("/comments", { params });
}

export function getComment(id: string): Promise<Comment> {
  return http.get(`/comments/${id}`);
}

export function postComment(content: string): Promise<Comment> {
  return http.post("/comments", { data: { content } });
}

export function putFavor(comment_id: number) {
  return http.put(`/comments/${comment_id}/fav`);
}

export function putUnfavor(comment_id: number) {
  return http.put(`/comments/${comment_id}/unfav`);
}

export function postSubComment(comment_id: number, content: string) {
  return http.post(`/comments/${comment_id}/replies`, {
    data: { comment_id, content },
  });
}

export function getSubComments(
  params: PaginationParams & { comment_id: string }
): Promise<{ total: number; replies: Comment[] }> {
  return http.get(`/comments/${params.comment_id}/replies`, {
    params,
  });
}

export function getAssets() {
  return http.get("/assets");
}

export function getAsset(id: string) {
  return http.get(`/assets/${id}`);
}

export function createAirdrop(data: AirdropParams) {
  return http.post("/airdrops", { data });
}

export function sendMessage(site_id: string, slug: string, data) {
  return httpChat.post(`/messages?site_id=${site_id}&slug=${slug}`, { data });
}

export function getLatestMessages(site_id: string, slug: string) {
  return httpChat.get(`/messages?site_id=${site_id}&slug=${slug}&filter=latest`);
}
