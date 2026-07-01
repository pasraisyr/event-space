import pic1 from '../assets/gambar/pic1.jpeg';
import pic2 from '../assets/gambar/pic2.jpeg';
import pic3 from '../assets/gambar/pic3.jpeg';
import pic4 from '../assets/gambar/pic4.jpeg';
import pic5 from '../assets/gambar/pic5.jpeg';

// Interfaces for clean typing
export interface Pakej {
  id: string;
  nama: string;
  harga: number;
  maxPax: number;
  deskripsi: string;
  ciri: string[];
}

export interface Addon {
  id: string;
  nama: string;
  harga: number;
  isPerPax: boolean;
  iconName: 'utensils' | 'volume' | 'sparkles' | 'camera' | 'tent';
}

export interface Testimonial {
  id: string;
  nama: string;
  singkatan: string;
  majlis: string;
  ulasan: string;
  bintang: number;
}

export interface Faq {
  q: string;
  a: string;
}

// Visual asset URLs (Local Assets)
export const visualAssets = {
  hero: pic1,
  interior: pic2,
  garden: pic3,
  gallery: [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic1
  ]
};

// Packages list
export const senaraiPakej: Pakej[] = [
  {
    id: 'santai',
    nama: 'Pakej Santai Acara',
    harga: 1500,
    maxPax: 100,
    deskripsi: 'Sesuai untuk majlis kecil, perhimpunan keluarga, atau hari lahir.',
    ciri: [
      'Sewa ruang (Dewan Terbuka & Laman)',
      'Penggunaan selama 6 Jam (Siang / Malam)',
      'Sistem siar raya asas (Basic PA system)',
      'Bilik persediaan berhawa dingin',
      'Meja & 50 kerusi banquet asas',
      'Kapasiti maksimum 100 tetamu'
    ]
  },
  {
    id: 'eksklusif',
    nama: 'Pakej Eksklusif Resepsi',
    harga: 2800,
    maxPax: 250,
    deskripsi: 'Paling popular! Sesuai untuk resepsi perkahwinan, nikah, dan bertunang.',
    ciri: [
      'Sewa keseluruhan Villa & Laman Utama',
      'Penggunaan selama 10 Jam',
      'Sistem Audio & Karaoke Premium',
      '2 bilik bersiap utama berhawa dingin',
      'Meja VIP & 150 kerusi banquet berbalut',
      'Laman berumput untuk upacara nikah',
      'Pengurusan sampah & pembersihan'
    ]
  },
  {
    id: 'premium',
    nama: 'Pakej Villa + Inap (Overnight)',
    harga: 4500,
    maxPax: 300,
    deskripsi: 'Pakej lengkap untuk acara dan penginapan keluarga (5 bilik tidur mewah).',
    ciri: [
      'Sewa Villa Astana + Penginapan 2 Hari 1 Malam',
      '5 bilik tidur berhawa dingin (memuatkan 15-20 orang)',
      'Kolam renang persendirian tanpa had',
      'Sewa Laman Acara selama 12 Jam',
      'Sistem audio pentas & karaoke premium',
      'Kelengkapan BBQ & dapur lengkap',
      'Ruang parking luas (sehingga 40 buah kereta)'
    ]
  }
];

// Add-ons list with serializable icon names
export const senaraiAddons: Addon[] = [
  { 
    id: 'catering', 
    nama: 'Buffet Catering', 
    harga: 25, 
    isPerPax: true,
    iconName: 'utensils'
  },
  { 
    id: 'audio', 
    nama: 'Audio & Karaoke Premium', 
    harga: 300, 
    isPerPax: false,
    iconName: 'volume'
  },
  { 
    id: 'deco', 
    nama: 'Pelaminan & Pintu Gerbang', 
    harga: 1200, 
    isPerPax: false,
    iconName: 'sparkles'
  },
  { 
    id: 'photo', 
    nama: 'Fotografi Acara (4 Jam)', 
    harga: 800, 
    isPerPax: false,
    iconName: 'camera'
  },
  { 
    id: 'canopy', 
    nama: 'Sewa Kanopi (3 Set Khemah)', 
    harga: 600, 
    isPerPax: false,
    iconName: 'tent'
  }
];

