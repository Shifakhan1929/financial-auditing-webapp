const Home = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-green-900 via-teal-800 to-green-700">

      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-bold">FinFlow</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#">Overview</a>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm">
          Register Now!!
        </button>
      </nav>

      {/* 🔥 Hero Section */}
      <section className="text-center mt-16 px-4">

        <p className="text-sm text-gray-200 mb-3">
          All in one small businesses auditing webapp
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Smart and simple <br /> Financial Auditing Webapp
        </h1>

        {/* <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          Manage your finances, track spending, and get AI-powered insights anytime, anywhere.
        </p> */}

        {/* Email Input */}
        <div className="mt-8 flex justify-center">
          <div className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-black outline-none"
            />
            <button className="bg-green-600 px-4 py-2">
              Sign up
            </button>
          </div>
        </div>

        {/* 💳 Cards UI */}
        <div className="mt-16 flex justify-center items-end gap-6">
          
          <div className="w-40 h-24 bg-white/20 backdrop-blur-md rounded-xl rotate-[-10deg]"></div>
          
          <div className="w-48 h-28 bg-white/30 backdrop-blur-md rounded-xl shadow-lg"></div>
          
          <div className="w-40 h-24 bg-green-300/40 backdrop-blur-md rounded-xl rotate-[10deg]"></div>

        </div>

      </section>

      {/* 📊 Feature Section */}
      <section className="mt-32 bg-black/30 rounded-t-3xl py-16 px-8 text-center">

        <p className="text-sm text-green-300">Why FinFlow?</p>

        <h2 className="text-3xl font-bold mt-2">
          The only fintech app you'll ever need
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          <div>
            <div className="w-12 h-12 mx-auto bg-green-600 rounded-full"></div>
            <h3 className="mt-4 font-semibold">Checking Account</h3>
            <p className="text-gray-400 text-sm mt-2">
              Easy transactions and real-time tracking.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto bg-green-600 rounded-full"></div>
            <h3 className="mt-4 font-semibold">Savings Account</h3>
            <p className="text-gray-400 text-sm mt-2">
              Grow your money smartly.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto bg-green-600 rounded-full"></div>
            <h3 className="mt-4 font-semibold">Low Interest Loans</h3>
            <p className="text-gray-400 text-sm mt-2">
              Affordable financial solutions.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto bg-green-600 rounded-full"></div>
            <h3 className="mt-4 font-semibold">Credit Cards</h3>
            <p className="text-gray-400 text-sm mt-2">
              Flexible and rewarding usage.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;