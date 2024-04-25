import "./ServiceCard.css";

export default function ServiceCard({ title, src, text }) {
  return (
    <div className="service-card">
      <div className="service-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="service-circle">
        <img src={src} alt={title + "icon"} />
      </div>
    </div>
  );
}