// Testimonials data
export const senaraiTestimonial: Testimonial[] = [
  {
    id: 't1',
    nama: 'Puan Noraini Hanim',
    singkatan: 'NH',
    majlis: 'Majlis Pernikahan & Resepsi (Julai 2025)',
    ulasan: 'Sangat berpuas hati sewa Villa Astana untuk majlis nikah anak perempuan saya. Kawasan kolam renang sangat bersih dan tetamu puji landskap taman yang tersusun kemas. Staf pengurusan pun sangat mesra membantu.',
    bintang: 5
  },
  {
    id: 't2',
    nama: 'Encik Ahmad Haziq',
    singkatan: 'AH',
    majlis: 'Family Reunion & BBQ (Disember 2025)',
    ulasan: 'Kami ambil Pakej Villa + Inap untuk reunion keluarga. Kanak-kanak memang suka kolam renang yang luas. Bilik-bilik tidur sangat bersih taraf hotel bertaraf 5 bintang. Dapur pula lengkap dengan peralatan BBQ.',
    bintang: 5
  },
  {
    id: 't3',
    nama: 'Puan Siti Maryam',
    singkatan: 'SM',
    majlis: 'Sambutan Hari Lahir Ke-8 (Mac 2026)',
    ulasan: 'Tempat terbaik untuk menganjurkan sambutan hari lahir. Anak-anak sangat enjoy mandi kolam manakala golongan bapa pula seronok ber-karaoke di dewan berbumbung. Harga sewa juga sangat berpatutan dengan fasiliti.',
    bintang: 5
  }
];

// FAQs data
export const senaraiFaq: Faq[] = [
  {
    q: 'Adakah Villa Astana menyediakan perkhidmatan catering sekali?',
    a: 'Ya, kami menyediakan pakej makanan (Buffet Catering) berkualiti tinggi bermula serendah RM25/pax. Walau bagaimanapun, anda juga dibenarkan membawa katering luar secara percuma tanpa sebarang caj tambahan.'
  },
  {
    q: 'Berapa ramaikah tetamu yang boleh dimuatkan dalam satu-satu masa?',
    a: 'Kawasan dewan terbuka dan laman utama kami boleh memuatkan sehingga 300 tetamu serentak. Jika acara anda berkonsepkan layan diri bergilir (open house), kami boleh menampung sehingga 800 tetamu sepanjang tempoh acara.'
  },
  {
    q: 'Adakah bilik penginapan disediakan jika mengambil Pakej Harian?',
    a: 'Pakej Santai dan Pakej Eksklusif hanya menyediakan bilik persediaan berhawa dingin (1-2 bilik) untuk bersiap dan berehat sepanjang acara. Jika anda memerlukan penginapan bermalam, sila pilih "Pakej Villa + Inap" yang merangkumi keseluruhan 5 bilik tidur mewah.'
  },
  {
    q: 'Bagaimanakah proses bayaran deposit dan pembatalan?',
    a: 'Untuk tempahan tarikh, bayaran deposit tempahan sebanyak RM500 diperlukan. Baki pembayaran perlu dijelaskan sekurang-kurangnya 2 minggu sebelum tarikh acara. Deposit tidak akan dikembalikan sekiranya pembatalan dibuat dalam tempoh kurang dari 30 hari dari tarikh acara.'
  },
  {
    q: 'Adakah ruang parkir kenderaan yang mencukupi untuk tetamu?',
    a: 'Ya, kawasan hadapan Villa Astana mempunyai ruang parkir khas berpagar untuk 10 buah kereta VIP, manakala kawasan luar jalan sekitar halaman villa diteduhi pokok-pokok dan mampu menampung sehingga 40 kenderaan tetamu dengan selamat.'
  }
];

// Contact info
export const contactInfo = {
  alamat: "Lot 123, Jalan Sungai Tua, 68100 Batu Caves, Selangor, Malaysia",
  telefon: "+60 12-345 6789",
  telefonRaw: "60123456789", // Untuk link WhatsApp
  email: "info@villaastana.com.my",
  waktuLawat: "Sabtu & Ahad (10:00 Pagi - 5:00 Petang)"
};
