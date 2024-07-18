
// get device theme mode
import { CHANGE_THEME, CHANGE_THEME_WITH_COLOR } from '../actions/themeActions'
const getInitialTheme = () => {
    if (typeof window !== "undefined") {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
interface Color {
    id: number
    name: string
    mode: string
    mainBgColorLight?: string
    mainBgColorDark?: string
    textDark?: string
    textGray?: string
    bgColor: string
    textLight: string
    textWhite: string
}

export interface InitialState {
    mode: string,
    mainBgColorDark: string
    mainBgColorLight: string
    textDark: string
    textGray: string
    textLight: string
    textWhite: string
    count: number,
    color: Color[]
}

const initialState: InitialState = {
    mode: getInitialTheme() ? "dark" : "light",
    mainBgColorDark: '#282C33',
    mainBgColorLight: '#e3f2fd',
    textDark: '#000000',
    textGray: '#212121',
    textLight: '#ABB2BF',
    textWhite: '#fff',
    count: 0,
    color: [
        {
            id: 1,
            name: "dark gray",
            mode: "dark",
            mainBgColorDark: "#282C33",
            bgColor: "#282C33",
            textDark: "#000000",
            textGray: "#212121",
            textLight: "#ABB2BF",
            textWhite: "#fff"
        },
        {
            id: 2,
            name: "light blue",
            mode: "light",
            mainBgColorLight: "#e3f2fd",
            bgColor: "#e3f2fd",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 3,
            name: "light blue 2",
            mode: "light",
            mainBgColorLight: "#bbdefb",
            bgColor: "#bbdefb",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 4,
            name: "light purple",
            mode: "light",
            mainBgColorLight: "#b39ddb",
            bgColor: "#b39ddb",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 5,
            name: "light gray",
            mode: "light",
            mainBgColorLight: "#bdbdbd",
            bgColor: "#bdbdbd",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 6,
            name: "dark blue",
            mode: "dark",
            mainBgColorDark: "#263238",
            bgColor: "#263238",
            textDark: "#000000",
            textGray: "#212121",
            textLight: "#ABB2BF",
            textWhite: "#fff"
        },
    ],

}

const themeReducer = (state = initialState, action: any) => {
    switch (action?.type) {
        case CHANGE_THEME:
            return {
                ...state,
                mode: action?.payload
            }
        case CHANGE_THEME_WITH_COLOR:
            return {
                ...state,
                count: 1,
                mode: action?.payload?.mode,
                mainBgColorDark: action?.payload?.mainBgColorDark,
                mainBgColorLight: action?.payload?.mainBgColorLight
            }

        default:
            return state
    }

}

export default themeReducer