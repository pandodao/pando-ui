import { http } from "./http";
import {
  AuthParams,
  AuthResponse,
  User,
  Comment,
  PaginationParams,
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
