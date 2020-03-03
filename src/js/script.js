var dataReload = document.querySelectorAll("[data-reload]");



var language = {
  eng:{
    Home: "Home",
    About: "About Us",
    Activity: "Activity",
    Contact: "Contact"
  },
  id:{
    Home : "Beranda",
    About : "Tentang Kami",
    Activity : "Kegiatan",
    Contact : "Kontak",
    hth : "Bantuan untuk setiap anak yang tidak memiliki kesempatan untuk mengakses pendidikan",
    hthButton : "Baca Lebih Lanjut",
    b1a : "Tentang",
    b1b : " Kami",
    ctk : "Di sini, kami berdiri sebagai individu yang bertanggung jawab untuk generasi masa depan. Kami bertanggung jawab atas bagaimana kami membangun bangsa hari ini. Komplikasi yang disebabkan oleh",
    b2a : "Apa yang diwakili logo kami?",
    b2b : "Dengan satu tangan yang mewakili seorang anak dan yang lainnya mewakili semua pemuda dan orang dewasa, logo kami hanya melambangkan tangan bantuan terhadap semua anak dan remaja yang tidak memiliki akses ke pendidikan yang layak. Warna biru juga mewakili ketulusan dalam kedamaian dan kesetaraan.",
    b2c : "Lebih Tentang Kami",
    b3a : "Lebih",
    b4a : "Didirikan pada bulan September 2019, Handtohand sekarang berusaha untuk mencapai kesetaraan untuk pendidikan yang berfokus pada berbagai daerah di Indonesia",
    b4b : "Berada sebagai gerakan sosial, kami di sini untuk menciptakan dampak pada kaum muda dengan memberikan bantuan.",
    b4c : "“Setiap langkah yang kita ambil mengungkapkan cakrawala baru, kita telah mengambil langkah pertama hari ini. Sekarang, saya menantang Anda untuk mengambil yang lain ”",
    b5a : "VISI DAN",
    b5b : " MISI",
    b6a : "Untuk membuat fenomena, Untuk mendorong lebih banyak hati untuk belajar",
    b6b : "Tangan ke Tand Berusaha mencapai kesetaraan pendidikan yang telah hilang",
    b7a : "Visi",
    b7b : "Misi",
    b8a : "Visi kami adalah untuk mencapai dunia di mana setiap anak menerima hak yang sama terkait pendidikan. Kami berusaha dan ingin melihat generasi baru kami bekerja bersama tanpa hierarki terpecah yang telah ditempatkan masyarakat saat ini.",
    b8b : "Misi kami adalah untuk akhirnya mencapai impian para pemuda hari ini. Roket lebih tinggi dari masyarakat kita. Kami ingin memastikan bahwa setiap anak yang tidak memiliki pendidikan berkualitas, mencapainya melalui organisasi kami.",
    b9a : "Aktivitas",
    c1a : "Ayo Terlibat!",
    c1b : "Tahukah kamu? Uang yang berasal dari pembelian satu baju akan disumbangkan untuk membeli satu buku untuk satu anak!",
    c2a : "Dapatkan Barang Kami",
    c2b : "Spend it for what it's worth! Lend a helping hand and buy our shirts for 100k only!",
    c2c : "Saya Mau",
    c3a : "Berlangganan untuk menerima pembaruan!",
    c4a : "Baca Lebih Lanjut!",
    d1a : "Hari ini kami menuju ke SDN sukatani 2, sebuah sekolah nasional yang terletak di sepanjang jalan kecil yang tersembunyi di antara area perumahan kecil. Bersama dengan @ seedling.id kami mengajar siswa tentang deforestasi dan betapa pentingnya bagi kita, generasi muda, untuk melindungi lingkungan bumi kita. Kegiatan yang kita lakukan hari ini termasuk membuat gelang / kalung daur ulang serta menanam beberapa pohon ada di sekolah mereka. Di kelas, kami meluangkan waktu untuk duduk dan menjelaskan apa itu deforestasi, bagaimana cara kerjanya, bagaimana cara mencegahnya, mengapa mencegahnya dan lebih seperti itu. Itu mengesankan bagi anak-anak dan tim kami.",
    d1b : "Kunjungan resmi kedua kami adalah ke Sekolah Belajar ASEMKA, tepat di tengah-tengah apa yang orang tidak akan panggil! Meskipun belajar di kasur tipis, tanah berbatu dan di bawah jembatan di mana duduk tegak merupakan perjuangan, anak-anak belajar dengan semangat yang menyala-nyala, terus mengajukan pertanyaan dan ingin terus belajar lebih banyak.",
    d1c : "SDN Harjamukti 2 adalah kunjungan resmi pertama HandtoHand. Sebagai sebuah tim, kami mengunjungi anak-anak Indonesia yang tidak memiliki sumber daya untuk belajar bahasa global; Inggris. Sungguh menakjubkan melihat betapa bertekadnya anak-anak untuk mendapatkan kata-kata bahasa Inggris yang benar. Meskipun tidak memiliki pelajaran bahasa Inggris, anak-anak tahu lebih dari yang diharapkan. Kami membuat janji hari itu, baik anak-anak dan tim kami, bahwa meskipun ada kekurangan yang mungkin terjadi dalam hidup, harapan kami tidak akan jatuh kembali.",
    f1 : "Telepon",
    f2 : "Langganan"
  }
};
if(window.location.hash){
  if(window.location.hash === "#id"){
    n1.textContent = language.id.Home;
    n2.textContent = language.id.About;
    n3.textContent = language.id.Activity;
    n4.textContent = language.id.Contact;
    hth.textContent = language.id.hth;
    hthButton.textContent = language.id.hthButton;
    b1a.textContent = language.id.b1a;
    b1b.textContent = language.id.b1b;
    ctk.textContent = language.id.ctk;
    b2a.textContent = language.id.b2a;
    b2b.textContent = language.id.b2b;
    b2c.textContent = language.id.b2c;
    b3a.textContent = language.id.b3a;
    b3b.textContent = language.id.About;
    b4a.textContent = language.id.b4a;
    b4b.textContent = language.id.b4b;
    b4c.textContent = language.id.b4c;
    b5a.textContent = language.id.b5a;
    b5b.textContent = language.id.b5b;
    b6a.textContent = language.id.b6a;
    b6b.textContent = language.id.b6b;
    b7a.textContent = language.id.b7a;
    b7b.textContent = language.id.b7b;
    b8a.textContent = language.id.b8a;
    b8b.textContent = language.id.b8b;
    b9a.textContent = language.id.b9a;
    b9b.textContent = language.id.b1b;
    c1a.textContent = language.id.c1a;
    c1b.textContent = language.id.c1b;
    c2a.textContent = language.id.c1a;
    c2b.textContent = language.id.c1b;
    c2c.textContent = language.id.c2c;
    c3a.textContent = language.id.c3a;
    c4a.textContent = language.id.c4a;
    c4b.textContent = language.id.c4a;
    c4c.textContent = language.id.c4a;
    d1a.textContent = language.id.d1a;
    d1b.textContent = language.id.d1b;
    d1c.textContent = language.id.d1c;
    f1.textContent = language.id.f1;
    f2.textContent = language.id.f2;
    document.getElementById("f3").style.padding = "4rem";
    document.getElementById("f4").style.padding = "4rem";
  }
}


function timeFunction() {
  setTimeout(function(){ history.go(0); }, 50);
}