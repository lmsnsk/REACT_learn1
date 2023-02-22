import axios from "axios";

let instatce = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "2ef1f9d6-1da2-4f06-a4cc-f223463b58b9" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instatce.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  removeFollow(id) {
    return instatce.delete(`follow/${id}`).then((response) => response.data);
  },
  getFollow(id) {
    return instatce.post(`follow/${id}`, {}).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instatce.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instatce.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instatce.put("profile/status", { status: status }).then((response) => response.data);
  },
};

export const authAPI = {
  authing() {
    return instatce.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instatce.post(`auth/login`, { email, password, rememberMe }).then((response) => response.data);
  },
  logout() {
    return instatce.delete(`auth/login`).then((response) => response.data);
  },
};
