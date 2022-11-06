import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { amber, grey, deepOrange, blueGrey } from '@mui/material/colors'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

type ColorModeProviderProps = {
  children: React.ReactNode
}
export type Theme = 'light' | 'dark'

export default function ColorModeProvider({
  children,
}: ColorModeProviderProps) {
  const [mode, setMode] = React.useState<Theme>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                secondary: grey,
                divider: amber[200],
                highlight: deepOrange[900],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                typography: {
                  fontfamily: ['Poppins', 'sans-serif'].join(','),
                },
              }
            : {
                // palette values for dark mode
                primary: blueGrey,
                divider: deepOrange[700],
                highlight: '#ddf472',
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: '#ffff',
                  secondary: grey[200],
                },
                typography: {
                  fontfamily: ['Poppins', 'sans-serif'].join(','),
                },
              }),
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
