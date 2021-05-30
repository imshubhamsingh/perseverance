import * as React from 'react';
import {} from 'next/link';
import { useRouter } from 'next/router';
import RoverImage from '~/components/RoverImage/RoverImage';

function RoverIndexedImage() {
  const router = useRouter();
  const { imageIdx } = router.query;
  const idx = Number(imageIdx);

  const redirect = React.useRef(() => {});
  redirect.current = () => router.push('/not-found');

  React.useEffect(() => {
    if (idx && isNaN(idx)) {
      redirect.current();
    }
  }, [idx]);

  function render() {
    if (isNaN(idx)) return null;
    return <RoverImage index={idx} />;
  }

  return render();
}

export default RoverIndexedImage;
