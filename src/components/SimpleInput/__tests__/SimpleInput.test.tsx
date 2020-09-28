import React from 'react';
import SimpleInput from '../SimpleInput';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('SimpleInput unit tests', () => {
    it('Should render component correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <SimpleInput value='' setValue='' placeholder=''/>
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
    })
    it('Should catch input by placeholder', () => {
        render(
            <ThemeProvider theme={theme}>
                <SimpleInput value='' setValue='' placeholder='Placeholder test'/>
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
        const input = screen.getByPlaceholderText('Placeholder test');
        expect(input).toBeTruthy();
    })
    it('Should expect default value when placeholder props not received', () => {
        render(
            <ThemeProvider theme={theme}>
                <SimpleInput value='' setValue=''/>
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
        const input = screen.getByPlaceholderText('Digite aqui');
        expect(input).toBeTruthy();
    })
    it('Should handle change of the input', () => {
        const props = {
            value: '',
            setValue: jest.fn(),
            placeholder: 'Set Value'
        }
        
        render(
            <ThemeProvider theme={theme}>
                <SimpleInput {...props}/>
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
        const input = screen.getByPlaceholderText('Set Value');
        expect(input).toBeTruthy();
        fireEvent.change(input, {target: {value: 'Another'}});
        expect(props.setValue).toHaveBeenCalled();
    })
})