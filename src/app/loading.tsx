
const LoadingPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-50/50">
      <div className="flex flex-col items-center px-6 text-center">
        {/* Animated spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-100 border-t-red-600" />
          <div className="h-3 w-3 rounded-full bg-red-600" />
        </div>

        {/* Loading text */}
        <h2 className="mt-6 text-xl font-bold tracking-tight text-red-800">
          Loading
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait a moment...
        </p>

        {/* Progress animation */}
        <div className="mt-6 h-1.5 w-36 overflow-hidden rounded-full bg-red-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-red-600" />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
