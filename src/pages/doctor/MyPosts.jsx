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

  {filteredArticles.length > 0 ? (
    <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stats
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredArticles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{article.title}</div>
                  <div className="text-sm text-gray-500">{article.excerpt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[article.status]}`}>
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${categoryStyles[article.category]}`}>
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(article.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Heart className="h-4 w-4 mr-1" />
                      {article.likes}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-4">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button 
                    className="text-rose-600 hover:text-rose-900"
                    onClick={() => handleDelete(article.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
      <div className="text-center py-16 px-4">
        <FileText className="h-12 w-12 text-gray-300 mx-auto" />
        <h3 className="mt-3 text-lg font-medium text-gray-900">No articles found</h3>
        <p className="mt-1 text-gray-500 max-w-md mx-auto">
          {searchTerm || filters.status || filters.category 
            ? "No articles match your filters." 
            : "You haven't published any articles yet."}
        </p>
        <div className="mt-6">
          <Link
            to="/doctor/articles/new"
            className="inline-flex items-center px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-sm"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Article
          </Link>
          {(searchTerm || filters.status || filters.category) && (
            <button
              onClick={resetFilters}
              className="ml-3 inline-flex items-center px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  )}

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
          />
        </div>
        <button
          className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <Filter className="h-5 w-5 mr-2" />
          <span className="font-medium">Filters</span>
          <ChevronDown className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden">
      <div className="text-center py-16 px-4">
        <FileText className="h-12 w-12 text-gray-300 mx-auto" />
        <h3 className="mt-3 text-lg font-medium text-gray-900">No articles found</h3>
        <p className="mt-1 text-gray-500 max-w-md mx-auto">
          You haven't published any articles yet
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
    </div>
  </div>
</div>
  );
};

export default MyPosts;