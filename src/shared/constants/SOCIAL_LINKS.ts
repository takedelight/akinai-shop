import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiPinterestFill,
  RiRedditFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from '@remixicon/react';

export const SOCIAL_LINKS = [
  { title: 'Twitter', href: 'https://twitter.com/', icon: RiTwitterXFill },
  { title: 'Facebook', href: 'https://facebook.com/', icon: RiFacebookCircleFill },
  { title: 'Pinterest', href: 'https://pinterest.com/', icon: RiPinterestFill },
  { title: 'Reddit', href: 'https://reddit.com/', icon: RiRedditFill },
  { title: 'Youtube', href: 'https://youtube.com/', icon: RiYoutubeFill },
  { title: 'Instagram', href: 'https://instagram.com/', icon: RiInstagramLine },
] as const;
