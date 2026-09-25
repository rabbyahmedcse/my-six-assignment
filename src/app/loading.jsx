const Loading = () => {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#0b0b0d]">
            
            {/* Spinner */}
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#292c32] border-t-[#ccff00]"></div>

            <h2 className="mt-5 text-sm font-semibold text-white">
                Loading...
            </h2>

            <p className="mt-1 text-xs text-gray-500">
                Please wait a moment
            </p>
        </div>
    );
};

export default Loading;