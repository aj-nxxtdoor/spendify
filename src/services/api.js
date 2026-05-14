// src/services/api.js
const API_URL = "http://localhost:3000/transactions";

export const getTransactions = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const addTransaction = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to add");
  return res.json();
};

export const getTransactionById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Transaction not found");
  return res.json();
};

export const updateTransaction = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update");
  return res.json();
};

export const deleteTransaction = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete");
};