var sepetTutari = 0;
var sepet = [];
var aktifKategori = ""; // Şu anda aktif olan kategori

// Ana menu ve alt menü yapısı
// Menü yapısı
let menuYapisi = [
    { baslik: "Pilav ve makarna", altMenu: [],resim: "img/kategori_logolari/makarna_pilav.png" },
    { baslik: "Ara sıcaklar", altMenu: [], resim: "img/kategori_logolari/arasicaklogo.png" },
    { baslik: "Ana yemekler", altMenu: [
  { baslik: "Et yemekleri",    resim: "img/kategori_logolari/anayemekler/etyemekleri.png" },
  { baslik: "Tavuk yemekleri", resim: "img/kategori_logolari/anayemekler/tavukyemek.png" },
  { baslik: "Balık yemekleri", resim: "img/kategori_logolari/anayemekler/balik.png" },
  { baslik: "Sebze yemekleri", resim: "img/kategori_logolari/anayemekler/sebze.png" }
]
 , resim: "img/kategori_logolari/anayemek.png"},
    { baslik: "Çorbalar", altMenu: [], resim: "img/kategori_logolari/corbalar.png" },
    { baslik: "Salatalar", altMenu: [], resim: "img/kategori_logolari/salatalar.png" },
    { baslik: "Tatlılar", 
        altMenu: [
  { baslik: "Şerbetli tatlılar", resim: "img/kategori_logolari/tatlilar/serbetli.png" },
  { baslik: "Sütlü tatlılar",    resim: "img/kategori_logolari/tatlilar/sutlu.png" },
  { baslik: "Pasta ve kekler",   resim: "img/kategori_logolari/tatlilar/pasta.png" }
], resim: "img/kategori_logolari/tatlılar.png" },
    { baslik: "Fast food", altMenu: [], resim: "img/kategori_logolari/fastfood.png" },
    { baslik: "İçecekler", altMenu: [], resim: "img/kategori_logolari/icecekler.png" },
    // Yeni kategoriler ekleniyor
    { baslik: "Hakkımızda", altMenu: [], resim: "img/kategori_logolari/hakkimizda.png" },
    { baslik: "İletişim", altMenu: [], resim: "img/kategori_logolari/iletisim.png" }
];

