import MessageBubble from "./MessageBubble";

export default function ChatMessages({ messages, loading }) {
  return (
    <div className="flex-1 px-6 py-4 overflow-y-auto">
      {messages.length === 0 && (
        <div className="text-slate-500 text-center mt-20">
          Ask a question to get started
        </div>
      )}

      {messages.map((msg, idx) => (
        <MessageBubble key={idx} role={msg.role} text={msg.text} />
      ))}

      {loading && (
        <div className="text-slate-400 text-sm mt-2">
          Assistant is thinking…
        </div>
      )}
    </div>
  );
}