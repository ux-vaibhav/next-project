import React from 'react';
import { render } from '@testing-library/react';
import CallDispositionPage from './page'; // Adjust the import path accordingly

jest.mock('./components/call-disposition', () => ({
  CallDispositionForm: jest.fn(() => <div>Mocked CallDispositionForm</div>)
}));

describe('CallDispositionPage Component', () => {
  it('renders CallDispositionPage component', () => {
    const { getByText } = render(<CallDispositionPage />);

    // Replace the text content as needed based on your component's actual output
    expect(getByText('Mocked CallDispositionForm')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<CallDispositionPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
