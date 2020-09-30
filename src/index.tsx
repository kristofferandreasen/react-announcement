import * as React from 'react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiX } from "react-icons/fi";
import { isMobile } from 'react-device-detect';
import { animationKeyframes } from "./animations";

interface ComponentProps {
  
  /** The title of the announcement. */
  title: string,

  /** The general card text on the announcement. */
  subtitle: string,

  /** 
   * The image source string used on the left side of the image.
   * Use a square image for the best results.
   * Dimensions are 68x68 pixels.
   */
  imageSource: string,

  /** The link used when the announcement is clicked. */
  link: string,

  /** 
   * An optional property specifying the number of days
   * the cookie will live before the announcement is
   * shown again to a user.
   */
  daysToLive?: number,

  /** 
   * The number of seconds a user has to
   * keep the page open before the
   * announcement is shown.
   */
  secondsBeforeBannerShows?: number,

  /**
   * Change the size of the close icon shown
   * in the top right corner of the announcement.
   */
  closeIconSize?: number,

  /**
   * Change the duration of the fade-in animation (defaults to 1000ms)
   */
  animateInDuration?: number;
  
  /**
   * Change the duration of the fade-out animation (defaults to 300ms)
   */
  animateOutDuration?: number;
}

interface AnimationParams extends Pick<ComponentProps, "animateInDuration" | "animateOutDuration"> {
  showAnimation: boolean,
}

const Announcement: React.FunctionComponent<ComponentProps> = ({ title, subtitle, imageSource, link, daysToLive, secondsBeforeBannerShows, closeIconSize, animateInDuration, animateOutDuration }) => {
  const [cookies, setCookie] = useCookies(['banner']);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  let today: Date = new Date();
  let expirationDate: Date = new Date();
  expirationDate.setDate(today.getDate() + (daysToLive !== undefined ? daysToLive : 5));
  const secondsBeforeBanner = (secondsBeforeBannerShows !== undefined ? secondsBeforeBannerShows * 1000 : 7000);

  useEffect(() => {

    const createAnnouncement = (): void => {
      setTimeout(() => {
        if (cookies.banner !== 'shown' && showBanner === false) {
          setShowBanner(true);
          setCookie('banner', 'shown', {
            expires: expirationDate
          });
        }
      }, secondsBeforeBanner);
    };

    createAnnouncement();
  }, [cookies.banner, expirationDate, secondsBeforeBanner, setCookie, showBanner])

  /**
   * Executed when the announcement
   * is clicked and opens the link
   * in a new window.
   */
  const openLink = (): void => {
    window.open(link, "_blank");
  };

  /**
   * Executes when the close icon
   * is clicked. Creates the fadeout
   * animation and hides the banner
   * from the page.
   */
  const fadeOut = (): void => {
    setShowAnimation(false);

    setTimeout(() => {
        setShowBanner(false);
    }, animateOutDuration || 300);
  };

  /**
   * Truncates a string when it is
   * too long to display in the component.
   * @param text 
   */
  const truncate = (text: string): string => {
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  return showBanner ? (
    <>
      <style children={animationKeyframes} />
      <div style={{...bannerCard, ...animationStyles({showAnimation, animateInDuration, animateOutDuration})}}>
        <img onClick={openLink} style={imageStyle} src={imageSource} alt="Banner" />
        <div onClick={openLink} style={textWrapper}>
          <h3 style={titleStyle}>{title}</h3>
          <p style={subtitleStyle}>{truncate(subtitle)}</p>
        </div>
        <FiX style={closeIcon} size={closeIconSize} onClick={fadeOut} />
      </div>
    </>
  ) : null
}

Announcement.defaultProps = {
  daysToLive: 7,
  secondsBeforeBannerShows: 1,
  closeIconSize: 30,
  animateInDuration: 1000,
  animateOutDuration: 300
} as Partial<ComponentProps>;

const bannerCard = {
  position: 'fixed',
  left: (isMobile ? 0 : 30),
  bottom: (isMobile ? 0 : 30),
  width: (isMobile ? '' : 'auto'),
  maxWidth: 440,
  zIndex: 2147483647,
  display: 'flex',
  justifyContent: 'left',
  padding: 14,
  fontFamily: 'inherit',
  borderRadius: (isMobile ? 0 : 6),
  backgroundColor: '#FFF',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  /* CSS to make sure banner is placed right on in-app browser (mobile) */
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
} as React.CSSProperties;

const animationStyles = (
  { showAnimation, animateInDuration, animateOutDuration }: AnimationParams 
) => {
  const duration  = showAnimation ? animateInDuration : animateOutDuration;
  const animationName = showAnimation ? 'fadein' : 'fadeout';
  const animation =  `${animationName} ${duration}ms`;
  return {
    WebkitAnimation: animation, /* Safari, Chrome and Opera > 12.1 */
    MozAnimation: animation, /* Firefox < 16 */
    msAnimation: animation, /* Internet Explorer */
    OAnimation: animation, /* Opera < 12.1 */
    animation: animation,
  } as React.CSSProperties;
}

const textWrapper = {
  display: 'flex',
  paddingLeft: 10,
  flexDirection: 'column',
  cursor: 'pointer'
} as React.CSSProperties;

const titleStyle = {
  color: '#404447',
  fontWeight: 'bold',
  fontSize: 17,
  lineHeight: 1.25,
  marginBottom: 5,
  marginTop: 0,
  cursor: 'pointer'
} as React.CSSProperties;

const imageStyle = {
  height: 68,
  width: 68,
  minWidth: 68,
  marginBottom: 0
} as React.CSSProperties;

const subtitleStyle = {
  color: '#A0A6AC',
  fontSize: 14,
  lineHeight: 1.4,
  margin: 0,
  marginBottom: 2,
  marginRight: 20,
  cursor: 'pointer',
  wordBreak: 'normal',
  hyphens: 'auto'
} as React.CSSProperties;

const closeIcon = {
  position: 'absolute',
  right: 5,
  top: 5,
  padding: 0,
  zIndex: 2147483649
} as React.CSSProperties;

export default Announcement;