import type { Config } from 'tailwindcss';

export default <Config>{
    theme: {
        extend: {
            colors: {
                secu: {
                    extra_light: '#E5F3FA',
                    light: '#49A4D8',
                    medium: '#2D7FB0',
                    dark: '#125887'
                },
                pop: {
                    extra_light: '#E3F1F0',
                    light: '#4CC6AD',
                    medium: '#50B8A8',
                    dark: '#1A908A'
                },
                gru: {
                    extra_light: '#FCE7E8',
                    light: '#FF7D7D',
                    medium: '#F76666',
                    dark: '#DF4949'
                },
                dom: {
                    extra_light: '#FEF4E9',
                    light: '#F9C03D',
                    medium: '#F19F2D',
                    dark: '#DB8D22'
                },
                ovh: {
                    light: '#5DA9E9',
                    medium: '#1C64F2',
                    dark: '#0B2F66'
                },
                scw: {
                    light: '#CDBDFF',
                    medium: '#7B47FF',
                    dark: '#3E1C75'
                }
            }
        }
    },
    safelist: [
        {
            pattern: /(bg|text)-\[var\(--color-(secu|pop|gru|dom)-(extralight|light|medium|dark)\)\]/,
            variants: ['hover', 'active'],
        }
    ]
};