import React from 'react';
import MoneyStatement from '../MoneyStatement';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Unit test MoneyStatement component', () => {
    it('Should render correctly the component', () => {
        render(
            <ThemeProvider theme={theme}>
                <MoneyStatement currencyDeclared='USD' declared={0} received={0} />
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
    })

    it('Should be able to get received values', () => {
        render(
            <ThemeProvider theme={theme}>
                <MoneyStatement currencyDeclared='USD' declared={10} received={100} />
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
        const received = screen.getByText('R$100.00');
        expect(received).toBeTruthy();
    })
    it('Should be able to get declared values', () => {
        render(
            <ThemeProvider theme={theme}>
                <MoneyStatement currencyDeclared='USD' declared={10} received={100} />
            </ThemeProvider>
        )
        expect(screen).toBeTruthy();
        const declared = screen.getByText('$10.00');
        expect(declared).toBeTruthy();
    })
})