var urunler = [
    // Çorbalar (Mevcut ürünler korundu)
    {
      id: 1,
      imgyol: "img/corbalar/mercimek.jpeg",
      urunBaslik: "Mercimek Çorbası",
      urunAciklama: "Kırmızı mercimekten yapılan, limonla tatlandırılan klasik çorba.",
      fiyat: 40,
      kategori: "Çorbalar"
    },
    {
      id: 2,
      imgyol: "img/corbalar/ezogelin.jpeg",
      urunBaslik: "Ezogelin Çorbası",
      urunAciklama: "Bulgur, mercimek ve baharatlarla zenginleştirilmiş geleneksel tarif.",
      fiyat: 45,
      kategori: "Çorbalar"
    },
    {
      id: 3,
      imgyol: "img/corbalar/tarhana.jpeg",
      urunBaslik: "Tarhana Çorbası",
      urunAciklama: "Doğal kurutulmuş tarhanadan yapılan nefis kış çorbası.",
      fiyat: 42,
      kategori: "Çorbalar"
    },
    {
      id: 4,
      imgyol: "img/corbalar/domates.jpeg",
      urunBaslik: "Domates Çorbası",
      urunAciklama: "Taze domates ve rendelenmiş kaşar ile servis edilen klasik tat.",
      fiyat: 43,
      kategori: "Çorbalar"
    },
    {
      id: 5,
      imgyol: "img/corbalar/yayla.jpeg",
      urunBaslik: "Yayla Çorbası",
      urunAciklama: "Yoğurt, pirinç ve nane ile yapılan hafif ve lezzetli çorba.",
      fiyat: 44,
      kategori: "Çorbalar"
    },
    {
      id: 6,
      imgyol: "img/corbalar/sehriyeli.jpeg",
      urunBaslik: "Şehriyeli Tavuk Suyu Çorbası",
      urunAciklama: "Tavuk suyu ve şehriye ile yapılan şifalı çorba.",
      fiyat: 47,
      kategori: "Çorbalar"
    },
    {
      id: 7,
      imgyol: "img/corbalar/kellepaca.jpeg",
      urunBaslik: "Kelle Paça Çorbası",
      urunAciklama: "Kolajen deposu, sarımsak ve sirke ile lezzetli sunum.",
      fiyat: 60,
      kategori: "Çorbalar"
    },
    {
      id: 8,
      imgyol: "img/corbalar/iskembe.jpeg",
      urunBaslik: "İşkembe Çorbası",
      urunAciklama: "Sirke ve sarımsakla servis edilen klasik gece çorbası.",
      fiyat: 55,
      kategori: "Çorbalar"
    },
    {
      id: 9,
      imgyol: "img/corbalar/brokoli.jpeg",
      urunBaslik: "Brokoli Çorbası",
      urunAciklama: "Krema ile yumuşatılmış sağlıklı ve yeşil lezzet.",
      fiyat: 46,
      kategori: "Çorbalar"
    },
    {
      id: 10,
      imgyol: "img/corbalar/mantar.jpeg",
      urunBaslik: "Mantar Çorbası",
      urunAciklama: "Kremalı ve yoğun kıvamlı mantar çorbası.",
      fiyat: 49,
      kategori: "Çorbalar"
    },
    {
      id: 11,
      imgyol: "img/corbalar/ispanak.jpeg",
      urunBaslik: "Ispanak Çorbası",
      urunAciklama: "Ispanak ve süt ile yapılmış doyurucu bir başlangıç.",
      fiyat: 41,
      kategori: "Çorbalar"
    },
    {
      id: 12,
      imgyol: "img/corbalar/balkabagı.jpeg",
      urunBaslik: "Balkabağı Çorbası",
      urunAciklama: "Tatlımsı aromasıyla dikkat çeken kış çorbası.",
      fiyat: 50,
      kategori: "Çorbalar"
    },
    {
      id: 13,
      imgyol: "img/corbalar/sebzeli.jpeg",
      urunBaslik: "Sebzeli Çorba",
      urunAciklama: "Mevsim sebzeleri ile hazırlanmış hafif ve sağlıklı.",
      fiyat: 43,
      kategori: "Çorbalar"
    },
    {
      id: 14,
      imgyol: "img/corbalar/kremalikarnabahar.jpeg",
      urunBaslik: "Kremalı Karnabahar Çorbası",
      urunAciklama: "Yumuşak kıvamlı, baharatlı ve doyurucu bir seçenek.",
      fiyat: 48,
      kategori: "Çorbalar"
    },
    {
      id: 15,
      imgyol: "img/corbalar/naneli.jpeg",
      urunBaslik: "Naneli Yoğurt Çorbası",
      urunAciklama: "Yoğurt ve kuru nane ile yapılan serinletici çorba.",
      fiyat: 44,
      kategori: "Çorbalar"
    },
    {
      id: 16,
      imgyol: "img/corbalar/tavuksuyu.jpeg",
      urunBaslik: "Tavuk Suyu Çorbası",
      urunAciklama: "Gerçek tavuk suyu ile yapılan klasik bir çorba.",
      fiyat: 50,
      kategori: "Çorbalar"
    },
    {
      id: 17,
      imgyol: "img/corbalar/bulgur.jpeg",
      urunBaslik: "Bulgurlu Çorba",
      urunAciklama: "İç ısıtan, kırmızı mercimek ve bulgurlu Anadolu çorbası.",
      fiyat: 42,
      kategori: "Çorbalar"
    },
    {
      id: 18,
      imgyol: "img/corbalar/diyet.jpeg",
      urunBaslik: "Diyet Çorba",
      urunAciklama: "Düşük kalorili, sebze ağırlıklı sağlıklı bir başlangıç.",
      fiyat: 38,
      kategori: "Çorbalar"
    },
    {
      id: 19,
      imgyol: "img/corbalar/firinda.jpeg",
      urunBaslik: "Fırında Soğan Çorbası",
      urunAciklama: "Karamelize soğan ve rendelenmiş kaşarla fırında sunum.",
      fiyat: 51,
      kategori: "Çorbalar"
    },
    {
      id: 20,
      imgyol: "img/corbalar/soganli.jpeg",
      urunBaslik: "Soğan Çorbası",
      urunAciklama: "Soğanın en lezzetli hali, yumuşacık bir başlangıç.",
      fiyat: 39,
      kategori: "Çorbalar"
    },
    
    // Pilav ve makarna (20 ürün)
    {
      id: 21,
      imgyol: "img/pilav/pirinc.jpeg",
      urunBaslik: "Sade Pirinç Pilavı",
      urunAciklama: "Tereyağı ile pişirilmiş lezzetli ve doyurucu pirinç pilavı.",
      fiyat: 35,
      kategori: "Pilav ve makarna"
    },
    {
      id: 22,
      imgyol: "img/pilav/bulgur.jpeg",
      urunBaslik: "Bulgur Pilavı",
      urunAciklama: "Domates salçası ve taze sebzelerle zenginleştirilmiş geleneksel bulgur pilavı.",
      fiyat: 32,
      kategori: "Pilav ve makarna"
    },
    {
      id: 23,
      imgyol: "img/pilav/sebzeli.jpeg",
      urunBaslik: "Sebzeli Pilav",
      urunAciklama: "Havuç, bezelye ve mısır ile renklendirilmiş aromatik pilav.",
      fiyat: 38,
      kategori: "Pilav ve makarna"
    },
    {
      id: 24,
      imgyol: "img/pilav/domatesli.jpeg",
      urunBaslik: "Domatesli Pilav",
      urunAciklama: "Taze domates ve domates sosu ile pişirilmiş nefis pilav.",
      fiyat: 36,
      kategori: "Pilav ve makarna"
    },
    {
      id: 25,
      imgyol: "img/pilav/ic.jpeg",
      urunBaslik: "İç Pilav",
      urunAciklama: "Kuş üzümü, çam fıstığı ve baharatlarla zenginleştirilmiş özel pilav.",
      fiyat: 45,
      kategori: "Pilav ve makarna"
    },
    {
      id: 26,
      imgyol: "img/pilav/tavuklu.jpeg",
      urunBaslik: "Tavuklu Pilav",
      urunAciklama: "Özenle pişirilmiş tavuk parçaları ile zenginleştirilmiş pilav.",
      fiyat: 55,
      kategori: "Pilav ve makarna"
    },
    {
      id: 27,
      imgyol: "img/pilav/nohutlu.jpeg",
      urunBaslik: "Nohutlu Pilav",
      urunAciklama: "Haşlanmış nohut ile protein değeri yükseltilmiş pilav.",
      fiyat: 40,
      kategori: "Pilav ve makarna"
    },
    {
      id: 28,
      imgyol: "img/pilav/etli.jpeg",
      urunBaslik: "Etli Pilav",
      urunAciklama: "Kuzu eti parçaları ile zenginleştirilmiş lezzetli pilav.",
      fiyat: 65,
      kategori: "Pilav ve makarna"
    },
    {
      id: 29,
      imgyol: "img/pilav/özbek.jpeg",
      urunBaslik: "Özbek Pilav",
      urunAciklama: "İç baklalı, dereotlu ve tereyağlı geleneksel meyhane pilavı.",
      fiyat: 42,
      kategori: "Pilav ve makarna"
    },
    {
      id: 30,
      imgyol: "img/makarna/spagetti.jpeg",
      urunBaslik: "Spagetti Bolonez",
      urunAciklama: "Kıymalı, domatesli İtalyan usulü klasik makarna.",
      fiyat: 60,
      kategori: "Pilav ve makarna"
    },
    {
      id: 31,
      imgyol: "img/makarna/penne.jpeg",
      urunBaslik: "Penne Arabiata",
      urunAciklama: "Acılı domates sosu ile hazırlanan İtalyan lezzeti.",
      fiyat: 58,
      kategori: "Pilav ve makarna"
    },
    {
      id: 32,
      imgyol: "img/makarna/fettucini.jpeg",
      urunBaslik: "Fettuccine Alfredo",
      urunAciklama: "Krema ve parmesan peyniri ile hazırlanmış kremsi makarna.",
      fiyat: 65,
      kategori: "Pilav ve makarna"
    },
    {
      id: 33,
      imgyol: "img/makarna/lazanya.jpeg",
      urunBaslik: "Lazanya",
      urunAciklama: "Kıyma, beşamel sos ve peynir ile katmanlı pişirilmiş İtalyan fırın makarnası.",
      fiyat: 70,
      kategori: "Pilav ve makarna"
    },
    {
      id: 34,
      imgyol: "img/makarna/tortellini.jpeg",
      urunBaslik: "Tortellini",
      urunAciklama: "İçi peynir dolgulu, krema soslu mini İtalyan hamur kesesi.",
      fiyat: 68,
      kategori: "Pilav ve makarna"
    },
    {
      id: 35,
      imgyol: "img/makarna/mac.jpeg",
      urunBaslik: "Mac and Cheese",
      urunAciklama: "Cheddar peyniri soslu, fırında kızartılmış Amerikan makarnası.",
      fiyat: 55,
      kategori: "Pilav ve makarna"
    },
    {
      id: 36,
      imgyol: "img/makarna/mantı.jpeg",
      urunBaslik: "Mantı",
      urunAciklama: "El açması hamur, kıyma dolgusu, sarımsaklı yoğurt ve kırmızı sos ile servis.",
      fiyat: 62,
      kategori: "Pilav ve makarna"
    },
    {
      id: 37,
      imgyol: "img/makarna/eriste.jpeg",
      urunBaslik: "Ev Yapımı Erişte",
      urunAciklama: "El açması erişte, tereyağı ve peynir ile servis.",
      fiyat: 50,
      kategori: "Pilav ve makarna"
    },
    {
      id: 38,
      imgyol: "img/makarna/carbonara.jpeg",
      urunBaslik: "Spagetti Carbonara",
      urunAciklama: "Yumurta, peynir ve pancetta ile hazırlanan otantik İtalyan lezzeti.",
      fiyat: 65,
      kategori: "Pilav ve makarna"
    },
    {
      id: 39,
      imgyol: "img/makarna/deniz.jpeg",
      urunBaslik: "Deniz Mahsullü Makarna",
      urunAciklama: "Karides, midye ve kalamar ile zenginleştirilmiş özel makarna.",
      fiyat: 85,
      kategori: "Pilav ve makarna"
    },
    {
      id: 40,
      imgyol: "img/makarna/pestolu.jpeg",
      urunBaslik: "Pesto Soslu Makarna",
      urunAciklama: "Fesleğen, çam fıstığı ve parmesan peynirinden yapılan pesto sos ile.",
      fiyat: 60,
      kategori: "Pilav ve makarna"
    },
    
    // Ara sıcaklar (20 ürün)
    {
      id: 41,
      imgyol: "img/arasicak/sigara.jpeg",
      urunBaslik: "Sigara Böreği",
      urunAciklama: "El açması yufka ile sarılmış beyaz peynir dolgulu çıtır börek.",
      fiyat: 45,
      kategori: "Ara sıcaklar"
    },
    {
      id: 42,
      imgyol: "img/arasicak/pacanga.jpeg",
      urunBaslik: "Paçanga Böreği",
      urunAciklama: "Yufka içerisinde pastırma, kaşar peyniri ve baharat karışımı ile.",
      fiyat: 60,
      kategori: "Ara sıcaklar"
    },
    {
      id: 43,
      imgyol: "img/arasicak/icli.jpeg",
      urunBaslik: "İçli Köfte",
      urunAciklama: "Bulgur hamuru içinde baharatlı kıyma, ceviz ve soğan harcı ile.",
      fiyat: 55,
      kategori: "Ara sıcaklar"
    },
    {
      id: 44,
      imgyol: "img/arasicak/kalamar.jpeg",
      urunBaslik: "Kalamar Tava",
      urunAciklama: "Tartar sos eşliğinde kızartılmış halka kalamar.",
      fiyat: 80,
      kategori: "Ara sıcaklar"
    },
    {
      id: 45,
      imgyol: "img/arasicak/karides.jpeg",
      urunBaslik: "Karides Güveç",
      urunAciklama: "Domates sos, sarımsak ve peynir ile fırınlanmış taze karides.",
      fiyat: 90,
      kategori: "Ara sıcaklar"
    },
    {
      id: 46,
      imgyol: "img/arasicak/muska.jpeg",
      urunBaslik: "Muska Böreği",
      urunAciklama: "Üçgen formunda, ıspanak ve peynir dolgulu çıtır börek.",
      fiyat: 48,
      kategori: "Ara sıcaklar"
    },
    {
      id: 47,
      imgyol: "img/arasicak/patateskofte.jpeg",
      urunBaslik: "Patates Köftesi",
      urunAciklama: "Baharatlı patates hamuru ile hazırlanmış, dışı çıtır içi yumuşak köfte.",
      fiyat: 42,
      kategori: "Ara sıcaklar"
    },
    {
      id: 48,
      imgyol: "img/arasicak/arnavut.jpeg",
      urunBaslik: "Arnavut Ciğeri",
      urunAciklama: "Kızartılmış taze dana ciğeri, sumak, kırmızı soğan ile servis.",
      fiyat: 65,
      kategori: "Ara sıcaklar"
    },
    {
      id: 49,
      imgyol: "img/arasicak/sucuk.jpeg",
      urunBaslik: "Sucuk Izgara",
      urunAciklama: "Izgarada pişirilmiş dilimlenmiş fermente sucuk.",
      fiyat: 58,
      kategori: "Ara sıcaklar"
    },
    {
      id: 50,
      imgyol: "img/arasicak/hellim.jpeg",
      urunBaslik: "Hellim Peyniri Izgara",
      urunAciklama: "Izgarada pişirilmiş Kıbrıs hellim peyniri, akdeniz yeşillikleri ile.",
      fiyat: 62,
      kategori: "Ara sıcaklar"
    },
    {
      id: 51,
      imgyol: "img/arasicak/hummus.jpeg",
      urunBaslik: "Humus",
      urunAciklama: "Nohut ezmesi, tahin, zeytinyağı ve baharatlar ile.",
      fiyat: 45,
      kategori: "Ara sıcaklar"
    },
    {
      id: 52,
      imgyol: "img/arasicak/falafel.jpeg",
      urunBaslik: "Falafel",
      urunAciklama: "Nohut ve baharatlarla hazırlanan, kızartılmış Orta Doğu lezzeti.",
      fiyat: 50,
      kategori: "Ara sıcaklar"
    },
    {
      id: 53,
      imgyol: "img/arasicak/kroket.jpeg",
      urunBaslik: "Patates Kroket",
      urunAciklama: "ezilmiş patatesin kızartılması şeklinde yapılan bir yiyecek.",
      fiyat: 75,
      kategori: "Ara sıcaklar"
    },
    {
      id: 54,
      imgyol: "img/arasicak/patateskumpir.jpeg",
      urunBaslik: "Patates Kumpir",
      urunAciklama: "Fırınlanmış patates kabuğu içinde kaşar peyniri ve pastırma.",
      fiyat: 55,
      kategori: "Ara sıcaklar"
    },
    {
      id: 55,
      imgyol: "img/arasicak/kasarli.jpeg",
      urunBaslik: "Kaşarlı Mantar",
      urunAciklama: "Fırında eritilmiş kaşar peyniriyle servis edilen mantar.",
      fiyat: 60,
      kategori: "Ara sıcaklar"
    },
    {
      id: 56,
      imgyol: "img/arasicak/ciger.jpeg",
      urunBaslik: "Ciğer Şiş",
      urunAciklama: "Baharat ve zeytinyağı ile marine edilmiş, şişte pişirilmiş kuzu ciğeri.",
      fiyat: 65,
      kategori: "Ara sıcaklar"
    },
    {
      id: 57,
      imgyol: "img/arasicak/patatesyumurta.jpeg",
      urunBaslik: "Patatesli Yumurta",
      urunAciklama: "Kızartılmış patates ile pişirilmiş yumurta, baharat ile.",
      fiyat: 40,
      kategori: "Ara sıcaklar"
    },
    {
      id: 58,
      imgyol: "img/arasicak/hamsi.jpeg",
      urunBaslik: "Hamsi Tava",
      urunAciklama: "Mısır ununa bulanmış ve kızartılmış taze hamsi balığı.",
      fiyat: 60,
      kategori: "Ara sıcaklar"
    },
    {
      id: 59,
      imgyol: "img/arasicak/soganhalkasi.jpeg",
      urunBaslik: "Soğan Halkası",
      urunAciklama: "Galeta ununa bulanıp kızartılmış çıtır soğan halkaları.",
      fiyat: 38,
      kategori: "Ara sıcaklar"
    },
    {
      id: 60,
      imgyol: "img/arasicak/patlican.jpeg",
      urunBaslik: "Patlıcan Kızartma",
      urunAciklama: "Kızartılmış patlıcan dilimleri, yoğurt sos ile servis edilir.",
      fiyat: 45,
      kategori: "Ara sıcaklar"
    },
    
    // Et yemekleri (Ana yemekler altında alt kategori, 20 ürün)
    {
      id: 61,
      imgyol: "img/ana_yemek/et/antrikot.jpeg",
      urunBaslik: "Antrikot Steak",
      urunAciklama: "300 gr özel kesim antrikot, ızgarada pişirilmiş, sebze garnitürü ile.",
      fiyat: 180,
      kategori: "Et yemekleri"
    },
    {
      id: 62,
      imgyol: "img/ana_yemek/et/bonfile.jpeg",
      urunBaslik: "Bonfile",
      urunAciklama: "250 gr dana bonfile, mantar sos ve patates püresi eşliğinde.",
      fiyat: 190,
      kategori: "Et yemekleri"
    },
    {
      id: 63,
      imgyol: "img/ana_yemek/et/beefwellington.jpeg",
      urunBaslik: "Beef Wellington",
      urunAciklama: "Milföy hamuru içinde pişirilmiş dana bonfile, mantar duxelle ile.",
      fiyat: 210,
      kategori: "Et yemekleri"
    },
    {
      id: 64,
      imgyol: "img/ana_yemek/et/dalyan.jpeg",
      urunBaslik: "Dalyan Köfte",
      urunAciklama: "İçi yumurtalı, dışı kıyma ile kaplı fırında pişirilmiş özel köfte.",
      fiyat: 120,
      kategori: "Et yemekleri"
    },
    {
      id: 65,
      imgyol: "img/ana_yemek/et/adana.jpeg",
      urunBaslik: "Adana Kebap",
      urunAciklama: "Özel baharatlarla hazırlanmış, şişte pişirilmiş kıyma kebabı.",
      fiyat: 110,
      kategori: "Et yemekleri"
    },
    {
      id: 66,
      imgyol: "img/ana_yemek/et/urfa.jpeg",
      urunBaslik: "Urfa Kebap",
      urunAciklama: "Acısız, şişte pişirilmiş kıyma kebabı, yanında söğüş ve bulgur pilavı ile.",
      fiyat: 105,
      kategori: "Et yemekleri"
    },
    {
      id: 67,
      imgyol: "img/ana_yemek/et/kuzu.jpeg",
      urunBaslik: "Kuzu Tandır",
      urunAciklama: "Fırında 6 saat yavaş pişirilmiş, kemikten ayrılan kuzu but.",
      fiyat: 160,
      kategori: "Et yemekleri"
    },
    {
      id: 68,
      imgyol: "img/ana_yemek/et/iskender.jpeg",
      urunBaslik: "İskender Kebap",
      urunAciklama: "Döner et, tereyağı, domates sos ve yoğurt ile servis edilen klasik lezzet.",
      fiyat: 130,
      kategori: "Et yemekleri"
    },
    {
      id: 69,
      imgyol: "img/ana_yemek/et/beytı.jpeg",
      urunBaslik: "Beyti Kebap",
      urunAciklama: "Lavaşa sarılmış kıyma kebabı, tereyağlı domates sos ile servis edilir.",
      fiyat: 125,
      kategori: "Et yemekleri"
    },
    {
      id: 70,
      imgyol: "img/ana_yemek/et/cag.jpeg",
      urunBaslik: "Cağ Kebabı",
      urunAciklama: "Erzurum usulü, yatay şişte odun ateşinde pişirilen kuzu eti.",
      fiyat: 135,
      kategori: "Et yemekleri"
    },
    {
      id: 71,
      imgyol: "img/ana_yemek/et/tbone.jpeg",
      urunBaslik: "T-Bone Steak",
      urunAciklama: "450 gr T kemikli özel kesim dana pirzola, baharatlı patates ile.",
      fiyat: 220,
      kategori: "Et yemekleri"
    },
    {
      id: 72,
      imgyol: "img/ana_yemek/et/kusbasi.jpeg",
      urunBaslik: "Kuşbaşı Güveç",
      urunAciklama: "Dana kuşbaşı et, sebzeler ve baharat ile güveçte pişirilmiş.",
      fiyat: 110,
      kategori: "Et yemekleri"
    },
    {
      id: 73,
      imgyol: "img/ana_yemek/et/hunkar.jpeg",
      urunBaslik: "Hünkar Beğendi",
      urunAciklama: "Közlenmiş patlıcan beğendisi üzerinde dana kuşbaşı et.",
      fiyat: 120,
      kategori: "Et yemekleri"
    },
    {
      id: 74,
      imgyol: "img/ana_yemek/et/inegol.jpeg",
      urunBaslik: "İnegöl Köfte",
      urunAciklama: "Geleneksel İnegöl usulü köfte, yanında pilav ve salata ile.",
      fiyat: 95,
      kategori: "Et yemekleri"
    },
    {
      id: 75,
      imgyol: "img/ana_yemek/et/ali.jpeg",
      urunBaslik: "Ali Nazik Kebabı",
      urunAciklama: "Közlenmiş patlıcan yatağında kuzu eti, sarımsaklı yoğurt eşliğinde.",
      fiyat: 145,
      kategori: "Et yemekleri"
    },
    {
      id: 76,
      imgyol: "img/ana_yemek/et/kasap.jpeg",
      urunBaslik: "Kasap Köfte",
      urunAciklama: "El yapımı ızgara köfte, acılı ezme, soğan ve yeşillik ile.",
      fiyat: 100,
      kategori: "Et yemekleri"
    },
    {
      id: 77,
      imgyol: "img/ana_yemek/et/pirzola.jpeg",
      urunBaslik: "Kuzu Pirzola",
      urunAciklama: "Özel marine edilmiş kuzu pirzola, fırınlanmış sebzeler ile.",
      fiyat: 175,
      kategori: "Et yemekleri"
    },
    {
      id: 78,
      imgyol: "img/ana_yemek/et/taskalem.jpeg",
      urunBaslik: "Taş Kalem Kebabı",
      urunAciklama: "İnce kesilmiş kuzu eti, sebzeler ve özel baharat karışımı ile.",
      fiyat: 140,
      kategori: "Et yemekleri"
    },
    {
      id: 79,
      imgyol: "img/ana_yemek/et/kulbastı.jpeg",
      urunBaslik: "Kuzu Külbastı",
      urunAciklama: "İnce dövülmüş kuzu eti, özel baharatlarla ızgara edilmiş.",
      fiyat: 155,
      kategori: "Et yemekleri"
    },
    {
      id: 80,
      imgyol: "img/ana_yemek/et/doner.jpeg",
      urunBaslik: "Porsiyon Döner",
      urunAciklama: "El yapımı döner, pilav ve köz domates ile servis edilir.",
      fiyat: 120,
      kategori: "Et yemekleri"
    },
    {
        id: 61,
        imgyol: "img/ana_yemek/et/antrikot.jpeg",
        urunBaslik: "Antrikot Steak",
        urunAciklama: "300 gr özel kesim antrikot, ızgarada pişirilmiş, sebze garnitürü ile.",
        fiyat: 180,
        kategori: "Ana yemekler"
      },
      {
        id: 62,
        imgyol: "img/ana_yemek/et/bonfile.jpeg",
        urunBaslik: "Bonfile",
        urunAciklama: "250 gr dana bonfile, mantar sos ve patates püresi eşliğinde.",
        fiyat: 190,
        kategori: "Ana yemekler"
      },
      {
        id: 63,
        imgyol: "img/ana_yemek/et/beefwellington.jpeg",
        urunBaslik: "Beef Wellington",
        urunAciklama: "Milföy hamuru içinde pişirilmiş dana bonfile, mantar duxelle ile.",
        fiyat: 210,
        kategori: "Ana yemekler"
      },
      {
        id: 64,
        imgyol: "img/ana_yemek/et/dalyan.jpeg",
        urunBaslik: "Dalyan Köfte",
        urunAciklama: "İçi yumurtalı, dışı kıyma ile kaplı fırında pişirilmiş özel köfte.",
        fiyat: 120,
        kategori: "Ana yemekler"
      },
      {
        id: 65,
        imgyol: "img/ana_yemek/et/adana.jpeg",
        urunBaslik: "Adana Kebap",
        urunAciklama: "Özel baharatlarla hazırlanmış, şişte pişirilmiş kıyma kebabı.",
        fiyat: 110,
        kategori: "Ana yemekler"
      },
      {
        id: 66,
        imgyol: "img/ana_yemek/et/urfa.jpeg",
        urunBaslik: "Urfa Kebap",
        urunAciklama: "Acısız, şişte pişirilmiş kıyma kebabı, yanında söğüş ve bulgur pilavı ile.",
        fiyat: 105,
        kategori: "Ana yemekler"
      },
      {
        id: 67,
        imgyol: "img/ana_yemek/et/kuzu.jpeg",
        urunBaslik: "Kuzu Tandır",
        urunAciklama: "Fırında 6 saat yavaş pişirilmiş, kemikten ayrılan kuzu but.",
        fiyat: 160,
        kategori: "Ana yemekler"
      },
      {
        id: 68,
        imgyol: "img/ana_yemek/et/iskender.jpeg",
        urunBaslik: "İskender Kebap",
        urunAciklama: "Döner et, tereyağı, domates sos ve yoğurt ile servis edilen klasik lezzet.",
        fiyat: 130,
        kategori: "Ana yemekler"
      },
      {
        id: 69,
        imgyol: "img/ana_yemek/et/beytı.jpeg",
        urunBaslik: "Beyti Kebap",
        urunAciklama: "Lavaşa sarılmış kıyma kebabı, tereyağlı domates sos ile servis edilir.",
        fiyat: 125,
        kategori: "Ana yemekler"
      },
      {
        id: 70,
        imgyol: "img/ana_yemek/et/cag.jpeg",
        urunBaslik: "Cağ Kebabı",
        urunAciklama: "Erzurum usulü, yatay şişte odun ateşinde pişirilen kuzu eti.",
        fiyat: 135,
        kategori: "Ana yemekler"
      },
      {
        id: 71,
        imgyol: "img/ana_yemek/et/tbone.jpeg",
        urunBaslik: "T-Bone Steak",
        urunAciklama: "450 gr T kemikli özel kesim dana pirzola, baharatlı patates ile.",
        fiyat: 220,
        kategori: "Ana yemekler"
      },
      {
        id: 72,
        imgyol: "img/ana_yemek/et/kusbasi.jpeg",
        urunBaslik: "Kuşbaşı Güveç",
        urunAciklama: "Dana kuşbaşı et, sebzeler ve baharat ile güveçte pişirilmiş.",
        fiyat: 110,
        kategori: "Ana yemekler"
      },
      {
        id: 73,
        imgyol: "img/ana_yemek/et/hunkar.jpeg",
        urunBaslik: "Hünkar Beğendi",
        urunAciklama: "Közlenmiş patlıcan beğendisi üzerinde dana kuşbaşı et.",
        fiyat: 120,
        kategori: "Ana yemekler"
      },
      {
        id: 74,
        imgyol: "img/ana_yemek/et/inegol.jpeg",
        urunBaslik: "İnegöl Köfte",
        urunAciklama: "Geleneksel İnegöl usulü köfte, yanında pilav ve salata ile.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 75,
        imgyol: "img/ana_yemek/et/ali.jpeg",
        urunBaslik: "Ali Nazik Kebabı",
        urunAciklama: "Közlenmiş patlıcan yatağında kuzu eti, sarımsaklı yoğurt eşliğinde.",
        fiyat: 145,
        kategori: "Ana yemekler"
      },
      {
        id: 76,
        imgyol: "img/ana_yemek/et/kasap.jpeg",
        urunBaslik: "Kasap Köfte",
        urunAciklama: "El yapımı ızgara köfte, acılı ezme, soğan ve yeşillik ile.",
        fiyat: 100,
        kategori: "Ana yemekler"
      },
      {
        id: 77,
        imgyol: "img/ana_yemek/et/pirzola.jpeg",
        urunBaslik: "Kuzu Pirzola",
        urunAciklama: "Özel marine edilmiş kuzu pirzola, fırınlanmış sebzeler ile.",
        fiyat: 175,
        kategori: "Ana yemekler"
      },
      {
        id: 78,
        imgyol: "img/ana_yemek/et/taskalem.jpeg",
        urunBaslik: "Taş Kalem Kebabı",
        urunAciklama: "İnce kesilmiş kuzu eti, sebzeler ve özel baharat karışımı ile.",
        fiyat: 140,
        kategori: "Ana yemekler"
      },
      {
        id: 79,
        imgyol: "img/ana_yemek/et/kulbastı.jpeg",
        urunBaslik: "Kuzu Külbastı",
        urunAciklama: "İnce dövülmüş kuzu eti, özel baharatlarla ızgara edilmiş.",
        fiyat: 155,
        kategori: "Ana yemekler"
      },
      {
        id: 80,
        imgyol: "img/ana_yemek/et/doner.jpeg",
        urunBaslik: "Porsiyon Döner",
        urunAciklama: "El yapımı döner, pilav ve köz domates ile servis edilir.",
        fiyat: 120,
        kategori: "Ana yemekler"
      },
    
    // Tavuk yemekleri (Ana yemekler altında alt kategori, 20 ürün)
    {
      id: 81,
      imgyol: "img/ana_yemek/tavuk/cordon.jpeg",
      urunBaslik: "Tavuk Cordon Bleu",
      urunAciklama: "Jambon ve peynir dolgulu tavuk göğsü, galeta ununa bulanıp kızartılmış.",
      fiyat: 95,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 82,
      imgyol: "img/ana_yemek/tavuk/sote.jpeg",
      urunBaslik: "Tavuk Sote",
      urunAciklama: "Doğranmış tavuk göğsü, mantar, biber ve özel sos ile sotelenmiş.",
      fiyat: 85,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 83,
      imgyol: "img/ana_yemek/tavuk/ızgara.jpeg",
      urunBaslik: "Izgara Tavuk Göğsü",
      urunAciklama: "Marine edilmiş tavuk göğsü ızgara, sebze garnitür ile servis.",
      fiyat: 80,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 84,
      imgyol: "img/ana_yemek/tavuk/but.jpeg",
      urunBaslik: "Fırın Tavuk But",
      urunAciklama: "Özel baharatlarla marine edilmiş, fırında pişirilmiş tavuk but.",
      fiyat: 78,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 85,
      imgyol: "img/ana_yemek/tavuk/pirzola.jpeg",
      urunBaslik: "Tavuk Pirzola",
      urunAciklama: "Kemikli tavuk pirzola, özel baharatlar ve sebzelerle ızgarada pişirilmiş.",
      fiyat: 90,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 86,
      imgyol: "img/ana_yemek/tavuk/schnitzel.jpeg",
      urunBaslik: "Tavuk Schnitzel",
      urunAciklama: "İnce dövülmüş tavuk göğsü, galetaya bulanıp kızartılmış.",
      fiyat: 88,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 87,
      imgyol: "img/ana_yemek/tavuk/curry.jpeg",
      urunBaslik: "Tavuk Curry",
      urunAciklama: "Hint baharatları ile pişirilmiş kremsi soslu tavuk parçaları.",
      fiyat: 95,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 88,
      imgyol: "img/ana_yemek/tavuk/satay.jpeg",
      urunBaslik: "Tavuk Satay",
      urunAciklama: "Şişte pişirilmiş marine tavuk, yer fıstığı sosu ile servis edilir.",
      fiyat: 92,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 89,
      imgyol: "img/ana_yemek/tavuk/kanat.jpeg",
      urunBaslik: "Buffalo Tavuk Kanatları",
      urunAciklama: "Acılı sos ile marine edilmiş kızarmış tavuk kanatları.",
      fiyat: 75,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 90,
      imgyol: "img/ana_yemek/tavuk/tantuni.jpeg",
      urunBaslik: "Tavuk Tantuni",
      urunAciklama: "İnce doğranmış tavuk eti, baharatlar ve lavuarla lavaş içinde servis edilir.",
      fiyat: 80,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 91,
      imgyol: "img/ana_yemek/tavuk/pilicsis.jpeg",
      urunBaslik: "Piliç Şiş",
      urunAciklama: "Marine edilmiş tavuk kuşbaşı, şişte ızgara yapılmış.",
      fiyat: 85,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 92,
      imgyol: "img/ana_yemek/tavuk/tavada.jpeg",
      urunBaslik: "Tavada Tavuk",
      urunAciklama: "Dövülmüş tavuk göğsü, tereyağı ve otlarla tavada kızartılmış.",
      fiyat: 82,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 93,
      imgyol: "img/ana_yemek/tavuk/bbq.jpeg",
      urunBaslik: "BBQ Soslu Tavuk",
      urunAciklama: "Barbekü sosu ile marine edilmiş, fırında pişirilmiş tavuk parçaları.",
      fiyat: 88,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 94,
      imgyol: "img/ana_yemek/tavuk/cıtır.jpeg",
      urunBaslik: "Çıtır Tavuk",
      urunAciklama: "Özel baharat karışımı ile panelenmiş, kızarmış tavuk göğsü parçaları.",
      fiyat: 80,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 95,
      imgyol: "img/ana_yemek/tavuk/tandır.jpeg",
      urunBaslik: "Tavuk Tandır",
      urunAciklama: "Fırında yavaş pişirilmiş terbiyeli tavuk, pilav yatağında servis.",
      fiyat: 95,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 96,
      imgyol: "img/ana_yemek/tavuk/saclava.jpeg",
      urunBaslik: "Saç Kavurma Tavuk",
      urunAciklama: "Sebzelerle birlikte demir saçta pişirilmiş tavuk parçaları.",
      fiyat: 90,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 97,
      imgyol: "img/ana_yemek/tavuk/dolma.jpeg",
      urunBaslik: "Tavuk Dolma",
      urunAciklama: "İç pilav ile doldurulmuş bütün tavuk, fırında pişirilmiş.",
      fiyat: 110,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 98,
      imgyol: "img/ana_yemek/tavuk/kokoro.jpeg",
      urunBaslik: "Teriyaki Tavuk",
      urunAciklama: "Teriyaki sos ile marine edilmiş, ızgarada pişirilmiş tavuk.",
      fiyat: 92,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 99,
      imgyol: "img/ana_yemek/tavuk/beğendi.jpeg",
      urunBaslik: "Tavuklu Beğendi",
      urunAciklama: "Közlenmiş patlıcan beğendisi üzerinde tavuk sote.",
      fiyat: 95,
      kategori: "Tavuk yemekleri"
    },
    {
      id: 100,
      imgyol: "img/ana_yemek/tavuk/doner.jpeg",
      urunBaslik: "Hatay Soslu Tavuk Döner",
      urunAciklama: "El yapımı tavuk döner, pilav ve söğüş ile servis edilir.",
      fiyat: 80,
      kategori: "Tavuk yemekleri"
    },
    
    {
        id: 81,
        imgyol: "img/ana_yemek/tavuk/cordon.jpeg",
        urunBaslik: "Tavuk Cordon Bleu",
        urunAciklama: "Jambon ve peynir dolgulu tavuk göğsü, galeta ununa bulanıp kızartılmış.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 82,
        imgyol: "img/ana_yemek/tavuk/sote.jpeg",
        urunBaslik: "Tavuk Sote",
        urunAciklama: "Doğranmış tavuk göğsü, mantar, biber ve özel sos ile sotelenmiş.",
        fiyat: 85,
        kategori: "Ana yemekler"
      },
      {
        id: 83,
        imgyol: "img/ana_yemek/tavuk/ızgara.jpeg",
        urunBaslik: "Izgara Tavuk Göğsü",
        urunAciklama: "Marine edilmiş tavuk göğsü ızgara, sebze garnitür ile servis.",
        fiyat: 80,
        kategori: "Ana yemekler"
      },
      {
        id: 84,
        imgyol: "img/ana_yemek/tavuk/but.jpeg",
        urunBaslik: "Fırın Tavuk But",
        urunAciklama: "Özel baharatlarla marine edilmiş, fırında pişirilmiş tavuk but.",
        fiyat: 78,
        kategori: "Ana yemekler"
      },
      {
        id: 85,
        imgyol: "img/ana_yemek/tavuk/pirzola.jpeg",
        urunBaslik: "Tavuk Pirzola",
        urunAciklama: "Kemikli tavuk pirzola, özel baharatlar ve sebzelerle ızgarada pişirilmiş.",
        fiyat: 90,
        kategori: "Ana yemekler"
      },
      {
        id: 86,
        imgyol: "img/ana_yemek/tavuk/schnitzel.jpeg",
        urunBaslik: "Tavuk Schnitzel",
        urunAciklama: "İnce dövülmüş tavuk göğsü, galetaya bulanıp kızartılmış.",
        fiyat: 88,
        kategori: "Ana yemekler"
      },
      {
        id: 87,
        imgyol: "img/ana_yemek/tavuk/curry.jpeg",
        urunBaslik: "Tavuk Curry",
        urunAciklama: "Hint baharatları ile pişirilmiş kremsi soslu tavuk parçaları.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 88,
        imgyol: "img/ana_yemek/tavuk/satay.jpeg",
        urunBaslik: "Tavuk Satay",
        urunAciklama: "Şişte pişirilmiş marine tavuk, yer fıstığı sosu ile servis edilir.",
        fiyat: 92,
        kategori: "Ana yemekler"
      },
      {
        id: 89,
        imgyol: "img/ana_yemek/tavuk/kanat.jpeg",
        urunBaslik: "Buffalo Tavuk Kanatları",
        urunAciklama: "Acılı sos ile marine edilmiş kızarmış tavuk kanatları.",
        fiyat: 75,
        kategori: "Ana yemekler"
      },
      {
        id: 90,
        imgyol: "img/ana_yemek/tavuk/tantuni.jpeg",
        urunBaslik: "Tavuk Tantuni",
        urunAciklama: "İnce doğranmış tavuk eti, baharatlar ve lavuarla lavaş içinde servis edilir.",
        fiyat: 80,
        kategori: "Ana yemekler"
      },
      {
        id: 91,
        imgyol: "img/ana_yemek/tavuk/pilicsis.jpeg",
        urunBaslik: "Piliç Şiş",
        urunAciklama: "Marine edilmiş tavuk kuşbaşı, şişte ızgara yapılmış.",
        fiyat: 85,
        kategori: "Ana yemekler"
      },
      {
        id: 92,
        imgyol: "img/ana_yemek/tavuk/tavada.jpeg",
        urunBaslik: "Tavada Tavuk",
        urunAciklama: "Dövülmüş tavuk göğsü, tereyağı ve otlarla tavada kızartılmış.",
        fiyat: 82,
        kategori: "Ana yemekler"
      },
      {
        id: 93,
        imgyol: "img/ana_yemek/tavuk/bbq.jpeg",
        urunBaslik: "BBQ Soslu Tavuk",
        urunAciklama: "Barbekü sosu ile marine edilmiş, fırında pişirilmiş tavuk parçaları.",
        fiyat: 88,
        kategori: "Ana yemekler"
      },
      {
        id: 94,
        imgyol: "img/ana_yemek/tavuk/cıtır.jpeg",
        urunBaslik: "Çıtır Tavuk",
        urunAciklama: "Özel baharat karışımı ile panelenmiş, kızarmış tavuk göğsü parçaları.",
        fiyat: 80,
        kategori: "Ana yemekler"
      },
      {
        id: 95,
        imgyol: "img/ana_yemek/tavuk/tandır.jpeg",
        urunBaslik: "Tavuk Tandır",
        urunAciklama: "Fırında yavaş pişirilmiş terbiyeli tavuk, pilav yatağında servis.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 96,
        imgyol: "img/ana_yemek/tavuk/saclava.jpeg",
        urunBaslik: "Saç Kavurma Tavuk",
        urunAciklama: "Sebzelerle birlikte demir saçta pişirilmiş tavuk parçaları.",
        fiyat: 90,
        kategori: "Ana yemekler"
      },
      {
        id: 97,
        imgyol: "img/ana_yemek/tavuk/dolma.jpeg",
        urunBaslik: "Tavuk Dolma",
        urunAciklama: "İç pilav ile doldurulmuş bütün tavuk, fırında pişirilmiş.",
        fiyat: 110,
        kategori: "Ana yemekler"
      },
      {
        id: 98,
        imgyol: "img/ana_yemek/tavuk/kokoro.jpeg",
        urunBaslik: "Teriyaki Tavuk",
        urunAciklama: "Teriyaki sos ile marine edilmiş, ızgarada pişirilmiş tavuk.",
        fiyat: 92,
        kategori: "Ana yemekler"
      },
      {
        id: 99,
        imgyol: "img/ana_yemek/tavuk/beğendi.jpeg",
        urunBaslik: "Tavuklu Beğendi",
        urunAciklama: "Közlenmiş patlıcan beğendisi üzerinde tavuk sote.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 100,
        imgyol: "img/ana_yemek/tavuk/doner.jpeg",
        urunBaslik: "Tavuk Döner",
        urunAciklama: "El yapımı tavuk döner, pilav ve söğüş ile servis edilir.",
        fiyat: 80,
        kategori: "Ana yemekler"
      },
    // Balık yemekleri (Ana yemekler altında alt kategori, 20 ürün)
    {
      id: 101,
      imgyol: "img/ana_yemek/balik/levrek.jpeg",
      urunBaslik: "Izgara Levrek",
      urunAciklama: "Taze levrek balığı, ızgarada pişirilmiş, limon ve roka ile servis.",
      fiyat: 140,
      kategori: "Balık yemekleri"
    },
    {
      id: 102,
      imgyol: "img/ana_yemek/balik/cupra.jpeg",
      urunBaslik: "Izgara Çipura",
      urunAciklama: "Denizden taze çipura, ızgarada tereyağı ile pişirilmiş.",
      fiyat: 145,
      kategori: "Balık yemekleri"
    },
    {
      id: 103,
      imgyol: "img/ana_yemek/balik/somon.jpeg",
      urunBaslik: "Somon Izgara",
      urunAciklama: "Norveç somonu, ızgarada pişirilmiş, dereotlu sos ile.",
      fiyat: 160,
      kategori: "Balık yemekleri"
    },
    {
      id: 104,
      imgyol: "img/ana_yemek/balik/kalkan.jpeg",
      urunBaslik: "Kalkan Tava",
      urunAciklama: "Tereyağında pişirilmiş kalkan balığı, mevsim yeşillikleri ile.",
      fiyat: 190,
      kategori: "Balık yemekleri"
    },
    {
      id: 105,
      imgyol: "img/ana_yemek/balik/kilic.jpeg",
      urunBaslik: "Kılıç Şiş",
      urunAciklama: "Şişte ızgarada pişirilmiş kılıç balığı, sebze garnitür ile.",
      fiyat: 155,
      kategori: "Balık yemekleri"
    },
    {
      id: 106,
      imgyol: "img/ana_yemek/balik/palamut.jpeg",
      urunBaslik: "Palamut Tava",
      urunAciklama: "Mevsiminde taze palamut balığı, mısır ununa bulanarak kızartılmış.",
      fiyat: 120,
      kategori: "Balık yemekleri"
    },
    {
      id: 107,
      imgyol: "img/ana_yemek/balik/hamsi.jpeg",
      urunBaslik: "Hamsi Buğulama",
      urunAciklama: "Kendi suyunda pişirilmiş hamsi, domates ve soğan ile.",
      fiyat: 75,
      kategori: "Balık yemekleri"
    },
    {
      id: 108,
      imgyol: "img/ana_yemek/balik/istavrit.jpeg",
      urunBaslik: "İstavrit Tava",
      urunAciklama: "Çıtır kızarmış taze istavrit balığı, limon ve yeşilliklerle.",
      fiyat: 85,
      kategori: "Balık yemekleri"
    },
    {
      id: 109,
      imgyol: "img/ana_yemek/balik/tekir.jpeg",
      urunBaslik: "Tekir Tava",
      urunAciklama: "Hafif una bulanarak kızartılmış tekir balığı.",
      fiyat: 115,
      kategori: "Balık yemekleri"
    },
    {
      id: 110,
      imgyol: "img/ana_yemek/balik/mezgit.jpeg",
      urunBaslik: "Mezgit Fileto",
      urunAciklama: "Kılçıksız mezgit fileto, fırında veya tavada pişirilmiş.",
      fiyat: 105,
      kategori: "Balık yemekleri"
    },
    {
      id: 111,
      imgyol: "img/ana_yemek/balik/sardalya.jpeg",
      urunBaslik: "Sardalya Izgara",
      urunAciklama: "Taze sardalya balığı, ızgarada pişirilmiş, roka ve soğan ile.",
      fiyat: 90,
      kategori: "Balık yemekleri"
    },
    {
      id: 112,
      imgyol: "img/ana_yemek/balik/lufer.jpeg",
      urunBaslik: "Lüfer Izgara",
      urunAciklama: "Mevsiminde taze lüfer balığı, ızgarada pişirilmiş.",
      fiyat: 150,
      kategori: "Balık yemekleri"
    },
    {
      id: 113,
      imgyol: "img/ana_yemek/balik/balikkofte.jpeg",
      urunBaslik: "Balık Köfte",
      urunAciklama: "Çeşitli balıklardan yapılmış köfte, yeşillikler ve sos ile.",
      fiyat: 95,
      kategori: "Balık yemekleri"
    },
    {
      id: 114,
      imgyol: "img/ana_yemek/balik/lakerdası.jpeg",
      urunBaslik: "Lakerda",
      urunAciklama: "Geleneksel yöntemle salamura edilmiş palamut dilimi.",
      fiyat: 100,
      kategori: "Balık yemekleri"
    },
    {
      id: 115,
      imgyol: "img/ana_yemek/balik/fırında.jpeg",
      urunBaslik: "Fırında Balık",
      urunAciklama: "Sebzelerle birlikte fırında pişirilmiş mevsim balığı.",
      fiyat: 135,
      kategori: "Balık yemekleri"
    },
    {
      id: 116,
      imgyol: "img/ana_yemek/balik/pisipisi.jpeg",
      urunBaslik: "Pişi Pişi Balık",
      urunAciklama: "Mısır unu, baharatlar ve un karışımıyla panelenmiş kızarmış balık.",
      fiyat: 90,
      kategori: "Balık yemekleri"
    },
    {
      id: 117,
      imgyol: "img/ana_yemek/balik/uskumru.jpeg",
      urunBaslik: "Uskumru Dolma",
      urunAciklama: "İç pilav ile doldurulmuş, fırında pişirilmiş uskumru balığı.",
      fiyat: 120,
      kategori: "Balık yemekleri"
    },
    {
      id: 118,
      imgyol: "img/ana_yemek/balik/kabak.jpeg",
      urunBaslik: "Kabak Çiçeği Balık",
      urunAciklama: "Kabak çiçeği içine yerleştirilmiş balık köftesi, fırında pişirilmiş.",
      fiyat: 110,
      kategori: "Balık yemekleri"
    },
    {
      id: 119,
      imgyol: "img/ana_yemek/balik/midye.jpeg",
      urunBaslik: "Midye Tava",
      urunAciklama: "Bira hamuru ile panelenmiş kızarmış midye, tartar sos ile.",
      fiyat: 95,
      kategori: "Balık yemekleri"
    },
    {
      id: 120,
      imgyol: "img/ana_yemek/balik/karides.jpeg",
      urunBaslik: "Karides Güveç",
      urunAciklama: "Domates sosu ve peynir ile fırınlanmış taze karides.",
      fiyat: 140,
      kategori: "Balık yemekleri"
    },
    
    {
        id: 101,
        imgyol: "img/ana_yemek/balik/levrek.jpeg",
        urunBaslik: "Izgara Levrek",
        urunAciklama: "Taze levrek balığı, ızgarada pişirilmiş, limon ve roka ile servis.",
        fiyat: 140,
        kategori: "Ana yemekler"
      },
      {
        id: 102,
        imgyol: "img/ana_yemek/balik/cupra.jpeg",
        urunBaslik: "Izgara Çipura",
        urunAciklama: "Denizden taze çipura, ızgarada tereyağı ile pişirilmiş.",
        fiyat: 145,
        kategori: "Ana yemekler"
      },
      {
        id: 103,
        imgyol: "img/ana_yemek/balik/somon.jpeg",
        urunBaslik: "Somon Izgara",
        urunAciklama: "Norveç somonu, ızgarada pişirilmiş, dereotlu sos ile.",
        fiyat: 160,
        kategori: "Ana yemekler"
      },
      {
        id: 104,
        imgyol: "img/ana_yemek/balik/kalkan.jpeg",
        urunBaslik: "Kalkan Tava",
        urunAciklama: "Tereyağında pişirilmiş kalkan balığı, mevsim yeşillikleri ile.",
        fiyat: 190,
        kategori: "Ana yemekler"
      },
      {
        id: 105,
        imgyol: "img/ana_yemek/balik/kilic.jpeg",
        urunBaslik: "Kılıç Şiş",
        urunAciklama: "Şişte ızgarada pişirilmiş kılıç balığı, sebze garnitür ile.",
        fiyat: 155,
        kategori: "Ana yemekler"
      },
      {
        id: 106,
        imgyol: "img/ana_yemek/balik/palamut.jpeg",
        urunBaslik: "Palamut Tava",
        urunAciklama: "Mevsiminde taze palamut balığı, mısır ununa bulanarak kızartılmış.",
        fiyat: 120,
        kategori: "Ana yemekler"
      },
      {
        id: 107,
        imgyol: "img/ana_yemek/balik/hamsi.jpeg",
        urunBaslik: "Hamsi Buğulama",
        urunAciklama: "Kendi suyunda pişirilmiş hamsi, domates ve soğan ile.",
        fiyat: 75,
        kategori: "Ana yemekler"
      },
      {
        id: 108,
        imgyol: "img/ana_yemek/balik/istavrit.jpeg",
        urunBaslik: "İstavrit Tava",
        urunAciklama: "Çıtır kızarmış taze istavrit balığı, limon ve yeşilliklerle.",
        fiyat: 85,
        kategori: "Ana yemekler"
      },
      {
        id: 109,
        imgyol: "img/ana_yemek/balik/tekir.jpeg",
        urunBaslik: "Tekir Tava",
        urunAciklama: "Hafif una bulanarak kızartılmış tekir balığı.",
        fiyat: 115,
        kategori: "Ana yemekler"
      },
      {
        id: 110,
        imgyol: "img/ana_yemek/balik/mezgit.jpeg",
        urunBaslik: "Mezgit Fileto",
        urunAciklama: "Kılçıksız mezgit fileto, fırında veya tavada pişirilmiş.",
        fiyat: 105,
        kategori: "Ana yemekler"
      },
      {
        id: 111,
        imgyol: "img/ana_yemek/balik/sardalya.jpeg",
        urunBaslik: "Sardalya Izgara",
        urunAciklama: "Taze sardalya balığı, ızgarada pişirilmiş, roka ve soğan ile.",
        fiyat: 90,
        kategori: "Ana yemekler"
      },
      {
        id: 112,
        imgyol: "img/ana_yemek/balik/lufer.jpeg",
        urunBaslik: "Lüfer Izgara",
        urunAciklama: "Mevsiminde taze lüfer balığı, ızgarada pişirilmiş.",
        fiyat: 150,
        kategori: "Ana yemekler"
      },
      {
        id: 113,
        imgyol: "img/ana_yemek/balik/balikkofte.jpeg",
        urunBaslik: "Balık Köfte",
        urunAciklama: "Çeşitli balıklardan yapılmış köfte, yeşillikler ve sos ile.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 114,
        imgyol: "img/ana_yemek/balik/lakerdası.jpeg",
        urunBaslik: "Lakerda",
        urunAciklama: "Geleneksel yöntemle salamura edilmiş palamut dilimi.",
        fiyat: 100,
        kategori: "Ana yemekler"
      },
      {
        id: 115,
        imgyol: "img/ana_yemek/balik/fırında.jpeg",
        urunBaslik: "Fırında Balık",
        urunAciklama: "Sebzelerle birlikte fırında pişirilmiş mevsim balığı.",
        fiyat: 135,
        kategori: "Ana yemekler"
      },
      {
        id: 116,
        imgyol: "img/ana_yemek/balik/pisipisi.jpeg",
        urunBaslik: "Pişi Pişi Balık",
        urunAciklama: "Mısır unu, baharatlar ve un karışımıyla panelenmiş kızarmış balık.",
        fiyat: 90,
        kategori: "Ana yemekler"
      },
      {
        id: 117,
        imgyol: "img/ana_yemek/balik/uskumru.jpeg",
        urunBaslik: "Uskumru Dolma",
        urunAciklama: "İç pilav ile doldurulmuş, fırında pişirilmiş uskumru balığı.",
        fiyat: 120,
        kategori: "Ana yemekler"
      },
      {
        id: 118,
        imgyol: "img/ana_yemek/balik/kabak.jpeg",
        urunBaslik: "Kabak Çiçeği Balık",
        urunAciklama: "Kabak çiçeği içine yerleştirilmiş balık köftesi, fırında pişirilmiş.",
        fiyat: 110,
        kategori: "Ana yemekler"
      },
      {
        id: 119,
        imgyol: "img/ana_yemek/balik/midye.jpeg",
        urunBaslik: "Midye Tava",
        urunAciklama: "Bira hamuru ile panelenmiş kızarmış midye, tartar sos ile.",
        fiyat: 95,
        kategori: "Ana yemekler"
      },
      {
        id: 120,
        imgyol: "img/ana_yemek/balik/karides.jpeg",
        urunBaslik: "Karides Güveç",
        urunAciklama: "Domates sosu ve peynir ile fırınlanmış taze karides.",
        fiyat: 140,
        kategori: "Ana yemekler"
      },
      
    // Sebze yemekleri (Ana yemekler altında alt kategori, 20 ürün)
    {
      id: 121,
      imgyol: "img/ana_yemek/sebze/imam.jpeg",
      urunBaslik: "İmambayıldı",
      urunAciklama: "Zeytinyağı ile pişirilmiş, soğan, sarımsak ve domates dolgulu patlıcan yemeği.",
      fiyat: 70,
      kategori: "Sebze yemekleri"
    },
    {
      id: 122,
      imgyol: "img/ana_yemek/sebze/karnıyarık.jpeg",
      urunBaslik: "Karnıyarık",
      urunAciklama: "Kıymalı harçla doldurulmuş, fırınlanmış patlıcan yemeği.",
      fiyat: 75,
      kategori: "Sebze yemekleri"
    },
    {
      id: 123,
      imgyol: "img/ana_yemek/sebze/turlu.jpeg",
      urunBaslik: "Türlü",
      urunAciklama: "Çeşitli mevsim sebzeleri ile hazırlanmış geleneksel yemek.",
      fiyat: 68,
      kategori: "Sebze yemekleri"
    },
    {
      id: 124,
      imgyol: "img/ana_yemek/sebze/tazefasulye.jpeg",
      urunBaslik: "Zeytinyağlı Taze Fasulye",
      urunAciklama: "Domates ve soğan ile zeytinyağında pişirilmiş taze fasulye.",
      fiyat: 60,
      kategori: "Sebze yemekleri"
    },
    {
      id: 125,
      imgyol: "img/ana_yemek/sebze/dolma.jpeg",
      urunBaslik: "Zeytinyağlı Yaprak Sarma",
      urunAciklama: "Asma yaprağına sarılmış pirinç, baharat ve çam fıstığı.",
      fiyat: 65,
      kategori: "Sebze yemekleri"
    },
    {
      id: 126,
      imgyol: "img/ana_yemek/sebze/kabak.jpeg",
      urunBaslik: "Kabak Dolması",
      urunAciklama: "İç pilavla doldurulmuş, zeytinyağlı kabak dolması.",
      fiyat: 62,
      kategori: "Sebze yemekleri"
    },
    {
      id: 127,
      imgyol: "img/ana_yemek/sebze/patatesoturtma.jpeg",
      urunBaslik: "Patates Oturtma",
      urunAciklama: "Kıymalı harç üzerine yerleştirilmiş fırınlanmış patates dilimleri.",
      fiyat: 70,
      kategori: "Sebze yemekleri"
    },
    {
      id: 128,
      imgyol: "img/ana_yemek/sebze/musakka.jpeg",
      urunBaslik: "Patlıcan Musakka",
      urunAciklama: "Kıyma ve sebzelerle katmanlı pişirilmiş patlıcan yemeği.",
      fiyat: 75,
      kategori: "Sebze yemekleri"
    },
    {
      id: 129,
      imgyol: "img/ana_yemek/sebze/kereviz.jpeg",
      urunBaslik: "Zeytinyağlı Kereviz",
      urunAciklama: "Havuç ve patates ile zeytinyağında pişirilmiş kereviz.",
      fiyat: 68,
      kategori: "Sebze yemekleri"
    },
    {
      id: 130,
      imgyol: "img/ana_yemek/sebze/pirasa.jpeg",
      urunBaslik: "Zeytinyağlı Pırasa",
      urunAciklama: "Havuç ve pirinç ile zeytinyağında pişirilmiş pırasa.",
      fiyat: 60,
      kategori: "Sebze yemekleri"
    },
    {
      id: 131,
      imgyol: "img/ana_yemek/sebze/bezelye.jpeg",
      urunBaslik: "Etli Bezelye",
      urunAciklama: "Kuzu eti ile pişirilmiş taze bezelye.",
      fiyat: 80,
      kategori: "Sebze yemekleri"
    },
    {
      id: 132,
      imgyol: "img/ana_yemek/sebze/barbunya.jpeg",
      urunBaslik: "Zeytinyağlı Barbunya",
      urunAciklama: "Zeytinyağı ve sebzelerle pişirilmiş barbunya pilaki.",
      fiyat: 65,
      kategori: "Sebze yemekleri"
    },
    {
      id: 133,
      imgyol: "img/ana_yemek/sebze/bamya.jpeg",
      urunBaslik: "Etli Bamya",
      urunAciklama: "Kuzu eti ile pişirilmiş, limonlu bamya yemeği.",
      fiyat: 85,
      kategori: "Sebze yemekleri"
    },
    {
      id: 134,
      imgyol: "img/ana_yemek/sebze/enginar.jpeg",
      urunBaslik: "Zeytinyağlı Enginar",
      urunAciklama: "Havuç, patates ve bezelye ile pişirilmiş enginar kalbi.",
      fiyat: 75,
      kategori: "Sebze yemekleri"
    },
    {
      id: 135,
      imgyol: "img/ana_yemek/sebze/patlıcansote.jpeg",
      urunBaslik: "Patlıcan Sote",
      urunAciklama: "Domates, biber ve soğanla sotelenmiş patlıcan parçaları.",
      fiyat: 65,
      kategori: "Sebze yemekleri"
    },
    {
        id: 136,
        imgyol: "img/ana_yemek/sebze/kuru_fasulye.jpeg",
        urunBaslik: "Kuru Fasulye",
        urunAciklama: "Geleneksel Türk mutfağının vazgeçilmezi, pişmiş kuru fasulye.",
        fiyat: 65,
        kategori: "Sebze yemekleri"
      },
      {
        id: 137,
        imgyol: "img/ana_yemek/sebze/sebzeli_guvec.jpeg",
        urunBaslik: "Sebzeli Güveç",
        urunAciklama: "Mevsim sebzeleriyle hazırlanmış, fırında pişirilmiş güveç.",
        fiyat: 70,
        kategori: "Sebze yemekleri"
      },
      {
        id: 138,
        imgyol: "img/ana_yemek/sebze/ratatouille.jpeg",
        urunBaslik: "Ratatouille",
        urunAciklama: "Patlıcan, kabak, biber ve domates ile hazırlanan Fransız yemeği.",
        fiyat: 72,
        kategori: "Sebze yemekleri"
      },
      {
        id: 139,
        imgyol: "img/ana_yemek/sebze/zeytinyagli_kabak.jpeg",
        urunBaslik: "Zeytinyağlı Kabak",
        urunAciklama: "Dereotu ve sarımsakla tatlandırılmış, zeytinyağlı kabak yemeği.",
        fiyat: 60,
        kategori: "Sebze yemekleri"
      },
      {
        id: 140,
        imgyol: "img/ana_yemek/sebze/sebzeli_kofte.jpeg",
        urunBaslik: "Sebzeli Köfte",
        urunAciklama: "Patates ve havuç ile hazırlanmış vejetaryen köfte.",
        fiyat: 65,
        kategori: "Sebze yemekleri"
      },

      {
        id: 121,
        imgyol: "img/ana_yemek/sebze/imam.jpeg",
        urunBaslik: "İmambayıldı",
        urunAciklama: "Zeytinyağı ile pişirilmiş, soğan, sarımsak ve domates dolgulu patlıcan yemeği.",
        fiyat: 70,
        kategori: "Ana yemekler"
      },
      {
        id: 122,
        imgyol: "img/ana_yemek/sebze/karnıyarık.jpeg",
        urunBaslik: "Karnıyarık",
        urunAciklama: "Kıymalı harçla doldurulmuş, fırınlanmış patlıcan yemeği.",
        fiyat: 75,
        kategori: "Ana yemekler"
      },
      {
        id: 123,
        imgyol: "img/ana_yemek/sebze/turlu.jpeg",
        urunBaslik: "Türlü",
        urunAciklama: "Çeşitli mevsim sebzeleri ile hazırlanmış geleneksel yemek.",
        fiyat: 68,
        kategori: "Ana yemekler"
      },
      {
        id: 124,
        imgyol: "img/ana_yemek/sebze/tazefasulye.jpeg",
        urunBaslik: "Zeytinyağlı Taze Fasulye",
        urunAciklama: "Domates ve soğan ile zeytinyağında pişirilmiş taze fasulye.",
        fiyat: 60,
        kategori: "Ana yemekler"
      },
      {
        id: 125,
        imgyol: "img/ana_yemek/sebze/dolma.jpeg",
        urunBaslik: "Zeytinyağlı Yaprak Sarma",
        urunAciklama: "Asma yaprağına sarılmış pirinç, baharat ve çam fıstığı.",
        fiyat: 65,
        kategori: "Ana yemekler"
      },
      {
        id: 126,
        imgyol: "img/ana_yemek/sebze/kabak.jpeg",
        urunBaslik: "Kabak Dolması",
        urunAciklama: "İç pilavla doldurulmuş, zeytinyağlı kabak dolması.",
        fiyat: 62,
        kategori: "Ana yemekler"
      },
      {
        id: 127,
        imgyol: "img/ana_yemek/sebze/patatesoturtma.jpeg",
        urunBaslik: "Patates Oturtma",
        urunAciklama: "Kıymalı harç üzerine yerleştirilmiş fırınlanmış patates dilimleri.",
        fiyat: 70,
        kategori: "Ana yemekler"
      },
      {
        id: 128,
        imgyol: "img/ana_yemek/sebze/musakka.jpeg",
        urunBaslik: "Patlıcan Musakka",
        urunAciklama: "Kıyma ve sebzelerle katmanlı pişirilmiş patlıcan yemeği.",
        fiyat: 75,
        kategori: "Ana yemekler"
      },
      {
        id: 129,
        imgyol: "img/ana_yemek/sebze/kereviz.jpeg",
        urunBaslik: "Zeytinyağlı Kereviz",
        urunAciklama: "Havuç ve patates ile zeytinyağında pişirilmiş kereviz.",
        fiyat: 68,
        kategori: "Ana yemekler"
      },
      {
        id: 130,
        imgyol: "img/ana_yemek/sebze/pirasa.jpeg",
        urunBaslik: "Zeytinyağlı Pırasa",
        urunAciklama: "Havuç ve pirinç ile zeytinyağında pişirilmiş pırasa.",
        fiyat: 60,
        kategori: "Ana yemekler"
      },
      {
        id: 131,
        imgyol: "img/ana_yemek/sebze/bezelye.jpeg",
        urunBaslik: "Etli Bezelye",
        urunAciklama: "Kuzu eti ile pişirilmiş taze bezelye.",
        fiyat: 80,
        kategori: "Ana yemekler"
      },
      {
        id: 132,
        imgyol: "img/ana_yemek/sebze/barbunya.jpeg",
        urunBaslik: "Zeytinyağlı Barbunya",
        urunAciklama: "Zeytinyağı ve sebzelerle pişirilmiş barbunya pilaki.",
        fiyat: 65,
        kategori: "Ana yemekler"
      },
      {
        id: 133,
        imgyol: "img/ana_yemek/sebze/bamya.jpeg",
        urunBaslik: "Etli Bamya",
        urunAciklama: "Kuzu eti ile pişirilmiş, limonlu bamya yemeği.",
        fiyat: 85,
        kategori: "Ana yemekler"
      },
      {
        id: 134,
        imgyol: "img/ana_yemek/sebze/enginar.jpeg",
        urunBaslik: "Zeytinyağlı Enginar",
        urunAciklama: "Havuç, patates ve bezelye ile pişirilmiş enginar kalbi.",
        fiyat: 75,
        kategori: "Ana yemekler"
      },
      {
        id: 135,
        imgyol: "img/ana_yemek/sebze/patlıcansote.jpeg",
        urunBaslik: "Patlıcan Sote",
        urunAciklama: "Domates, biber ve soğanla sotelenmiş patlıcan parçaları.",
        fiyat: 65,
        kategori: "Ana yemekler"
      },
      {
          id: 136,
          imgyol: "img/ana_yemek/sebze/kuru_fasulye.jpeg",
          urunBaslik: "Kuru Fasulye",
          urunAciklama: "Geleneksel Türk mutfağının vazgeçilmezi, pişmiş kuru fasulye.",
          fiyat: 65,
          kategori: "Ana yemekler"
        },
        {
          id: 137,
          imgyol: "img/ana_yemek/sebze/sebzeli_guvec.jpeg",
          urunBaslik: "Sebzeli Güveç",
          urunAciklama: "Mevsim sebzeleriyle hazırlanmış, fırında pişirilmiş güveç.",
          fiyat: 70,
          kategori: "Ana yemekler"
        },
        {
          id: 138,
          imgyol: "img/ana_yemek/sebze/ratatouille.jpeg",
          urunBaslik: "Ratatouille",
          urunAciklama: "Patlıcan, kabak, biber ve domates ile hazırlanan Fransız yemeği.",
          fiyat: 72,
          kategori: "Ana yemekler"
        },
        {
          id: 139,
          imgyol: "img/ana_yemek/sebze/zeytinyagli_kabak.jpeg",
          urunBaslik: "Zeytinyağlı Kabak",
          urunAciklama: "Dereotu ve sarımsakla tatlandırılmış, zeytinyağlı kabak yemeği.",
          fiyat: 60,
          kategori: "Ana yemekler"
        },
        {
          id: 140,
          imgyol: "img/ana_yemek/sebze/sebzeli_kofte.jpeg",
          urunBaslik: "Sebzeli Köfte",
          urunAciklama: "Patates ve havuç ile hazırlanmış vejetaryen köfte.",
          fiyat: 65,
          kategori: "Ana yemekler"
        },
      
      // Salatalar (20 ürün)
      {
        id: 141,
        imgyol: "img/salata/coban.jpeg",
        urunBaslik: "Çoban Salatası",
        urunAciklama: "Domates, salatalık, biber ve soğan ile klasik Türk salatası.",
        fiyat: 35,
        kategori: "Salatalar"
      },
      {
        id: 142,
        imgyol: "img/salata/mevsim.jpeg",
        urunBaslik: "Mevsim Salatası",
        urunAciklama: "Mevsim yeşillikleri, domates, havuç ve mısır ile.",
        fiyat: 38,
        kategori: "Salatalar"
      },
      {
        id: 143,
        imgyol: "img/salata/akdeniz.jpeg",
        urunBaslik: "Akdeniz Salatası",
        urunAciklama: "Domates, salatalık, zeytin, peynir ve zeytinyağı ile.",
        fiyat: 42,
        kategori: "Salatalar"
      },
      {
        id: 144,
        imgyol: "img/salata/sezar.jpeg",
        urunBaslik: "Sezar Salatası",
        urunAciklama: "Marul, kruton, parmesan peyniri ve özel Sezar sosu ile.",
        fiyat: 45,
        kategori: "Salatalar"
      },
      {
        id: 145,
        imgyol: "img/salata/tavuklu_sezar.jpeg",
        urunBaslik: "Tavuklu Sezar Salatası",
        urunAciklama: "Izgara tavuk parçaları ile zenginleştirilmiş Sezar salatası.",
        fiyat: 55,
        kategori: "Salatalar"
      },
      {
        id: 146,
        imgyol: "img/salata/gavurdagi.jpeg",
        urunBaslik: "Gavurdağı Salatası",
        urunAciklama: "İnce doğranmış domates, soğan, ceviz ve nar ekşisi ile.",
        fiyat: 40,
        kategori: "Salatalar"
      },
      {
        id: 147,
        imgyol: "img/salata/ton_balikli.jpeg",
        urunBaslik: "Ton Balıklı Salata",
        urunAciklama: "Ton balığı, mısır, yeşillikler ve zeytinyağlı limon sosu ile.",
        fiyat: 50,
        kategori: "Salatalar"
      },
      {
        id: 148,
        imgyol: "img/salata/peynirli.jpeg",
        urunBaslik: "Peynirli Salata",
        urunAciklama: "Beyaz peynir, ceviz ve mevsim yeşillikleri ile.",
        fiyat: 45,
        kategori: "Salatalar"
      },
      {
        id: 149,
        imgyol: "img/salata/roka.jpeg",
        urunBaslik: "Rokforlu Roka Salatası",
        urunAciklama: "Roka, ceviz, elma ve rokfor peyniri ile özel lezzet.",
        fiyat: 48,
        kategori: "Salatalar"
      },
      {
        id: 150,
        imgyol: "img/salata/hellim.jpeg",
        urunBaslik: "Hellim Peynirli Salata",
        urunAciklama: "Izgara hellim peyniri, çeri domates ve ceviz ile.",
        fiyat: 52,
        kategori: "Salatalar"
      },
      {
        id: 151,
        imgyol: "img/salata/patates.jpeg",
        urunBaslik: "Patates Salatası",
        urunAciklama: "Haşlanmış patates, mayonez, kornişon turşu ve dereotu ile.",
        fiyat: 38,
        kategori: "Salatalar"
      },
      {
        id: 152,
        imgyol: "img/salata/semizotu.jpeg",
        urunBaslik: "Semizotu Salatası",
        urunAciklama: "Semizotu, yoğurt, sarımsak ve zeytinyağı ile.",
        fiyat: 40,
        kategori: "Salatalar"
      },
      {
        id: 153,
        imgyol: "img/salata/bostana.jpeg",
        urunBaslik: "Bostana Salatası",
        urunAciklama: "Maydanoz, soğan, bulgur ve nar ekşisi ile Hatay usulü salata.",
        fiyat: 42,
        kategori: "Salatalar"
      },
      {
        id: 154,
        imgyol: "img/salata/kinoa.jpeg",
        urunBaslik: "Kinoa Salatası",
        urunAciklama: "Kinoa, avokado, narenciye ve taze otlar ile sağlıklı tercih.",
        fiyat: 55,
        kategori: "Salatalar"
      },
      {
        id: 155,
        imgyol: "img/salata/tavuklu_waldorf.jpeg",
        urunBaslik: "Tavuklu Waldorf Salatası",
        urunAciklama: "Tavuk, elma, kereviz, ceviz ve mayonez ile klasik lezzet.",
        fiyat: 58,
        kategori: "Salatalar"
      },
      {
        id: 156,
        imgyol: "img/salata/karisik.jpeg",
        urunBaslik: "Karışık Salata",
        urunAciklama: "Çeşitli yeşillikler, sebzeler ve özel sos ile.",
        fiyat: 35,
        kategori: "Salatalar"
      },
      {
        id: 157,
        imgyol: "img/salata/tabbule.jpeg",
        urunBaslik: "Tabbule Salatası",
        urunAciklama: "İnce kıyılmış maydanoz, domates, soğan ve bulgur ile Lübnan lezzeti.",
        fiyat: 45,
        kategori: "Salatalar"
      },
      {
        id: 158,
        imgyol: "img/salata/grekyaz.jpeg",
        urunBaslik: "Grek Salatası",
        urunAciklama: "Domates, salatalık, biber, soğan, zeytin ve feta peyniri ile.",
        fiyat: 48,
        kategori: "Salatalar"
      },
      {
        id: 159,
        imgyol: "img/salata/mercimek.jpeg",
        urunBaslik: "Mercimek Salatası",
        urunAciklama: "Yeşil mercimek, domates, salatalık, maydanoz ve limonlu sos ile.",
        fiyat: 42,
        kategori: "Salatalar"
      },
      {
        id: 160,
        imgyol: "img/salata/karides.jpeg",
        urunBaslik: "Karidesli Salata",
        urunAciklama: "Sotelenmiş karides, avokado ve kiraz domates ile premium salata.",
        fiyat: 75,
        kategori: "Salatalar"
      },
      
      // Tatlılar (20 ürün)
      {
        id: 161,
        imgyol: "img/tatli/baklava.jpeg",
        urunBaslik: "Fıstıklı Baklava",
        urunAciklama: "Antep fıstığı ile zenginleştirilmiş, 40 kat el açması yufka ile.",
        fiyat: 70,
        kategori: "Tatlılar"
      },
      {
        id: 162,
        imgyol: "img/tatli/kunefe.jpeg",
        urunBaslik: "Künefe",
        urunAciklama: "Hatay usulü, kadayıf ve özel peynir ile fırında pişirilmiş.",
        fiyat: 65,
        kategori: "Tatlılar"
      },
      {
        id: 163,
        imgyol: "img/tatli/sutlac.jpeg",
        urunBaslik: "Fırın Sütlaç",
        urunAciklama: "Pirinç ve süt ile yapılmış, fırında kızartılmış geleneksel tatlı.",
        fiyat: 45,
        kategori: "Tatlılar"
      },
      {
        id: 164,
        imgyol: "img/tatli/kazandibi.jpeg",
        urunBaslik: "Kazandibi",
        urunAciklama: "Dibini yakarak özel lezzet kazandırılmış muhallebi tatlısı.",
        fiyat: 50,
        kategori: "Tatlılar"
      },
      {
        id: 165,
        imgyol: "img/tatli/kemalpasa.jpeg",
        urunBaslik: "Kemalpaşa Tatlısı",
        urunAciklama: "Peynir hamuru ile yapılmış, şerbetli geleneksel tatlı.",
        fiyat: 48,
        kategori: "Tatlılar"
      },
      {
        id: 166,
        imgyol: "img/tatli/sekerpare.jpeg",
        urunBaslik: "Şekerpare",
        urunAciklama: "İrmiksiz hamurdan yapılan, şerbetli ve fındıklı tatlı.",
        fiyat: 45,
        kategori: "Tatlılar"
      },
      {
        id: 167,
        imgyol: "img/tatli/revani.jpeg",
        urunBaslik: "Revani",
        urunAciklama: "İrmikli hamur ve şerbetle hazırlanan geleneksel Türk tatlısı.",
        fiyat: 42,
        kategori: "Tatlılar"
      },
      {
        id: 168,
        imgyol: "img/tatli/profiterol.jpeg",
        urunBaslik: "Profiterol",
        urunAciklama: "Krema dolgulu mini hamur topları, çikolata sosu ile.",
        fiyat: 55,
        kategori: "Tatlılar"
      },
      {
        id: 169,
        imgyol: "img/tatli/tiramisu.jpeg",
        urunBaslik: "Tiramisu",
        urunAciklama: "Mascarpone peyniri, kahve ve kakao ile katmanlı İtalyan tatlısı.",
        fiyat: 60,
        kategori: "Tatlılar"
      },
      {
        id: 170,
        imgyol: "img/tatli/cheesecake.jpeg",
        urunBaslik: "Cheesecake",
        urunAciklama: "Kremsi peynir karışımı ve bisküvi tabanı ile hazırlanan tatlı.",
        fiyat: 58,
        kategori: "Tatlılar"
      },
      {
        id: 171,
        imgyol: "img/tatli/magnolia.jpeg",
        urunBaslik: "Magnolia",
        urunAciklama: "Bisküvi, krema ve meyve ile katmanlı hafif tatlı.",
        fiyat: 52,
        kategori: "Tatlılar"
      },
      {
        id: 172,
        imgyol: "img/tatli/san_sebastian.jpeg",
        urunBaslik: "San Sebastian Cheesecake",
        urunAciklama: "Hafif yanık yüzeyli, kremsi dokulu özel peynirli kek.",
        fiyat: 65,
        kategori: "Tatlılar"
      },
      {
        id: 173,
        imgyol: "img/tatli/trilece.jpeg",
        urunBaslik: "Trileçe",
        urunAciklama: "Üç farklı süt ile ıslatılmış kek ve karamel sos ile.",
        fiyat: 55,
        kategori: "Tatlılar"
      },
      {
        id: 174,
        imgyol: "img/tatli/supangle.jpeg",
        urunBaslik: "Supangle",
        urunAciklama: "Çikolatalı muhallebi ve bisküvi ile katmanlı soğuk tatlı.",
        fiyat: 50,
        kategori: "Tatlılar"
      },
      {
        id: 175,
        imgyol: "img/tatli/tavuk_gogsu.jpeg",
        urunBaslik: "Tavuk Göğsü",
        urunAciklama: "Tavuk eti ile hazırlanan geleneksel sütlü tatlı.",
        fiyat: 48,
        kategori: "Tatlılar"
      },
      {
        id: 176,
        imgyol: "img/tatli/gullac.jpeg",
        urunBaslik: "Güllaç",
        urunAciklama: "Gül suyu ve ceviz ile tatlandırılmış ramazan tatlısı.",
        fiyat: 45,
        kategori: "Tatlılar"
      },
      {
        id: 177,
        imgyol: "img/tatli/firin_helva.jpeg",
        urunBaslik: "Fırın Helva",
        urunAciklama: "Un, tereyağı ve şeker ile yapılan geleneksel fırın tatlısı.",
        fiyat: 42,
        kategori: "Tatlılar"
      },
      {
        id: 178,
        imgyol: "img/tatli/ayva_tatlisi.jpeg",
        urunBaslik: "Ayva Tatlısı",
        urunAciklama: "Şerbetli fırınlanmış ayva, kaymak ile servis edilir.",
        fiyat: 50,
        kategori: "Tatlılar"
      },
      {
        id: 179,
        imgyol: "img/tatli/kabak_tatlisi.jpeg",
        urunBaslik: "Kabak Tatlısı",
        urunAciklama: "Şerbet ile tatlandırılmış balkabağı, ceviz ve kaymak ile.",
        fiyat: 45,
        kategori: "Tatlılar"
      },
      {
        id: 180,
        imgyol: "img/tatli/dondurma.jpeg",
        urunBaslik: "Dondurma Tabağı",
        urunAciklama: "Üç farklı lezzette ev yapımı dondurma seçimi.",
        fiyat: 40,
        kategori: "Tatlılar"
      },
        {
          id: 181,
          imgyol: "img/icecek/su.jpeg",
          urunBaslik: "Su",
          urunAciklama: "0.5 lt doğal kaynak suyu.",
          fiyat: 10,
          kategori: "İçecekler"
        },
        {
          id: 182,
          imgyol: "img/icecek/maden_suyu.jpeg",
          urunBaslik: "Maden Suyu",
          urunAciklama: "Sade veya meyveli seçenekleriyle maden suyu.",
          fiyat: 15,
          kategori: "İçecekler"
        },
        {
          id: 183,
          imgyol: "img/icecek/cola.jpeg",
          urunBaslik: "Cola",
          urunAciklama: "330 ml kutu veya 250 ml cam şişe servis seçeneğiyle.",
          fiyat: 25,
          kategori: "İçecekler"
        },
        {
          id: 184,
          imgyol: "img/icecek/fanta.jpeg",
          urunBaslik: "Fanta",
          urunAciklama: "330 ml kutu veya 250 ml cam şişe servis seçeneğiyle.",
          fiyat: 25,
          kategori: "İçecekler"
        },
        {
          id: 185,
          imgyol: "img/icecek/sprite.jpeg",
          urunBaslik: "Sprite",
          urunAciklama: "330 ml kutu veya 250 ml cam şişe servis seçeneğiyle.",
          fiyat: 25,
          kategori: "İçecekler"
        },
        {
          id: 186,
          imgyol: "img/icecek/ayran.jpeg",
          urunBaslik: "Ayran",
          urunAciklama: "Ev yapımı veya 200 ml kapalı ayran seçeneği ile.",
          fiyat: 20,
          kategori: "İçecekler"
        },
        {
          id: 187,
          imgyol: "img/icecek/salgam.jpeg",
          urunBaslik: "Şalgam Suyu",
          urunAciklama: "Acılı veya acısız seçeneğiyle geleneksel şalgam suyu.",
          fiyat: 22,
          kategori: "İçecekler"
        },
        {
          id: 188,
          imgyol: "img/icecek/limonata.jpeg",
          urunBaslik: "Ev Yapımı Limonata",
          urunAciklama: "Taze sıkılmış limon suyu ve nane ile hazırlanmış.",
          fiyat: 30,
          kategori: "İçecekler"
        },
        {
          id: 189,
          imgyol: "img/icecek/portakal_suyu.jpeg",
          urunBaslik: "Taze Sıkılmış Portakal Suyu",
          urunAciklama: "300 ml taze sıkılmış mevsim portakalı suyu.",
          fiyat: 35,
          kategori: "İçecekler"
        },
        {
          id: 190,
          imgyol: "img/icecek/cay.jpeg",
          urunBaslik: "Çay",
          urunAciklama: "Demli Türk çayı, ince belli bardakta servis edilir.",
          fiyat: 15,
          kategori: "İçecekler"
        },
        {
          id: 191,
          imgyol: "img/icecek/turk_kahvesi.jpeg",
          urunBaslik: "Türk Kahvesi",
          urunAciklama: "Geleneksel yöntemle hazırlanan Türk kahvesi, lokum ile servis edilir.",
          fiyat: 30,
          kategori: "İçecekler"
        },
        {
          id: 192,
          imgyol: "img/icecek/espresso.jpeg",
          urunBaslik: "Espresso",
          urunAciklama: "Seçkin kahve çekirdeklerinden hazırlanan espresso.",
          fiyat: 35,
          kategori: "İçecekler"
        },
        {
          id: 193,
          imgyol: "img/icecek/americano.jpeg",
          urunBaslik: "Americano",
          urunAciklama: "Espresso bazlı, su ile inceltilmiş kahve.",
          fiyat: 38,
          kategori: "İçecekler"
        },
        {
          id: 194,
          imgyol: "img/icecek/cappuccino.jpeg",
          urunBaslik: "Cappuccino",
          urunAciklama: "Espresso, buharla ısıtılmış süt ve süt köpüğü ile.",
          fiyat: 42,
          kategori: "İçecekler"
        },
        {
          id: 195,
          imgyol: "img/icecek/latte.jpeg",
          urunBaslik: "Caffè Latte",
          urunAciklama: "Espresso ve buharla ısıtılmış süt ile hazırlanan kahve.",
          fiyat: 42,
          kategori: "İçecekler"
        },
        {
          id: 196,
          imgyol: "img/icecek/mocha.jpeg",
          urunBaslik: "Mocha",
          urunAciklama: "Espresso, çikolata, sıcak süt ve süt köpüğü ile.",
          fiyat: 45,
          kategori: "İçecekler"
        },
        {
          id: 197,
          imgyol: "img/icecek/filtre_kahve.jpeg",
          urunBaslik: "Filtre Kahve",
          urunAciklama: "Günlük öğütülmüş kahve çekirdeklerinden demlenen kahve.",
          fiyat: 40,
          kategori: "İçecekler"
        },
        {
          id: 198,
          imgyol: "img/icecek/sahlep.jpeg",
          urunBaslik: "Sahlep",
          urunAciklama: "Tarçın ile servis edilen geleneksel sıcak içecek.",
          fiyat: 38,
          kategori: "İçecekler"
        },
        {
          id: 199,
          imgyol: "img/icecek/sicak_cikolata.jpeg",
          urunBaslik: "Sıcak Çikolata",
          urunAciklama: "Belçika çikolatası ile hazırlanan kremsi sıcak içecek.",
          fiyat: 40,
          kategori: "İçecekler"
        },
        {
          id: 200,
          imgyol: "img/icecek/bitki_cayi.jpeg",
          urunBaslik: "Bitki Çayları",
          urunAciklama: "Ihlamur, adaçayı, papatya, nane-limon seçenekleriyle.",
          fiyat: 30,
          kategori: "İçecekler"
        },
      
        // Fast Food (201-220)
        {
          id: 201,
          imgyol: "img/fastfood/hamburger.jpeg",
          urunBaslik: "Hamburger",
          urunAciklama: "180 gr dana eti, cheddar peyniri, özel sos, domates, marul, turşu ve soğan.",
          fiyat: 85,
          kategori: "Fast food"
        },
        {
          id: 202,
          imgyol: "img/fastfood/cheeseburger.jpeg",
          urunBaslik: "Cheeseburger",
          urunAciklama: "180 gr dana eti, çift cheddar peyniri, özel sos, domates, marul, turşu ve soğan.",
          fiyat: 90,
          kategori: "Fast food"
        },
        {
          id: 203,
          imgyol: "img/fastfood/tavuk_burger.jpeg",
          urunBaslik: "Tavuk Burger",
          urunAciklama: "Çıtır tavuk göğsü, özel sos, marul, domates ve turşu ile.",
          fiyat: 75,
          kategori: "Fast food"
        },
        {
          id: 204,
          imgyol: "img/fastfood/kofte_ekmek.jpeg",
          urunBaslik: "Köfte Ekmek",
          urunAciklama: "Özel harçla hazırlanmış ızgara köfte, domates, soğan ve yeşilliklerle.",
          fiyat: 95,
          kategori: "Fast food"
        },
        {
          id: 205,
          imgyol: "img/fastfood/doner_ekmek.jpeg",
          urunBaslik: "Döner Ekmek",
          urunAciklama: "El yapımı ekmek üzerinde et döner, domates, soğan ve yeşilliklerle.",
          fiyat: 90,
          kategori: "Fast food"
        },
        {
          id: 206,
          imgyol: "img/fastfood/tavuk_doner.jpeg",
          urunBaslik: "Tavuk Döner",
          urunAciklama: "El yapımı ekmek üzerinde tavuk döner, domates, soğan ve yeşilliklerle.",
          fiyat: 85,
          kategori: "Fast food"
        },
        {
          id: 207,
          imgyol: "img/fastfood/durum.jpeg",
          urunBaslik: "Et Dürüm",
          urunAciklama: "İnce lavaş ekmeği içinde et döner, domates, soğan ve yeşilliklerle.",
          fiyat: 95,
          kategori: "Fast food"
        },
        {
          id: 208,
          imgyol: "img/fastfood/tavuk_durum.jpeg",
          urunBaslik: "Tavuk Dürüm",
          urunAciklama: "İnce lavaş ekmeği içinde tavuk döner, domates, soğan ve yeşilliklerle.",
          fiyat: 90,
          kategori: "Fast food"
        },
        {
          id: 209,
          imgyol: "img/fastfood/tantuni.jpeg",
          urunBaslik: "Tantuni",
          urunAciklama: "İnce doğranmış dana eti, baharatlar, domates, soğan ve yeşilliklerle.",
          fiyat: 95,
          kategori: "Fast food"
        },
        {
          id: 210,
          imgyol: "img/fastfood/cigerli_doner.jpeg",
          urunBaslik: "Ciğerli Dürüm",
          urunAciklama: "Lavaş içinde ızgara ciğer, soğan, maydanoz ve baharatlarla.",
          fiyat: 90,
          kategori: "Fast food"
        },
        {
          id: 211,
          imgyol: "img/fastfood/lahmacun.jpeg",
          urunBaslik: "Lahmacun",
          urunAciklama: "İnce hamur üzerinde kıyma, domates, biber ve baharatlarla.",
          fiyat: 45,
          kategori: "Fast food"
        },
        {
          id: 212,
          imgyol: "img/fastfood/kiymali_pide.jpeg",
          urunBaslik: "Kıymalı Pide",
          urunAciklama: "El açması hamur üzerinde kıyma, domates, biber ve baharatlarla.",
          fiyat: 75,
          kategori: "Fast food"
        },
        {
          id: 213,
          imgyol: "img/fastfood/kasarli_pide.jpeg",
          urunBaslik: "Kaşarlı Pide",
          urunAciklama: "El açması hamur üzerinde eritilmiş kaşar peyniri.",
          fiyat: 70,
          kategori: "Fast food"
        },
        {
          id: 214,
          imgyol: "img/fastfood/kusbasili_pide.jpeg",
          urunBaslik: "Kuşbaşılı Pide",
          urunAciklama: "El açması hamur üzerinde marine edilmiş dana kuşbaşı et ve sebzelerle.",
          fiyat: 85,
          kategori: "Fast food"
        },
        {
          id: 215,
          imgyol: "img/fastfood/karisik_pide.jpeg",
          urunBaslik: "Karışık Pide",
          urunAciklama: "El açması hamur üzerinde kuşbaşı et, kıyma, sebzeler ve kaşar peyniri ile.",
          fiyat: 90,
          kategori: "Fast food"
        },
        {
          id: 216,
          imgyol: "img/fastfood/pizza.jpeg",
          urunBaslik: "Karışık Pizza",
          urunAciklama: "İnce hamur üzerinde sucuk, sosis, mantar, biber ve kaşar peyniri.",
          fiyat: 95,
          kategori: "Fast food"
        },
        {
          id: 217,
          imgyol: "img/fastfood/patates_kizartmasi.jpeg",
          urunBaslik: "Patates Kızartması",
          urunAciklama: "Taze patateslerden hazırlanmış kızartma, özel baharatlarla.",
          fiyat: 40,
          kategori: "Fast food"
        },
        {
          id: 218,
          imgyol: "img/fastfood/sogan_halkasi.jpeg",
          urunBaslik: "Soğan Halkası",
          urunAciklama: "Çıtır soğan halkaları, özel sos ile servis edilir.",
          fiyat: 45,
          kategori: "Fast food"
        },
        {
          id: 219,
          imgyol: "img/fastfood/tavuk_nugget.jpeg",
          urunBaslik: "Tavuk Nugget",
          urunAciklama: "8 parça çıtır tavuk nugget, özel soslarla servis edilir.",
          fiyat: 55,
          kategori: "Fast food"
        },
        {
          id: 220,
          imgyol: "img/fastfood/cipsli_tavuk.jpeg",
          urunBaslik: "Cipsli Tavuk",
          urunAciklama: "Patates cipsi kaplı tavuk göğsü, özel soslarla servis edilir.",
          fiyat: 60,
          kategori: "Fast food"
        },
      
        // Tatlılar - Şerbetli tatlılar (221-230)
        {
          id: 221,
          imgyol: "img/tatli/serbetli/baklava.jpeg",
          urunBaslik: "Fıstıklı Baklava",
          urunAciklama: "40 katlı el açması yufka, Antep fıstığı ve özel şerbetiyle.",
          fiyat: 90,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 222,
          imgyol: "img/tatli/serbetli/cevizli_baklava.jpeg",
          urunBaslik: "Cevizli Baklava",
          urunAciklama: "40 katlı el açması yufka, ceviz ve özel şerbetiyle.",
          fiyat: 80,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 223,
          imgyol: "img/tatli/serbetli/kadayif.jpeg",
          urunBaslik: "Fıstıklı Kadayıf",
          urunAciklama: "Tel kadayıf, Antep fıstığı ve özel şerbetiyle.",
          fiyat: 85,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 224,
          imgyol: "img/tatli/serbetli/kunefe.jpeg",
          urunBaslik: "Künefe",
          urunAciklama: "Kadayıf telleri arasında özel peynir, fıstık ve şerbetiyle sıcak servis edilir.",
          fiyat: 95,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 225,
          imgyol: "img/tatli/serbetli/somonye.jpeg",
          urunBaslik: "Şöbiyet",
          urunAciklama: "İnce yufka katları arasında Antep fıstığı krema ve şerbetiyle.",
          fiyat: 90,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 226,
          imgyol: "img/tatli/serbetli/havuc_dilimi.jpeg",
          urunBaslik: "Havuç Dilimi",
          urunAciklama: "Üçgen şeklinde özel yufka, fıstık ve şerbetiyle.",
          fiyat: 85,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 227,
          imgyol: "img/tatli/serbetli/tulumba.jpeg",
          urunBaslik: "Tulumba Tatlısı",
          urunAciklama: "Çıtır dışı, yumuşak içi ve özel şerbetiyle geleneksel lezzet.",
          fiyat: 65,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 228,
          imgyol: "img/tatli/serbetli/lokma.jpeg",
          urunBaslik: "Lokma Tatlısı",
          urunAciklama: "Yumuşak hamuru ve özel şerbetiyle geleneksel lezzet.",
          fiyat: 65,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 229,
          imgyol: "img/tatli/serbetli/revani.jpeg",
          urunBaslik: "Revani",
          urunAciklama: "İrmik ve yumurta ile hazırlanan, şerbetli geleneksel tatlı.",
          fiyat: 70,
          kategori: "Şerbetli tatlılar"
        },
        {
          id: 230,
          imgyol: "img/tatli/serbetli/sekerpare.jpeg",
          urunBaslik: "Şekerpare",
          urunAciklama: "Yumuşak hamuru, fındık ve özel şerbetiyle.",
          fiyat: 70,
          kategori: "Şerbetli tatlılar"
        },

        {
            id: 221,
            imgyol: "img/tatli/serbetli/baklava.jpeg",
            urunBaslik: "Fıstıklı Baklava",
            urunAciklama: "40 katlı el açması yufka, Antep fıstığı ve özel şerbetiyle.",
            fiyat: 90,
            kategori: "Tatlılar"
          },
          {
            id: 222,
            imgyol: "img/tatli/serbetli/cevizli_baklava.jpeg",
            urunBaslik: "Cevizli Baklava",
            urunAciklama: "40 katlı el açması yufka, ceviz ve özel şerbetiyle.",
            fiyat: 80,
            kategori: "Tatlılar"
          },
          {
            id: 223,
            imgyol: "img/tatli/serbetli/kadayif.jpeg",
            urunBaslik: "Fıstıklı Kadayıf",
            urunAciklama: "Tel kadayıf, Antep fıstığı ve özel şerbetiyle.",
            fiyat: 85,
            kategori: "Tatlılar"
          },
          {
            id: 224,
            imgyol: "img/tatli/serbetli/kunefe.jpeg",
            urunBaslik: "Künefe",
            urunAciklama: "Kadayıf telleri arasında özel peynir, fıstık ve şerbetiyle sıcak servis edilir.",
            fiyat: 95,
            kategori: "Tatlılar"
          },
          {
            id: 225,
            imgyol: "img/tatli/serbetli/somonye.jpeg",
            urunBaslik: "Şöbiyet",
            urunAciklama: "İnce yufka katları arasında Antep fıstığı krema ve şerbetiyle.",
            fiyat: 90,
            kategori: "Tatlılar"
          },
          {
            id: 226,
            imgyol: "img/tatli/serbetli/havuc_dilimi.jpeg",
            urunBaslik: "Havuç Dilimi",
            urunAciklama: "Üçgen şeklinde özel yufka, fıstık ve şerbetiyle.",
            fiyat: 85,
            kategori: "Tatlılar"
          },
          {
            id: 227,
            imgyol: "img/tatli/serbetli/tulumba.jpeg",
            urunBaslik: "Tulumba Tatlısı",
            urunAciklama: "Çıtır dışı, yumuşak içi ve özel şerbetiyle geleneksel lezzet.",
            fiyat: 65,
            kategori: "Tatlılar"
          },
          {
            id: 228,
            imgyol: "img/tatli/serbetli/lokma.jpeg",
            urunBaslik: "Lokma Tatlısı",
            urunAciklama: "Yumuşak hamuru ve özel şerbetiyle geleneksel lezzet.",
            fiyat: 65,
            kategori: "Tatlılar"
          },
          {
            id: 229,
            imgyol: "img/tatli/serbetli/revani.jpeg",
            urunBaslik: "Revani",
            urunAciklama: "İrmik ve yumurta ile hazırlanan, şerbetli geleneksel tatlı.",
            fiyat: 70,
            kategori: "Tatlılar"
          },
          {
            id: 230,
            imgyol: "img/tatli/serbetli/sekerpare.jpeg",
            urunBaslik: "Şekerpare",
            urunAciklama: "Yumuşak hamuru, fındık ve özel şerbetiyle.",
            fiyat: 70,
            kategori: "Tatlılar"
          },
        
      
        // Tatlılar - Sütlü tatlılar (231-240)
        {
          id: 231,
          imgyol: "img/tatli/sutlu/sutlac.jpeg",
          urunBaslik: "Fırın Sütlaç",
          urunAciklama: "Fırında özel pişirilmiş, tarçınlı geleneksel sütlaç.",
          fiyat: 65,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 232,
          imgyol: "img/tatli/sutlu/kazandibi.jpeg",
          urunBaslik: "Kazandibi",
          urunAciklama: "Karamelize şekerli muhallebi bazlı geleneksel tatlı.",
          fiyat: 70,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 233,
          imgyol: "img/tatli/sutlu/tavuk_gogsu.jpeg",
          urunBaslik: "Tavuk Göğsü",
          urunAciklama: "Tavuk etli, tarçınlı geleneksel muhallebi tatlısı.",
          fiyat: 75,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 234,
          imgyol: "img/tatli/sutlu/muhallebi.jpeg",
          urunBaslik: "Muhallebi",
          urunAciklama: "Geleneksel süt, şeker ve pirinç unu tatlısı.",
          fiyat: 60,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 235,
          imgyol: "img/tatli/sutlu/gullac.jpeg",
          urunBaslik: "Güllaç",
          urunAciklama: "Gül suyu aromalı, ceviz ve nar ile süslenmiş geleneksel tatlı.",
          fiyat: 65,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 236,
          imgyol: "img/tatli/sutlu/keskul.jpeg",
          urunBaslik: "Keşkül",
          urunAciklama: "Badem aromalı muhallebi tatlısı, fındık ile süslenir.",
          fiyat: 70,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 237,
          imgyol: "img/tatli/sutlu/supangle.jpeg",
          urunBaslik: "Supangle",
          urunAciklama: "Yoğun çikolata aromalı muhallebi, üzeri bitter çikolata ile süslenir.",
          fiyat: 75,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 238,
          imgyol: "img/tatli/sutlu/profiterol.jpeg",
          urunBaslik: "Profiterol",
          urunAciklama: "Minik hamur topları içinde krema dolgusu, üzerinde çikolata sosu.",
          fiyat: 80,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 239,
          imgyol: "img/tatli/sutlu/trilece.jpeg",
          urunBaslik: "Trileçe",
          urunAciklama: "Üç farklı süt ile hazırlanan özel tatlı, karamel sosu ile servis edilir.",
          fiyat: 75,
          kategori: "Sütlü tatlılar"
        },
        {
          id: 240,
          imgyol: "img/tatli/sutlu/puding.jpeg",
          urunBaslik: "Ev Yapımı Puding",
          urunAciklama: "Vanilya, çikolata veya karamel seçenekleriyle ev yapımı puding.",
          fiyat: 60,
          kategori: "Sütlü tatlılar"
        },

        {
            id: 231,
            imgyol: "img/tatli/sutlu/sutlac.jpeg",
            urunBaslik: "Fırın Sütlaç",
            urunAciklama: "Fırında özel pişirilmiş, tarçınlı geleneksel sütlaç.",
            fiyat: 65,
            kategori: "Tatlılar"
          },
          {
            id: 232,
            imgyol: "img/tatli/sutlu/kazandibi.jpeg",
            urunBaslik: "Kazandibi",
            urunAciklama: "Karamelize şekerli muhallebi bazlı geleneksel tatlı.",
            fiyat: 70,
            kategori: "Tatlılar"
          },
          {
            id: 233,
            imgyol: "img/tatli/sutlu/tavuk_gogsu.jpeg",
            urunBaslik: "Tavuk Göğsü",
            urunAciklama: "Tavuk etli, tarçınlı geleneksel muhallebi tatlısı.",
            fiyat: 75,
            kategori: "Tatlılar"
          },
          {
            id: 234,
            imgyol: "img/tatli/sutlu/muhallebi.jpeg",
            urunBaslik: "Muhallebi",
            urunAciklama: "Geleneksel süt, şeker ve pirinç unu tatlısı.",
            fiyat: 60,
            kategori: "Tatlılar"
          },
          {
            id: 235,
            imgyol: "img/tatli/sutlu/gullac.jpeg",
            urunBaslik: "Güllaç",
            urunAciklama: "Gül suyu aromalı, ceviz ve nar ile süslenmiş geleneksel tatlı.",
            fiyat: 65,
            kategori: "Tatlılar"
          },
          {
            id: 236,
            imgyol: "img/tatli/sutlu/keskul.jpeg",
            urunBaslik: "Keşkül",
            urunAciklama: "Badem aromalı muhallebi tatlısı, fındık ile süslenir.",
            fiyat: 70,
            kategori: "Tatlılar"
          },
          {
            id: 237,
            imgyol: "img/tatli/sutlu/supangle.jpeg",
            urunBaslik: "Supangle",
            urunAciklama: "Yoğun çikolata aromalı muhallebi, üzeri bitter çikolata ile süslenir.",
            fiyat: 75,
            kategori: "Tatlılar"
          },
          {
            id: 238,
            imgyol: "img/tatli/sutlu/profiterol.jpeg",
            urunBaslik: "Profiterol",
            urunAciklama: "Minik hamur topları içinde krema dolgusu, üzerinde çikolata sosu.",
            fiyat: 80,
            kategori: "Tatlılar"
          },
          {
            id: 239,
            imgyol: "img/tatli/sutlu/trilece.jpeg",
            urunBaslik: "Trileçe",
            urunAciklama: "Üç farklı süt ile hazırlanan özel tatlı, karamel sosu ile servis edilir.",
            fiyat: 75,
            kategori: "Tatlılar"
          },
          {
            id: 240,
            imgyol: "img/tatli/sutlu/puding.jpeg",
            urunBaslik: "Ev Yapımı Puding",
            urunAciklama: "Vanilya, çikolata veya karamel seçenekleriyle ev yapımı puding.",
            fiyat: 60,
            kategori: "Tatlılar"
          },
      
        // Tatlılar - Pasta ve kekler (241-250)
        {
          id: 241,
          imgyol: "img/tatli/pasta/cikolatali_pasta.jpeg",
          urunBaslik: "Çikolatalı Meyva Aromalı Pasta",
          urunAciklama: "Belçika çikolatası ile hazırlanmış, katmanlı nefis meyveli pasta.",
          fiyat: 85,
          kategori: "Pasta ve kekler"
        },
        {
          id: 242,
          imgyol: "img/tatli/pasta/cheesecake.jpeg",
          urunBaslik: "Cheesecake",
          urunAciklama: "Yumuşak peynir kreması, bisküvi tabanı ve mevsim meyveleri ile.",
          fiyat: 90,
          kategori: "Pasta ve kekler"
        },
        {
          id: 243,
          imgyol: "img/tatli/pasta/tiramisu.jpeg",
          urunBaslik: "Tiramisu",
          urunAciklama: "Mascarpone peyniri, kahve ve kakao ile katmanlı İtalyan tatlısı.",
          fiyat: 85,
          kategori: "Pasta ve kekler"
        },
        {
          id: 244,
          imgyol: "img/tatli/pasta/islak_kek.jpeg",
          urunBaslik: "Islak Kek",
          urunAciklama: "Özel çikolata sosu ile ıslatılmış yumuşak kek.",
          fiyat: 65,
          kategori: "Pasta ve kekler"
        },
        {
          id: 245,
          imgyol: "img/tatli/pasta/havuclu_kek.jpeg",
          urunBaslik: "Havuçlu Kek",
          urunAciklama: "Taze havuç, ceviz ve tarçın ile hazırlanan özel kek.",
          fiyat: 70,
          kategori: "Pasta ve kekler"
        },
        {
          id: 246,
          imgyol: "img/tatli/pasta/elmali_tart.jpeg",
          urunBaslik: "Elmalı Tart",
          urunAciklama: "Taze elma, tarçın ve karamel ile hazırlanan geleneksel tart.",
          fiyat: 75,
          kategori: "Pasta ve kekler"
        },
        {
          id: 247,
          imgyol: "img/tatli/pasta/browni.jpeg",
          urunBaslik: "Brownie",
          urunAciklama: "Yoğun çikolatalı, dışı çıtır içi yumuşak özel brownie.",
          fiyat: 70,
          kategori: "Pasta ve kekler"
        },
        {
          id: 248,
          imgyol: "img/tatli/pasta/mozaik_pasta.jpeg",
          urunBaslik: "Mozaik Pasta",
          urunAciklama: "Bisküvi parçaları ve çikolata ile hazırlanan geleneksel pasta.",
          fiyat: 65,
          kategori: "Pasta ve kekler"
        },
        {
          id: 249,
          imgyol: "img/tatli/pasta/cikolatali_sufle.jpeg",
          urunBaslik: "Çikolatalı Sufle",
          urunAciklama: "Sıcak servis edilen, içi akışkan çikolatalı sufle, vanilya dondurması ile.",
          fiyat: 90,
          kategori: "Pasta ve kekler"
        },
        {
          id: 250,
          imgyol: "img/tatli/pasta/magnolia.jpeg",
          urunBaslik: "Magnolia",
          urunAciklama: "Bisküvi tabanı üzerine hafif krema ve mevsim meyveleri ile.",
          fiyat: 80,
          kategori: "Pasta ve kekler"
        },
        {
            id: 241,
            imgyol: "img/tatli/pasta/cikolatali_pasta.jpeg",
            urunBaslik: "Çikolatalı Pasta",
            urunAciklama: "Belçika çikolatası ile hazırlanmış, katmanlı nefis pasta.",
            fiyat: 85,
            kategori: "Tatlılar"
          },
          {
            id: 242,
            imgyol: "img/tatli/pasta/cheesecake.jpeg",
            urunBaslik: "Cheesecake",
            urunAciklama: "Yumuşak peynir kreması, bisküvi tabanı ve mevsim meyveleri ile.",
            fiyat: 90,
            kategori: "Tatlılar"
          },
          {
            id: 243,
            imgyol: "img/tatli/pasta/tiramisu.jpeg",
            urunBaslik: "Tiramisu",
            urunAciklama: "Mascarpone peyniri, kahve ve kakao ile katmanlı İtalyan tatlısı.",
            fiyat: 85,
            kategori: "Tatlılar"
          },
          {
            id: 244,
            imgyol: "img/tatli/pasta/islak_kek.jpeg",
            urunBaslik: "Islak Kek",
            urunAciklama: "Özel çikolata sosu ile ıslatılmış yumuşak kek.",
            fiyat: 65,
            kategori: "Tatlılar"
          },
          {
            id: 245,
            imgyol: "img/tatli/pasta/havuclu_kek.jpeg",
            urunBaslik: "Havuçlu Kek",
            urunAciklama: "Taze havuç, ceviz ve tarçın ile hazırlanan özel kek.",
            fiyat: 70,
            kategori: "Tatlılar"
          },
          {
            id: 246,
            imgyol: "img/tatli/pasta/elmali_tart.jpeg",
            urunBaslik: "Elmalı Tart",
            urunAciklama: "Taze elma, tarçın ve karamel ile hazırlanan geleneksel tart.",
            fiyat: 75,
            kategori: "Tatlılar"
          },
          {
            id: 247,
            imgyol: "img/tatli/pasta/browni.jpeg",
            urunBaslik: "Brownie",
            urunAciklama: "Yoğun çikolatalı, dışı çıtır içi yumuşak özel brownie.",
            fiyat: 70,
            kategori: "Tatlılar"
          },
          {
            id: 248,
            imgyol: "img/tatli/pasta/mozaik_pasta.jpeg",
            urunBaslik: "Mozaik Pasta",
            urunAciklama: "Bisküvi parçaları ve çikolata ile hazırlanan geleneksel pasta.",
            fiyat: 65,
            kategori: "Tatlılar"
          },
          {
            id: 249,
            imgyol: "img/tatli/pasta/cikolatali_sufle.jpeg",
            urunBaslik: "Çikolatalı Sufle",
            urunAciklama: "Sıcak servis edilen, içi akışkan çikolatalı sufle, vanilya dondurması ile.",
            fiyat: 90,
            kategori: "Tatlılar"
          },
          {
            id: 250,
            imgyol: "img/tatli/pasta/magnolia.jpeg",
            urunBaslik: "Magnolia",
            urunAciklama: "Bisküvi tabanı üzerine hafif krema ve mevsim meyveleri ile.",
            fiyat: 80,
            kategori: "Tatlılar"
          }
    ];
      
