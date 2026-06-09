export type AuthUser = {
  id: string;
  email: string;
  role: "user" | "admin";
};

export const setAuth = (user: AuthUser, token: string) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const getUser = (): AuthUser | null => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("user") || "null");
};

export const getRole = () => {
  return getUser()?.role;
};

export const getToken = () => {
  return localStorage.getItem("token");
};