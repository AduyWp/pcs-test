import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	bgWhite: {
	    backgroundColor: "#fff !important",
	    maxWidth: '420px',
	    width: '100%',
	    margin: ' 0 auto',
	    left: '0 !important',
	},
	icon: {
	    color: '#000',
	},
	textRed: {
		color: '#F82F19',
	},
	textGrey: {
		color: '#bcb9b9',
	},
	iconRed: {
		color: '#F82F19',
	},
	marginTopMain: {
		marginTop: '65px',
	},
	backgroundIcon: {
		background: "linear-gradient(90deg, rgba(240,39,35,1) 0%, rgba(195,15,98,1) 80%)",
		height: '50px',
		width: '50px',
		padding: '15px',
		borderRadius: '10px',
	},
	gridItem: {
		display: 'grid',
		gridTemplateColumns: '20% 77%',
		gridColumnGap: '3%',
	},
	gridList: {
		display: 'grid',
		gridTemplateColumns: '75% 22%',
		gridColumnGap: '3%',
	},
	bgLightBlue: {
		backgroundColor: '#D8E5FF',
	},
	absoluteIcon: {
		position: 'absolute',
		right: "-5px",
		bottom: "-5px",
	},
	success: {
		backgroundColor: '#33AF85',
		color: '#fff',
	},
	reject: {
		backgroundColor: '#F82B18',
		color: '#fff',
	},
	processed: {
		backgroundColor: '#3B7EFF',
		color: '#fff',
	},
}));

export default useStyles;