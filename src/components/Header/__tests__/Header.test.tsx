import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Header Card unit tests', () => {
    it('Should the component render correctly', () => {
        render (
            <ThemeProvider theme={theme}>
                <Header>
                    
                </Header>
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
    })

    it('Should the children component render correctly', () => {
        render (
            <ThemeProvider theme={theme}>
                <Header>
                    <span>Test</span>
                </Header>
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
        expect(screen.getByText('Test')).toBeTruthy();
    })
})