import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-sm text-signal mb-4">// 404</p>
      <h1 className="font-mono text-4xl font-semibold text-ink mb-4">
        Page not found
      </h1>
      <p className="text-muted mb-10 max-w-md mx-auto">
        This entry doesn&apos;t exist — or it was moved. Check the URL or head back to the log.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-signal underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        ← back to home
      </Link>
    </div>
  );
}