// Hakkımızda içeriği
const hakkimizdaIcerik = `
<div class="container mt-4">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center" style="color: #d36b09;">Hakkımızda</h2>
            <div style="padding: 20px;"  class="card p-4">
                <p>
                    Lezzet Ruhu Firmamız, kaliteli ürünleri uygun fiyatlarla sizlerle buluşturmayı amaçlayan bir e-ticaret platformudur. 
                    Müşteri memnuniyetini ön planda tutarak, güvenilir alışveriş deneyimi sunuyoruz.
                </p>
                <p>
                    Uzun yıllardır sektörde edindiğimiz tecrübe ile en kaliteli ürünleri sizlere sunmaktan gurur duyuyoruz.
                    Tüm ürünlerimiz taze ve özenle hazırlanmaktadır.
                </p>
                <p>
                    Amacımız, damak tadınıza hitap eden lezzetleri evinize kadar getirmek ve sizlere unutulmaz bir deneyim yaşatmaktır.
                </p>
                <p>
                    Bizi tercih ettiğiniz için teşekkür ederiz!
                </p>
            </div>
        </div>
    </div>
</div>
`;

// İletişim içeriği
const iletisimIcerik = `
<div style="padding: 20px;" class="container mt-4">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center" style="color: #d36b09;">İletişim</h2>
            <div class="card p-4">
                <ul style="list-style: none; padding-left: 0;">
                    <li class="mb-3"><strong style="color: #d36b09;">Adres:</strong> Büyükçekmece Ulus Mahallesi Menekşe Sokak No5 Zemin Kat, İstanbul</li>
                    <li class="mb-3"><strong style="color: #d36b09;">Telefon:</strong> +90 505 723 5793</li>
                    <li class="mb-3"><strong style="color: #d36b09;">E-posta:</strong> <a href="mailto:info@lezzetruhu.com">info@lezzetruhu.com</a></li>
                </ul>
                
                <div  class="mt-4">
                    <h4 style="color: #d36b09;">Bize Ulaşın</h4>
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Adınız Soyadınız</label>
                            <input type="text" class="form-control" id="name" placeholder="Adınız Soyadınız">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-posta Adresiniz</label>
                            <input type="email" class="form-control" id="email" placeholder="ornek@mail.com">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Mesajınız</label>
                            <textarea class="form-control" id="message" rows="5" placeholder="Mesajınızı buraya yazabilirsiniz..."></textarea>
                        </div>
                        <button type="button" class="btn btn-warning">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`;

