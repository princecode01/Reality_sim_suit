/* eslint-disable react/prop-types */
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="h-screen flex items-center justify-center p-6">
            <div className="text-center">
                <h1 className="text-red mb-6">Something went wrong🧐</h1>
                <p className="mb-4">{error?.message}</p>
                <button className="bg-customBlue text-light hover:bg-[#4d33e3] px-4 py-2" onClick={resetErrorBoundary}>
                    Try again
                </button>
            </div>
        </div>
    )
}

export default ErrorFallback
