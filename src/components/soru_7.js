import React from "react";

function Soru7() {
  const [dyili, setDyili] = React.useState(0);
  const [sonuc, setSonuc] = React.useState("");
  const currentYear = new Date().getFullYear();
  const handleSubmit = (e) => {
    e.preventDefault();
    const sonuc = currentYear - dyili;
    sonuc >= 18 ? setSonuc("Ehliyet Alabilir") : setSonuc("Ehliyet Alamaz");
  };
  return (
    <>
      <h1>Soru7</h1>
      <form onSubmit={handleSubmit}>
        <label for="dyili">Doğum Yılı:</label>
        <input
          type="number"
          id="dyili"
          placeholder="Doğum Yılı"
          onChange={(e) => setDyili(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <input
          value={sonuc}
          type="text"
          id="sonuc"
          placeholder="Sonuç"
          disabled
        />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru7;
