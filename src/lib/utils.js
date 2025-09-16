import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}