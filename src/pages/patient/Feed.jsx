import React, { useState, useEffect } from 'react';
import { 
  BookOpen,
  Heart,
  Clock,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const categoryStyles = {
  'Cardiology': 'bg-rose-100 text-rose-800',
  'Pediatrics': 'bg-blue-100 text-blue-800',
  'Mental Health': 'bg-indigo-100 text-indigo-800',
  'Nutrition': 'bg-emerald-100 text-emerald-800',
  'Women\'s Health': 'bg-pink-100 text-pink-800',
  'Preventive Care': 'bg-teal-100 text-teal-800',
  'General Health': 'bg-gray-100 text-gray-800'
};

// Mock articles data for fallback when API fails
const mockArticles = [
  {
    id: '8',
    title: 'Understanding Heart Health: Prevention Strategies for All Ages',
    excerpt: 'Learn about key strategies to maintain a healthy heart through diet, exercise, and lifestyle modifications that can reduce your risk of cardiovascular disease.',
    category: 'Cardiology',
    likes: 142,
    readingTime: '5 min read',
    publishedAt: '2025-04-15T14:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3',
    author: {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist'
    }
  },
  {
    id: '2',
    title: 'Childhood Vaccinations: What Parents Need to Know in 2025',
    excerpt: 'A comprehensive guide to the latest vaccination recommendations, schedules, and addressing common concerns for parents of young children.',
    category: 'Pediatrics',
    likes: 87,
    readingTime: '8 min read',
    publishedAt: '2025-04-10T09:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3',
    author: {
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician'
    }
  },
  // {
  //   id: '3',
  //   title: 'Managing Anxiety in a Digital Age: Evidence-Based Approaches',
  //   excerpt: 'Discover effective techniques and approaches for managing anxiety in today\'s constantly connected world, based on the latest mental health research.',
  //   category: 'Mental Health',
  //   likes: 203,
  //   readingTime: '7 min read',
  //   publishedAt: '2025-04-22T16:45:00Z',
  //   imageUrl: 'https://images.unsplash.com/photo-1620857273868-c05eda8ddb3c?ixlib=rb-4.0.3',
  //   author: {
  //     name: 'Dr. Priya Sharma',
  //     specialty: 'Psychiatrist'
  //   }
  // },
  {
    id: '4',
    title: 'Plant-Based Eating: Building a Balanced Diet',
    excerpt: "How to ensure you're getting all essential nutrients while following a plant-based diet, with meal plans and practical shopping tips.",
    category: 'Nutrition',
    likes: 156,
    readingTime: '6 min read',
    publishedAt: '2025-04-18T11:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3',
    author: {
      name: 'Maria Rodriguez, RD',
      specialty: 'Registered Dietitian'
    }
  },
  {
    id: '5',
    title: 'Perimenopause: Navigating the Transition Years',
    excerpt: 'Understanding the physical and emotional changes during perimenopause and strategies for managing symptoms and maintaining wellness.',
    category: 'Women\'s Health',
    likes: 119,
    readingTime: '9 min read',
    publishedAt: '2025-04-05T08:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1556906851-2a51b4b1cb78?ixlib=rb-4.0.3',
    author: {
      name: 'Dr. Amara Wilson',
      specialty: 'OB/GYN'
    }
  },
  {
    id: '6',
    title: 'The Latest in Sleep Science: Optimizing Your Rest',
    excerpt: 'New research findings on sleep quality and practical habits you can implement tonight for better rest and improved overall health.',
    category: 'General Health',
    likes: 178,
    readingTime: '5 min read',
    publishedAt: '2025-04-20T19:10:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3',
    author: {
      name: 'Dr. James Taylor',
      specialty: 'Sleep Medicine'
    }
  },
  {
    id: '7',
    title: 'Understanding the New Hypertension Guidelines',
    excerpt: 'What the latest blood pressure guidelines mean for your health, including prevention strategies and when medication might be recommended.',
    category: 'Preventive Care',
    likes: 95,
    readingTime: '6 min read',
    publishedAt: '2025-04-12T15:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1631815588090-d4bfb6630fc4?ixlib=rb-4.0.3',
    author: {
      name: 'Dr. Robert Kim',
      specialty: 'Internal Medicine'
    }
  },
  {
    id: '1',
    title: 'Childhood Obesity: Supportive Approaches for Families',
    excerpt: 'Family-centered strategies for addressing childhood obesity with a focus on positive habits and maintaining psychological wellbeing.',
    category: 'Pediatrics',
    likes: 112,
    readingTime: '7 min read',
    publishedAt: '2025-04-08T10:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1560424560-f8c2a317b3b0?ixlib=rb-4.0.3',
    author: {
      name: 'Dr. Emily Washington',
      specialty: 'Pediatric Endocrinologist'
    }
  }
];

const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'newest'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Try fetching from API
        const response = await axios.get('YOUR_API_ENDPOINT');
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setArticles(response.data);
        } else if (response.data.articles) {
          setArticles(response.data.articles);
        } else {
          console.error('Unexpected data structure:', response.data);
          // Fallback to mock data if API structure is unexpected
          setArticles(mockArticles);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        // Use mock articles when API fails
        console.log('Using mock articles data as fallback');
        setArticles(mockArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filters.category || article.category === filters.category;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (filters.sortBy === 'newest') {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    } else if (filters.sortBy === 'oldest') {
      return new Date(a.publishedAt) - new Date(b.publishedAt);
    } else if (filters.sortBy === 'popular') {
      return b.likes - a.likes;
    }
    return 0;
  });

  const resetFilters = () => {
    setFilters({
      category: '',
      sortBy: 'newest'
    });
    setSearchTerm('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <Loader2 className="h-10 w-10 text-teal-600 animate-spin mx-auto" />
          <p className="text-gray-600 font-medium">Loading health articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-100 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Health Feed</h1>
                <p className="text-sm text-gray-500">Trusted medical information from our providers</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to="/patient/saved"
                className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Saved Articles
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search health topics..."
                className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filters</span>
              {showFilters ? (
                <ChevronUp className="h-5 w-5 ml-2" />
              ) : (
                <ChevronDown className="h-5 w-5 ml-2" />
              )}
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-5 pt-5 border-t border-gray-100 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <select
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  >
                    <option value="">All Categories</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Nutrition">Nutrition</option>
                    <option value="Women's Health">Women's Health</option>
                    <option value="Preventive Care">Preventive Care</option>
                    <option value="General Health">General Health</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort By</label>
                  <select
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={resetFilters}
                  className="text-sm font-medium text-gray-500 hover:text-teal-600"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto" />
            <h3 className="mt-3 text-lg font-medium text-gray-900">No articles found</h3>
            <p className="mt-1 text-gray-500 max-w-md mx-auto">
              {searchTerm || filters.category 
                ? 'Try adjusting your search or filter criteria'
                : 'No health articles available at the moment'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <Link to={`/patient/articles/${article.id}`} className="block">
                  {article.imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={article.imageUrl}
                        alt={article.title}
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryStyles[article.category] || 'bg-gray-100 text-gray-800'}`}>
                        {article.category}
                      </span>
                      <span className="inline-flex items-center text-xs text-gray-500">
                        <Heart className="h-3.5 w-3.5 mr-1.5 fill-rose-100 text-rose-500" />
                        {article.likes}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                        <p className="text-xs text-gray-500">{article.author.specialty}</p>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3.5 w-3.5 mr-1.5" />
                        {article.readingTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Feed;