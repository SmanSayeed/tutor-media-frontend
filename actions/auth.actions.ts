"use server";

import { envConfig } from "@/config/env.config";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const response = await fetch(`${envConfig.apiUrl}/auth/login`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    // TODO: Handle error properly with state
    console.error("Login failed:", data);
    return;
  }

  // TODO: Store token in cookies
  console.log("Login success:", data);
  redirect("/");
}

export async function register(formData: FormData) {
  const response = await fetch(`${envConfig.apiUrl}/auth/register`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    // TODO: Handle error properly with state
    console.error("Register failed:", data);
    return;
  }

  // TODO: Store token in cookies
  console.log("Register success:", data);
  redirect("/");
}

