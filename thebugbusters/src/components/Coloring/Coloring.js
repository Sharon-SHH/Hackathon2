import "./Coloring.scss";

export default function Coloring({ img_url, colors }) {
  return (
    <div className="immaga">
      <img className="immaga__myImg" src={img_url} alt="immaga Image" />
      <div className="immaga__wrapper">
        <p>Text</p>
        {colors.map((colr) => (
          <>
            <p>{colr.closest_palette_color}</p>
            <p>{colr.closest_palette_color_parent}</p>
            <p>{colr.percent}</p>
          </>
        ))}
      </div>
    </div>
  );
}