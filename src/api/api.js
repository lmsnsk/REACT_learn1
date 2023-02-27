import axios from "axios";

let instatce = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "2ef1f9d6-1da2-4f06-a4cc-f223463b58b9" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instatce.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async removeFollow(id) {
    const response = await instatce.delete(`follow/${id}`);
    return response.data;
  },
  async getFollow(id) {
    const response = await instatce.post(`follow/${id}`, {});
    return response.data;
  },
};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instatce.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    const response = await instatce.get(`profile/status/${userId}`);
    return response.data;
  },
  async updateStatus(status) {
    const response = await instatce.put("profile/status", { status: status });
    return response.data;
  },
};

export const authAPI = {
  async authing() {
    const response = await instatce.get(`auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe = false) {
    const response = await instatce.post(`auth/login`, { email, password, rememberMe });
    return response.data;
  },
  async logout() {
    const response = await instatce.delete(`auth/login`);
    return response.data;
  },
};
