export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[220px_1fr]">
      <aside className="border-r p-6">
        <nav className="space-y-2">
          <a href="/dashboard" className="block">Dashboard</a>
          <a href="/client-list" className="block">Clients</a>
          <a href="/profile" className="block">Profile</a>
          <a href="/settings" className="block">Settings</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
