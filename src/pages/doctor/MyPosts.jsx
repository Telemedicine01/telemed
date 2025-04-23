import React, { useState, useEffect } from 'react';
import { 
  FileText,
  Search,
  Filter,
  Calendar,
  Eye,
  Edit,
  Trash2,
  ChevronDown,
  ChevronUp,
  Plus,
  BookOpen,
  Loader2,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - replace with API calls in production
const mockArticles = [
  {
    id: '1',
    title: 'Understanding Heart Disease: Prevention and Management',
    category: 'cardiology',
    status: 'published',
    views: 1245,
    likes: 89,
    createdAt: '2023-10-15T09:30:00Z',
    updatedAt: '2023-10-15T09:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '2',
    title: 'Pediatric Nutrition: Building Healthy Habits Early',
    category: 'pediatrics',
    status: 'published',
    views: 876,
    likes: 45,
    createdAt: '2023-09-28T14:15:00Z',
    updatedAt: '2023-10-02T11:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '3',
    title: 'Managing Stress and Anxiety in Modern Life',
    category: 'mental-health',
    status: 'draft',
    views: 0,
    likes: 0,
    createdAt: '2023-11-05T16:45:00Z',
    updatedAt: '2023-11-05T16:45:00Z'
  },
  {
    id: '4',
    title: 'Women\'s Health: Annual Checkups You Shouldn\'t Skip',
    category: 'womens-health',
    status: 'pending',
    views: 0,
    likes: 0,
    createdAt: '2023-11-10T10:20:00Z',
    updatedAt: '2023-11-10T10:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '5',
    title: 'The Importance of Vaccinations for Adults',
    category: 'general',
    status: 'published',
    views: 1532,
    likes: 112,
    createdAt: '2023-08-22T08:10:00Z',
    updatedAt: '2023-09-15T13:25:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const statusStyles = {
  published: 'bg-teal-100 text-teal-800',
  draft: 'bg-gray-100 text-gray-800',
  pending: 'bg-amber-100 text-amber-800',
  rejected: 'bg-rose-100 text-rose-800'
};

const categoryStyles = {
  cardiology: 'bg-rose-100 text-rose-800',
  pediatrics: 'bg-blue-100 text-blue-800',
  'mental-health': 'bg-indigo-100 text-indigo-800',
  nutrition: 'bg-emerald-100 text-emerald-800',
  'womens-health': 'bg-pink-100 text-pink-800',
  'mens-health': 'bg-sky-100 text-sky-800',
  geriatrics: 'bg-amber-100 text-amber-800',
  general: 'bg-gray-100 text-gray-800'
};

const MyPosts = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    category: '',
    sortBy: 'newest'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setArticles(mockArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filters.status || article.status === filters.status;
    const matchesCategory = !filters.category || article.category === filters.category;
    return matchesSearch && matchesStatus && matchesCategory;
  }).sort((a, b) => {
    if (filters.sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (filters.sortBy === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (filters.sortBy === 'popular') {
      return b.views - a.views;
    }
    return 0;
  });

  const handleDelete = async (articleId) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        setArticles(prev => prev.filter(article => article.id !== articleId));
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }
  };

  const resetFilters = () => {
    setFilters({
      status: '',
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
          <p className="text-gray-600 font-medium">Loading your articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-teal-100 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Articles</h1>
              <p className="text-sm text-gray-500">Manage your published content</p>
            </div>
          </div>
          <Link
            to="/doctor/articles/new"
            className="inline-flex items-center px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-sm group"
          >
            <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
            <span className="font-medium">New Article</span>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                  <select
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  >
                    <option value="">All Statuses</option>
                    <option value="published">Published</option>
                    <option value="pending">Pending Review</option>
                    <option value="draft">Draft</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <select
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  >
                    <option value="">All Categories</option>
                    <option value="general">General Health</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="mental-health">Mental Health</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="womens-health">Women's Health</option>
                    <option value="mens-health">Men's Health</option>
                    <option value="geriatrics">Geriatrics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Sort By</label>
                  <select
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
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
                  className="text-sm font-medium text-gray-500 hover:text-teal-600 transition-colors duration-200"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Articles List */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 px-4">
              <FileText className="h-12 w-12 text-gray-300 mx-auto" />
              <h3 className="mt-3 text-lg font-medium text-gray-900">No articles found</h3>
              <p className="mt-1 text-gray-500 max-w-md mx-auto">
                {searchTerm || filters.status || filters.category 
                  ? 'Try adjusting your search or filter criteria'
                  : "You haven't published any articles yet"}
              </p>
              <div className="mt-6">
                <Link
                  to="/doctor/articles/new"
                  className="inline-flex items-center px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-sm"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create Your First Article
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredArticles.map((article) => (
                <li key={article.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <div className="px-5 py-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      {article.imageUrl && (
                        <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-gray-200">
                          <img
                            className="w-full h-full object-cover"
                            src={article.imageUrl}
                            alt={article.title}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {article.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryStyles[article.category] || 'bg-gray-100 text-gray-800'}`}>
                            {article.category.replace('-', ' ')}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[article.status]}`}>
                            {article.status}
                          </span>
                          {article.status === 'published' && (
                            <div className="flex items-center space-x-3">
                              <span className="inline-flex items-center text-xs text-gray-500">
                                <Eye className="h-3.5 w-3.5 mr-1.5" />
                                {article.views.toLocaleString()}
                              </span>
                              <span className="inline-flex items-center text-xs text-gray-500">
                                <Heart className="h-3.5 w-3.5 mr-1.5 fill-rose-100 text-rose-500" />
                                {article.likes.toLocaleString()}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-3">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {new Date(article.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            to={`/doctor/articles/${article.id}`}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Eye className="h-4 w-4 mr-1.5" />
                            View
                          </Link>
                          <Link
                            to={`/doctor/articles/${article.id}/edit`}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Edit className="h-4 w-4 mr-1.5" />
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-rose-600 transition-colors duration-200"
                          >
                            <Trash2 className="h-4 w-4 mr-1.5" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;