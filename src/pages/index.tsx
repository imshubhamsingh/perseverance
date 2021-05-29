import React from 'react';
import { useRouter } from 'next/router';
import Image from '~/components/Image/Image';
import SlideShow from '~/components/SlideShow/SlideShow';
import { useRoverImageRange } from '~/hooks/useRoverImage';
import { getTitle } from '~/utils/rover';

function HomePage() {
  const { images, isLoading, isError } = useRoverImageRange(0, 5);
  const router = useRouter();
  const { speed } = router.query;
  return (
    <main>
      {isLoading && <p>Loading ... </p>}
      {isError && <p>Image Not present</p>}
      {images && (
        <SlideShow speed={Number(speed)}>
          {images.map((image) => (
            <Image
              key={image.metadata.id}
              src={image.images.base64}
              alt={String(image.metadata.id)}
              title={getTitle(image)}
              ariaLabel={getTitle(image)}
            />
          ))}
        </SlideShow>
      )}
    </main>
  );
}

export default HomePage;
