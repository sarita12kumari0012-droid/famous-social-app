// Social Media App Data

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  coverPhoto?: string;
  bio?: string;
  location?: string;
  joinDate?: string;
  followers: number;
  following: number;
  isOnline?: boolean;
  isVerified?: boolean;
}

export interface Reaction {
  type: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry';
  count: number;
  userReacted?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

export interface Post {
  id: string;
  user: User;
  content: string;
  images?: string[];
  video?: string;
  timestamp: string;
  reactions: Reaction[];
  comments: Comment[];
  shares: number;
  isLiked?: boolean;
  isSaved?: boolean;
  feeling?: string;
  location?: string;
  privacy: 'public' | 'friends' | 'private';
}

export interface Story {
  id: string;
  user: User;
  media: string;
  type: 'image' | 'video';
  timestamp: string;
  viewed?: boolean;
  reactions?: { emoji: string; count: number }[];
}

export interface Group {
  id: string;
  name: string;
  cover: string;
  members: number;
  privacy: 'public' | 'private';
  description: string;
  category: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
  read: boolean;
  type: 'text' | 'image' | 'voice';
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

// Users Data
export const users: User[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    username: 'sarahmitchell',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298607867_10a52d86.jpg',
    coverPhoto: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298773815_6b3b8d77.png',
    bio: 'Digital creator & travel enthusiast. Living life one adventure at a time.',
    location: 'San Francisco, CA',
    joinDate: 'March 2020',
    followers: 12500,
    following: 890,
    isOnline: true,
    isVerified: true
  },
  {
    id: '2',
    name: 'James Rodriguez',
    username: 'jamesrod',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298638380_7faf6379.png',
    bio: 'Software Engineer | Coffee lover | Weekend hiker',
    location: 'Austin, TX',
    followers: 8200,
    following: 456,
    isOnline: true,
    isVerified: false
  },
  {
    id: '3',
    name: 'Emily Chen',
    username: 'emilychen',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298611416_083a8c7c.jpg',
    bio: 'Photographer | Art lover | Capturing moments',
    location: 'New York, NY',
    followers: 25000,
    following: 1200,
    isOnline: false,
    isVerified: true
  },
  {
    id: '4',
    name: 'Michael Thompson',
    username: 'mikethompson',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298653588_90c7f6a3.jpg',
    bio: 'Fitness coach | Nutrition expert | Transform your life',
    location: 'Miami, FL',
    followers: 45000,
    following: 320,
    isOnline: true,
    isVerified: true
  },
  {
    id: '5',
    name: 'Jessica Williams',
    username: 'jesswilliams',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298608662_0f978081.jpg',
    bio: 'Food blogger | Recipe developer | Foodie adventures',
    location: 'Chicago, IL',
    followers: 18000,
    following: 780,
    isOnline: false,
    isVerified: false
  },
  {
    id: '6',
    name: 'David Park',
    username: 'davidpark',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298641251_e350c655.jpg',
    bio: 'Music producer | DJ | Creating vibes',
    location: 'Los Angeles, CA',
    followers: 32000,
    following: 560,
    isOnline: true,
    isVerified: true
  },
  {
    id: '7',
    name: 'Amanda Foster',
    username: 'amandafoster',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298620108_5eb56d20.png',
    bio: 'Fashion designer | Style consultant | Trendsetter',
    location: 'Paris, France',
    followers: 67000,
    following: 890,
    isOnline: true,
    isVerified: true
  },
  {
    id: '8',
    name: 'Ryan Cooper',
    username: 'ryancooper',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298649272_68b03dc2.png',
    bio: 'Tech entrepreneur | Startup founder | Innovation lover',
    location: 'Seattle, WA',
    followers: 28000,
    following: 420,
    isOnline: false,
    isVerified: true
  },
  {
    id: '9',
    name: 'Sophia Martinez',
    username: 'sophiamartinez',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298608691_bfe0a8d4.jpg',
    bio: 'Yoga instructor | Wellness advocate | Inner peace',
    location: 'Denver, CO',
    followers: 15000,
    following: 650,
    isOnline: true,
    isVerified: false
  },
  {
    id: '10',
    name: 'Alex Turner',
    username: 'alexturner',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298648085_b6a068a0.png',
    bio: 'Gamer | Streamer | Content creator',
    location: 'Toronto, Canada',
    followers: 89000,
    following: 230,
    isOnline: true,
    isVerified: true
  },
  {
    id: '11',
    name: 'Olivia Brown',
    username: 'oliviabrown',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298609104_e28145f2.jpg',
    bio: 'Book lover | Writer | Storyteller',
    location: 'London, UK',
    followers: 22000,
    following: 980,
    isOnline: false,
    isVerified: false
  },
  {
    id: '12',
    name: 'Chris Anderson',
    username: 'chrisanderson',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298646799_8183f638.png',
    bio: 'Photographer | Adventurer | Nature lover',
    location: 'Sydney, Australia',
    followers: 41000,
    following: 340,
    isOnline: true,
    isVerified: true
  }
];

// Current logged in user
export const currentUser: User = users[0];

// Posts Data
export const posts: Post[] = [
  {
    id: '1',
    user: users[2],
    content: 'Just captured this amazing sunset during my evening walk. Nature never fails to amaze me! 🌅 What a beautiful way to end the day.',
    images: ['https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298743451_fdf3e0a7.png'],
    timestamp: '2 hours ago',
    reactions: [
      { type: 'like', count: 245, userReacted: false },
      { type: 'love', count: 89, userReacted: true },
      { type: 'wow', count: 34, userReacted: false }
    ],
    comments: [
      {
        id: 'c1',
        user: users[3],
        content: 'Absolutely stunning! Where was this taken?',
        timestamp: '1 hour ago',
        likes: 12,
        replies: [
          {
            id: 'c1r1',
            user: users[2],
            content: 'Thank you! This was at Golden Gate Park.',
            timestamp: '45 mins ago',
            likes: 5
          }
        ]
      },
      {
        id: 'c2',
        user: users[5],
        content: 'Your photography skills are incredible! 📸',
        timestamp: '30 mins ago',
        likes: 8
      }
    ],
    shares: 23,
    isLiked: true,
    isSaved: false,
    location: 'Golden Gate Park',
    privacy: 'public'
  },
  {
    id: '2',
    user: users[4],
    content: 'Sunday brunch with the best crew! Nothing beats good food and great company. Who else loves lazy Sunday mornings? ☕',
    images: [
      'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298672761_8e473f6e.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298687191_91fbdc32.png'
    ],
    timestamp: '4 hours ago',
    reactions: [
      { type: 'like', count: 156, userReacted: true },
      { type: 'love', count: 67, userReacted: false },
      { type: 'haha', count: 12, userReacted: false }
    ],
    comments: [
      {
        id: 'c3',
        user: users[6],
        content: 'That food looks absolutely delicious! Save me a seat next time!',
        timestamp: '3 hours ago',
        likes: 15
      }
    ],
    shares: 8,
    isLiked: true,
    isSaved: true,
    feeling: 'happy',
    location: 'The Breakfast Club',
    privacy: 'friends'
  },
  {
    id: '3',
    user: users[3],
    content: 'New personal record at the gym today! 💪 Remember, progress is progress no matter how small. Keep pushing yourself!\n\n#FitnessJourney #NeverGiveUp #GymLife',
    timestamp: '5 hours ago',
    reactions: [
      { type: 'like', count: 892, userReacted: false },
      { type: 'love', count: 234, userReacted: false },
      { type: 'wow', count: 56, userReacted: false }
    ],
    comments: [
      {
        id: 'c4',
        user: users[8],
        content: 'You\'re such an inspiration! What\'s your workout routine?',
        timestamp: '4 hours ago',
        likes: 28
      },
      {
        id: 'c5',
        user: users[1],
        content: 'Beast mode activated! 🔥',
        timestamp: '3 hours ago',
        likes: 19
      }
    ],
    shares: 45,
    isLiked: false,
    isSaved: false,
    privacy: 'public'
  },
  {
    id: '4',
    user: users[7],
    content: 'Excited to announce that our startup just closed our Series A funding! 🚀 Thank you to everyone who believed in our vision. This is just the beginning!\n\nBig things coming in 2025. Stay tuned!',
    timestamp: '8 hours ago',
    reactions: [
      { type: 'like', count: 1245, userReacted: true },
      { type: 'love', count: 456, userReacted: false },
      { type: 'wow', count: 189, userReacted: false }
    ],
    comments: [
      {
        id: 'c6',
        user: users[9],
        content: 'Congratulations! Well deserved! 🎉',
        timestamp: '7 hours ago',
        likes: 45
      },
      {
        id: 'c7',
        user: users[5],
        content: 'Amazing news! Can\'t wait to see what you build next!',
        timestamp: '6 hours ago',
        likes: 32
      }
    ],
    shares: 156,
    isLiked: true,
    isSaved: true,
    privacy: 'public'
  },
  {
    id: '5',
    user: users[11],
    content: 'Hiked to the summit today and the view was absolutely breathtaking! Sometimes you need to disconnect to reconnect. 🏔️',
    images: [
      'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298748674_67ccb172.png',
      'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298743519_6c3f2456.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298750501_53b91201.png'
    ],
    timestamp: '12 hours ago',
    reactions: [
      { type: 'like', count: 567, userReacted: false },
      { type: 'love', count: 234, userReacted: true },
      { type: 'wow', count: 123, userReacted: false }
    ],
    comments: [
      {
        id: 'c8',
        user: users[0],
        content: 'This is on my bucket list! Which trail is this?',
        timestamp: '10 hours ago',
        likes: 18
      }
    ],
    shares: 67,
    isLiked: false,
    isSaved: true,
    location: 'Blue Mountains',
    privacy: 'public'
  },
  {
    id: '6',
    user: users[5],
    content: 'Just dropped a new track! Been working on this one for months. Let me know what you think in the comments! 🎵🎧\n\nLink in bio for the full version.',
    timestamp: '1 day ago',
    reactions: [
      { type: 'like', count: 2340, userReacted: false },
      { type: 'love', count: 890, userReacted: false },
      { type: 'wow', count: 234, userReacted: false }
    ],
    comments: [
      {
        id: 'c9',
        user: users[9],
        content: 'This is fire! 🔥 On repeat all day!',
        timestamp: '23 hours ago',
        likes: 156
      }
    ],
    shares: 234,
    isLiked: false,
    isSaved: false,
    privacy: 'public'
  }
];

// Stories Data
export const stories: Story[] = [
  {
    id: 's1',
    user: currentUser,
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298681505_56062067.png',
    type: 'image',
    timestamp: '2 hours ago',
    viewed: false
  },
  {
    id: 's2',
    user: users[1],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298743451_fdf3e0a7.png',
    type: 'image',
    timestamp: '3 hours ago',
    viewed: false
  },
  {
    id: 's3',
    user: users[2],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298748674_67ccb172.png',
    type: 'image',
    timestamp: '4 hours ago',
    viewed: true
  },
  {
    id: 's4',
    user: users[3],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298672761_8e473f6e.jpg',
    type: 'image',
    timestamp: '5 hours ago',
    viewed: false
  },
  {
    id: 's5',
    user: users[5],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298681347_8aa2cbbc.png',
    type: 'image',
    timestamp: '6 hours ago',
    viewed: true
  },
  {
    id: 's6',
    user: users[6],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298743519_6c3f2456.jpg',
    type: 'image',
    timestamp: '7 hours ago',
    viewed: false
  },
  {
    id: 's7',
    user: users[8],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298750501_53b91201.png',
    type: 'image',
    timestamp: '8 hours ago',
    viewed: false
  },
  {
    id: 's8',
    user: users[9],
    media: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298687191_91fbdc32.png',
    type: 'image',
    timestamp: '10 hours ago',
    viewed: true
  }
];

// Groups Data
export const groups: Group[] = [
  {
    id: 'g1',
    name: 'Tech Innovators Hub',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298773815_6b3b8d77.png',
    members: 45200,
    privacy: 'public',
    description: 'A community for tech enthusiasts and innovators',
    category: 'Technology'
  },
  {
    id: 'g2',
    name: 'Fitness Warriors',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298770024_3c3895be.jpg',
    members: 28900,
    privacy: 'public',
    description: 'Get fit together! Share workouts and motivation',
    category: 'Health & Fitness'
  },
  {
    id: 'g3',
    name: 'Photography Masters',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298743451_fdf3e0a7.png',
    members: 67500,
    privacy: 'public',
    description: 'Share your best shots and learn from others',
    category: 'Art & Photography'
  },
  {
    id: 'g4',
    name: 'Foodies Unite',
    cover: 'https://d64gsuwffb70l.cloudfront.net/6938513f5e699aa38bd90114_1765298672761_8e473f6e.jpg',
    members: 34100,
    privacy: 'public',
    description: 'For those who live to eat!',
    category: 'Food & Drink'
  }
];

// Conversations Data
export const conversations: Conversation[] = [
  {
    id: 'conv1',
    participants: [currentUser, users[1]],
    lastMessage: {
      id: 'm1',
      sender: users[1],
      content: 'Hey! Are you coming to the meetup tomorrow?',
      timestamp: '5 mins ago',
      read: false,
      type: 'text'
    },
    unreadCount: 2
  },
  {
    id: 'conv2',
    participants: [currentUser, users[2]],
    lastMessage: {
      id: 'm2',
      sender: users[2],
      content: 'Thanks for the feedback on my photos!',
      timestamp: '1 hour ago',
      read: true,
      type: 'text'
    },
    unreadCount: 0
  },
  {
    id: 'conv3',
    participants: [currentUser, users[5]],
    lastMessage: {
      id: 'm3',
      sender: currentUser,
      content: 'That new track is amazing! 🔥',
      timestamp: '3 hours ago',
      read: true,
      type: 'text'
    },
    unreadCount: 0
  },
  {
    id: 'conv4',
    participants: [currentUser, users[6]],
    lastMessage: {
      id: 'm4',
      sender: users[6],
      content: 'Let me know when you\'re free for the collab!',
      timestamp: '1 day ago',
      read: false,
      type: 'text'
    },
    unreadCount: 1
  }
];

// Trending Topics
export const trendingTopics = [
  { tag: '#TechInnovation', posts: '125K posts' },
  { tag: '#FitnessGoals2025', posts: '89K posts' },
  { tag: '#SundayVibes', posts: '67K posts' },
  { tag: '#StartupLife', posts: '45K posts' },
  { tag: '#NaturePhotography', posts: '234K posts' },
  { tag: '#MusicProduction', posts: '78K posts' }
];

// Suggested Friends
export const suggestedFriends = [
  { ...users[7], mutualFriends: 12 },
  { ...users[9], mutualFriends: 8 },
  { ...users[10], mutualFriends: 15 },
  { ...users[11], mutualFriends: 6 }
];

// Notifications
export const notifications = [
  {
    id: 'n1',
    type: 'like',
    user: users[3],
    content: 'liked your post',
    timestamp: '5 mins ago',
    read: false
  },
  {
    id: 'n2',
    type: 'comment',
    user: users[5],
    content: 'commented on your photo',
    timestamp: '15 mins ago',
    read: false
  },
  {
    id: 'n3',
    type: 'friend_request',
    user: users[10],
    content: 'sent you a friend request',
    timestamp: '1 hour ago',
    read: true
  },
  {
    id: 'n4',
    type: 'mention',
    user: users[2],
    content: 'mentioned you in a comment',
    timestamp: '2 hours ago',
    read: true
  },
  {
    id: 'n5',
    type: 'birthday',
    user: users[8],
    content: 'has a birthday today',
    timestamp: '5 hours ago',
    read: true
  }
];

// Achievement Badges
export const badges = [
  { id: 'b1', name: 'Early Adopter', icon: '🌟', description: 'Joined in the first year' },
  { id: 'b2', name: 'Social Butterfly', icon: '🦋', description: '1000+ connections' },
  { id: 'b3', name: 'Content Creator', icon: '🎨', description: '100+ posts' },
  { id: 'b4', name: 'Trendsetter', icon: '🔥', description: 'Post went viral' },
  { id: 'b5', name: 'Helpful Friend', icon: '🤝', description: '500+ helpful reactions' }
];
