import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Living in Canada</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ibb.co/9wpD3Tx/kalen-emsley-Bkci-8qcdv-Q-unsplash.jpg"
        alt=""
      />
    </div>
  );
}
