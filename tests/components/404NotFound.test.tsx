import React from 'react'
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/vitest'

import PageNotFound from '@/views/404NotFound'
import { MemoryRouter } from 'react-router-dom'

describe('404', () => {
    it('should render 404 message', () => {
        render(
            <MemoryRouter>
                <PageNotFound/>
            </MemoryRouter>
        );
        const heading = screen.getByRole('heading', {level: 2})
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('404 - Page not found')
    })
})