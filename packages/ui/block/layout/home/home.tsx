// pages/index.js
'use client';
import React from 'react';
// import { tabs } from 'helper/chaptersTab/chaptersTab';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import getChaptersTabs from '../../../helper/chaptersTab';

const Home = () => {
  const router = useRouter();
  const goToChapter = (slug: string) => {
    router.push(`/chapters/${slug}`);
  };
  return (
    <>
      <Head>
        <title>The Book Realm</title>
        <meta name="description" content="Step into the world of stories" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black text-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            ஓ
          </h1>
          <p className="text-xl md:text-2xl mb-10 italic text-red-200">
            “A beacon among the darkness.”
          </p>

          <div className="border-4 border-red-600 p-8 rounded-lg bg-black/60 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">chapters</h2>
            <ul className="space-y-2 text-left text-red-300">
              {getChaptersTabs().map((tab, idx) => (
                <li key={idx}>
                  <button onClick={() => goToChapter(tab.path)}>
                    📖 {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

function BookCard({ title, author }: { title: string; author: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">by {author}</p>
    </div>
  );
}
export default Home;
