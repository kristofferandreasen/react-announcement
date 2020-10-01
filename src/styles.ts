import { isMobile } from 'react-device-detect';
import { ComponentProps } from "./index";


interface AnimationParams extends Pick<ComponentProps, "animateInDuration" | "animateOutDuration"> {
  showAnimation: boolean,
}

interface ReactAnnouncementStyles {
  bannerCard: React.CSSProperties;
  animationStyles: (params: AnimationParams) => React.CSSProperties
  textWrapper: React.CSSProperties;
  titleStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
  subtitleStyle: React.CSSProperties;
  closeIcon: React.CSSProperties;
}

export const styles: ReactAnnouncementStyles = {
  bannerCard:{
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
  },
  
  animationStyles: ({ showAnimation, animateInDuration, animateOutDuration }) => {
    const duration = showAnimation ? animateInDuration : animateOutDuration;
    const animationName = showAnimation ? 'fadein' : 'fadeout';
    const animation = `${animationName} ${duration}ms`;
    return {
      WebkitAnimation: animation,
      MozAnimation: animation,
      msAnimation: animation,
      OAnimation: animation,
      animation: animation,
    };
  },

  textWrapper:{
    display: 'flex',
    paddingLeft: 10,
    flexDirection: 'column',
    cursor: 'pointer'
  },

  titleStyle: {
    color: '#404447',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 1.25,
    marginBottom: 5,
    marginTop: 0,
    cursor: 'pointer'
  },

  imageStyle: {
    height: 68,
    width: 68,
    minWidth: 68,
    marginBottom: 0
  },
  
  subtitleStyle: {
    color: '#A0A6AC',
    fontSize: 14,
    lineHeight: 1.4,
    margin: 0,
    marginBottom: 2,
    marginRight: 20,
    cursor: 'pointer',
    wordBreak: 'normal',
    hyphens: 'auto'
  },

  closeIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    padding: 0,
    zIndex: 2147483649
  }
}