import { css } from '@emotion/react';
import { theme } from './theme'

export const styles = {
    root: css({
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    navBar: css({
      background: theme.palette.primary.main,
      height: 50,
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      padding: 16,
      borderRadius: 0,
      p: {
        color: 'white',
      },
    }),
    body: css({
      alignSelf: 'stretch',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    heading: css({ marginTop: 16, fontSize: '2.75rem', textAlign: 'center' }),
    subtitle: css({
      fontWeight: 300,
      textAlign: 'center',
      maxWidth: 600,
      margin: '24px 0',
      color: 'rgba(0, 0, 0, 0.6)',
    }),
    mainControls: css({
      display: 'flex',
      alignItems: 'center',
      button: { marginRight: 16 },
    }),
    dataInput: css({
      alignSelf: 'stretch',
      margin: '32px 0',
    }),
  };
