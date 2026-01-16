// User avatar
import userAvatar from '../../assets/images/Avatar.png'

// Sample activities data
const activitiesData = [
  {
    id: 1,
    user: {
      name: 'Lucas Ong',
      avatar: userAvatar,
    },
    timestamp: '1h ago',
    category: 'Openings',
    content: "Every chess player should master the knight fork. It's one of the most devastating tactical motifs in chess. Here's a position from my recent game where a simple knight move won material instantly.",
    likes: 5,
    comments: 5,
  },
]

// Like Icon Component
function LikeIcon() {
  return (
    <svg className="w-5 h-5 text-[#7b7b7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  )
}

// Comment Icon Component
function CommentIcon() {
  return (
    <svg className="w-5 h-5 text-[#7b7b7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

// Activity Item Component
function ActivityItem({ activity }) {
  const { user, timestamp, category, content, likes, comments } = activity

  return (
    <div className="flex gap-4 py-5">
      {/* User Avatar */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        {/* Header - Name & Timestamp */}
        <div className="flex items-center gap-1">
          <span className="text-[13px] font-semibold text-[#121212] tracking-[-0.13px]">
            {user.name}
          </span>
          <span className="text-xs font-medium text-[#7b7b7b]/50 tracking-[-0.12px]">
            {timestamp}
          </span>
        </div>

        {/* Category */}
        <p className="text-[13px] text-[#7b7b7b] tracking-[-0.13px]">
          in <span className="font-semibold text-[#121212]">{category}</span>
        </p>

        {/* Post Content */}
        <p className="text-[13px] text-[#7b7b7b]/80 leading-[1.5] tracking-[-0.13px] line-clamp-3">
          {content}
        </p>

        {/* Reactions */}
        <div className="flex items-center gap-1 mt-1">
          {/* Like Button */}
          <button className="flex items-center gap-0.5 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <LikeIcon />
            <span className="text-xs font-medium text-[#7b7b7b] tracking-[-0.12px]">
              {likes}
            </span>
          </button>

          {/* Comment Button */}
          <button className="flex items-center gap-0.5 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <CommentIcon />
            <span className="text-xs font-medium text-[#7b7b7b] tracking-[-0.12px]">
              {comments}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-[20px] border border-[#f1f1f1] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-[#1a1d1f] tracking-[-0.2px] leading-8">
          Community
        </h3>
      </div>

      {/* Activities List */}
      <div className="flex flex-col">
        {activitiesData.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>

      {/* View All Button */}
      <div className="px-3 pt-4">
        <button className="w-full h-12 flex items-center justify-center border-[1.5px] border-[#e2e2e2] rounded-full text-sm text-[#727272] font-normal tracking-[0.175px] hover:border-[#6366f1] hover:text-[#6366f1] transition-all duration-300">
          View all
        </button>
      </div>
    </div>
  )
}
