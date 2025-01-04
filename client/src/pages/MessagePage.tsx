
interface MessagePageProps{
    sidebar: React.ReactNode;
    chatWindow: React.ReactNode;
}
const MessagePage : React.FC<MessagePageProps> = ({sidebar, chatWindow}) => {
    return (
        <>
            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden rounded-md">
                {/* Sidebar */}
                <div className="w-64 bg-gray-100 border-r overflow-y-auto">{sidebar}</div>

                {/* Chat Window */}
                <div className="flex-1 bg-white">{chatWindow}</div>
            </div>
        </>
    );
};

export default MessagePage;
