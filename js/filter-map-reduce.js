// ambil semua element videos
const videos = Array.from(document.querySelectorAll('[data-duration]'));// berupa data NodeList

// ( Filter ) pilih hanya yang beberapa video "Tutorial Lanjutan" 
let pilihan = videos.filter(video => video.textContent.includes('Tutorial Lanjutan'))
    // ambil duration masing2 video
    .map(item => item.dataset.duration)
    // ubah duration (string) menjadi (float) dan ubah menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    // jumlahkan semua detik
    .reduce((total, detik) => total + detik, 0);

// ubah format jadi jam, menit, detik
const jam = Math.floor(pilihan / 3600);
pilihan = pilihan - jam * 3600;

/** Math => floor (pembulatan ke bawah) misal : 3,9 maka di bulatkan menjadi 3
         => round (pembulatan yg paling dekat)
         => ceil (pembulatan ke atas) misal : 3,1 maka di bulatkan menjadi 4
         => rondom ()
**/
const menit = Math.floor(pilihan / 60);

const detik = pilihan - menit * 60;

//Simoan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const total = videos.filter(video => video.textContent.includes('Tutorial Lanjutan')).length;
const jmlVideo = document.querySelector('.jumlah-video');
jmlVideo.textContent = `${total} Videos`;