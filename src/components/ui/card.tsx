import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = '', ...props }: CardProps) {
  return <div className={`rounded-2xl border border-white/10 bg-[#0f0f0f]/80 ${className}`} {...props} />;
}

export function CardHeader({ className = '', ...props }: CardProps) {
  return <div className={`p-6 pb-3 ${className}`} {...props} />;
}

export function CardContent({ className = '', ...props }: CardProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

export function CardFooter({ className = '', ...props }: CardProps) {
  return <div className={`p-6 pt-4 ${className}`} {...props} />;
}
