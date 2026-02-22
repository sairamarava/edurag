export default function ChatHeader() {
  return (
    <div className="
      px-6
      py-4
      bg-blue-300
      border-b
      border-slate-200
      shadow-sm
      rounded-t-2xl
      relative
      z-10
    ">
      <h1 className="text-base font-semibold text-slate-900">
        EduRAG Campus Assistant
      </h1>
      <p className="text-sm text-slate-500 mt-0.5">
        Ask questions about campus information
      </p>
    </div>
  );
}