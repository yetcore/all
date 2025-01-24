import { useState, useEffect, forwardRef } from "react";
import "./direction.css";
import axios from "axios";
import styles from './index.module.css'

const baisisUrl = "http://101.200.218.130:8721";
// 获取图片
function useImages() {
  const [images, setImages] = useState([]);
  const [imageErrors, setImageErrors] = useState([]);
  useEffect(() => {
    const loadImages = async () => {
      const imageNames = ["backend-l.png", "frontend-l.png", "product-l.png"];
      const results = await Promise.allSettled(
        imageNames.map((name) => axios.get(`${baisisUrl}/api/img/${name}`))
      );
      const loadedImages = [];
      const errors = [];
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          loadedImages[index] = result.value.data.data;
        } else {
          errors.push(`Image ${index + 1} failed to load`);
        }
      });
      setImages(loadedImages);
      setImageErrors(errors);
    };
    loadImages();
  }, []);
  return { images, imageErrors };
}
function useText() {
  const [text, setText] = useState({});
  const [textError, setTextError] = useState("");
  useEffect(() => {
    const loadText = async () => {
      try {
        const res = await axios.get(`${baisisUrl}/api/json/directions.json`);
        setText(JSON.parse(res.data.data));
      } catch (error) {
        setTextError("Failed to load text resources");
      }
    };
    loadText();
  }, []);
  return { text, textError };
}

export default forwardRef( function Direction(props,ref) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images, imageErrors } = useImages();
  const { text, textError } = useText();
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  const titleList = [
    { En: "backend", Cn: "后端研发" },
    { En: "frontend", Cn: "前端研发" },
    { En: "product", Cn: "产品经理" },
    ,
  ];
  return (
    <div ref = {ref}>
      <div className={styles.titleSection}>
        <h1>工作室方向</h1>
        <span></span>
        </div>
      <div className="image-row">
        {imageErrors.length > 0 && (
          <div className="error-messages">
            {imageErrors.map((error, index) => (
              <p key={index} style={{ color: "red" }}>
                {error}
              </p>
            ))}
          </div>
        )}
        {textError && (
          <div className="error-messages">
            <p style={{ color: "red" }}>{textError}</p>
          </div>
        )}
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <div
              className={`transparent-overlay ${
                activeIndex === index ? "blue" : "black"
              }`}
            ></div>

            <img src={image} alt={`Image ${index + 1}`} />
            <div className="content">
              <h1>{titleList[index].Cn}</h1>
              {activeIndex === index && <p>{text[titleList[index].En]}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
)
