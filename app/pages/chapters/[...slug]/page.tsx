// "use client"
import Chapter_1 from '@/packages/ui/components/chapter_1/chapter1';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
const chapters: Record<string, ReactNode> = {
  'chapter-1': <Chapter_1 />,
  // "chapter-two": ChapterTwo,
  // "chapter-three": ChapterThree,
};
export default function chaptersPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.join('/');

  if (!slug) return <p>Loading...</p>;

  const ChapterComponent = chapters[slug];

  if (!ChapterComponent) return <p>Chapter not found</p>;

  return ChapterComponent;
}
