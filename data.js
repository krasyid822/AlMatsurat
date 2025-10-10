const dzikirData = [
    {
        id: 'taawudz',
        title: "Ta'awudz",
        count: '1x baca',
        arabic: 'اَعُوْذُ بِاللّٰهِ السَّمِيْعِ الْعَلِيْمِ مِنَ الشَّيْطَانِ الرَّجِيْمِ',
        translation: 'Aku berlindung kepada Allah Yang Maha Mendengar lagi Maha Mengetahui dari godaan setan yang terkutuk.',
        audioFile: 'audioF',
        audio: { pagi: { start: 2, end: 10 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-fatihah',
        title: 'Surat Al-Fatihah',
        count: '1x baca',
        arabic: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ ۝ اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ ۝ الرَّحْمٰنِ الرَّحِيْمِۙ ۝ مٰلِكِ يَوْمِ الدِّيْنِۗ ۝ اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ ۝ اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ ۝ صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ۝',
        translation: '(1) Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (2) Segala puji bagi Allah, Tuhan semesta alam. (3) Maha Pemurah lagi Maha Penyayang. (4) Yang menguasai di Hari Pembalasan. (5) Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan. (6) Tunjukilah kami jalan yang lurus, (7) (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat.',
        audioFile: 'audioF',
        audio: { pagi: { start: 10, end: 56 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-baqarah-1-5',
        title: 'Surat Al-Baqarah Ayat 1-5',
        count: '1x baca',
        arabic: 'الۤمّۤ ۚ ۝ ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَۙ ۝ الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ ۙ ۝ وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَۗ ۝ اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ ۝',
        translation: '(1) Alif Laam Miim. (2) Kitab (Al Qur’an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa, (3) (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka, (4) dan mereka yang beriman kepada Kitab (Al Qur’an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat. (5) Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung.',
        audioFile: 'audioF',
        audio: { pagi: { start: 66, end: 123 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'ayat-kursi',
        title: 'Surat Al-Baqarah Ayat 255',
        count: '1x baca',
        arabic: 'اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ ۝',
        translation: 'Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.',
        audioFile: 'audioF',
        audio: { pagi: { start: 123, end: 181 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-baqarah-256',
        title: 'Surat Al-Baqarah Ayat 256',
        count: '1x baca',
        arabic: 'لَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَا ۗوَاللّٰهُ سَمِيْعٌ عَلِيْمٌ ۝',
        translation: 'Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhu tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui.',
        audioFile: 'audioF',
        audio: { pagi: { start: 181, end: 207 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-baqarah-257',
        title: 'Surat Al-Baqarah Ayat 257',
        count: '1x baca',
        arabic: 'اَللّٰهُ وَلِيُّ الَّذِيْنَ اٰمَنُوْا يُخْرِجُهُمْ مِّنَ الظُّلُمٰتِ اِلَى النُّوْرِۗ وَالَّذِيْنَ كَفَرُوْٓا اَوْلِيَاۤؤُهُمُ الطَّاغُوْتُ يُخْرِجُوْنَهُمْ مِّنَ النُّوْرِ اِلَى الظُّلُمٰتِۗ اُولٰۤىِٕكَ اَصْحٰبُ النَّارِۚ هُمْ فِيْهَا خٰلِدُوْنَ ۝',
        translation: 'Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya.',
        audioFile: 'audioF',
        audio: { pagi: { start: 207, end: 240 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-baqarah-284',
        title: 'Surat Al-Baqarah Ayat 284',
        count: '1x baca',
        arabic: 'لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَ رْضِ ۗ وَاِ نْ تُبْدُوْا مَا فِيْۤ اَنْفُسِكُمْ اَوْ تُخْفُوْهُ يُحَا سِبْكُمْ بِهِ اللّٰهُ ۗ فَيَـغْفِرُ لِمَنْ يَّشَآءُ وَيُعَذِّبُ مَنْ يَّشَآءُ ۗ وَا للّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ۝',
        translation: 'Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu.',
        audioFile: 'audioF',
        audio: { pagi: { start: 240, end: 271 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-baqarah-285',
        title: 'Surat Al-Baqarah Ayat 285',
        count: '1x baca',
        arabic: 'اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۗ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ ۝',
        translation: "Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\".",
        audioFile: 'audioF',
        audio: { pagi: { start: 271, end: 307 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-baqarah-286',
        title: 'Surat Al-Baqarah Ayat 286',
        count: '1x baca',
        arabic: 'لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَا ۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَاۤ اِنْ نَّسِيْنَاۤ اَوْ اَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَاۤ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَا قَةَ لَنَا بِهٖ ۚ وَا عْفُ عَنَّا ۗ وَا غْفِرْ لَنَا ۗ وَا رْحَمْنَا ۗ اَنْتَ مَوْلٰٮنَا فَا نْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ ۝',
        translation: 'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): "Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir".',
        audioFile: 'audioF',
        audio: { pagi: { start: 308, end: 377 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-ikhlas',
        title: 'Surat Al-Ikhlas',
        count: '3x baca',
        arabic: 'قُلْ هُوَ اللّٰهُ اَحَدٌۚ ۝ اَللّٰهُ الصَّمَدُۚ ۝ لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ ۝ وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ ۝',
        translation: '(1) Katakanlah: “Dia-lah Allah, Yang Maha Esa, (2) Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. (3) Dia tiada beranak dan tiada pula diperanakkan, (4) dan tidak ada seorang pun yang setara dengan Dia”.',
        audioFile: 'audioF',
        audio: { pagi: { start: 384, end: 397 }, sore: { start: 384, end: 397 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-falaq',
        title: 'Surat Al-Falaq',
        count: '3x baca',
        arabic: 'قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ ۝ مِنْ شَرِّ مَا خَلَقَۙ ۝ وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ ۝ وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ ۝ وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ ۝',
        translation: '(1) Katakanlah: “Aku berlindung kepada Tuhan Yang Menguasai subuh, (2) dari kejahatan makhluk-Nya, (3) dan dari kejahatan malam apabila telah gelap gulita, (4) dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul, (5) dan dari kejahatan orang yang dengki apabila ia dengki”.',
        audioFile: 'audioF',
        audio: { pagi: { start: 441, end: 465 }, sore: { start: 441, end: 465 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'an-nas',
        title: 'Surat An-Nas',
        count: '3x baca',
        arabic: 'قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ ۝ مَلِكِ النَّاسِۙ ۝ اِلٰهِ النَّاسِۙ ۝ مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ ۝ الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ ۝',
        translation: '(1) Katakanlah: “Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia. (2) Raja manusia. (3) Sembahan manusia. (4) dari kejahatan (bisikan) syaithan yang biasa bersembunyi,(5) yang membisikkan (kejahatan) ke dalam dada manusia. (6) dari (golongan) jin dan manusia.',
        audioFile: 'audioF',
        audio: { pagi: { start: 529, end: 559 }, sore: { start: 529, end: 559 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-pagi-1',
        title: "Do'a Al-Matsurat Pagi",
        displayClass: 'pagi-dis',
        count: '3x baca',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلّٰهِ , وَالْحَمْدُ لِلّٰهِ لَا شَرِيْكَ لَهُ , لَا إِلَهَ إِلَّا هُوَ وَإِلَيْهِ النُّشُوْرُ',
        translation: 'Kami berpagi hari dan berpagi hari pula kerjaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali.',
        audioFile: 'audioF',
        audio: { pagi: { start: 627, end: 643 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-sore-1',
        title: "Do'a Al-Matsurat Sore",
        displayClass: 'sore',
        count: '3x baca',
        arabic: 'أَمْسَيْنَا وَ أَمْسَ الْمُلْكُ لِلَّهِ وَلْحَمْدُ لِلهِ لَا شَرِيْكَ لَهُ لَا إِلَهَ إِلَّاهُوَ وَإِلَيْهِ الْمَصِيْرُ',
        translation: 'Kami bersore hari dan bersore hari pula kerajaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali.',
        audioFile: 'audioFSore',
        audio: { pagi: { start: null, end: null }, sore: { start: 1, end: 15 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-pagi-2',
        title: "Do'a Al-Matsurat Pagi",
        displayClass: 'pagi-dis',
        count: '3x baca',
        arabic: 'اَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ',
        translation: 'Di waktu pagi kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik.',
        audioFile: 'audioF',
        audio: { pagi: { start: 673, end: 697 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-sore-2',
        title: "Do'a Al-Matsurat Sore",
        displayClass: 'sore',
        count: '3x baca',
        arabic: 'أَمْسَيْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ',
        translation: 'Di waktu sore kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik.',
        audioFile: 'audioFSore',
        audio: { pagi: { start: null, end: null }, sore: { start: 43, end: 67 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-pagi-3',
        title: "Do'a Al-Matsurat Pagi",
        displayClass: 'pagi-dis',
        count: '3x baca',
        arabic: 'اللّٰهُـمَّ إِنِّيْ أَصْبَحْتُ مِنْكَ فِيْ نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ , فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِيْ الدِّيْنِ وَالدُّنْيَا وَالْأَخِرَةِ',
        translation: 'Ya Allah, sesungguhnya aku berpagi hari dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakannlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat.',
        audioFile: 'audioF',
        audio: { pagi: { start: 747, end: 765 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-sore-3',
        title: "Do'a Al-Matsurat Sore",
        displayClass: 'sore',
        count: '3x baca',
        arabic: 'اللَّهُمَّ إِنِّي أَمْسَيتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَة',
        translation: 'Ya Allah, sesungguhnya aku bersore hari dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakannlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat.',
        audioFile: 'audioFSore',
        audio: { pagi: { start: null, end: null }, sore: { start: 115, end: 134 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-pagi-4',
        title: "Do'a Al-Matsurat Pagi",
        displayClass: 'pagi-dis',
        count: '3x baca',
        arabic: 'اَللّٰهُـمَّ مَا أَصْبَحَ بِيْ مِنْ نِعْمَةٍ , أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ , لَا شَرِيْكَ لَكَ , فَلَكَ الْحَمْدُ , وَلَكَ الشُّكْرُ',
        translation: 'Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu berpagi hari dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur.',
        audioFile: 'audioF',
        audio: { pagi: { start: 801, end: 815 }, sore: { start: null, end: null } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'dzikir-sore-4',
        title: "Do'a Al-Matsurat Sore",
        displayClass: 'sore',
        count: '3x baca',
        arabic: 'اللَّهُمَّ مَا أَمْسَ بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ',
        translation: 'Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu bersore hari dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur.',
        audioFile: 'audioFSore',
        audio: { pagi: { start: null, end: null }, sore: { start: 170, end: 184 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-1',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'يَارَبِّيْ لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ الْكَرِيْمِ وَعَظِيْمِ سُلْطَانِكَ',
        translation: 'Ya Tuhanku, Segala puji bagiMu sebagaimana seyogyanya kemuliaan wajahMu dan keagungan kekuasaanMu.',
        audioFile: 'audioF',
        audio: { pagi: { start: 844, end: 854 }, sore: { start: 844, end: 854 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-2',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'رَضِتُ بِاللّٰهِ رَبَّا وَبِالْإِسْلاَمِ دِيْنَا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُوْلاَ. رَبِّ زِدْ نِيْ عِلْمًـا وَرْزُقْنِـيْ فَهْمًـا وَاجْعَلْنِيْ مِنَ الصَّالِحِيْنَ',
        translation: 'Aku ridha Allah sebagai Rabb, Islam sebagai agama, dan Muhammad sebagai Rasul. Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman, Dan jadikanlah aku termasuk golongan orang-orang yang shalih.',
        audioFile: 'audioF',
        audio: { pagi: { start: 872, end: 881 }, sore: { start: 872, end: 881 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-3',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ',
        translation: 'Maha Suci Allah dan Segala Puji bagiNya, sebanyak bilangan makhlukNya, seridha diriNya, setimbangan ‘arsy-Nya, dan sebanyak tinta dari kata-kataNya.',
        audioFile: 'audioF',
        audio: { pagi: { start: 904, end: 914 }, sore: { start: 904, end: 914 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-4',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'بِسْمِ اللّٰهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        translation: 'Dengan nama Allah Yang bersama NamaNya sesuatu apa pun tidak akan celaka baik di bumi dan di langit. Dialah Maha Medengar lagi maha Mengetahui.',
        audioFile: 'audioF',
        audio: { pagi: { start: 938, end: 952 }, sore: { start: 938, end: 952 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-5',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'اللّٰهُـمَّ إِنَّا نَعُوْذُبِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ',
        translation: 'Ya Allah sesungguhnya kami berlindung kepadaMu dari menyekutukanMu dengan sesuatu yang kami ketahui, dan kami memohon ampunanMu dari apa-apa yang tidak kami ketahui.',
        audioFile: 'audioF',
        audio: { pagi: { start: 979, end: 992 }, sore: { start: 979, end: 992 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-6',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'أَعُوْذُ بِكَلِمَاتِ اللّٰهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
        translation: 'Aku berlindung dengan kalimat Allah yang sempurna dari keburukan apa-apa yang Dia ciptakan.',
        audioFile: 'audioF',
        audio: { pagi: { start: 1019, end: 1028 }, sore: { start: 1019, end: 1028 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-7',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'اَللّٰهُـمَّ اِنِّى اَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ , وَاَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ , وَاَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ , وَاَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّ جَالِ',
        translation: 'Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan bakhil, dan dari lilitan hutang dan kesewenang-wenangan orang.',
        audioFile: 'audioF',
        audio: { pagi: { start: 1047, end: 1069 }, sore: { start: 1047, end: 1069 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-8',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'اللّٰهُـمَّ عَافِنِي فِي بَدَنِي , اللّٰهُـمَّ عَافِنِي فِي سَمْعِي , اللّٰهُـمَّ عَافِنِي فِي بَصَرِي , اللّٰهُـمَّ عَافِنِيْ فِيْ قَلْبِيْ',
        translation: 'Ya Allah berikanlah kesehatan bagi badanku, bagi pendengaranku, bagi penglihatanku, bagi qolbunku (hatiku).',
        audioFile: 'audioF2',
        audio: { pagi: { start: 27, end: 48 }, sore: { start: 27, end: 48 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'doa-umum-9',
        title: "Do'a Al-Matsurat",
        count: '3x baca',
        arabic: 'اللّٰهُـمَّ إِنِّي أَعُوْذُبِكَ مِنَ الْكُفْرِ وَالْفَقْرِ , وَأَعُوْذُبِكَ مِنْ عَذَابِ الْقَبْرِ , لَآ إِلَهَ إِلَّا أَنْتَ',
        translation: 'Ya Allah sungguh aku berlindung kepadaMu dari kekufuran dan kefaqiran, Ya Allah sungguh aku berlindung kepadaMu dari azab kubur, tidak ada Ilah kecuali Engkau.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 58, end: 76 }, sore: { start: 58, end: 76 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'sayyidul-istighfar',
        title: 'Istighfar Sayyid',
        count: '3x / 100x baca',
        arabic: 'اَللّٰهُـمَّ أَنْتَ رَبِّيْ لاَ إِلَهَ إِلاَّ أَنْتَ , خَلَقْتَنِيْ وَأَنَا عَبْدُكَ , وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ , أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ , أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ , وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ',
        translation: 'Ya Allah, Engkau Tuhanku, tiada Tuhan kecuali Engkau. Engkau ciptakan aku dan aku adalah hamba-Mu. Aku berada di atas janjiMu, semampuku. Aku berlindung kepadaMu dari keburukan perbuatanku. Aku mengakui banyaknya nikmat (yang Engkau anugerahkan) kepadaku dan aku mengakui dosa-dosaku, maka ampunilah aku. Karena sesungguhnya tiada yang mengampuni dosa-dosa melainkan Engkau.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 173, end: 221 }, sore: { start: 173, end: 221 } },
        headerClass: 'bg-red-600',
        containerClass: 'border-red-600'
    },
    {
        id: 'istighfar-2',
        title: "Do'a Al-Matsurat / Istighfar",
        count: '3x baca',
        arabic: 'أَسْتَغْفِرُ اللّٰهَ الَّذِي لَآ إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
        translation: 'Aku memohon ampunan Allah Yang Tiada Tuhan melainkan Dia, Yang Maha Hidup dan Maha Mengurus (makhluk-Nya).',
        audioFile: 'audioF2',
        audio: { pagi: { start: 320, end: 336 }, sore: { start: 320, end: 336 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'shalawat-ibrahimiyah',
        title: 'Shalawat',
        count: '10x baca',
        arabic: 'اللّٰهُـمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ , كَمَا صَلَّيْتَ عَـلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ , وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ , كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ , فِيْ الْعَالَمِيْنَ، إِنَّكَ حَمِيْدٌ مَجِيْدٌ',
        translation: 'Ya Allah berikanlah shalawat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Berikanlah barakah kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Di alam Engkaulah Yang Maha Terpuji lagi Maha Mulia.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 372, end: 441 }, sore: { start: 372, end: 441 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'tasbih-tahmid-tahlil-takbir',
        title: 'Tasbih, Tahmid, Tahlil, Takbir',
        count: '100x baca',
        arabic: 'سُبْحَانَ اللّٰهِ, وَالْحَمْدُ لِلّٰهِ , وَلَآ إِلَهَ إِلَّا اللّٰهُ , وَاللّٰهُ أَكْبَرُ',
        translation: 'Maha Suci Allah, segala puji bagi Allah, tiada Tuhan melainkan Allah dan Allah Maha Besar.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 581, end: 599 }, sore: { start: 581, end: 599 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'tahlil-wahdah',
        title: "Do'a Al-Matsurat",
        count: '10x baca',
        arabic: 'لَآ إِلَـهَ إِلَّا اللّٰهُ وَحْدَهُ لَاشَرِيْكَ لَهُ , لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ',
        translation: 'Tiada Tuhan melainkan Allah semata, yang tiada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji, dan Dia berkuasa ata segala sesuatu.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 635, end: 654 }, sore: { start: 635, end: 654 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'subhanakallahumma',
        title: 'Doa Kafaratul Majelis',
        count: '3x baca',
        arabic: 'سُبْحَانَكَ اللّٰهُـمَّ وَبِحَمْدِكَ , أَشْهَدُ أَنْ لَآ إِلَهَ إِلَّآ أَنْتَ , أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ',
        translation: 'Maha suci Engkau ya Allah, dan segala puji bagi-Mu. Aku bersaksi bahwa tiada Tuhan melainkan Engkau, aku memohon ampunan dan bertaubat kepada-Mu.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 694, end: 712 }, sore: { start: 694, end: 712 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'shalawat-akhir',
        title: 'Shalawat Penutup',
        count: '1x baca',
        arabic: 'اللّٰهُـمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُوْلِكَ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيْمًا عَدَدَمَا أَحَاطَ بِهِ عِلْمُكَ وَخَطَّ بِهِ قَلَمُكَ وَأَحْصَاهُ كِتَابُكَ , وَارْضَ اللَّهُمَّ عَنْ سَادَاتِنَا أَبِي بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ , وَعَنِ الصَّحَابَةِ أَجْمَعِيْنَ , وَعَنِ التَّابِعِيْنَ وَتَابِعِيْهِمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ',
        translation: 'Ya Allah berikanlah shalawat kepada Nabi Muhammad; hamba-Mu, nabi-Mu, dan Rasul-Mu; Nabi yang ummi. Juga kepada keluarga dan para sahabatnya serta berilah keselamatan sebanyak yang terjangkau oleh ilmu-Mu yang tergores oleh pena-Mu, dan yang terangkum oleh kitab-Mu. Ridhailah ya Allah para pemimpin kami, Abu Bakar, Umar, Utsman, dan Ali, semua sahabat, semua tabi’in dan orang-orang yang mengikuti mereka sampai hari pembalasan.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 751, end: 821 }, sore: { start: 751, end: 821 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'subhana-rabbika',
        title: "Do'a Penutup",
        count: '1x baca',
        arabic: 'سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ , وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ , وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ',
        translation: 'Maha suci Tuhanmu; Tuhan kemuliaan, dari apa-apa yang mereka sifatkan. Keselamatan semoga tercurah kepada para utusan dan segala puji bagi Allah, Tuhan semesta alam.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 821, end: 850 }, sore: { start: 821, end: 850 } },
        headerClass: 'bg-zinc-700'
    },
    {
        id: 'al-imran-26',
        title: 'Surat Al-Imran Ayat 26',
        count: '1x baca',
        arabic: 'قُلِ اللّٰهُمَّ مٰلِكَ الْمُلْكِ تُؤْتِى الْمُلْكَ مَنْ تَشَآءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَآءُ ۖ وَتُعِزُّ مَنْ تَشَآءُ وَتُذِلُّ مَنْ تَشَآءُ ۗ بِيَدِكَ الْخَيْرُ ۗ اِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ۝',
        translation: 'Katakanlah: "Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada orang yang Engkau kehendaki dan Engkau cabut kerajaan dari orang yang Engkau kehendaki. Engkau muliakan orang yang Engkau kehendaki dan Engkau hinakan orang yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan.Sesungguhnya Engkau Maha Kuasa atas segala sesuatu.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 851, end: 890 }, sore: { start: 851, end: 890 } },
        headerClass: 'bg-green-600',
        containerClass: 'border-green-600'
    },
    {
        id: 'al-imran-27',
        title: 'Surat Al-Imran Ayat 27',
        count: '1x baca',
        arabic: 'تُوْلِجُ الَّيْلَ فِى النَّهَارِ وَتُوْلِجُ النَّهَارَ فِى الَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَنْ تَشَاۤءُ بِغَيْرِ حِسَابٍ ۝',
        translation: 'Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki siapa yang Engkau kehendaki tanpa hisab (batas).',
        audioFile: 'audioF2',
        audio: { pagi: { start: 891, end: 918 }, sore: { start: 891, end: 918 } },
        headerClass: 'bg-green-600',
        containerClass: 'border-green-600'
    },
    {
        id: 'doa-perpindahan-waktu',
        title: 'Dzikir',
        count: '1x baca',
        arabic: 'اَللَّهُمَّ إِنَّ هَذَا إِقْبَالُ نَهَارِكَ وَإِدْبَارُ لَيْلِكَ وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْلِي',
        translation: 'Ya Allah, sesungguhnya ini adalah siang-Mu yang telah menjelang dan siang-Mu yang tengah berlalu serta suara-suara penyeru-Mu, maka ampunilah aku.',
        audioFile: 'audioF2',
        audio: { pagi: { start: 919, end: 935 }, sore: { start: 919, end: 935 } },
        headerClass: 'bg-green-600',
        containerClass: 'border-green-600'
    },
    {
        id: 'doa-rabithah',
        title: 'Doa Rabithah',
        count: '1x baca',
        arabic: 'اَللّهُمَّ إِنَّكَ تَعْلَمُ أَنَّ هَذِهِ الْقُلُوْبَ، قَدِ اجْتَمَعَتْ عَلَى مَحَبَّتِكَ وَالْتَقَتْ عَلَى طَاعَتِكَ، وَتَوَحَّدَتْ عَلَى دَعْوَتِكَ وَتَعَاهَدَتْ عَلَى نُصْرَةِ شَرِيْعَتِكَ فَوَثِّقِ اللَّهُمَّ رَابِطَتَهَا، وَأَدِمْ وُدَّهَا، وَاهْدِهَا سُبُلَهَا وَامْلَأَهَا بِنُوْرِكَ الَّذِيْ لاَ يَخْبُوْا وَاشْرَحْ صُدُوْرَهَا بِفَيْضِ الْإِيْمَانِ بِكَ، وَجَمِيْلِ التَّوَكُّلِ عَلَيْكَ وَاَحْيِهَا بِمَعْرِفَتِكَ، وَأَمِتْهَا عَلَى الشَّهَادَةِ فِي سَبِيْلِكَ إِنَّكَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرِ. اَللَّهُمَّ أَمِيْنَ. وَصَلِّ اللَّهُمَّ عَلَى سَيِّدَنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمَ',
        translation: 'Ya Allah, sesungguhnya Engkau Maha Mengetahui bahawa hati-hati ini, telah berhimpun di atas dasar kecintaan terhadapmu, bertemu di atas ketaatan kepada-Mu dan bersatu bagi memikul beban dakwah-Mu, hati-hati ini telah mengikat persetiaan untuk menolong meninggikan syariat-Mu. Oleh itu, Ya Allah, Engkau perkukuhkan ikatannya dan Engkau kekalkan kemesraan hati-hati ini, tunjukilah hati-hati ini akan jalan yang sebenar, serta penuhkanlah (piala) hati-hati ini dengan cahaya Rabbani-Mu yang tidak kunjung redup, lapangkanlah hati-hati dengan limpahan keimanan serta keindahan tawakkal kepada-Mu, hidup suburkanlah hati-hati ini dengan makrifat (pengenalan yang sebenarnya) tentang-Mu. (Jika Engkau takdirkan kami mati) maka matikanlah hati-hati ini sebagai para syuhada dalam perjuangan agama-Mu. Sesungguhnya Engkau sebaik-baik pelindung dan sebaik-baik penolong. Ya Allah perkenankanlah doa kami. Dan semoga shalawat serta salam selalu tercurah kepada Nabi Muhammad, keluarganya dan kepada semua sahabatnya.',
        audioFile: 'robitoh',
        audio: { pagi: { start: 0, end: 999 }, sore: { start: 0, end: 999 } }, // Loop audio
        headerClass: 'bg-green-600',
        containerClass: 'border-green-600'
    },
    {
        id: 'amalan-istighfar',
        title: 'Amalan Yaumiyah (Istighfar)',
        count: '100x baca',
        link: '#sayyidul-istighfar',
        arabic: 'أَسْتَغْفِرُ اللهَ| العَظِيْمَ',
        translation: 'Aku memohon ampunan kepada Allah | Yang Maha Agung.',
        audioFile: 'istighfar',
        audio: { pagi: { start: 0, end: 999 }, sore: { start: 0, end: 999 } },
        headerClass: 'bg-red-600',
        containerClass: 'border-red-600'
    },
    {
        id: 'doa-majelis-akhir',
        title: 'Doa Kafaratul Majelis',
        count: '1x baca',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَـٰهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ، وَأَتُوْبُ إِلَيْكَ',
        translation: 'Maha Suci Engkau ya Allah, aku memujiMu. Aku bersaksi bahwa tidak ada sesembahan yang berhak disembah kecuali Engkau, aku minta ampun dan bertaubat kepada-Mu.',
        audioFile: 'kafaratul',
        audio: { pagi: { start: 0, end: 999 }, sore: { start: 0, end: 999 } },
        headerClass: 'bg-red-600',
        containerClass: 'border-red-600'
    }
];