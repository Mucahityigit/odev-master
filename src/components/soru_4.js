import React from "react";

export function Soru4() {
  const [sayi, setSayi] = React.useState(0);
  const [sonuc, setSonuc] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSonuc(sayi * sayi);
  };

  return (
    <>
      <h1>Soru4</h1>
      <form onSubmit={handleSubmit}>
        <label for="sayi">Sayı:</label>
        <input
          type="number"
          id="sayi"
          placeholder="Sayı"
          onChange={(e) => setSayi(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="sonuc">Karesi:</label>
        <input
          value={sonuc}
          type="number"
          id="sonuc"
          placeholder="Karesi"
          disabled
        />
        <br />
        <br />
      </form>
    </>
  );
}
