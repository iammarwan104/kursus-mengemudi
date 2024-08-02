export default function Page() {
  const jenisMobil = [
    {
      jenis: "Paket Manual",
      gambar: "/image/avanza.png",
      nama: "Toyota Avanza 1.3 G M/T",
      tempatDuduk: "Tempat duduk 7 kursi",
      mesin: "mesin 1329 cc",
      tenaga: "Tenaga 91 HP",
    },
    {
      jenis: "Paket Matic",
      gambar: "/image/rush.png",
      nama: "Toyota Rush G MT",
      tempatDuduk: "Tempat duduk 7 kursi",
      mesin: "mesin 1496 cc",
      tenaga: "Tenaga 103 HP",
    },
  ];
  return (
    <>
     {
        jenisMobil.map((mobil, index) => {
            return(
                <section key={index}>
                    {mobil.nama}
                </section>
            )
        })
     }
    </>
  );
}
