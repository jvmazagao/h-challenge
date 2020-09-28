import React from 'react';
import AttachmentButton from '../AttachmentButton';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../../theme/theme';

describe('Unit test AttachmentButton component', () => {
    it('Expect AttachmentButton to be rendered correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <AttachmentButton>
                    <div>a</div>
                </AttachmentButton> 
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
    })
    it('Expect Attachment Button to receive correctly and click div', () => {
        const props = {
            url: 'test.json',
        }
        window.open = jest.fn().mockReturnValue(() => props.url);

        render(
            <ThemeProvider theme={theme}>
                <AttachmentButton {...props}>
                    <div>a</div>
                </AttachmentButton> 
            </ThemeProvider>
        )

        expect(screen).toBeTruthy();
        fireEvent.click(screen.getByText('a'));
        expect(window.open(props.url)).toBeTruthy();
    })


})