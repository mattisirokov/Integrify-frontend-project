import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

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
  const [mode, setMode] = React.useState<Theme>('light')
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
