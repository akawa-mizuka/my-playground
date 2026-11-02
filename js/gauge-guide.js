(() => {
  const cannulaData = [
    {
      gauge: "14G",
      colorName: "Oranye",
      hexColor: "#ff6f00",
      textColor: "#ffffff",
      diameter: "2.1 mm",
      length: "45 mm",
      flowRate: 270,
      target: "Dewasa (Darurat Utama)",
      indications:
        "Resusitasi cairan sangat cepat, trauma berat, pendarahan masif, transfusi darah darurat.",
    },
    {
      gauge: "16G",
      colorName: "Abu-Abu",
      hexColor: "#64748b",
      textColor: "#ffffff",
      diameter: "1.7 mm",
      length: "45 mm",
      flowRate: 200,
      target: "Dewasa (Bedah/Trauma)",
      indications:
        "Operasi besar, pembedahan terbuka, transfusi darah cepat, resusitasi cairan masif.",
    },
    {
      gauge: "18G",
      colorName: "Hijau",
      hexColor: "#16a34a",
      textColor: "#ffffff",
      diameter: "1.3 mm",
      length: "45 mm",
      flowRate: 105,
      target: "Dewasa & Remaja",
      indications:
        "Transfusi darah rutin, pemberian nutrisi parenteral, CT Scan dengan kontras.",
    },
    {
      gauge: "20G",
      colorName: "Merah Muda (Pink)",
      hexColor: "#ec4899",
      textColor: "#ffffff",
      diameter: "1.1 mm",
      length: "32 mm",
      flowRate: 60,
      target: "Dewasa Umum (Paling Sering)",
      indications:
        "Pemberian obat IV rutin, infus cairan rawat inap, sampel darah, pasien dengan pembuluh darah normal.",
    },
    {
      gauge: "22G",
      colorName: "Biru",
      hexColor: "#0284c7",
      textColor: "#ffffff",
      diameter: "0.9 mm",
      length: "25 mm",
      flowRate: 36,
      target: "Anak, Lansia, Vena Kecil",
      indications:
        "Pasien dengan vena tipis/rapuh, lansia, anak-anak, infus obat dosis lambat.",
    },
    {
      gauge: "24G",
      colorName: "Kuning",
      hexColor: "#eab308",
      textColor: "#000000",
      diameter: "0.7 mm",
      length: "19 mm",
      flowRate: 20,
      target: "Bayi & Anak (Pediatrik)",
      indications:
        "Neonatus, bayi, anak kecil, pasien dengan vena sangat kecil dan rawan pecah.",
    },
    {
      gauge: "26G",
      colorName: "Ungu",
      hexColor: "#9333ea",
      textColor: "#ffffff",
      diameter: "0.6 mm",
      length: "19 mm",
      flowRate: 13,
      target: "Bayi Prematur / Neonatus",
      indications:
        "Bayi baru lahir berukuran sangat kecil atau prematur, perawatan intensif neonatus (NICU).",
    },
  ];

  const guide = document.querySelector(".gauge-guide");
  const buttonContainer = guide.querySelector("#gauge-button-container");

  cannulaData.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "gauge-button";
    button.type = "button";
    button.textContent = item.gauge;
    button.style.backgroundColor = item.hexColor;
    button.style.color = item.textColor;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => selectGauge(index));
    buttonContainer.appendChild(button);
  });

  function selectGauge(index) {
    const data = cannulaData[index];
    const buttons = buttonContainer.querySelectorAll(".gauge-button");

    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    guide.querySelector("#gauge-hub-body").setAttribute("fill", data.hexColor);
    guide.querySelector("#gauge-hub-wing").setAttribute("fill", data.hexColor);
    guide.querySelector("#gauge-title").textContent = `Jarum ${data.gauge}`;

    const badge = guide.querySelector("#gauge-badge");
    badge.textContent = `Warna: ${data.colorName}`;
    badge.style.backgroundColor = data.hexColor;
    badge.style.color = data.textColor;

    guide.querySelector("#gauge-spec-diameter").textContent = data.diameter;
    guide.querySelector("#gauge-spec-length").textContent = data.length;
    guide.querySelector("#gauge-spec-target").textContent = data.target;
    guide.querySelector("#gauge-spec-indications").textContent =
      data.indications;

    const flowBar = guide.querySelector("#gauge-flow-bar");
    flowBar.style.width = `${(data.flowRate / 270) * 100}%`;
    flowBar.style.backgroundColor = data.hexColor;
    guide.querySelector("#gauge-flow-text").textContent =
      `~${data.flowRate} mL/menit`;
  }

  selectGauge(3);
})();
