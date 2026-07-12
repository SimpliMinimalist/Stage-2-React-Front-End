const API_BASE = import.meta.env.VITE_API_BASE_URL;

async function request(endpoint, { method = "POST", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message || "Something went wrong");
    error.status = res.status;
    error.errors = data.errors || [];
    throw error;
  }

  return data;
}

export function registerUser({ username, email, password, address }) {
  return request("/register", {
    body: { username, email, password, address },
  });
}

export function loginUser({ email, password }) {
  return request("/login", {
    body: { email, password },
  });
}
