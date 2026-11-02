/*
 * STEM Öğretmenleri Proje Seçim Rehberi — 4 Branşa Özel Kapsayıcı ve Disiplinlerarası Veri Yapısı
 * Branşlar:
 *   1. Fen Bilimleri Öğretmeni (Türkiye Yüzyılı Maarif Modeli Fen Bilimleri & FBAB)
 *   2. Özel Eğitim Öğretmeni (Kapsayıcı Eğitim, Engelsiz Erişim & Çok Duyulu Materyal Tasarımı)
 *   3. Sınıf Öğretmeni (İlkokul Hayat Bilgisi, Fen & Günlük Yaşam Becerileri)
 *   4. Okul Öncesi Öğretmeni (Erken Çocukluk Duyusal Keşif, Somut Maket & Oyunlaştırma)
 */

const PROJECTS = [
  {
    id: "proje-1",
    num: "Proje 01",
    shortCode: "01",
    title: "Etkileşimli Ay Evreleri ve Hicri Takvim Göstergesi",
    category: "Astronomi ve Uzay",
    difficulty: "Kolay Kurulum",
    costLevel: "Düşük Maliyet",
    juryImpact: "Dokunsal Ay küresi, kademeli ışığı ve takvim bağlantısıyla çok anlaşılır",
    problem: "Öğrencilerin Ay'ın evrelerini kitaptan soyut olarak ezberlemek yerine; butona basarak Hicri takvim günleriyle (1. gün Yeni Ay, 7. gün İlk Dördün, 14. gün Dolunay) hem ekrandan hem de ışıklı Ay küresinden adım adım gözlemleyebileceği masaüstü model.",
    scienceFocus: "5. Sınıf Gökyüzündeki Komşularımız ve Biz (FB.5.1.2 & FB.5.1.3): Ay'ın dönme ve dolanma hareketleriyle ana ve ara evrelerin oluşumunu bilimsel model üzerinde gözlemleme (FBAB1 Gözlem, FBAB9 Model Oluşturma).",
    specialEdFocus: "Kabartmalı (dokunsal) Ay evresi diskleri ve kademeli artan ışık şiddeti (%0'dan %100'e) sayesinde görme azlığı veya özel öğrenme gereksinimi olan öğrenciler için soyut astronomi kavramını somutlaştırır.",
    primaryFocus: "İlkokul Fen & Hayat Bilgisi: Dünya, Güneş ve Ay'ın hareketleri, takvim çeşitleri (Miladi ve Hicri takvim döngüsü) ve zaman ölçümü kavramlarını günlük yaşamla ilişkilendirir.",
    preschoolFocus: "Okul Öncesi: Gece-gündüz farkındalığı, gökyüzü gözlemi; karanlık kutu veya şeffaf küre içindeki ışığın değişimiyle 'Hilal' ve 'Dolunay' şekillerini hikaye ve oyunla keşfetme.",
    hardware: ["Arduino Uno", "0.96\" OLED Ekran", "1x Büyük Buton", "1x Beyaz LED (Ay Küresi İçinde)"],
    howItWorks: [
      "Masadaki büyük butona her basıldığında sistem sıradaki Ay evresine geçer.",
      "Mini bilgi ekranında o evrenin adı, Hicri aydaki günü (örneğin 14. Gün = Dolunay) ve aydınlanma oranı yazar.",
      "Aynı anda şeffaf Ay küresi içindeki beyaz ışık, evrenin aydınlanma oranına göre kademeli olarak parlar."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Ay'ın evrelerinin oluşum mekanizmasını ve Maarif Modeli FB.5.1 kazanımını anlatır.",
      "Özel Eğitim Öğretmeni: Dokunsal (kabartmalı) evre kartlarını ve özel gereksinimli öğrenciler için basitleştirilmiş buton kullanımını sunar.",
      "Sınıf Öğretmeni: Hicri ve Miladi takvim bağlantısını, zaman döngüsünü ve ilkokul düzeyindeki kazanımları açıklar.",
      "Okul Öncesi Öğretmeni: 3 boyutlu Ay küresi maketini ve erken çocuklukta 'Gökyüzü ve Gece' hikayeleştirmesini sunar."
    ],
    oledStates: [
      {
        btnLabel: "1. Gün: Yeni Ay",
        yellowBar: "HİCRİ TAKVİM: 1. GÜN",
        line1: "Evre: YENİ AY",
        line2: "Aydınlanma Oranı: %0",
        meterPercent: 4
      },
      {
        btnLabel: "4. Gün: Hilal",
        yellowBar: "HİCRİ TAKVİM: 4. GÜN",
        line1: "Evre: İLK HİLAL",
        line2: "Aydınlanma Oranı: %25",
        meterPercent: 25
      },
      {
        btnLabel: "7. Gün: İlk Dördün",
        yellowBar: "HİCRİ TAKVİM: 7. GÜN",
        line1: "Evre: İLK DÖRDÜN (Yarım)",
        line2: "Aydınlanma Oranı: %50",
        meterPercent: 50
      },
      {
        btnLabel: "14. Gün: Dolunay",
        yellowBar: "HİCRİ TAKVİM: 14. GÜN",
        line1: "Evre: DOLUNAY (Tam Parlak)",
        line2: "Aydınlanma Oranı: %100",
        meterPercent: 100
      }
    ]
  },
  {
    id: "proje-2",
    num: "Proje 02",
    shortCode: "02",
    title: "Etkileşimli Gezegen Sınıflandırma ve Güneş Sistemi Modeli",
    category: "Astronomi ve Uzay",
    difficulty: "Kolay - Orta",
    costLevel: "Düşük Maliyet",
    juryImpact: "Renkli gezegen maketi, ses tonları ve ışıklı geri bildirimiyle çok ilgi çekici",
    problem: "Güneş sistemindeki gezegenlerin iç (karasal) ve dış (gazsal) olarak ayrımını, uydu sayılarını ve Asteroit Kuşağı sınırını hem dokunsal maket hem de sesli ve renkli bilgi ekranıyla öğreten kapsayıcı materyal.",
    scienceFocus: "6. Sınıf Güneş Sistemi ve Tutulmalar (FB.6.1.1 & FB.6.1.2): Gezegenleri yapısal niteliklerine (Karasal/Gazsal), halka ve uydu durumlarına göre sınıflandırma ve modelleme (FBAB2 Sınıflandırma).",
    specialEdFocus: "Çok duyulu geri bildirim: Gezegenler değiştiğinde hem farklı frekansta ses (Buzzer) çıkarır hem de renk değiştirir (Karasal = Yeşil ışık, Gazsal = Mavi ışık). Görme ve işitme farklılığı olan öğrenciler için eşzamanlı uyaran sunar.",
    primaryFocus: "İlkokul Fen & Matematiksel Sıralama: Gezegenlerin Güneş'e yakınlık sırasını (1'den 8'e sıra sayıları), büyüklük-küçüklük karşılaştırmasını ve Dünya'mızın sistemdeki yerini somutlaştırır.",
    preschoolFocus: "Okul Öncesi: Farklı büyüklük ve dokudaki gezegen toplarına dokunarak 'Büyük-Küçük', 'Yakın-Uzak' ve 'Halkalı-Halkasız' kavramlarını renk eşleştirme oyunuyla öğrenme.",
    hardware: ["Arduino Uno", "0.96\" OLED Ekran", "RGB LED (Renkli Işık)", "Buzzer (Ses)", "2x Buton (İleri/Geri)"],
    howItWorks: [
      "İleri ve Geri butonlarıyla Güneş'ten başlayarak gezegenler arasında sırayla gezinilir.",
      "Seçilen gezegen İç (Karasal) gezegen ise Yeşil ışık, Dış (Gazsal) gezegen ise Mavi ışık yanar ve farklı bir nota sesi çalar.",
      "Mars ile Jüpiter arasındaki Asteroit Kuşağı'na gelindiğinde Sarı ışık ve özel uyarı sesiyle sınır bölgesi vurgulanır."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Karasal ve gazsal gezegenlerin bilimsel özelliklerini ve Asteroit Kuşağı'nı açıklar.",
      "Özel Eğitim Öğretmeni: Ses tonları, renk kodları ve farklı dokudaki gezegen kürelerinin özel eğitimde erişilebilirlik katkısını anlatır.",
      "Sınıf Öğretmeni: Gezegenlerin Güneş'e yakınlık sıralamasını ve ilkokul düzeyindeki karşılaştırma etkinliklerini sunar.",
      "Okul Öncesi Öğretmeni: Gezegen maketinin tasarımını ve erken çocukluk için uzay keşif oyununu tanıtır."
    ],
    oledStates: [
      {
        btnLabel: "3. Dünya (Karasal)",
        yellowBar: "GEZEGEN 03 // DÜNYA",
        line1: "Sınıf: Karasal (İç) Gezegen",
        line2: "Uydu: 1 | Halka: Yok (Yeşil LED)",
        meterPercent: 35
      },
      {
        btnLabel: "★ Asteroit Kuşağı",
        yellowBar: "SINIR // ASTEROİT KUŞAĞI",
        line1: "Mars ile Jüpiter Arası Sınır",
        line2: "İç ve Dış Gezegenleri Ayırır",
        meterPercent: 50
      },
      {
        btnLabel: "5. Jüpiter (Gazsal)",
        yellowBar: "GEZEGEN 05 // JÜPİTER",
        line1: "Sınıf: Gazsal (Dış) - En Büyük",
        line2: "Uydu: 95 | Halka: Var (Mavi LED)",
        meterPercent: 85
      },
      {
        btnLabel: "6. Satürn (Halkalı)",
        yellowBar: "GEZEGEN 06 // SATÜRN",
        line1: "Sınıf: Gazsal (Dış) Gezegen",
        line2: "Uydu: 146 | Belirgin Halkalı",
        meterPercent: 95
      }
    ]
  },
  {
    id: "proje-3",
    num: "Proje 03",
    shortCode: "03",
    title: "Öğrenciler İçin Engelsiz ve Güvenli Akıllı Yaya Geçidi",
    category: "Güvenlik, Afet ve Deney",
    difficulty: "Çok Kolay & Güvenilir",
    costLevel: "Düşük Maliyet",
    juryImpact: "Görme ve işitme engelli bireyleri de kapsayan gerçek bir okul önü projesi",
    problem: "Okul giriş-çıkışlarında tüm öğrencilerin (özel gereksinimli bireyler ve küçük çocuklar dahil) karşıdan karşıya güvenle geçmesini sağlayan; ultrasonik mesafe sensörüyle yaya geçidine yaklaşan öğrenciyi otomatik algılayarak ışıklandırmayı ve sesli/görsel geri sayımı başlatan engelsiz akıllı geçit.",
    scienceFocus: "6. Sınıf Kuvvetin Etkisinde Hareket (FB.6.2.3): Sabit süratli hareket, araçların güvenli duruş/fren mesafesi ve ultrasonik sensörlerin (HC-SR04) ses dalgalarıyla yaklaşan yayayı otomatik algılama ilkeleri.",
    specialEdFocus: "Tam Kapsayıcı (Engelsiz ve Temassız) Tasarım: Buton aramaya gerek kalmadan mesafe sensörü yaklaşan öğrenciyi otomatik algılar; görme engelli öğrenciler için geçiş süresince ritmik 'bip' sesi verir (son 3 saniyede hızlanır), işitme engelli öğrenciler için ise parlak OLED ekranda geri sayım ve renkli ışık sunar.",
    primaryFocus: "İlkokul Hayat Bilgisi & Trafik Güvenliği: Okul geliş-gidişlerinde güvenli geçiş kuralları, trafik işaret ve ışıklarının anlamı, 10'dan geriye doğru güvenli geçiş süresini takip etme.",
    preschoolFocus: "Okul Öncesi: Yaya geçidi maketi üzerinde oyuncak figürler sensörün önüne yaklaştırıldığında ışıkların otomatik değişmesini gözlemleme; 'Kırmızıda Dur, Yeşilde Geç' ve 'Önce Yaya' kurallarını oyunla deneyimleme.",
    hardware: ["Arduino Uno", "0.96\" OLED Ekran", "HC-SR04 Ultrasonik Mesafe Sensörü (İsteğe Bağlı Ek Buton)", "Kırmızı-Sarı-Yeşil LED", "Buzzer (Engelsiz Ses)"],
    howItWorks: [
      "Yaya geçidinin kenarındaki mesafe sensörü (HC-SR04), geçide yaklaşan bir öğrenciyi hiçbir butona basmaya gerek kalmadan otomatik algılar (isteğe bağlı olarak yaya butonu da eklenebilir).",
      "Sensör birini algıladığı anda otomatik ışıklandırma devreye girer: araçlara önce Sarı, ardından Kırmızı ışık yanar; ekranda 'ÖNCE YAYA - GEÇİNİZ' mesajıyla 10 saniyelik geri sayım başlar.",
      "Geçiş boyunca görme engelliler için sesli uyarı çalar; son 3 saniyede ses ritmi hızlanarak sürenin bittiğini bildirir."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Araçların sürati, fren mesafesi ve ultrasonik mesafe sensörünün ses dalgalarıyla otomatik algılama prensibini anlatır.",
      "Özel Eğitim Öğretmeni: Temassız otomatik algılamanın ve ritmik sesli/görsel uyarı sisteminin görme, işitme veya fiziksel engelli bireyler için önemini açıklar.",
      "Sınıf Öğretmeni: İlkokul Hayat Bilgisi trafik güvenliği kazanımlarını ve güvenli geçiş süresi bilincini sunar.",
      "Okul Öncesi Öğretmeni: Okul önü yaya geçidi maketini ve erken çocukluk trafik eğitimi dramasını tanıtır."
    ],
    oledStates: [
      {
        btnLabel: "Normal (Sensör İzliyor)",
        yellowBar: "ARAÇ TRAFİĞİ AÇIK",
        line1: "Mesafe Sensörü: Aktif",
        line2: "Yaya Yaklaşınca Otomatik Açılır",
        meterPercent: 10
      },
      {
        btnLabel: "Sensör Yayayı Algıladı (Sarı)",
        yellowBar: "SENSÖR YAYAYI ALGILADI!",
        line1: "Otomatik Işıklandırma Başladı",
        line2: "Araçlar Yavaşlıyor (Sarı Işık)...",
        meterPercent: 40
      },
      {
        btnLabel: "Güvenli Geçiş (10 sn Sayaç)",
        yellowBar: "ARAÇ: KIRMIZI // ÖNCE YAYA",
        line1: "GÜVENLİ GEÇİŞ: 08 Saniye",
        line2: "Engelsiz Ses: Normal Ritim",
        meterPercent: 80
      },
      {
        btnLabel: "Son 3 Saniye (Hızlı Ses)",
        yellowBar: "SÜRE BİTİYOR // DİKKAT",
        line1: "KALAN SÜRE: 02 Saniye!",
        line2: "Engelsiz Ses: Hızlı Ritim",
        meterPercent: 20
      }
    ]
  },
  {
    id: "proje-4",
    num: "Proje 04",
    shortCode: "04",
    title: "Akıllı Sınıf Hava Kalitesi ve Duyusal Konfor İstasyonu",
    category: "Çevre, Sağlık ve Enerji",
    difficulty: "Orta",
    costLevel: "Orta Maliyet",
    juryImpact: "Anaokulundan özel eğitim sınıfına kadar her derslikte doğrudan kullanılabilir",
    problem: "Kış aylarında kapalı kalan sınıflarda karbondioksit (CO2) artışına, aşırı sıcaklığa ve neme bağlı dikkat dağınıklığı ve huzursuzluğu önlemek için 'Sınıfı Havalandırın' uyarısı veren akıllı sınıf sağlığı istasyonu.",
    scienceFocus: "7. ve 8. Sınıf Sürdürülebilir Yaşam & Solunum (FB.8.7.3 & FB.7.7): Canlıların solunumu sonucu kapalı ortamda CO2 birikimi, hava kalitesi ve termal konfor verilerinin analizi (FBAB12 Kanıt Kullanma).",
    specialEdFocus: "Özel Eğitim Sınıflarında Duyusal Konfor: Otizm veya duyusal hassasiyeti olan ya da rahatsızlığını sözel olarak ifade etmekte güçlük çeken öğrenciler için sınıfın havasını ve sıcaklığını otomatik takip ederek öğretmeni uyarır.",
    primaryFocus: "İlkokul Hayat Bilgisi & Sağlıklı Yaşam: Sınıfımızın temizliği, temiz havanın beynimiz ve dikkatimiz için önemi, salgın hastalıklardan korunmak için düzenli havalandırma alışkanlığı.",
    preschoolFocus: "Okul Öncesi: 'Temiz Hava = Yeşil Işık (Mutlu Yüz), Kirli Hava = Kırmızı Işık (Pencereyi Aç)' görselleştirmesiyle küçük çocuklara sağlıklı sınıf ortamı farkındalığı kazandırma.",
    hardware: ["Arduino Uno", "MQ-135 Hava Kalitesi Sensörü", "DHT11 Sıcaklık/Nem Sensörü", "0.96\" OLED Ekran", "RGB LED & Buzzer"],
    howItWorks: [
      "Cihaz sınıfın sıcaklığını, nemini ve havadaki karbondioksit/gaz yoğunluğunu sürekli ölçer.",
      "Hava temizken Yeşil ışık yanar; ders ilerleyip hava ağırlaşmaya başladığında Sarı ışığa döner.",
      "Hava kalitesi düştüğünde Kırmızı ışık yanar, hafif bir sesli uyarı verir ve ekranda 'Sınıfı Havalandırın!' yazar."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Hücresel solunum, CO2 birikimi ve sıcaklık/nem dengesinin bilimsel temelini anlatır.",
      "Özel Eğitim Öğretmeni: Duyusal hassasiyeti olan veya kendini ifade etmekte zorlanan öğrenciler için sınıf konforunun önemini açıklar.",
      "Sınıf Öğretmeni: İlkokul sınıflarında dikkat süresi, sağlıklı yaşam ve hijyen alışkanlıklarını sunar.",
      "Okul Öncesi Öğretmeni: Renkli ışıklarla (Yeşil/Sarı/Kırmızı) küçük çocuklara temiz hava bilincinin nasıl kazandırıldığını anlatır."
    ],
    oledStates: [
      {
        btnLabel: "Ders Başı (Temiz Hava)",
        yellowBar: "DAKİKA 05 // HAVA TEMİZ",
        line1: "Sıcaklık: 22°C | Nem: %45",
        line2: "Hava: İdeal (Yeşil Işık)",
        meterPercent: 25
      },
      {
        btnLabel: "25. Dakika (Orta Seviye)",
        yellowBar: "DAKİKA 25 // HAVA ORTA",
        line1: "Sıcaklık: 24°C | Nem: %56",
        line2: "CO2 Artıyor (Sarı Işık)",
        meterPercent: 60
      },
      {
        btnLabel: "40. Dakika (Havalandırın!)",
        yellowBar: "! UYARI: SINIFI HAVALANDIRIN !",
        line1: "Sıcaklık: 26°C | Nem: %68",
        line2: "Hava Ağırlaştı (Kırmızı Uyarı)",
        meterPercent: 92
      }
    ]
  },
  {
    id: "proje-5",
    num: "Proje 05",
    shortCode: "05",
    title: "Çok Duyulu (Sesli & Işıklı) İletkenlik ve Yalıtkanlık Keşif Cihazı",
    category: "Güvenlik, Afet ve Deney",
    difficulty: "Çok Kolay",
    costLevel: "Çok Düşük Maliyet",
    juryImpact: "Sunumda tuzlu su, limon suyu ve kalem ucuyla canlı deney yapılır",
    problem: "Klasik ampul devresinde tuzlu su, limon suyu veya kurşun kalem ucu (grafit) gibi zayıf iletkenlerin ampulü yakamaması nedeniyle öğrencilerin bu maddeleri 'yalıtkan' sanması yanılgısını; ekran, renkli ışık ve sesle çözen güvenli deney aleti.",
    scienceFocus: "6. Sınıf Elektriğin İletimi ve Direnç (FB.6.6.1 & FB.6.6.3): Katı ve sıvı maddelerin elektriği iletme oranlarını (%0–%100) ölçme ve iletken boyunun dirence etkisini kontrollü deneyle kanıtlama (FBAB7 Deney Yapma).",
    specialEdFocus: "Görme Engelli ve Özel Öğrenme Destekli Deney: Krokodil kablolar maddeye dokundurulduğunda iletkenlik derecesine göre farklı ses tonu ve renkli ışık verdiği için görme engelli öğrencilerin fen deneyini bağımsız yapmasını sağlar.",
    primaryFocus: "3. ve 4. Sınıf Fen Bilimleri (Maddeyi Tanıyalım & Yaşamımızdaki Elektrik): Günlük hayattaki maddelerin özelliklerini karşılaştırma ve ıslak zeminde/suyla elektriğe dokunmama (elektrik güvenliği) bilinci.",
    preschoolFocus: "Okul Öncesi: Sınıftaki güvenli nesneleri (tahta blok, plastik oyuncak, metal kaşık) test uçlarına dokundurarak 'Hangisinde yeşil ışık yanacak?' tahmin ve keşif oyunu.",
    hardware: ["Arduino Uno", "2x Krokodil (Timsah Ağzı) Kablo", "1x 10kΩ Direnç", "0.96\" OLED Ekran", "RGB LED & Buzzer"],
    howItWorks: [
      "5 Volt ile çalışan tamamen güvenli iki adet timsah ağzı (krokodil) kablo test edilecek katı veya sıvı maddeye dokundurulur.",
      "Cihaz maddenin elektriği ne kadar ilettiğini %0 ile %100 arasında ölçerek mini ekranda gösterir.",
      "İyi iletkenlerde (metal) Yeşil ışık ve ses, orta iletkenlerde (tuzlu su, kalem ucu) Mavi ışık, yalıtkanlarda (plastik, tahta) Kırmızı ışık yanar."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Tuzlu su ve grafitin neden zayıf iletken olduğunu ve kavram yanılgısının nasıl çözüldüğünü anlatır.",
      "Özel Eğitim Öğretmeni: Sesli ve ışıklı geri bildirimin özel gereksinimli öğrencilere laboratuvar deneylerinde nasıl bağımsızlık kazandırdığını açıklar.",
      "Sınıf Öğretmeni: İlkokulda maddeyi tanıma ve günlük yaşamda elektrik güvenliği (ıslak elle prizlere dokunmama) eğitimini sunar.",
      "Okul Öncesi Öğretmeni: Farklı nesnelerle yapılan 'Tahmin Et – Dene – Gözlemle' oyunlaştırma sürecini gösterir."
    ],
    oledStates: [
      {
        btnLabel: "Plastik / Tahta (Yalıtkan)",
        yellowBar: "TEST: PLASTİK / TAHTA",
        line1: "Sonuç: YALITKAN MADDE",
        line2: "İletkenlik Oranı: %0 (Kırmızı)",
        meterPercent: 2
      },
      {
        btnLabel: "Kurşun Kalem Çizgisi (Orta)",
        yellowBar: "TEST: GRAFİT KALEM UCU",
        line1: "Sonuç: ZAYIF / ORTA İLETKEN",
        line2: "İletkenlik Oranı: %38 (Mavi)",
        meterPercent: 38
      },
      {
        btnLabel: "Tuzlu Su (Orta İletken)",
        yellowBar: "TEST: TUZLU SU ÇÖZELTİSİ",
        line1: "Sonuç: ORTA İLETKEN (SIVI)",
        line2: "İletkenlik Oranı: %55 (Mavi)",
        meterPercent: 55
      },
      {
        btnLabel: "Metal Anahtar (İyi İletken)",
        yellowBar: "TEST: METAL (BAKIR / DEMİR)",
        line1: "Sonuç: İYİ İLETKEN MADDE",
        line2: "İletkenlik Oranı: %96 (Yeşil)",
        meterPercent: 96
      }
    ]
  },
  {
    id: "proje-6",
    num: "Proje 06",
    shortCode: "06",
    title: "Günebakan: Doğadan İlham Alan Akıllı Güneş Takip Sistemi",
    category: "Çevre, Sağlık ve Enerji",
    difficulty: "Orta",
    costLevel: "Düşük Maliyet",
    juryImpact: "Telefon flaşını tutunca panel canlı olarak ışığa döner; etkisi çok yüksek",
    problem: "Sabit duran güneş panellerinin sabah ve akşam saatlerinde güneş ışığını eğik alması yüzünden yaşanan enerji kaybını, ayçiçeklerinin güneşi takip etme hareketini (biyomimikri) taklit ederek çözen etkileşimli sistem.",
    scienceFocus: "7. ve 8. Sınıf Enerji Dönüşümleri & Mevsimler (FB.8.1.1 & FB.8.6.3): Güneş ışınlarının geliş açısının birim yüzeye düşen enerjiye etkisi, biyomimikri ve yenilenebilir enerji verimliliği.",
    specialEdFocus: "Somut Neden-Sonuç ve Görsel-Motor Takip: Öğrenci elindeki feneri hareket ettirdiğinde maket çiçeğin/panelin anında ışığa doğru dönmesi, dikkat eksikliği veya özel öğrenme gereksinimi olan öğrencilerde odaklanmayı ve neden-sonuç bağını güçlendirir.",
    primaryFocus: "İlkokul Hayat Bilgisi & Fen: Güneş'in gün içindeki konumu (Doğu-Batı yönleri), doğadaki canlıları gözlemleyerek teknoloji üretme ve temiz enerji kaynaklarını tanıma.",
    preschoolFocus: "Okul Öncesi: Ayçiçeği (Günebakan) bitkisinin güneşi nasıl takip ettiğini hikayeleştirme; el feneriyle maket çiçeği sağa-sola döndürerek duyusal ve eğlenceli keşif yapma.",
    hardware: ["Arduino Uno", "2x LDR Işık Sensörü", "2x 10kΩ Direnç", "1x SG90 Küçük Servo Motor", "0.96\" OLED Ekran"],
    howItWorks: [
      "Maket güneş panelinin (veya ayçiçeği maketinin) sağ ve sol yanına birer ışık algılayıcı sensör yerleştirilir.",
      "Telefon flaşı veya güneş ışığı hangi taraftan daha güçlü geliyorsa küçük motor paneli o yöne doğru döndürerek ışığı dik alır.",
      "Mini ekranda panelin anlık yönü (Doğu / Öğle / Batı) ve kazanılan enerji verimi canlı olarak gösterilir."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Güneş ışınlarının geliş açısını (FB.8.1.1) ve yenilenebilir enerji verimliliğini anlatır.",
      "Özel Eğitim Öğretmeni: Işıkla etkileşimli hareket eden somut materyalin özel gereksinimli öğrencilerde görsel takip ve neden-sonuç algısına katkısını açıklar.",
      "Sınıf Öğretmeni: Ana yönler (Doğu-Batı), Güneş'in görünür hareketi ve çevre dostu enerji konularını sunar.",
      "Okul Öncesi Öğretmeni: Ayçiçeği (Günebakan) maketini ve el feneriyle yapılan interaktif oyunu gösterir."
    ],
    oledStates: [
      {
        btnLabel: "Sabah (Doğu Işığı)",
        yellowBar: "YÖN: DOĞU // SABAH GÜNEŞİ",
        line1: "Panel Açısı: 45° (Doğuya Döndü)",
        line2: "Enerji Verimi: %94 (+%32 Artış)",
        meterPercent: 40
      },
      {
        btnLabel: "Öğle (Tam Dik 90°)",
        yellowBar: "YÖN: MERKEZ // ÖĞLE VAKTİ",
        line1: "Panel Açısı: 90° (Tam Dik)",
        line2: "Enerji Verimi: %99 (Maksimum)",
        meterPercent: 98
      },
      {
        btnLabel: "İkindi (Batı Işığı)",
        yellowBar: "YÖN: BATI // İKİNDİ GÜNEŞİ",
        line1: "Panel Açısı: 135° (Batıya Döndü)",
        line2: "Enerji Verimi: %92 (+%34 Artış)",
        meterPercent: 75
      }
    ]
  },
  {
    id: "proje-7",
    num: "Proje 07",
    shortCode: "07",
    title: "Su Tasarruflu Akıllı Okul Bahçesi Sulama Sistemi",
    category: "Çevre, Sağlık ve Enerji",
    difficulty: "Kolay - Orta",
    costLevel: "Düşük Maliyet",
    juryImpact: "Saksıdaki gerçek bitki ve yağmur damlası testiyle çok doğal bir sunum",
    problem: "Saat ayarlı klasik bahçe fıskiyelerinin yağmur yağarken veya toprak zaten ıslakken bile çalışarak suyu israf etmesini önleyen; hem toprağın nemini hem de yağmuru kontrol eden akıllı sulama sistemi.",
    scienceFocus: "5., 7. ve 8. Sınıf Sürdürülebilir Yaşam & Kuraklık (FB.5.7.2, FB.7.7.2, FB.8.7.7): Tatlı su kaynaklarının korunması, su ayak izi ve iklim değişikliğine (kuraklığa) karşı iki sensörlü teknolojik çözüm.",
    specialEdFocus: "Uygulamalı Yaşam Becerisi & Terapötik Bahçecilik: Özel eğitim öğrencilerinin okulda bitki bakımını üstlenmesini kolaylaştırır; bitkinin suya ihtiyacı olup olmadığını renkli ışık ve sesle netleştirerek bağımsız beceri kazandırır.",
    primaryFocus: "İlkokul Hayat Bilgisi & Fen: Bitki yetiştirme sorumluluğu, su kaynaklarımızın tasarruflu kullanımı ve doğa koruma bilinci.",
    preschoolFocus: "Okul Öncesi: Gerçek bir çiçek saksısında kuru ve ıslak toprağa dokunma, yağmur sensörüne damlalıkla su damlatarak 'Yağmur yağınca suyu kapat' bilincini yaşayarak öğrenme.",
    hardware: ["Arduino Uno", "Toprak Nem Sensörü", "HW-038 Yağmur Sensörü", "0.96\" OLED Ekran", "RGB LED (veya Mini Su Pompası)"],
    howItWorks: [
      "Toprak nem sensörü çiçek saksısına batırılır, yağmur sensörü ise yaprakların yanına yerleştirilir.",
      "Sadece toprak kuruduğunda VE aynı anda yağmur yağmıyorsa sistem sulamayı başlatır.",
      "Sulama sırasında yağmur sensörüne bir damla su damlatılırsa sistem yağışı algılar ve suyu korumak için sulamayı anında durdurur."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Küresel iklim değişikliği, su döngüsü ve Maarif Modeli su okuryazarlığı hedeflerini anlatır.",
      "Özel Eğitim Öğretmeni: Toprakla ve bitkiyle temasın özel gereksinimli öğrencilerdeki rehabilitasyon etkisini ve görsel uyarı desteğini açıklar.",
      "Sınıf Öğretmeni: İlkokulda kaynakların tasarruflu kullanımı ve çevre bilinci kazanımlarını sunar.",
      "Okul Öncesi Öğretmeni: Saksı bitkisi üzerinde canlı yağmur damlası deneyini ve erken çocukluk doğa eğitimini gösterir."
    ],
    oledStates: [
      {
        btnLabel: "Toprak Kuru + Hava Açık",
        yellowBar: "SULAMA AKTİF (POMPA AÇIK)",
        line1: "Toprak: Kuru | Yağış: Yok",
        line2: "Bitki Sulanıyor...",
        meterPercent: 85
      },
      {
        btnLabel: "Toprak Kuru + Yağmur Başladı",
        yellowBar: "YAĞMUR VAR — SU KORUNDU!",
        line1: "Yağmur Sensörü Islak Algıladı",
        line2: "Sulama Otomatik Durduruldu",
        meterPercent: 30
      },
      {
        btnLabel: "Toprak Nemli (Beklemede)",
        yellowBar: "TOPRAK NEMİ İDEAL (%75)",
        line1: "Bitkinin Suya İhtiyacı Yok",
        line2: "Sistem Tasarruf Modunda",
        meterPercent: 15
      }
    ]
  },
  {
    id: "proje-8",
    num: "Proje 08",
    shortCode: "08",
    title: "Deprem Erken Uyarı, Sismograf ve Otomatik Gaz Kesme İstasyonu",
    category: "Güvenlik, Afet ve Deney",
    difficulty: "Kolay",
    costLevel: "Düşük Maliyet",
    juryImpact: "Masaya vurulduğunda canlı sismograf çizgisi çizer ve gazı otomatik keser",
    problem: "Deprem anında hem tüm öğrencileri (işitme ve görme engelliler dahil) saniyeler içinde uyaracak hem de deprem sonrası çıkan yangınları önlemek için doğalgaz ve elektrik hattını otomatik kesecek akıllı güvenlik istasyonu.",
    scienceFocus: "Ortaokul Fen Bilimleri & Afet Bilinci (FB.8.6.2): Sarsıntı (titreşim) dalgalarının algılanması, elektrik enerjisinin ses/ışık uyarısına dönüşümü ve ikincil afetlerin (gaz yangını) önlenmesi.",
    specialEdFocus: "Engelsiz Afet Uyarı Sistemi: Deprem anında sadece siren sesine güvenmek işitme engelli öğrenciler için yetersizdir. Bu sistem aynı anda parlak Kırmızı flaşör ışık, ekran mesajı ve yüksek ses vererek tüm özel gereksinimli öğrencileri uyarır.",
    primaryFocus: "İlkokul Hayat Bilgisi (Doğal Afetler ve Güvenli Yaşam): Deprem öncesinde ve sırasında alınacak önlemler, acil durum bilinci ve evde doğalgaz/elektrik güvenliği.",
    preschoolFocus: "Okul Öncesi: Masaya hafifçe vurulup alarm çaldığında çocuklarla korkutmadan oyunlaştırılmış 'ÇÖK – KAPAN – TUTUN' tatbikatının yapılması.",
    hardware: ["Arduino Uno", "SW-420 Titreşim/Sarsıntı Sensörü", "0.96\" OLED Ekran", "RGB LED (Gaz Vanası & Flaşör)", "Buzzer"],
    howItWorks: [
      "Normal durumda ekranda düz bir sismograf çizgisi akar ve doğalgaz hattını temsil eden Yeşil ışık yanar.",
      "Masaya hafifçe vurularak sarsıntı oluşturulduğunda ekrandaki çizgi dalgalanır, Kırmızı flaşör ışık ve sesli alarm devreye girer.",
      "Aynı saniyede Yeşil ışık söner ve ekranda 'Doğalgaz & Elektrik Otomatik Kesildi' uyarısı çıkar."
    ],
    teamPlan: [
      "Fen Bilimleri Öğretmeni: Sismik dalgaları ve deprem anında doğalgaz/elektrik kesme otomasyonunun önemini anlatır.",
      "Özel Eğitim Öğretmeni: Afet anında işitme, görme ve gelişimsel farklılığı olan öğrenciler için çok duyulu (ışıklı + sesli) erken uyarının hayati önemini açıklar.",
      "Sınıf Öğretmeni: İlkokul Hayat Bilgisi afet bilinci kazanımlarını ve okul güvenlik planını sunar.",
      "Okul Öncesi Öğretmeni: Erken çocuklukta 'Çök-Kapan-Tutun' davranış eğitimini ve sınıf içi uygulamayı gösterir."
    ],
    oledStates: [
      {
        btnLabel: "Normal Durum (Sakin)",
        yellowBar: "SİSMOGRAF // DURUM NORMAL",
        line1: "Sismik Çizgi: Düz (Sarsıntı Yok)",
        line2: "Doğalgaz ve Elektrik: AÇIK (Yeşil)",
        meterPercent: 10
      },
      {
        btnLabel: "Deprem Anı (Alarm & Gaz Kesildi!)",
        yellowBar: "! DEPREM UYARISI — ÇÖK KAPAN TUTUN !",
        line1: "Şiddetli Sarsıntı Algılandı!",
        line2: "Doğalgaz & Elektrik OTOMATİK KESİLDİ",
        meterPercent: 98
      }
    ]
  }
];

