import React from "react";

function Soru5() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [sonuc, setSonuc] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sonuc = x * x - y * y;
    setSonuc(sonuc);
  };
  return (
    <>
      <h1>Soru5</h1>
      <form onSubmit={handleSubmit}>
        <label for="x">X:</label>
        <input
          type="number"
          id="x"
          placeholder="x"
          onChange={(e) => setX(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="y">Y:</label>
        <input
          type="number"
          id="y"
          placeholder="y"
          onChange={(e) => setY(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="sonuc">X ve Y değerlerinin kare farkı:</label>
        <input
          value={sonuc}
          type="number"
          id="sonuc"
          placeholder="Kare Farkı"
          disabled
        />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru5;
