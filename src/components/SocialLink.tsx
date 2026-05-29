import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-orange-500/25 transition-all duration-300"
      aria-label={label}
    >
      <Icon size={18} className="text-orange-300" />
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;