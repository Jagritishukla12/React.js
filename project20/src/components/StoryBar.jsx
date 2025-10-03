export default function StoryBar({ users }) {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm flex gap-4 overflow-x-auto">
      {users.map((u) => (
        <div key={u.id} className="flex flex-col items-center min-w-[68px]">
          <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-0.5">
            <img
              src={u.avatar}
              alt={u.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-xs truncate w-16 text-center mt-1">{u.username}</span>
        </div>
      ))}
    </div>
  );
}
