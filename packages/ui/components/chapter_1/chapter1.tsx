'use client';

import React from 'react';
import PopUp from '@/packages/ui/block/layout/PopOverComponent/PopOverComponent';
import texts from './textFile';
import ChapterLayout from '../../block/layout/chapterLayout';
import FlowerFrame from '../../block/DecorativeComponents/flowerFrame';

const Chapter_1 = () => {
  return (
    <FlowerFrame>
      <ChapterLayout
        texts={(texts as string[]) ?? []}
        NoFrameKeyword={'no-frame'}
        ChapterNo={1}
      />
    </FlowerFrame>
  );
};

export default Chapter_1;
