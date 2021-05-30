import * as React from 'react';
import { useRouter } from 'next/router';
import RoverImage from '~/components/RoverImage/RoverImage';
import { useIsMounted } from '~/hooks/useIsMounted';

import type CustomError from '~/interface/CustomError';

function RoverIndexedImage() {
  const router = useRouter();
  const { imageIdx } = router.query;
  const idx = Number(imageIdx);

  const isMounted = useIsMounted();

  const redirect = React.useRef(() => {});
  redirect.current = () => router.push('/not-found');

  React.useEffect(() => {
    if (imageIdx && isNaN(idx)) {
      redirect.current();
    }
  }, [idx, imageIdx]);

  function onError(err: CustomError) {
    if (err?.customData?.status === 404) {
      redirect.current();
    }
  }

  function render() {
    if (isNaN(idx)) return null;
    return <RoverImage index={idx} onError={onError} />;
  }

  if (!isMounted) {
    return <RoverImage.Placeholder />;
  }

  return render();
}

export default RoverIndexedImage;