function menuListele() {
  const menuAlani = document.querySelector(".kategoriler");
  menuAlani.innerHTML = "";

  menuYapisi.forEach(item => {
    const bgStyle = item.resim
      ? `style="background-image:url('${item.resim}');background-size:cover;background-position:center"`
      : "";

    let altHTML = "";
    if (item.altMenu.length) {
      altHTML = `<div class="alt-kategoriler">` +
        item.altMenu.map(alt => {
          const altBgStyle = alt.resim
            ? `style="background-image:url('${alt.resim}');background-size:cover;background-position:center"`
            : "";
          return `<div ${altBgStyle}>
                    <a href="#" onclick="kategoriyeGore('${alt.baslik}'); return false;">${alt.baslik}</a>
                  </div>`;
        }).join("") +
        `</div>`;
    }

    menuAlani.innerHTML += `
      <div ${bgStyle}>
        <a href="#" onclick="kategoriyeGore('${item.baslik}'); return false;">${item.baslik}</a>
        ${altHTML}
      </div>`;
  });
}

// Kategoriye göre ürünleri filtreleme
function kategoriyeGore(kategori) {
    aktifKategori = kategori; // Seçilen kategori global değişkene atanır

    // Aktif kategoriyi görsel olarak vurgulama
    var menuLinks = document.querySelectorAll('.kategoriler a'); // Menüdeki tüm kategori bağlantılarını seç
    menuLinks.forEach(link => {
        if (link.textContent === kategori) {
            link.classList.add('aktif'); // Seçilen kategoriye 'aktif' sınıfı eklenir
        } else {
            link.classList.remove('aktif'); // Diğerlerinden 'aktif' sınıfı kaldırılır
        }
    });

    // Özel sayfalar için kontrol
    if (kategori === "Hakkımızda") {
        document.getElementById("ürünler").innerHTML = hakkimizdaIcerik;
        // Banner reklamı gizle
        document.querySelector(".banner-reklam").style.display = "none";
        return;
    } 
    else if (kategori === "İletişim") {
        document.getElementById("ürünler").innerHTML = iletisimIcerik;
        // Banner reklamı gizle
        document.querySelector(".banner-reklam").style.display = "none";
        return;
    } 
    else {
        // Normal kategoriler için banner reklamı göster
        document.querySelector(".banner-reklam").style.display = "block";
    }

    // Ürünleri filtreleyip listeleme
    urunListele(); // Seçilen kategoriye göre ürünleri yeniden listele

    // Kısa bir gecikmeyle kaydırma işlemini gerçekleştir (DOM güncellemesinin tamamlanmasını bekler)
    setTimeout(function() {
        const tumUrunlerYazisi = document.querySelectorAll('#reklam-yazi')[1]; // İkinci 'reklam-yazi' ID'li elementi al
        if (tumUrunlerYazisi) {
            smoothScrollTo(tumUrunlerYazisi.offsetTop, 1000); // 1 saniyede yavaşça o bölüme kaydır
        }
    }, 100); // 100ms gecikme
}

