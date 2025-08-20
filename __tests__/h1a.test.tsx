import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { H1A } from '@/ui';

// Just a simple smoke test
describe('h1a', () => {
    it('renders a heading', () => {
        render(<H1A>Heading</H1A>);

        const elem = screen.getByRole('heading');

        expect(elem).toBeInTheDocument();
    });
})
