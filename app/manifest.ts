import { MetadataRoute } from 'next';
import { PERSONAL_INFO } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PERSONAL_INFO.name} Portfolio`,
    short_name: 'Ravi Portfolio',
    description: `${PERSONAL_INFO.title} with ${PERSONAL_INFO.experience} of experience`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}