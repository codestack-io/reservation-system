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

  const user = localStorage.getItem("user");

  if (!user || user === "undefined") return null;

  try {
    return JSON.parse(user);
  } catch (err) {
    console.error("Invalid user in localStorage:", user);
    return null;
  }
};

export const getRole = () => {
  return getUser()?.role;
};

export const getToken = () => {
  return localStorage.getItem("token");
};