// Özel yavaş kaydırma fonksiyonu
function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY; // Başlangıç scroll pozisyonu
    const difference = targetY - startY; // Hedef ile mevcut pozisyon arasındaki fark
    const startTime = performance.now(); // Animasyonun başladığı zaman

    function step() {
        const currentTime = performance.now(); // O anki zaman
        const elapsed = currentTime - startTime; // Geçen süre

        if (elapsed < duration) {
            // Easing fonksiyonu (yavaş başlayıp yavaş biten animasyon)
            const progress = elapsed / duration;
            const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startY + difference * easeInOutCubic); // Scroll'u yeni pozisyona taşı
            requestAnimationFrame(step); // Bir sonraki adım için fonksiyonu tekrar çağır
        } else {
            window.scrollTo(0, targetY); // Süre tamamlandıysa hedefe tam olarak git
        }
    }

    requestAnimationFrame(step); // Animasyonu başlat
}

// Ürünleri HTML'e eklemek
function urunListele() {
    var urunAlani = document.getElementById("ürünler");
    urunAlani.innerHTML = "";

    // Eğer aktif kategori seçilmişse, o kategoriye ait ürünleri filtrele
    var gosterilecekUrunler = urunler;
    if (aktifKategori) {
        gosterilecekUrunler = urunler.filter(urun => urun.kategori === aktifKategori);
    }

    if (gosterilecekUrunler.length === 0) {
        urunAlani.innerHTML = "<p class='text-center w-100'>Bu kategoride ürün bulunmamaktadır.</p>";
        return;
    }

    gosterilecekUrunler.forEach((urun) => {
        var urunListesi = `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img src="${urun.imgyol}" class="card-img-top" alt="${urun.urunBaslik}">
            <div class="card-body">
            <h5 class="card-title">${urun.urunBaslik}</h5>
            <p class="card-text">${urun.urunAciklama}</p>
            <p id="fiyat" class="text-danger fw-bold">${urun.fiyat} ₺</p>
            <button class="btn btn-warning" onclick="sepeteAt(${urun.id})">Sepete Ekle</button>
            </div>
            </div>
        </div>`;
        urunAlani.innerHTML += urunListesi;
    });
}

