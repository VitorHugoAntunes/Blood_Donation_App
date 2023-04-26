import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',

            gray900: '#121214',
            gray800: '#232631',
            gray700: '#202024',
            gray500: '#a0a1a6',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',
            gray50: '#F7F7F7',

            red300: '#D60033',
            red100: '#FBE5EB'
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
})