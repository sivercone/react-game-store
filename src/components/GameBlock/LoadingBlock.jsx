import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
   return (
      <ContentLoader className="game_block" speed={2} viewBox="0 0 334 543" backgroundColor="#f3f3f3" foregroundColor="#fff">
         <rect x="0" y="0" rx="0" ry="0" width="330.92" height="441.22" />
         <rect x="0" y="518" rx="0" ry="0" width="330.92" height="22" />
         <rect x="0" y="450" rx="0" ry="0" width="330.92" height="22" />
         <rect x="0" y="485" rx="0" ry="0" width="330.92" height="22" />
      </ContentLoader>
   );
}

export default LoadingBlock;