// Favori seçimleri LocalStorage'da ve Canlı Bulut Kanalında (ntfy.sh) tutma
const LIVE_SYNC_TOPIC = "stem_grup_oylama_2026_ee45c8fe";
const LIVE_POLL_URL = `https://ntfy.sh/${LIVE_SYNC_TOPIC}/json?poll=1`;
const LIVE_POST_URL = `https://ntfy.sh/${LIVE_SYNC_TOPIC}`;

// Her öğretmenin tarayıcısına özel benzersiz ID
let voterId = localStorage.getItem("stem_voter_id");
if (!voterId) {
  voterId = "t_" + Math.random().toString(36).substring(2, 10);
  localStorage.setItem("stem_voter_id", voterId);
}

let voterBranch = localStorage.getItem("stem_voter_branch") || "Fen Bilimleri";
let voterName = localStorage.getItem("stem_voter_name") || "";
let selectedVotes = JSON.parse(localStorage.getItem("stem_selected_votes") || "[]");

// Tüm öğretmenlerin son oy durumlarını tutan tablo: { voterId: { branch, name, votes: [], ts } }
let groupVotesState = {};
let activeFilter = "all";
let searchQuery = "";

function saveVoterIdentity() {
  const branchEl = document.getElementById("teacherBranchSelect");
  const nameEl = document.getElementById("teacherNameInput");
  if (branchEl) voterBranch = branchEl.value;
  if (nameEl) voterName = nameEl.value.trim();

  localStorage.setItem("stem_voter_branch", voterBranch);
  localStorage.setItem("stem_voter_name", voterName);

  // Eğer öğretmenin seçili oyu varsa ismini/branşını canlı tabloya da hemen yansıt
  if (selectedVotes.length > 0) {
    publishMyVotesToCloud();
  } else {
    renderLiveVotesBoard();
  }
}

