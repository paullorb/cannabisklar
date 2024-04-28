import React from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div> {/* Content from page.tsx */}
      <div style={{ display: 'flex'}}>
        <div style={{ flex: 1 }}>{users}</div> {/* Content from %40users/page.tsx */}
        <div style={{ flex: 1 }}>{revenue}</div> {/* Content from %40revenue/page.tsx */}
        <div style={{ flex: 1 }}>{notifications}</div> {/* Content from %40notifications/page.tsx */}
      </div>
    </>
  );
}