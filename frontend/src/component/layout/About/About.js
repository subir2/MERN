import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    //window.location = "https://www.facebook.com/RedLubbers";
    window.open("https://www.facebook.com/RedLubbers", '_blank');
    //target = "_blank";
    // window.open('http://google.com','_blank')
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEX////+AAL33937AAD6pqT8////AAD4AAD63d71AAD9/v/9//36w8D2mpn6+vj//v757uz1bmz1kpL3y8r45OP1Njf3u7r1s7PzLC3znZn519b3cnX1w8Hznp768/L47On3HRf5RkT1eHbyISP1U1DzgoL3aWjzWFnuXV71z8vzODn0s7L0wML1VFT1ion0lpX1fHr2ExHuRkT1q6rydG/xhoXXrWHgAAAKUklEQVR4nO2daXfiOgyGE4RsDCVla0spZSldmZYuzPz/v3YTkrBaitMW7HuOny/3HIbk+kW2LMuyGwQej8fj8Xg8Ho/H4/F4PB6Px+PxeDwej8fj8Xg8Hs8JaIwqJen1WlGAMbabbgg2oTxSysn0rnlVG9XjN9iWUERVhOURMSuh07tlJbItoYBvKdwoDUO4uBtGLvfZHylcqQQJqt11V+KPFa5MKWDWHDsq8jcUJiIlyLuKbTFafklhIjKU7YqDdvw9hbHTkepuZFvQAb/VS4WQk/uHy1pUt61on58rFLHtpHpsDlrZKx2bOn6oMJn71VO1tjUj4nPTpqADfqJQgFLTzv5UeA3ivuWQHb+rEJLO2b7q4X6nHCgIYfJiSY6Gb8alids8G2kMFc2TFwr1xxkjfkthbL3XRmy7A7/ZCBaQfaPpyqqjtMJ48L1djqhxVlGQfU8u/pcK4zXT7J0JzvBebL66cMPdlFCYzOpvr+xKqas2rwPVOZ0MBnOFQqmPHmuVBl7sPCCrp1LBYawQJu+tAueBlxJ2HlHDE6ngMFMoYHJdHFPj197LhKrZ96gmCgHkdWTQ1K7cfxlc2M/iFCuMA8+F0ZoIn+Dw6faxBRRSpDC2X7tn1tV6ByaMkZe2u2mBQhH2u6bT2kJjwlB+2l4TFyhUnYbxq5T2J4K/lid+TqGA6SAwVjgEnQ1jK744qxDUooQnxDbxJjF1VCGAKpXmbU3IN72izeQNpVDAV6vUb38GZG+Yoflg/n0ohfLOZI7f4kY/CldG/HOs1pugVyigWdIDjma0QrsjUatQyKuSbcIuLTAOT7vHabwROoWifCCCC25eBZuxm0ahkGf8MxrPiBecQgHlvNavcqgQ5CX/SE+TxmgpPjZaOqRQyCX/RO9d09orVl8o3txRKGSHb0zr6zDQqXNzRfpWe/H3gcJnPgAZTXRhJk54hYU9/4jsKYQJH4pG/QfNpzigA5rsh7uz1k33FKoanjPfjqZ9XUtxyeuLFU4cUQjX7JfxWb8UwseiXIiA3nHaX8yuwikbIuOD/Kc1xahfrNBaYnFboVBsNQU2qVFa0WVo9ng/SvMN2FH4wAyWOv6RUhtfngdVWSgwfDyWgiK2FILiYit8UaBvZQMf+blixdeRBBSyrZDpSBiMP4UkvEX0aZBWntma8zcKBZv3i+YAVSIYGBiYMFS2nOlGIXBbmtgOxZwKdq5N9j5k7SjtL2atECSzdYZNGQK5jN3fkNECtsoXNzZ8Yr71IgWQAWtDmwo+wFZkurEhvezFsRJCjal/fjUZhmFoqzojVygkHc5EbxAKclGFH2YKq7Z76SPdgAUIoJ09FoZs6U9oW6Gis2tDFSukF/6FKyc3FArZor6RpGDggu7DTbNOKmylanKFc2pZuNrZlWd0877MFNr2NOKO+sJt0gnn5PPYM5srwtDW8ilXSI2zmkyKEOlSQ2yGRjYEOTiOgEJShQKI/z9eJGWWT0y0w6aCt5C2KvlzhUTI1oFkYcxUi9YMFr+pQruRt5jpakUDTMphQ8GYMHgw9DPMhHpkMoVTbdAZJV0Q1IBUiJEyVXh/RBEsmae514pI+mgyCunJ8I+hQIvbT6lCbX4Ca8l2i+CcIE6NC/+sFfBnCm80/4Srkm3CvCmHlWwEIrS2SZop1E34t6vmS3rlWtdWsukVAhkVHptMoWY3Ii1TA8aEODDIImYKtbsBJ4FUmFYACXbT6M28wJhLxR4XopfWcZju6l4wJuwamzCU9qqFKU/T6K+aD8yaB+emozAOi+xV0lKzxS2kLWO2S5dmS98Vz9Z3ud92P8VxuiYC+kABtj6N9YVwdWQZDOuobedT/JuakF75x57IuI/GXUEb9p4GfeQ9yEz4l3qsHlyaTvYhMd2eCv3q6UmmPz0dsI1MQ+5VV7B5WE+3AsbLtPWCnu0b5lMh+54TkGcTtyd27ItEomCSR50SfTS0t8OdkOdptjeerrIzhJOIWDbFRi4jsO9EBW17ozCapR/Jf9RDtYIqtj2Fr7pav5OR27C/DjrwOk8SU5mVXgkvY3sU6nLeo1n2EbHzjr1+CX1J+awTCkP5mn9ymxlIEH5m3C9jwRA+XDlRkruaKBtjoN/Wx/GkjL7YXblyKgi+UoV4nTdNV6IXO5kS0WiCHLpysiuvXW9kXoRIQA1LOZkYMu47GbnCvJ4rrzIUc91vb1L8tA303Tlh2UwFRbO8114fKMTob5mJPiwslDsN2Qr4M7vl6SrXcDAZNoKB+Zo++5XsD8Jgk4nK/Ey+3QkHkyFWVckuKqStje0dqmlGLS1YwmFuwr19+3rQeyvZQ+OX6or6T0+qMEvT4NO69mR3FsN3SZyfZAR2rB7KW5MoXO/PVvKIGnZqT3A4D0tfgVJ0quFkJAplNtsHH/mevNpkjjCoPZUcgMlPpK7duPcjU5gVfK0zE0Kt43DstZUobUDXbuDJLj7Aaj7UxKqTNpINthtpVomwa8FZiRPSxyZWCJlTz3bTEtJDn6PLb/TPJOlz33LDyayoCvGZdkl8yf1MUi0cDZaPn2H5/pleoOQSVQFpsgKDm40RlJIgoLwDXZ3hrzkzBFdU1/FZa5M+E9+xXWo/deuWvlghZLXBuCzvUQ7sJz/IOltrVNe72PMfC5TPTt7uOcscabkEmg6ruXua5m36X+z8uJPKpoMWjGf5bEvGsJaZgyl2t0hjnMUehrXMLFaP3ReivSCorEJl+SoajnMqQ5EvC4XR+lCbvnICrBEBqJDLs5SlyW6MtLhfz4NUJxXr0l68MbAikSh3gK1lxZ5CyI+cYctowlxY1UHTo7rgRqHZwQqhKq6s7Xchz9NvK4xMpkx4trrhS4ABWUW5rRAvDdbDgj6maBGsk35yW2Ed34oVhqG9Oksa7JLrwW2FQVAzCXykxbtoSDpkw3cVGh01hE9r5cAkBzerUgqDlskhJ2Jv1SZj+jz9nsJNwpFDOpapCYIuPbz2FAbRBfXN7YesnR6hYBa/+wqDoUl4arfM6wDkzhQcKAyeTRT26y710/qIvLVSo9DoRKUQbuUUtff/kjYM/hmFpz32NqYTw921plHImXyNtHfzlYZFOYW4NFkoWjsUqwHfuGsrDxXW0Sh3PLWhhYBzHRqFq3tAihWWviD0eIy4NZFWYfHlZaHNY7EHdLlhpVUYjA0SGkK68ectguSga2mF+G4Unlq7hG6Hc6SXTrTCkVEVLXNdyinhB5VeYWx4A2eTHCRxYdonE4msQqMjzjB3Iu+GbIhCKTS6S0GQt22clBHbVErhedGts+nTTswYFTa7RNownjFMpn0X/uYTv3FIK8Rbk6yUtZv2tmBSGLzC6MJEosVLoHOGbDtphUFgdLzL9omZVTu/q3Drj6wxRmSOu58IvlCIUxhUTBIacHs6LXr4DCir0Oj6HfspcH5XkFfY+jSZFD8s99OOBA722lGs8g+nMOelT8F5r1bhqLGxc519Nn+Fi4VEplj3kx6Px+PxeDwej8fj8Xg8Ho/H4/F4PB6Px+PxeDye0vwHIECJDXdEe8gAAAAASUVORK5CYII="
              alt="RedLubbers Logo"
            />
            <Typography>Redlubbers</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Facebook Page
            </Button>
            <span>
            Red Lubbers is metal workshop which works with home decorative products. Its established in 2013 and running its operation so far.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/RedLubbers"
              target="blank"
            >
              <FacebookIcon  fontSize="large" className="youtubeSvgIcon" />
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;