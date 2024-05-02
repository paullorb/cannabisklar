import React from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div> {/* Content from page.tsx */}
      <div style={{ display: 'flex'}}>
        <div>{users}</div> {/* Content from %40users/page.tsx */}
        <div>{revenue}</div> {/* Content from %40revenue/page.tsx */}
        <div>{notifications}</div> {/* Content from %40notifications/page.tsx */}
      </div>
    </>
  ): (
    login
  );
}