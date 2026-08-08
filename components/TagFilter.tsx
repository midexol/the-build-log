"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

const ALL = "all";

interface TagFilterProps {
  tags: string[];
}

function TagFilterInner({ tags }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("tag") ?? ALL;

  function select(tag: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === ALL) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => select(ALL)}
        className={`tag-pill cursor-pointer border-none ${active === ALL ? "active" : ""}`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => select(tag)}
          className={`tag-pill cursor-pointer border-none ${active === tag ? "active" : ""}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default function TagFilter({ tags }: TagFilterProps) {
  return (
    <Suspense>
      <TagFilterInner tags={tags} />
    </Suspense>
  );
}
