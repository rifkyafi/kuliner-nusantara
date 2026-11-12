// Gambar menu di-hotlink dari Wikimedia Commons (lisensi bebas, https://commons.wikimedia.org)
const DATA_PULAU = [
    {
        id: 1,
        nama: "Sumatera",
        ibukota: "Medan",
        provinsi: [
            "Aceh",
            "Sumatera Utara",
            "Sumatera Barat",
            "Riau",
            "Kepulauan Riau",
            "Jambi",
            "Sumatera Selatan",
            "Kepulauan Bangka Belitung",
            "Bengkulu",
            "Lampung"
        ],
        deskripsi: "Pulau terbesar keenam di dunia, kaya akan budaya Melayu, Batak, Minangkabau, dan Aceh.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "sm-001",
                "name": "Rendang",
                "origin": "Padang",
                "category": "Main Dish",
                "description_eng": "Beef slow-simmered for hours in coconut milk and a rich spice paste until the sauce caramelizes and the meat turns tender and intensely flavorful, a Minangkabau culinary heritage.",
                "description_ind": "Daging sapi yang dimasak berjam-jam dalam santan dan bumbu rempah pekat hingga kuah mengering dan daging menjadi empuk beraroma rempah, warisan kuliner Minangkabau dari Padang.",
                "ingredients_eng": ["Beef","Coconut Milk","Toasted Coconut","Galangal","Chili","Spices"],
                "ingredients_ind": ["Daging Sapi","Santan","Kelapa Sangrai","Lengkuas","Cabai","Rempah"],
                "flavor_profile": ["Savory", "Rich", "Spicy"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["rendang","rendang padang","masakan padang","sumatera barat","daging sapi"],
                "search_keywords_eng": ["rendang","beef rendang","padang food","west sumatera","slow cooked beef"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Beef%20Rendang..JPG?width=800"
                },
                {
                "id": "sm-002",
                "name": "Sate Padang",
                "origin": "Padang",
                "category": "Main Dish",
                "description_eng": "Beef satay from Padang served in a thick yellowish-brown gravy made from rice flour, turmeric, and rich offal broth, topped with crispy crackers.",
                "description_ind": "Sate daging sapi khas Padang berkuah kental kuning kecokelatan dari tepung beras, kunyit, dan kaldu jeroan, disajikan hangat dengan taburan kerupuk renyah.",
                "ingredients_eng": ["Beef","Offal","Rice Flour","Turmeric","Shallots","Chili"],
                "ingredients_ind": ["Daging Sapi","Jeroan","Tepung Beras","Kunyit","Bawang Merah","Cabai"],
                "flavor_profile": ["Savory", "Rich", "Umami"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["sate padang","sate","padang","kuah kental","sumatera barat"],
                "search_keywords_eng": ["sate padang","padang satay","beef satay","thick gravy satay","west sumatera"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20padang.jpg?width=800"
                },
                {
                "id": "sm-003",
                "name": "Pempek",
                "origin": "Palembang",
                "category": "Snack",
                "description_eng": "Palembang fishcake made from ground Spanish mackerel and sago flour, boiled and served with cuko, a hot, sour, and sweet vinegar-based sauce.",
                "description_ind": "Makanan khas Palembang dari adonan ikan tenggiri giling dan tepung sagu yang direbus, disajikan dengan cuko, kuah cuka pedas manis yang menyegarkan.",
                "ingredients_eng": ["Spanish Mackerel","Sago Flour","Garlic","Vinegar","Chili","Sugar"],
                "ingredients_ind": ["Ikan Tenggiri","Tepung Sagu","Bawang Putih","Cuka","Cabai","Gula"],
                "flavor_profile": ["Savory", "Sour", "Spicy"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["pempek","pempek palembang","cuko","sumatera selatan","ikan"],
                "search_keywords_eng": ["pempek","fishcake","palembang","south sumatera","cuko sauce"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pempek%20Palembang.jpg?width=800"
                },
                {
                "id": "sm-004",
                "name": "Bika Ambon",
                "origin": "Medan",
                "category": "Dessert",
                "description_eng": "A spongy honeycomb-textured cake scented with pandan and coconut from Medan, baked from tapioca flour, eggs, sugar, and coconut milk.",
                "description_ind": "Kue berongga bertekstur kenyal beraroma pandan dan kelapa khas Medan, dibuat dari tepung tapioka, telur, gula, dan santan, dipanggang hingga berlubang-lubang.",
                "ingredients_eng": ["Tapioca Flour","Egg","Sugar","Coconut Milk","Pandan Leaf"],
                "ingredients_ind": ["Tepung Tapioka","Telur","Gula","Santan","Daun Pandan"],
                "flavor_profile": ["Sweet", "Fragrant", "Chewy"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["bika ambon","kue medan","oleh-oleh medan","sumatera utara","kue pandan"],
                "search_keywords_eng": ["bika ambon","medan cake","honeycomb cake","north sumatera","pandan cake"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20bika%20ambon.JPG?width=800"
                },
                {
                "id": "sm-005",
                "name": "Mie Aceh",
                "origin": "Aceh",
                "category": "Main Dish",
                "description_eng": "Thick yellow noodles from Aceh, stir-fried or served in a spiced curry gravy with beef or seafood, bean sprouts, and fiery chili.",
                "description_ind": "Mie kuning tebal khas Aceh yang ditumis atau disajikan berkuah kari rempah dengan daging sapi atau seafood, tauge, dan cabai yang pedas menggigit.",
                "ingredients_eng": ["Yellow Noodles","Beef","Seafood","Bean Sprouts","Chili","Curry Spices"],
                "ingredients_ind": ["Mie Kuning","Daging Sapi","Seafood","Tauge","Cabai","Rempah Kari"],
                "flavor_profile": ["Spicy", "Savory", "Rich"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["mie aceh","mi aceh","aceh","kari mie","goreng mie"],
                "search_keywords_eng": ["mie aceh","aceh noodles","curry noodles","spicy fried noodles","acehnese cuisine"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20Aceh.jpg?width=800"
                }
            ]
            }
        ]
    },
    {
        id: 2,
        nama: "Jawa",
        ibukota: "Jakarta",
        provinsi: [
            "DKI Jakarta",
            "Banten",
            "Jawa Barat",
            "Jawa Tengah",
            "DI Yogyakarta",
            "Jawa Timur"
        ],
        deskripsi: "Pulau terpadat di Indonesia, pusat pemerintahan dan kebudayaan nasional.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "jw-001",
                "name": "Lumpia Semarang",
                "origin": "Semarang",
                "category": "Snack",
                "description_eng": "Crispy or soft spring rolls filled with sautéed bamboo shoots, minced chicken or prawns, and eggs.",
                "description_ind": "Lumpia khas Semarang berisi rebung tumis gurih, daging ayam atau udang cincang, dan telur, disajikan basah atau goreng renyah.",
                "ingredients_eng": ["Bamboo Shoots","Chicken","Shrimp","Egg","Pastry Wrapper"],
                "ingredients_ind": ["Rebung","Daging Ayam","Udang","Telur","Kulit Lumpia"],
                "flavor_profile": ["Sweet", "Savory"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["lumpia semarang","lumpia","rebung","semarang","gorengan"],
                "search_keywords_eng": ["spring roll","bamboo shoots","semarang","lumpia","snack"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lumpia%20Semarang.jpg?width=800"
                },
                {
                "id": "jw-002",
                "name": "Nasi Liwet Solo",
                "origin": "Surakarta",
                "category": "Main Dish",
                "description_eng": "Fragrant coconut rice served with shredded spiced chicken, chayote stew, boiled egg, and thick coconut cream sauce.",
                "description_ind": "Nasi gurih beraroma kelapa khas Solo yang disajikan bersama suwiran ayam opor, sayur labu siam pedas, telur pindang, dan siraman areh kental.",
                "ingredients_eng": ["Rice","Coconut Milk","Chicken","Chayote","Egg","Spices"],
                "ingredients_ind": ["Beras","Santan","Daging Ayam","Labu Siam","Telur","Rempah"],
                "flavor_profile": ["Savory", "Rich", "Umami"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["nasi liwet solo","nasi liwet","solo","surakarta","sayur labu siam"],
                "search_keywords_eng": ["rice","coconut rice","solo","surakarta","nasi liwet"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20Liwet%20Solo.jpg?width=800"
                },
                {
                "id": "jw-003",
                "name": "Gudeg",
                "origin": "Yogyakarta",
                "category": "Main Dish",
                "description_eng": "Traditional Yogyakarta dish of young jackfruit slow-cooked in palm sugar and coconut milk, served with chicken, egg, and spicy krecek.",
                "description_ind": "Olahan nangka muda khas Yogyakarta yang dimasak perlahan dengan gula kelapa dan santan, disajikan bersama ayam kampung, telur, dan sambal goreng krecek gurih pedas.",
                "ingredients_eng": ["Young Jackfruit","Palm Sugar","Coconut Milk","Chicken","Egg","Cattle Skin (Krecek)"],
                "ingredients_ind": ["Nangka Muda","Gula Merah","Santan","Ayam","Telur","Krecek"],
                "flavor_profile": ["Sweet", "Savory", "Rich"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["gudeg","gudeg jogja","nangka muda","yogyakarta","jogja"],
                "search_keywords_eng": ["gudeg","jackfruit","yogyakarta","jogja","traditional stew"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gudeg%20Ayam.jpg?width=800"
                },
                {
                "id": "jw-004",
                "name": "Rawon",
                "origin": "Surabaya",
                "category": "Main Dish",
                "description_eng": "East Javanese rich aromatic beef soup with a deep black broth made from keluak nuts, served with bean sprouts, salted egg, and sambal.",
                "description_ind": "Sup daging sapi khas Jawa Timur berkuah hitam pekat aromatik dari biji keluak, disajikan bersama tauge pendek segar, telur asin, dan sambal terasi.",
                "ingredients_eng": ["Beef","Keluak Nut","Lemongrass","Bean Sprouts","Salted Egg","Shallot"],
                "ingredients_ind": ["Daging Sapi","Keluak","Serai","Tauge Pendek","Telur Asin","Bawang Merah"],
                "flavor_profile": ["Savory", "Earthy", "Rich"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["rawon","rawon surabaya","sup hitam","daging sapi","keluak"],
                "search_keywords_eng": ["rawon","black soup","beef soup","surabaya","east java"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rawon%20Setan.jpg?width=800"
                },
                {
                "id": "jw-005",
                "name": "Soto Lamongan",
                "origin": "Lamongan",
                "category": "Main Dish",
                "description_eng": "Turmeric-yellow chicken soup packed with shredded chicken, glass noodles, boiled egg, and a signature savory koya powder made from garlic and prawn crackers.",
                "description_ind": "Soto ayam berkuah kuning kunyit khas Lamongan dengan suwiran ayam, soun, telur rebus, dan taburan bubuk koya gurih dari kerupuk udang dan bawang putih goreng.",
                "ingredients_eng": ["Chicken","Glass Noodles","Egg","Turmeric","Garlic","Koya Powder"],
                "ingredients_ind": ["Daging Ayam","Soun","Telur Rebus","Kunyit","Bawang Putih","Bubuk Koya"],
                "flavor_profile": ["Savory", "Aromatic", "Light"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["soto lamongan","soto ayam","koya","lamongan","jawa timur"],
                "search_keywords_eng": ["soto lamongan","chicken soup","koya","lamongan","yellow soup"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20Lamongan.jpg?width=800"
                }
            ]
            }

        ]
    },
    {
        id: 3,
        nama: "Kalimantan",
        ibukota: "Pontianak",
        provinsi: [
            "Kalimantan Barat",
            "Kalimantan Tengah",
            "Kalimantan Selatan",
            "Kalimantan Timur",
            "Kalimantan Utara"
        ],
        deskripsi: "Pulau terbesar ketiga di dunia, rumah bagi hutan hujan tropis dan suku Dayak.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "kl-001",
                "name": "Ayam Bakar Manday Sambal Seruit",
                "origin": "South Kalimantan",
                "category": "Main Dish",
                "description_eng": "Smoky grilled chicken accompanied by fried mandai (fermented cempedak rind) and fiery seruit chili relish.",
                "description_ind": "Ayam bakar beraroma asap khas Kalimantan Selatan yang disajikan dengan gorengan mandai (kulit cempedak fermentasi) dan sambal seruit pedas segar.",
                "ingredients_eng": ["Chicken","Mandai (Cempedak Rind)","Chili","Tomato","Shrimp Paste","Lime"],
                "ingredients_ind": ["Daging Ayam","Mandai (Kulit Cempedak)","Cabai","Tomat","Terasi","Jeruk Nipis"],
                "flavor_profile": ["Spicy", "Savory", "Smoky"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ayam bakar manday","sambal seruit","mandai","ayam bakar kalimantan","kalsel"],
                "search_keywords_eng": ["ayam bakar manday","sambal seruit","grilled chicken","south kalimantan","cempedak"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                },
                {
                "id": "kl-002",
                "name": "Ayam Masak Habang",
                "origin": "Banjarmasin",
                "category": "Main Dish",
                "description_eng": "Tender chicken braised in a thick sweet and savory red chili sauce, a celebrated classic from Banjarmasin.",
                "description_ind": "Ayam empuk yang dimasak dalam bumbu merah pekat khas Banjar yang manis dan gurih namun tidak terlalu pedas.",
                "ingredients_eng": ["Chicken","Dried Red Chili","Sweet Soy Sauce","Shallots","Garlic","Ginger"],
                "ingredients_ind": ["Daging Ayam","Cabai Merah Kering","Kecap Manis","Bawang Merah","Bawang Putih","Jahe"],
                "flavor_profile": ["Sweet", "Spicy", "Savory"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ayam masak habang","bumbu habang","banjarmasin","ayam merah","banjar"],
                "search_keywords_eng": ["ayam masak habang","red chicken","banjarmasin","kalimantan","sweet savory chicken"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                },
                {
                "id": "kl-003",
                "name": "Juhu Umbut Rotan",
                "origin": "Central Kalimantan",
                "category": "Main Dish",
                "description_eng": "Traditional Dayak soup made from tender young rattan shoots cooked in rich coconut milk and aromatic spices, with a delicate pleasant bitterness.",
                "description_ind": "Sayur khas suku Dayak dari umbut rotan muda yang dimasak dengan kuah santan gurih berempah, memiliki cita rasa pahit lembut yang khas dan segar.",
                "ingredients_eng": ["Young Rattan Shoots","Coconut Milk","Shallots","Garlic","Turmeric","Lemongrass"],
                "ingredients_ind": ["Umbut Rotan Muda","Santan","Bawang Merah","Bawang Putih","Kunyit","Serai"],
                "flavor_profile": ["Bitter", "Savory", "Creamy"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["juhu umbut rotan","rotan","masakan dayak","kalimantan tengah","sayur rotan"],
                "search_keywords_eng": ["juhu umbut rotan","rattan shoots","dayak soup","central kalimantan","exotic soup"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Juhu%20Umbut%20Rotan%20Ikan%20Nila.jpg?width=800"
                },
                {
                "id": "kl-004",
                "name": "Amplang",
                "origin": "Samarinda",
                "category": "Snack",
                "description_eng": "Light and crispy savory fish crackers made from fresh Spanish mackerel and tapioca, a renowned snack from Samarinda.",
                "description_ind": "Kerupuk renyah bertekstur empuk yang terbuat dari campuran daging ikan tenggiri segar dan tepung tapioka, oleh-oleh legendaris dari Samarinda.",
                "ingredients_eng": ["Mackerel Fish","Tapioca Flour","Garlic","Egg","Salt"],
                "ingredients_ind": ["Ikan Tenggiri","Tepung Tapioka","Bawang Putih","Telur","Garam"],
                "flavor_profile": ["Savory", "Crispy", "Umami"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["amplang","kuku macan","kerupuk ikan","samarinda","oleh-oleh kalimantan"],
                "search_keywords_eng": ["amplang","fish cracker","samarinda","kalimantan snack","crispy snack"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Amplang.jpg?width=800"
                },
                {
                "id": "kl-005",
                "name": "Kepiting Soka",
                "origin": "Balikpapan",
                "category": "Main Dish",
                "description_eng": "Crispy fried soft-shell crab that can be savored entirely, served with spicy sweet Balikpapan chili sauce.",
                "description_ind": "Kepiting cangkang lunak khas Balikpapan yang digoreng renyah sehingga dapat dimakan seutuhnya, disajikan dengan saus lada hitam atau saus asam manis pedas.",
                "ingredients_eng": ["Soft-shell Crab","Garlic","Chili Sauce","Flour","Butter"],
                "ingredients_ind": ["Kepiting Soka","Bawang Putih","Saus Cabai","Tepung","Mentega"],
                "flavor_profile": ["Savory", "Crispy", "Spicy"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["kepiting soka","kepiting cangkang lunak","balikpapan","seafood kalimantan","kepiting goreng"],
                "search_keywords_eng": ["kepiting soka","soft-shell crab","balikpapan","kalimantan seafood","crispy crab"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                }
            ]
            }

        ]
    },
    {
        id: 4,
        nama: "Sulawesi",
        ibukota: "Makassar",
        provinsi: [
            "Sulawesi Utara",
            "Gorontalo",
            "Sulawesi Tengah",
            "Sulawesi Barat",
            "Sulawesi Selatan",
            "Sulawesi Tenggara"
        ],
        deskripsi: "Pulau berbentuk unik dengan kekayaan budaya Bugis, Makassar, Toraja, dan Minahasa.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "sl-001",
                "name": "Coto Makassar",
                "origin": "Makassar",
                "category": "Main Dish",
                "description_eng": "Rich beef and offal stew simmered with freshly roasted ground peanuts and spices, customarily accompanied by ketupat rice cakes.",
                "description_ind": "Soto daging dan jeroan sapi khas Makassar berkuah kental gurih dari racikan kacang tanah sangrai dan rempah, disantap bersama ketupat.",
                "ingredients_eng": ["Beef","Beef Offal","Roasted Peanuts","Lemongrass","Coriander","Ketupat"],
                "ingredients_ind": ["Daging Sapi","Jeroan Sapi","Kacang Tanah Sangrai","Serai","Ketumbar","Ketupat"],
                "flavor_profile": ["Savory", "Rich", "Nutty"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["coto makassar","coto","makassar","daging sapi","kuliner sulsel"],
                "search_keywords_eng": ["coto makassar","beef stew","peanut soup","makassar","sulawesi"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Coto%20makassar.jpg?width=800"
                },
                {
                "id": "sl-002",
                "name": "Ikan Woku Belanga",
                "origin": "Manado",
                "category": "Main Dish",
                "description_eng": "Fish simmered in an aromatic yellow herbal sauce with fresh turmeric, crushed chili, lemongrass, lime leaves, and wild basil.",
                "description_ind": "Masakan ikan berkuah kuning khas Manado yang dimasak dalam belangga tanah liat dengan bumbu rempah pedas, serai, daun jeruk, dan wangi daun kemangi.",
                "ingredients_eng": ["Fresh Fish","Turmeric","Lemongrass","Lemon Basil","Tomato","Chili","Lime"],
                "ingredients_ind": ["Ikan Segar","Kunyit","Serai","Daun Kemangi","Tomat","Cabai Rawit","Jeruk Nipis"],
                "flavor_profile": ["Spicy", "Sour", "Aromatic"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ikan woku belanga","ikan woku","manado","pedas woku","kemangi"],
                "search_keywords_eng": ["ikan woku belanga","woku fish","manado dish","spicy yellow fish","basil fish"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kakap%20Woku.JPG?width=800"
                },
                {
                "id": "sl-003",
                "name": "Binte Biluhuta",
                "origin": "Gorontalo",
                "category": "Main Dish",
                "description_eng": "Refreshing Gorontalo corn soup simmered with sweet corn, fresh shrimp, grated coconut, basil, and a generous squeeze of calamansi lime.",
                "description_ind": "Sup jagung manis berkuah bening segar khas Gorontalo yang berpadu dengan udang segar, parutan kelapa, daun kemangi, dan kucuran jeruk nipis asam pedas.",
                "ingredients_eng": ["Sweet Corn","Shrimp","Grated Coconut","Basil","Lime Juice","Chili"],
                "ingredients_ind": ["Jagung Manis","Udang Segar","Kelapa Parut","Kemangi","Jeruk Nipis","Cabai"],
                "flavor_profile": ["Sour", "Savory", "Fresh"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["binte biluhuta","milu siram","sup jagung gorontalo","gorontalo","udang jagung"],
                "search_keywords_eng": ["binte biluhuta","corn soup","gorontalo","shrimp corn soup","milu siram"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Binte%20Biluhuta.jpg?width=800"
                },
                {
                "id": "sl-004",
                "name": "Tinutuan",
                "origin": "Manado",
                "category": "Main Dish",
                "description_eng": "Nourishing Manado vegetable porridge made with rice, pumpkin, sweet corn, cassava, and wild greens, served with smoked fish and sambal roa.",
                "description_ind": "Bubur sayuran kaya gizi khas Manado berbahan dasar beras, labu kuning, jagung manis, kangkung, dan bayam, disajikan dengan sambal roa dan ikan asin.",
                "ingredients_eng": ["Rice","Yellow Pumpkin","Sweet Corn","Spinach","Water Spinach","Basil"],
                "ingredients_ind": ["Beras","Labu Kuning","Jagung Manis","Bayam","Kangkung","Kemangi"],
                "flavor_profile": ["Savory", "Fresh", "Mild"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["tinutuan","bubur manado","bubur sayur","manado","kuliner sehat"],
                "search_keywords_eng": ["tinutuan","bubur manado","vegetable porridge","manado porridge","pumpkin rice"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tinutuan%20bubur%20Manado.JPG?width=800"
                },
                {
                "id": "sl-005",
                "name": "Kapurung",
                "origin": "Palopo",
                "category": "Main Dish",
                "description_eng": "Traditional Luwu sago dumpling soup cooked with shredded fish, prawns, tropical vegetables, and a sour-tangy chili broth.",
                "description_ind": "Hidangan khas Palopo (Luwu) berupa bola-bola sagu kenyal di dalam kuah ikan asam segar berpadu dengan udang, aneka sayuran hijau, dan sambal cabai.",
                "ingredients_eng": ["Sago Starch","Fish","Shrimp","Mixed Vegetables","Lime","Bird's Eye Chili"],
                "ingredients_ind": ["Tepung Sagu","Ikan","Udang","Sayur Bayam/Jantung Pisang","Jeruk Nipis","Cabai Rawit"],
                "flavor_profile": ["Sour", "Savory", "Fresh"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["kapurung","sagu palopo","luwu","makanan sagu sulawesi","sup asam sagu"],
                "search_keywords_eng": ["kapurung","sago dumplings","palopo","luwu","sulawesi sago soup"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kapurung%20Luwu.jpg?width=800"
                }
            ]
            }
        ]
    },
    {
        id: 5,
        nama: "Papua",
        ibukota: "Jayapura",
        provinsi: [
            "Papua",
            "Papua Barat",
            "Papua Selatan",
            "Papua Tengah",
            "Papua Pegunungan",
            "Papua Barat Daya"
        ],
        deskripsi: "Pulau terbesar di Indonesia dengan keanekaragaman hayati dan budaya yang luar biasa.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "pp-001",
                "name": "Papeda Kuah Kuning",
                "origin": "Papua",
                "category": "Main Dish",
                "description_eng": "Sticky sago porridge served with yellow turmeric fish soup made from tuna or snapper and lime.",
                "description_ind": "Papeda kuah kuning adalah makanan khas Papua berupa bubur sagu kenyal yang disajikan dengan kuah kuning ikan tuna atau kakap beraroma kunyit dan jeruk nipis.",
                "ingredients_eng": ["Sago Starch","Tuna","Turmeric","Lime","Lemongrass"],
                "ingredients_ind": ["Tepung Sagu","Ikan Tuna","Kunyit","Jeruk Nipis","Serai"],
                "flavor_profile": ["Sour", "Savory", "Fresh"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["papeda","sagu","kuah kuning","papua","ikan"],
                "search_keywords_eng": ["papeda","sago","yellow soup","papua","fish"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Papeda%20Kuah%20Kuning%20Ternate-1.jpg?width=800"
                },
                {
                "id": "pp-002",
                "name": "Kue Lontar",
                "origin": "Papua",
                "category": "Dessert",
                "description_eng": "Soft, sweet custard milk pie baked in a traditional ceramic plate with a fragrant aroma and rich creamy texture.",
                "description_ind": "Kue pai susu khas Papua yang lembut dan manis, dipanggang di piring keramik khusus dengan aroma harum dan tekstur creamy.",
                "ingredients_eng": ["Wheat Flour","Egg","Condensed Milk","Sugar","Margarine"],
                "ingredients_ind": ["Tepung Terigu","Telur","Susu Kental Manis","Gula","Margarin"],
                "flavor_profile": ["Sweet", "Fragrant", "Soft"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["kue lontar","pai susu","papua","kue manis","dessert"],
                "search_keywords_eng": ["kue lontar","papua dessert","lontar cake","milk pie","custard tart"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20Pie%20Susu.jpg?width=800"
                },
                {
                "id": "pp-003",
                "name": "Ikan Bakar Manokwari",
                "origin": "Manokwari",
                "category": "Main Dish",
                "description_eng": "Fresh grilled fish seasoned with special coarsely ground chili spices, offering a smoky, fiery, and savory taste.",
                "description_ind": "Ikan bakar segar khas Manokwari yang dilumuri sambal cabai giling kasar khas Papua, memberikan sensasi rasa gurih, pedas, dan aroma bakaran asap yang nikmat.",
                "ingredients_eng": ["Fresh Fish","Raw Red Chili","Shallots","Garlic","Lime","Salt"],
                "ingredients_ind": ["Ikan Segar","Cabai Rawit Merah","Bawang Merah","Bawang Putih","Jeruk Nipis","Garam"],
                "flavor_profile": ["Savory", "Spicy", "Smoky"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ikan bakar manokwari","ikan bakar","manokwari","sambal manokwari","papua"],
                "search_keywords_eng": ["ikan bakar","grilled fish","manokwari","papua","seafood"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jayapura%20grilled%20fish%20and%20shrimp.jpg?width=800"
                },
                {
                "id": "pp-004",
                "name": "Sagu Lempeng",
                "origin": "Papua",
                "category": "Snack",
                "description_eng": "Hard, dry sago flatbread baked in a traditional clay mold, usually dipped in warm tea, coffee, or fish soup before eating.",
                "description_ind": "Roti pipih sagu tradisional Papua yang dibakar dalam cetakan tanah liat, bertekstur padat dan renyah, nikmat dicelupkan ke teh manis, kopi, atau kuah ikan.",
                "ingredients_eng": ["Sago Starch","Water","Salt"],
                "ingredients_ind": ["Tepung Sagu","Air","Garam"],
                "flavor_profile": ["Neutral", "Earthy"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["sagu lempeng","roti sagu","papua","camilan sagu","kue kering papua"],
                "search_keywords_eng": ["sagu lempeng","sago flatbread","papua sago","traditional bread","snack"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sago%20starch%20product%20sagu%20lempeng%20from%20Maluku,ID%20feb2002.jpg?width=800"
                },
                {
                "id": "pp-005",
                "name": "Sate Ulat Sagu",
                "origin": "Papua",
                "category": "Snack",
                "description_eng": "Skewered sago palm grubs grilled over charcoal, rich in protein with a creamy, nutty taste and a crisp skin.",
                "description_ind": "Sate ulat pohon sagu khas Papua yang dibakar di atas arang, kaya protein dengan rasa gurih manis berlemak dan kulit yang renyah.",
                "ingredients_eng": ["Sago Palm Grubs","Salt","Lime Juice","Chili"],
                "ingredients_ind": ["Ulat Sagu","Garam","Jeruk Nipis","Cabai Rawit"],
                "flavor_profile": ["Savory", "Creamy", "Smoky"],
                "is_halal": false,
                "is_vegetarian": false,
                "search_keywords_ind": ["sate ulat sagu","ulat sagu","kuliner ekstrim papua","sate papua","protein tinggi"],
                "search_keywords_eng": ["sate ulat sagu","sago grubs","papua satay","traditional snack","exotic food"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20ulat%20sagu.webp?width=800"
                }
            ]
            }
        ]
    },
    {
        id: 6,
        nama: "Bali",
        ibukota: "Denpasar",
        provinsi: [
            "Bali"
        ],
        deskripsi: "Pulau Dewata, pusat pariwisata internasional dengan budaya Hindu yang kental.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "bl-001",
                "name": "Ayam Betutu",
                "origin": "Gilimanuk",
                "category": "Main Dish",
                "description_eng": "Slow-cooked whole chicken richly spiced with Balinese bumbu genep, wrapped in banana leaves and roasted until tender.",
                "description_ind": "Ayam utuh khas Gilimanuk yang dibumbui rempah genep Bali yang pekat, dibungkus pelepah pinang atau daun pisang, lalu dipanggang hingga sangat empuk dan meresap.",
                "ingredients_eng": ["Chicken","Bumbu Genep Spices","Lemongrass","Shallot","Garlic","Chili","Banana Leaf"],
                "ingredients_ind": ["Ayam Utuh","Bumbu Genep Bali","Serai","Bawang Merah","Bawang Putih","Cabai","Daun Pisang"],
                "flavor_profile": ["Spicy", "Savory", "Aromatic", "Rich"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ayam betutu","betutu bali","ayam gilimanuk","pedas bali","kuliner bali"],
                "search_keywords_eng": ["ayam betutu","betutu chicken","balinese chicken","gilimanuk","spicy roasted chicken"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20betutu%20khas%20Gilimanuk.jpg?width=800"
                },
                {
                "id": "bl-002",
                "name": "Sate Lilit",
                "origin": "Klungkung",
                "category": "Main Dish",
                "description_eng": "Minced fish or chicken seasoned with grated coconut, coconut milk, and aromatic spices, wrapped around lemongrass stalks and grilled.",
                "description_ind": "Sate khas Klungkung dari daging ikan tenggiri atau ayam cincang yang diaduk bersama kelapa parut dan santan bumbu Bali, dililitkan pada batang serai lalu dibakar.",
                "ingredients_eng": ["Minced Fish","Minced Chicken","Grated Coconut","Coconut Milk","Lemongrass Stalks","Chili"],
                "ingredients_ind": ["Daging Ikan Cincang","Daging Ayam Cincang","Kelapa Parut","Santan","Batang Serai","Cabai"],
                "flavor_profile": ["Savory", "Sweet", "Aromatic", "Smoky"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["sate lilit","sate lilit bali","sate batang serai","klungkung","sate ikan"],
                "search_keywords_eng": ["sate lilit","balinese satay","lemongrass skewers","minced satay","grilled fish satay"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Lilit.jpg?width=800"
                },
                {
                "id": "bl-003",
                "name": "Babi Guling",
                "origin": "Gianyar",
                "category": "Main Dish",
                "description_eng": "Traditional roasted suckling pig seasoned with turmeric, coriander, and herbs, celebrated for its crackling crispy skin.",
                "description_ind": "Babi panggang guling khas Gianyar berbalur bumbu rempah kunyit dan ketumbar dengan kulit luar yang super renyah dan daging yang gurih juicy.",
                "ingredients_eng": ["Pork","Bumbu Genep","Turmeric","Coriander","Lemongrass","Cassava Leaves"],
                "ingredients_ind": ["Daging Babi","Bumbu Genep","Kunyit","Ketumbar","Serai","Daun Singkong"],
                "flavor_profile": ["Crispy", "Savory", "Spicy", "Rich"],
                "is_halal": false,
                "is_vegetarian": false,
                "search_keywords_ind": ["babi guling","kulit krispi","gianyar","babi panggang bali","kuliner bali"],
                "search_keywords_eng": ["babi guling","suckling pig","crispy pork skin","gianyar","balinese pork"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Babi%20Guling.jpg?width=800"
                },
                {
                "id": "bl-004",
                "name": "Lawar",
                "origin": "Bali",
                "category": "Side Dish",
                "description_eng": "Traditional Balinese mixture of finely chopped green vegetables, grated coconut, and spices seasoned with lime juice.",
                "description_ind": "Sayuran khas Bali berupa cincangan kacang panjang, kelapa parut bakar, dan rempah harum yang diberi perasan jeruk limau segar.",
                "ingredients_eng": ["Long Beans","Grated Coconut","Chicken","Shallot","Garlic","Chili","Lime"],
                "ingredients_ind": ["Kacang Panjang","Kelapa Parut","Daging Ayam","Bawang Merah","Bawang Putih","Cabai","Jeruk Limau"],
                "flavor_profile": ["Savory", "Fresh", "Spicy", "Herbal"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["lawar","lawar bali","lawar ayam","kacang panjang kelapa","sayur bali"],
                "search_keywords_eng": ["lawar","balinese salad","long beans","bali side dish","traditional salad"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lawar.jpg?width=800"
                },
                {
                "id": "bl-005",
                "name": "Nasi Tepeng",
                "origin": "Gianyar",
                "category": "Main Dish",
                "description_eng": "Soft spiced rice cooked with rich turmeric broth, topped with shredded chicken, jackfruit, beans, and fiery sambal.",
                "description_ind": "Nasi lembek kuning gurih berempah khas Gianyar yang disajikan dengan suwiran ayam, lawar nangka, kacang panjang, dan sambal pedas menggigit.",
                "ingredients_eng": ["Rice","Turmeric","Chicken","Long Beans","Young Jackfruit","Grated Coconut","Chili"],
                "ingredients_ind": ["Beras","Kunyit","Daging Ayam","Kacang Panjang","Nangka Muda","Kelapa Parut","Cabai"],
                "flavor_profile": ["Spicy", "Savory", "Soft", "Aromatic"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["nasi tepeng","nasi gianyar","nasi lembek kuning","sarapan bali","tepeng"],
                "search_keywords_eng": ["nasi tepeng","spiced rice porridge","gianyar","bali breakfast","turmeric rice"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                }
            ]
            }
        ]
    },
    {
        id: 7,
        nama: "Nusa Tenggara",
        ibukota: "Mataram",
        provinsi: [
            "Nusa Tenggara Barat",
            "Nusa Tenggara Timur"
        ],
        deskripsi: "Gugusan pulau di timur Bali, termasuk Lombok, Sumbawa, Flores, dan Komodo.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "nt-001",
                "name": "Ayam Taliwang",
                "origin": "Lombok",
                "category": "Main Dish",
                "description_eng": "Young spring chicken grilled or fried, seasoned with fiery red chili, shrimp paste, and fresh lime juice.",
                "description_ind": "Ayam kampung muda khas Lombok yang dibakar atau digoreng, dilumuri sambal cabai merah bakar, terasi khas Lombok, dan perasan jeruk limau pedas gurih.",
                "ingredients_eng": ["Young Chicken","Red Chili","Bird's Eye Chili","Lombok Shrimp Paste","Garlic","Shallot","Lime"],
                "ingredients_ind": ["Ayam Kampung Muda","Cabai Merah","Cabai Rawit","Terasi Lombok","Bawang Putih","Bawang Merah","Jeruk Limau"],
                "flavor_profile": ["Spicy", "Savory", "Smoky", "Tangy"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ayam taliwang","taliwang lombok","ayam bakar pedas","kuliner lombok","ntb"],
                "search_keywords_eng": ["ayam taliwang","taliwang chicken","lombok grilled chicken","spicy chicken","nusa tenggara"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Taliwang.jpg?width=800"
                },
                {
                "id": "nt-002",
                "name": "Se'i Sapi",
                "origin": "Kupang",
                "category": "Main Dish",
                "description_eng": "Traditional cured beef slowly smoked over burning kosambi wood, served with fiery sambal lu'at.",
                "description_ind": "Daging sapi asap khas Kupang yang diasap perlahan di atas bara kayu kosambi selama berjam-jam, menghasilkan aroma asap harum dan disajikan dengan sambal lu'at segar.",
                "ingredients_eng": ["Beef","Kosambi Wood","Salt","Spices","Chili","Lime Leaves"],
                "ingredients_ind": ["Daging Sapi","Kayu Kosambi","Garam","Rempah Asap","Cabai Rawit","Daun Jeruk"],
                "flavor_profile": ["Smoky", "Savory", "Tender", "Aromatic"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["sei sapi","daging asap kupang","sambal luat","kuliner ntt","daging sei"],
                "search_keywords_eng": ["sei sapi","smoked beef","kupang beef","sambal luat","kosambi wood smoked"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sei%20sapi%20Kupang.jpg?width=800"
                },
                {
                "id": "nt-003",
                "name": "Plecing Kangkung",
                "origin": "Lombok",
                "category": "Side Dish",
                "description_eng": "Blanched crunchy water spinach served cold with a spicy tomato-shrimp paste sambal and fried peanuts.",
                "description_ind": "Kangkung khas Lombok bertekstur renyah yang direbus sebentar, disiram sambal tomat terasi pedas segar, serta ditaburi kacang tanah dan kedelai goreng.",
                "ingredients_eng": ["Lombok Water Spinach","Tomato","Chili","Shrimp Paste","Fried Peanuts","Soybeans","Lime"],
                "ingredients_ind": ["Kangkung Lombok","Tomat","Cabai","Terasi","Kacang Tanah Goreng","Kedelai Goreng","Jeruk Limau"],
                "flavor_profile": ["Spicy", "Fresh", "Savory", "Tangy"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["plecing kangkung","plecing lombok","sayur kangkung pedas","sambal plecing","lombok"],
                "search_keywords_eng": ["plecing kangkung","water spinach","lombok salad","spicy sambal salad","nusa tenggara"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pelecing%20kangkung.JPG?width=800"
                },
                {
                "id": "nt-004",
                "name": "Catemak Jagung",
                "origin": "East Nusa Tenggara",
                "category": "Dessert",
                "description_eng": "Hearty, comforting dish made from sweet corn, kidney beans, green beans, and pumpkin cooked until tender.",
                "description_ind": "Masakan berkuah khas Nusa Tenggara Timur dari jagung manis, kacang merah, kacang hijau, dan labu kuning yang dimasak empuk dengan rasa gurih alami.",
                "ingredients_eng": ["Sweet Corn","Kidney Beans","Mung Beans","Pumpkin","Salt","Water"],
                "ingredients_ind": ["Jagung Manis","Kacang Merah","Kacang Hijau","Labu Kuning","Garam","Air"],
                "flavor_profile": ["Savory", "Mildly Sweet", "Earthy"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["catemak jagung","jagung ntt","bubur jagung kacang","kuliner sehat ntt","catemak"],
                "search_keywords_eng": ["catemak jagung","corn stew","ntt traditional","sweet corn soup","savory porridge"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                },
                {
                "id": "nt-005",
                "name": "Kolo (Nasi Bakar Bambu)",
                "origin": "Manggarai",
                "category": "Main Dish",
                "description_eng": "Seasoned rice stuffed into green bamboo stalks lined with banana leaves and roasted over an open flame.",
                "description_ind": "Nasi gurih berempah khas Manggarai (Flores) yang dimasak di dalam bilah bambu beralaskan daun pisang dan dibakar perlahan di atas bara api.",
                "ingredients_eng": ["Rice","Coconut Milk","Shallot","Garlic","Salt","Green Bamboo","Banana Leaf"],
                "ingredients_ind": ["Beras","Santan","Bawang Merah","Bawang Putih","Garam","Bambu Hijau","Daun Pisang"],
                "flavor_profile": ["Savory", "Aromatic", "Smoky"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["kolo","nasi bakar bambu","nasi kolo flores","manggarai","kuliner adat flores"],
                "search_keywords_eng": ["kolo","bamboo roasted rice","flores rice","manggarai","traditional bamboo rice"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                }
            ]
            }
        ]
    },
    {
        id: 8,
        nama: "Maluku",
        ibukota: "Ambon",
        provinsi: [
            "Maluku",
            "Maluku Utara"
        ],
        deskripsi: "Kepulauan Rempah legendaris, kaya akan cengkeh, pala, dan budaya bahari.",
        menu: [
            {
            "total": 5,
            "data": [
                {
                "id": "ml-001",
                "name": "Ikan Kuah Pala Banda",
                "origin": "Banda Neira",
                "category": "Main Dish",
                "description_eng": "Historic Spice Islands fish soup simmered with fresh local nutmeg, turmeric, basil, and chilies.",
                "description_ind": "Sup ikan rempah legendaris dari Banda Neira yang dimasak dengan buah pala segar Maluku, kunyit, daun kemangi, dan cabai dengan kuah asam pedas harum.",
                "ingredients_eng": ["Fresh Fish","Fresh Nutmeg","Turmeric","Lemon Basil","Lime","Chili","Lemongrass"],
                "ingredients_ind": ["Ikan Segar","Buah Pala Segar","Kunyit","Daun Kemangi","Jeruk Nipis","Cabai","Serai"],
                "flavor_profile": ["Tangy", "Spicy", "Aromatic", "Fresh"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["ikan kuah pala","pala banda","banda neira","sup ikan maluku","kepulauan rempah"],
                "search_keywords_eng": ["ikan kuah pala","nutmeg fish soup","banda neira","spice islands soup","maluku fish"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                },
                {
                "id": "ml-002",
                "name": "Gohu Ikan",
                "origin": "Ternate",
                "category": "Main Dish",
                "description_eng": "Ternate-style sashimi featuring fresh yellowfin tuna tossed with lime, chilies, basil, and hot coconut oil with pili nuts.",
                "description_ind": "Sashimi khas Ternate dari potongan ikan tuna sirip kuning segar yang dicampur perasan jeruk nipis, cabai rawit, daun kemangi, disiram minyak kelapa panas dan taburan kacang kenari.",
                "ingredients_eng": ["Yellowfin Tuna","Calamansi Lime","Bird's Eye Chili","Shallots","Basil","Hot Coconut Oil","Kenari Nuts"],
                "ingredients_ind": ["Ikan Tuna Sirip Kuning","Jeruk Nipis/Cui","Cabai Rawit","Bawang Merah","Kemangi","Minyak Kelapa Panas","Kacang Kenari"],
                "flavor_profile": ["Fresh", "Tangy", "Spicy", "Nutty"],
                "is_halal": true,
                "is_vegetarian": false,
                "search_keywords_ind": ["gohu ikan","sashimi ternate","tuna ternate","gohu maluku utara","ikan mentah segar"],
                "search_keywords_eng": ["gohu ikan","ternate sashimi","raw yellowfin tuna","maluku ceviche","kenari nut tuna"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gohu%20Ikan%20in%20Ternate.jpg?width=800"
                },
                {
                "id": "ml-003",
                "name": "Nasi Lapola",
                "origin": "Ambon",
                "category": "Main Dish",
                "description_eng": "Aromatic steamed rice mixed with red tolo beans, grated coconut, and fragrant pandan leaves.",
                "description_ind": "Nasi gurih khas Ambon yang dimasak bersama kacang tolo merah, parutan kelapa muda, dan daun pandan wangi, biasa disantap dengan ikan asar dan sambal colo-colo.",
                "ingredients_eng": ["Rice","Red Tolo Beans","Grated Coconut","Pandan Leaves","Salt"],
                "ingredients_ind": ["Beras","Kacang Tolo Merah","Kelapa Parut Muda","Daun Pandan","Garam"],
                "flavor_profile": ["Savory", "Nutty", "Fragrant"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["nasi lapola","nasi kacang tolo","nasi gurih ambon","kuliner ambon","makanan pokok maluku"],
                "search_keywords_eng": ["nasi lapola","red bean coconut rice","ambon rice","maluku traditional rice","fragrant rice"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                },
                {
                "id": "ml-004",
                "name": "Sambal Colo-Colo",
                "origin": "Ambon",
                "category": "Condiment",
                "description_eng": "Signature raw relish made from diced fresh tomatoes, shallots, bird's eye chilies, sweet soy sauce, and calamansi lime.",
                "description_ind": "Sambal iris mentah segar khas Ambon yang terbuat dari potongan tomat segar, bawang merah, cabai rawit pedas, kecap manis gurih, dan perasan jeruk cui/nipis.",
                "ingredients_eng": ["Fresh Tomato","Shallots","Bird's Eye Chili","Sweet Soy Sauce","Calamansi Lime Juice","Basil"],
                "ingredients_ind": ["Tomat Segar","Bawang Merah","Cabai Rawit","Kecap Manis","Jeruk Cui/Nipis","Kemangi"],
                "flavor_profile": ["Sweet", "Spicy", "Tangy", "Fresh"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["sambal colo-colo","colo-colo","sambal kecap ambon","sambal mentah maluku","cocolan ikan bakar"],
                "search_keywords_eng": ["sambal colo-colo","colo-colo relish","ambon dipping sauce","fresh spicy dip","maluku condiment"],
                // TODO: cari foto hidangan ini di Wikimedia Commons (belum ada yang akurat)
                "image": null
                },
                {
                "id": "ml-005",
                "name": "Bagea Kenari",
                "origin": "Maluku",
                "category": "Snack",
                "description_eng": "Traditional crispy sago cookies spiced with cinnamon and nutmeg, studded with crunchy native pili nuts (kenari).",
                "description_ind": "Kue kering tradisional khas Maluku dari tepung sagu dengan perpaduan rempah kayu manis dan pala, ditaburi renyahnya kacang kenari asli Maluku.",
                "ingredients_eng": ["Sago Flour","Kenari (Pili) Nuts","Palm Sugar","Cinnamon","Nutmeg","Egg"],
                "ingredients_ind": ["Tepung Sagu","Kacang Kenari","Gula Merah","Kayu Manis","Pala","Telur"],
                "flavor_profile": ["Sweet", "Nutty", "Spiced", "Crunchy"],
                "is_halal": true,
                "is_vegetarian": true,
                "search_keywords_ind": ["bagea kenari","kue bagea","kue sagu maluku","kacang kenari","oleh-oleh ambon"],
                "search_keywords_eng": ["bagea kenari","sago cookies","nutmeg cinnamon cookie","kenari biscuits","maluku snack"],
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bagea%20kenari.JPG?width=800"
                }
            ]
            }
        ]
    },
]

export default DATA_PULAU
