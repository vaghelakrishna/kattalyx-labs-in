export default function JoinEventsSection() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
            Upcoming Industry Events
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Expert-Led Sessions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with industry leaders, enhance your skills, and accelerate
            your career through our curated learning experiences across AI,
            Finance, and Leadership domains.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Event - AI Masterclass */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-100 relative">
              {/* Live Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-red-500 rounded-full px-3 py-1 flex items-center space-x-2 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-semibold">LIVE</span>
                </div>
              </div>

              {/* Speaker Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                  <span className="text-indigo-600 text-xs font-semibold">
                    Expert Speaker
                  </span>
                </div>
              </div>

              <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center"
                  alt="AI and Machine Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Tech Icons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>

                {/* Viewer count */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" />
                    </svg>
                    <span className="text-white font-bold text-sm">1.8K</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col items-center space-y-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DR</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      Dr. Sarah Chen
                    </p>
                    <p className="text-sm text-gray-600">AI Lead, Google</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Advanced Machine Learning in Production
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Today • 7:00 PM - 8:30 PM (IST) • IIT Delhi Partnership
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                    AI & Machine Learning
                  </span>
                  <span className="text-xs text-gray-500">2.1K registered</span>
                </div>
              </div>
            </div>
          </div>

          {/* FinTech Fundamentals */}
         

          {/* Leadership Masterclass */}
         
          {/* Mental Health Workshop */}
         

          {/* Data Science Bootcamp */}
          
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Accelerate Your Career?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Join thousands of students who have transformed their careers
              through our expert-led sessions and industry partnerships. Start
              your journey today.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">500+</div>
                <div className="text-sm text-gray-600">Expert Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">250+</div>
                <div className="text-sm text-gray-600">College Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">16+</div>
                <div className="text-sm text-gray-600">Events Hosted</div>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                <svg
                  className="w-5 h-5 mr-2 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
                Register for Events
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                <svg
                  className="w-5 h-5 mr-2 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
                </svg>
                Become a Speaker
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
