const Sidebar = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Chats</h2>
            <ul>
                <li className="mb-2">
                    <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                        Chat 1
                    </button>
                </li>
                <li className="mb-2">
                    <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                        Chat 2
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
