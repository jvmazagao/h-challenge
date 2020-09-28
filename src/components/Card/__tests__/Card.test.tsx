import React from 'react';
import Card from '../Card';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Unit Test Card', () => {
    it('Should render correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card />
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
    })
})