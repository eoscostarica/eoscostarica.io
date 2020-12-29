import { makeStyles } from '@material-ui/core/styles'

  const useStyles = makeStyles(() => ({
    buttonPrimary: {
        width: '198px',
        height: '60px',
        backgroundColor: '#5484b3',
        fontSize: '21px',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: '#757575',
          color: '#FFF'
        }
    },
    buttonSecondary: {
        width: '198px',
        height: '60px',
        backgroundColor: 'transparent',
        fontSize: '21px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        border: 'solid 1px #979797',
        color: '#000000'
    },
    white: {
        color: '#FFFFFF'
    }
  }))
  
  export default useStyles