function saveVotes() {
  localStorage.setItem("stem_selected_votes", JSON.stringify(selectedVotes));
  updateVoteUI();
  publishMyVotesToCloud();
}

async function publishMyVotesToCloud() {
  // Önce kendi yerel tablomuzu anında güncelle (gecikmesiz tepki)
  groupVotesState[voterId] = {
    voterId,
    branch: voterBranch,
    name: voterName,
    votes: [...selectedVotes],
    ts: Date.now()
  };
  renderLiveVotesBoard();
  renderProjects();
  renderComparisonTable();

  // Buluta gönder (Seçim kaldırıldıysa boş dizi [] gider ve herkesten silinir)
  try {
    await fetch(LIVE_POST_URL, {
      method: "POST",
      body: JSON.stringify(groupVotesState[voterId])
    });
  } catch (err) {
    console.warn("Canlı senkronizasyon uyarısı:", err);
  }
}

async function fetchLiveGroupVotes() {
  try {
    const res = await fetch(LIVE_POLL_URL);
    if (!res.ok) return;
    const text = await res.text();
    const lines = text.trim().split("\n").filter(Boolean);

    const latestByVoter = {};
    for (const line of lines) {
      try {
        const envelope = JSON.parse(line);
        if (envelope.event === "message" && envelope.message) {
          const payload = JSON.parse(envelope.message);
          if (payload && payload.voterId && Array.isArray(payload.votes)) {
            latestByVoter[payload.voterId] = payload;
          }
        }
      } catch (_) {
        // Geçersiz mesajları atla
      }
    }

    // Kendi güncel durumumuzu koruyarak birleştir
    groupVotesState = {
      ...latestByVoter,
      [voterId]: {
        voterId,
        branch: voterBranch,
        name: voterName,
        votes: [...selectedVotes],
        ts: Date.now()
      }
    };

    renderLiveVotesBoard();
    renderProjects();
    renderComparisonTable();
  } catch (err) {
    console.warn("Canlı oy tablosu okunamadı:", err);
  }
}

