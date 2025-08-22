'use client';

import React from 'react';
import texts from './textFile';
// import ChapterLayout from '../../block/layout/chapterLayout';
import FlowerFrame from '../../block/DecorativeComponents/flowerFrame';
import { TextType } from '../../types/chaptertypes';
import ChapterLayout from '../../block/layout/chapterLayout';

const Chapter_1 = () => {
  return (
    // <FlowerFrame>
    <ChapterLayout
      texts={(texts as TextType[]) ?? []}
      NoFrameKeyword={'no-frame'}
      ChapterNo={1}
    />
    // </FlowerFrame>
  );
};

export default Chapter_1;