// Tüm ürünleri göstermek için fonksiyon
function tumUrunleriGoster() {
    aktifKategori = "";

    // Tüm kategorilerin aktif sınıfını kaldır
    var menuLinks = document.querySelectorAll('.kategoriler a');
    menuLinks.forEach(link => {
        link.classList.remove('aktif');
    });

    // Banner reklamı tekrar göster
    document.querySelector(".banner-reklam").style.display = "block";
    
    urunListele();
}

// Sepete ürün ekleme
function sepeteAt(id) {
    let arananUrun = sepet.find(urun => urun.id === id);
    if (arananUrun) {
        arananUrun.miktar += 1; // Eğer ürün zaten sepette varsa miktarını artır
    } else {
        // Yeni bir kopya oluştur, orijinal ürünü değiştirme
        let urun = urunler.find(urun => urun.id === id);
        let sepetUrunu = { ...urun, miktar: 1 };
        sepet.push(sepetUrunu); // Sepete ekle
    }
    toplamTutarHesapla(); // Sepet tutarını güncelle
    document.getElementById("sepetToplam").innerText = sepet.reduce((total, item) => total + item.miktar, 0); // Sepet ikonundaki ürün sayısını güncelle
    // sepetGoruntule();
    sepetiKaydet();
}

// Toplam tutarı hesaplama
function toplamTutarHesapla() {
    sepetTutari = 0;
    sepet.forEach((urun) => {
        sepetTutari += urun.fiyat * urun.miktar;
    });
}

