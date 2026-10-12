import posterImg from '../assets/gambar/poster.jpg';
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
  minPax: number;
  maxPax: number;
  badge?: string;
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

// Venue Profile & Metadata
export const venueDetails = {
  nama: "Rumah Seri Harmoni",
  tema: "Melayu • Nusantara",
  tagline: "Tempat Event Wedding Tradisional",
  deskripsi: "Menyediakan ruang acara perkahwinan tradisional Melayu Nusantara yang eksklusif dengan dewan semi terbuka, seni bina rumah warisan, pelamin tradisional, dan kawasan parkir yang luas serta selamat.",
  fiturUtama: [
    {
      title: "Pelamin Tradisional Melayu",
      desc: "Dekorasi pelamin klasik berunsur warisan Melayu & Nusantara dengan seni ukiran indah dan sentuhan bunga segar.",
      icon: "sparkles"
    },
    {
      title: "Dewan Semi Terbuka",
      desc: "Konsep dewan berbumbung terbuka yang nyaman dengan pengudaraan semulajadi, menyatukan suasana laman dan rumah tradisi.",
      icon: "home"
    },
    {
      title: "Kapasiti 100 - 250 Pax",
      desc: "Keluasan ruang yang ideal dan selesa untuk majlis perkahwinan intim bersama keluarga dan sahabat terdekat.",
      icon: "users"
    },
    {
      title: "Parking Luas & Selamat",
      desc: "Kawasan parkir kenderaan tetamu yang lapang, tersusun rapi serta selamat di perkarangan venue.",
      icon: "car"
    }
  ]
};

// Visual asset URLs
export const visualAssets = {
  hero: posterImg,
  poster: posterImg,
  dewan: pic5,
  rumahTradisi: pic4,
  anjung: pic3,
  ruangBersiap: pic2,
  laman: pic1,
  gallery: [
    posterImg,
    pic4,
    pic5,
    pic2,
    pic3,
    pic1
  ]
};

// Packages list (Configured specifically for 100 - 250 Pax scale)
export const senaraiPakej: Pakej[] = [
  {
    id: 'nikah-harmoni',
    nama: 'Pakej Nikah Tradisi Harmoni',
    harga: 2200,
    minPax: 100,
    maxPax: 150,
    badge: 'Sesuai Majlis Intim',
    deskripsi: 'Pakej istimewa majlis akad nikah & pertunangan bertemakan adat Melayu tradisional.',
    ciri: [
      'Sewa Dewan Semi Terbuka & Anjung Rumah Tradisi (6 Jam)',
      'Pelamin Tradisional Melayu (Mini Dais Klasik)',
      'Kapasiti selesa untuk 100 - 150 tetamu',
      'Ruang bersiap berhawa dingin (Rumah Kayu Warisan)',
      'Set meja & 80 kerusi asas tetamu',
      'Sistem siar raya asas untuk lafaz akad nikah',
      'Parking luas & selamat di dalam kawasan venue'
    ]
  },
  {
    id: 'resepsi-melayu',
    nama: 'Pakej Resepsi Seri Melayu',
    harga: 3800,
    minPax: 150,
    maxPax: 250,
    badge: 'Paling Popular',
    deskripsi: 'Pakej penuh resepsi perkahwinan tradisional Melayu Nusantara dengan kemudahan lengkap.',
    ciri: [
      'Sewa penuh Dewan Semi Terbuka, Anjung & Laman (8 Jam)',
      'Pelamin Tradisional Melayu Eksklusif berserta hiasan pentas',
      'Kapasiti maksimum sehingga 250 tetamu',
      'Meja santapan beradab pengantin bertema Melayu Nusantara',
      '2 bilik persediaan berhawa dingin untuk pengantin & keluarga',
      '150 kerusi banquet beralas kemas & meja tetamu',
      'Sistem Audio & alunan muzik tradisional Nusantara',
      'Kawasan parking luas & selamat untuk semua tetamu',
      'Khidmat pengurusan sampah & pembersihan majlis'
    ]
  },
  {
    id: 'gemilang-nusantara',
    nama: 'Pakej Gemilang Nusantara VIP',
    harga: 5200,
    minPax: 200,
    maxPax: 250,
    badge: 'Pakej Eksklusif VIP',
    deskripsi: 'Pakej perkahwinan beradat serba mewah dengan penggunaan eksklusif sepanjang hari.',
    ciri: [
      'Penggunaan eksklusif keseluruhan Rumah Seri Harmoni (10 Jam)',
      'Dewan Semi Terbuka berhias penuh lampu ambient & floral',
      'Set Pelamin Tradisional Melayu Premium & Busana Gerbang Masuk',
      'Kapasiti optimum 200 - 250 tetamu serentak',
      'Bilik bersiap mewah bertemakan kayu tradisional Melayu',
      'Set Meja Makan Beradab Diraja + Pelayan Khas VIP',
      'Sistem Audio Premium, Mikrofon & Playlist Tradisi Melayu',
      'Ruang parking luas, berpagar & kawalan keselamatan',
      'Hanya 1 majlis sehari — Privasi 100% terjamin'
    ]
  }
];

