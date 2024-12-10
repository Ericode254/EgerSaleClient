const LoadSpinner = () => {
  return (
    <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="none" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0"></path>
    </svg>
  )
}

export default LoadSpinner
