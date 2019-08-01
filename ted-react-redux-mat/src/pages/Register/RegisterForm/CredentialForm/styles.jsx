import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    fields: {
        marginTop: theme.spacing.unit * 2
    },
    textField: {
        width: '100%',
        '& + & ': {
            marginTop: theme.spacing.unit * 2
        }
    },
}));