// Sepet popup'ı gösterme
function sepetGoruntule() {
    var sepetAlani = document.getElementById("sepetUrunler");
    var sepetToplam = document.getElementById("sepetToplamTutar");
    sepetAlani.innerHTML = "";

    if (sepet.length === 0) {
        sepetAlani.innerHTML = "<p>Sepetiniz boş.</p>";
    } else {
        sepet.forEach((urun) => {
            var urunListesi = `
            <div class="modal-urun">
            <img src="${urun.imgyol}" alt="${urun.urunBaslik}">
            <div class="urun-info">
            <h5>${urun.urunBaslik}</h5>
            <div class="d-flex align-items-center mb-2">
            <button class="btn btn-sm btn-outline-secondary me-2" onclick="miktarDegistir(${urun.id}, 'Azalt')">-</button>
            <span>${urun.miktar}</span>
            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="miktarDegistir(${urun.id}, 'Arttir')">+</button>
            </div>
            <p>${urun.fiyat * urun.miktar} ₺</p>
            </div>
            <button class="btn btn-sm btn-danger" onclick="sepettenSil(${urun.id})">X</button>
            </div>`;
            sepetAlani.innerHTML += urunListesi;
        });
    }

    sepetToplam.innerText = "Toplam: " + sepetTutari + " ₺";
    document.getElementById("sepetModal").classList.add('open');
}

