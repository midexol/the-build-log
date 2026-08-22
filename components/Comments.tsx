"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Send, User } from "lucide-react";

export interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

interface CommentsProps {
  slug: string;
}

export function Comments({ slug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`blog_comments_${slug}`);
      if (saved) {
        setComments(JSON.parse(saved));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setIsSubmitting(true);

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    const updated = [newComment, ...comments];
    setComments(updated);

    try {
      localStorage.setItem(`blog_comments_${slug}`, JSON.stringify(updated));
    } catch {
      // LocalStorage error fallback
    }

    setText("");
    setIsSubmitting(false);
  };

  const getInitials = (authorName: string) => {
    return authorName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="mt-16 pt-10 border-t-2 border-ink" id="comments">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-rule">
        <MessageSquare className="w-5 h-5 text-red" />
        <h2 className="font-display text-2xl font-bold text-ink uppercase tracking-tight">
          Letters to the Editor {comments.length > 0 && `(${comments.length})`}
        </h2>
      </div>

      {/* Add Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 p-5 sm:p-6 bg-paper-card border border-ink rounded-xs shadow-newspaper"
      >
        <h3 className="font-mono-tag text-xs font-bold text-ink uppercase tracking-wider mb-4 text-red">
          SUBMIT A LETTER
        </h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="comment-name" className="block font-mono-tag text-xs font-bold text-ink uppercase mb-1">
              AUTHOR NAME
            </label>
            <input
              id="comment-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2 text-sm font-serif bg-paper border border-ink focus:outline-none focus:ring-1 focus:ring-red text-ink transition-all placeholder:text-muted"
            />
          </div>

          <div>
            <label htmlFor="comment-text" className="block font-mono-tag text-xs font-bold text-ink uppercase mb-1">
              MESSAGE CONTENT
            </label>
            <textarea
              id="comment-text"
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts, experiences, or feedback..."
              className="w-full px-3.5 py-2 text-sm font-serif bg-paper border border-ink focus:outline-none focus:ring-1 focus:ring-red text-ink transition-all placeholder:text-muted resize-y"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !text.trim()}
              className="btn-primary text-xs py-2 px-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-3.5 h-3.5" />
              <span>DISPATCH LETTER</span>
            </button>
          </div>
        </div>
      </form>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="p-8 text-center bg-paper-card border border-dashed border-rule rounded-xs">
            <User className="w-8 h-8 text-muted mx-auto mb-2 opacity-60" />
            <p className="font-display font-bold text-base text-ink">
              No letters published yet
            </p>
            <p className="font-serif text-xs text-muted mt-1">
              Be the first reader to submit feedback to the editor!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-5 bg-paper-card border border-ink rounded-xs shadow-xs"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-rule">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xs bg-ink text-paper font-mono-tag font-bold text-xs flex items-center justify-center">
                    {getInitials(comment.name)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-ink">
                      {comment.name}
                    </h4>
                    <span className="font-mono-tag text-[10px] text-muted uppercase">
                      {comment.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-serif text-sm text-ink leading-relaxed whitespace-pre-line">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
