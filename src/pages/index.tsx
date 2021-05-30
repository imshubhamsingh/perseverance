import * as React from 'react';
import { useRouter } from 'next/router';

import RoverImage from '~/components/RoverImage/RoverImage';
import SlideShow from '~/components/SlideShow/SlideShow';

import { useTotalRoverImageSize } from '~/hooks/useRoverImage';

function HomePage() {
  const { data, isLoading, isError } = useTotalRoverImageSize();
  const router = useRouter();
  const { speed } = router.query;
  return (
    <>
      {isLoading && <p>Loading ... </p>}
      {isError && <p>Image Not present</p>}
      {data && (
        <SlideShow
          speed={speed ? Number(speed) : undefined}
          autoplay={true}
          style={{
            width: 384,
            height: 288,
            borderRadius: 8,
          }}
          lazyLoaderConfig={{
            placeholder: <RoverImage.Placeholder />,
            threshold: 10
          }}
        >
          {new Array(data.numImages).fill(1).map((_, idx) => (
            <RoverImage key={idx} index={idx} />
          ))}
        </SlideShow>
      )}
    </>
  );
}

export default HomePage;
