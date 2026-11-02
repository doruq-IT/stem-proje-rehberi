/*
 * STEM Öğretmenleri Proje Seçim Rehberi — 4 Branşa Özel Disiplinlerarası Veri Yapısı
 * Branşlar:
 *   1. Ortaokul Fen Bilimleri Öğretmeni (Türkiye Yüzyılı Maarif Modeli Fen Bilimleri FB.5–FB.8 & FBAB)
 *   2. Lise Kimya Öğretmeni (Maarif Modeli Kimya KİM.9–KİM.12, Çözeltiler, Gazlar, Yarı İletkenler & Sürdürülebilirlik)
 *   3. Lise İngilizce Öğretmeni (CLIL - Content and Language Integrated Learning, English for STEM & Küresel Sunum)
 *   4. Lise Almanca Öğretmeni (MINT-Fächer, Umwelt & Technik Terminolojisi, 3 Dilli TR/EN/DE Arayüz & Poster)
 */

const PROJECTS = [
  {
    id: "proje-1",
    num: "Proje 01",
    shortCode: "01",
    title: "Etkileşimli Ay Evreleri ve Çok Dilli Hicri Takvim Göstergesi",
    category: "Astronomi ve Uzay",
    difficulty: "Kolay Kurulum",
    costLevel: "Düşük Maliyet",
    juryImpact: "Işıklı Ay küresi, yüzey kimyası (albedo) ve 3 dilli (TR/EN/DE) ekranıyla çok anlaşılır",
    problem: "Öğrencilerin Ay'ın evrelerini kitaptan soyut olarak ezberlemek yerine; butona basarak Hicri takvim günleriyle (1. gün Yeni Ay, 7. gün İlk Dördün, 14. gün Dolunay) hem çok dilli (TR/EN/DE) bilgi ekranından hem de kademeli aydınlanan Ay küresinden adım adım gözlemleyebileceği etkileşimli astronomi modeli.",
    scienceFocus: "5. Sınıf Gökyüzündeki Komşularımız ve Biz (FB.5.1.2 & FB.5.1.3): Ay'ın dönme ve dolanma hareketleriyle ana ve ara evrelerin oluşumunu bilimsel model üzerinde gözlemleme (FBAB1 Gözlem, FBAB9 Model Oluşturma).",
    chemistryFocus: "Lise Kimya (Madde ve Işık Etkileşimi / Anorganik Yapılar): Ay yüzeyini kaplayan regolit tabakasının (silikat mineralleri, demir ve titanyum oksitler) güneş ışığını yansıtma oranı (albedo) ve LED yarı iletken kristallerinde foton yayılımı.",
    englishFocus: "Lise İngilizce (English for Astronomy & CLIL): Ay evrelerinin uluslararası bilim literatüründeki karşılıklarının (New Moon, Waxing Crescent, First Quarter, Full Moon) OLED ekranda ve sunum materyallerinde çift dilli modellenmesi.",
    germanFocus: "Lise Almanca (MINT & Astronomie): Almanca astronomi ve zaman kavramlarının (Mondphasen: Neumond, Sichelmond, Halbmond, Vollmond) maket üzerindeki 3 dilli kavram kartlarına ve ekran arayüzüne entegrasyonu.",
    hardware: ["Arduino Uno", "0.96\" OLED Ekran", "1x Büyük Buton", "1x Beyaz LED (Ay Küresi İçinde)"],
    howItWorks: [
      "Masadaki büyük butona her basıldığında sistem sıradaki Ay evresine geçer.",
      "Mini bilgi ekranında o evrenin Türkçe, İngilizce ve Almanca adı, Hicri aydaki günü (örneğin 14. Gün = Dolunay) ve aydınlanma oranı yazar.",
      "Aynı anda şeffaf Ay küresi içindeki beyaz ışık, evrenin aydınlanma oranına göre PWM tekniğiyle kademeli olarak parlar."
    ],
    oledStates: [
      {
        btnLabel: "1. Gün: Yeni Ay",
        yellowBar: "HİCRİ: 1. GÜN // %0 IŞIK",
        line1: "TR: Yeni Ay | EN: New Moon",
        line2: "DE: Neumond (Aydınlanma: %0)",
        meterPercent: 4
      },
      {
        btnLabel: "4. Gün: Hilal",
        yellowBar: "HİCRİ: 4. GÜN // %25 IŞIK",
        line1: "TR: Hilal | EN: Crescent",
        line2: "DE: Sichelmond (Aydınlanma: %25)",
        meterPercent: 25
      },
      {
        btnLabel: "7. Gün: İlk Dördün",
        yellowBar: "HİCRİ: 7. GÜN // %50 IŞIK",
        line1: "TR: İlk Dördün | EN: First Quarter",
        line2: "DE: Erstes Viertel (%50)",
        meterPercent: 50
      },
      {
        btnLabel: "14. Gün: Dolunay",
        yellowBar: "HİCRİ: 14. GÜN // %100 IŞIK",
        line1: "TR: Dolunay | EN: Full Moon",
        line2: "DE: Vollmond (Tam Parlak %100)",
        meterPercent: 100
      }
    ]
  },
  {
    id: "proje-2",
    num: "Proje 02",
    shortCode: "02",
    title: "Gezegen Sınıflandırma, Atmosfer Kimyası ve Güneş Sistemi Modeli",
    category: "Astronomi ve Uzay",
    difficulty: "Kolay - Orta",
    costLevel: "Düşük Maliyet",
    juryImpact: "Gezegenlerin atmosfer kimyasını, sınıflandırmasını ve çok dilli küresel terimleri birleştirir",
    problem: "Güneş sistemindeki gezegenlerin iç (karasal/kayaç) ve dış (gaz devi) olarak ayrımını, gezegen atmosferlerinin kimyasal bileşimini ve Asteroit Kuşağı sınırını hem ışıklı/sesli maket hem de çok dilli bilgi ekranıyla öğreten disiplinlerarası materyal.",
    scienceFocus: "6. Sınıf Güneş Sistemi ve Tutulmalar (FB.6.1.1 & FB.6.1.2): Gezegenleri yapısal niteliklerine (Karasal/Gazsal), halka ve uydu durumlarına göre sınıflandırma ve modelleme (FBAB2 Sınıflandırma).",
    chemistryFocus: "Lise Kimya (Elementler, Bileşikler ve Gazlar): Karasal gezegenlerin silikat ve ağır metal (Fe, Ni) çekirdek yapısı ile Gaz Devlerinin (Jüpiter, Satürn) Hidrojen (H₂), Helyum (He), Metan (CH₄) ve Amonyak (NH₃) gazlarından oluşan atmosfer kimyasının karşılaştırılması.",
    englishFocus: "Lise İngilizce (CLIL & Space Science): 'Terrestrial Planets vs. Gas Giants' ve atmosferik bileşenlerin İngilizce bilimsel terminolojiyle OLED ekranda ve karşılaştırmalı proje posterinde sunulması.",
    germanFocus: "Lise Almanca (MINT - Sonnensystem): Gezegen sınıflarının (Gesteinsplaneten / Gasriesen) ve temel element/gaz isimlerinin (Wasserstoff, Helium, Eisen) Almanca teknik bilgi kartlarıyla maket üzerinde eşleştirilmesi.",
    hardware: ["Arduino Uno", "0.96\" OLED Ekran", "RGB LED (Renkli Işık)", "Buzzer (Ses)", "2x Buton (İleri/Geri)"],
    howItWorks: [
      "İleri ve Geri butonlarıyla Güneş'ten başlayarak gezegenler arasında sırayla gezinilir.",
      "Seçilen gezegen İç (Karasal) gezegen ise Yeşil ışık yanar ve ekranda kayaç/metal yapısı yazar; Dış (Gazsal) gezegen ise Mavi ışık yanar ve hidrojen/helyum gaz atmosferi gösterilir.",
      "Mars ile Jüpiter arasındaki Asteroit Kuşağı'na gelindiğinde Sarı ışık ve özel uyarı sesiyle sınır bölgesi vurgulanır."
    ],
    oledStates: [
      {
        btnLabel: "3. Dünya (Karasal)",
        yellowBar: "03 // DÜNYA (EARTH / ERDE)",
        line1: "Sınıf: Karasal (Terrestrial)",
        line2: "Kimya: N2, O2 Atmosfer | Fe-Si",
        meterPercent: 35
      },
      {
        btnLabel: "★ Asteroit Kuşağı",
        yellowBar: "SINIR // ASTEROID BELT",
        line1: "DE: Asteroidengürtel (Sınır)",
        line2: "Karasal ve Gaz Gezegenleri Ayırır",
        meterPercent: 50
      },
      {
        btnLabel: "5. Jüpiter (Gaz Devi)",
        yellowBar: "05 // JÜPİTER (GAS GIANT)",
        line1: "DE: Gasriese | Uydu: 95",
        line2: "Kimya: %90 H2 + %10 He Gazı",
        meterPercent: 85
      },
      {
        btnLabel: "6. Satürn (Halkalı)",
        yellowBar: "06 // SATÜRN (RINGED PLANET)",
        line1: "Sınıf: Gaz Devi | Uydu: 146",
        line2: "Halka: Buz (H2O) ve Silikat Tozu",
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
    juryImpact: "Mesafe sensörüyle otomatik çalışan, karbon emisyonunu azaltan ve 3 dilli uyarı veren akıllı geçit",
    problem: "Okul giriş-çıkışlarında öğrencilerin karşıdan karşıya güvenle geçmesini sağlayan; ultrasonik mesafe sensörüyle yaya geçidine yaklaşan öğrenciyi otomatik algılayarak ışıklandırmayı ve çok dilli (TR/EN/DE) geri sayımı başlatan, yaya yokken ise araçları gereksiz durdurmayarak egzoz emisyonunu azaltan akıllı geçit.",
    scienceFocus: "6. Sınıf Kuvvetin Etkisinde Hareket (FB.6.2.3): Sabit süratli hareket, araçların güvenli duruş/fren mesafesi ve ultrasonik sensörlerin (HC-SR04) ses dalgalarıyla yaklaşan yayayı otomatik algılama ilkeleri.",
    chemistryFocus: "Lise Kimya (Yanma Tepkimeleri, Hava Kirliliği ve Sürdürülebilirlik): Sabit süreli klasik ışıkta boş yolda bekleyen araçların rölanti yanma tepkimeleriyle saldığı CO₂, CO ve NOₓ egzoz gazlarının; yalnızca sensör yaya algıladığında devreye giren akıllı geçit sayesinde azaltılması.",
    englishFocus: "Lise İngilizce (Smart City & Public Safety): Uluslararası akıllı şehir standartlarına uygun olarak OLED ekranda ve geçit tabelasında İngilizce güvenlik uyarılarının ('PEDESTRIAN DETECTED – STOP / SAFE CROSSING') gösterilmesi.",
    germanFocus: "Lise Almanca (Verkehrssicherheit & Umwelt): Almanca trafik güvenliği ve çevre dostu ulaşım kavramlarının ('Fußgängerüberweg / Bitte Warten – Grün: Gehen') üç dilli kamu spotu ve maket yönlendirmesi olarak uygulanması.",
    hardware: ["Arduino Uno", "0.96\" OLED Ekran", "HC-SR04 Ultrasonik Mesafe Sensörü (İsteğe Bağlı Ek Buton)", "Kırmızı-Sarı-Yeşil LED", "Buzzer (Sesli Uyarı)"],
    howItWorks: [
      "Yaya geçidinin kenarındaki mesafe sensörü (HC-SR04), geçide yaklaşan bir öğrenciyi hiçbir butona basmaya gerek kalmadan otomatik algılar (isteğe bağlı olarak yaya butonu da eklenebilir).",
      "Sensör birini algıladığı anda otomatik ışıklandırma devreye girer: araçlara önce Sarı, ardından Kırmızı ışık yanar; ekranda 3 dilde güvenli geçiş mesajıyla 10 saniyelik geri sayım başlar.",
      "Yaya geçidinde kimse yokken araç trafiği kesilmez; böylece dur-kalk kaynaklı yakıt tüketimi ve karbon salımı önlenir."
    ],
    oledStates: [
      {
        btnLabel: "Normal (Sensör İzliyor)",
        yellowBar: "SENSÖR AKTİF // TRAFİK AÇIK",
        line1: "Yaya Yok -> Egzoz Tasarrufu",
        line2: "Yaklaşınca Otomatik Açılır",
        meterPercent: 10
      },
      {
        btnLabel: "Sensör Yayayı Algıladı (Sarı)",
        yellowBar: "YAYA ALGILANDI! (PEDESTRIAN)",
        line1: "Otomatik Işıklandırma Başladı",
        line2: "Araçlar Yavaşlıyor (Sarı Işık)...",
        meterPercent: 40
      },
      {
        btnLabel: "Güvenli Geçiş (10 sn Sayaç)",
        yellowBar: "GEÇİNİZ // CROSS // GEHEN",
        line1: "GÜVENLİ GEÇİŞ: 08 Saniye",
        line2: "Araç: KIRMIZI | Yaya: YEŞİL",
        meterPercent: 80
      },
      {
        btnLabel: "Son 3 Saniye (Hızlı Uyarı)",
        yellowBar: "SÜRE BİTİYOR // HURRY // EILEN",
        line1: "KALAN SÜRE: 02 Saniye!",
        line2: "Sesli Uyarı: Hızlı Ritim",
        meterPercent: 20
      }
    ]
  },
  {
    id: "proje-4",
    num: "Proje 04",
    shortCode: "04",
    title: "Küresel Isınma ve Balıkesir İklim Verileriyle Uyumlu Akıllı Sınıf Hava Kalitesi, Gaz Analizi ve Enerji Koruma İstasyonu",
    category: "Çevre, Sağlık ve Enerji",
    difficulty: "Orta",
    costLevel: "Orta Maliyet",
    juryImpact: "Sınıf içi CO₂/Termal Konfor ölçümünü Balıkesir resmi iklim ve karbon ayak izi verileriyle birleştirir",
    problem: "Balıkesir'deki ortaokul ve lise dersliklerinde kışın kapalı sınıflarda öğrenci solunumuyla hızla artan CO₂ derişimi (%50'ye varan odaklanma kaybı ve uyuklama yaratırken), pencerelerin ders boyu üstten yarım aralık (vasistas) bırakılması sınıf ısısını düşürerek okulun yakıt tüketimini ve Balıkesir'in kışlık karbon emisyonunu artırmaktadır. Bahar/yaz aylarında ise küresel ısınma kaynaklı Balıkesir sıcak dalgaları sınıf içi nem ve CO₂ ile birleşerek termal stres oluşturmaktadır. Okullarda hem temiz havayı hem de ısı enerjisi tasarrufunu aynı anda yönetecek veri tabanlı bir erken uyarı sistemi bulunmamaktadır.",
    scienceFocus: "7. ve 8. Sınıf Sürdürülebilir Yaşam, Solunum & Küresel İklim Değişikliği (FB.8.7.3 & FB.7.7): Solunum sonucu kapalı ortamda CO₂ birikimi, küresel ısınma (MGM Balıkesir sıcaklık anomalileri) ve 'Sürekli Yarım Açık Pencere vs. 3 Dk Şok Havalandırma' kontrollü deneyiyle ısı kaybının analizi (FBAB12 Kanıt Kullanma).",
    chemistryFocus: "Lise Kimya (Gazlar, Difüzyon, Sensör Kimyası ve Karbon Ayak İzi - KİM.10/11): Kapalı hacimde CO₂ ve uçucu gazların (VOC) difüzyonu, ppm derişim hesabı, MQ-135 sensöründeki SnO₂ yarı iletken yüzey kimyası ve Balıkesir İl Çevre Durum Raporu'ndaki kışlık ısınma kaynaklı fosil yakıt emisyonlarının azaltılması.",
    englishFocus: "Lise İngilizce (CLIL, SECAP & Climate Action): Balıkesir'in de dahil olduğu Avrupa Birliği SECAP (Sustainable Energy and Climate Action Plan) ve SDG 13 (İklim Eylemi) kapsamında OLED ekranda 'Air Quality Index (AQI), Shock Ventilation & Thermal Stress' uyarılarının İngilizce modellenmesi.",
    germanFocus: "Lise Almanca (CO2-Ampel, Stoßlüften & Klimaschutz): Alman okullarında enerji tasarrufu ve iklim koruma için uygulanan resmi 'CO2-Ampel' (Karbondioksit Trafik Işığı) ve 'Stoßlüften statt Kipplüften' (Pencereyi yarım bırakıp ısı kaybetmek yerine 3 dk şok havalandırma) kültürünün 3 dilli entegrasyonu.",
    hardware: ["Arduino Uno", "MQ-135 Hava Kalitesi/Gaz Sensörü", "DHT11 Sıcaklık/Nem Sensörü", "0.96\" OLED Ekran", "RGB LED & Buzzer"],
    howItWorks: [
      "Cihaz sınıfın sıcaklığını, bağıl nemini (DHT11) ve havadaki karbondioksit/gaz yoğunluğunu (MQ-135) sürekli ölçerek 3 dilde (TR/EN/DE) analiz eder.",
      "Kış Modu (Hava & Enerji Koruma): CO₂ 1200 ppm'i aştığında Kırmızı ışık yanar; pencerenin ders boyu yarım açık bırakılıp kalorifer ısısının israf edilmesini önlemek için '3 Dakika Şok Havalandırma (Stoßlüften)' sayacını başlatır. Hava temizlenip sınıf soğumaya başladığında (<18°C) 'Pencereyi Kapatın - Karbon Ayak İzini Koruyun' uyarısı verir.",
      "Bahar/Yaz Modu (Balıkesir Sıcak Dalgası): Sıcaklık >27°C ve nem >%60 olduğunda küresel ısınma kaynaklı 'Termal Stres (Heat Stress)' uyarısı vererek MGM Balıkesir dış ortam verileriyle karşılaştırma yapılmasını sağlar."
    ],
    oledStates: [
      {
        btnLabel: "1. İdeal Sınıf & Enerji Koruma",
        yellowBar: "AQI: İYİ // GOOD // GUT (YEŞİL)",
        line1: "Isı: 21°C | Nem: %45 | CO2: 480ppm",
        line2: "Pencere Kapalı -> Isı Korunuyor",
        meterPercent: 22
      },
      {
        btnLabel: "2. CO₂ Arttı -> 3 Dk Şok Havalandır!",
        yellowBar: "! HAVALANDIR // VENTILATE // LÜFTEN !",
        line1: "CO2: 1450 ppm (Dikkat Kaybı Riski!)",
        line2: "3 Dk Şok Havalandırma Başlat (180s)",
        meterPercent: 90
      },
      {
        btnLabel: "3. Hava Temizlendi -> Pencereyi Kapat",
        yellowBar: "ISI KAYBI UYARISI // SAVE ENERGY",
        line1: "CO2 Düştü (520ppm) | Isı: 18°C↓",
        line2: "Pencereyi Kapat! (Karbon Tasarrufu)",
        meterPercent: 35
      },
      {
        btnLabel: "4. Balıkesir Sıcak Dalgası (Termal Stres)",
        yellowBar: "! TERMAL STRES // HEAT WAVE !",
        line1: "Isı: 28.5°C | Bağıl Nem: %68",
        line2: "MGM Balıkesir Sıcak Anomalisi!",
        meterPercent: 85
      }
    ]
  },
  {
    id: "proje-5",
    num: "Proje 05",
    shortCode: "05",
    title: "Elektrolit Çözeltiler ve Katılarda Dijital İletkenlik Keşif Cihazı",
    category: "Güvenlik, Afet ve Deney",
    difficulty: "Çok Kolay",
    costLevel: "Çok Düşük Maliyet",
    juryImpact: "Fen ve Kimya müfredatının tam kalbinde; sunumda tuzlu su, limon suyu ve grafitle canlı deney yapılır",
    problem: "Klasik ampul devresinde tuzlu su, asetik/sitrik asit (limon suyu), çeşme suyu veya kurşun kalem ucu (grafit) gibi zayıf/orta iletkenlerin ampulü yakamaması nedeniyle öğrencilerin bu maddeleri 'yalıtkan' sanması yanılgısını; iletkenlik yüzdesini (%0–%100) dijital ölçerek çözen laboratuvar cihazı.",
    scienceFocus: "6. Sınıf Elektriğin İletimi ve Direnç (FB.6.6.1 & FB.6.6.3): Katı ve sıvı maddelerin elektriği iletme durumlarını karşılaştırma ve iletkenlik-yalıtkanlık kavram yanılgılarını kontrollü deneyle giderme (FBAB7 Deney Yapma).",
    chemistryFocus: "Lise Kimya (Kimyasal Türler Arası Etkileşimler, Elektrolit Çözeltiler & Allotroplar): Saf suyun yalıtkanlığına karşın NaCl(suda) ve asit çözeltilerinde serbest iyon hareketiyle gerçekleşen iyonik iletkenlik; karbonun allotropu olan grafitteki pi (π) elektronları ve metallerdeki elektron denizi modeli.",
    englishFocus: "Lise İngilizce (Laboratory English & CLIL): Deney tüplerindeki ve katı numunelerdeki sınıflandırmanın ('Insulator, Weak/Strong Electrolyte, Metallic Conductor') İngilizce laboratuvar föyü ve OLED ekran arayüzüyle sunulması.",
    germanFocus: "Lise Almanca (Chemie & Physik im Labor): Almanca malzeme ve kimya terimlerinin ('Elektrische Leitfähigkeit: Nichtleiter, Elektrolytlösung / Salzwasser, Leiter') deney istasyonu etiketlerinde ve ekranda 3 dilli gösterimi.",
    hardware: ["Arduino Uno", "2x Krokodil (Timsah Ağzı) Prob", "1x 10kΩ Referans Direnç", "0.96\" OLED Ekran", "RGB LED & Buzzer"],
    howItWorks: [
      "5 Volt ile çalışan tamamen güvenli iki adet timsah ağzı (krokodil) prob, test edilecek sıvı çözeltiye veya katı maddeye dokundurulur.",
      "Cihaz maddenin elektriksel iletkenlik oranını %0 ile %100 arasında hesaplayarak OLED ekranda 3 dilde sınıflandırır.",
      "Güçlü iletkenlerde (metaller) Yeşil ışık, elektrolit çözeltilerde ve grafitte (tuzlu su, limon suyu, kalem ucu) Mavi ışık, yalıtkanlarda (saf su, şekerli su, plastik) Kırmızı ışık yanar."
    ],
    oledStates: [
      {
        btnLabel: "Saf Su / Plastik (Yalıtkan)",
        yellowBar: "YALITKAN // INSULATOR",
        line1: "DE: Nichtleiter (Serbest İyon Yok)",
        line2: "İletkenlik: %0 (Kırmızı LED)",
        meterPercent: 2
      },
      {
        btnLabel: "Kurşun Kalem Ucu (Grafit)",
        yellowBar: "YARI/ORTA İLETKEN // GRAPHITE",
        line1: "Karbon Allotropu (Pi Elektronları)",
        line2: "İletkenlik: %38 (Mavi LED)",
        meterPercent: 38
      },
      {
        btnLabel: "Tuzlu Su Çözeltisi (Elektrolit)",
        yellowBar: "ELEKTROLİT // ELECTROLYTE",
        line1: "Na+(suda) ve Cl-(suda) İyonları",
        line2: "İletkenlik: %58 (Mavi LED)",
        meterPercent: 58
      },
      {
        btnLabel: "Bakır / Demir (Metalik İletken)",
        yellowBar: "İYİ İLETKEN // CONDUCTOR",
        line1: "DE: Elektrischer Leiter (Metal)",
        line2: "İletkenlik: %96 (Yeşil LED)",
        meterPercent: 96
      }
    ]
  },
  {
    id: "proje-6",
    num: "Proje 06",
    shortCode: "06",
    title: "Günebakan: Doğadan İlham Alan Akıllı Güneş Takip ve Temiz Enerji Sistemi",
    category: "Çevre, Sağlık ve Enerji",
    difficulty: "Orta",
    costLevel: "Düşük Maliyet",
    juryImpact: "Telefon flaşını tutunca panel canlı olarak ışığa döner; enerji ve yeşil kimya vurgusu çok güçlü",
    problem: "Sabit duran güneş panellerinin sabah ve akşam saatlerinde güneş ışığını eğik alması yüzünden yaşanan enerji kaybını, ayçiçeklerinin güneşi takip etme hareketini (biyomimikri) taklit ederek çözen ve fosil yakıtlara temiz alternatif sunan sistem.",
    scienceFocus: "7. ve 8. Sınıf Enerji Dönüşümleri & Mevsimler (FB.8.1.1 & FB.8.6.3): Güneş ışınlarının geliş açısının birim yüzeye düşen ışık enerjisine etkisi, biyomimikri ve yenilenebilir enerji verimliliği.",
    chemistryFocus: "Lise Kimya (Sürdürülebilirlik, Fotovoltaik Yarı İletkenler & Yeşil Enerji - KİM.9/12): Güneş panellerindeki silisyum (Si) yarı iletken kristallerinde fotonlarla elektron koparılması (fotoelektrik etki) ve fosil yakıt yanma tepkimelerinin (CO₂ salımı) temiz enerjiyle azaltılması.",
    englishFocus: "Lise İngilizce (Biomimicry & Renewable Energy): 'Biomimicry, Solar Tracking, Photovoltaic Efficiency' kavramlarının uluslararası Sürdürülebilir Kalkınma Amaçları (SDG 7: Affordable and Clean Energy) bağlamında sunulması.",
    germanFocus: "Lise Almanca (Energiewende & Solarenergie): Almanya'nın dünyaca ünlü yeşil enerji dönüşümü ('Energiewende, Erneuerbare Energien, Sonnenblume-Prinzip') terminolojisinin proje sunumuna ve ekranına entegrasyonu.",
    hardware: ["Arduino Uno", "2x LDR Fotodirenç Işık Sensörü", "2x 10kΩ Direnç", "1x SG90 Küçük Servo Motor", "0.96\" OLED Ekran"],
    howItWorks: [
      "Maket güneş panelinin sağ ve sol yanına birer LDR ışık sensörü (kadmium sülfür yarı iletken fotodirenç) yerleştirilir.",
      "Telefon flaşı veya güneş ışığı hangi taraftan daha güçlü geliyorsa küçük motor paneli o yöne doğru döndürerek ışığı dik (90°) alır.",
      "Mini ekranda panelin anlık açısı, yönü ve artan enerji verimi 3 dilde canlı olarak gösterilir."
    ],
    oledStates: [
      {
        btnLabel: "Sabah (Doğu Işığı)",
        yellowBar: "DOĞU // EAST // OSTEN",
        line1: "Panel Açısı: 45° (Doğuya Döndü)",
        line2: "Verim (Efficiency): %94 (+%32)",
        meterPercent: 45
      },
      {
        btnLabel: "Öğle (Tam Dik 90°)",
        yellowBar: "MERKEZ // SOLAR NOON // MITTAG",
        line1: "Panel Açısı: 90° (Tam Dik Açı)",
        line2: "Fotovoltaik Verim: %99 (Maks)",
        meterPercent: 98
      },
      {
        btnLabel: "İkindi (Batı Işığı)",
        yellowBar: "BATI // WEST // WESTEN",
        line1: "Panel Açısı: 135° (Batıya Döndü)",
        line2: "Verim (Wirkungsgrad): %92",
        meterPercent: 75
      }
    ]
  },
  {
    id: "proje-7",
    num: "Proje 07",
    shortCode: "07",
    title: "Su Ayak İzini Azaltan Çift Sensörlü Akıllı Sulama Sistemi",
    category: "Çevre, Sağlık ve Enerji",
    difficulty: "Kolay - Orta",
    costLevel: "Düşük Maliyet",
    juryImpact: "Topraktaki iyon iletkenliğini ve yağış suyunu canlı test eden doğa dostu otomasyon",
    problem: "Zaman ayarlı klasik bahçe fıskiyelerinin yağmur yağarken veya toprak zaten nemliyken bile çalışarak tatlı su kaynaklarını israf etmesini önleyen; hem toprağın nemini hem de yağışı analiz eden akıllı sulama sistemi.",
    scienceFocus: "5., 7. ve 8. Sınıf Sürdürülebilir Yaşam & Kuraklık (FB.5.7.2, FB.7.7.2, FB.8.7.7): Tatlı su kaynaklarının korunması, su döngüsü ve iklim değişikliğine (kuraklığa) karşı iki sensörlü teknolojik çözüm.",
    chemistryFocus: "Lise Kimya (Su Kimyası, Toprak Mineralleri ve Su Ayak İzi): Toprak nem ve yağmur sensörlerinin çalışma temeli olan 'suyun içindeki çözünmüş mineral iyonları (Ca²⁺, Mg²⁺, K⁺) sayesinde elektrik akımını iletmesi' prensibi ve tatlı su kaynaklarının korunması.",
    englishFocus: "Lise İngilizce (Water Footprint & Sustainability): 'Smart Irrigation, Soil Moisture, Water Conservation' terimlerinin küresel iklim krizi (SDG 6 & SDG 13) perspektifiyle ekranda ve sunumda işlenmesi.",
    germanFocus: "Lise Almanca (Wassersparen & Umweltschutz): Almanca çevre ve sürdürülebilir tarım kavramlarının ('Bodenfeuchte, Regen-Sensor, Wasserfußabdruck reduzieren') 3 dilli proje materyaline dönüştürülmesi.",
    hardware: ["Arduino Uno", "Toprak Nem Sensörü", "HW-038 Yağmur Sensörü", "0.96\" OLED Ekran", "RGB LED (veya Mini Su Pompası)"],
    howItWorks: [
      "Toprak nem sensörü bitki saksısına batırılır, yağmur sensörü ise yaprakların yanına yerleştirilir.",
      "Sadece toprak kuruduğunda (iyonik iletkenlik düştüğünde) VE aynı anda yağmur yağmıyorsa sistem sulamayı başlatır.",
      "Sulama sırasında yağmur sensörüne bir damla su damlatılırsa sistem yağışı algılar ve suyu korumak için sulamayı anında durdurur."
    ],
    oledStates: [
      {
        btnLabel: "Toprak Kuru + Hava Açık",
        yellowBar: "SULAMA AKTİF // IRRIGATING",
        line1: "Toprak: Kuru (Dry / Trocken)",
        line2: "Yağış: Yok -> Pompa AÇIK",
        meterPercent: 85
      },
      {
        btnLabel: "Toprak Kuru + Yağmur Başladı",
        yellowBar: "YAĞMUR VAR // RAIN // REGEN!",
        line1: "İyonik Su Algılandı (HW-038)",
        line2: "Sulama Otomatik DURDURULDU",
        meterPercent: 30
      },
      {
        btnLabel: "Toprak Nemli (Tasarruf Modu)",
        yellowBar: "NEM İDEAL (%75) // WATER SAVED",
        line1: "DE: Boden feucht (Su Korundu)",
        line2: "Sistem Bekleme Modunda",
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
    juryImpact: "Masaya vurulduğunda canlı sismograf çizer, doğalgaz patlama riskini otomatik keser",
    problem: "Deprem anında hem bina sakinlerini saniyeler içinde sesli ve görsel olarak uyaracak hem de deprem sonrasında boru kırılmaları nedeniyle çıkan yıkıcı doğalgaz (metan) yangınlarını/patlamalarını önlemek için gaz ve elektrik hattını otomatik kesecek güvenlik istasyonu.",
    scienceFocus: "Ortaokul Fen Bilimleri & Afet Bilinci (FB.8.6.2): Sismik sarsıntı (titreşim) dalgalarının algılanması, sensör verisinin ses/ışık uyarısına dönüşümü ve deprem güvenliği.",
    chemistryFocus: "Lise Kimya (Yanma Tepkimeleri, Hidrokarbonlar ve Kimyasal Güvenlik): Doğalgazın ana bileşeni olan metan gazının (CH₄ + 2O₂ → CO₂ + 2H₂O + Isı) sızıntı durumunda oluşturduğu patlama riski ve ikincil kimyasal yangınların otomatik valf kontrolüyle önlenmesi.",
    englishFocus: "Lise İngilizce (Disaster Management & Emergency Protocol): Uluslararası acil durum uyarı mesajlarının ('EARTHQUAKE ALERT: DROP, COVER, HOLD ON! / GAS VALVE SHUT OFF') ekranda ve acil durum eylem planında sunulması.",
    germanFocus: "Lise Almanca (Katastrophenschutz & Sicherheit): Almanca endüstriyel güvenlik ve afet yönetimi terimlerinin ('Erdbebenwarnung / Gasabschaltung aktiv / Sicherheitssystem') 3 dilli uyarı panelinde gösterilmesi.",
    hardware: ["Arduino Uno", "SW-420 Titreşim/Sarsıntı Sensörü", "0.96\" OLED Ekran", "RGB LED (Gaz Vanası & Flaşör)", "Buzzer"],
    howItWorks: [
      "Normal durumda ekranda düz bir sismograf çizgisi akar ve doğalgaz (CH₄) hattının açık olduğunu gösteren Yeşil ışık yanar.",
      "Masaya hafifçe vurularak sarsıntı oluşturulduğunda ekrandaki sismik çizgi dalgalanır, Kırmızı flaşör ışık ve sesli alarm devreye girer.",
      "Aynı saniyede Yeşil ışık söner ve ekranda 'Doğalgaz (CH₄) & Elektrik Otomatik Kesildi' uyarısı çıkar."
    ],
    oledStates: [
      {
        btnLabel: "Normal Durum (Sakin)",
        yellowBar: "SİSMOGRAF // NORMAL // OK",
        line1: "Sismik Dalga: Yok (Düz Çizgi)",
        line2: "Doğalgaz (CH4) Hattı: AÇIK",
        meterPercent: 10
      },
      {
        btnLabel: "Deprem Anı (Alarm & Gaz Kesildi!)",
        yellowBar: "! DEPREM // EARTHQUAKE // ERDBEBEN !",
        line1: "ÇÖK - KAPAN - TUTUN! (DROP/COVER)",
        line2: "CH4 Gaz & Elektrik: KESİLDİ!",
        meterPercent: 98
      }
    ]
  }
];

// Favori seçimleri LocalStorage'da ve Canlı Bulut Kanalında (ntfy.sh) tutma
const LIVE_SYNC_TOPIC = "stem_grup_oylama_2026_fen_kimya_dil";
const LIVE_POLL_URL = `https://ntfy.sh/${LIVE_SYNC_TOPIC}/json?poll=1`;
const LIVE_POST_URL = `https://ntfy.sh/${LIVE_SYNC_TOPIC}`;

const VALID_BRANCHES = [
  "Ortaokul Fen Bilimleri",
  "Lise Kimya",
  "Lise İngilizce",
  "Lise Almanca"
];

// Her öğretmenin tarayıcısına özel benzersiz ID
let voterId = localStorage.getItem("stem_voter_id");
if (!voterId) {
  voterId = "t_" + Math.random().toString(36).substring(2, 10);
  localStorage.setItem("stem_voter_id", voterId);
}

let voterBranch = localStorage.getItem("stem_voter_branch") || "Ortaokul Fen Bilimleri";
if (!VALID_BRANCHES.includes(voterBranch)) {
  voterBranch = "Ortaokul Fen Bilimleri";
  localStorage.setItem("stem_voter_branch", voterBranch);
}

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
      p.chemistryFocus.toLowerCase().includes(q) ||
      p.englishFocus.toLowerCase().includes(q) ||
      p.germanFocus.toLowerCase().includes(q) ||
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
              <span class="curr-label">Ortaokul Fen Bilimleri Öğretmeni (Maarif Modeli &amp; FBAB)</span>
              ${p.scienceFocus}
            </div>
            <div class="curr-item curr-special">
              <span class="curr-label">Lise Kimya Öğretmeni (Madde, Çözeltiler, Gazlar &amp; Yeşil Kimya)</span>
              ${p.chemistryFocus}
            </div>
            <div class="curr-item curr-primary">
              <span class="curr-label">Lise İngilizce Öğretmeni (CLIL, English for STEM &amp; Küresel Sunum)</span>
              ${p.englishFocus}
            </div>
            <div class="curr-item curr-preschool">
              <span class="curr-label">Lise Almanca Öğretmeni (MINT, Umwelt &amp; 3 Dilli Teknik Arayüz)</span>
              ${p.germanFocus}
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
        <td>${p.chemistryFocus.split(":")[0]}</td>
        <td>3 Dilli (TR/EN/DE) Ekran &amp; CLIL / MINT Terminolojisi</td>
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
        <h4>Ekranda Ne Görünecek? (3 Dilli Canlı Önizleme)</h4>
        <p>Projeyi çalıştırdığımızda küçük bilgi ekranında Türkçe, İngilizce ve Almanca olarak görünecek mesajları aşağıdaki durumlara tıklayarak deneyebilirsiniz:</p>
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
