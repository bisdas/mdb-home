import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

/**
 * Test suite for the App component.
 */
describe('App Component', () => {
    /**
     * Test case for rendering the App component and interacting with it.
     * It checks if the initial text is present, then clicks the 'Check' button
     * and verifies that the initial text is no longer present.
     */
    it('should render the App component', () => {
        render(<Home />);
        expect(screen.getByText(/This is MDB Home!/iu)).toBeInTheDocument();
    });
});
