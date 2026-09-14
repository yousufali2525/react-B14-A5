import banner from '../assets/banner-stack.png';

function Banner() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

        <div className="flex flex-col items-start text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#6366F1] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">

            <button className="px-5 sm:px-6 py-3 rounded-xl font-medium text-white shadow-lg bg-gradient-to-r from-[#FF6A00] to-[#EE0979] hover:opacity-95 transition-opacity text-sm sm:text-base">
              Explore Technologies
            </button>

            <button className="px-5 sm:px-6 py-3 rounded-xl font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm text-sm sm:text-base">
              Learn More
            </button>

          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">

          <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg">

            <img
              src={banner}
              alt="Development Stack Illustration"
              className="w-full h-auto object-contain drop-shadow-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Banner;