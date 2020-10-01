import * as React from 'react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiX } from "react-icons/fi";
import { animationKeyframes } from "./animations";
import { styles } from "./styles";

export interface ComponentProps {
  
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
      <div style={{...styles.bannerCard, ...styles.animationStyles({showAnimation, animateInDuration, animateOutDuration})}}>
        <img onClick={openLink} style={styles.imageStyle} src={imageSource} alt="Banner" />
        <div onClick={openLink} style={styles.textWrapper}>
          <h3 style={styles.titleStyle}>{title}</h3>
          <p style={styles.subtitleStyle}>{truncate(subtitle)}</p>
        </div>
        <FiX style={styles.closeIcon} size={closeIconSize} onClick={fadeOut} />
      </div>
    </>
  ) : null
}

Announcement.defaultProps = {
  daysToLive: 7,
  secondsBeforeBannerShows: 5,
  closeIconSize: 30,
  animateInDuration: 1000,
  animateOutDuration: 300
} as Partial<ComponentProps>;

export default Announcement;