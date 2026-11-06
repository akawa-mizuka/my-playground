const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfquqh5jFHTp8x0fCegR7ENLP4ONgWJzjPoHYwLDDy45FOpKA/formResponse";

const ENTRY = {
  nama: "1174677321",
  nim: "535100311",
  universitas: "865635146",
  soal: [
    "507256284",
    "167485247",
    "963257951",
    "1602456543",
    "1060764921",
    "1513884672",
    "1151295542",
    "1979704363",
    "2011463857",
    "2097314873",
  ],
  feedback: [
    "1840964570",
    "970864047",
    "1646836003",
    "742571821",
    "373759647",
  ],
};

const pertanyaanEvaluasi = [
  "Bagaimana pendapat Anda mengenai tampilan visual blog Panduan Terapi Intravena (IV)?",
  "Apakah gambar atau ilustrasi yang terdapat dalam blog membantu Anda memahami materi?",
  "Apakah blog membantu meningkatkan pemahaman Anda mengenai terapi intravena?",
  "Bagaimana pendapat Anda mengenai kecepatan akses dan kenyamanan membaca blog melalui perangkat yang digunakan?",
  "Secara keseluruhan, bagaimana penilaian Anda terhadap kualitas blog Panduan Terapi Intravena (IV)?",
];

const soal = [
  {
    t: "Apa keunggulan utama pemberian obat melalui intravena (IV)?",
    o: [
      "Obat diserap secara perlahan melalui kulit",
      "Obat langsung masuk ke sirkulasi darah",
      "Obat harus melewati proses pencernaan",
      "Obat hanya bekerja pada permukaan kulit",
    ],
    k: 1,
  },
  {
    t: "Cairan NaCl 0,9% termasuk jenis cairan apa?",
    o: ["Hipotonik", "Hipertonik", "Isotonik", "Koloid"],
    k: 2,
  },
  {
    t: "Apa yang dimaksud dengan cairan hipotonik?",
    o: [
      "Cairan dengan konsentrasi zat terlarut lebih rendah daripada plasma",
      "Cairan dengan konsentrasi zat terlarut lebih tinggi daripada plasma",
      "Cairan yang memiliki konsentrasi sama dengan plasma",
      "Cairan yang tidak mengandung air",
    ],
    k: 0,
  },
  {
    t: "Manakah yang termasuk indikasi pemberian terapi intravena?",
    o: [
      "Pasien mampu memenuhi kebutuhan cairan secara oral",
      "Pasien membutuhkan pemberian cairan atau obat secara langsung ke pembuluh darah",
      "Pasien tidak membutuhkan terapi medis",
      "Pasien hanya mengalami luka ringan pada kulit",
    ],
    k: 1,
  },
  {
    t: "Apa pertimbangan utama dalam memilih vena perifer untuk pemasangan infus?",
    o: [
      "Memilih vena yang paling kecil",
      "Memilih vena yang mudah dilihat tanpa pemeriksaan",
      "Memilih vena yang sesuai kondisi pasien dan kebutuhan terapi",
      "Selalu memilih vena pada area persendian",
    ],
    k: 2,
  },
  {
    t: "Apa arti TPM dalam perhitungan tetesan infus?",
    o: [
      "Tetesan per menit",
      "Tekanan pembuluh darah",
      "Total pemberian medis",
      "Terapi pasien maksimal",
    ],
    k: 0,
  },
  {
    t: "Pada prosedur pemasangan infus, tindakan yang harus dilakukan sebelum menusukkan kateter adalah...",
    o: [
      "Menyentuh kembali area yang sudah didesinfeksi",
      "Melakukan kebersihan tangan dan menyiapkan area secara aseptik",
      "Membuka seluruh alat tanpa memperhatikan kebersihan",
      "Langsung memasukkan kateter tanpa identifikasi pasien",
    ],
    k: 1,
  },
  {
    t: "Apa arti ukuran kanula 18G dibandingkan 24G?",
    o: [
      "18G memiliki diameter lebih kecil",
      "18G memiliki diameter lebih besar",
      "Keduanya memiliki diameter sama",
      "24G selalu memiliki aliran lebih cepat",
    ],
    k: 1,
  },
  {
    t: "Kondisi kemerahan, nyeri, dan hangat di sepanjang vena akibat peradangan disebut...",
    o: ["Infiltrasi", "Oklusi", "Flebitis", "Emboli"],
    k: 2,
  },
  {
    t: "Apa tindakan awal yang tepat jika dicurigai terjadi infiltrasi pada area infus perifer?",
    o: [
      "Mempercepat tetesan infus",
      "Mengabaikan keluhan pasien",
      "Menghentikan infus dan melakukan penilaian serta penanganan sesuai SOP",
      "Menekan area infus dengan kuat",
    ],
    k: 2,
  },
];

const daftar = document.getElementById("post-test-questions");

soal.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "post-test__card";

  const question = document.createElement("p");
  question.className = "post-test__question";
  question.textContent = `${index + 1}. ${item.t}`;
  card.append(question);

  item.o.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.className = "post-test__option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `post-test-question-${index}`;
    input.value = String(optionIndex);
    input.required = true;

    label.append(input, `${String.fromCharCode(65 + optionIndex)}. ${option}`);
    card.append(label);
  });

  daftar.append(card);
});

