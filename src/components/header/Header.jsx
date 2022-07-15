import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to the</span>
        <span className="headerTitleLg">BLOG APP</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-vector/panoramic-view-foliage-tropical-forest-trees_23-2148271242.jpg?t=st=1657883075~exp=1657883675~hmac=de95d2395cedbc1c59bc21cd3e3ce8f4038a5e955e03c56aa028d4764a2225fa&w=996"
        alt=""
      />
    </div>
  );
}
