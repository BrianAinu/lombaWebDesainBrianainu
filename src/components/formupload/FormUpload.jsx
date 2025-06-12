import React, { useState, useEffect } from 'react';

const FormUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'event', // Default category
    image: '',
    date: new Date().toISOString().split('T')[0] // Today's date as default
  });

  const [galleryData, setGalleryData] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('galleryData');
    if (savedData) {
      setGalleryData(JSON.parse(savedData));
    }
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file');
    }
  };

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    if (type === 'file') {
      if (files[0]) handleFile(files[0]);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: e.target.value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert('Please upload an image');
      return;
    }

    const newData = [...galleryData, { ...formData, id: Date.now() }];
    setGalleryData(newData);
    localStorage.setItem('galleryData', JSON.stringify(newData));

    // Reset form
    setFormData({
      title: '',
      description: '',
      category: 'event',
      image: '',
      date: new Date().toISOString().split('T')[0]
    });
    setPreviewImage(null);
  };

  const handleDelete = (id) => {
    const newData = galleryData.filter(item => item.id !== id);
    setGalleryData(newData);
    localStorage.setItem('galleryData', JSON.stringify(newData));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8B4513]">Upload Gallery Photo</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Drag & Drop Zone */}
            <div 
              className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${dragActive ? 'border-[#8B4513] bg-[#8B4513]/10' : 'border-gray-300 hover:border-[#8B4513]'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {previewImage ? (
                <div className="relative">
                  <img 
                    src={previewImage} 
                    alt="Preview" 
                    className="max-h-48 mx-auto rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage(null);
                      setFormData(prev => ({ ...prev, image: '' }));
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="text-gray-500">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-2">Drag and drop an image here, or click to select</p>
                </div>
              )}
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-[#8B4513] mb-2 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                required
              />
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-[#8B4513] mb-2 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              >
                <option value="event">Event</option>
                <option value="food">Food</option>
                <option value="place">Place</option>
                <option value="activity">Activity</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-[#8B4513] mb-2 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] h-32 resize-none"
                required
              />
            </div>

            {/* Date Input */}
            <div>
              <label className="block text-[#8B4513] mb-2 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-2 px-4 rounded-md hover:bg-[#8B4513]/90 transition-colors"
            >
              Upload Photo
            </button>
          </form>
        </div>

        {/* Gallery Display */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8B4513]">Gallery</h2>
          <div className="space-y-6 max-h-[600px] overflow-y-auto">
            {galleryData.map(item => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-lg relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="font-semibold text-[#8B4513]">{item.title}</h3>
                  <span className="inline-block bg-[#8B4513]/10 text-[#8B4513] px-2 py-1 rounded-full text-sm mb-2">
                    {item.category}
                  </span>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
            {galleryData.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No photos uploaded yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUpload;
