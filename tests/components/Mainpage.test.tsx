import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import App from '../../src/views/Mainpage';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Main Page', () => {
    it('should render throw error button', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        screen.debug();
        const button = await screen.findByRole('button', {name: 'Throw Error'});
        expect(button).toBeInTheDocument();
    })
})