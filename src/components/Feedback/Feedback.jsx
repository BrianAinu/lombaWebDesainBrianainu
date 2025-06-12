import React, { useState } from 'react'

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState('success')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setNotificationType('error')
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
      return
    }

    // Reset form and show success notification
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setNotificationType('success')
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <div className="bg-[#8B4513]/5 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-[#8B4513]/10">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-2">
              Feedback and Suggestions
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              We greatly value your feedback and suggestions to improve our services.
              Please share your experience or ideas with us.
            </p>
          </div>

          <div className="max-w-sm mx-auto bg-white/50 p-4 rounded-lg backdrop-blur-sm border border-[#8B4513]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-[#8B4513] transition-all">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-md border-2 border-[#8B4513]/20 px-3 py-2 text-[#8B4513] placeholder-[#8B4513]/40 text-sm
                             focus:border-[#8B4513]/60 focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20 
                             hover:border-[#8B4513]/40 transition-all duration-300 bg-white/50 backdrop-blur-sm
                             shadow-sm hover:shadow focus:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] transition-all">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-2 border-[#8B4513]/20 px-3 py-2 text-[#8B4513] placeholder-[#8B4513]/40 text-sm
                             focus:border-[#8B4513]/60 focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20 
                             hover:border-[#8B4513]/40 transition-all duration-300 bg-white/50 backdrop-blur-sm
                             shadow-sm hover:shadow focus:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-[#8B4513] transition-all">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your feedback or suggestions"
                    className="mt-1 block w-full rounded-lg border-2 border-[#8B4513]/20 px-4 py-3 text-[#8B4513] placeholder-[#8B4513]/40 
                             focus:border-[#8B4513]/60 focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20 
                             hover:border-[#8B4513]/40 transition-all duration-300 bg-white/50 backdrop-blur-sm
                             shadow-sm hover:shadow focus:shadow-md resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#8B4513] text-white py-2 px-4 rounded-md hover:bg-[#8B4513]/90 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 focus:ring-offset-2 
                           transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                           shadow hover:shadow-md font-medium text-sm tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <div
            className={`fixed bottom-4 left-4 px-6 py-3 rounded-lg shadow-lg text-white ${
              notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'
            } transition-all duration-300 transform translate-y-0`}
          >
            {notificationType === 'success' ? (
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Thank you! Your message has been sent.</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Please complete all required fields.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Feedback
