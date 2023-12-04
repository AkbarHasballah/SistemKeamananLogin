// Mendapatkan referensi form login
const loginForm = document.querySelector('.login-form');

// Menangani submit form
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Mendapatkan nilai input username dan password
  const username = loginForm.querySelector('#username').value;
  const password = loginForm.querySelector('#password').value;

  // Buat data yang akan dikirim ke API
  const data = {
    username: username,
    password: password
  };

  try {
    // Kirim data ke API
    const response = await fetch('Isi dengan API Singin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Periksa status response
    if (response.ok) {
      // Jika berhasil, ambil token dari respons API
      const responseData = await response.json();
      const token = responseData.token;

      // Simpan token ke dalam cookie dengan nama 'user_token'
      document.cookie = `user_token=${token}; path=/`;

      // Tampilkan notifikasi bahwa login berhasil
      alert('Login berhasil!');
      
      // Misalnya, setelah login berhasil, arahkan ke halaman lain
      // window.location.href = 'halaman-lain.html';
    } else {
      // Jika gagal, tangani error
      console.error('Login gagal.');
    }
  } catch (error) {
    // Tangani error ketika fetch atau proses lainnya
    console.error('Terjadi kesalahan:', error);
  }
});
