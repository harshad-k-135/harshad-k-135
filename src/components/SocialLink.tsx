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
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
      aria-label={label}
    >
      <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;