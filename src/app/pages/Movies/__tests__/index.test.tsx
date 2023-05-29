import * as React from 'react';
import { render } from '@testing-library/react';

import { Movies } from '..';

describe('<Movies  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Movies />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
