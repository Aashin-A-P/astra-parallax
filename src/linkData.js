import { FaInstagram, FaYoutube, FaPinterestP, FaBloggerB } from 'react-icons/fa';

// This is the only file you need to edit when adding or changing links.
// Set active: true and replace the # URL when an affiliate link is ready.
export const platforms = [
  {
    slug: 'instagram',
    name: 'Instagram',
    eyebrow: 'Cozy little stories',
    description: 'Tiny moments, warm feelings, and weekly adventures from our little universe.',
    icon: FaInstagram,
    color: '#f3a9c2',
    glow: '243, 169, 194',
    image: '/images/platforms/instagram.jpg',
    accountUrl: 'https://www.instagram.com/astraparallax._.21/',
    accountLabel: 'Follow @astraparallax._.21',
    links: [
      { title: 'Our favourite finds', note: 'Recommendations are coming soon', url: '#', active: false },
      { title: 'Creator essentials', note: 'Tools behind our stories', url: '#', active: false },
      { title: 'Cute gifts & collectibles', note: 'A curated collection', url: '#', active: false }
    ]
  },
  {
    slug: 'pinterest',
    name: 'Pinterest',
    eyebrow: 'Ideas to keep',
    description: 'Cozy inspiration, original designs, thoughtful finds, and ideas for later.',
    icon: FaPinterestP,
    color: '#e79b9f',
    glow: '231, 155, 159',
    image: '/images/platforms/pinterest.jpg',
    accountUrl: 'https://in.pinterest.com/aashinap/',
    accountLabel: 'Explore Aashin A P on Pinterest',
    links: [
      { title: 'Dudu & Bubu collection', note: 'Stories, art, and cozy finds', url: '#', active: false },
      { title: 'Amazon kitchen finds', note: 'Useful things we discovered', url: '#', active: false },
      { title: 'Design inspiration', note: 'Creative resources and ideas', url: '#', active: false }
    ]
  },
  {
    slug: 'youtube',
    name: 'YouTube',
    eyebrow: 'Stories beyond the obvious',
    description: 'Curious stories, discoveries, and ideas worth looking at from another perspective.',
    icon: FaYoutube,
    color: '#ff8585',
    glow: '255, 133, 133',
    image: '/images/platforms/youtube.jpg',
    accountUrl: 'https://www.youtube.com/@astraparallax',
    accountLabel: 'Subscribe to Astra Parallax',
    links: [
      { title: 'Featured resources', note: 'Links from our latest videos', url: '#', active: false },
      { title: 'Recommended gear', note: 'Our creator setup', url: '#', active: false },
      { title: 'Books worth exploring', note: 'Astra’s reading list', url: '#', active: false }
    ]
  },
  {
    slug: 'blogspot',
    name: 'Blogspot',
    eyebrow: 'Read, learn, explore',
    description: 'Practical guides and thoughtful deep dives for curious minds and digital creators.',
    icon: FaBloggerB,
    color: '#f6c879',
    glow: '246, 200, 121',
    image: '/images/platforms/blogspot.jpg',
    accountUrl: 'https://apaashin.blogspot.com/',
    accountLabel: 'Read the latest articles',
    links: [
      { title: 'AI tools for students', note: 'Our complete resource list', url: '#', active: false },
      { title: 'Beginner coding toolkit', note: 'Helpful tools and courses', url: '#', active: false },
      { title: 'Design resources', note: 'Fonts, assets, and inspiration', url: '#', active: false }
    ]
  }
];

export const getPlatform = (slug) => platforms.find((platform) => platform.slug === slug);
