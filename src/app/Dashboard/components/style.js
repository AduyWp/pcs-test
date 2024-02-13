import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	bgWhite: {
	    backgroundColor: "#fff !important",
	    boxShadow: 'unset !important',
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
	iconRed: {
		color: '#F82F19',
	},
	backgroundCard: {
		background: "linear-gradient(90deg, rgba(240,39,35,1) 0%, rgba(195,15,98,1) 80%)",
		borderRadius: "1rem",
	},
	large: {
	    width: theme.spacing(7),
	    height: theme.spacing(7),
	},
	textWhiteGrey:{
		color: "#EFACC0",
	},
	paddingBottom: {
		paddingBottom: "16px !important",
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '32% 32% 32%',
		gridColumnGap: '2%',
	},
	sliderContainer: {
	    width: 350,
	    height: 'fit-content',
	    border: "10px solid white",
	    boxSizing: "border-box",
	},
	radius: {
		borderRadius: "1rem",
	},
	largeOnline: {
	    width: '48px !important',
	    height: '48px !important',
	    border: "2px solid #fff",
	},
	onlineContainer: {
		'&:not(:first-child) .avatar-online' : {
		  marginLeft: "-10px",
		}
	},
	backgroundMore: {
		background: "linear-gradient(90deg, rgba(240,39,35,1) 0%, rgba(195,15,98,1) 80%)",
		borderRadius: '50%',
		marginLeft: "-10px",
		lineHeight: '16px',
	    display: 'flex',
	    alignItems: 'center',
	},
	marginLeftMin: {
		marginLeft: '-10px'
	},
	marginBottom: {
		marginBottom: '130px',
	},
	marginTopMain: {
		marginTop: '80px',
	},
}));

export default useStyles;