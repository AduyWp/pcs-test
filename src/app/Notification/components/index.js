import useStyles from './style';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Content = (props) => {
  const {
    router,
  } = props;

  const styles = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classNames(styles.bgWhite)}>
        <Toolbar className={classNames(styles.padding, "px-4 flex items-center")}>
          <ArrowBackIcon onClick={() => router.push('/')} className={classNames(styles.icon, "font-bold mr-2")} />
          <h2 className={classNames(styles.textRed, 'text-2xl text-black font-bold mb-0')}>
            Notification
          </h2>
        </Toolbar>
      </AppBar>
      <main className={classNames(styles.marginTopMain, "min-h-screenr")}>
        <div className={styles.bgLightBlue}>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/coins.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.success)} size="small">
                  <DoneIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Reimbursement</p>
                <p className="text-black text-sm">Your submission <span className="italic">"Lorem ipsum dolor sit amet..."</span> with the with a total cost of 50,000 has been <span className="font-bold">paid</span> please check your BRIMO application, Thank you</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>Today</p>
          </div>
        </div>
        <div>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/coins.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.reject)} size="small">
                  <ClearIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Reimbursement</p>
                <p className="text-black text-sm">Your submission "description" has been <span className="font-bold">rejected</span> please click for detail.</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>Yesterday</p>
          </div>
        </div>
        <div className={styles.bgLightBlue}>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/coins.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.processed)} size="small">
                  <ArrowForwardIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Reimbursement</p>
                <p className="text-black text-sm">Your submission will be <span className="font-bold">processed</span> according to the reimbursement schedule. Please wait</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-06</p>
          </div>
        </div>
        <div className={styles.bgLightBlue}>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/capsule.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.success)} size="small">
                  <DoneIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Sickness</p>
                <p className="text-black text-sm">Your submission has been <span className="font-bold">approved</span> by the supervisor</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-05</p>
          </div>
        </div>
        <div>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/capsule.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.reject)} size="small">
                  <ClearIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Sickness</p>
                <p className="text-black text-sm">Your submission has been <span className="font-bold">rejected</span> please confirm with your supervisor.</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-05</p>
          </div>
        </div>
        <div>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/capsule.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.processed)} size="small">
                  <ArrowForwardIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Sickness</p>
                <p className="text-black text-sm">Your submission is being <span className="font-bold">reviewed</span> to the supervisor for the approval process, please wait</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-05</p>
          </div>
        </div>
        <div className={styles.bgLightBlue}>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/alarm-clock.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.success)} size="small">
                  <DoneIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Overtime</p>
                <p className="text-black text-sm">Your submission has been <span className="font-bold">approved</span> by the supervisor</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-05</p>
          </div>
        </div>
        <div>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/alarm-clock.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.reject)} size="small">
                  <ClearIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Overtime</p>
                <p className="text-black text-sm">Your submission has been <span className="font-bold">rejected</span> please confirm with your supervisor.</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-05</p>
          </div>
        </div>
        <div>
          <div className={classNames(styles.gridList, "px-4 py-3")}>
            <div className={styles.gridItem}>
              <div className={classNames(styles.backgroundIcon, 'shadow-lg relative')}>
                <img src="/assets/alarm-clock.png" />
                <IconButton aria-label="delete" className={classNames(styles.absoluteIcon, styles.processed)} size="small">
                  <ArrowForwardIcon fontSize="inherit" />
                </IconButton>
              </div>
              <div className="ml-0">
                <p className="text-black font-bold">Overtime</p>
                <p className="text-black text-sm">Your submission is being <span className="font-bold">reviewed</span> to the supervisor for the approval process, please wait</p>
              </div>
            </div>
            <p className={classNames(styles.textGrey, "text-right text-sm")}>2022-10-05</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;