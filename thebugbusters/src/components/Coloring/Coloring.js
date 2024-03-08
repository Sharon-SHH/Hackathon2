import "./Coloring.scss";

export default function Coloring({ img_url, colors }) {
  return (
    <div className="immaga">
      <img className="immaga__myImg" src={img_url} alt="immaga Image" />
      <div className="immaga__wrapper">
        {colors && (
          <div className="immaga__title">
            <h3>Color</h3>
            <h3>Parent Color</h3>
            <h3>Confidence</h3>
          </div>
        )}

        {colors.map((color, index) => (
          <div className="immaga__wrapper" key={index}>
            <div className="immaga__title">
              <p>{color.closest_palette_color}</p>
              <p>{color.closest_palette_color_parent}</p>
              <p>{color.percent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}