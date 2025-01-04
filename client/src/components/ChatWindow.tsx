const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-2">
          <p className="text-sm text-gray-500">User 1:</p>
          <p className="bg-gray-100 p-2 rounded-md">Hello!</p>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-500">You:</p>
          <p className="bg-blue-100 p-2 rounded-md">Hi there!</p>
        </div>
      </div>

      {/* Input */}
      <div className="h-16 flex items-center px-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-md p-2 mr-2"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
