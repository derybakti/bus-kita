var modal = document.getElementById("myModal");
var paymentModal = document.getElementById("paymentModal");
var successModal = document.getElementById("successModal");
var span = document.getElementsByClassName("close")[0];

function openModal(rute, harga) {
	modal.style.display = "block";
	document.getElementById("rute").value = rute;
	document.getElementById("harga").value = "Rp. " + harga;
}

span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	} else if (event.target == paymentModal) {
		paymentModal.style.display = "none";
	}
};

function kirimWA() {
	var nama = document.getElementById("nama").value;
	var hp = document.getElementById("hp").value;
	var tanggal = document.getElementById("tanggal").value;
	var rute = document.getElementById("rute").value;
	var harga = document.getElementById("harga").value;

	var orderNumber = generateOrderNumber();

	document.getElementById("jumlahBayar").innerText = harga;
	document.getElementById("orderNumber").innerText = orderNumber;

	modal.style.display = "none";
	paymentModal.style.display = "block";
}

function finishPayment() {
	paymentModal.style.display = "none";
	successModal.style.display = "block";
}

function closePaymentModal() {
	paymentModal.style.display = "none";
	successModal.style.display = "none";
}

function closeSuccessModal() {
	paymentModal.style.display = "none";
	successModal.style.display = "none";
}

function generateOrderNumber() {
	var date = new Date();
	var orderNumber = "HGT" + date.getTime(); 
	return orderNumber;
}

function confirmPayment() {
	var nama = document.getElementById("nama").value;
	var hp = document.getElementById("hp").value;
	var tanggal = document.getElementById("tanggal").value;
	var rute = document.getElementById("rute").value;
	var harga = document.getElementById("harga").value;
	var orderNumber = document.getElementById("orderNumber").innerText;

	var nomorWa = "6282375665904"; 
	var pesan =
		"Hi, pesanan bus HGT dengan data pemesanan seperti berikut: \n\n" +
		"Nama: " +
		nama +
		"\nNomor Telepon: " +
		hp +
		"\nTanggal Perjalanan: " +
		tanggal +
		"\nRute Perjalanan: " +
		rute +
		"\nHarga: " +
		harga +
		"\nNomor Pesanan: " +
		orderNumber +
		"\nStatus: Pembayaran sudah dilakukan";
	var url = "https://wa.me/" + nomorWa + "?text=" + encodeURIComponent(pesan);

	window.open(url, "_blank").focus();
	successModal.style.display = "none";
}
