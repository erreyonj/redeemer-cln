const Review = ({name}) => {
  return (
    <div className="w-[400px] p-3 flex-shrink-0 shadow-md shadow-green-950 bg-[#366067] rounded-md *:text-white snap-center">
        <p>"What would go inside here is a simple review from an existing customer. Most likely this data will come from Google reviews API"</p>
        <span>--{ name }</span>
    </div>
)
}

export default Review
