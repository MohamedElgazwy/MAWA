import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

const tokenKeys = ["authToken", "token"];

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = tokenKeys.map((k) => localStorage.getItem(k)).find(Boolean);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (typeof window !== "undefined" && status === 401) {
      tokenKeys.forEach((k) => localStorage.removeItem(k));
      localStorage.removeItem("user");
      window.location.href = "/Auth/login";
    }

    return Promise.reject(error);
  }
);

const extractResponseData = (res) => {
  const data = res?.data;
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.result)) return data.result;
  return data;
};

const firstSuccess = async (requests) => {
  let lastError;
  for (const req of requests) {
    try {
      return await req();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
};

export const authApi = {
  async login(payload) {
    const res = await api.post("/Auth/Login", payload);
    return res.data;
  },
  async register(payload) {
    const res = await api.post("/Auth/Register", payload);
    return res.data;
  },
  async confirmEmail(payload) {
    const res = await api.post("/Auth/ConfirmEmail", payload);
    return res.data;
  },
  async resendConfirmEmail(payload) {
    const res = await api.post("/Auth/ResendConfirmEmail", payload);
    return res.data;
  },
  async refresh(payload) {
    const res = await api.post("/Auth/Refresh", payload);
    return res.data;
  },
  async revokeRefreshToken(payload) {
    const res = await api.post("/Auth/RevokeRefreshToken", payload);
    return res.data;
  },
  async forgetPassword(payload) {
    const res = await api.post("/Auth/ForgetPassword", payload);
    return res.data;
  },
  async resetPassword(payload) {
    const res = await api.post("/Auth/ResetPassword", payload);
    return res.data;
  },
};

export const propertyApi = {
  async list(params = {}) {
    const res = await firstSuccess([
      () => api.get("/Properties", { params }),
      () => api.get("/Property", { params }),
      () => api.get("/properties", { params }),
    ]);
    return extractResponseData(res) || [];
  },
  async getById(id) {
    const res = await firstSuccess([
      () => api.get(`/Properties/${id}`),
      () => api.get(`/Property/${id}`),
      () => api.get(`/properties/${id}`),
    ]);
    return extractResponseData(res);
  },
  async create(payload) {
    const res = await firstSuccess([
      () => api.post("/Properties", payload),
      () => api.post("/Property", payload),
      () => api.post("/properties", payload),
    ]);
    return res.data;
  },
};

export const accountApi = {
  async getMe() {
    const res = await api.get("/me");
    return res.data;
  },
  async updateInfo(payload) {
    const res = await api.put("/me/Info", payload);
    return res.data;
  },
  async changePassword(payload) {
    const res = await api.put("/me/change-password", payload);
    return res.data;
  },
};

export default api;
