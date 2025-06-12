import React, { useState, useEffect } from 'react';

const FormArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    venue: 'main-hall',
    date: '',
    time: '',
    duration: '2',
    guests: '',
    eventType: 'dining',
    specialRequests: '',
    layoutPreference: 'traditional',
    cateringNeeded: 'no'
  });

  const [bookings, setBookings] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedBookings = localStorage.getItem('areaBookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const venues = [
    { id: 'main-hall', name: 'Main Dining Hall', capacity: 50 },
    { id: 'garden-pavilion', name: 'Garden Pavilion', capacity: 20 },
    { id: 'village-kitchen', name: 'Village Kitchen', capacity: 30 }
  ];

  const eventTypes = [
    { id: 'dining', name: 'Regular Dining' },
    { id: 'private-event', name: 'Private Event' },
    { id: 'cultural-experience', name: 'Cultural Experience' },
    { id: 'cooking-class', name: 'Cooking Class' },
    { id: 'celebration', name: 'Celebration/Party' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      ...formData,
      id: Date.now(),
      status: 'pending',
      venueName: venues.find(v => v.id === formData.venue)?.name
    };

    const newBookings = [...bookings, newBooking];
    setBookings(newBookings);
    localStorage.setItem('areaBookings', JSON.stringify(newBookings));

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      venue: 'main-hall',
      date: '',
      time: '',
      duration: '2',
      guests: '',
      eventType: 'dining',
      specialRequests: '',
      layoutPreference: 'traditional',
      cateringNeeded: 'no'
    });

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleDelete = (id) => {
    const newBookings = bookings.filter(booking => booking.id !== id);
    setBookings(newBookings);
    localStorage.setItem('areaBookings', JSON.stringify(newBookings));
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Booking Form */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#8B4513]/10">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8B4513]">Area Reservation</h2>
          
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-between">
              <span>Reservation submitted successfully!</span>
              <button onClick={() => setShowSuccess(false)} className="text-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#8B4513] border-b border-[#8B4513]/20 pb-2">
                Personal Information
              </h3>
              
              <div>
                <label className="block text-[#8B4513] mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  required
                />
              </div>
            </div>

            {/* Reservation Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#8B4513] border-b border-[#8B4513]/20 pb-2">
                Reservation Details
              </h3>

              <div>
                <label className="block text-[#8B4513] mb-2 font-medium">Venue</label>
                <select
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                >
                  {venues.map(venue => (
                    <option key={venue.id} value={venue.id}>
                      {venue.name} (Capacity: {venue.capacity})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8B4513] mb-2 font-medium">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    min={today}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#8B4513] mb-2 font-medium">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8B4513] mb-2 font-medium">Duration (hours)</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  >
                    {[2, 3, 4, 5, 6].map(hours => (
                      <option key={hours} value={hours}>{hours} hours</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#8B4513] mb-2 font-medium">Number of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max={venues.find(v => v.id === formData.venue)?.capacity}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#8B4513] border-b border-[#8B4513]/20 pb-2">
                Additional Options
              </h3>

              <div>
                <label className="block text-[#8B4513] mb-2 font-medium">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                >
                  {eventTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#8B4513] mb-2 font-medium">Layout Preference</label>
                <select
                  name="layoutPreference"
                  value={formData.layoutPreference}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                >
                  <option value="traditional">Traditional Floor Seating</option>
                  <option value="modern">Modern Table Setting</option>
                  <option value="mixed">Mixed Setting</option>
                </select>
              </div>

              <div>
                <label className="block text-[#8B4513] mb-2 font-medium">Catering Service</label>
                <select
                  name="cateringNeeded"
                  value={formData.cateringNeeded}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                >
                  <option value="no">No Catering Needed</option>
                  <option value="basic">Basic Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="custom">Custom Menu</option>
                </select>
              </div>

              <div>
                <label className="block text-[#8B4513] mb-2 font-medium">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] h-32 resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-3 px-4 rounded-md hover:bg-[#8B4513]/90 transition-colors font-medium"
            >
              Submit Reservation
            </button>
          </form>
        </div>

        {/* Bookings Display */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#8B4513]/10">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8B4513]">Your Reservations</h2>
          <div className="space-y-6 max-h-[800px] overflow-y-auto">
            {bookings.map(booking => (
              <div key={booking.id} className="bg-[#FFF8F3] p-4 rounded-lg relative">
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-[#8B4513]">{booking.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Venue:</span> {booking.venueName}
                    </div>
                    <div>
                      <span className="font-medium">Date:</span> {booking.date}
                    </div>
                    <div>
                      <span className="font-medium">Time:</span> {booking.time}
                    </div>
                    <div>
                      <span className="font-medium">Guests:</span> {booking.guests}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {booking.duration}h
                    </div>
                    <div>
                      <span className="font-medium">Event:</span> {booking.eventType}
                    </div>
                  </div>

                  {booking.specialRequests && (
                    <div className="text-sm text-gray-600 border-t border-gray-200 pt-2 mt-2">
                      <span className="font-medium">Special Requests:</span>
                      <p className="mt-1">{booking.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {bookings.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No reservations yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
