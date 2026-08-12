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
    <section className="mt-16 pt-10 border-t border-slate-200" id="comments">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-8">
        <MessageSquare className="w-5 h-5 text-blue-900" />
        <h2 className="text-xl font-bold text-slate-900">
          Comments {comments.length > 0 && `(${comments.length})`}
        </h2>
      </div>

      {/* Add Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 p-5 sm:p-6 bg-white border border-slate-200 rounded-xl shadow-xs"
      >
        <h3 className="text-sm font-semibold text-slate-900 mb-4">
          Leave a comment
        </h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="comment-name" className="block text-xs font-medium text-slate-700 mb-1">
              Your Name
            </label>
            <input
              id="comment-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="comment-text" className="block text-xs font-medium text-slate-700 mb-1">
              Comment
            </label>
            <textarea
              id="comment-text"
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts, experiences, or feedback..."
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900 transition-all placeholder:text-slate-400 resize-y"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !text.trim()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white font-semibold text-xs rounded-lg hover:bg-blue-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Comment</span>
            </button>
          </div>
        </div>
      </form>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl">
            <User className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
            <p className="text-sm font-medium text-slate-600">
              No comments yet
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Be the first to share your thoughts on this story!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-900/10 text-blue-900 font-bold text-xs flex items-center justify-center border border-blue-900/20">
                    {getInitials(comment.name)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {comment.name}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {comment.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed pl-11 whitespace-pre-line">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
