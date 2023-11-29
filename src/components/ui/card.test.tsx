import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for toHaveClass matcher
import renderer from 'react-test-renderer';

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from './card'; // Adjust the import path accordingly

describe('Card Component', () => {
  test('renders Card component with proper styles and classes', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass(
      'rounded-lg border bg-card text-card-foreground shadow-sm'
    );
  });

  test('Card component snapshot', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders CardHeader component with proper styles and classes', () => {
    const { container } = render(<CardHeader />);
    expect(container.firstChild).toHaveClass('flex flex-col space-y-1.5 p-6');
  });

  test('renders CardTitle component with proper styles and classes', () => {
    const { container } = render(<CardTitle />);
    expect(container.firstChild).toHaveClass(
      'text-2xl font-semibold leading-none tracking-tight'
    );
  });

  test('renders CardFooter component with proper styles and classes', () => {
    const { container } = render(<CardFooter />);
    expect(container.firstChild).toHaveClass('flex items-center p-6 pt-0');
  });

  test('renders CardDescription component with proper styles and classes', () => {
    const { container } = render(<CardDescription />);
    expect(container.firstChild).toHaveClass('text-sm text-muted-foreground');
  });

  test('renders CardContent component with proper styles and classes', () => {
    const { container } = render(<CardContent />);
    expect(container.firstChild).toHaveClass('p-6 pt-0');
  });
});
