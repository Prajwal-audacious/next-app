"use client";
import Login from "@/app/login/page";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const isAuthenticated = () => {
  let token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("authToken");
  }

  let user = token ? { isLoggedIn: true } : { isLoggedIn: false };
  return user.isLoggedIn;
};

const ProtectedRouting = ({ children }: { children: React.ReactNode }) => {
  const user = isAuthenticated();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to the login page if not authenticated.
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRouting;
