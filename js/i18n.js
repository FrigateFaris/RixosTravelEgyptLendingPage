// Переводы сайта: русская фраза → [английский, турецкий].
// Основной язык — английский. Русский текст остаётся в разметке как исходник.
const I18N = {
  // шапка, навигация
  "О Хайсаме": ["About Haytham", "Haytham hakkında"],
  "Экскурсии": ["Tours", "Turlar"],
  "Направления": ["Destinations", "Rotalar"],
  "Трансфер": ["Transfers", "Transfer"],
  "Отзывы": ["Reviews", "Yorumlar"],
  "Написать": ["Message us", "Yazın"],
  "Язык": ["Language", "Dil"],
  "Назад": ["Back", "Geri"],
  "Вперёд": ["Next", "İleri"],
  "Телефон": ["Phone", "Telefon"],
  "Видео": ["Video", "Video"],
  "Закрыть": ["Close", "Kapat"],

  // города и места
  "Шарм-эль-Шейх": ["Sharm El Sheikh", "Şarm El-Şeyh"],
  "Дахаб": ["Dahab", "Dahab"],
  "Каир": ["Cairo", "Kahire"],
  "Луксор": ["Luxor", "Luksor"],
  "Хургада": ["Hurghada", "Hurgada"],
  "Таба": ["Taba", "Taba"],
  "Александрия": ["Alexandria", "İskenderiye"],
  "Петра": ["Petra", "Petra"],
  "Рас-Мохаммед": ["Ras Mohammed", "Ras Muhammed"],
  "Синай": ["Sinai", "Sina"],
  "Белый остров": ["White Island", "Beyaz Ada"],
  "Синайская пустыня": ["Sinai desert", "Sina Çölü"],
  "Гора Синай": ["Mount Sinai", "Sina Dağı"],
  "Иордания": ["Jordan", "Ürdün"],
  "Плато Гиза": ["Giza Plateau", "Gize Platosu"],
  "Большой Египетский музей": ["Grand Egyptian Museum", "Büyük Mısır Müzesi"],

  // hero и быстрая заявка
  "Египет": ["Egypt", "Mısır'ı"],
  "без посредников": ["without middlemen", "aracısız keşfedin"],
  "С гидом Хайсамом, который живёт здесь 20+ лет": ["With Haytham, a local guide who has lived here for 20+ years", "20 yılı aşkın süredir burada yaşayan rehber Haytham ile"],
  "Написать в WhatsApp": ["Message on WhatsApp", "WhatsApp'tan yazın"],
  "Написать в Telegram": ["Message on Telegram", "Telegram'dan yazın"],
  "Экскурсия": ["Tour", "Tur"],
  "Выберите программу": ["Choose a tour", "Tur seçin"],
  "Дата": ["Date", "Tarih"],
  "Гости": ["Guests", "Kişi sayısı"],
  "1 человек": ["1 person", "1 kişi"],
  "2 человека": ["2 people", "2 kişi"],
  "3 человека": ["3 people", "3 kişi"],
  "4 человека": ["4 people", "4 kişi"],
  "5 человек": ["5 people", "5 kişi"],
  "6+ человек": ["6+ people", "6+ kişi"],

  // цифры
  "лет в туризме и в Египте": ["years in tourism in Egypt", "yıllık turizm deneyimi"],
  "экскурсии и программы": ["tours & programs", "tur ve program"],
  "городов Египта + Иордания": ["cities in Egypt + Jordan", "Mısır şehri + Ürdün"],
  "маршрутов застрахованы": ["of routes insured", "rotalar sigortalı"],

  // сравнение
  "Почему напрямую": ["Why book direct", "Neden doğrudan"],
  "Экскурсия от отеля": ["A tour from your hotel", "Otelden tur"],
  "или": ["or", "mu,"],
  "от местного гида": ["from a local guide?", "yerel rehberden mi?"],
  "Хайсам работает самостоятельно и напрямую сотрудничает с отелями и перевозчиками по всему Египту. Вот в чём разница.": ["Haytham works independently and partners directly with hotels and transport companies across Egypt. Here's the difference.", "Haytham bağımsız çalışıyor ve Mısır genelinde oteller ve taşımacılarla doğrudan iş birliği yapıyor. Fark şu:"],
  "Как обычно": ["The usual way", "Alışılmış yol"],
  "Стандартный тур": ["Standard tour", "Standart tur"],
  "Цена": ["Price", "Fiyat"],
  "Наценка отеля и туроператора": ["Hotel and tour operator markup", "Otel ve tur operatörü komisyonu"],
  "Маршрут": ["Route", "Rota"],
  "Один для всех, по расписанию автобуса": ["One for everyone, on the bus schedule", "Herkese aynı, otobüs saatine göre"],
  "Места": ["Places", "Yerler"],
  "Самые раскрученные и переполненные": ["The most hyped and crowded", "En popüler ve en kalabalık"],
  "Кто отвечает": ["Who's responsible", "Kim sorumlu"],
  "Менеджер, которого вы не видели": ["A manager you've never met", "Hiç görmediğiniz bir yönetici"],
  "Что ещё": ["What else", "Başka ne var"],
  "Только экскурсия": ["Just the tour", "Sadece tur"],
  "Напрямую": ["Direct", "Doğrudan"],
  "С Хайсамом": ["With Haytham", "Haytham ile"],
  "Напрямую, без посредников": ["Direct, no middlemen", "Doğrudan, aracısız"],
  "Под вас, есть индивидуальные туры": ["Tailored to you, private tours available", "Size göre, özel turlar da var"],
  "Знает, что стоит увидеть, а что переоценено": ["Knows what's worth seeing and what's overrated", "Neyin görülmeye değer, neyin abartıldığını bilir"],
  "Конкретный человек в одном чате": ["One real person in one chat", "Tek sohbette tek gerçek kişi"],
  "Отели, авиабилеты и трансфер": ["Hotels, flights and transfers", "Otel, uçak bileti ve transfer"],
  "Написать Хайсаму": ["Message Haytham", "Haytham'a yazın"],

  // о Хайсаме
  "Хайсам": ["Haytham", "Haytham"],
  "Смотреть со звуком": ["Watch with sound", "Sesli izle"],
  "лет в Египте": ["years in Egypt", "yıldır Mısır'da"],
  "Ваш гид в Египте": ["Your guide in Egypt", "Mısır'daki rehberiniz"],
  "Живу в Египте и больше": ["I live in Egypt and for over", "Mısır'da yaşıyorum ve"],
  "20 лет": ["20 years", "20 yılı aşkın süredir"],
  "показываю его туристам": ["I've been showing it to travellers", "turistlere burayı gezdiriyorum"],
  "Знаю страну изнутри: какие маршруты удобнее, когда ехать, чтобы не стоять в толпе, и какие «обязательные» места не стоят ваших денег.": ["I know the country from the inside: which routes are more convenient, when to go to avoid the crowds, and which \"must-see\" places aren't worth your money.", "Ülkeyi içeriden tanıyorum: hangi rotalar daha rahat, kalabalığa yakalanmamak için ne zaman gidilmeli ve hangi \"mutlaka görülmeli\" yerler paranıza değmez."],
  "Работаю самостоятельно и напрямую сотрудничаю со всеми отелями Египта.": ["I work independently and partner directly with all hotels in Egypt.", "Bağımsız çalışıyorum ve Mısır'daki tüm otellerle doğrudan iş birliği yapıyorum."],
  "Живу и работаю в Египте": ["I live and work in Egypt", "Mısır'da yaşıyor ve çalışıyorum"],
  "Более 20 лет в туризме": ["20+ years in tourism", "Turizmde 20 yılı aşkın deneyim"],
  "Русскоговорящие гиды": ["Russian-speaking guides", "Rusça konuşan rehberler"],
  "На программах в Каир и Луксор": ["On Cairo and Luxor trips", "Kahire ve Luksor turlarında"],
  "Один человек отвечает за всё": ["One person is responsible for everything", "Her şeyden tek kişi sorumlu"],
  "Вы знаете, к кому обращаетесь, — на связи в мессенджере": ["You know exactly who you're talking to — always reachable in the messenger", "Kiminle konuştuğunuzu bilirsiniz — mesajla her zaman ulaşılabilir"],
  "Задать вопрос Хайсаму": ["Ask Haytham a question", "Haytham'a soru sorun"],

  // видео
  "Видео с экскурсий": ["Videos from our tours", "Turlarımızdan videolar"],
  "Как проходят": ["What", "Turlarımız"],
  "наши экскурсии": ["our tours look like", "nasıl geçiyor"],
  "Без постановки — так выглядит обычный день с группой. Наведите, чтобы посмотреть, нажмите — со звуком.": ["Nothing staged — this is a normal day with a group. Hover to preview, click to watch with sound.", "Hiçbir şey kurgu değil — grupla sıradan bir gün böyle geçiyor. Önizleme için üzerine gelin, sesli izlemek için tıklayın."],
  "Хайсам в Большом Египетском музее": ["Haytham at the Grand Egyptian Museum", "Haytham Büyük Mısır Müzesi'nde"],
  "Гранд музей, Каир": ["Grand Museum, Cairo", "Büyük Müze, Kahire"],
  "У статуи Рамзеса II": ["By the statue of Ramesses II", "II. Ramses heykelinin önünde"],
  "Египетский музей": ["Egyptian Museum", "Mısır Müzesi"],
  "Каир, площадь Тахрир": ["Cairo, Tahrir Square", "Kahire, Tahrir Meydanı"],
  "Коптский Каир": ["Coptic Cairo", "Kıpti Kahire"],
  "Висячая церковь и старый город": ["The Hanging Church and the old city", "Asma Kilise ve eski şehir"],
  "Рассказ в залах музея": ["Storytelling in the museum halls", "Müze salonlarında anlatım"],
  "Вид на пирамиды из музея": ["Pyramid view from the museum", "Müzeden piramit manzarası"],
  "Дорога с гидом": ["On the road with a guide", "Rehberle yolda"],
  "В автобусе группы": ["On the group bus", "Grup otobüsünde"],
  "Залы с сокровищами": ["The treasure halls", "Hazine salonları"],
  "У пирамид": ["At the pyramids", "Piramitlerin önünde"],
  "«Мечта сбылась»": ["\"A dream come true\"", "\"Hayalim gerçek oldu\""],
  "У пирамиды Хеопса": ["At the Pyramid of Cheops", "Keops Piramidi'nde"],
  "Группа у пирамид": ["Group at the pyramids", "Piramitlerde grup"],
  "С сыном у пирамид": ["With my son at the pyramids", "Oğlumla piramitlerde"],
  "Семья у пирамид": ["Family at the pyramids", "Piramitlerde aile"],
  "После экскурсии": ["After the tour", "Turdan sonra"],
  "Большая группа": ["A big group", "Büyük grup"],
  "Привет из Египта": ["Hello from Egypt", "Mısır'dan selamlar"],
  "Группа гостей": ["Our guests", "Misafirlerimiz"],
  "Вся группа вместе": ["The whole group together", "Tüm grup bir arada"],

  // как это работает
  "Как это работает": ["How it works", "Nasıl çalışır"],
  "Бронь": ["Book", "5 dakikada"],
  "за 5 минут": ["in 5 minutes", "rezervasyon"],
  "Напишите в мессенджер": ["Send a message", "Mesaj gönderin"],
  "Какая экскурсия интересна, где вы живёте и сколько вас.": ["Which tour you like, where you're staying and how many of you there are.", "Hangi tur ilginizi çekiyor, nerede kalıyorsunuz ve kaç kişisiniz."],
  "Получите программу": ["Get your plan", "Programınızı alın"],
  "Хайсам подскажет лучший вариант и дату, время выезда и что взять с собой.": ["Haytham will suggest the best option and date, the pick-up time and what to bring.", "Haytham en iyi seçeneği ve tarihi, hareket saatini ve yanınıza ne almanız gerektiğini söyler."],
  "Отдыхайте": ["Enjoy", "Keyfini çıkarın"],
  "Вас заберут от отеля. Оплата в USD, EUR, EGP, RUB, UAH, KZT или картой.": ["You'll be picked up from your hotel. Pay in USD, EUR, EGP, RUB, UAH, KZT or by card.", "Otelinizden alınırsınız. Ödeme USD, EUR, EGP, RUB, UAH, KZT veya kartla."],
  "Готовы? Первый шаг — одно сообщение.": ["Ready? The first step is one message.", "Hazır mısınız? İlk adım tek bir mesaj."],

  // экскурсии: заголовки, вкладки
  "Экскурсии и активности": ["Tours & activities", "Turlar ve aktiviteler"],
  "Куда": ["Where to", "Nereye"],
  "поехать": ["go", "gitmeli?"],
  "Листайте": ["Swipe", "Kaydırın"],
  "Листайте вниз": ["Scroll down", "Aşağı kaydırın"],
  "онлайн": ["online", "çevrimiçi"],
  "ответит за 5 минут": ["replies in 5 minutes", "5 dakikada yanıt verir"],
  "ваш гид": ["your guide", "rehberiniz"],
  "20+ лет в Египте": ["20+ years in Egypt", "Mısır'da 20+ yıl"],
  "Смотреть": ["Watch", "İzle"],
  "Подобрать программу": ["Help me choose", "Program seçin"],
  "Каир и Луксор": ["Cairo & Luxor", "Kahire ve Luksor"],
  "Море": ["Sea", "Deniz"],
  "Пустыня": ["Desert", "Çöl"],
  "Синай и Дахаб": ["Sinai & Dahab", "Sina ve Dahab"],
  "Забронировать": ["Book", "Rezervasyon"],
  "за человека": ["per person", "kişi başı"],
  "за двоих": ["for two", "iki kişi için"],
  "по запросу": ["on request", "talep üzerine"],
  "микроавтобус до 5 чел. — $480": ["minibus up to 5 people — $480", "5 kişiye kadar minibüs — $480"],
  "Цены за человека, если не указано иное. Наведите на карточку, чтобы увидеть программу. Подробности — время выезда, шопинг — в мессенджере.": ["Prices are per person unless stated otherwise. Hover over a card to see the program. Details — pick-up time, shopping — in the messenger.", "Aksi belirtilmedikçe fiyatlar kişi başıdır. Programı görmek için kartın üzerine gelin. Detaylar — hareket saati, alışveriş — mesajla."],

  // экскурсии: названия
  "Каир на самолёте, группа": ["Cairo by plane, group", "Uçakla Kahire, grup"],
  "Каир на автобусе": ["Cairo by bus", "Otobüsle Kahire"],
  "Каир на автобусе: Гранд музей": ["Cairo by bus: Grand Museum", "Otobüsle Kahire: Büyük Müze"],
  "Каир мини-группой": ["Cairo in a small group", "Küçük grupla Kahire"],
  "Каир на самолёте, индивидуально": ["Cairo by plane, private", "Uçakla Kahire, özel"],
  "Каир «История Египта»": ["Cairo: \"History of Egypt\"", "Kahire: \"Mısır Tarihi\""],
  "Луксор на самолёте": ["Luxor by plane", "Uçakla Luksor"],
  "Морская прогулка с дайвингом «всё в одном»": ["All-in-one sea trip with diving", "Dalışlı her şey dahil deniz turu"],
  "Индивидуальная яхта": ["Private yacht", "Özel yat"],
  "Белый остров с дайвингом": ["White Island with diving", "Dalışlı Beyaz Ada"],
  "Рас-Мохаммед на автобусе": ["Ras Mohammed by bus", "Otobüsle Ras Muhammed"],
  "Ужин / вечеринка на яхте": ["Dinner / party on a yacht", "Yatta akşam yemeği / parti"],
  "Батискаф": ["Semi-submarine", "Yarı denizaltı"],
  "Погружение с аквалангом": ["Scuba dive", "Tüplü dalış"],
  "Дайвинг с берега": ["Shore diving", "Kıyıdan dalış"],
  "Курсы дайвинга PADI": ["PADI diving courses", "PADI dalış kursları"],
  "Шоу дельфинов": ["Dolphin show", "Yunus gösterisi"],
  "Мега сафари": ["Mega safari", "Mega safari"],
  "Утреннее сафари на квадроциклах": ["Morning quad bike safari", "Sabah ATV safarisi"],
  "Супер сафари": ["Super safari", "Süper safari"],
  "Цветной каньон и Дахаб": ["Coloured Canyon & Dahab", "Renkli Kanyon ve Dahab"],
  "Один день в Дахабе": ["A day in Dahab", "Dahab'da bir gün"],
  "Монастырь Св. Екатерины и гора Моисея": ["St Catherine's Monastery & Mount Sinai", "Azize Katerina Manastırı ve Musa Dağı"],
  "Иордания — Петра и Акаба": ["Jordan — Petra & Aqaba", "Ürdün — Petra ve Akabe"],

  // экскурсии: теги
  "самолёт": ["plane", "uçak"],
  "русскоговорящий гид": ["Russian-speaking guide", "Rusça rehber"],
  "ежедневно": ["daily", "her gün"],
  "обед": ["lunch", "öğle yemeği"],
  "микроавтобус": ["minibus", "minibüs"],
  "возврат к 22:00": ["back by 22:00", "22:00'de dönüş"],
  "личный гид": ["private guide", "özel rehber"],
  "новинка": ["new", "yeni"],
  "индивидуально": ["private", "özel"],
  "двухпалубная": ["two-deck", "iki katlı"],
  "море": ["sea", "deniz"],
  "дайвинг": ["diving", "dalış"],
  "обед включён": ["lunch included", "öğle yemeği dahil"],
  "вечер": ["evening", "akşam"],
  "для всей семьи": ["for the whole family", "tüm aile için"],
  "с инструктором": ["with an instructor", "eğitmenle"],
  "сертификат": ["certificate", "sertifika"],
  "для детей": ["for kids", "çocuklar için"],
  "завтрак и обед": ["breakfast and lunch", "kahvaltı ve öğle yemeği"],
  "1 час": ["1 hour", "1 saat"],
  "чай с бедуинами": ["tea with Bedouins", "Bedevilerle çay"],
  "ужин": ["dinner", "akşam yemeği"],
  "джип": ["jeep", "cip"],
  "программы на выбор": ["choice of programs", "program seçenekleri"],
  "ночной выезд": ["overnight departure", "gece hareket"],
  "паром": ["ferry", "feribot"],

  // экскурсии: описания
  "Без долгой дороги: Большой Египетский музей, пирамиды Гизы, Сфинкс, обед.": ["No long drive: Grand Egyptian Museum, Giza pyramids, the Sphinx, lunch.", "Uzun yol yok: Büyük Mısır Müzesi, Gize piramitleri, Sfenks, öğle yemeği."],
  "Национальный музей, пирамиды Гизы, Сфинкс, обед.": ["National Museum, Giza pyramids, the Sphinx, lunch.", "Ulusal Müze, Gize piramitleri, Sfenks, öğle yemeği."],
  "Большой Египетский музей, пирамиды Гизы, Сфинкс, обед.": ["Grand Egyptian Museum, Giza pyramids, the Sphinx, lunch.", "Büyük Mısır Müzesi, Gize piramitleri, Sfenks, öğle yemeği."],
  "Гранд музей, великие пирамиды, Сфинкс, обед. Дни выезда — в мессенджере.": ["Grand Museum, the Great Pyramids, the Sphinx, lunch. Departure days — ask in the messenger.", "Büyük Müze, Büyük Piramitler, Sfenks, öğle yemeği. Hareket günleri için mesaj atın."],
  "Музей, пирамиды, Сфинкс, православный собор, Висячая церковь, обед.": ["Museum, pyramids, the Sphinx, an Orthodox cathedral, the Hanging Church, lunch.", "Müze, piramitler, Sfenks, Ortodoks katedrali, Asma Kilise, öğle yemeği."],
  "Православный собор, Висячая церковь, церковь-пещера, место пребывания Святого семейства, древние иконы.": ["An Orthodox cathedral, the Hanging Church, the Cave Church, the place where the Holy Family stayed, ancient icons.", "Ortodoks katedrali, Asma Kilise, Mağara Kilisesi, Kutsal Aile'nin kaldığı yer, eski ikonlar."],
  "Храмовый комплекс Карнак, храм царицы Хатшепсут, Долина царей, обед.": ["Karnak temple complex, Temple of Hatshepsut, Valley of the Kings, lunch.", "Karnak tapınak kompleksi, Hatşepsut Tapınağı, Krallar Vadisi, öğle yemeği."],
  "Снорклинг на рифах, погружение с аквалангом, обед «шведский стол», Белый остров.": ["Reef snorkelling, a scuba dive, buffet lunch, White Island.", "Resiflerde şnorkel, tüplü dalış, açık büfe öğle yemeği, Beyaz Ada."],
  "Снорклинг — 2 захода (маска и ласты), обед. Цена зависит от количества человек.": ["Snorkelling — 2 stops (mask and fins), lunch. Price depends on group size.", "Şnorkel — 2 durak (maske ve palet), öğle yemeği. Fiyat kişi sayısına göre değişir."],
  "Морская прогулка на Белый остров с погружением.": ["Boat trip to White Island with a dive.", "Dalışlı Beyaz Ada tekne turu."],
  "Поездка в национальный парк Рас-Мохаммед.": ["Trip to Ras Mohammed National Park.", "Ras Muhammed Milli Parkı gezisi."],
  "Стоимость зависит от количества гостей и типа яхты.": ["Price depends on the number of guests and the yacht.", "Fiyat misafir sayısına ve yat tipine göre değişir."],
  "Рифы через стекло нижней палубы под водой.": ["See the reefs through the glass of the underwater lower deck.", "Su altındaki alt güverteden camın ardından resifleri izleyin."],
  "Погружение с аквалангом с инструктором.": ["A scuba dive with an instructor.", "Eğitmenle tüplü dalış."],
  "Цена зависит от времени под водой.": ["Price depends on time underwater.", "Fiyat su altında kalma süresine göre değişir."],
  "Обучение с получением международного сертификата PADI.": ["Training with an international PADI certificate.", "Uluslararası PADI sertifikalı eğitim."],
  "Дети до 3 лет — бесплатно, 3–8 лет — скидка 50%.": ["Under 3s free, ages 3–8 get 50% off.", "3 yaş altı ücretsiz, 3–8 yaş %50 indirimli."],
  "Квадроциклы и багги, чай с бедуинами, верблюды, катание на бананах.": ["Quad bikes and buggies, tea with Bedouins, camels, banana boat rides.", "ATV ve buggy, Bedevilerle çay, develer, muz bot."],
  "Час катания на квадроциклах по пустыне и остановка с традиционным чаем.": ["An hour of quad biking in the desert and a stop for traditional tea.", "Çölde bir saat ATV ve geleneksel çay molası."],
  "Квадроциклы, бедуинская деревня, верблюды, бедуинская вечеринка и ужин.": ["Quad bikes, a Bedouin village, camels, a Bedouin party and dinner.", "ATV, Bedevi köyü, develer, Bedevi partisi ve akşam yemeği."],
  "Квадроцикл, бедуинская деревня, кальян, чай, верблюды, завтрак, снорклинг.": ["Quad bike, Bedouin village, shisha, tea, camels, breakfast, snorkelling.", "ATV, Bedevi köyü, nargile, çay, develer, kahvaltı, şnorkel."],
  "Каньон, Голубая дыра и другие программы на выбор.": ["The canyon, the Blue Hole and other programs to choose from.", "Kanyon, Mavi Delik ve seçebileceğiniz diğer programlar."],
  "Монастырь у подножия горы Синай, восхождение на гору Моисея, возможность посетить Дахаб.": ["The monastery at the foot of Mount Sinai, a climb up Mount Moses, an option to visit Dahab.", "Sina Dağı eteğindeki manastır, Musa Dağı'na tırmanış, Dahab'ı ziyaret imkânı."],
  "Паром до Акабы, Петра: Эль-Хазне, амфитеатр, гробницы. Обед и прогулка по Акабе.": ["Ferry to Aqaba, Petra: Al-Khazneh, the amphitheatre, tombs. Lunch and a walk in Aqaba.", "Akabe'ye feribot, Petra: El Hazne, amfitiyatro, mezarlar. Öğle yemeği ve Akabe'de yürüyüş."],

  // бегущая строка
  "Пирамиды": ["Pyramids", "Piramitler"],
  "Яхты": ["Yachts", "Yatlar"],
  "Сафари": ["Safari", "Safari"],
  "Дайвинг": ["Diving", "Dalış"],
  "Храмы": ["Temples", "Tapınaklar"],
  "Бедуины": ["Bedouins", "Bedeviler"],
  "Рифы": ["Reefs", "Resifler"],
  "Каньоны": ["Canyons", "Kanyonlar"],

  // направления
  "Весь Египет": ["All of Egypt", "Tüm Mısır"],
  "и не только": ["and beyond", "ve ötesi"],
  "пустыня": ["desert", "çöl"],
  "Автобус": ["Bus", "Otobüs"],
  "Самолёт": ["Plane", "Uçak"],
  "Рифы Рас-Мохаммеда и Белого острова, яхты, дайвинг, сафари на квадроциклах.": ["Reefs of Ras Mohammed and White Island, yachts, diving, quad bike safaris.", "Ras Muhammed ve Beyaz Ada resifleri, yatlar, dalış, ATV safarileri."],
  "Дахаб и монастырь": ["Dahab & the monastery", "Dahab ve manastır"],
  "Цветной каньон, Голубая дыра, бедуинская деревня, гора Моисея и монастырь Св. Екатерины.": ["Coloured Canyon, the Blue Hole, a Bedouin village, Mount Sinai and St Catherine's Monastery.", "Renkli Kanyon, Mavi Delik, Bedevi köyü, Musa Dağı ve Azize Katerina Manastırı."],
  "Большой Египетский музей, пирамиды Гизы, Сфинкс, Висячая церковь.": ["Grand Egyptian Museum, Giza pyramids, the Sphinx, the Hanging Church.", "Büyük Mısır Müzesi, Gize piramitleri, Sfenks, Asma Kilise."],
  "Карнак, храм царицы Хатшепсут и Долина царей.": ["Karnak, the Temple of Hatshepsut and the Valley of the Kings.", "Karnak, Hatşepsut Tapınağı ve Krallar Vadisi."],
  "Паром Нувейба — Акаба": ["Nuweiba — Aqaba ferry", "Nuveyba — Akabe feribotu"],
  "Петра, Иордания": ["Petra, Jordan", "Petra, Ürdün"],
  "Сокровищница Эль-Хазне, амфитеатр, древние гробницы и прогулка по Акабе.": ["Al-Khazneh treasury, the amphitheatre, ancient tombs and a walk around Aqaba.", "El Hazne hazinesi, amfitiyatro, antik mezarlar ve Akabe'de yürüyüş."],

  // всё в одном чате
  "Всё для отдыха": ["Everything for your holiday", "Tatiliniz için her şey"],
  "Всё": ["Everything", "Her şey"],
  "в одном чате": ["in one chat", "tek sohbette"],
  "Экскурсии и туры": ["Tours & trips", "Turlar ve geziler"],
  "Групповые и индивидуальные программы по Египту и в Иорданию": ["Group and private programs across Egypt and to Jordan", "Mısır genelinde ve Ürdün'e grup ve özel programlar"],
  "Отели": ["Hotels", "Oteller"],
  "Прямое сотрудничество с отелями по всему Египту": ["Direct partnerships with hotels all over Egypt", "Mısır genelinde otellerle doğrudan iş birliği"],
  "Авиабилеты": ["Flights", "Uçak biletleri"],
  "В том числе внутри Египта": ["Including domestic flights", "Yurt içi uçuşlar dahil"],
  "Аэропорт и города": ["Airport and cities", "Havalimanı ve şehirler"],
  "Все экскурсии и трансферы застрахованы": ["All tours and transfers are insured", "Tüm turlar ve transferler sigortalı"],
  "Ваша отельная или туристическая страховка действует на всех маршрутах на 100%.": ["Your hotel or travel insurance is 100% valid on all our routes.", "Otel veya seyahat sigortanız tüm rotalarımızda %100 geçerlidir."],

  // трансфер
  "Транспорт по Египту": ["Getting around Egypt", "Mısır'da ulaşım"],
  "Легковой авто": ["Car", "Otomobil"],
  "встреча с табличкой": ["meet & greet with a name sign", "isim tabelasıyla karşılama"],
  "до 9 чел.": ["up to 9 pax", "9 kişiye kadar"],
  "по Египту": ["in Egypt", "Mısır içi"],
  "Микроавтобус": ["Minibus", "Minibüs"],
  "для семьи и компании": ["for families and friends", "aile ve arkadaşlar için"],
  "до 16 чел.": ["up to 16 pax", "16 kişiye kadar"],
  "Большой автобус": ["Coach", "Büyük otobüs"],
  "для больших групп": ["for large groups", "büyük gruplar için"],
  "до 50 чел.": ["up to 50 pax", "50 kişiye kadar"],
  "Между любыми городами": ["Between any cities", "Şehirler arası"],
  "Соберите маршрут — рассчитаем стоимость": ["Build your route — we'll calculate the price", "Rotanızı seçin — fiyatı hesaplayalım"],
  "Откуда": ["From", "Nereden"],
  "Рассчитать трансфер": ["Get a transfer quote", "Transfer fiyatı al"],
  "Аэропорт ⇄ отель": ["Airport ⇄ hotel", "Havalimanı ⇄ otel"],
  "легковой автомобиль": ["car", "otomobil"],
  "встреча": ["meet & greet", "karşılama"],
  "трансфер": ["transfer", "transfer"],

  // отзывы
  "Из отзывов гостей": ["From our guests", "Misafirlerimizden"],
  "Летали в Каир на один день и боялись, что будет бегом. Успели пирамиды, музей и нормально пообедать. Когда утром не могли найти свой автобус у отеля, Хайсам ответил в WhatsApp через пару минут.":
    ["We flew to Cairo for one day and were worried it would be a rush. We saw the pyramids, the museum and still had a proper lunch. When we couldn't find our bus at the hotel that morning, Haytham replied on WhatsApp within a couple of minutes.",
     "Kahire'ye bir günlüğüne uçtuk, her şey koşturmaca olur diye korkuyorduk. Piramitleri, müzeyi gördük, üstelik rahatça öğle yemeği de yedik. Sabah otelde otobüsümüzü bulamayınca Haytham WhatsApp'tan birkaç dakikada cevap verdi."],
  "Брали яхту на свою компанию, нас было семеро. Капитан отвёз туда, где почти не было других лодок, снорклинг там лучший за всю поездку. Вышло заметно дешевле, чем предлагали на ресепшене.":
    ["We booked a yacht just for our group, seven of us. The captain took us somewhere with almost no other boats, best snorkelling of the whole trip. It came out noticeably cheaper than what the hotel reception offered.",
     "Yedi kişilik grubumuz için yat kiraladık. Kaptan bizi neredeyse hiç tekne olmayan bir yere götürdü, tatilin en iyi şnorkel deneyimiydi. Otel resepsiyonunun teklifinden belirgin şekilde ucuza geldi."],
  "Муж давно хотел на квадроциклы, а я ехать сама побаивалась. Дали спокойную машину, инструктор всё время держался рядом. На закате остановились в пустыне — фото оттуда до сих пор стоят у меня на заставке.":
    ["My husband had wanted to ride quads for ages, and I was a bit scared to drive myself. They gave me a calm one and the instructor stayed close the whole time. We stopped in the desert at sunset — a photo from there is still my phone wallpaper.",
     "Eşim uzun zamandır ATV'ye binmek istiyordu, ben ise kendim sürmekten biraz çekiniyordum. Bana sakin bir araç verdiler, eğitmen hep yanımızdaydı. Gün batımında çölde durduk — oradan bir fotoğraf hâlâ telefonumun ekranında."],
  "Ольга": ["Olga", "Olga"],
  "Мурат": ["Murat", "Murat"],
  "Ирина": ["Irina", "İrina"],
  "Екатеринбург": ["Yekaterinburg", "Yekaterinburg"],
  "Алматы": ["Almaty", "Almatı"],
  "Минск": ["Minsk", "Minsk"],
  "О": ["O", "O"],
  "М": ["M", "M"],
  "И": ["I", "İ"],
  "Момент, ради которого": ["The moment people", "Mısır'a"],
  "едут в Египет": ["come to Egypt for", "bunun için gelinir"],

  // FAQ
  "Вопросы": ["Questions", "Sorular"],
  "Спросите": ["Ask", "Haytham'a"],
  "Хайсама": ["Haytham", "sorun"],
  "обычно отвечает за 5 минут": ["usually replies within 5 minutes", "genellikle 5 dakikada yanıt verir"],
  "Здравствуйте! Не нашли ответ на свой вопрос? Напишите мне — подскажу экскурсию, отель и трансфер.": ["Hello! Didn't find the answer to your question? Message me — I'll help with tours, hotels and transfers.", "Merhaba! Sorunuzun cevabını bulamadınız mı? Bana yazın — tur, otel ve transfer konusunda yardımcı olayım."],
  "Как забронировать экскурсию?": ["How do I book a tour?", "Turu nasıl rezerve ederim?"],
  "Напишите в WhatsApp или Telegram: название экскурсии, ваш отель и количество человек. Ответим в течение 5 минут и подтвердим дату.": ["Message us on WhatsApp or Telegram with the tour name, your hotel and the number of people. We'll reply within 5 minutes and confirm the date.", "WhatsApp veya Telegram'dan tur adını, otelinizi ve kişi sayısını yazın. 5 dakika içinde yanıt verip tarihi onaylarız."],
  "Как оплатить?": ["How can I pay?", "Nasıl ödeme yapabilirim?"],
  "Принимаем USD, EUR, EGP, RUB, UAH, KZT или оплату картой.": ["We accept USD, EUR, EGP, RUB, UAH, KZT or card payment.", "USD, EUR, EGP, RUB, UAH, KZT veya kartla ödeme kabul ediyoruz."],
  "Экскурсии застрахованы?": ["Are the tours insured?", "Turlar sigortalı mı?"],
  "Да. Все экскурсии и трансферы застрахованы — ваша отельная или туристическая страховка действует на всех наших маршрутах на 100%.": ["Yes. All tours and transfers are insured — your hotel or travel insurance is 100% valid on all our routes.", "Evet. Tüm turlar ve transferler sigortalıdır — otel veya seyahat sigortanız tüm rotalarımızda %100 geçerlidir."],
  "Есть скидки для детей?": ["Are there discounts for children?", "Çocuklar için indirim var mı?"],
  "На шоу дельфинов дети до 3 лет — бесплатно, от 3 до 8 лет — скидка 50%. По остальным экскурсиям уточняйте в мессенджере.": ["At the dolphin show, children under 3 go free and ages 3–8 get 50% off. For other tours, ask in the messenger.", "Yunus gösterisinde 3 yaş altı çocuklar ücretsiz, 3–8 yaş %50 indirimli. Diğer turlar için mesajla sorun."],
  "Нужна ли предоплата и можно ли отменить?": ["Is a deposit needed and can I cancel?", "Ön ödeme gerekli mi, iptal edebilir miyim?"],
  "Условия зависят от экскурсии — Хайсам напишет их в чате до того, как вы подтвердите поездку.":
    ["It depends on the tour — Haytham will send you the terms in the chat before you confirm the trip.",
     "Koşullar tura göre değişir — Haytham, geziyi onaylamadan önce bunları sohbette size yazar."],
  "Зависит от программы. До брони Хайсам пришлёт, что входит в цену и за что придётся доплатить на месте.":
    ["It depends on the programme. Before you book, Haytham will tell you what the price includes and what you'd pay on the spot.",
     "Programa göre değişir. Rezervasyondan önce Haytham fiyata nelerin dahil olduğunu ve yerinde neye ek ödeme yapacağınızı yazar."],
  "Что не входит в стоимость?": ["What's not included in the price?", "Fiyata neler dahil değil?"],

  // финал и подвал
  "Остались вопросы?": ["Still have questions?", "Sorunuz mu var?"],
  "Напишите в мессенджер — ответим в течение": ["Message us — we'll reply within", "Bize yazın —"],
  "5 минут": ["5 minutes", "5 dakika içinde yanıt veririz"],
  "Подберём экскурсию, отель и трансфер под ваши даты. Без посредников и переплат.": ["We'll find a tour, hotel and transfer for your dates. No middlemen, no overpaying.", "Tarihlerinize uygun tur, otel ve transferi ayarlarız. Aracı yok, fazladan ödeme yok."],
  "или позвоните:": ["or call:", "veya arayın:"],
  "Экскурсии, отели, авиабилеты и трансфер по всему Египту — напрямую от гида Хайсама.": ["Tours, hotels, flights and transfers all over Egypt — directly from guide Haytham.", "Mısır genelinde turlar, oteller, uçak biletleri ve transferler — doğrudan rehber Haytham'dan."],
  "Навигация": ["Navigation", "Menü"],
  "Контакты": ["Contacts", "İletişim"],
  "Работаю по всему Египту": ["Working all over Egypt", "Tüm Mısır'da hizmet"],
  "карта": ["card", "kart"],
  "Галерея": ["Gallery", "Galeri"],
  "Сделано с заботой о ваших впечатлениях": ["Made with care for your memories", "Anılarınız için özenle hazırlandı"],

  // заголовок вкладки и описание
  "Rixos Travel Egypt — экскурсии по Египту с гидом Хайсамом": ["Rixos Travel Egypt — tours in Egypt with guide Haytham", "Rixos Travel Egypt — rehber Haytham ile Mısır turları"],
  "Египет без посредников: экскурсии, трансферы, отели и авиабилеты от гида Хайсама, который живёт в Египте и работает в туризме более 20 лет.": ["Egypt without middlemen: tours, transfers, hotels and flights from Haytham, a guide who lives in Egypt and has worked in tourism for over 20 years.", "Aracısız Mısır: Mısır'da yaşayan ve 20 yılı aşkın süredir turizmde çalışan rehber Haytham'dan turlar, transferler, oteller ve uçak biletleri."]
};

