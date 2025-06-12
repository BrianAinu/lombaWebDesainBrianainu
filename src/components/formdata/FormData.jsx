import React, { useState, useEffect } from 'react';

const FormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    major: '',
    address: '',
    hobby: '',
    image: ''
  });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('formSubmissions');
    if (savedData) {
      setTableData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === 'file' ? e.target.files[0] : e.target.value;
    
    if (type === 'file') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [name]: reader.result
        }));
      };
      if (value) {
        reader.readAsDataURL(value);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...tableData, { ...formData, id: Date.now() }];
    setTableData(newData);
    localStorage.setItem('formSubmissions', JSON.stringify(newData));
    setFormData({
      name: '',
      email: '',
      phone: '',
      major: '',
      address: '',
      hobby: '',
      image: ''
    });
    
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleDelete = (id) => {
    const filteredData = tableData.filter(item => item.id !== id);
    setTableData(filteredData);
    localStorage.setItem('formSubmissions', JSON.stringify(filteredData));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-[#8B4513]/10">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#8B4513]">Cultural Activity Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Profile Photo</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              required
            />
            {formData.image && (
              <div className="mt-2">
                <img src={formData.image} alt="Preview" className="w-24 h-24 object-cover rounded-lg" />
              </div>
            )}
          </div>
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Major</label>
            <select
              name="major"
              value={formData.major}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              required
            >
              <option value="">Select Major</option>
              <option value="Informatics Engineering">Informatics Engineering</option>
              <option value="Information Systems">Information Systems</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Information Management">Information Management</option>
            </select>
          </div>
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-[#8B4513] mb-2 font-medium">Hobby</label>
            <input
              type="text"
              name="hobby"
              value={formData.hobby}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#8B4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-2 px-4 rounded-md hover:bg-[#8B4513]/90 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {tableData.length > 0 && (
        <div className="max-w-full mx-auto overflow-x-auto">
          <h3 className="text-xl font-bold mb-4 text-center text-[#8B4513]">Registered Participants</h3>
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md border border-[#8B4513]/10">
            <thead className="bg-[#8B4513]/5">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Photo</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Major</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Address</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Hobby</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#8B4513]">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id} className="border-t border-[#8B4513]/10 hover:bg-[#8B4513]/5">
                  <td className="px-4 py-3 text-sm text-[#8B4513]">
                    {data.image && (
                      <img src={data.image} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#8B4513]">{data.name}</td>
                  <td className="px-4 py-3 text-sm text-[#8B4513]">{data.email}</td>
                  <td className="px-4 py-3 text-sm text-[#8B4513]">{data.phone}</td>
                  <td className="px-4 py-3 text-sm text-[#8B4513]">{data.major}</td>
                  <td className="px-4 py-3 text-sm text-[#8B4513]">{data.address}</td>
                  <td className="px-4 py-3 text-sm text-[#8B4513]">{data.hobby}</td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-medium px-3 py-1 rounded-md transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FormData;