// Miktar değiştirme fonksiyonu
function miktarDegistir(id, islem) {
    let arananUrun = sepet.find(urun => urun.id === id);
    if (arananUrun) {
        if (islem === "Arttir") {
            arananUrun.miktar += 1;
        } else if (islem === "Azalt") {
            if (arananUrun.miktar > 1) {
                arananUrun.miktar -= 1;
            } else {
                sepettenSil(id);
                return;
            }
        }
        toplamTutarHesapla();
        document.getElementById("sepetToplam").innerText = sepet.reduce((total, item) => total + item.miktar, 0);
        sepetGoruntule();
    }
    sepetGoruntule();
    sepetiKaydet();
}

// Sepetten ürün silme
function sepettenSil(id) {
    let arananUrun = sepet.find(urun => urun.id === id);
    if (arananUrun) {
        sepet.splice(sepet.indexOf(arananUrun), 1);
        toplamTutarHesapla();
        document.getElementById("sepetToplam").innerText = sepet.reduce((total, item) => total + item.miktar, 0);
        sepetGoruntule();
    }
    sepetGoruntule();
    sepetiKaydet();
}

// Sepeti temizleme
function sepetiTemizle() {
    sepet = [];
    sepetTutari = 0;
    document.getElementById("sepetToplam").innerText = "0";
    sepetGoruntule();
    sepetiKaydet();
}

// Sepet popup'ını kapatma
function closeSepet() {
    document.getElementById("sepetModal").classList.remove('open');
}

function sepetiKaydet() {
    localStorage.setItem("sepet", JSON.stringify(sepet));
    localStorage.setItem("sepetTutari", sepetTutari.toString());
}

function sepetiYukle() {
    let kayitliSepet = localStorage.getItem("sepet");
    let kayitliTutar = localStorage.getItem("sepetTutari");
    if (kayitliSepet) {
        sepet = JSON.parse(kayitliSepet);
        sepetTutari = parseFloat(kayitliTutar);
        document.getElementById("sepetToplam").innerText = sepet.reduce((total, item) => total + item.miktar, 0);
    }
}

// Sayfayı yükle
window.onload = function() {
    // Ana içerik başlangıçta gizli olmalı
    document.getElementById("mainContent").style.display = "none";
};

// Kullanıcı giriş bilgileri
const KullaniciListesi = [
    {kullanicAdi:"admin", sifre:"1234"},
    {kullanicAdi:"kullanici", sifre:"abcd"}
];

// Giriş işlemi
function girisYap() {
    const kullanicAdi = document.getElementById("username").value.trim();
    const sifre = document.getElementById("password").value.trim();
    const hata = document.getElementById("loginError");
    const girisBasarili = KullaniciListesi.some(user => user.kullanicAdi === kullanicAdi && user.sifre === sifre);
    
    // some() metodu bir dizideki en az bir öğenin, belitrilen koşulu sağlayıp sağlamadığını kontrol eder.
    // koşul sağlandığı takdirde true sağlanmadığı durumda ise false değerini döndürür.
    
    if(girisBasarili) {
        const loginContainer = document.getElementById("loginContainer");
        loginContainer.style.display = "none";
        loginContainer.classList.remove("d-flex"); // ekran yüksekliği sorunu önlemek için kaldırdık.
        loginContainer.classList.add("hide");
        
        // ana içeriği gösterelim
        document.getElementById("mainContent").style.display = "block";
        
        menuListele();
        urunListele();
        sepetiYukle();
        sepetGoruntule();
    } else {
        hata.textContent = "Kullanıcı adı veya şifre yanlış";
    }
}

let aramaZamanlayici;

function urunAra(aramaMetni) {
    clearTimeout(aramaZamanlayici);
    aramaZamanlayici = setTimeout(() => {
        aramaMetni = aramaMetni.toLowerCase().trim();
        const urunAlani = document.getElementById("ürünler");
        urunAlani.innerHTML = "";

        if (!aramaMetni) {
            urunleriListele(urunler);
            document.querySelector(".banner-reklam").style.display = "block";
            return;
        }

        const filtrelenmisUrunler = urunler.filter(urun => {
            const baslik = urun.urunBaslik.toLowerCase();
            const aciklama = urun.urunAciklama.toLowerCase();
            const kategori = urun.kategori.toLowerCase();

            return (
                baslik.includes(aramaMetni) ||
                aciklama.includes(aramaMetni) ||
                kategori.includes(aramaMetni)
            );
        });

        if (filtrelenmisUrunler.length === 0) {
            urunAlani.innerHTML = "<div class='col-12 text-center'><h3 class='text-muted'>Aradığınız kriterlere uygun ürün bulunamadı.</h3></div>";
            document.querySelector(".banner-reklam").style.display = "none";
            return;
        }

        urunleriListele(filtrelenmisUrunler);
        document.querySelector(".banner-reklam").style.display = "none";
    }, 300);
}

function urunleriListele(urunler) {
    const urunAlani = document.getElementById("ürünler");
    urunAlani.innerHTML = "";

    urunler.forEach(urun => {
        const urunHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${urun.imgyol}" class="card-img-top" alt="${urun.urunBaslik}">
                    <div class="card-body">
                        <h5 class="card-title">${urun.urunBaslik}</h5>
                        <p class="card-text">${urun.urunAciklama}</p>
                        <p id="fiyat" class="text-danger fw-bold">${urun.fiyat} ₺</p>
                        <button class="btn btn-warning" onclick="sepeteAt(${urun.id})">Sepete Ekle</button>
                    </div>
                </div>
            </div>`;
        urunAlani.innerHTML += urunHTML;
    });
}