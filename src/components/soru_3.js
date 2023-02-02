import React from "react";

function Soru3() {
  const [birimf, setBirimf] = React.useState(0);
  const [adet, setAdet] = React.useState(0);
  const [toplam, setToplam] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const toplam = birimf * adet;
    setToplam(toplam);
  };
  return (
    <>
      <h1>Soru3</h1>
      <form onSubmit={handleSubmit}>
        <label for="birimf">Birim Fiyatı</label>
        <input
          type="number"
          id="birimf"
          placeholder="Birim Fiyatı"
          onChange={(e) => setBirimf(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="adet">Adet:</label>
        <input
          type="number"
          id="adet"
          placeholder="Adet"
          onChange={(e) => setAdet(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="toplam">Toplam tutar:</label>
        <input
          value={toplam}
          type="number"
          id="toplam"
          placeholder="Toplam tutar"
          disabled
        />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru3;
