export const allColors = {
    secu_extralight: '#E5F3FA',
    secu_light: '#49A4D8',
    secu_medium: '#2D7FB0',
    secu_dark: '#125887',

    pop_extralight: '#E3F1F0',
    pop_light: '#4CC6AD',
    pop_medium: '#50B8A8',
    pop_dark: '#1A908A',

    gru_extralight: '#FCE7E8',
    gru_light: '#FF7D7D',
    gru_medium: '#F76666',
    gru_dark: '#DF4949',

    dom_extralight: '#FEF4E9',
    dom_light: '#F9C03D',
    dom_medium: '#F19F2D',
    dom_dark: '#DB8D22',

    ovh_light: '#5DA9E9',
    ovh_medium: '#1C64F2',
    ovh_dark: '#0B2F66',

    scw_light: '#CDBDFF',
    scw_medium: '#7B47FF',
    scw_dark: '#3E1C75',
}

export function getValueColors(theme: string, tone: 'extralight' | 'light' | 'medium' | 'dark') {
    const key = `${theme}_${tone}` as keyof typeof allColors

    return allColors[key]
}

export function getBackgroundColors(theme: string, tone: 'extralight' | 'light' | 'medium' | 'dark') {
    const key = `--color-${theme}-${tone}`
    return `var(${key})`
}

export function getGammeColors(gamme: string) {
    return {
        extralight: getValueColors(gamme, 'extralight'),
        light: getValueColors(gamme, 'light'),
        medium: getValueColors(gamme, 'medium'),
        dark: getValueColors(gamme, 'dark'),
    }
}