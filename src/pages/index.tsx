import * as React from 'react';
import Link from 'next/link';
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
        <SlideShow speed={speed ? Number(speed) : undefined} autoplay={true}>
          {new Array(data.numImages).fill(1).map((_, idx) => (
            <Link href={`/${idx}`} key={idx}>
              <a rel='noopener noreferrer' target='_blank'>
                <RoverImage index={idx} />
              </a>
            </Link>
          ))}
        </SlideShow>
      )}
    </>
  );
}

export default HomePage;
