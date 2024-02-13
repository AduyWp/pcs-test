import useStyles from './style';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import UpdateIcon from '@material-ui/icons/Update';
import TimerIcon from '@material-ui/icons/Timer';
import Carousel from "react-simply-carousel";
import moment from "moment";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Content = (props) => {
  const {
    router,
    activeSlide,
    setActiveSlide,
    dataNews,
    dataOnline
  } = props;

  const styles = useStyles();
  
  return (
    <>
      <AppBar position="fixed" className={classNames(styles.bgWhite)}>
        <Toolbar className={classNames(styles.padding, "px-4 flex items-center justify-between w-full")}>
          <h2 className={classNames(styles.textRed, 'text-2xl text-black font-bold mb-0')}>
            KerjaYuk!
          </h2>
          <NotificationsNoneIcon onClick={() => router.push('/notification')} className={styles.icon} />
        </Toolbar>
      </AppBar>
      <main className={classNames(styles.marginTopMain, "min-h-screenr")}>
        <div className="mt-3 px-4 relative">
          <p className='text-sm text-black font-normal mb-0'>
            Hi, Good Morning
          </p>
        </div>
        <div className="px-4 mt-2">
          <Card className={styles.backgroundCard}>
            <CardContent className={styles.paddingBottom}>
              <div className="flex justify-between">
                <div className="flex">
                  <Avatar className={styles.large}>T</Avatar>
                  <div className="ml-2">
                    <p className="text-white text-sm">Tabay</p>
                    <p className={classNames(styles.textWhiteGrey, "text-white italic text-xs")}>UI/IX Designer</p>
                  </div>
                </div>
                <div>
                  <p className={classNames(styles.textWhiteGrey, "italic text-xs")}>Member Since</p>
                  <p className="text-white text-sm">01 Juni 2021</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="mt-3">
                  <p className={classNames(styles.textWhiteGrey, "italic text-xs")}>Location</p>
                  <p className="text-white text-sm">Kantor Sahid</p>
                </div>
                <p className={classNames(styles.textWhiteGrey, "italic text-xs uppercase")}>Ico</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="px-4 mt-6">
          <div>
            <p className='text-sm text-black font-semibold mb-0'>
              Today's activity
            </p>
          </div>
          <div className={classNames(styles.grid, "mt-3")}>
            <div className="text-center">
              <AccessTimeIcon fontSize="large" className={classNames(styles.iconRed, "mb-2")} />
              <p className="text-black font-bold text-sm">8.30</p>
              <p className="text-black text-xs mt-1">Check In</p>
            </div>
            <div className="text-center">
              <UpdateIcon fontSize="large" className={classNames(styles.iconRed, "mb-2")} />
              <p className={classNames(styles.textRed, "font-bold text-sm")}>03:00:00</p>
              <p className="text-black text-xs mt-1">Working Hours</p>
            </div>
            <div className="text-center">
              <TimerIcon fontSize="large" className={classNames(styles.iconRed, "mb-2")} />
              <p className="text-black text-sm">--:--</p>
              <p className="text-black text-xs mt-1">Check Out</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="px-4">
            <p className='text-sm text-black font-semibold mb-0'>
              PCS News
            </p>
          </div>
          <div className="mt-3">
            <Carousel
              containerProps={{
                style: {
                  width: "100%",
                  justifyContent: "space-between",
                  userSelect: "none"
                }
              }}
              preventScrollOnSwipe
              swipeTreshold={60}
              activeSlideIndex={activeSlide}
              onRequestChange={setActiveSlide}
              dotsNav={{
                show: true,
                itemBtnProps: {
                  style: {
                    height: 12,
                    width: 12,
                    borderRadius: "50%",
                    border: 0,
                    background: "#D9D9D9",
                    marginRight: '5px',
                    marginTop: '10px',
                  }
                },
                activeItemBtnProps: {
                  style: {
                    height: 12,
                    width: 12,
                    borderRadius: "50%",
                    border: 0,
                    background: "#F82B18",
                    marginRight: '5px',
                    marginTop: '10px',
                  }
                }
              }}
              itemsToShow={2}
              speed={400}
              centerMode
            >
              {dataNews.map((item, index) => (
                <div
                  key={index}
                  className={classNames(styles.sliderContainer)}
                >
                  <div className={classNames(styles.radius, "px-5 py-5 shadow-lg")}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="shadow-md" src={item.avatar} />
                        <p className={classNames(styles.textRed, "ml-3 text-sm")}>{item.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-black">{moment(item.date).format("dddd")}</p>
                        <p className="text-xs text-black">{moment(item.date).format("DD MMMM YYYY")}</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-sm text-black">{item.desc}</p>
                      <p className="text-sm text-black">{item.desc1}</p>
                      <p className="text-sm text-black">{item.desc2}</p>
                      <p className="text-sm text-black">{item.desc3}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className={classNames(styles.marginBottom, "mt-3 px-4")}>
          <div>
            <p className='text-sm text-black font-semibold mb-0'>
              Online
            </p>
          </div>
          <div className="mt-2">
            <Card className={classNames(styles.radius, "shadow-lg")}>
              <CardContent className={styles.paddingBottom}>
                <div className="flex flex-wrap justify-center">
                  {dataOnline.map((item, index) => (
                    <div key={index} className={classNames(styles.onlineContainer, "text-center")}>
                      <Avatar className={classNames(styles.largeOnline, "avatar-online")} src={item.avatar} />
                      <p className={classNames(styles.marginLeftMin, "text-xs font-bold")}>{item.name}</p>
                      <p className={classNames(styles.marginLeftMin, "text-xs mt-1")}>{item.office}</p>
                    </div>
                  ))}
                  <div className="text-center">
                    <p className={classNames(styles.backgroundMore, styles.largeOnline, "text-white text-sm")}>10 More</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;