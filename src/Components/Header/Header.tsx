import React from "react";
import { getMainColor, getFullName } from "nba-color";
import "./Header.css";

const Header = ({ loading, theBelt }: { loading: boolean; theBelt: string; }): JSX.Element => {
  const colorWay = theBelt ? getMainColor(theBelt) : { hex: ''};
    const hexColorWay = (colorWay || {}).hex;
    const backgroundColorCSS = {
      backgroundColor: hexColorWay
    };
    return (
      <div className="Header" style={!loading ? backgroundColorCSS : {backgroundImage: 'none'}}>
        <h4 className={`Header-preheadline ${loading ? 'loading': ''}`}>- who has the belt? -</h4>
        {loading && <div className="loading-icon">
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
            <path d="M63.6870499,18.5730648L48.7831497,4.278266c-0.1855011-0.1758003-0.4316025-0.4813001-0.6870003-0.4813001  H15.9037514c-0.2553005,0-0.5014,0.3054998-0.6870003,0.4813001l-14.9038,14.1908998  c-0.374,0.3535004-0.4184,0.9855995-0.1025,1.3917999c0.21,0.2703991,30.8237991,39.7256012,31.0517006,39.9812012  c0.1022987,0.1149979,0.2402992,0.2215996,0.3428001,0.266098c0.2763996,0.1206017,0.5077,0.1296997,0.7900982,0.0065002  c0.1025009-0.0444984,0.2404022-0.1348991,0.3428001-0.2499008c0.0151024-0.0168991,0.0377007-0.0224991,0.0517006-0.0404968  L63.789547,19.9121666C64.1054459,19.5058651,64.0610504,18.9265652,63.6870499,18.5730648z M15.6273508,6.4344659  l4.9945002,11.3625011H3.6061509L15.6273508,6.4344659z M24.0795517,17.7969666l7.9203987-11.2617006l7.9204979,11.2617006  H24.0795517z M40.7191467,19.7969666l-8.7191963,34.8769989l-8.719099-34.8769989H40.7191467z M33.9257507,5.7969656h12.5423012  l-4.8240013,10.9746008L33.9257507,5.7969656z M22.3559513,16.7715664L17.53195,5.7969656h12.5423012L22.3559513,16.7715664z   M21.2191505,19.7969666l8.6596012,34.638401L2.975451,19.7969666H21.2191505z M42.7808495,19.7969666h18.2436981  l-26.9032974,34.638401L42.7808495,19.7969666z M43.3781471,17.7969666l4.9944992-11.3625011l12.0212021,11.3625011H43.3781471z"/>
          </svg>
        </div>}
        {!loading && <h1 className="Header-headline">
          {theBelt ? getFullName(theBelt) : ""}
        </h1>}
      </div>
    );
}

export default Header;
