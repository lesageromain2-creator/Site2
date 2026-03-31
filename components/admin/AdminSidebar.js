import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutDashboard, Users, Calendar, MessageSquare } from 'lucide-react';

const links = [
  { href: '/admin', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/admin/reservations', label: 'Réservations', icon: Calendar },
  { href: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { href: '/admin/users', label: 'Utilisateurs', icon: Users },
];

export default function AdminSidebar() {
  const router = useRouter();

  return (
    <aside className="w-56 shrink-0 border-r border-[#1F1F1F] bg-[#0A0A0A] p-4">
      <nav className="space-y-1">
        {links.map((item) => {
          const isActive = item.href === '/admin' ? router.pathname === '/admin' : router.pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-none px-3 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors ${
                isActive ? 'bg-[#C75B39] text-white' : 'text-[#A39E94] hover:bg-[#141414] hover:text-[#F5F0E8]'
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
