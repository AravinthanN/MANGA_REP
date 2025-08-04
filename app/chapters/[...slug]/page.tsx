// "use client"
import Chapter_1 from '@/packages/ui/components/chapter_1/chapter1';
import { ReactNode } from 'react';
const chapters: Record<string, ReactNode> = {
  'chapter-1': <Chapter_1 />,
  // "chapter-two": ChapterTwo,
  // "chapter-three": ChapterThree,
};
interface PageProps {
  params: Promise<{ slug: string[] }>;
}
export default async function chaptersPage({ params }: PageProps) {
  const slug = (await params).slug?.join('/');

  if (!slug) return <p>Loading...</p>;

  const ChapterComponent = chapters[slug];

  if (!ChapterComponent) return <p>Chapter not found</p>;

  return ChapterComponent;
}
