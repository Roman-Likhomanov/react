import { render, unmountComponentAtNode } from '@testing-library/react';
import SamuraiJSApp from './App';

test('render without crashing', () => {
  const div = document.createElement('div');
  render(<SamuraiJSApp />, div);
});
