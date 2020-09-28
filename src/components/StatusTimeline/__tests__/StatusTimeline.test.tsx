import React from 'react';
import StatusTimeline from '..';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Unit test StatusTimeline', () => {
    it('Should render component correctly', () => {
        render (
            <ThemeProvider theme={theme}>
                <StatusTimeline status=''/>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
    })
    it('Factory component PENDING', () => {
        render (
            <ThemeProvider theme={theme}>
                <StatusTimeline status='PENDING'/>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
        const pendente = screen.getByText('Pendente');
        expect(pendente).toBeTruthy();
    })
    it('Factory method component APPROVED', () => {
        render (
            <ThemeProvider theme={theme}>
                <StatusTimeline status='APPROVED'/>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
        const aprovado = screen.getByText('Aprovado');
        expect(aprovado).toBeTruthy();
    })
    it('Factory method component REJECTED', () => {
        render (
            <ThemeProvider theme={theme}>
                <StatusTimeline status='REJECTED'/>
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
        const rejeitado = screen.getByText('Rejeitado');
        expect(rejeitado).toBeTruthy();
    })
})