function getProjectVotersList(projectId) {
  const list = [];
  for (const key of Object.keys(groupVotesState)) {
    const entry = groupVotesState[key];
    if (entry && Array.isArray(entry.votes) && entry.votes.includes(projectId)) {
      const label = entry.name
        ? `${entry.name} (${entry.branch})`
        : entry.branch;
      list.push(label);
    }
  }
  return list;
}

function renderLiveVotesBoard() {
  const container = document.getElementById("liveVotesContainer");
  if (!container) return;

  container.innerHTML = PROJECTS.map(p => {
    const voters = getProjectVotersList(p.id);
    const hasVotes = voters.length > 0;
    const shortTitle = p.title.split("(")[0].trim();

    return `
      <div class="live-vote-item ${hasVotes ? "has-votes" : ""}">
        <div class="live-vote-head">
          <span class="live-proj-code">${p.num}</span>
          <span class="live-vote-count-badge">${voters.length} Oy</span>
        </div>
        <div class="live-proj-short">${shortTitle}</div>
        <div class="live-voters-tags">
          ${
            hasVotes
              ? voters.map(v => `<span class="voter-tag-chip">✓ ${v}</span>`).join("")
              : `<span style="font-size:0.72rem; color:var(--text-light);">Henüz seçilmedi</span>`
          }
        </div>
      </div>
    `;
  }).join("");
}

