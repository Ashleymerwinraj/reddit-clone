import React from "react";
import "./SideNav.css";

// import { Link } from "react-router-dom";

export default function SideNav() {
  const menus = [
    { to: "/popular", text: "Popular" },
    { to: "/all", text: "All" },
    { to: "/random", text: "Random" },
  ];

  const subreddits = [
    "askreddit",
    "worldnews",
    "videos",
    "funny",
    "todayileaned",
    "pics",
    "gaming",
    'movies',
    'news', 
    'gifs',
    'aww',
    'mildlyinteresting',
    'showerthoughts',
    'televison',
    'jokes',
    'science',
    'soccer',
    'internetisbeautiful',
    'dataisbeautiful',
    'askscience'
  ];
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"/>
      </div>

      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search" />
        <i className="fas fa-search"></i>
      </div>

      <div className="sidenav__link">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <a href={menu.to}>{menu.text}</a>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidenav__subreddit">
          {subreddits.map(subreddit => (
              <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
