import { testComponent, render } from 'test-utils';
import LazyLoader from '../LazyLoader';

testComponent('LazyLoader', () => {
  it('If the condition is met, render child', () => {
    const { getByText } = render(
      <LazyLoader placeholder={<p>placeholder</p>} current={0} index={0} threshold={10}>
        <p>In test</p>
      </LazyLoader>
    );
    expect(getByText(/In test/g)).toBeInTheDocument();
  });

  it('If the condition is not met, render placeholder', () => {
    const { getByText } = render(
      <LazyLoader placeholder={<p>placeholder</p>} current={0} index={20} threshold={10}>
        <p>In test</p>
      </LazyLoader>
    );
    expect(getByText(/placeholder/g)).toBeInTheDocument();
  });
});
