import { useState } from "react";
export default function ToggleText() {
  const [visivel, setVisivel] = useState(false);
  function handleClick() {
    setVisivel(!visivel);
  }
  return (
    <div>
      <button onClick={handleClick}>Mostrar</button>
    </div>
  );
}
