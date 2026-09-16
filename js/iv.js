function hitungTPM() {
	// 1. Ambil nilai input
	const volume = parseFloat(document.getElementById("volume").value);
	const waktu = parseFloat(document.getElementById("waktu").value);
	const faktor = parseFloat(document.getElementById("faktor").value);
	// Validation Sederhana
	if (!volume || !waktu || volume <= 0 || waktu <= 0) {
		alert("Harap masukkan angka volume dan waktu yang valid!");
		return;
	}
	// 2. Rumus TPM = (Volume x Faktor Tetes) / (Waktu x 60 Menit)
	const totalMenit = waktu * 60;
	const tpm = Math.round((volume * faktor) / totalMenit);
	// 3. Hitung rentang detik per 1 tetes
	// Jika 60 TPM = 1 tetes/detik. Jika 20 TPM = 3 detik/tetes.
	const detikPerTetes = (60 / tpm).toFixed(2);
	// 4. Tampilkan Hasil Ke Teks
	document.getElementById("res-tpm").innerText = `${tpm} TPM`;
	document.getElementById("res-detik").innerText =
		`(1 tetes terjadi setiap ${detikPerTetes} detik)`;
	document.getElementById("visual-status").innerText =
		`Simulasi: ${detikPerTetes} dtk/tetes`;
	// 5. Update Animasi CSS via JavaScript
	const dropElement = document.getElementById("drop");
	// Reset Animasi Dulu (agar perubahan durasi terasa mulus)
	dropElement.style.animation = "none";

	// Trigger Reflow DOM (trik JS agar animasi mereset ulang)
	void dropElement.offsetWidth;
	// Set Durasi Animasi Baru & Mulai Animasi Loop
	dropElement.style.animation = `dropFall ${detikPerTetes}s infinite linear`;
}
