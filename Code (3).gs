<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aminoto | Fine Indonesian Gastronomy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            DEFAULT: '#C5A059', // Champagne Gold
                            light: '#E8D8B6',
                            dark: '#9A7B3E',
                        },
                        bottle: {
                            800: '#0A2416', // Lighter Bottle Green
                            900: '#05140C', // Dark Bottle Green
                            950: '#020A06', // Deepest Bottle Green (Almost Black)
                        }
                    },
                    fontFamily: {
                        serif: ['"Playfair Display"', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #020A06;
            color: #E8D8B6;
        }
        
        /* Preloader Styles */
        #preloader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background-color: #020A06;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 1s ease-out, visibility 1s ease-out;
        }
        
        .pulse-gold {
            animation: pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-gold {
            0%, 100% { opacity: 1; text-shadow: 0 0 20px rgba(197, 160, 89, 0.5); }
            50% { opacity: .5; text-shadow: 0 0 0px rgba(197, 160, 89, 0); }
        }

        /* Background Hero with Parallax */
        .hero-bg {
            background-image: linear-gradient(to bottom, rgba(2, 10, 6, 0.6), rgba(2, 10, 6, 0.95)), 
                              url('https://i.ibb.co.com/0y548qrJ/36587ca1-5da0-42af-9c0e-3079763c26c5.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .menu-dots {
            flex-grow: 1;
            border-bottom: 1px dotted rgba(197, 160, 89, 0.25);
            margin: 0 1.5rem;
            position: relative;
            top: -6px;
        }

        /* Menu item hover animation */
        .menu-item-text {
            transition: all 0.4s ease;
        }
        .group:hover .menu-item-text {
            transform: translateX(8px);
            color: #C5A059;
        }

        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in.appear {
            opacity: 1;
            transform: translateY(0);
        }

        /* Subtle scroll & float animations */
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
        }

        @keyframes float-logo {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1.02); }
        }
        .animate-float-logo {
            animation: float-logo 6s infinite ease-in-out;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #020A06;
        }
        ::-webkit-scrollbar-thumb {
            background: #C5A059;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #9A7B3E;
        }
    </style>
