import "./LinkPopout.css";

const LinkPopout = ({
  link,
  Icon,
  backgroundColor = "",
  backgroundImage = "",
  text,
}) => {
  return (
    <a href={link} target="_blank" className="link-popout-container">
      <div className="crop">
        <div className="popout-text">
          <span>{text}</span>
        </div>
      </div>
      <div className="below-circle"></div>
      <div
        className="above-circle"
        style={{
          backgroundColor,
          backgroundImage,
        }}
      ></div>

      <div className="icon-container">
        <Icon className="icon" />
      </div>
    </a>
  );
};

export default LinkPopout;