// Сообщения в WhatsApp на языке сайта
const MSG = {
  ru: { hi: "Здравствуйте, Хайсам! Хочу узнать про экскурсию", book: "Здравствуйте, Хайсам! Хочу забронировать: ", form: "Здравствуйте, Хайсам! Хочу забронировать экскурсию.", tour: "Экскурсия: ", date: "Дата: ", guests: "Гости: ", transfer: (a, b) => `Здравствуйте, Хайсам! Нужен трансфер: ${a} → ${b}. Сколько будет стоить?` },
  en: { hi: "Hello Haytham! I'd like to ask about a tour", book: "Hello Haytham! I'd like to book: ", form: "Hello Haytham! I'd like to book a tour.", tour: "Tour: ", date: "Date: ", guests: "Guests: ", transfer: (a, b) => `Hello Haytham! I need a transfer: ${a} → ${b}. How much would it cost?` },
  tr: { hi: "Merhaba Haytham! Bir tur hakkında bilgi almak istiyorum", book: "Merhaba Haytham! Rezervasyon yapmak istiyorum: ", form: "Merhaba Haytham! Bir tur rezerve etmek istiyorum.", tour: "Tur: ", date: "Tarih: ", guests: "Kişi: ", transfer: (a, b) => `Merhaba Haytham! Transfer lazım: ${a} → ${b}. Fiyatı ne kadar olur?` }
};

