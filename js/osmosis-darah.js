(() => {
  const solutionData = {
    isotonic: {
      bgColor: "#e0f2fe",
      borderColor: "#bae6fd",
      flowText: "Aliran Air: Seimbang (Netral)",
      title: "Larutan Isotonis (e.g., NaCl 0.9% / Normal Saline)",
      description:
        "Konsentrasi zat terlarut di dalam dan luar sel sama. Aliran air masuk dan keluar sel seimbang, sehingga sel mempertahankan bentuk bikonkaf alaminya tanpa risiko pecah atau mengkerut.",
    },
    hypotonic: {
      bgColor: "#f0f9ff",
      borderColor: "#7dd3fc",
      flowText: "Aliran Air: Masuk ke Dalam Sel (H2O In)",
      title: "Larutan Hipotonis (e.g., Akua Destilata / NaCl 0.45%)",
      description:
        "Konsentrasi di luar sel lebih rendah dibanding di dalam sel. Air masuk ke dalam sel secara osmosis secara masif, membuat sel membengkak (*swollen*) dan berisiko pecah (*hemolisis*).",
    },
    hypertonic: {
      bgColor: "#bae6fd",
      borderColor: "#38bdf8",
      flowText: "Aliran Air: Keluar dari Sel (H2O Out)",
      title: "Larutan Hipertonis (e.g., NaCl 3% / Dextrose 10%)",
      description:
        "Konsentrasi di luar sel lebih tinggi. Air ditarik keluar dari dalam sel menuju lingkungan luar, menyebabkan sel kehilangan volume, mengkerut, dan berbentuk keriput/spiky (*krenasi*).",
    },
  };

  const simulator = document.querySelector(".osmosis-simulator");
  const buttons = simulator.querySelectorAll("[data-solution]");
  const cell = simulator.querySelector("#osmosis-cell");
  const environment = simulator.querySelector("#osmosis-environment");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const data = solutionData[button.dataset.solution];

      buttons.forEach((option) => {
        const isActive = option === button;
        option.classList.toggle("active", isActive);
        option.setAttribute("aria-pressed", String(isActive));
      });

      cell.className = `osmosis-cell ${button.dataset.solution}`;
      environment.style.backgroundColor = data.bgColor;
      environment.style.borderColor = data.borderColor;
      simulator.querySelector("#osmosis-water-flow").textContent =
        data.flowText;
      simulator.querySelector("#osmosis-info-title").textContent = data.title;
      simulator.querySelector("#osmosis-info-desc").textContent =
        data.description;
    });
  });
})();
