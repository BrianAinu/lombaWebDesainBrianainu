import React, { useState } from 'react'

const Rating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [review, setReview] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log({ name, rating, review })
    setSubmitted(true)
    // Reset form
    setRating(0)
    setReview('')
    setName('')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      {submitted ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🙏</div>
          <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rate Your Experience
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-3xl transition-all duration-300 transform hover:scale-110 focus:outline-none ${
                    (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600 self-center">
                {rating ? `${rating} out of 5 stars` : 'Select rating'}
              </span>
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all duration-300"
              placeholder="Share your experience with us..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-base font-medium text-white rounded-xl bg-[#8B4513] hover:bg-[#A0522D] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  )
}

export default Rating
