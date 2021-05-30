import * as React from 'react';

interface ILazyLoader {
  threshold: number;
  current: number;
  index: number;
  children: React.ReactElement;
  placeholder: React.ReactElement;
}

function LazyLoader(props: ILazyLoader) {
  const { current, threshold, index, placeholder } = props;
  // For now using this logic, later on can use other huristic logic too.
  const showChild = current + threshold > index;
  const isMounted = React.useRef(false);
  if (!showChild && !isMounted.current) {
    return placeholder;
  }
  isMounted.current = true;
  return props.children;
}

LazyLoader.defaultProps = {
  threshold: 10,
};

export default LazyLoader;
