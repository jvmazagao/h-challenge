import React from 'react';
import StatusCard from '..';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Unit tests StatusCard component', () => {
    it('Should render component', () => {
        render(
            <ThemeProvider theme={theme}>
                <StatusCard color={theme.default.text} bg={theme.default.bg}>
                    <span>A</span>
                </StatusCard>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
    })
})