const LANGS = ["en", "ru", "tr"];
const CYR = /[А-Яа-яЁё]/;
let LANG = "en";
try {
  const q = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("lang");
  LANG = LANGS.includes(q) ? q : LANGS.includes(saved) ? saved : "en";
} catch (e) {}

// Перевод одной русской строки на текущий язык
function tr(ru, lang = LANG) {
  if (lang === "ru" || !ru) return ru;
  const i = lang === "en" ? 0 : 1;
  const key = ru.replace(/\s+/g, " ").trim();
  if (I18N[key]) return I18N[key][i];
  let m = key.match(/^от (\$[\d–]+)$/);
  if (m) return lang === "en" ? `from ${m[1]}` : `${m[1]}'den itibaren`;
  if (key.includes(" · ")) return key.split(" · ").map(part => CYR.test(part) ? tr(part, lang) : part).join(" · ");
  return ru;
}
const M = () => MSG[LANG];

// Обходит текст и подписи, запоминает русский оригинал и подставляет перевод
const ORIG = new WeakMap();
function translateTree(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.parentElement && n.parentElement.closest("script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  let n;
  while ((n = walker.nextNode())) {
    if (!ORIG.has(n)) { if (!CYR.test(n.nodeValue)) continue; ORIG.set(n, n.nodeValue); }
    const ru = ORIG.get(n), lead = ru.match(/^\s*/)[0], trail = ru.match(/\s*$/)[0];
    n.nodeValue = lead + tr(ru.trim()) + trail;
  }
  (root.querySelectorAll ? root : document).querySelectorAll("[aria-label], [title]").forEach(el => {
    ["aria-label", "title"].forEach(attr => {
      const key = "i18n" + attr.replace("-", "");
      if (!el.hasAttribute(attr)) return;
      if (!(key in el.dataset)) { if (!CYR.test(el.getAttribute(attr))) return; el.dataset[key] = el.getAttribute(attr); }
      el.setAttribute(attr, tr(el.dataset[key]));
    });
  });
}
