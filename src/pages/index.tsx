import * as React from 'react';
import { useRouter } from 'next/router';

import RoverImage from '~/components/RoverImage/RoverImage';
import SlideShow from '~/components/SlideShow/SlideShow';

import { useTotalRoverImageSize } from '~/hooks/useRoverImage';
import { useIsMounted } from '~/hooks/useIsMounted';

function HomePage() {
  const { data, isError, isLoading } = useTotalRoverImageSize();
  const router = useRouter();
  const { speed } = router.query;
  const isMounted = useIsMounted();
  if (!isMounted || isLoading) {
    return <RoverImage.Placeholder />;
  }
  return (
    <>
      {isError && <p className='text-white text-1x'>Error in fetching images</p>}
      {data && (
        <SlideShow
          speed={speed ? Number(speed) : undefined}
          autoplay={true}
          style={{
            width: 368,
            height: 'auto',
            borderRadius: 8,
          }}
          lazyLoaderConfig={{
            placeholder: <RoverImage.Placeholder />,
            threshold: 10,
          }}
        >
          {new Array(data.numImages).fill(1).map((_, idx) => (
            <RoverImage index={idx} key={idx} />
          ))}
        </SlideShow>
      )}
    </>
  );
}

export default HomePage;
