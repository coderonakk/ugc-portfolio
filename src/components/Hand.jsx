// Yellow handwritten word(s). Add `underline` for a hand-drawn squiggle.
export default function Hand({ children, underline = false, className = "" }) {
  return (
    <span
      className={`font-hand relative inline-block -rotate-2 text-[1.25em] leading-none font-bold text-accent ${className}`}
    >
      {children}
      {underline && (
        <svg
          aria-hidden="true"
          viewBox="0 0 200 10"
          preserveAspectRatio="none"
          className="absolute -bottom-1.5 left-0 h-2 w-full"
        >
          <path
            d="M2 6 C 30 1, 60 9, 95 4 S 160 2, 198 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}
