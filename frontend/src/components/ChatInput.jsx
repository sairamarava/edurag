import { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled || !value.trim()) return;

    onSend(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder={disabled ? "Assistant is thinking..." : "Type your question..."}
        className="
          w-full
          bg-slate-800
          text-slate-100
          rounded-xl
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      />
    </form>
  );
}