function updateVoteUI() {
  const countEl = document.getElementById("voteCount");
  if (countEl) countEl.textContent = selectedVotes.length;

  const favBtn = document.getElementById("favFilterBtn");
  if (favBtn) favBtn.textContent = `★ Seçtiklerim (${selectedVotes.length})`;

  const banner = document.getElementById("votingBanner");
  const pillsList = document.getElementById("selectedPillsList");
  if (banner && pillsList) {
    if (selectedVotes.length === 0) {
      banner.hidden = true;
    } else {
      banner.hidden = false;
      const chosen = PROJECTS.filter(p => selectedVotes.includes(p.id));
      pillsList.innerHTML = chosen.map(p => `
        <span class="selected-pill">
          <span>${p.num}: ${p.title.split(":")[0]}</span>
          <button type="button" onclick="toggleVote('${p.id}')" title="Seçimimi Kaldır">&times;</button>
        </span>
      `).join("");
    }
  }
}

function clearAllVotes() {
  selectedVotes = [];
  saveVotes();
}

function scrollToLiveBoard() {
  document.getElementById("canli-oylama")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjects() {
  document.getElementById("projeler")?.scrollIntoView({ behavior: "smooth" });
}

function toggleVote(projectId, event) {
  if (event) event.stopPropagation();
  const idx = selectedVotes.indexOf(projectId);
  if (idx > -1) {
    selectedVotes.splice(idx, 1);
  } else {
    selectedVotes.push(projectId);
  }
  saveVotes();
  renderProjects();
  renderComparisonTable();
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = PROJECTS.filter(p => {
    const matchesCategory =
      activeFilter === "all" ||
      (activeFilter === "favorites" && selectedVotes.includes(p.id)) ||
      p.category === activeFilter;

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.problem.toLowerCase().includes(q) ||
      p.scienceFocus.toLowerCase().includes(q) ||
      p.specialEdFocus.toLowerCase().includes(q) ||
      p.primaryFocus.toLowerCase().includes(q) ||
      p.preschoolFocus.toLowerCase().includes(q) ||
      p.hardware.some(h => h.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
        <h3 style="margin-bottom: 8px;">Bu filtrede henüz proje bulunmuyor.</h3>
        <p style="color: var(--text-light); margin-bottom: 16px;">Tüm projeleri görmek için aşağıdaki butona tıklayabilirsiniz.</p>
        <button type="button" class="btn btn-outline" onclick="resetFilters()">Tüm Projeleri Göster (8)</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const isVoted = selectedVotes.includes(p.id);
    const voters = getProjectVotersList(p.id);
    return `
      <article class="project-card ${isVoted ? "is-selected" : ""}">
        <div>
          <!-- Üst Bilgi Satırı -->
          <div class="card-header-row">
            <span class="proj-number">${p.num}</span>
            <div class="proj-meta-tags">
              <span class="meta-tag">${p.category}</span>
              <span class="meta-tag">${p.difficulty}</span>
              ${voters.length > 0 ? `<span class="meta-tag" style="background:var(--primary); color:#fff;">Toplam: ${voters.length} Oy</span>` : ""}
            </div>
          </div>

          <!-- Problem Durumu — Başlık İkilisi Özel Kutusu -->
          <div class="problem-title-pair-box">
            <div class="pair-badge-row">
              <span class="pair-label-tag">📌 Proje Başlığı &amp; Problem Durumu İkilisi</span>
            </div>
            <h3 class="pair-heading-line"><span>Başlık:</span> ${p.title}</h3>
            <div class="pair-problem-block">
              <span class="pair-problem-title">⚠️ Problem Durumu (Gerçek Yaşam Senaryosu):</span>
              ${p.problem}
            </div>
          </div>

          <!-- Gruptaki 4 Öğretmen Branşı İçin Net Kazanım Kutuları -->
          <div class="curriculum-stack">
            <div class="curr-item curr-science">
              <span class="curr-label">Fen Bilimleri Öğretmeni (Maarif Modeli & FBAB)</span>
              ${p.scienceFocus}
            </div>
            <div class="curr-item curr-special">
              <span class="curr-label">Özel Eğitim Öğretmeni (Kapsayıcılık & Çok Duyulu Tasarım)</span>
              ${p.specialEdFocus}
            </div>
            <div class="curr-item curr-primary">
              <span class="curr-label">Sınıf Öğretmeni (İlkokul Hayat Bilgisi & Fen)</span>
              ${p.primaryFocus}
            </div>
            <div class="curr-item curr-preschool">
              <span class="curr-label">Okul Öncesi Öğretmeni (Somut Maket & Oyunlaştırma)</span>
              ${p.preschoolFocus}
            </div>
          </div>

          <!-- Kullanılan Malzemeler -->
          <div class="card-materials-row">
            <span class="mat-label">Malzemeler:</span>
            ${p.hardware.map(hw => `<span class="mat-chip">${hw}</span>`).join("")}
          </div>
        </div>

        <!-- Alt Butonlar -->
        <div class="card-actions-row">
          <button type="button" class="btn btn-outline" onclick="openProjectModal('${p.id}')">
            Uygulama Detayı &amp; Ekran Önizlemesi
          </button>
          <button type="button" class="vote-toggle-btn ${isVoted ? "voted" : ""}" onclick="toggleVote('${p.id}', event)">
            ${isVoted ? "✓ Seçildi (Kaldır)" : "+ Seçime Ekle"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderComparisonTable() {
  const tbody = document.getElementById("comparisonTableBody");
  if (!tbody) return;

  tbody.innerHTML = PROJECTS.map(p => {
    const isVoted = selectedVotes.includes(p.id);
    return `
      <tr class="${isVoted ? "row-selected" : ""}" onclick="openProjectModal('${p.id}')">
        <td><strong>${p.shortCode}</strong></td>
        <td><strong>${p.title}</strong></td>
        <td>${p.scienceFocus.split(":")[0]}</td>
        <td>${p.specialEdFocus.split(":")[0]}</td>
        <td>${p.primaryFocus.split(":")[0]} &amp; Erken Çocukluk Maketi</td>
        <td>${p.difficulty}</td>
        <td>${p.juryImpact}</td>
        <td onclick="event.stopPropagation();">
          <button type="button" class="vote-toggle-btn ${isVoted ? "voted" : ""}" style="padding: 6px 12px; font-size: 0.78rem;" onclick="toggleVote('${p.id}', event)">
            ${isVoted ? "✓ Seçildi" : "+ Seç"}
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function resetFilters() {
  activeFilter = "all";
  searchQuery = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
  document.querySelector('.filter-pill[data-filter="all"]')?.classList.add("active");
  renderProjects();
}

function openProjectModal(projectId) {
  const p = PROJECTS.find(item => item.id === projectId);
  if (!p) return;

  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  const firstState = p.oledStates[0];
  const isVoted = selectedVotes.includes(p.id);

  content.innerHTML = `
    <div class="modal-top">
      <div>
        <span class="proj-number" style="display:inline-block; margin-bottom:8px;">${p.num} • ${p.category}</span>
        <h2 id="modalTitle" style="font-family: var(--font-heading); font-size: 1.7rem; line-height: 1.25;">${p.title}</h2>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <button type="button" class="vote-toggle-btn ${isVoted ? "voted" : ""}" id="modalVoteBtn" onclick="toggleModalVote('${p.id}')">
          ${isVoted ? "✓ Seçildi" : "+ Seçime Ekle"}
        </button>
        <button type="button" class="modal-close-btn" onclick="closeProjectModal()" aria-label="Kapat">&times;</button>
      </div>
    </div>

    <!-- Canlı OLED Ekran Önizlemesi -->
    <div class="oled-demo-panel">
      <div class="oled-screen-box">
        <div class="oled-yellow-bar" id="oledSimYellow">${firstState.yellowBar}</div>
        <div class="oled-blue-area">
          <div id="oledSimLine1" style="font-weight:600; margin-bottom:4px;">${firstState.line1}</div>
          <div id="oledSimLine2">${firstState.line2}</div>
          <div class="oled-progress">
            <div class="oled-progress-bar" id="oledSimMeter" style="width: ${firstState.meterPercent}%;"></div>
          </div>
        </div>
      </div>

      <div class="oled-buttons-wrap">
        <h4>Ekranda Ne Görünecek? (Canlı Önizleme)</h4>
        <p>Projeyi çalıştırdığımızda küçük bilgi ekranında öğrencilerin göreceği mesajları aşağıdaki durumlara tıklayarak deneyebilirsiniz:</p>
        <div class="oled-state-list">
          ${p.oledStates.map((st, idx) => `
            <button type="button" class="oled-state-btn ${idx === 0 ? "active" : ""}" onclick="switchOledState('${p.id}', ${idx}, this)">
              ${st.btnLabel}
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <!-- Nasıl Çalışır ve Kullanılan Malzemeler -->
    <div class="detail-box" style="margin-bottom: 16px;">
      <h4>Uygulama Detayı: Proje Nasıl Çalışır? (Adım Adım)</h4>
      <ul>
        ${p.howItWorks.map(step => `<li>${step}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-box">
      <h4>Bu Projede Kullanılan Temel Malzemeler</h4>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
        ${p.hardware.map(hw => `<span class="mat-chip" style="font-size:0.84rem; padding:6px 12px;">${hw}</span>`).join("")}
      </div>
    </div>
  `;

  modal.classList.add("open");
}

function switchOledState(projectId, idx, btnEl) {
  const p = PROJECTS.find(item => item.id === projectId);
  if (!p || !p.oledStates[idx]) return;
  const st = p.oledStates[idx];

  document.getElementById("oledSimYellow").textContent = st.yellowBar;
  document.getElementById("oledSimLine1").textContent = st.line1;
  document.getElementById("oledSimLine2").textContent = st.line2;
  document.getElementById("oledSimMeter").style.width = `${st.meterPercent}%`;

  btnEl.parentElement?.querySelectorAll(".oled-state-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
}

function toggleModalVote(projectId) {
  toggleVote(projectId);
  const btn = document.getElementById("modalVoteBtn");
  const isVoted = selectedVotes.includes(projectId);
  if (btn) {
    btn.className = `vote-toggle-btn ${isVoted ? "voted" : ""}`;
    btn.textContent = isVoted ? "✓ Seçildi" : "+ Seçime Ekle";
  }
}

function closeProjectModal() {
  document.getElementById("projectModal")?.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  // Öğretmenin daha önce seçtiği branş ve adı kutulara yükle
  const branchEl = document.getElementById("teacherBranchSelect");
  const nameEl = document.getElementById("teacherNameInput");
  if (branchEl) branchEl.value = voterBranch;
  if (nameEl) nameEl.value = voterName;

  updateVoteUI();
  renderLiveVotesBoard();
  renderProjects();
  renderComparisonTable();

  // Sayfa açıldığında ve her 12 saniyede bir diğer öğretmenlerin oylarını canlı çek
  fetchLiveGroupVotes();
  setInterval(fetchLiveGroupVotes, 12000);

  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeProjectModal();
  });
});
