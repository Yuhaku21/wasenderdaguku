/* ===============================
TEMPLATE CHAT MULTI BAHASA
================================ */
const templates = {
id: {
kode: "Halo kak saya dari penjoki daguku, izin meminta kode verifikasi ya 😊. Terimakasih",
salah: "Halo kak, data akun yang diberikan masih salah ya kak 🙏",
selesai: "Permisi kak, akun jokian kakak sudah selesai. Terima kasih 🙏",
promo: "Izin promosi kak, order joki di daguku.my.id lebih murah + promo 😊"
},
en: {
kode: "Hello, this is Daguku boosting service. May I ask for the verification code please 😊 Thank you.",
salah: "Hello, the account data provided seems incorrect 🙏 Please check again.",
selesai: "Hi, your boosting order has been completed. Thank you 😊",
promo: "Hi, you can order boosting services at daguku.my.id with cheaper prices and promos 😊"
}
};


let currentLang = "id";
const messageSelect = document.getElementById("message");
const langBtn = document.getElementById("langToggle");


/* RENDER TEMPLATE */
function loadTemplates() {
messageSelect.innerHTML = `<option value="">-- Pilih Pesan --</option>`;
const data = templates[currentLang];


messageSelect.innerHTML += `
<option value="${data.kode}">Minta Kode</option>
<option value="${data.salah}">Data Salah</option>
<option value="${data.selesai}">Order Selesai</option>
<option value="${data.promo}">Promosi</option>
`;
}


/* TOGGLE BAHASA */
langBtn.addEventListener("click", () => {
currentLang = currentLang === "id" ? "en" : "id";
langBtn.textContent = currentLang === "id"
? "🇮🇩 Bahasa Indonesia"
: "🇬🇧 English";


loadTemplates();
previewBox.classList.add("hidden");
});


/* INIT */
loadTemplates();