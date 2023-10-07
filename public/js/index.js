$(document).ready(function () {
    $("#create-news-form").submit(function (event) {
      event.preventDefault(); // Menghentikan pengiriman formulir secara default

      // Mengambil data dari formulir
      let title = $("#title").val();
      let cover = $("#cover").val();
      let content = $("#content").val();

      // Mengirim data ke API menggunakan AJAX
      $.ajax({
        url: "/api/v1/news", // Ganti dengan URL API sesuai dengan struktur Anda
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ title: title, cover: cover, content: content, isPublic: true, author: "Admin" }),
        success: function (response) {
          // Tindakan setelah berhasil
          alert("Berita berhasil ditambah.");
          // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
          window.location.href = "/";
        },
        error: function (error) {
          // Tindakan jika terjadi kesalahan
          console.error("Terjadi kesalahan: " + JSON.stringify(error));
          alert("Gagal menyimpan berita.");
        },
      });
    });
  });