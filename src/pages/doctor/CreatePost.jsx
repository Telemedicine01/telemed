import React, { useState } from 'react';
import { 
  Upload,
  FileText,
  Image,
  Video,
  X,
  Plus,
  BookOpen,
  Tag,
  CheckCircle,
  PenTool,
  Type,
  FilePlus,
  Check
} from 'lucide-react';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'general',
    tags: [],
    newTag: '',
    attachments: [],
    isFeatured: false,
    disclaimer: false
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    { value: 'general', label: 'General Health' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'mental-health', label: 'Mental Health' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'womens-health', label: "Women's Health" },
    { value: 'mens-health', label: "Men's Health" },
    { value: 'geriatrics', label: 'Geriatrics' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTagAdd = () => {
    if (formData.newTag.trim() && !formData.tags.includes(formData.newTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, prev.newTag.trim()],
        newTag: ''
      }));
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map(file => ({
      name: file.name,
      type: file.type.startsWith('image/') ? 'image' : 
            file.type.startsWith('video/') ? 'video' : 'document',
      file
    }));

    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...newAttachments]
    }));

    // Set preview if it's an image
    if (files[0]?.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  const removeAttachment = (index) => {
    const updatedAttachments = [...formData.attachments];
    updatedAttachments.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      attachments: updatedAttachments
    }));
    if (index === 0 && updatedAttachments.length === 0) {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, you would submit to your API here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        title: '',
        content: '',
        category: 'general',
        tags: [],
        newTag: '',
        attachments: [],
        isFeatured: false,
        disclaimer: false
      });
      setPreviewImage(null);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center ">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Article Submitted</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Your health article has been received and will be reviewed by our editorial team.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
        >
          Create New Article
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-white py-8 px-4 sm:px-6 lg:px-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-start mb-8">
        <div className="bg-teal-50 p-3 rounded-lg mr-4">
          <PenTool className="h-6 w-6 text-teal-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Article</h1>
          <p className="text-gray-500">Share your medical knowledge with our community</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Article Title <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Type className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Understanding Heart Disease: Prevention and Management"
              required
            />
          </div>
        </div>

        {/* Content Field */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Article Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={12}
            className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Write your article content here..."
            required
          />
          <p className="mt-2 text-xs text-gray-500">
            Supports Markdown formatting for headings, lists, and links
          </p>
        </div>

        {/* Category and Tags */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BookOpen className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tags Field */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Tag className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="newTag"
                  value={formData.newTag}
                  onChange={(e) => setFormData(prev => ({ ...prev, newTag: e.target.value }))}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-l-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Add tags..."
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleTagAdd())}
                />
              </div>
              <button
                type="button"
                onClick={handleTagAdd}
                className="px-4 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            {formData.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {formData.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-700"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTagRemove(tag)}
                      className="ml-2 inline-flex text-teal-400 hover:text-teal-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Supporting Documents
          </label>
          
          {/* Preview for image */}
          {previewImage && (
            <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src={previewImage} 
                alt="Preview" 
                className="w-full max-h-64 object-cover"
              />
            </div>
          )}

          {/* File upload */}
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FilePlus className="h-10 w-10 text-gray-400 mb-3" />
                <p className="mb-1 text-sm text-gray-500">
                  <span className="font-medium">Upload files</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, PDF, or MP4 (10MB max per file)
                </p>
              </div>
              <input 
                id="attachments" 
                type="file" 
                className="hidden" 
                multiple
                onChange={handleFileUpload}
                accept="image/*,video/*,.pdf"
              />
            </label>
          </div>

          {/* Attachments list */}
          {formData.attachments.length > 0 && (
            <div className="mt-4 space-y-2">
              {formData.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    {attachment.type === 'image' ? (
                      <Image className="h-5 w-5 text-teal-500 mr-3" />
                    ) : attachment.type === 'video' ? (
                      <Video className="h-5 w-5 text-rose-500 mr-3" />
                    ) : (
                      <FileText className="h-5 w-5 text-gray-500 mr-3" />
                    )}
                    <span className="text-sm text-gray-700 truncate max-w-xs">{attachment.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-4">
      
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="disclaimer"
                name="disclaimer"
                type="checkbox"
                checked={formData.disclaimer}
                onChange={handleChange}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                required
              />
            </div>
            <label htmlFor="disclaimer" className="ml-3 text-sm text-gray-700">
              I certify that this content is original and medically accurate. I understand that:
              <ul className="mt-1 space-y-1 text-xs text-gray-500 list-disc list-inside">
                <li>All articles are reviewed before publication</li>
                <li>Content may be edited for clarity or formatting</li>
                <li>This does not constitute medical advice</li>
              </ul>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || !formData.disclaimer}
            className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 ${
              isSubmitting || !formData.disclaimer
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <Check className="h-5 w-5" />
                <span>Publish Article</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;