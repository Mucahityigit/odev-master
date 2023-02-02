import React from "react";

function Soru6() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [c, setC] = React.useState(0);
  const [sonuc, setSonuc] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sonuc = 2 * b - 4 * a * c;
    setSonuc(sonuc);
  };
  return (
    <>
      <h1>Soru6</h1>
      <form onSubmit={handleSubmit}>
        <label for="a">a:</label>
        <input
          type="number"
          id="a"
          placeholder="a"
          onChange={(e) => setA(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="b">b:</label>
        <input
          type="number"
          id="b"
          placeholder="b"
          onChange={(e) => setB(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="c">c:</label>
        <input
          type="number"
          id="c"
          placeholder="c"
          onChange={(e) => setC(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="sonuc">2b - 4ac:</label>
        <input
          value={sonuc}
          type="number"
          id="sonuc"
          placeholder="2b - 4ac"
          readonly
        />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru6;