</head>
<body class="font-sans antialiased text-gray-200 selection:bg-gold selection:text-bottle-950 overflow-hidden">

    <!-- PRELOADER (Animasi Loading Mewah) -->
    <div id="preloader">
        <div class="flex flex-col items-center pulse-gold">
            <i data-lucide="utensils" class="w-8 h-8 text-gold mb-4 opacity-50"></i>
            <span class="text-3xl font-serif text-gold tracking-[0.3em] uppercase mb-2">Aminoto</span>
            <div class="w-16 h-[1px] bg-gold/50"></div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 transition-all duration-500 opacity-0 translate-y-[-20px]" id="navbar">
        <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div class="text-2xl font-serif font-bold text-gold tracking-widest uppercase">
                Aminoto<span class="text-white/80 text-xs font-light ml-3 tracking-[0.2em] uppercase align-middle hidden sm:inline-block">Sambel Dadak</span>
            </div>
            <div class="hidden md:flex space-x-8 lg:space-x-10 text-[12px] lg:text-[13px] font-medium tracking-[0.15em] text-gold-light uppercase">
                <a href="#home" class="hover:text-gold transition-colors duration-300">Beranda</a>
                <a href="#philosophy" class="hover:text-gold transition-colors duration-300">Kisah</a>
                <a href="#menu" class="hover:text-gold transition-colors duration-300">Menu</a>
                <a href="#ulasan" class="hover:text-gold transition-colors duration-300">Ulasan</a>
                <a href="#kontak" class="hover:text-gold transition-colors duration-300">Kontak</a>
            </div>
            <button class="md:hidden text-gold hover:text-white transition-colors">
                <i data-lucide="menu" class="stroke-[1.5]"></i>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <header id="home" class="relative h-screen flex items-center justify-center hero-bg">
        <div class="text-center px-4 z-10 fade-in w-full" id="hero-content">
            <p class="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-6 font-light">Sebuah Mahakarya Kuliner</p>
            <h1 class="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl font-medium tracking-tight leading-tight">
                Pecel Lele Sambel Dadak <br>
                <span class="text-gold italic pr-2">Aminoto</span>
            </h1>
            <div class="w-12 h-[1px] bg-gold/50 mx-auto mb-8"></div>
            <p class="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto mb-14 leading-relaxed px-4">
                Mengangkat cita rasa autentik Nusantara ke tingkat keanggunan tertinggi. Harmoni sempurna antara bahan premium dan racikan sambal legendaris.
            </p>
            <a href="#menu" class="inline-block border border-gold/50 text-gold hover:bg-gold hover:text-bottle-950 transition-all duration-500 px-10 py-4 tracking-[0.2em] text-xs uppercase font-medium backdrop-blur-sm bg-black/20 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                Jelajahi Koleksi
            </a>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow opacity-60">
            <span class="text-[10px] uppercase tracking-[0.3em] text-gold font-light">Scroll</span>
            <div class="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
    </header>

    <!-- Kisah / Philosophy Section -->
    <section id="philosophy" class="pt-32 pb-24 bg-bottle-950 overflow-hidden relative">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
            
            <!-- Area Logo Utama -->
            <div class="w-full md:w-1/2 fade-in relative flex justify-center items-center h-[400px] md:h-[500px]">
                <div class="absolute inset-0 bg-gold/20 blur-[100px] rounded-full transform scale-75 md:scale-100"></div>
                <div class="relative w-full max-w-[320px] md:max-w-[400px] aspect-square flex justify-center items-center z-10 animate-float-logo">
                    <img 
                        id="primary-logo"
                        src="https://i.ibb.co.com/rGt2vJbV/Untitled-design-removebg-preview.png" 
                        alt="Logo Aminoto" 
                        class="w-full h-full object-contain relative z-20 drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                        onerror="document.getElementById('primary-logo').style.display='none'; document.getElementById('fallback-logo').classList.remove('hidden'); document.getElementById('fallback-logo').classList.add('flex');"
                    >
                    <div id="fallback-logo" class="hidden absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto my-auto bg-white/5 backdrop-blur-md rounded-full border border-gold/40 shadow-[0_0_50px_rgba(197,160,89,0.2)] flex-col items-center justify-center p-6 text-center z-10">
                        <i data-lucide="fish" class="w-20 h-20 text-gold mb-3 stroke-[1.5]"></i>
                        <span class="text-xl font-serif text-gold leading-none">Aminoto</span>
                        <div class="w-12 h-[1px] bg-gold/50 my-2"></div>
                        <span class="text-[9px] tracking-[0.15em] text-gray-300 font-light leading-relaxed">
                            (Logo Anda akan<br>muncul di sini)
                        </span>
                    </div>
                </div>
            </div>

            <!-- Teks Kisah -->
            <div class="w-full md:w-1/2 text-center md:text-left fade-in">
                <h2 class="text-gold tracking-[0.3em] text-xs uppercase mb-4 font-medium">Kisah Perjalanan</h2>
                <h3 class="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Tentang <br><span class="italic text-gold-light">Aminoto</span></h3>
                <p class="text-gray-400 font-light leading-loose mb-6 text-justify text-[15px]">
                    Menyapa hangat seluruh <span class="text-gold font-medium">#WargaAminoto</span>, Pecel Lele Sambel Dadak Aminoto hadir sebagai dedikasi kami dalam menghidangkan cita rasa autentik Nusantara. Kami memadukan bahan-bahan pilihan dengan teknik memasak warisan leluhur untuk menciptakan pengalaman bersantap yang berkesan.
                </p>
                <p class="text-gray-400 font-light leading-loose text-justify text-[15px]">
                    Kini, komitmen kami terhadap kualitas dan kelezatan dapat Anda nikmati di berbagai titik. Kami siap melayani dan menyajikan mahkota kebanggaan kami di cabang Cipto Mangunkusumo, Sumber, hingga Ciledug.
                </p>
                <div class="mt-12">
                    <div class="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mx-auto md:mx-0 opacity-50">
                        <i data-lucide="award" class="w-6 h-6 text-gold"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- NEW: KEISTIMEWAAN AMINOTO (The Excellence) -->
    <section class="py-20 bg-[#010603] border-y border-gold/10 relative z-20">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <!-- Pilar 1 -->
                <div class="fade-in flex flex-col items-center">
                    <div class="w-16 h-16 rounded-full bg-bottle-900 border border-gold/30 flex items-center justify-center mb-6 text-gold">
                        <i data-lucide="leaf" class="w-7 h-7 stroke-[1.5]"></i>
                    </div>
                    <h4 class="text-white font-serif text-xl mb-3">Bahan Segar Terpilih</h4>
                    <p class="text-gray-500 font-light text-sm leading-relaxed px-4">Seluruh sajian ikan, unggas, hingga sayuran diseleksi ketat setiap hari untuk memastikan kualitas kesegaran premium.</p>
                </div>
                <!-- Pilar 2 -->
                <div class="fade-in flex flex-col items-center">
                    <div class="w-16 h-16 rounded-full bg-bottle-900 border border-gold/30 flex items-center justify-center mb-6 text-gold">
                        <i data-lucide="flame" class="w-7 h-7 stroke-[1.5]"></i>
                    </div>
                    <h4 class="text-white font-serif text-xl mb-3">Autentik & Presisi</h4>
                    <p class="text-gray-500 font-light text-sm leading-relaxed px-4">Teknik pengolahan warisan dipadukan dengan presisi memasak modern, menciptakan tekstur dan rasa yang sempurna.</p>
                </div>
                <!-- Pilar 3 -->
                <div class="fade-in flex flex-col items-center">
                    <div class="w-16 h-16 rounded-full bg-bottle-900 border border-gold/30 flex items-center justify-center mb-6 text-gold">
                        <i data-lucide="gem" class="w-7 h-7 stroke-[1.5]"></i>
                    </div>
                    <h4 class="text-white font-serif text-xl mb-3">Eksklusivitas Layanan</h4>
                    <p class="text-gray-500 font-light text-sm leading-relaxed px-4">Kami percaya santap malam bukan sekadar makan, melainkan sebuah pengalaman pelayanan yang hangat dan mewah.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="py-32 bg-bottle-900 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-full bg-bottle-800/20 blur-[100px] z-0 pointer-events-none"></div>

        <div class="max-w-6xl mx-auto px-6 relative z-10">
            <div class="text-center mb-24 fade-in">
                <h2 class="text-gold tracking-[0.3em] text-xs uppercase mb-4 font-medium">Koleksi Epikurean</h2>
                <h3 class="text-5xl md:text-6xl font-serif text-white mb-8">Menu Pilihan</h3>
                <div class="w-16 h-[1px] bg-gold/40 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20">
                <!-- MAKANAN UTAMA -->
                <div class="fade-in">
                    <h4 class="text-3xl font-serif text-white mb-10 pb-4 flex items-center justify-between border-b border-gold/20">
                        <span class="italic">Hidangan Utama</span>
                    </h4>
                    <ul class="space-y-7">
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Pecel Lele Signature</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 18.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Ayam Negri</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 23.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Ayam Kampung Asli</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 28.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Bebek Premium</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 30.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Ikan Nila Segar</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 25.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Ikan Gurame Pilihan</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 32.000</span>
                        </li>
                    </ul>
                    <div class="mt-10 p-6 border border-gold/10 bg-bottle-950/50 backdrop-blur-sm text-center shadow-lg">
                        <p class="text-[13px] text-gray-400 font-light leading-relaxed">
                            <span class="text-gold font-serif italic text-base mr-1">Chef's Note:</span> Tersedia teknik pengolahan <span class="text-white">Panggang / Bakar</span> untuk sajian Ikan Gurame, Nila, Ayam & Bebek dengan komplimen nilai <span class="text-gold">Rp 2.000</span>.
                        </p>
                    </div>
                </div>

                <!-- HIDANGAN PENDAMPING -->
                <div class="fade-in">
                    <h4 class="text-3xl font-serif text-white mb-10 pb-4 flex items-center justify-between border-b border-gold/20">
                        <span class="italic">Sajian Pelengkap</span>
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Ati Ampela</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 10.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Cumi Asin</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 10.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Kepala Ayam</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 7.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Sate Kulit</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 7.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Sate Usus</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 5.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Telor Tradisional</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 7.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Tahu Artisan</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 3.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Tempe Pilihan</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 3.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Nasi Putih</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 5.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Krupuk (1 Bks)</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 5.000</span>
                        </div>
                    </div>

                    <h4 class="text-2xl font-serif text-white mt-12 mb-8 pb-3 border-b border-gold/20 italic">Kreasi Nabati</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Pete Premium</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 12.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Karedok Leunca</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 10.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Jukut Goreng</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 8.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Pencok Katel</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 8.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Sayur Asem</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 7.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Kol Goreng</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 6.000</span>
                        </div>
                    </div>
                </div>

                <!-- KOLEKSI SAMBAL -->
                <div class="fade-in lg:col-span-1">
                    <h4 class="text-3xl font-serif text-white mb-10 pb-4 flex items-center justify-between border-b border-gold/20">
                        <span class="italic">Koleksi Sambal</span>
                    </h4>
                    <ul class="space-y-7">
                        <li class="flex items-end justify-between group cursor-pointer">
                            <div class="flex-col">
                                <span class="text-lg text-gray-200 font-light menu-item-text">Sambel Dadak Xtra</span>
                            </div>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 10.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <div class="flex-col">
                                <span class="text-lg text-gray-200 font-light menu-item-text">Sambel Bawang</span>
                            </div>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 7.000</span>
                        </li>
                        <li class="flex items-end justify-between group cursor-pointer">
                            <span class="text-lg text-gray-200 font-light menu-item-text">Sambal Korek</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold font-serif tracking-wider">Rp 7.000</span>
                        </li>
                    </ul>
                </div>

                <!-- MINUMAN -->
                <div class="fade-in lg:col-span-1">
                    <h4 class="text-3xl font-serif text-white mb-10 pb-4 flex items-center justify-between border-b border-gold/20">
                        <span class="italic">Sajian Penutup & Minuman</span>
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Kopi Sunyaragi</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 15.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Es Tjampolay</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 8.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Es Jeruk Segar</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 10.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Jeruk Panas</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 7.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Es Teh Kampul</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 8.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Samore</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 8.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Nipis Madu</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 7.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Es Teh Manis</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 5.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Teh Pucuk</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 5.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Air Mineral</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 5.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Es Teh Tawar</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 3.000</span>
                        </div>
                        <div class="flex items-end justify-between group cursor-pointer">
                            <span class="text-gray-300 font-light menu-item-text">Tawar Hangat</span>
                            <div class="menu-dots"></div>
                            <span class="text-gold/80 font-serif">Rp 1.000</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- TESTIMONIAL (ULASAN) SECTION -->
    <section id="ulasan" class="py-32 bg-[#030d08] relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bottle-900/40 via-[#030d08] to-[#030d08]"></div>
        
        <div class="max-w-4xl mx-auto px-6 text-center relative z-10 w-full fade-in">
            <!-- Tanda Kutip Raksasa Latar -->
            <div class="text-8xl md:text-[150px] font-serif text-gold/10 absolute top-0 left-1/2 -translate-x-1/2 -mt-10 md:-mt-20 leading-none select-none">"</div>
            
            <!-- Carousel Container -->
            <div class="relative h-64 md:h-56 flex items-center justify-center mt-12">
                
                <!-- Slide 1 -->
                <div class="review-slide absolute w-full transition-opacity duration-1000 opacity-100">
                    <p class="text-xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 px-4">
                        "Keseimbangan rasa sambal dadaknya benar-benar luar biasa. Tingkat kepedasannya elegan, menyatu sempurna dengan tekstur ikan yang dimasak presisi. Sebuah Masterpiece lokal!"
                    </p>
                    <h4 class="text-gold tracking-[0.2em] text-[10px] md:text-xs uppercase font-medium">Bapak Wijaya</h4>
                    <p class="text-gray-500 text-[10px] mt-2 tracking-widest uppercase">Kritikus Kuliner - #WargaAminoto</p>
                </div>

                <!-- Slide 2 -->
                <div class="review-slide absolute w-full transition-opacity duration-1000 opacity-0 pointer-events-none">
                    <p class="text-xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 px-4">
                        "Tempat ini berhasil mengangkat derajat Pecel Lele menjadi hidangan bintang lima. Bebek premiumnya sangat lembut dan sambalnya selalu segar setiap saat dipesan."
                    </p>
                    <h4 class="text-gold tracking-[0.2em] text-[10px] md:text-xs uppercase font-medium">Chef Renata M.</h4>
                    <p class="text-gray-500 text-[10px] mt-2 tracking-widest uppercase">Gastronomi Enthusiast - #WargaAminoto</p>
                </div>

                <!-- Slide 3 -->
                <div class="review-slide absolute w-full transition-opacity duration-1000 opacity-0 pointer-events-none">
                    <p class="text-xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 px-4">
                        "Tidak ada duanya. Pelayanan sangat eksklusif dan kualitas bahan-bahannya terasa sangat premium di setiap gigitan. Benar-benar fine dining Nusantara yang sesungguhnya."
                    </p>
                    <h4 class="text-gold tracking-[0.2em] text-[10px] md:text-xs uppercase font-medium">Andi Setiawan</h4>
                    <p class="text-gray-500 text-[10px] mt-2 tracking-widest uppercase">Food Vlogger - #WargaAminoto</p>
                </div>

            </div>
            
            <!-- Dots Indicator -->
            <div class="flex justify-center gap-3 mt-8">
                <div class="review-dot w-2 h-2 rounded-full bg-gold transition-colors duration-300"></div>
                <div class="review-dot w-2 h-2 rounded-full bg-bottle-800 transition-colors duration-300"></div>
                <div class="review-dot w-2 h-2 rounded-full bg-bottle-800 transition-colors duration-300"></div>
            </div>
        </div>
    </section>

    <!-- CABANG & LINKTREE SECTION -->
    <section id="kontak" class="py-32 bg-bottle-950 relative border-t border-gold/10">
        <div class="max-w-3xl mx-auto px-6 relative z-10 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-gold tracking-[0.3em] text-xs uppercase mb-4 font-medium">Informasi & Kunjungan</h2>
                <h3 class="text-4xl md:text-5xl font-serif text-white mb-8">Temukan Kami</h3>
                <div class="w-16 h-[1px] bg-gold/40 mx-auto"></div>
                <p class="text-gray-400 font-light mt-8 text-sm tracking-wide">Pilih lokasi bersantap Anda atau hubungi layanan admin kami.</p>
            </div>

            <!-- TABEL INFO OPERASIONAL -->
            <div class="max-w-md mx-auto mb-16 p-6 border border-gold/20 bg-bottle-900/50 rounded-sm text-center shadow-2xl">
                <i data-lucide="clock" class="w-6 h-6 text-gold mx-auto mb-4 opacity-70"></i>
                <h4 class="text-white font-serif text-xl mb-2">Jam Operasional</h4>
                <p class="text-gray-400 font-light text-sm">Buka Setiap Hari<br><span class="text-gold mt-1 inline-block tracking-widest text-base">10.00 - 22.00 WIB</span></p>
            </div>

            <div class="space-y-0 max-w-2xl mx-auto border-t border-gold/10">
                <!-- Cabang 1: Cipto Mangunkusumo -->
                <div class="group flex items-center justify-between py-7 border-b border-gold/10 hover:border-gold transition-colors duration-500">
                    <div class="flex items-center gap-6">
                        <span class="text-lg md:text-xl font-serif text-gray-300 group-hover:text-white transition-colors duration-500">Cabang Cipto Mangunkusumo</span>
                    </div>
                    <div class="flex items-center gap-3 md:gap-5">
                        <a href="https://maps.app.goo.gl/pAt4BVWZ6pxu6Dnh6?g_st=ipc" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-300 group/btn" title="Lihat Peta Lokasi">
                            <i data-lucide="map-pin" class="w-5 h-5 stroke-[1.5]"></i>
                            <span class="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Peta</span>
                        </a>
                        <div class="w-px h-5 bg-gold/20"></div>
                        <a href="https://wa.me/6285194242550" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-300 group/btn" title="Hubungi via WhatsApp">
                            <i data-lucide="message-circle" class="w-5 h-5 stroke-[1.5]"></i>
                            <span class="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Kontak</span>
                        </a>
                    </div>
                </div>

                <!-- Cabang 2: Sumber -->
                <div class="group flex items-center justify-between py-7 border-b border-gold/10 hover:border-gold transition-colors duration-500">
                    <div class="flex items-center gap-6">
                        <span class="text-lg md:text-xl font-serif text-gray-300 group-hover:text-white transition-colors duration-500">Cabang Sumber</span>
                    </div>
                    <div class="flex items-center gap-3 md:gap-5">
                        <a href="https://maps.app.goo.gl/i7nMRFJ7dApXz8Yu7?g_st=ipc" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-300 group/btn" title="Lihat Peta Lokasi">
                            <i data-lucide="map-pin" class="w-5 h-5 stroke-[1.5]"></i>
                            <span class="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Peta</span>
                        </a>
                        <div class="w-px h-5 bg-gold/20"></div>
                        <a href="https://wa.me/6285185907890" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-300 group/btn" title="Hubungi via WhatsApp">
                            <i data-lucide="message-circle" class="w-5 h-5 stroke-[1.5]"></i>
                            <span class="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Kontak</span>
                        </a>
                    </div>
                </div>

                <!-- Cabang 3: Ciledug -->
                <div class="group flex items-center justify-between py-7 border-b border-gold/10 hover:border-gold transition-colors duration-500">
                    <div class="flex items-center gap-6">
                        <span class="text-lg md:text-xl font-serif text-gray-300 group-hover:text-white transition-colors duration-500">Cabang Ciledug</span>
                    </div>
                    <div class="flex items-center gap-3 md:gap-5">
                        <a href="https://maps.app.goo.gl/WnPWjqRzSP1jizKc6" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-300 group/btn" title="Lihat Peta Lokasi">
                            <i data-lucide="map-pin" class="w-5 h-5 stroke-[1.5]"></i>
                            <span class="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Peta</span>
                        </a>
                        <div class="w-px h-5 bg-gold/20"></div>
                        <a href="https://wa.me/6285196028883" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-300 group/btn" title="Hubungi via WhatsApp">
                            <i data-lucide="message-circle" class="w-5 h-5 stroke-[1.5]"></i>
                            <span class="text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Kontak</span>
                        </a>
                    </div>
                </div>

                <!-- Link 4: KOL Form -->
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf53hKWZnUz-0WPRVTiUYAlLEpcEdP-YBN9DXnkjFTpna2Iiw/viewform?usp=header" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between py-7 border-b border-gold/10 hover:border-gold transition-colors duration-500 mt-4">
                    <div class="flex items-center gap-6">
                        <span class="text-lg md:text-xl font-serif text-gold/80 group-hover:text-gold transition-colors duration-500">Formulir Registrasi KOL & Media</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <i data-lucide="pen-tool" class="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors duration-500 stroke-[1.5]"></i>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#010603] py-16 border-t border-gold/10 relative z-10">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div class="mb-8 md:mb-0">
                <div class="text-2xl font-serif font-medium text-gold tracking-[0.2em] uppercase mb-3">Aminoto</div>
                <p class="text-gray-500 text-xs font-light tracking-widest uppercase">Elevated Nusantara Cuisine</p>
            </div>
            <div class="flex space-x-8 text-gold/50">
                <a href="#" class="hover:text-gold transition-colors"><i data-lucide="instagram" class="w-5 h-5 stroke-[1.5]"></i></a>
                <a href="#" class="hover:text-gold transition-colors"><i data-lucide="facebook" class="w-5 h-5 stroke-[1.5]"></i></a>
                <a href="#" class="hover:text-gold transition-colors"><i data-lucide="map-pin" class="w-5 h-5 stroke-[1.5]"></i></a>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gold/5 text-center text-[10px] uppercase tracking-[0.2em] text-gray-600 font-light">
            &copy; 2026 Pecel Lele Aminoto. All Rights Reserved.
        </div>
    </footer>

    <!-- FLOATING WHATSAPP BUTTON DENGAN PILIHAN CABANG -->
    <div class="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group/fab">
        <!-- Menu Pilihan Cabang -->
        <div id="wa-menu" class="absolute bottom-full right-0 mb-4 hidden flex-col gap-2 w-56 origin-bottom-right transition-all duration-300">
            <a href="https://wa.me/6285194242550" target="_blank" class="bg-bottle-950 border border-gold/30 text-gold p-3 rounded-lg shadow-xl hover:bg-gold hover:text-bottle-950 transition-colors flex items-center gap-3 backdrop-blur-md text-sm font-medium tracking-wide">
                <i data-lucide="message-circle" class="w-5 h-5"></i> Admin Cipto
            </a>
            <a href="https://wa.me/6285185907890" target="_blank" class="bg-bottle-950 border border-gold/30 text-gold p-3 rounded-lg shadow-xl hover:bg-gold hover:text-bottle-950 transition-colors flex items-center gap-3 backdrop-blur-md text-sm font-medium tracking-wide">
                <i data-lucide="message-circle" class="w-5 h-5"></i> Admin Sumber
            </a>
            <a href="https://wa.me/6285196028883" target="_blank" class="bg-bottle-950 border border-gold/30 text-gold p-3 rounded-lg shadow-xl hover:bg-gold hover:text-bottle-950 transition-colors flex items-center gap-3 backdrop-blur-md text-sm font-medium tracking-wide">
                <i data-lucide="message-circle" class="w-5 h-5"></i> Admin Ciledug
            </a>
        </div>
        
        <!-- Tombol Utama -->
        <button id="wa-toggle-btn" class="bg-gold text-bottle-950 p-4 rounded-full shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:shadow-[0_0_35px_rgba(197,160,89,0.6)] hover:bg-gold-light hover:scale-105 transition-all duration-300 flex items-center justify-center relative">
            <i data-lucide="message-circle" class="w-7 h-7 fill-current stroke-bottle-950"></i>
            <!-- Teks Bantuan (Tooltip) -->
            <span class="absolute right-[110%] top-1/2 -translate-y-1/2 bg-bottle-950 text-gold text-xs px-4 py-2 rounded shadow-xl whitespace-nowrap opacity-0 group-hover/fab:opacity-100 transition-opacity duration-300 border border-gold/20 pointer-events-none tracking-widest font-medium">
                Hubungi Admin
            </span>
        </button>
    </div>

    <script>
        // Preloader Logic
        window.addEventListener('load', function() {
            setTimeout(function() {
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                
                // Trigger hero animations after preloader finishes
                setTimeout(() => {
                    document.getElementById('navbar').classList.remove('opacity-0', 'translate-y-[-20px]');
                    document.getElementById('hero-content').classList.add('appear');
                }, 300);
            }, 1000); // Tampil selama 1 detik
            
            // Hapus overflow hidden agar bisa di-scroll
            document.body.classList.remove('overflow-hidden');
        });

        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#020A06]/95', 'backdrop-blur-md', 'border-b', 'border-gold/10', 'py-4');
                navbar.classList.remove('py-5');
            } else {
                navbar.classList.remove('bg-[#020A06]/95', 'backdrop-blur-md', 'border-b', 'border-gold/10', 'py-4');
                navbar.classList.add('py-5');
            }
        });

        // Fade in animation on scroll
        const faders = document.querySelectorAll('.fade-in:not(#hero-content)');
        const appearOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        // Review Slider (Testimonial Auto-Slide Script)
        const slides = document.querySelectorAll('.review-slide');
        const dots = document.querySelectorAll('.review-dot');
        let currentSlide = 0;

        function nextSlide() {
            // Sembunyikan slide aktif
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0', 'pointer-events-none');
            dots[currentSlide].classList.remove('bg-gold');
            dots[currentSlide].classList.add('bg-bottle-800');

            // Pindah ke slide selanjutnya
            currentSlide = (currentSlide + 1) % slides.length;

            // Munculkan slide baru
            slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none');
            slides[currentSlide].classList.add('opacity-100');
            dots[currentSlide].classList.remove('bg-bottle-800');
            dots[currentSlide].classList.add('bg-gold');
        }

        // Jalankan rotasi setiap 5 detik
        setInterval(nextSlide, 5000);

        // Toggle Floating WhatsApp Menu
        const waBtn = document.getElementById('wa-toggle-btn');
        const waMenu = document.getElementById('wa-menu');

        waBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Mencegah event click menyebar ke document
            waMenu.classList.toggle('hidden');
            waMenu.classList.toggle('flex');
        });

        // Tutup menu jika klik di luar area menu/tombol
        document.addEventListener('click', (e) => {
            if (!waMenu.contains(e.target) && !waBtn.contains(e.target)) {
                waMenu.classList.add('hidden');
                waMenu.classList.remove('flex');
            }
        });
    </script>
</body>
</html>