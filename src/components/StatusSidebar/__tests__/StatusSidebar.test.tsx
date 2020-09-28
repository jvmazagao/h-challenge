import React from 'react';
import StatusSidebar from '../index';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Unit tests StatusSidebar', () => {
    it('Should render correctly component', () => {
        render(
            <ThemeProvider theme={theme}>
                <StatusSidebar status=''/>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
    })
    it('Should factory the open component', () => {
        render(
            <ThemeProvider theme={theme}>
                <StatusSidebar status='OPEN'/>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
        expect(screen.getByText('Aguardando financeiro')).toBeTruthy();
    })
})