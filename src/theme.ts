import { createMuiTheme }  from '@material-ui/core/styles'

const themes = {
    dark: createMuiTheme({
        palette: {
          type: 'dark',
        },
    }),
    light: createMuiTheme()
};

export default themes