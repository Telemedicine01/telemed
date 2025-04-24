import React from "react";
import {
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
  Check,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const CreatePost = () => {
  const categories = [
    { value: "general", label: "General Health" },
    { value: "cardiology", label: "Cardiology" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "mental-health", label: "Mental Health" },
    { value: "nutrition", label: "Nutrition" },
    { value: "womens-health", label: "Women's Health" },
    { value: "mens-health", label: "Men's Health" },
    { value: "geriatrics", label: "Geriatrics" },
  ];

  // const addPost = async (event) => {
  //   event.target.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "https://telemedicine-api-09u5.onrender.com/articles",
  //       formData
  //     );
  //     const formData = new FormData(event.target);
  //     console.log(res.data);
  //     alert("sent successtully");
  //   } catch {
  //     console.log("hello");
  //     alert("failed");
  //   }
  // };
  const addPost = async (event) => {
    event.preventDefault(); // fix 1

    const formData = new FormData(event.target); // fix 2: move this up

    try {
      const res = await axios.post(
        "https://telemedicine-api-09u5.onrender.com/articles",
        formData
      );
      console.log(res.data);
      alert("Sent successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed");
    }
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-white py-8 px-4 sm:px-6 lg:px-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-start mb-8">
        <div className="bg-teal-50 p-3 rounded-lg mr-4">
          <PenTool className="h-6 w-6 text-teal-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Create New Article
          </h1>
          <p className="text-gray-500">
            Share your medical knowledge with our community
          </p>
        </div>
      </div>

      <form className="space-y-8" onSubmit={addPost}>
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
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
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Understanding Heart Disease: Prevention and Management"
              required
            />
          </div>
        </div>

        {/* Content Field */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Article Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            name="content"
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
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BookOpen className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="category"
                name="category"
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                required
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Tags Field */}
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-l-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Add tags..."
                />
              </div>
              <button
                type="button"
                className="px-4 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Supporting Documents
          </label>

          {/* File upload */}
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FilePlus className="h-10 w-10 text-gray-400 mb-3" />
                <p className="mb-1 text-sm text-gray-500">
                  <span className="font-medium">Upload files</span> or drag and
                  drop
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
                accept="image/*,video/*,.pdf"
              />
            </label>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="disclaimer"
                name="disclaimer"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                required
              />
            </div>
            <label htmlFor="disclaimer" className="ml-3 text-sm text-gray-700">
              I certify that this content is original and medically accurate. I
              understand that:
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
            className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
          >
            <Check className="h-5 w-5" />
            <span>Publish Article</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
