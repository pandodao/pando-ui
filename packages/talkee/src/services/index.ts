import { http } from "./http";

export function getMe() {
  return http.get("/me");
}

export function auth(data) {
  return http.post("/auth", { data });
}

export function getComment(id: string) {
  return http.get(`/comment/${id}`);
}

export function getComments(order, page) {
  return http.get("/comments", { params: { order_key: order, page } });
}

export function postComment(slug, content) {
  return http.post("/comments", { data: { slug, content } });
}

export function putFavor(type: string, id: number) {
  return http.post("/favor/", { data: { type, id } });
}

export function putUnfavor(id) {
  return http.delete(`/favor/${id}`);
}

export function postSubComment(commentId, content) {
  return http.post("/replies", { data: { comment_id: commentId, content } });
}

export function getSubComments(comment_id, order, page, ipp) {
  return http.get("/replies", {
    params: { comment_id, order_key: order, page, ipp },
  });
}
