import { testHook, renderHook } from 'test-utils';
import { useIsMounted } from '../useIsMounted';

testHook('useIsMounted', () => {
  it('Returns boolean true on mount of Component', async () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current).toBe(true);
  });
});
