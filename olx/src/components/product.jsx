export default function Produk() {
  const data = [
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
    {
      url: "https://id2-cdn.pgimgs.com/listing/17473005/UPHO.97018041.V800/Jual-Ruko-Pasir-Kaliki-Bandung-Bandung-Indonesia.jpg",
      harga: "2000000000",
      ket1: "3lantai 5KM 4KT",
      ket2: "Full Furniture",
      alamat: "jakarta-Selatan",
    },
  ];

  return (
    <div className="basepro">
      <div className="content">
        <div className="content2">
          <div className="rekom">Rekomendasi Baru</div>

          <div>
            <div className="card">
              {data.map((val) => (
                <div className="card1">
                  <ProdLoop
                    url={val.url}
                    harga={val.harga}
                    ket1={val.ket1}
                    ket2={val.ket2}
                    alamat={val.alamat}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProdLoop(props) {
  return (
    <div>
      <div className="imgprod">
        <img src={props.url} alt="" width="100%" height="100%" />
      </div>
      <div className="harga">RP. {props.harga}</div>
      <div>{props.ket1}</div>
      <div>{props.ket2}</div>
      <div>{props.alamat}</div>
    </div>
  );
}
