export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/224627660310?text=Bonjour%20Saliou%2C%20je%20vous%20contacte%20depuis%20votre%20site%20web."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Me contacter sur WhatsApp"
      title="Me contacter sur WhatsApp"
      className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300 sm:right-6 sm:bottom-6 sm:h-14 sm:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.3l1.2-4.7a8.5 8.5 0 1 1 16.3-3.9Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M9 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2 2 .2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.5.4-1.1.6-1.8.5-1-.1-2.2-.7-3.4-1.8-1.1-1-1.9-2.2-2.1-3.2-.2-.9.1-1.8.7-2.4Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}