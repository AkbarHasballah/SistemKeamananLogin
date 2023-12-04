// Mendapatkan referensi form signup
const signupForm = document.querySelector('.signup-form');

// Menangani submit form
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Mendapatkan nilai input username dan password
  const newUsername = signupForm.querySelector('#newUsername').value;
  const newPassword = signupForm.querySelector('#newPassword').value;

  // Buat data yang akan dikirim ke API
  const data = {
    username: newUsername,
    password: newPassword
  };

  try {
    // Kirim data ke API signup
    const response = await fetch('Isi dengan API SINGUP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Periksa status response
    if (response.ok) {
      // Jika berhasil, tampilkan notifikasi
      alert('Pendaftaran berhasil!');
      // Arahkan ke halaman signin
      window.location.href = '../signin.html';
    } else {
      // Jika gagal, tangani error
      console.error('Pendaftaran gagal.');
    }
  } catch (error) {
    // Tangani error ketika fetch atau proses lainnya
    console.error('Terjadi kesalahan:', error);
  }
});