// Add-ons list
export const senaraiAddons: Addon[] = [
  { 
    id: 'catering', 
    nama: 'Buffet Katering Melayu Tradisional (Nasi Minyak & Lauk Tradisi)', 
    harga: 28, 
    isPerPax: true,
    iconName: 'utensils'
  },
  { 
    id: 'audio', 
    nama: 'Sistem Audio & Gamelan/Lagu Tradisional', 
    harga: 350, 
    isPerPax: false,
    iconName: 'volume'
  },
  { 
    id: 'deco', 
    nama: 'Naik Taraf Pelamin Tradisional & Pintu Gerbang Melayu', 
    harga: 1200, 
    isPerPax: false,
    iconName: 'sparkles'
  },
  { 
    id: 'photo', 
    nama: 'Pakej Fotografi Majlis Tradisional (Lengkap Album)', 
    harga: 950, 
    isPerPax: false,
    iconName: 'camera'
  },
  { 
    id: 'canopy', 
    nama: 'Set Kanopi Laman & Meja Tambahan', 
    harga: 650, 
    isPerPax: false,
    iconName: 'tent'
  }
];

// Testimonials data (Authentic for Rumah Seri Harmoni)
export const senaraiTestimonial: Testimonial[] = [
  {
    id: 't1',
    nama: 'Puan Siti Nurhaliza & En. Khairul',
    singkatan: 'SK',
    majlis: 'Majlis Resepsi Tradisional (200 Pax)',
    ulasan: 'Alhamdulillah majlis perkahwinan kami di Rumah Seri Harmoni berjalan lancar. Konsep dewan semi terbuka sangat berangin dan redup, pelamin tradisional Melayu nampak sangat autentik dan elegan. Tetamu pun puji ruang parking yang luas dan selamat!',
    bintang: 5
  },
  {
    id: 't2',
    nama: 'Encik Faris Danial & Pasangan',
    singkatan: 'FD',
    majlis: 'Majlis Akad Nikah Tradisi (120 Pax)',
    ulasan: 'Sangat sesuai untuk majlis nikah bertemakan Melayu Nusantara. Suasana rumah kayu klasik memberi nostalgia kampung yang indah. Bilik bersiap sejuk berhawa dingin dan pengurusan majlis amat memudahkan urusan kami sekeluarga.',
    bintang: 5
  },
  {
    id: 't3',
    nama: 'Datin Mariana Mohd',
    singkatan: 'MM',
    majlis: 'Majlis Walimatulurus & Bertunang (220 Pax)',
    ulasan: 'Kapasiti 100-250 pax memang kena sangat dengan majlis kami yang intim dan eksklusif. Dewan semi terbuka memberi pencahayaan semulajadi yang sangat cantik dalam gambar perkahwinan. Pilihan terbaik untuk majlis wedding tradisional!',
    bintang: 5
  }
];

// FAQs data
export const senaraiFaq: Faq[] = [
  {
    q: 'Berapakah kapasiti tetamu yang sesuai di Rumah Seri Harmoni?',
    a: 'Rumah Seri Harmoni direka khas untuk kapasiti antara 100 hingga 250 orang tetamu dalam satu masa. Keluasan ini sangat ideal untuk majlis perkahwinan intim, resepsi beradat, dan majlis nikah yang mesra tetamu.'
  },
  {
    q: 'Apakah konsep Dewan Semi Terbuka di venue ini?',
    a: 'Dewan Semi Terbuka kami merupakan dewan berbumbung penuh dengan sisi terbuka yang berlatarbelakangkan taman dan rumah kayu warisan. Konsep ini memberikan pengudaraan semulajadi yang nyaman, teduh dan tidak panas.'
  },
  {
    q: 'Adakah Pelamin Tradisional Melayu sudah disediakan dalam pakej?',
    a: 'Ya, pakej kami merangkumi susun atur Pelamin Tradisional Melayu yang mengetengahkan seni ukiran warisan Nusantara dan hiasan flora eksklusif. Anda juga boleh memilih khidmat naiktaraf rekaan pelamin mengikut citarasa tema anda.'
  },
  {
    q: 'Bagaimanakah dengan kemudahan parkir kenderaan untuk tetamu?',
    a: 'Kami menyediakan kawasan parking yang luas, tersusun dan selamat di perkarangan venue bagi memastikan keselesaan dan keselamatan kenderaan tuan rumah serta tetamu jemputan.'
  },
  {
    q: 'Adakah Rumah Seri Harmoni menerima lebih daripada satu majlis dalam sehari?',
    a: 'Tidak. Bagi mengekalkan kualiti dan privasi majlis anda, kami hanya menerima SATU acara sahaja pada setiap tarikh tempahan (100% privasi eksklusif untuk anda sekeluarga).'
  },
  {
    q: 'Bolehkah saya membawa khidmat katering luar?',
    a: 'Ya, anda bebas menggunakan perkhidmatan katering luar tanpa sebarang caj tersembunyi, atau anda juga boleh memilih add-on buffet katering masakan Melayu tradisional yang kami sediakan.'
  }
];

// Contact info
export const contactInfo = {
  namaVenue: "Rumah Seri Harmoni",
  pegawai: "Puan Rozita",
  tagline: "Tempat Event Wedding Tradisional (Melayu • Nusantara)",
  alamat: "Kampung Warisan Budaya, Selangor, Malaysia",
  telefon: "019-474 5349",
  telefonRaw: "60194745349",
  email: "info@rumahseriharmoni.com.my",
  waktuLawat: "Sabtu & Ahad (10:00 Pagi - 5:00 Petang) - Atas Temujanji"
};