const daftarEvaluasi = document.getElementById("post-test-feedback");

pertanyaanEvaluasi.forEach((pertanyaan, index) => {
  const fieldset = document.createElement("fieldset");
  fieldset.className = "post-test__feedback-question";

  const legend = document.createElement("legend");
  legend.textContent = `${index + 1}. ${pertanyaan}`;
  fieldset.append(legend);

  const skala = document.createElement("div");
  skala.className = "post-test__scale";

  const poin = document.createElement("span");
  poin.className = "post-test__rating-score";
  poin.setAttribute("aria-live", "polite");
  poin.textContent = "Belum dinilai";

  for (let nilai = 1; nilai <= 5; nilai++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `post-test-feedback-${index}`;
    input.value = String(nilai);
    input.setAttribute("aria-label", `${nilai} dari 5 bintang`);
    input.required = true;

    const bintang = document.createElement("span");
    bintang.className = "post-test__star";
    bintang.setAttribute("aria-hidden", "true");
    bintang.textContent = "☆";

    label.append(input, bintang);
    skala.append(label);

    input.addEventListener("change", () => {
      const semuaBintang = skala.querySelectorAll(".post-test__star");
      semuaBintang.forEach((star, starIndex) => {
        const aktif = starIndex < nilai;
        star.textContent = aktif ? "★" : "☆";
        star.parentElement.classList.toggle("is-active", aktif);
      });
      poin.textContent = `${nilai}/5`;
    });

    label.addEventListener("mouseenter", () => {
      skala.querySelectorAll(".post-test__star").forEach((star, starIndex) => {
        const aktif = starIndex < nilai;
        star.textContent = aktif ? "★" : "☆";
        star.parentElement.classList.toggle("is-active", aktif);
      });
    });
  }

  skala.addEventListener("mouseleave", () => {
    const pilihan = skala.querySelector("input:checked");
    const nilaiTerpilih = pilihan ? Number(pilihan.value) : 0;
    skala.querySelectorAll(".post-test__star").forEach((star, starIndex) => {
      const aktif = starIndex < nilaiTerpilih;
      star.textContent = aktif ? "★" : "☆";
      star.parentElement.classList.toggle("is-active", aktif);
    });
  });

  fieldset.append(skala, poin);
  daftarEvaluasi.append(fieldset);
});

document
  .getElementById("post-test-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (!this.reportValidity()) return;

    const nama = document.getElementById("post-test-name").value.trim();
    const nim = document.getElementById("post-test-nim").value.trim();
    const universitas = document
      .getElementById("post-test-university")
      .value.trim();

    if (!nama || !nim || !universitas) {
      alert("Nama lengkap, NIM, dan universitas wajib diisi.");
      return;
    }

    let benar = 0;
    const jawaban = soal.map((item, index) => {
      const pilihan = document.querySelector(
        `input[name="post-test-question-${index}"]:checked`,
      );
      const nilai = Number(pilihan.value);
      if (nilai === item.k) benar++;
      return nilai;
    });

    const nilaiAkhir = benar * 10;
    const hasil = document.getElementById("post-test-result");
    hasil.replaceChildren();

    const judulHasil = document.createElement("h2");
    judulHasil.textContent = "Post-test selesai!";
    const nilaiHasil = document.createElement("p");
    nilaiHasil.className = "post-test__score";
    nilaiHasil.textContent = `${nilaiAkhir}/100`;
    const ringkasanHasil = document.createElement("p");
    ringkasanHasil.textContent = `Jawaban benar: ${benar} dari 10 soal.`;
    const ucapan = document.createElement("p");
    ucapan.textContent = "Terima kasih telah mengerjakan post-test.";
    hasil.append(judulHasil, nilaiHasil, ringkasanHasil, ucapan);
    hasil.style.display = "block";

    const googleForm = document.getElementById("post-test-google-form");
    googleForm.action = GOOGLE_FORM_URL;

    const dataGoogle = [
      ["post-test-google-name", ENTRY.nama, nama],
      ["post-test-google-nim", ENTRY.nim, nim],
      ["post-test-google-university", ENTRY.universitas, universitas],
    ];

    dataGoogle.forEach(([id, entry, value]) => {
      const input = document.getElementById(id);
      input.name = `entry.${entry}`;
      input.value = value;
    });

    jawaban.forEach((answer, index) => {
      const input = document.getElementById(`post-test-google-${index + 1}`);
      input.name = `entry.${ENTRY.soal[index]}`;
      input.value = `${String.fromCharCode(65 + answer)}. ${soal[index].o[answer]}`;
    });

    pertanyaanEvaluasi.forEach((_, index) => {
      const pilihan = document.querySelector(
        `input[name="post-test-feedback-${index}"]:checked`,
      );
      const input = document.getElementById(
        `post-test-google-feedback-${index + 1}`,
      );
      input.name = `entry.${ENTRY.feedback[index]}`;
      input.value = pilihan.value;
    });

    googleForm.submit();

    const tombol = this.querySelector('button[type="submit"]');
    tombol.disabled = true;
    tombol.textContent = "Mengirim jawaban...";
    hasil.scrollIntoView({ behavior: "smooth" });
  });