import React from "react";
import picture from "../images/picture-logo.png";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    title: "One does not simply...",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url, name } = memesArray[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: "",
      bottomText: "",
      randomImage: url,
      title: name,
    }));
  }
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="form-wrapper">
      <div>
        <div className="form-input-wrapper">
          <input
            className="form-input"
            type="text"
            placeholder="Top text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Bottom text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage} className="form-button">
          <span> Get a new meme image</span>
          <img src={picture} alt="painting" className="picture-logo" />
        </button>
      </div>
      <div className="meme">
        <div className="meme-image-wrapper">
          <img src={meme.randomImage} alt={meme.title} className="meme-image" />
        </div>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
