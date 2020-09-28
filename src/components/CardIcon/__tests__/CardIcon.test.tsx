import React from 'react';
import CardIcon from '../CardIcon';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';
import {CardType} from '../types';

describe('Card icon unit tests', () => {
    it('Should render component correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <CardIcon type={''} date={0}/>
            </ThemeProvider>
        );
        expect(screen).toBeTruthy();
    })
    it('Should render FaMoneyCheck component', () => {
        render(
            <ThemeProvider theme={theme}>
                <CardIcon type={CardType.CREATED} date={1585710000000}/>
            </ThemeProvider>
        );

        expect(screen).toBeTruthy();
        expect(screen.getByTestId('money')).toBeTruthy();
        expect(screen.getByText('4/1/2020')).toBeTruthy();
    })
    it('Should render FaConciergeBell component', () => {
        render(
            <ThemeProvider theme={theme}>
                <CardIcon type={CardType.HOTEL} date={1585710000000}/>
            </ThemeProvider>
        );

        expect(screen).toBeTruthy();
        expect(screen.getByTestId('concierge-bell')).toBeTruthy();
        expect(screen.getByText('4/1/2020')).toBeTruthy();
    })
    it('Should render FaMoneyCheck - green component', () => {
        render(
            <ThemeProvider theme={theme}>
                <CardIcon type={CardType.SUBMMITED} date={1585710000000}/>
            </ThemeProvider>
        );

        expect(screen).toBeTruthy();
        expect(screen.getByTestId('money-green')).toBeTruthy();
        expect(screen.getByText('4/1/2020')).toBeTruthy();
    })
    it('Should render FaDiaspora', () => {
        render(
            <ThemeProvider theme={theme}>
                <CardIcon type={CardType.EVALUATING} date={1585710000000}/>
            </ThemeProvider>
        );

        expect(screen).toBeTruthy();
        expect(screen.getByTestId('diaspora')).toBeTruthy();
        expect(screen.getByText('4/1/2020')).toBeTruthy();
    })
    it('Should render FaUtensils', () => {
        render(
            <ThemeProvider theme={theme}>
                <CardIcon type={CardType.FOOD} date={1585710000000}/>
            </ThemeProvider>
        );

        expect(screen).toBeTruthy();
        expect(screen.getByTestId('utensils')).toBeTruthy();
        expect(screen.getByText('4/1/2020')).toBeTruthy();
    })
})