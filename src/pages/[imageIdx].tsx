import React from 'react';
import { useRouter } from 'next/router';

import Image from '~/components/Image/Image';

import { useRoverImage } from '~/hooks/useRoverImage';
import { getTitle } from '~/utils/rover';

function RoverImage() {
  const router = useRouter();
  const { imageIdx } = router.query;
  const { image, isLoading, isError } = useRoverImage(Number(imageIdx));
  return (
    <main>
      {isLoading && <p>Loading ... </p>}
      {isError && <p>Image Not present</p>}
      {image && (
        <Image
          src={image.images.base64}
          alt={String(image.metadata.id)}
          title={getTitle(image)}
          ariaLabel={getTitle(image)}
        />
      )}
    </main>
  );
}

export default RoverImage;
