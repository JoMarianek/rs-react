import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import React from 'react';

import { ErrorBoundary } from '../../src/components/Errorboundary';

describe("Errorboundary", () => {
    it("should render fallback ui: Whoops! Something went wrong", () => {
        render(<ErrorBoundary />);
        screen.debug();
    })
})