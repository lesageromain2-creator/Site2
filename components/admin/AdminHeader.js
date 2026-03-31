import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogOut } from 'lucide-react';
import { authClient } from '../../lib/auth-client';
import { siteConfig } from '../../config/site.config';

export default function AdminHeader({ user }) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#1F1F1F] bg-[#0A0A0A]">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/admin" className="font-display text-xl font-bold tracking-tight text-[#F5F0E8]">
          {siteConfig.name} – Admin
        </Link>
        <div className="flex items-center gap-4">
          {user?.name && (
            <span className="hidden text-sm text-[#A39E94] sm:inline">{user.name}</span>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-none px-3 py-2 text-sm font-medium uppercase tracking-wider text-[#A39E94] hover:text-[#C75B39] transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </button>
        </div>
      </div>
    </header>
  );
}
