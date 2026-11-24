// Gambar menu dan bentuk pulau di-hotlink dari Wikimedia Commons (lisensi bebas, https://commons.wikimedia.org)
// Peta bentuk pulau: seri "Locator Topography" dari data SRTM (PD); Sulawesi berlisensi CC BY-SA
const DATA_PULAU = [
    {
        "id": 1,    
        "nama": "Sumatera",
        "ibukota": "Medan",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/Sumatra%20Locator%20Topography.png?width=400",
        "provinsi": [
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
        "deskripsi": "Pulau terbesar keenam di dunia, kaya akan budaya Melayu, Batak, Minangkabau, dan Aceh.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "sm-001",
                        "name": "Rendang",
                        "origin": "Padang",
                        "category": "Main Dish",
                        "description_eng": "Beef slow-simmered for hours in coconut milk and a rich spice paste until the sauce caramelizes and the meat turns tender and intensely flavorful, a Minangkabau culinary heritage.",
                        "description_ind": "Daging sapi yang dimasak berjam-jam dalam santan dan bumbu rempah pekat hingga kuah mengering dan daging menjadi empuk beraroma rempah, warisan kuliner Minangkabau dari Padang.",
                        "ingredients_eng": [
                            "Beef",
                            "Coconut Milk",
                            "Toasted Coconut",
                            "Galangal",
                            "Chili",
                            "Lemongrass",
                            "Turmeric Leaves"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Santan",
                            "Kelapa Sangrai",
                            "Lengkuas",
                            "Cabai",
                            "Serai",
                            "Daun Kunyit"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Rich",
                            "Spicy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "rendang",
                            "rendang padang",
                            "masakan padang",
                            "sumatera barat",
                            "daging sapi"
                        ],
                        "search_keywords_eng": [
                            "rendang",
                            "beef rendang",
                            "padang food",
                            "west sumatera",
                            "slow cooked beef"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rendang%20daging%20sapi%20asli%20Padang.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Rendang",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://travel.kompas.com/read/2019/09/18/141826127/daripada-rebutan-rendang-datangi-3-rumah-makan-dengan-rendang-paling-enak-di",
                    "rating": 4.1,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297726-d5532355-Reviews-RM_Lamun_Ombak-Padang_West_Sumatra_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-002",
                        "name": "Sate Padang",
                        "origin": "Padang",
                        "category": "Main Dish",
                        "description_eng": "Beef satay from Padang served in a thick yellowish-brown gravy made from rice flour, turmeric, and rich offal broth, topped with crispy crackers.",
                        "description_ind": "Sate daging sapi khas Padang berkuah kental kuning kecokelatan dari tepung beras, kunyit, dan kaldu jeroan, disajikan hangat dengan taburan kerupuk renyah.",
                        "ingredients_eng": [
                            "Beef",
                            "Offal",
                            "Rice Flour",
                            "Turmeric",
                            "Shallots",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Jeroan",
                            "Tepung Beras",
                            "Kunyit",
                            "Bawang Merah",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Rich",
                            "Umami"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate padang",
                            "sate",
                            "padang",
                            "kuah kental",
                            "sumatera barat"
                        ],
                        "search_keywords_eng": [
                            "sate padang",
                            "padang satay",
                            "beef satay",
                            "thick gravy satay",
                            "west sumatera"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Padang%20Mak%20Syukur.jpg?width=800",
                    "price_range_ind": "Rp17.000 - Rp40.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/3967713/kuliner-malam-jumat-daging-empuk-dan-bumbu-khas-jadi-andalan-sate-padang-takana-juo",
                    "rating": 4.4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g294229-d3964025-Reviews-Sate_Padang_Ajo_Ramon-Jakarta_Java.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-003",
                        "name": "Pempek",
                        "origin": "Palembang",
                        "category": "Snack",
                        "description_eng": "Palembang fishcake made from ground Spanish mackerel and sago flour, boiled and served with cuko, a hot, sour, and sweet vinegar-based sauce.",
                        "description_ind": "Makanan khas Palembang dari adonan ikan tenggiri giling dan tepung sagu yang direbus, disajikan dengan cuko, kuah cuka pedas manis yang menyegarkan.",
                        "ingredients_eng": [
                            "Spanish Mackerel",
                            "Sago Flour",
                            "Garlic",
                            "Vinegar",
                            "Chili",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Ikan Tenggiri",
                            "Tepung Sagu",
                            "Bawang Putih",
                            "Cuka",
                            "Cabai",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Sour",
                            "Spicy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "pempek",
                            "pempek palembang",
                            "cuko",
                            "sumatera selatan",
                            "ikan"
                        ],
                        "search_keywords_eng": [
                            "pempek",
                            "fishcake",
                            "palembang",
                            "south sumatera",
                            "cuko sauce"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pempek%20Palembang.jpg?width=800",
                    "price_range_ind": "Rp10.000 - Rp25.000",
                    "price_source": "https://www.detik.com/sumbagsel/kuliner/d-7122988/heboh-pempek-5-biji-rp-119-ribu-berapa-harga-standar-di-palembang",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g608501-d7053623-Reviews-Pempek_Candy-Palembang_South_Sumatra_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-004",
                        "name": "Bika Ambon",
                        "origin": "Medan",
                        "category": "Dessert",
                        "description_eng": "A spongy honeycomb-textured cake scented with pandan and coconut from Medan, baked from tapioca flour, eggs, sugar, and coconut milk.",
                        "description_ind": "Kue berongga bertekstur kenyal beraroma pandan dan kelapa khas Medan, dibuat dari tepung tapioka, telur, gula, dan santan, dipanggang hingga berlubang-lubang.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Egg",
                            "Sugar",
                            "Coconut Milk",
                            "Pandan Leaf"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Telur",
                            "Gula",
                            "Santan",
                            "Daun Pandan"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Fragrant",
                            "Chewy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "bika ambon",
                            "kue medan",
                            "oleh-oleh medan",
                            "sumatera utara",
                            "kue pandan"
                        ],
                        "search_keywords_eng": [
                            "bika ambon",
                            "medan cake",
                            "honeycomb cake",
                            "north sumatera",
                            "pandan cake"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bika%20ambon%20pandan.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 3.9,
                    "rating_platform": "Foodeist (Google reviews)",
                    "rating_source": "https://foodeist.com/place/zulaikha-bika-ambon",
                    "rating_note": null
                    },
                    {
                        "id": "sm-005",
                        "name": "Mie Aceh",
                        "origin": "Aceh",
                        "category": "Main Dish",
                        "description_eng": "Thick yellow noodles from Aceh, stir-fried or served in a spiced curry gravy with beef or seafood, bean sprouts, and fiery chili.",
                        "description_ind": "Mie kuning tebal khas Aceh yang ditumis atau disajikan berkuah kari rempah dengan daging sapi atau seafood, tauge, dan cabai yang pedas menggigit.",
                        "ingredients_eng": [
                            "Yellow Noodles",
                            "Beef",
                            "Seafood",
                            "Bean Sprouts",
                            "Chili",
                            "Curry Spices"
                        ],
                        "ingredients_ind": [
                            "Mie Kuning",
                            "Daging Sapi",
                            "Seafood",
                            "Tauge",
                            "Cabai",
                            "Rempah Kari"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Savory",
                            "Rich"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie aceh",
                            "mi aceh",
                            "aceh",
                            "kari mie",
                            "goreng mie"
                        ],
                        "search_keywords_eng": [
                            "mie aceh",
                            "aceh noodles",
                            "curry noodles",
                            "spicy fried noodles",
                            "acehnese cuisine"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/MIE%202024%20P2.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.6,
                    "rating_platform": "Restaurant Guru (Google reviews)",
                    "rating_source": "https://restaurantguru.com/Mie-Aceh-Seulawah-Jakarta",
                    "rating_note": null
                    },
                    {
                        "id": "sm-006",
                        "name": "Dendeng Balado",
                        "origin": "Padang",
                        "category": "Main Dish",
                        "description_eng": "Thin slices of beef fried until crisp and coated in balado sambal made of red chilies, shallots, and palm sugar, a spicy-sweet Padang favorite.",
                        "description_ind": "Irisan daging sapi tipis yang digoreng kering lalu disiram sambal balado dari cabai merah, bawang merah, dan gula merah, hidangan Padang yang pedas, manis, dan renyah.",
                        "ingredients_eng": [
                            "Beef",
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Lime Leaves",
                            "Palm Sugar"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Daun Jeruk",
                            "Gula Merah"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "dendeng balado",
                            "padang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "dendeng balado",
                            "traditional",
                            "padang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dendeng%20balado.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Dendeng_balado",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.kompas.com/food/read/2026/05/21/123100175/7-rumah-makan-padang-enak-di-jakarta-yang-belum-banyak-orang-tau",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.co.uk/Restaurant_Review-g294229-d816623-Reviews-Restaurant_Garuda_Padang-Jakarta_Java.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-007",
                        "name": "Ayam Pop",
                        "origin": "Bukittinggi",
                        "category": "Main Dish",
                        "description_eng": "Chicken simmered in spiced coconut milk with garlic and turmeric until tender and pale, briefly fried and served with Bukittinggi-style sambal.",
                        "description_ind": "Ayam yang direbus dalam santan berbumbu bawang putih dan kunyit hingga empuk berwarna pucat, lalu digoreng sebentar dan disajikan dengan sambal khas Bukittinggi.",
                        "ingredients_eng": [
                            "Chicken",
                            "Coconut Milk",
                            "Garlic",
                            "Turmeric",
                            "Ginger",
                            "Lime Juice"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Santan",
                            "Bawang Putih",
                            "Kunyit",
                            "Jahe",
                            "Air Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam pop",
                            "bukittinggi",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ayam pop",
                            "traditional",
                            "bukittinggi"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Pop%201.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_pop",

                    "price_range_ind": "Rp10.000 - Rp35.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/4021731/kuliner-malam-jumat-rahasia-kelezatan-ayam-pop-di-family-benteng-bukittinggi",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297723-d5010644-Reviews-Family_Benteng_Indah-Bukittinggi_West_Sumatra_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-008",
                        "name": "Soto Padang",
                        "origin": "Padang",
                        "category": "Main Dish",
                        "description_eng": "A clear golden beef broth spiced with turmeric and ginger, served with rice vermicelli, sliced beef, and crispy fried potato, a Padang classic.",
                        "description_ind": "Soto berkuah kaldu daging pedas bening kekuningan dari kunyit, disajikan dengan bihun, irisan daging, dan kentang goreng renyah khas Padang.",
                        "ingredients_eng": [
                            "Beef Shank",
                            "Rice Vermicelli",
                            "Fried Potato",
                            "Turmeric",
                            "Ginger",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Daging Sandung Lamur",
                            "Bihun",
                            "Kentang Goreng",
                            "Kunyit",
                            "Jahe",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto padang",
                            "padang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "soto padang",
                            "traditional",
                            "padang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto_Padang",

                    "price_range_ind": "Rp25.000 - Rp35.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/3967713/kuliner-malam-jumat-daging-empuk-dan-bumbu-khas-jadi-andalan-sate-padang-takana-juo",
                    "rating": 4.4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.co.uk/Restaurant_Review-g294229-d4234137-Reviews-Soto_Padang_H_St_Mangkuto-Jakarta_Java.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-009",
                        "name": "Mie Celor",
                        "origin": "Palembang",
                        "category": "Main Dish",
                        "description_eng": "Thick Palembang-style noodles in a rich shrimp-and-garlic coconut milk gravy, served with bean sprouts, boiled egg, and celery.",
                        "description_ind": "Mie tebal khas Palembang disiram kuah santan kental berisi udang dan bawang putih, disajikan dengan tauge, telur rebus, dan seledri.",
                        "ingredients_eng": [
                            "Egg Noodles",
                            "Shrimp",
                            "Coconut Milk",
                            "Bean Sprouts",
                            "Boiled Egg",
                            "Garlic"
                        ],
                        "ingredients_ind": [
                            "Mie Telur",
                            "Udang",
                            "Santan",
                            "Tauge",
                            "Telur Rebus",
                            "Bawang Putih"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie celor",
                            "palembang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "mie celor",
                            "traditional",
                            "palembang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20Celor%20Palembang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie_celor",

                    "price_range_ind": "Rp40.000 - Rp60.000",
                    "price_source": "https://superapps.kompas.com/read/2951277/warung-mi-celor-dengan-cita-rasa-autentik-di-palembang-seporsinya-rp-50-ribu",
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g608501-d6415203-Reviews-Mie_Celor_26_Ilir_H_Syafe_i-Palembang_South_Sumatra_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-010",
                        "name": "Lempah Kuning",
                        "origin": "Bangka",
                        "category": "Main Dish",
                        "description_eng": "A hot-and-sour Bangka fish soup with golden turmeric broth, kandis tamarind, and fresh pineapple chunks.",
                        "description_ind": "Sup ikan asam pedas khas Bangka dengan kuah kuning dari kunyit, asam kandis, dan potongan nanas yang menyegarkan.",
                        "ingredients_eng": [
                            "Spanish Mackerel",
                            "Turmeric",
                            "Kandis Tamarind",
                            "Pineapple",
                            "Galangal",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Ikan Tenggiri",
                            "Kunyit",
                            "Asam Kandis",
                            "Nanas",
                            "Lengkuas",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "lempah kuning",
                            "bangka",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "lempah kuning",
                            "traditional",
                            "bangka"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lempah%20kuning%20stew.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Lempah_kuning",

                    "price_range_ind": "Rp35.000 - Rp65.000",
                    "price_source": "https://bangka.tribunnews.com/2023/06/08/ingin-nikmati-makanan-lempah-kuning-khas-bangka-harga-mulai-dari-rp35-ribu-ini-rekomendasinya",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g1234796-d26813456-Reviews-Lempah_Kuning_Muara-Pangkal_Pinang_Bangka_Island_Bangka_Belitung_Islands_Sumatr.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-011",
                        "name": "Ayam Tangkap",
                        "origin": "Aceh",
                        "category": "Main Dish",
                        "description_eng": "Aceh-style fried chicken pieces tossed with fragrant ruku-ruku, temurui, and pandan leaves until crisp and aromatic.",
                        "description_ind": "Potongan ayam khas Aceh yang digoreng bersama daun ruku-ruku, temurui, dan pandan hingga renyah dan sangat aromatik.",
                        "ingredients_eng": [
                            "Chicken",
                            "Ruku-ruku Leaves",
                            "Temurui Leaves",
                            "Chili",
                            "Garlic",
                            "Ginger"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Daun Ruku-ruku",
                            "Daun Temurui",
                            "Cabai",
                            "Bawang Putih",
                            "Jahe"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam tangkap",
                            "aceh",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ayam tangkap",
                            "traditional",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Masakan%20Khas%20Kota%20Aceh%20Ayam%20Tangkap.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_tangkap",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g317109-d12083660-Reviews-Ayam_Pramugari-Banda_Aceh_Aceh_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-012",
                        "name": "Gulai Tunjang",
                        "origin": "Padang",
                        "category": "Main Dish",
                        "description_eng": "A thick Padang gulai of beef tendon and meat slow-cooked in coconut milk and spices, served with cassava leaves.",
                        "description_ind": "Gulai khas Padang dari tendon dan daging sapi yang dimasak berjam-jam dengan santan dan rempah, disajikan dengan daun singkong.",
                        "ingredients_eng": [
                            "Beef Tendon",
                            "Beef",
                            "Coconut Milk",
                            "Turmeric Leaf",
                            "Cassava Leaves",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Tendon Sapi",
                            "Daging Sapi",
                            "Santan",
                            "Daun Kunyit",
                            "Daun Singkong",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "gulai tunjang",
                            "padang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "gulai tunjang",
                            "traditional",
                            "padang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gulai%20tunjang.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Gulai",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-013",
                        "name": "Sate Padang Pariaman",
                        "origin": "Pariaman",
                        "category": "Main Dish",
                        "description_eng": "Beef and offal satay from Pariaman with a thick yellow gravy of rice flour, turmeric, and chili, served with crackers.",
                        "description_ind": "Sate daging dan jeroan khas Pariaman dengan kuah kental kuning dari tepung beras, kunyit, dan cabai, disajikan dengan kerupuk.",
                        "ingredients_eng": [
                            "Beef",
                            "Offal",
                            "Rice Flour Gravy",
                            "Turmeric",
                            "Galangal",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Jeroan",
                            "Kuah Tepung Beras",
                            "Kunyit",
                            "Lengkuas",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate padang pariaman",
                            "pariaman",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate padang pariaman",
                            "traditional",
                            "pariaman"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate_Padang",

                    "price_range_ind": "Rp17.000 - Rp40.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/3967713/kuliner-malam-jumat-daging-empuk-dan-bumbu-khas-jadi-andalan-sate-padang-takana-juo",
                    "rating": 4.4,
                    "rating_platform": "Google Maps (via Wanderlog)",
                    "rating_source": "https://wanderlog.com/place/details/2813979/sate-mak-syukur",
                    "rating_note": null
                    },
                    {
                        "id": "sm-014",
                        "name": "Babi Panggang Karo",
                        "origin": "Karo",
                        "category": "Main Dish",
                        "description_eng": "Roasted pork in the style of Karo, served with a blood gravy and a fiery andaliman pepper sambal from North Tapanuli.",
                        "description_ind": "Daging babi bakar khas Karo yang disajikan dengan kuah darah dan sambal andaliman pedas khas Tapanuli Utara.",
                        "ingredients_eng": [
                            "Pork",
                            "Andaliman Pepper",
                            "Garlic",
                            "Galangal",
                            "Chili",
                            "Blood Gravy"
                        ],
                        "ingredients_ind": [
                            "Daging Babi",
                            "Andaliman",
                            "Bawang Putih",
                            "Lengkuas",
                            "Cabai",
                            "Kuah Darah"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": false,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "babi panggang karo",
                            "karo",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "babi panggang karo",
                            "traditional",
                            "karo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Se'i%20Babi%203.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Babi_panggang_karo",

                    "price_range_ind": "Rp25.000 - Rp50.000",
                    "price_source": "https://www.detik.com/sumut/kuliner/d-8486761/7-rekomendasi-bpk-paling-populer-di-medan-kuliner-non-halal-wajib-dicoba",
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297725-d4755600-Reviews-RM_OnDo_Batak_Grill-Medan_North_Sumatra_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-015",
                        "name": "Tekwan",
                        "origin": "Palembang",
                        "category": "Snack",
                        "description_eng": "Palembang fish dumplings served in a shrimp broth with mushrooms, jicama, and glass noodles.",
                        "description_ind": "Bola-bola adonan ikan khas Palembang yang disajikan dalam kuah kaldu udang berisi jamur, bengkuang, dan soun.",
                        "ingredients_eng": [
                            "Fish Balls",
                            "Tapioca Flour",
                            "Mushrooms",
                            "Jicama",
                            "Shrimp Broth",
                            "Glass Noodles"
                        ],
                        "ingredients_ind": [
                            "Bakso Ikan",
                            "Tepung Tapioka",
                            "Jamur",
                            "Bengkuang",
                            "Kaldu Udang",
                            "Soun"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tekwan",
                            "palembang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "tekwan",
                            "traditional",
                            "palembang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tekwan%20Palembang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tekwan",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 3.5,
                    "rating_platform": "Restaurant Guru (Google reviews)",
                    "rating_source": "https://restaurantguru.com/Tekwan-Model-Kak-Man-Palembang",
                    "rating_note": null
                    },
                    {
                        "id": "sm-016",
                        "name": "Es Campur Lampung",
                        "origin": "Lampung",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Lampung.",
                        "description_ind": "Hidangan Es Campur Lampung tradisional khas Lampung yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "lampung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "lampung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/7891206/7-rekomendasi-kuliner-es-campur-di-jogja-enak-dan-legendaris",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-017",
                        "name": "Kopi Khas Bengkulu",
                        "origin": "Bengkulu",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Bengkulu.",
                        "description_ind": "Hidangan Kopi Khas Bengkulu tradisional khas Bengkulu yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "bengkulu",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "bengkulu"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://www.idntimes.com/business/economy/kenapa-kopi-rp18-ribu-dan-rp50-ribu-sama-sama-laku-c1c2-01-3lbgd-kll3qt",
                    "rating": 4.7,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.co.id/Restaurant_Review-g1472388-d8492326-Reviews-Bencoolen_Coffee_House-Bengkulu_Bengkulu_Province_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-018",
                        "name": "Kerupuk Riau",
                        "origin": "Riau",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Riau.",
                        "description_ind": "Hidangan Kerupuk Riau tradisional khas Riau yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "riau",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "riau"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-019",
                        "name": "Soto Sumatera Barat",
                        "origin": "Sumatera Barat",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Sumatera Barat.",
                        "description_ind": "Hidangan Soto Sumatera Barat tradisional khas Sumatera Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "sumatera barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "sumatera barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp25.000 - Rp35.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/3967713/kuliner-malam-jumat-daging-empuk-dan-bumbu-khas-jadi-andalan-sate-padang-takana-juo",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-020",
                        "name": "Kue Basah Aceh",
                        "origin": "Aceh",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Aceh.",
                        "description_ind": "Hidangan Kue Basah Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp7.500 - Rp15.000",
                    "price_source": "https://megapolitan.kompas.com/read/2026/10/07/15152621/ketika-lemper-bertemu-dubai-chewy-cookie-di-pasar-kue-subuh-senen",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-021",
                        "name": "Sambal Sumatera Utara",
                        "origin": "Sumatera Utara",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Sumatera Utara.",
                        "description_ind": "Hidangan Sambal Sumatera Utara tradisional khas Sumatera Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "sumatera utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "sumatera utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-022",
                        "name": "Ikan Bakar Kepulauan Bangka Belitung",
                        "origin": "Kepulauan Bangka Belitung",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Kepulauan Bangka Belitung signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Kepulauan Bangka Belitung tradisional khas Kepulauan Bangka Belitung yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "kepulauan bangka belitung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "kepulauan bangka belitung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp10.000 - Rp30.000",
                    "price_source": "https://www.detik.com/sumut/kuliner/d-7221858/rekomendasi-warung-ikan-bakar-populer-di-medan-banyak-jenis-menu-ikannya",
                    "rating": 4.3,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.in/Restaurant_Review-g3737841-d10524908-Reviews-Raja_Seafood_Belitung-Tanjung_Pandan_Belitung_Island_Bangka_Belitung_Islands_Su.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-023",
                        "name": "Sate Jambi",
                        "origin": "Jambi",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Jambi marinade.",
                        "description_ind": "Hidangan Sate Jambi tradisional khas Jambi yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "jambi",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "jambi"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-024",
                        "name": "Kerupuk Kepulauan Riau",
                        "origin": "Kepulauan Riau",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Kepulauan Riau.",
                        "description_ind": "Hidangan Kerupuk Kepulauan Riau tradisional khas Kepulauan Riau yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "kepulauan riau",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "kepulauan riau"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-025",
                        "name": "Mie Kuah Kepulauan Bangka Belitung",
                        "origin": "Kepulauan Bangka Belitung",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Kepulauan Bangka Belitung.",
                        "description_ind": "Hidangan Mie Kuah Kepulauan Bangka Belitung tradisional khas Kepulauan Bangka Belitung yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "kepulauan bangka belitung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "kepulauan bangka belitung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://www.ayosemarang.com/wisata/779324805/7-warung-mie-ayam-enak-di-semarang-selalu-ramai-poll-lengkap-harga-semangkok-dan-jam-buka?page=4",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g1234796-d4358446-Reviews-Mie_Koba_Iskandar-Pangkal_Pinang_Bangka_Island_Bangka_Belitung_Islands_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-026",
                        "name": "Kerupuk Sumatera Barat",
                        "origin": "Sumatera Barat",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Sumatera Barat.",
                        "description_ind": "Hidangan Kerupuk Sumatera Barat tradisional khas Sumatera Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "sumatera barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "sumatera barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-027",
                        "name": "Mie Kuah Sumatera Selatan",
                        "origin": "Sumatera Selatan",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Sumatera Selatan.",
                        "description_ind": "Hidangan Mie Kuah Sumatera Selatan tradisional khas Sumatera Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "sumatera selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "sumatera selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp40.000 - Rp60.000",
                    "price_source": "https://superapps.kompas.com/read/2951277/warung-mi-celor-dengan-cita-rasa-autentik-di-palembang-seporsinya-rp-50-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-028",
                        "name": "Tumis Sayur Bengkulu",
                        "origin": "Bengkulu",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Bengkulu.",
                        "description_ind": "Hidangan Tumis Sayur Bengkulu tradisional khas Bengkulu yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "bengkulu",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "bengkulu"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-029",
                        "name": "Ikan Bakar Aceh",
                        "origin": "Aceh",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Aceh signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp10.000 - Rp30.000",
                    "price_source": "https://www.detik.com/sumut/kuliner/d-7221858/rekomendasi-warung-ikan-bakar-populer-di-medan-banyak-jenis-menu-ikannya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-030",
                        "name": "Sambal Kepulauan Bangka Belitung",
                        "origin": "Kepulauan Bangka Belitung",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Kepulauan Bangka Belitung.",
                        "description_ind": "Hidangan Sambal Kepulauan Bangka Belitung tradisional khas Kepulauan Bangka Belitung yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "kepulauan bangka belitung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "kepulauan bangka belitung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-031",
                        "name": "Tumis Sayur Bengkulu",
                        "origin": "Bengkulu",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Bengkulu.",
                        "description_ind": "Hidangan Tumis Sayur Bengkulu tradisional khas Bengkulu yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "bengkulu",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "bengkulu"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-032",
                        "name": "Kerupuk Jambi",
                        "origin": "Jambi",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Jambi.",
                        "description_ind": "Hidangan Kerupuk Jambi tradisional khas Jambi yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "jambi",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "jambi"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-033",
                        "name": "Kerupuk Aceh",
                        "origin": "Aceh",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Aceh.",
                        "description_ind": "Hidangan Kerupuk Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-034",
                        "name": "Sate Kepulauan Bangka Belitung",
                        "origin": "Kepulauan Bangka Belitung",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Kepulauan Bangka Belitung marinade.",
                        "description_ind": "Hidangan Sate Kepulauan Bangka Belitung tradisional khas Kepulauan Bangka Belitung yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "kepulauan bangka belitung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "kepulauan bangka belitung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-035",
                        "name": "Ikan Bakar Aceh",
                        "origin": "Aceh",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Aceh signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp10.000 - Rp30.000",
                    "price_source": "https://www.detik.com/sumut/kuliner/d-7221858/rekomendasi-warung-ikan-bakar-populer-di-medan-banyak-jenis-menu-ikannya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-036",
                        "name": "Es Campur Sumatera Utara",
                        "origin": "Sumatera Utara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Sumatera Utara.",
                        "description_ind": "Hidangan Es Campur Sumatera Utara tradisional khas Sumatera Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "sumatera utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "sumatera utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/7891206/7-rekomendasi-kuliner-es-campur-di-jogja-enak-dan-legendaris",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-037",
                        "name": "Kerupuk Kepulauan Riau",
                        "origin": "Kepulauan Riau",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Kepulauan Riau.",
                        "description_ind": "Hidangan Kerupuk Kepulauan Riau tradisional khas Kepulauan Riau yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "kepulauan riau",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "kepulauan riau"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-038",
                        "name": "Sambal Aceh",
                        "origin": "Aceh",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Aceh.",
                        "description_ind": "Hidangan Sambal Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-039",
                        "name": "Sate Aceh",
                        "origin": "Aceh",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Aceh marinade.",
                        "description_ind": "Hidangan Sate Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": 4.4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g317109-d8800771-Reviews-Sate_Matang_D_Wan-Banda_Aceh_Aceh_Sumatra.html",
                    "rating_note": null
                    },
                    {
                        "id": "sm-040",
                        "name": "Tumis Sayur Lampung",
                        "origin": "Lampung",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Lampung.",
                        "description_ind": "Hidangan Tumis Sayur Lampung tradisional khas Lampung yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "lampung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "lampung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-041",
                        "name": "Nasi Goreng Jambi",
                        "origin": "Jambi",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Jambi.",
                        "description_ind": "Hidangan Nasi Goreng Jambi tradisional khas Jambi yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "jambi",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "jambi"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp12.000 - Rp32.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/tempat-makan-nasi-goreng-kaki-lima-enak-di-sidoarjo-c1c2-00-5ynwf-k1z699",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-042",
                        "name": "Tumis Sayur Bengkulu",
                        "origin": "Bengkulu",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Bengkulu.",
                        "description_ind": "Hidangan Tumis Sayur Bengkulu tradisional khas Bengkulu yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "bengkulu",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "bengkulu"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-043",
                        "name": "Nasi Goreng Sumatera Utara",
                        "origin": "Sumatera Utara",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Sumatera Utara.",
                        "description_ind": "Hidangan Nasi Goreng Sumatera Utara tradisional khas Sumatera Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "sumatera utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "sumatera utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp12.000 - Rp32.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/tempat-makan-nasi-goreng-kaki-lima-enak-di-sidoarjo-c1c2-00-5ynwf-k1z699",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-044",
                        "name": "Bubur Ayam Lampung",
                        "origin": "Lampung",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Lampung.",
                        "description_ind": "Hidangan Bubur Ayam Lampung tradisional khas Lampung yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "lampung",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "lampung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6151993/jualan-sambil-sedekah-pedagang-ini-jual-bubur-ayam-seporsi-rp-6-ribu",
                    "rating": 4.5,
                    "rating_platform": "Google rating (via Restaurant Guru)",
                    "rating_source": "https://restaurantguru.com/Bubur-Ayam-Acung-Jr-Bandar-Lampung",
                    "rating_note": null
                    },
                    {
                        "id": "sm-045",
                        "name": "Kopi Khas Jambi",
                        "origin": "Jambi",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Jambi.",
                        "description_ind": "Hidangan Kopi Khas Jambi tradisional khas Jambi yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "jambi",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "jambi"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://www.idntimes.com/business/economy/kenapa-kopi-rp18-ribu-dan-rp50-ribu-sama-sama-laku-c1c2-01-3lbgd-kll3qt",
                    "rating": 4.8,
                    "rating_platform": "Restaurant Guru (Google reviews)",
                    "rating_source": "https://restaurantguru.com/Waroeng-kopi-Jambi",
                    "rating_note": null
                    },
                    {
                        "id": "sm-046",
                        "name": "Es Campur Aceh",
                        "origin": "Aceh",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Aceh.",
                        "description_ind": "Hidangan Es Campur Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/7891206/7-rekomendasi-kuliner-es-campur-di-jogja-enak-dan-legendaris",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-047",
                        "name": "Sate Kepulauan Riau",
                        "origin": "Kepulauan Riau",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Kepulauan Riau marinade.",
                        "description_ind": "Hidangan Sate Kepulauan Riau tradisional khas Kepulauan Riau yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "kepulauan riau",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "kepulauan riau"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-048",
                        "name": "Kerupuk Aceh",
                        "origin": "Aceh",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Aceh.",
                        "description_ind": "Hidangan Kerupuk Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-049",
                        "name": "Kerupuk Sumatera Barat",
                        "origin": "Sumatera Barat",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Sumatera Barat.",
                        "description_ind": "Hidangan Kerupuk Sumatera Barat tradisional khas Sumatera Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "sumatera barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "sumatera barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sm-050",
                        "name": "Kerupuk Aceh",
                        "origin": "Aceh",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Aceh.",
                        "description_ind": "Hidangan Kerupuk Aceh tradisional khas Aceh yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "aceh",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "aceh"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp3.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "nama": "Jawa",
        "ibukota": "Jakarta",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/Java%20Locator%20Topography.png?width=400",
        "provinsi": [
            "DKI Jakarta",
            "Banten",
            "Jawa Barat",
            "Jawa Tengah",
            "DI Yogyakarta",
            "Jawa Timur"
        ],
        "deskripsi": "Pulau terpadat di Indonesia, pusat pemerintahan dan kebudayaan nasional.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "jw-001",
                        "name": "Lumpia Semarang",
                        "origin": "Semarang",
                        "category": "Snack",
                        "description_eng": "Crispy or soft spring rolls filled with sautéed bamboo shoots, minced chicken or prawns, and eggs.",
                        "description_ind": "Lumpia khas Semarang berisi rebung tumis gurih, daging ayam atau udang cincang, dan telur, disajikan basah atau goreng renyah.",
                        "ingredients_eng": [
                            "Bamboo Shoots",
                            "Chicken",
                            "Shrimp",
                            "Egg",
                            "Pastry Wrapper"
                        ],
                        "ingredients_ind": [
                            "Rebung",
                            "Daging Ayam",
                            "Udang",
                            "Telur",
                            "Kulit Lumpia"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Savory"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "lumpia semarang",
                            "lumpia",
                            "rebung",
                            "semarang",
                            "gorengan"
                        ],
                        "search_keywords_eng": [
                            "spring roll",
                            "bamboo shoots",
                            "semarang",
                            "lumpia",
                            "snack"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Makanan%20Lumpia%20Rebung%20Khas%20Semarang%20Jateng%20Indonesia.jpg?width=800",
                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5936766/lumpia-semarang-harganya-rp-18-ribu-per-buah-netizen-sebut-mahal",
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.co.id/Restaurant_Review-g297712-d3155351-Reviews-Loenpia_Gang_Lombok-Semarang_Central_Java_Java.html",
                    "rating_note": "Loenpia Gang Lombok, Semarang - 500 ulasan, peringkat 4.2/5"
                    },
                    {
                        "id": "jw-002",
                        "name": "Nasi Liwet Solo",
                        "origin": "Surakarta",
                        "category": "Main Dish",
                        "description_eng": "Fragrant coconut rice served with shredded spiced chicken, chayote stew, boiled egg, and thick coconut cream sauce.",
                        "description_ind": "Nasi gurih beraroma kelapa khas Solo yang disajikan bersama suwiran ayam opor, sayur labu siam pedas, telur pindang, dan siraman areh kental.",
                        "ingredients_eng": [
                            "Rice",
                            "Coconut Milk",
                            "Chicken",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Santan",
                            "Ayam",
                            "Serai",
                            "Daun Jeruk",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Rich",
                            "Umami"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi liwet solo",
                            "nasi liwet",
                            "solo",
                            "surakarta",
                            "sayur labu siam"
                        ],
                        "search_keywords_eng": [
                            "rice",
                            "coconut rice",
                            "solo",
                            "surakarta",
                            "nasi liwet"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20Liwet%20Solo.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_Liwet",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://travel.tribunnews.com/kuliner/147131/5-nasi-liwet-di-solo-yang-buka-sore-sampai-malam-harga-mulai-rp-10000",
                    "rating": 3.4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297713-d3252632-Reviews-Nasi_Liwet_Bu_Wongso_Lemu-Solo_Central_Java_Java.html",
                    "rating_note": "Nasi Liwet Bu Wongso Lemu, Solo - 371 ulasan, peringkat 3.4/5"
                    },
                    {
                        "id": "jw-003",
                        "name": "Gudeg",
                        "origin": "Yogyakarta",
                        "category": "Main Dish",
                        "description_eng": "Traditional Yogyakarta dish of young jackfruit slow-cooked in palm sugar and coconut milk, served with chicken, egg, and spicy krecek.",
                        "description_ind": "Olahan nangka muda khas Yogyakarta yang dimasak perlahan dengan gula kelapa dan santan, disajikan bersama ayam kampung, telur, dan sambal goreng krecek gurih pedas.",
                        "ingredients_eng": [
                            "Young Jackfruit",
                            "Palm Sugar",
                            "Coconut Milk",
                            "Chicken",
                            "Egg",
                            "Cattle Skin (Krecek)"
                        ],
                        "ingredients_ind": [
                            "Nangka Muda",
                            "Gula Merah",
                            "Santan",
                            "Ayam",
                            "Telur",
                            "Krecek"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Savory",
                            "Rich"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "gudeg",
                            "gudeg jogja",
                            "nangka muda",
                            "yogyakarta",
                            "jogja"
                        ],
                        "search_keywords_eng": [
                            "gudeg",
                            "jackfruit",
                            "yogyakarta",
                            "jogja",
                            "traditional stew"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gudeg%20Sagan%20Yogyakarta.jpg?width=800",
                    "price_range_ind": "Rp15.000 - Rp50.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8290307/anti-getok-harga-ini-5-harga-nasi-gudeg-populer-di-jogja",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g13219594-d3156129-Reviews-Gudeg_Yu_Djum-Caturtunggal_Yogyakarta_Region_Java.html",
                    "rating_note": "Gudeg Yu Djum, Caturtunggal Yogyakarta - 1.270 ulasan, peringkat 4.0/5"
                    },
                    {
                        "id": "jw-004",
                        "name": "Rawon",
                        "origin": "Surabaya",
                        "category": "Main Dish",
                        "description_eng": "East Javanese rich aromatic beef soup with a deep black broth made from keluak nuts, served with bean sprouts, salted egg, and sambal.",
                        "description_ind": "Sup daging sapi khas Jawa Timur berkuah hitam pekat aromatik dari biji keluak, disajikan bersama tauge pendek segar, telur asin, dan sambal terasi.",
                        "ingredients_eng": [
                            "Beef",
                            "Keluak Nut",
                            "Lemongrass",
                            "Bean Sprouts",
                            "Salted Egg",
                            "Shallot"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Keluak",
                            "Serai",
                            "Tauge Pendek",
                            "Telur Asin",
                            "Bawang Merah"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Earthy",
                            "Rich"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "rawon",
                            "rawon surabaya",
                            "sup hitam",
                            "daging sapi",
                            "keluak"
                        ],
                        "search_keywords_eng": [
                            "rawon",
                            "black soup",
                            "beef soup",
                            "surabaya",
                            "east java"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bumbu%20Rawon.jpg?width=800",
                    "price_range_ind": "Rp20.000 - Rp40.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/jtm-6-kuliner-rawon-di-sekitar-terminal-bungurasih-kuahnya-mantap-c1c2-01-n55lj-hl1gz4",
                    "rating": 4.2,
                    "rating_platform": "Google Maps (agregasi via caribisnis.id)",
                    "rating_source": "https://caribisnis.id/restoran/surabaya/genteng/rawon-setan-embong-malang-gent-imp1",
                    "rating_note": "Rawon Setan Embong Malang, Surabaya - rating 4.2 (9.924 ulasan); URL Google Maps gerai: https://www.google.com/maps/search/Rawon+Setan+%28Embong+Malang%29%2C+Surabaya%2C+East+Java%2C+Indonesia"
                    },
                    {
                        "id": "jw-005",
                        "name": "Soto Lamongan",
                        "origin": "Lamongan",
                        "category": "Main Dish",
                        "description_eng": "Turmeric-yellow chicken soup packed with shredded chicken, glass noodles, boiled egg, and a signature savory koya powder made from garlic and prawn crackers.",
                        "description_ind": "Soto ayam berkuah kuning kunyit khas Lamongan dengan suwiran ayam, soun, telur rebus, dan taburan bubuk koya gurih dari kerupuk udang dan bawang putih goreng.",
                        "ingredients_eng": [
                            "Chicken",
                            "Glass Noodles",
                            "Egg",
                            "Turmeric",
                            "Garlic",
                            "Koya Powder"
                        ],
                        "ingredients_ind": [
                            "Daging Ayam",
                            "Soun",
                            "Telur Rebus",
                            "Kunyit",
                            "Bawang Putih",
                            "Bubuk Koya"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Aromatic",
                            "Light"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto lamongan",
                            "soto ayam",
                            "koya",
                            "lamongan",
                            "jawa timur"
                        ],
                        "search_keywords_eng": [
                            "soto lamongan",
                            "chicken soup",
                            "koya",
                            "lamongan",
                            "yellow soup"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mangrove%2C%20Lamongan%20Regency%2C%20East%20Java%2C%20Indonesia%202.jpg?width=800",
                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://style.tribunnews.com/life/376017/libur-sekolah-di-palembang-yuk-berburu-soto-lamongan-bude-yang-legendaris",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297715-d7041977-Reviews-Soto_Ayam_Lamongan_Cak_Har-Surabaya_East_Java_Java.html",
                    "rating_note": "Soto Ayam Lamongan Cak Har, Surabaya - 289 ulasan, peringkat 4.0/5"
                    },
                    {
                        "id": "jw-006",
                        "name": "Tahu Tek",
                        "origin": "Surabaya",
                        "category": "Main Dish",
                        "description_eng": "Tofu, egg, potato, and bean sprouts drizzled with peanut sauce and sweet soy sauce, served with rice cake, a Surabaya street food.",
                        "description_ind": "Tahu, telur, kentang, dan tauge yang dipotong lalu disiram bumbu kacang dan kecap manis khas Surabaya, disajikan dengan lontong.",
                        "ingredients_eng": [
                            "Tofu",
                            "Egg",
                            "Potato",
                            "Bean Sprouts",
                            "Peanut Sauce",
                            "Sweet Soy Sauce"
                        ],
                        "ingredients_ind": [
                            "Tahu",
                            "Telur",
                            "Kentang",
                            "Tauge",
                            "Bumbu Kacang",
                            "Kecap Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tahu tek",
                            "surabaya",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "tahu tek",
                            "traditional",
                            "surabaya"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tahu%20Th%C3%A8g%20Tahu%20Bumbu%20Lonthong%20Bumbu%20atau%20Tahu%20Tek%20Tahu%20Telor.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tahu_tek",

                    "price_range_ind": "Rp20.000 - Rp25.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-4833511/uenake-poll-5-tahu-tek-legendaris-ini-wajib-dicicipi-saat-ke-surabaya",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297715-d8758332-Reviews-Tahu_Telur_Pak_Jayen-Surabaya_East_Java_Java.html",
                    "rating_note": "Tahu Telur Pak Jayen, Surabaya - 60 ulasan, peringkat 3.9/5"
                    },
                    {
                        "id": "jw-007",
                        "name": "Rujak Cingur",
                        "origin": "Surabaya",
                        "category": "Main Dish",
                        "description_eng": "A Surabaya salad of beef snout, rice cake, fruits, and vegetables dressed in a sweet-spicy petis peanut sauce.",
                        "description_ind": "Salad khas Surabaya berisi cingur (moncong sapi), lontong, buah, dan sayuran yang disiram bumbu petis kacang pedas manis.",
                        "ingredients_eng": [
                            "Beef Snout",
                            "Rice Cake",
                            "Vegetables",
                            "Petis Sauce",
                            "Peanut Sauce",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Cingur Sapi",
                            "Lontong",
                            "Sayuran",
                            "Bumbu Petis",
                            "Bumbu Kacang",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "rujak cingur",
                            "surabaya",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "rujak cingur",
                            "traditional",
                            "surabaya"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rujak%20Cingur%20khas%20Jawa%20Timur%2CIndonesia%20dengan%20kombinasi%20sayuran%20dan%20kerupuk%20sebagai%20pelengkap.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Rujak_cingur",

                    "price_range_ind": "Rp25.000 - Rp50.000",
                    "price_source": "https://www.kompas.com/food/read/2026/01/30/073100375/rekomendasi-rujak-cingur-legendaris-surabaya-yang-wajib-dicoba",
                    "rating": 3.6,
                    "rating_platform": "Restaurant Guru",
                    "rating_source": "https://restaurantguru.com/Rujak-Cingur-Ahmad-Jais-Surabaya",
                    "rating_note": "Rujak Cingur Ahmad Jais, Surabaya - 480 ulasan, rating 3.6/5"
                    },
                    {
                        "id": "jw-008",
                        "name": "Tongseng",
                        "origin": "Solo",
                        "category": "Main Dish",
                        "description_eng": "Mutton and offal with cabbage and tomato, simmered in spiced coconut milk and sweet soy sauce in the Solo style.",
                        "description_ind": "Potongan kambing dengan jeroan, kol, dan tomat yang dimasak berempah dalam santan dan kecap manis khas Solo.",
                        "ingredients_eng": [
                            "Mutton",
                            "Cabbage",
                            "Coconut Milk",
                            "Sweet Soy Sauce",
                            "Galangal",
                            "Tomato"
                        ],
                        "ingredients_ind": [
                            "Daging Kambing",
                            "Kol",
                            "Santan",
                            "Kecap Manis",
                            "Lengkuas",
                            "Tomat"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tongseng",
                            "solo",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "tongseng",
                            "traditional",
                            "solo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tongseng%20Sapi.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tongseng",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8673689/5-tongseng-ayam-yang-mlekoh-sedap-di-jakarta-mulai-rp23-ribuan",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297713-d7814985-Reviews-Sate_Kambing_ASLI_Tambak_Segaran-Solo_Central_Java_Java.html",
                    "rating_note": "Sate Kambing & Asli Tambak Segaran, Solo (gerai terkenal tongseng kambing) - 47 ulasan, peringkat 4.0/5"
                    },
                    {
                        "id": "jw-009",
                        "name": "Sate Klatak",
                        "origin": "Bantul",
                        "category": "Main Dish",
                        "description_eng": "Bantul-style goat satay on large skewers, grilled simply with soy sauce and garlic, served alongside a clear gulai broth.",
                        "description_ind": "Sate kambing khas Bantul yang ditusuk besar dan dibakar sederhana hanya berbumbu kecap dan bawang putih, disajikan dengan gulai bening.",
                        "ingredients_eng": [
                            "Goat Meat",
                            "Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Sweet Soy Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Daging Kambing",
                            "Kecap",
                            "Bawang Putih",
                            "Ketumbar",
                            "Kecap Manis",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate klatak",
                            "bantul",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate klatak",
                            "traditional",
                            "bantul"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20klatak%2020170818%20Yogyakarta.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate_klathak",

                    "price_range_ind": "Rp30.000 - Rp35.000",
                    "price_source": "https://jogja.tribunnews.com/diy/1222434/4-rekomendasi-sate-klatak-favorit-di-bantul-yogyakarta",
                    "rating": 3.8,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g2304084-d17451037-Reviews-Sate_Klathak_Pak_Pong-Bantul_Yogyakarta_Region_Java.html",
                    "rating_note": "Sate Klathak Pak Pong, Bantul - 24 ulasan, peringkat 3.8/5"
                    },
                    {
                        "id": "jw-010",
                        "name": "Mangut Lele",
                        "origin": "Yogyakarta",
                        "category": "Main Dish",
                        "description_eng": "Catfish simmered in a spicy coconut milk gravy with candlenut and turmeric, topped with basil leaves, a Yogyakarta favorite.",
                        "description_ind": "Lele yang dimasak dalam kuah santan pedas berrempah kemiri dan kunyit, disajikan dengan daun kemangi khas Yogyakarta.",
                        "ingredients_eng": [
                            "Catfish",
                            "Coconut Milk",
                            "Candlenut",
                            "Turmeric",
                            "Chili",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Lele",
                            "Santan",
                            "Kemiri",
                            "Kunyit",
                            "Cabai",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mangut lele",
                            "yogyakarta",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "mangut lele",
                            "traditional",
                            "yogyakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/9.%20Mangut%20Lele%201.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mangut_lele",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.idntimes.com/food/dining-guide/fatiya-1/11-warung-mangut-lele-terenak-di-jogja-exp-c1c2",
                    "rating": 4.3,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g2304084-d7790777-Reviews-Gudeg_Pawon_Mangut_Lele_Mbah_Marto-Bantul_Yogyakarta_Region_Java.html",
                    "rating_note": "Gudeg Pawon & Mangut Lele Mbah Marto, Bantul - 83 ulasan, peringkat 4.3/5"
                    },
                    {
                        "id": "jw-011",
                        "name": "Garang Asem",
                        "origin": "Kudus",
                        "category": "Main Dish",
                        "description_eng": "Free-range chicken in a sour-spicy tamarind and turmeric broth, wrapped in banana leaf and steamed, a Kudus specialty.",
                        "description_ind": "Ayam kampung khas Kudus berkuah asam pedas dari asam jawa dan kunyit, dibungkus daun pisang lalu dikukus.",
                        "ingredients_eng": [
                            "Free-range Chicken",
                            "Tamarind",
                            "Turmeric",
                            "Banana Leaf",
                            "Basil",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Ayam Kampung",
                            "Asam Jawa",
                            "Kunyit",
                            "Daun Pisang",
                            "Kemangi",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "garang asem",
                            "kudus",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "garang asem",
                            "traditional",
                            "kudus"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Garang%20asem%20Pj.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Garang_asem",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g1966182-d3853333-Reviews-Rm_Sari_Rasa-Kudus_Central_Java_Java.html",
                    "rating_note": "RM. Sari Rasa, Kudus (dikenal untuk garang asem) - 66 ulasan, peringkat 4.2/5"
                    },
                    {
                        "id": "jw-012",
                        "name": "Empal Gentong",
                        "origin": "Cirebon",
                        "category": "Main Dish",
                        "description_eng": "A Cirebon beef and offal gulai cooked in a clay pot (gentong) with coconut milk and fiery turmeric spices.",
                        "description_ind": "Gulai daging dan jeroan khas Cirebon yang dimasak dalam gentong tanah liat dengan santan dan rempah kunyit pedas.",
                        "ingredients_eng": [
                            "Beef",
                            "Offal",
                            "Coconut Milk",
                            "Turmeric",
                            "Chili",
                            "Chives"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Jeroan",
                            "Santan",
                            "Kunyit",
                            "Cabai",
                            "Kucai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "empal gentong",
                            "cirebon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "empal gentong",
                            "traditional",
                            "cirebon"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%22Arya%22%20%EA%A6%B2%EA%A6%BC%EA%A6%A9%EA%A7%80%EA%A6%A5%EA%A6%AD%EA%A7%80%EA%A6%92%EA%A6%BC%EA%A6%A4%EA%A7%80%EA%A6%9B%EA%A6%BA%EA%A6%B4%EA%A6%81%20Indonesian%20soup%20empal%20gentong.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Empal_gentong",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7880057/gurih-berempah-empal-gentong-dudu-musuh-rp-15-ribu-seporsi",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297707-d6365993-Reviews-Empal_Gentong_Haji_Apud-Cirebon_West_Java_Java.html",
                    "rating_note": "Empal Gentong Haji Apud, Cirebon - 529 ulasan, peringkat 4.0/5"
                    },
                    {
                        "id": "jw-013",
                        "name": "Batagor",
                        "origin": "Bandung",
                        "category": "Snack",
                        "description_eng": "Bandung-style fried tofu and fish dumplings covered in a sweet-spicy peanut sauce, served with cucumber and soy sauce.",
                        "description_ind": "Tahu dan bakso ikan goreng khas Bandung yang disiram bumbu kacang pedas manis, disajikan dengan timun dan kecap.",
                        "ingredients_eng": [
                            "Tofu",
                            "Fish Paste",
                            "Potato",
                            "Peanut Sauce",
                            "Sweet Soy Sauce",
                            "Cucumber"
                        ],
                        "ingredients_ind": [
                            "Tahu",
                            "Tenggiri",
                            "Kentang",
                            "Bumbu Kacang",
                            "Kecap Manis",
                            "Timun"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "batagor",
                            "bandung",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "batagor",
                            "traditional",
                            "bandung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Batagor%20dan%20Bumbu%20Kacang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Batagor",

                    "price_range_ind": "Rp6.000 - Rp15.000",
                    "price_source": "https://travel.tribunnews.com/kuliner/145004/harga-batagor-kahuripan-bandung-2026-menu-mulai-rp-6000",
                    "rating": 3.7,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297704-d2452361-Reviews-Batagor_Kingsley-Bandung_West_Java_Java.html",
                    "rating_note": "Batagor Kingsley, Bandung - 320 ulasan, peringkat 3.7/5"
                    },
                    {
                        "id": "jw-014",
                        "name": "Seblak",
                        "origin": "Bandung",
                        "category": "Snack",
                        "description_eng": "A Bandung specialty of wet crackers cooked in a spicy kencur-fragrant sauce with egg and chicken feet.",
                        "description_ind": "Masakan khas Bandung dari kerupuk mentarang yang dimasak pedas beraroma kencur bersama telur dan ceker ayam.",
                        "ingredients_eng": [
                            "Wet Crackers",
                            "Egg",
                            "Chicken Feet",
                            "Garlic",
                            "Kencur",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Kerupuk Mentarang",
                            "Telur",
                            "Ceker Ayam",
                            "Bawang Putih",
                            "Kencur",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "seblak",
                            "bandung",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "seblak",
                            "traditional",
                            "bandung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Seblak%202.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Seblak",

                    "price_range_ind": "Rp7.000 - Rp15.000",
                    "price_source": "https://lampung.tribunnews.com/2021/03/03/kuliner-bandung-5-rekomendasi-tempat-makan-seblak-yang-wajib-kamu-coba-harga-mulai-rp-7-ribu",
                    "rating": 4.7,
                    "rating_platform": "Restaurant Guru",
                    "rating_source": "https://es.restaurantguru.com/Seblak-SR-Bandung",
                    "rating_note": "Seblak SR, Bandung - 34 ulasan, rating 4.7/5"
                    },
                    {
                        "id": "jw-015",
                        "name": "Kerak Telor",
                        "origin": "Jakarta",
                        "category": "Snack",
                        "description_eng": "A Betawi glutinous rice omelet cooked over a clay griddle, topped with duck egg, dried shrimp, and serundeng coconut flakes.",
                        "description_ind": "Omlet beras ketan khas Betawi yang dipanggang di atas wajan tanah liat, dilapisi telur bebek, ebi kering, dan serundeng.",
                        "ingredients_eng": [
                            "Glutinous Rice",
                            "Duck Egg",
                            "Dried Shrimp (Ebi)",
                            "Fried Shallots",
                            "Serundeng",
                            "Coconut"
                        ],
                        "ingredients_ind": [
                            "Beras Ketan",
                            "Telur Bebek",
                            "Ebi",
                            "Bawang Goreng",
                            "Serundeng",
                            "Kelapa"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "kerak telor",
                            "jakarta",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "kerak telor",
                            "traditional",
                            "jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kerak%20Telor.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerak_telor",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g294229-d8609124-Reviews-Kerak_Telor_Menteng_Bpk_Abdurrachman-Jakarta_Java.html",
                    "rating_note": "Kerak Telor Menteng Bpk. Abdurrachman, Jakarta - 5 ulasan, peringkat 4.2/5"
                    },
                    {
                        "id": "jw-016",
                        "name": "Sambal DKI Jakarta",
                        "origin": "DKI Jakarta",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from DKI Jakarta.",
                        "description_ind": "Hidangan Sambal DKI Jakarta tradisional khas DKI Jakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "dki jakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "dki jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-017",
                        "name": "Bubur Ayam Jawa Barat",
                        "origin": "Jawa Barat",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Jawa Barat.",
                        "description_ind": "Hidangan Bubur Ayam Jawa Barat tradisional khas Jawa Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "jawa barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "jawa barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8520340/dolar-as-sentuh-rp-18-000-netizen-spill-5-jajanan-enak-dengan-harga-setara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-018",
                        "name": "Bubur Ayam Jawa Timur",
                        "origin": "Jawa Timur",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Jawa Timur.",
                        "description_ind": "Hidangan Bubur Ayam Jawa Timur tradisional khas Jawa Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "jawa timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "jawa timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8520340/dolar-as-sentuh-rp-18-000-netizen-spill-5-jajanan-enak-dengan-harga-setara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-019",
                        "name": "Sate DI Yogyakarta",
                        "origin": "DI Yogyakarta",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local DI Yogyakarta marinade.",
                        "description_ind": "Hidangan Sate DI Yogyakarta tradisional khas DI Yogyakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "di yogyakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "di yogyakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.idntimes.com/food/dining-guide/5-kuliner-sate-ayam-endes-di-yogyakarta-seporsi-gak-sampai-rp-30-000-01-1hkcy-my3mwn",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-020",
                        "name": "Sambal Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Tengah.",
                        "description_ind": "Hidangan Sambal Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-021",
                        "name": "Tumis Sayur DI Yogyakarta",
                        "origin": "DI Yogyakarta",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from DI Yogyakarta.",
                        "description_ind": "Hidangan Tumis Sayur DI Yogyakarta tradisional khas DI Yogyakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "di yogyakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "di yogyakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-022",
                        "name": "Nasi Goreng DI Yogyakarta",
                        "origin": "DI Yogyakarta",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to DI Yogyakarta.",
                        "description_ind": "Hidangan Nasi Goreng DI Yogyakarta tradisional khas DI Yogyakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "di yogyakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "di yogyakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://superapps.kompas.com/read/3014009/eks-chef-restoran-mewah-jualan-nasi-goreng-pakai-gerobak-harga-seporsi-cuma-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-023",
                        "name": "Kue Basah Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Jawa Tengah.",
                        "description_ind": "Hidangan Kue Basah Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp5.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5957317/4-tempat-beli-kue-subuh-di-jakarta-harga-mulai-rp-1-000",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-024",
                        "name": "Ayam Bakar DI Yogyakarta",
                        "origin": "DI Yogyakarta",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from DI Yogyakarta.",
                        "description_ind": "Hidangan Ayam Bakar DI Yogyakarta tradisional khas DI Yogyakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "di yogyakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "di yogyakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-025",
                        "name": "Sambal Banten",
                        "origin": "Banten",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Banten.",
                        "description_ind": "Hidangan Sambal Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-026",
                        "name": "Es Campur DKI Jakarta",
                        "origin": "DKI Jakarta",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from DKI Jakarta.",
                        "description_ind": "Hidangan Es Campur DKI Jakarta tradisional khas DKI Jakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "dki jakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "dki jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6967038/slurpp-5-es-campur-di-jakarta-ini-kelezatannya-melegenda",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-027",
                        "name": "Sate Jawa Barat",
                        "origin": "Jawa Barat",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Jawa Barat marinade.",
                        "description_ind": "Hidangan Sate Jawa Barat tradisional khas Jawa Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "jawa barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "jawa barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.idntimes.com/food/dining-guide/5-kuliner-sate-ayam-endes-di-yogyakarta-seporsi-gak-sampai-rp-30-000-01-1hkcy-my3mwn",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-028",
                        "name": "Bubur Ayam Banten",
                        "origin": "Banten",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Banten.",
                        "description_ind": "Hidangan Bubur Ayam Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8520340/dolar-as-sentuh-rp-18-000-netizen-spill-5-jajanan-enak-dengan-harga-setara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-029",
                        "name": "Sambal Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Tengah.",
                        "description_ind": "Hidangan Sambal Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-030",
                        "name": "Kerupuk DKI Jakarta",
                        "origin": "DKI Jakarta",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from DKI Jakarta.",
                        "description_ind": "Hidangan Kerupuk DKI Jakarta tradisional khas DKI Jakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "dki jakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "dki jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-031",
                        "name": "Bubur Ayam Jawa Timur",
                        "origin": "Jawa Timur",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Jawa Timur.",
                        "description_ind": "Hidangan Bubur Ayam Jawa Timur tradisional khas Jawa Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "jawa timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "jawa timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8520340/dolar-as-sentuh-rp-18-000-netizen-spill-5-jajanan-enak-dengan-harga-setara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-032",
                        "name": "Mie Kuah Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Jawa Tengah.",
                        "description_ind": "Hidangan Mie Kuah Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7996459/nikmatnya-mie-ayam-pak-loso-di-menteng-harga-hanya-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-033",
                        "name": "Sambal Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Tengah.",
                        "description_ind": "Hidangan Sambal Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-034",
                        "name": "Nasi Goreng Banten",
                        "origin": "Banten",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Banten.",
                        "description_ind": "Hidangan Nasi Goreng Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://superapps.kompas.com/read/3014009/eks-chef-restoran-mewah-jualan-nasi-goreng-pakai-gerobak-harga-seporsi-cuma-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-035",
                        "name": "Nasi Goreng Jawa Timur",
                        "origin": "Jawa Timur",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Jawa Timur.",
                        "description_ind": "Hidangan Nasi Goreng Jawa Timur tradisional khas Jawa Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "jawa timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "jawa timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://superapps.kompas.com/read/3014009/eks-chef-restoran-mewah-jualan-nasi-goreng-pakai-gerobak-harga-seporsi-cuma-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-036",
                        "name": "Sambal Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Tengah.",
                        "description_ind": "Hidangan Sambal Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-037",
                        "name": "Sambal Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Tengah.",
                        "description_ind": "Hidangan Sambal Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-038",
                        "name": "Sambal DKI Jakarta",
                        "origin": "DKI Jakarta",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from DKI Jakarta.",
                        "description_ind": "Hidangan Sambal DKI Jakarta tradisional khas DKI Jakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "dki jakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "dki jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-039",
                        "name": "Ayam Bakar Banten",
                        "origin": "Banten",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Banten.",
                        "description_ind": "Hidangan Ayam Bakar Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-040",
                        "name": "Kue Basah Banten",
                        "origin": "Banten",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Banten.",
                        "description_ind": "Hidangan Kue Basah Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp5.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5957317/4-tempat-beli-kue-subuh-di-jakarta-harga-mulai-rp-1-000",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-041",
                        "name": "Kerupuk Jawa Timur",
                        "origin": "Jawa Timur",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Jawa Timur.",
                        "description_ind": "Hidangan Kerupuk Jawa Timur tradisional khas Jawa Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "jawa timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "jawa timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-042",
                        "name": "Kerupuk Banten",
                        "origin": "Banten",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Banten.",
                        "description_ind": "Hidangan Kerupuk Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-043",
                        "name": "Kopi Khas Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Jawa Tengah.",
                        "description_ind": "Hidangan Kopi Khas Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-044",
                        "name": "Tumis Sayur Banten",
                        "origin": "Banten",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Banten.",
                        "description_ind": "Hidangan Tumis Sayur Banten tradisional khas Banten yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "banten",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "banten"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-045",
                        "name": "Sambal Jawa Timur",
                        "origin": "Jawa Timur",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Timur.",
                        "description_ind": "Hidangan Sambal Jawa Timur tradisional khas Jawa Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-046",
                        "name": "Sate DI Yogyakarta",
                        "origin": "DI Yogyakarta",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local DI Yogyakarta marinade.",
                        "description_ind": "Hidangan Sate DI Yogyakarta tradisional khas DI Yogyakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "di yogyakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "di yogyakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.idntimes.com/food/dining-guide/5-kuliner-sate-ayam-endes-di-yogyakarta-seporsi-gak-sampai-rp-30-000-01-1hkcy-my3mwn",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-047",
                        "name": "Ikan Bakar DKI Jakarta",
                        "origin": "DKI Jakarta",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with DKI Jakarta signature spices.",
                        "description_ind": "Hidangan Ikan Bakar DKI Jakarta tradisional khas DKI Jakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "dki jakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "dki jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp50.000 - Rp100.000",
                    "price_source": "https://food.detik.com/tempat-makan/d-8721617/cocok-buat-makan-bareng-ini-7-ikan-bakar-paling-favorit-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-048",
                        "name": "Kopi Khas Jawa Barat",
                        "origin": "Jawa Barat",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Jawa Barat.",
                        "description_ind": "Hidangan Kopi Khas Jawa Barat tradisional khas Jawa Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "jawa barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "jawa barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-049",
                        "name": "Tumis Sayur DKI Jakarta",
                        "origin": "DKI Jakarta",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from DKI Jakarta.",
                        "description_ind": "Hidangan Tumis Sayur DKI Jakarta tradisional khas DKI Jakarta yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "dki jakarta",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "dki jakarta"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "jw-050",
                        "name": "Sambal Jawa Tengah",
                        "origin": "Jawa Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Jawa Tengah.",
                        "description_ind": "Hidangan Sambal Jawa Tengah tradisional khas Jawa Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "jawa tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "jawa tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "nama": "Kalimantan",
        "ibukota": "Pontianak",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/Borneo%20Locator%20Topography.png?width=400",
        "provinsi": [
            "Kalimantan Barat",
            "Kalimantan Tengah",
            "Kalimantan Selatan",
            "Kalimantan Timur",
            "Kalimantan Utara"
        ],
        "deskripsi": "Pulau terbesar ketiga di dunia, rumah bagi hutan hujan tropis dan suku Dayak.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "kl-001",
                        "name": "Ayam Bakar Manday Sambal Seruit",
                        "origin": "South Kalimantan",
                        "category": "Main Dish",
                        "description_eng": "Smoky grilled chicken accompanied by fried mandai (fermented cempedak rind) and fiery seruit chili relish.",
                        "description_ind": "Ayam bakar beraroma asap khas Kalimantan Selatan yang disajikan dengan gorengan mandai (kulit cempedak fermentasi) dan sambal seruit pedas segar.",
                        "ingredients_eng": [
                            "Chicken",
                            "Mandai (Cempedak Rind)",
                            "Chili",
                            "Tomato",
                            "Shrimp Paste",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Daging Ayam",
                            "Mandai (Kulit Cempedak)",
                            "Cabai",
                            "Tomat",
                            "Terasi",
                            "Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Savory",
                            "Smoky"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar manday",
                            "sambal seruit",
                            "mandai",
                            "ayam bakar kalimantan",
                            "kalsel"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar manday",
                            "sambal seruit",
                            "grilled chicken",
                            "south kalimantan",
                            "cempedak"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar.jpg?width=800",
                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-002",
                        "name": "Ayam Masak Habang",
                        "origin": "Banjarmasin",
                        "category": "Main Dish",
                        "description_eng": "Tender chicken braised in a thick sweet and savory red chili sauce, a celebrated classic from Banjarmasin.",
                        "description_ind": "Ayam empuk yang dimasak dalam bumbu merah pekat khas Banjar yang manis dan gurih namun tidak terlalu pedas.",
                        "ingredients_eng": [
                            "Chicken",
                            "Dried Red Chili",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Garlic",
                            "Ginger"
                        ],
                        "ingredients_ind": [
                            "Daging Ayam",
                            "Cabai Merah Kering",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Jahe"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Spicy",
                            "Savory"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam masak habang",
                            "bumbu habang",
                            "banjarmasin",
                            "ayam merah",
                            "banjar"
                        ],
                        "search_keywords_eng": [
                            "ayam masak habang",
                            "red chicken",
                            "banjarmasin",
                            "kalimantan",
                            "sweet savory chicken"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20masak%20merah.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-003",
                        "name": "Juhu Umbut Rotan",
                        "origin": "Central Kalimantan",
                        "category": "Main Dish",
                        "description_eng": "Traditional Dayak soup made from tender young rattan shoots cooked in rich coconut milk and aromatic spices, with a delicate pleasant bitterness.",
                        "description_ind": "Sayur khas suku Dayak dari umbut rotan muda yang dimasak dengan kuah santan gurih berempah, memiliki cita rasa pahit lembut yang khas dan segar.",
                        "ingredients_eng": [
                            "Young Rattan Shoots",
                            "Coconut Milk",
                            "Shallots",
                            "Garlic",
                            "Turmeric",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Umbut Rotan Muda",
                            "Santan",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Kunyit",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Bitter",
                            "Savory",
                            "Creamy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "juhu umbut rotan",
                            "rotan",
                            "masakan dayak",
                            "kalimantan tengah",
                            "sayur rotan"
                        ],
                        "search_keywords_eng": [
                            "juhu umbut rotan",
                            "rattan shoots",
                            "dayak soup",
                            "central kalimantan",
                            "exotic soup"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Juhu%20Umbut%20Rotan%20Ikan%20Nila.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-004",
                        "name": "Amplang",
                        "origin": "Samarinda",
                        "category": "Snack",
                        "description_eng": "Light and crispy savory fish crackers made from fresh Spanish mackerel and tapioca, a renowned snack from Samarinda.",
                        "description_ind": "Kerupuk renyah bertekstur empuk yang terbuat dari campuran daging ikan tenggiri segar dan tepung tapioka, oleh-oleh legendaris dari Samarinda.",
                        "ingredients_eng": [
                            "Mackerel Fish",
                            "Tapioca Flour",
                            "Garlic",
                            "Egg",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Ikan Tenggiri",
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Telur",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Crispy",
                            "Umami"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "amplang",
                            "kuku macan",
                            "kerupuk ikan",
                            "samarinda",
                            "oleh-oleh kalimantan"
                        ],
                        "search_keywords_eng": [
                            "amplang",
                            "fish cracker",
                            "samarinda",
                            "kalimantan snack",
                            "crispy snack"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Amplang%20Kuku%20Macan%20Khas%20Samarinda.jpg?width=800",
                    "price_range_ind": "Rp150.000 - Rp160.000",
                    "price_source": "https://pontianak.tribunnews.com/kalbar/1170406/usaha-amplang-suka-rasa-jadi-andalan-ekonomi-keluarga-sejak-era-90-an",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-005",
                        "name": "Kepiting Soka",
                        "origin": "Balikpapan",
                        "category": "Main Dish",
                        "description_eng": "Crispy fried soft-shell crab that can be savored entirely, served with spicy sweet Balikpapan chili sauce.",
                        "description_ind": "Kepiting cangkang lunak khas Balikpapan yang digoreng renyah sehingga dapat dimakan seutuhnya, disajikan dengan saus lada hitam atau saus asam manis pedas.",
                        "ingredients_eng": [
                            "Soft-shell Crab",
                            "Garlic",
                            "Chili Sauce",
                            "Flour",
                            "Butter"
                        ],
                        "ingredients_ind": [
                            "Kepiting Soka",
                            "Bawang Putih",
                            "Saus Cabai",
                            "Tepung",
                            "Mentega"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Crispy",
                            "Spicy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "kepiting soka",
                            "kepiting cangkang lunak",
                            "balikpapan",
                            "seafood kalimantan",
                            "kepiting goreng"
                        ],
                        "search_keywords_eng": [
                            "kepiting soka",
                            "soft-shell crab",
                            "balikpapan",
                            "kalimantan seafood",
                            "crispy crab"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soft%20Shell%20Crab%20(3627310255).jpg?width=800",
                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://travel.kompas.com/read/2019/09/18/141826127/daripada-rebutan-rendang-datangi-3-rumah-makan-dengan-rendang-paling-enak-di",
                    "rating": 4.1,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g317100-d3656677-Reviews-Dandito-Balikpapan_East_Kalimantan_Kalimantan.html",
                    "rating_note": null
                    },
                    {
                        "id": "kl-006",
                        "name": "Soto Banjar",
                        "origin": "Banjarmasin",
                        "category": "Main Dish",
                        "description_eng": "A Banjarmasin chicken soup scented with cinnamon, nutmeg, and cloves, served with rice cakes and boiled egg.",
                        "description_ind": "Soto khas Banjarmasin dengan kuah kaldu ayam beraroma kayu manis, pala, dan cengkih, disajikan dengan lontong dan telur rebus.",
                        "ingredients_eng": [
                            "Chicken",
                            "Rice Cakes",
                            "Cinnamon",
                            "Nutmeg",
                            "Cloves",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Lontong",
                            "Kayu Manis",
                            "Pala",
                            "Cengkih",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto banjar",
                            "banjarmasin",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "soto banjar",
                            "traditional",
                            "banjarmasin"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto_Banjar",

                    "price_range_ind": "Rp100.000 - Rp300.000",
                    "price_source": "https://www.idntimes.com/food/dining-guide/5-restoran-kepiting-enak-populer-di-balikpapan-wajib-dicoba-01-zydpl-9pfq65",
                    "rating": 4.1,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g303950-d6963490-Reviews-Soto_Banjar_Bang_Amat-Banjarmasin_South_Kalimantan_Kalimantan.html",
                    "rating_note": null
                    },
                    {
                        "id": "kl-007",
                        "name": "Ketupat Kandangan",
                        "origin": "Kandangan",
                        "category": "Main Dish",
                        "description_eng": "Kandangan-style ketupat rice cakes in a spicy coconut milk gravy of snakehead fish, a legendary dish of South Kalimantan.",
                        "description_ind": "Ketupat khas Kandangan yang disiram kuah santan ikan gabus pedas, makanan legendaris Kalimantan Selatan.",
                        "ingredients_eng": [
                            "Ketupat",
                            "Snakehead Fish",
                            "Coconut Milk",
                            "Egg",
                            "Chili",
                            "Tamarind"
                        ],
                        "ingredients_ind": [
                            "Ketupat",
                            "Ikan Gabus",
                            "Santan",
                            "Telur",
                            "Cabai",
                            "Asam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ketupat kandangan",
                            "kandangan",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ketupat kandangan",
                            "traditional",
                            "kandangan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ketupat%20Kandangan%20Haruan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ketupat_Kandangan",

                    "price_range_ind": "Rp18.000 - Rp25.000",
                    "price_source": "https://www.liputan6.com/regional/read/5083929/ketupat-kandangan-kuliner-simbol-kedekatan-masyarakat-kalsel-dengan-alam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-008",
                        "name": "Nasi Kuning Banjar",
                        "origin": "Banjarmasin",
                        "category": "Main Dish",
                        "description_eng": "Banjar-style turmeric rice cooked in coconut milk, served with fried chicken and vermicelli.",
                        "description_ind": "Nasi kuning bergaya Banjar yang dimasak dengan santan dan kunyit, disajikan lengkap dengan ayam goreng dan bihun.",
                        "ingredients_eng": [
                            "Rice",
                            "Coconut Milk",
                            "Turmeric",
                            "Lemongrass",
                            "Fried Chicken",
                            "Vermicelli"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Santan",
                            "Kunyit",
                            "Serai",
                            "Ayam Goreng",
                            "Bihun"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi kuning banjar",
                            "banjarmasin",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "nasi kuning banjar",
                            "traditional",
                            "banjarmasin"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20Kuning%20dan%20Ungkep%20Ayam.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_kuning",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://superapps.kompas.com/read/3000923/cobain-nasi-kuning-sambal-kecombrang-di-warung-ngawi-denpasar-harga-rp-10-ribuan-porsinya-mantap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-009",
                        "name": "Bingka Barantai",
                        "origin": "Banjar",
                        "category": "Dessert",
                        "description_eng": "A South Kalimantan moist cake of yellow sweet potato and coconut milk, baked until golden and fragrant.",
                        "description_ind": "Kue basah khas Kalimantan Selatan dari ubi kuning dan santan yang dipanggang hingga kecokelatan dan wangi.",
                        "ingredients_eng": [
                            "Egg",
                            "Wheat Flour",
                            "Coconut Milk",
                            "Yellow Sweet Potato",
                            "Sugar",
                            "Vanilla"
                        ],
                        "ingredients_ind": [
                            "Telur",
                            "Tepung Terigu",
                            "Santan",
                            "Ubi Kuning",
                            "Gula",
                            "Vanila"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "bingka barantai",
                            "banjar",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "bingka barantai",
                            "traditional",
                            "banjar"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20Bingka%20mini.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bingka",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5829507/gurih-nikmat-soto-banjar-racikan-orang-banjar-asli",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-010",
                        "name": "Pengkang",
                        "origin": "Pontianak",
                        "category": "Snack",
                        "description_eng": "Pontianak shrimp sticky rice: glutinous rice stuffed with whole shrimp, wrapped in banana leaf and grilled.",
                        "description_ind": "Lemper udang khas Pontianak: ketan berisi udang utuh yang dibungkus daun pisang lalu dipanggang.",
                        "ingredients_eng": [
                            "Glutinous Rice",
                            "Shrimp",
                            "Coconut",
                            "Banana Leaf",
                            "Salt",
                            "Coconut Milk"
                        ],
                        "ingredients_ind": [
                            "Beras Ketan",
                            "Udang",
                            "Kelapa",
                            "Daun Pisang",
                            "Garam",
                            "Santan"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "pengkang",
                            "pontianak",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "pengkang",
                            "traditional",
                            "pontianak"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pengkang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Pengkang",

                    "price_range_ind": "Rp2.000 - Rp3.000",
                    "price_source": "https://banjarmasin.tribunnews.com/kalsel/1355722/umkm-kalsel-legit-dan-lembut-bingka-kentang-khas-banjar-dijual-arbani-di-banjarbaru-dua-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-011",
                        "name": "Choi Pan",
                        "origin": "Singkawang",
                        "category": "Snack",
                        "description_eng": "Steamed dumplings from Singkawang filled with chicken, bamboo shoots, and jicama, a Chinese-Kalimantan heritage dish.",
                        "description_ind": "Dumpling kukus khas Singkawang berisi ayam, rebung, dan bengkuang, warisan kuliner Tionghoa-Kalimantan Barat.",
                        "ingredients_eng": [
                            "Wheat Flour Wrappers",
                            "Chicken",
                            "Bamboo Shoots",
                            "Jicama",
                            "Garlic",
                            "Chili Sauce"
                        ],
                        "ingredients_ind": [
                            "Kulit Tepung Terigu",
                            "Ayam",
                            "Rebung",
                            "Bengkuang",
                            "Bawang Putih",
                            "Saus Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "choi pan",
                            "singkawang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "choi pan",
                            "traditional",
                            "singkawang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Choi%20Pan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Choi_pan",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://pontianak.tribunnews.com/kalbar/1181017/daftar-10-choipan-terenak-rating-tinggi-di-singkawang-harga-mulai-rp1200-per-pcs",
                    "rating": 4.7,
                    "rating_platform": "Google Maps",
                    "rating_source": "https://pontianak.tribunnews.com/kalbar/1181017/daftar-10-choipan-terenak-rating-tinggi-di-singkawang-harga-mulai-rp1200-per-pcs",
                    "rating_note": null
                    },
                    {
                        "id": "kl-012",
                        "name": "Bubur Pedas",
                        "origin": "Sambas",
                        "category": "Main Dish",
                        "description_eng": "A Sambas porridge of roasted rice flour and coconut milk cooked with moringa leaves, sweet potato, and fresh vegetables.",
                        "description_ind": "Bubur khas Sambas dari tepung beras sangrai dan santan yang dimasak bersama daun kelor, ubi, dan sayuran segar.",
                        "ingredients_eng": [
                            "Roasted Rice Flour",
                            "Vegetables",
                            "Moringa Leaves",
                            "Sweet Potato",
                            "Shrimp",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras Sangrai",
                            "Sayuran",
                            "Daun Kelor",
                            "Ubi",
                            "Udang",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur pedas",
                            "sambas",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "bubur pedas",
                            "traditional",
                            "sambas"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20pedas%20melayu.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_pedas",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.4,
                    "rating_platform": "Google Maps",
                    "rating_source": "https://www.detik.com/kalimantan/berita/d-8007038/bubbor-paddas-sambas-sejarah-resep-dan-tempat-makan-rekomendasi",
                    "rating_note": null
                    },
                    {
                        "id": "kl-013",
                        "name": "Ayam Cincane",
                        "origin": "Samarinda",
                        "category": "Main Dish",
                        "description_eng": "Samarinda grilled chicken glazed with a caramelized red chili and candlenut spice paste.",
                        "description_ind": "Ayam bakar khas Samarinda dengan olesan bumbu cabai merah dan kemiri yang dimasak hingga karamel.",
                        "ingredients_eng": [
                            "Chicken",
                            "Red Chili",
                            "Garlic",
                            "Candlenut",
                            "Coconut Milk",
                            "Lime Leaves"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Cabai Merah",
                            "Bawang Putih",
                            "Kemiri",
                            "Santan",
                            "Daun Jeruk"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam cincane",
                            "samarinda",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ayam cincane",
                            "traditional",
                            "samarinda"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam-cincane.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_cincane",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.idntimes.com/food/dining-guide/kuliner-khas-samarinda-c1c2-01-1qxbn-942c9c",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-014",
                        "name": "Gence Ruan",
                        "origin": "Kutai",
                        "category": "Main Dish",
                        "description_eng": "Kutai Kartanegara grilled snakehead fish coated in gence sambal — spicy, savory, with a hint of sourness.",
                        "description_ind": "Ikan gabus (haruan) bakar khas Kutai Kartanegara yang disiram sambal gence pedas gurih dengan sentuhan asam.",
                        "ingredients_eng": [
                            "Snakehead Fish",
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Ikan Gabus",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "gence ruan",
                            "kutai",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "gence ruan",
                            "traditional",
                            "kutai"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gence%20Ruan.JPG?width=800",
                    "ingredients_source": "https://www.detik.com/kalimantan/kuliner/d-7994926/mengenal-gence-ruan-sajian-masakan-ikan-khas-kutai",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-015",
                        "name": "Tumis Pakis",
                        "origin": "Palangkaraya",
                        "category": "Side Dish",
                        "description_eng": "Fiddlehead fern shoots stir-fried with anchovies and aromatics, a simple Kalimantan side dish.",
                        "description_ind": "Pucuk pakis yang ditumis bersama teri dan bumbu bawang, lauk sederhana khas Kalimantan.",
                        "ingredients_eng": [
                            "Fiddlehead Ferns",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Anchovies",
                            "Coconut Milk"
                        ],
                        "ingredients_ind": [
                            "Pakis",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Teri",
                            "Santan"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis pakis",
                            "palangkaraya",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "tumis pakis",
                            "traditional",
                            "palangkaraya"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://resepkoki.id/resep/resep-tumis-pakis/",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5934482/tumis-kangkung-sultan-di-4-restoran-mewah-ini-harganya-selangit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-016",
                        "name": "Ikan Bakar Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Kalimantan Utara signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp14.000 - Rp20.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-6732474/5-tempat-makan-seafood-di-jimbaran-yang-enak-ada-pelopor-ikan-bakar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-017",
                        "name": "Kopi Khas Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Kalimantan Timur.",
                        "description_ind": "Hidangan Kopi Khas Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://surabaya.kompas.com/read/2026/06/09/111500778/siasat-pedagang-warkop-di-lumajang-hadapi-kenaikan-harga-kulakan--naik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-018",
                        "name": "Es Campur Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Kalimantan Timur.",
                        "description_ind": "Hidangan Es Campur Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/rekomendasi-es-campur-di-surabaya-c1c2-01-zv1tf-qkzvw5",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-019",
                        "name": "Soto Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Timur.",
                        "description_ind": "Hidangan Soto Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-020",
                        "name": "Ayam Bakar Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Kalimantan Utara.",
                        "description_ind": "Hidangan Ayam Bakar Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-021",
                        "name": "Es Campur Kalimantan Tengah",
                        "origin": "Kalimantan Tengah",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Kalimantan Tengah.",
                        "description_ind": "Hidangan Es Campur Kalimantan Tengah tradisional khas Kalimantan Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "kalimantan tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "kalimantan tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/rekomendasi-es-campur-di-surabaya-c1c2-01-zv1tf-qkzvw5",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-022",
                        "name": "Bubur Ayam Kalimantan Tengah",
                        "origin": "Kalimantan Tengah",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Kalimantan Tengah.",
                        "description_ind": "Hidangan Bubur Ayam Kalimantan Tengah tradisional khas Kalimantan Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "kalimantan tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "kalimantan tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp13.000 - Rp30.000",
                    "price_source": "https://www.kompas.com/food/read/2026/01/06/083722075/10-bubur-ayam-di-jakarta-dari-legendaris-hingga-favorit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-023",
                        "name": "Soto Kalimantan Barat",
                        "origin": "Kalimantan Barat",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Barat.",
                        "description_ind": "Hidangan Soto Kalimantan Barat tradisional khas Kalimantan Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-024",
                        "name": "Ayam Bakar Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Kalimantan Utara.",
                        "description_ind": "Hidangan Ayam Bakar Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-025",
                        "name": "Sambal Kalimantan Tengah",
                        "origin": "Kalimantan Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Kalimantan Tengah.",
                        "description_ind": "Hidangan Sambal Kalimantan Tengah tradisional khas Kalimantan Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "kalimantan tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "kalimantan tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-026",
                        "name": "Soto Kalimantan Selatan",
                        "origin": "Kalimantan Selatan",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Selatan.",
                        "description_ind": "Hidangan Soto Kalimantan Selatan tradisional khas Kalimantan Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-027",
                        "name": "Kue Basah Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Kalimantan Utara.",
                        "description_ind": "Hidangan Kue Basah Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-028",
                        "name": "Bubur Ayam Kalimantan Selatan",
                        "origin": "Kalimantan Selatan",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Kalimantan Selatan.",
                        "description_ind": "Hidangan Bubur Ayam Kalimantan Selatan tradisional khas Kalimantan Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "kalimantan selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "kalimantan selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp13.000 - Rp30.000",
                    "price_source": "https://www.kompas.com/food/read/2026/01/06/083722075/10-bubur-ayam-di-jakarta-dari-legendaris-hingga-favorit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-029",
                        "name": "Ikan Bakar Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Kalimantan Utara signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp14.000 - Rp20.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-6732474/5-tempat-makan-seafood-di-jimbaran-yang-enak-ada-pelopor-ikan-bakar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-030",
                        "name": "Es Campur Kalimantan Barat",
                        "origin": "Kalimantan Barat",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Kalimantan Barat.",
                        "description_ind": "Hidangan Es Campur Kalimantan Barat tradisional khas Kalimantan Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "kalimantan barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "kalimantan barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/rekomendasi-es-campur-di-surabaya-c1c2-01-zv1tf-qkzvw5",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-031",
                        "name": "Kerupuk Kalimantan Selatan",
                        "origin": "Kalimantan Selatan",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Kalimantan Selatan.",
                        "description_ind": "Hidangan Kerupuk Kalimantan Selatan tradisional khas Kalimantan Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "kalimantan selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "kalimantan selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp4.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-032",
                        "name": "Mie Kuah Kalimantan Selatan",
                        "origin": "Kalimantan Selatan",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Kalimantan Selatan.",
                        "description_ind": "Hidangan Mie Kuah Kalimantan Selatan tradisional khas Kalimantan Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "kalimantan selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "kalimantan selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp15.000 - Rp18.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7996459/nikmatnya-mie-ayam-pak-loso-di-menteng-harga-hanya-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-033",
                        "name": "Soto Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Utara.",
                        "description_ind": "Hidangan Soto Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-034",
                        "name": "Nasi Goreng Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Kalimantan Utara.",
                        "description_ind": "Hidangan Nasi Goreng Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7048540/buset-5-nasi-goreng-di-sini-porsinya-super-jumbo",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-035",
                        "name": "Kerupuk Kalimantan Tengah",
                        "origin": "Kalimantan Tengah",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Kalimantan Tengah.",
                        "description_ind": "Hidangan Kerupuk Kalimantan Tengah tradisional khas Kalimantan Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "kalimantan tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "kalimantan tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp4.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-036",
                        "name": "Kerupuk Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Kalimantan Timur.",
                        "description_ind": "Hidangan Kerupuk Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp4.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-037",
                        "name": "Kerupuk Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Kalimantan Utara.",
                        "description_ind": "Hidangan Kerupuk Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp4.000 - Rp7.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-038",
                        "name": "Bubur Ayam Kalimantan Selatan",
                        "origin": "Kalimantan Selatan",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Kalimantan Selatan.",
                        "description_ind": "Hidangan Bubur Ayam Kalimantan Selatan tradisional khas Kalimantan Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "kalimantan selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "kalimantan selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp13.000 - Rp30.000",
                    "price_source": "https://www.kompas.com/food/read/2026/01/06/083722075/10-bubur-ayam-di-jakarta-dari-legendaris-hingga-favorit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-039",
                        "name": "Soto Kalimantan Barat",
                        "origin": "Kalimantan Barat",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Barat.",
                        "description_ind": "Hidangan Soto Kalimantan Barat tradisional khas Kalimantan Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-040",
                        "name": "Ikan Bakar Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Kalimantan Timur signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp14.000 - Rp20.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-6732474/5-tempat-makan-seafood-di-jimbaran-yang-enak-ada-pelopor-ikan-bakar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-041",
                        "name": "Soto Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Timur.",
                        "description_ind": "Hidangan Soto Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-042",
                        "name": "Bubur Ayam Kalimantan Barat",
                        "origin": "Kalimantan Barat",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Kalimantan Barat.",
                        "description_ind": "Hidangan Bubur Ayam Kalimantan Barat tradisional khas Kalimantan Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "kalimantan barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "kalimantan barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp13.000 - Rp30.000",
                    "price_source": "https://www.kompas.com/food/read/2026/01/06/083722075/10-bubur-ayam-di-jakarta-dari-legendaris-hingga-favorit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-043",
                        "name": "Nasi Goreng Kalimantan Tengah",
                        "origin": "Kalimantan Tengah",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Kalimantan Tengah.",
                        "description_ind": "Hidangan Nasi Goreng Kalimantan Tengah tradisional khas Kalimantan Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "kalimantan tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "kalimantan tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7048540/buset-5-nasi-goreng-di-sini-porsinya-super-jumbo",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-044",
                        "name": "Tumis Sayur Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Kalimantan Utara.",
                        "description_ind": "Hidangan Tumis Sayur Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5934482/tumis-kangkung-sultan-di-4-restoran-mewah-ini-harganya-selangit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-045",
                        "name": "Es Campur Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Kalimantan Timur.",
                        "description_ind": "Hidangan Es Campur Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/rekomendasi-es-campur-di-surabaya-c1c2-01-zv1tf-qkzvw5",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-046",
                        "name": "Kue Basah Kalimantan Timur",
                        "origin": "Kalimantan Timur",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Kalimantan Timur.",
                        "description_ind": "Hidangan Kue Basah Kalimantan Timur tradisional khas Kalimantan Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "kalimantan timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "kalimantan timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-047",
                        "name": "Mie Kuah Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Kalimantan Utara.",
                        "description_ind": "Hidangan Mie Kuah Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp15.000 - Rp18.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7996459/nikmatnya-mie-ayam-pak-loso-di-menteng-harga-hanya-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-048",
                        "name": "Soto Kalimantan Selatan",
                        "origin": "Kalimantan Selatan",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Kalimantan Selatan.",
                        "description_ind": "Hidangan Soto Kalimantan Selatan tradisional khas Kalimantan Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "kalimantan selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "kalimantan selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7802109/gurih-segar-10-soto-ayam-rp-15-ribuan-ada-di-sini",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-049",
                        "name": "Nasi Goreng Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Kalimantan Utara.",
                        "description_ind": "Hidangan Nasi Goreng Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7048540/buset-5-nasi-goreng-di-sini-porsinya-super-jumbo",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "kl-050",
                        "name": "Ikan Bakar Kalimantan Utara",
                        "origin": "Kalimantan Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Kalimantan Utara signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Kalimantan Utara tradisional khas Kalimantan Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "kalimantan utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "kalimantan utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp14.000 - Rp20.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-6732474/5-tempat-makan-seafood-di-jimbaran-yang-enak-ada-pelopor-ikan-bakar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "nama": "Sulawesi",
        "ibukota": "Makassar",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/Sulawesi%20Locator%20Topography.png?width=400",
        "provinsi": [
            "Sulawesi Utara",
            "Gorontalo",
            "Sulawesi Tengah",
            "Sulawesi Barat",
            "Sulawesi Selatan",
            "Sulawesi Tenggara"
        ],
        "deskripsi": "Pulau berbentuk unik dengan kekayaan budaya Bugis, Makassar, Toraja, dan Minahasa.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "sl-001",
                        "name": "Coto Makassar",
                        "origin": "Makassar",
                        "category": "Main Dish",
                        "description_eng": "Rich beef and offal stew simmered with freshly roasted ground peanuts and spices, customarily accompanied by ketupat rice cakes.",
                        "description_ind": "Soto daging dan jeroan sapi khas Makassar berkuah kental gurih dari racikan kacang tanah sangrai dan rempah, disantap bersama ketupat.",
                        "ingredients_eng": [
                            "Beef",
                            "Beef Offal",
                            "Roasted Peanuts",
                            "Lemongrass",
                            "Coriander",
                            "Ketupat"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Jeroan Sapi",
                            "Kacang Tanah Sangrai",
                            "Serai",
                            "Ketumbar",
                            "Ketupat"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Rich",
                            "Nutty"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "coto makassar",
                            "coto",
                            "makassar",
                            "daging sapi",
                            "kuliner sulsel"
                        ],
                        "search_keywords_eng": [
                            "coto makassar",
                            "beef stew",
                            "peanut soup",
                            "makassar",
                            "sulawesi"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Coto%20Makassar%20dish.JPG?width=800",
                    "price_range_ind": "Rp15.000 - Rp35.000",
                    "price_source": "https://www.detik.com/sulsel/kuliner/d-7020223/9-rekomendasi-coto-makassar-populer-wajib-dicoba-berikut-harga-lokasinya",
                    "rating": 4.3,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297720-d6415175-Reviews-Coto_Nusantara-Makassar_South_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-002",
                        "name": "Ikan Woku Belanga",
                        "origin": "Manado",
                        "category": "Main Dish",
                        "description_eng": "Fish simmered in an aromatic yellow herbal sauce with fresh turmeric, crushed chili, lemongrass, lime leaves, and wild basil.",
                        "description_ind": "Masakan ikan berkuah kuning khas Manado yang dimasak dalam belangga tanah liat dengan bumbu rempah pedas, serai, daun jeruk, dan wangi daun kemangi.",
                        "ingredients_eng": [
                            "Fresh Fish",
                            "Turmeric",
                            "Lemongrass",
                            "Lemon Basil",
                            "Tomato",
                            "Chili",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Ikan Segar",
                            "Kunyit",
                            "Serai",
                            "Daun Kemangi",
                            "Tomat",
                            "Cabai Rawit",
                            "Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Sour",
                            "Aromatic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan woku belanga",
                            "ikan woku",
                            "manado",
                            "pedas woku",
                            "kemangi"
                        ],
                        "search_keywords_eng": [
                            "ikan woku belanga",
                            "woku fish",
                            "manado dish",
                            "spicy yellow fish",
                            "basil fish"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pallumara%20ikan%20sunu-1.jpg?width=800",
                    "price_range_ind": "Rp45.000 - Rp65.000",
                    "price_source": "https://makassar.tribunnews.com/2015/07/07/woku-ratulangi-di-hotel-sahid-rp-55-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-003",
                        "name": "Binte Biluhuta",
                        "origin": "Gorontalo",
                        "category": "Main Dish",
                        "description_eng": "Refreshing Gorontalo corn soup simmered with sweet corn, fresh shrimp, grated coconut, basil, and a generous squeeze of calamansi lime.",
                        "description_ind": "Sup jagung manis berkuah bening segar khas Gorontalo yang berpadu dengan udang segar, parutan kelapa, daun kemangi, dan kucuran jeruk nipis asam pedas.",
                        "ingredients_eng": [
                            "Sweet Corn",
                            "Shrimp",
                            "Grated Coconut",
                            "Basil",
                            "Lime Juice",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Jagung Manis",
                            "Udang Segar",
                            "Kelapa Parut",
                            "Kemangi",
                            "Jeruk Nipis",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Sour",
                            "Savory",
                            "Fresh"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "binte biluhuta",
                            "milu siram",
                            "sup jagung gorontalo",
                            "gorontalo",
                            "udang jagung"
                        ],
                        "search_keywords_eng": [
                            "binte biluhuta",
                            "corn soup",
                            "gorontalo",
                            "shrimp corn soup",
                            "milu siram"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Binte%20Biluhuta.jpg?width=800",
                    "price_range_ind": "Rp7.000 - Rp15.000",
                    "price_source": "https://geopark.gorontaloprov.go.id/view/binte-biluhuta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-004",
                        "name": "Tinutuan",
                        "origin": "Manado",
                        "category": "Main Dish",
                        "description_eng": "Nourishing Manado vegetable porridge made with rice, pumpkin, sweet corn, cassava, and wild greens, served with smoked fish and sambal roa.",
                        "description_ind": "Bubur sayuran kaya gizi khas Manado berbahan dasar beras, labu kuning, jagung manis, kangkung, dan bayam, disajikan dengan sambal roa dan ikan asin.",
                        "ingredients_eng": [
                            "Rice",
                            "Yellow Pumpkin",
                            "Sweet Corn",
                            "Spinach",
                            "Water Spinach",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Beras",
                            "Labu Kuning",
                            "Jagung Manis",
                            "Bayam",
                            "Kangkung",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Fresh",
                            "Mild"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "tinutuan",
                            "bubur manado",
                            "bubur sayur",
                            "manado",
                            "kuliner sehat"
                        ],
                        "search_keywords_eng": [
                            "tinutuan",
                            "bubur manado",
                            "vegetable porridge",
                            "manado porridge",
                            "pumpkin rice"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20Khas%20Manado%20(Tinutuan).jpg?width=800",
                    "price_range_ind": "Rp5.000 - Rp8.000",
                    "price_source": "https://manado.tribunnews.com/2024/04/13/nikmatnya-bubur-manado-hanya-rp6-ribu-di-reko-bawah-minahasa-utara-sulawesi-utara",
                    "rating": 4.1,
                    "rating_platform": "Restaurant Guru",
                    "rating_source": "https://es.restaurantguru.com/RM-Wakeke-Tinutuan-Manado-2",
                    "rating_note": null
                    },
                    {
                        "id": "sl-005",
                        "name": "Kapurung",
                        "origin": "Palopo",
                        "category": "Main Dish",
                        "description_eng": "Traditional Luwu sago dumpling soup cooked with shredded fish, prawns, tropical vegetables, and a sour-tangy chili broth.",
                        "description_ind": "Hidangan khas Palopo (Luwu) berupa bola-bola sagu kenyal di dalam kuah ikan asam segar berpadu dengan udang, aneka sayuran hijau, dan sambal cabai.",
                        "ingredients_eng": [
                            "Sago Starch",
                            "Fish",
                            "Shrimp",
                            "Mixed Vegetables",
                            "Lime",
                            "Bird's Eye Chili"
                        ],
                        "ingredients_ind": [
                            "Tepung Sagu",
                            "Ikan",
                            "Udang",
                            "Sayur Bayam/Jantung Pisang",
                            "Jeruk Nipis",
                            "Cabai Rawit"
                        ],
                        "flavor_profile": [
                            "Sour",
                            "Savory",
                            "Fresh"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "kapurung",
                            "sagu palopo",
                            "luwu",
                            "makanan sagu sulawesi",
                            "sup asam sagu"
                        ],
                        "search_keywords_eng": [
                            "kapurung",
                            "sago dumplings",
                            "palopo",
                            "luwu",
                            "sulawesi sago soup"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kapurung%20Luwu.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.7,
                    "rating_platform": "Grab Dine Out",
                    "rating_source": "https://dineout.grab.com/id/id/restaurants/rm-kapurung-khas-palopo-pondambea--6-C2LUFBJJL7VVWE",
                    "rating_note": null
                    },
                    {
                        "id": "sl-006",
                        "name": "Sop Saudara",
                        "origin": "Pangkep",
                        "category": "Main Dish",
                        "description_eng": "A clear spicy offal soup from Pangkep scented with cinnamon and ginger, served with potato patties.",
                        "description_ind": "Sup jeroan khas Pangkep berkuah bening pedas dengan rempah kayu manis dan jahe, disajikan dengan perkedel kentang.",
                        "ingredients_eng": [
                            "Beef",
                            "Offal",
                            "Cinnamon",
                            "Ginger",
                            "Fried Shallots",
                            "Potato Patty"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Jeroan",
                            "Kayu Manis",
                            "Jahe",
                            "Bawang Goreng",
                            "Perkedel"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sop saudara",
                            "pangkep",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sop saudara",
                            "traditional",
                            "pangkep"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20campur%20sop%20saudara%20warung%20Pangkep.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sop_saudara",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://makassar.tribunnews.com/2023/01/29/sop-saudara-dan-ikan-bakar-kuliner-khas-pangkep-sulsel-bikin-ketagihan-harga-mai-rp-25-ribu",
                    "rating": 4.1,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297720-d1098552-Reviews-Warung_Pangkep_Sop_Saudara-Makassar_South_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-007",
                        "name": "Pallubasa",
                        "origin": "Makassar",
                        "category": "Main Dish",
                        "description_eng": "A Makassar offal gulai in rich coconut milk broth, topped with toasted coconut flakes (kurusa).",
                        "description_ind": "Gulai jeroan khas Makassar berkuah santan kental dengan taburan kelapa sangrai (kurusa) di atasnya.",
                        "ingredients_eng": [
                            "Beef",
                            "Offal",
                            "Coconut Milk",
                            "Turmeric",
                            "Candlenut",
                            "Toasted Coconut"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Jeroan",
                            "Santan",
                            "Kunyit",
                            "Kemiri",
                            "Kelapa Sangrai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "pallubasa",
                            "makassar",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "pallubasa",
                            "traditional",
                            "makassar"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pallubasa.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Pallubasa",

                    "price_range_ind": "Rp14.000 - Rp20.000",
                    "price_source": "https://www.kompas.com/food/read/2022/11/13/131700975/6-tempat-makan-pallubasa-di-makassar-harga-mulai-dari-rp-14.000",
                    "rating": 4.4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297720-d7347714-Reviews-Pallu_Basa_Serigala-Makassar_South_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-008",
                        "name": "Es Pisang Ijo",
                        "origin": "Makassar",
                        "category": "Dessert",
                        "description_eng": "Makassar dessert of bananas wrapped in a signature green dough, served with shaved ice, coconut milk, and red syrup.",
                        "description_ind": "Pisang yang dibungkus adonan hijau khas Makassar, disajikan dengan es serut, santan, dan sirup merah.",
                        "ingredients_eng": [
                            "Banana",
                            "Green Flour Dough",
                            "Coconut Milk",
                            "Syrup",
                            "Shaved Ice",
                            "Wheat Flour"
                        ],
                        "ingredients_ind": [
                            "Pisang",
                            "Adonan Tepung Hijau",
                            "Santan",
                            "Sirup",
                            "Es Serut",
                            "Tepung Terigu"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es pisang ijo",
                            "makassar",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "es pisang ijo",
                            "traditional",
                            "makassar"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20pisang%20ijo%20otentik%20Makassar-1.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Pisang_ijo",

                    "price_range_ind": "Rp25.000 - Rp35.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7897406/es-pisang-ijo-sultan-setampah-harganya-rp-1-jutaan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-009",
                        "name": "Mie Titi",
                        "origin": "Makassar",
                        "category": "Main Dish",
                        "description_eng": "A Makassar dish of crispy fried noodles topped with a thick gravy of beef, seafood, and vegetables.",
                        "description_ind": "Mie goreng khas Makassar dengan kuah kental berisi daging sapi, seafood, dan sayuran yang disajikan panas.",
                        "ingredients_eng": [
                            "Fried Noodles",
                            "Beef",
                            "Seafood",
                            "Vegetables",
                            "Oyster Sauce",
                            "Thick Gravy"
                        ],
                        "ingredients_ind": [
                            "Mie Goreng",
                            "Daging Sapi",
                            "Seafood",
                            "Sayuran",
                            "Saus Tiram",
                            "Kuah Kental"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie titi",
                            "makassar",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "mie titi",
                            "traditional",
                            "makassar"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/MIE%20KERING%20MAKASSAR.jpg?width=800",
                    "ingredients_source": "https://www.goodnewsfromindonesia.id/indonesiana/wisata/melacak-sejarah-mie-titi-legenda-mie-kering-khas-makassar",

                    "price_range_ind": "Rp25.000 - Rp57.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-7846195/10-mie-titi-khas-makassar-yang-lezat-dan-legendaris",
                    "rating": 3.7,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297720-d6780873-Reviews-Mie_Titi_Panakkukang-Makassar_South_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-010",
                        "name": "Ayam Goreng Sulawesi",
                        "origin": "Makassar",
                        "category": "Main Dish",
                        "description_eng": "Turmeric and galangal spiced fried chicken from Makassar, served with sambal and fresh herbs.",
                        "description_ind": "Ayam goreng berrempah kunyit dan lengkuas khas Makassar yang disajikan dengan sambal dan lalapan.",
                        "ingredients_eng": [
                            "Chicken",
                            "Turmeric",
                            "Galangal",
                            "Lemongrass",
                            "Garlic",
                            "Coconut Milk"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kunyit",
                            "Lengkuas",
                            "Serai",
                            "Bawang Putih",
                            "Santan"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam goreng sulawesi",
                            "makassar",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ayam goreng sulawesi",
                            "traditional",
                            "makassar"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20goreng%20(2).jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_goreng",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://www.kompas.id/artikel/ayam-goreng-kupang-tiga-kali-lebih-mahal-dari-jakarta-hl1",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297720-d6581983-Reviews-Ayam_Goreng_Sulawesi-Makassar_South_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-011",
                        "name": "Jalangkote",
                        "origin": "Makassar",
                        "category": "Snack",
                        "description_eng": "A Makassar fried pastry filled with vegetables, glass noodles, and egg, served with a tangy chili-vinegar sauce.",
                        "description_ind": "Pastel goreng khas Makassar berisi sayuran, soun, dan telur, disajikan dengan saus cabai cuka pedas.",
                        "ingredients_eng": [
                            "Pastry Wrapper",
                            "Vegetables",
                            "Glass Noodles",
                            "Egg",
                            "Chili Sauce",
                            "Vinegar"
                        ],
                        "ingredients_ind": [
                            "Kulit Pastry",
                            "Sayuran",
                            "Soun",
                            "Telur",
                            "Saus Cabai",
                            "Cuka"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "jalangkote",
                            "makassar",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "jalangkote",
                            "traditional",
                            "makassar"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jalangkote%20dari%20Makassar.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Jalangkote",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://style.tribunnews.com/life/379622/gurih-renyah-4-rekomendasi-jalangkote-enak-di-makassar-bahkan-ada-yang-berdiri-sejak-1985",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297720-d7261579-Reviews-Jalangkote_Lasinrang-Makassar_South_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-012",
                        "name": "Ikan Bakar Rica",
                        "origin": "Manado",
                        "category": "Main Dish",
                        "description_eng": "Manado grilled fish topped with a spicy rica sambal of chilies, tomato, and kemangi basil.",
                        "description_ind": "Ikan bakar khas Manado yang disiram sambal rica pedas dari cabai, tomat, dan daun kemangi.",
                        "ingredients_eng": [
                            "Fish",
                            "Red Chili",
                            "Shallots",
                            "Tomato",
                            "Lime Leaves",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Tomat",
                            "Daun Jeruk",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar rica",
                            "manado",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar rica",
                            "traditional",
                            "manado"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Rica-rica",

                    "price_range_ind": "Rp30.000 - Rp85.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5965169/5-warung-seafood-enak-di-jakarta-favorit-netizen-tiktok-mampir-yuk",
                    "rating": 4.3,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297721-d13833359-Reviews-RM_Bakar_Rica-Manado_North_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-013",
                        "name": "Ayam Rica-Rica",
                        "origin": "Manado",
                        "category": "Main Dish",
                        "description_eng": "Manado chicken cooked rica-rica style with red chilies, ginger, and lime leaves for a fiery kick.",
                        "description_ind": "Ayam khas Manado yang dimasak dengan rica-rica: cabai merah, jahe, dan daun jeruk yang pedas menyengat.",
                        "ingredients_eng": [
                            "Chicken",
                            "Red Chili",
                            "Shallots",
                            "Ginger",
                            "Lime Leaves",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Jahe",
                            "Daun Jeruk",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam rica-rica",
                            "manado",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ayam rica-rica",
                            "traditional",
                            "manado"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Rica-rica.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Rica-rica",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-014",
                        "name": "Klappertaart",
                        "origin": "Manado",
                        "category": "Dessert",
                        "description_eng": "A Manado young coconut custard tart of Dutch colonial heritage, baked with milk, eggs, and cinnamon.",
                        "description_ind": "Puding kelapa muda khas Manado warisan kuliner Belanda yang dipanggang dengan susu, telur, dan kayu manis.",
                        "ingredients_eng": [
                            "Young Coconut",
                            "Milk",
                            "Eggs",
                            "Sugar",
                            "Cinnamon",
                            "Butter"
                        ],
                        "ingredients_ind": [
                            "Kelapa Muda",
                            "Susu",
                            "Telur",
                            "Gula",
                            "Kayu Manis",
                            "Mentega"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "klappertaart",
                            "manado",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "klappertaart",
                            "traditional",
                            "manado"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Klappertaart%20Khas%20Manado.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Klappertaart",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.kompas.com/food/read/2021/09/16/101029475/4-tempat-beli-klappertaart-di-manado-harga-menu-mulai-rp-20000",
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297721-d11615136-Reviews-Christine_Klappertaart-Manado_North_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-015",
                        "name": "Kaledo",
                        "origin": "Donggala",
                        "category": "Main Dish",
                        "description_eng": "A Buton beef trotter soup in a clear savory broth, eaten with chilies and a squeeze of lime.",
                        "description_ind": "Sup kaki sapi khas Buton dengan kuah bening gurih yang disantap dengan cabai dan perasan jeruk nipis.",
                        "ingredients_eng": [
                            "Beef Trotters",
                            "Broth",
                            "Chili",
                            "Nutmeg",
                            "Lime",
                            "Sweet Soy Sauce"
                        ],
                        "ingredients_ind": [
                            "Kaki Sapi",
                            "Kaldu",
                            "Cabai",
                            "Pala",
                            "Jeruk Nipis",
                            "Kecap Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "kaledo",
                            "donggala",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "kaledo",
                            "traditional",
                            "donggala"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kaledo%20soup%2C%20Central%20Sulawesi%2C%202018-09-16.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kaledo",

                    "price_range_ind": "Rp40.000 - Rp60.000",
                    "price_source": "https://www.suara.com/lifestyle/2019/07/04/125610/cocok-disantap-saat-cuaca-dingin-menyeruput-seporsi-sop-donggala-khas-palu",
                    "rating": 4.7,
                    "rating_platform": "GoFood",
                    "rating_source": "https://gofood.co.id/en/jakarta/restaurant/kaledo-narassa-duren-sawit-01590381-a1db-4221-83c1-fa3f86954078",
                    "rating_note": null
                    },
                    {
                        "id": "sl-016",
                        "name": "Kopi Khas Sulawesi Selatan",
                        "origin": "Sulawesi Selatan",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Sulawesi Selatan.",
                        "description_ind": "Hidangan Kopi Khas Sulawesi Selatan tradisional khas Sulawesi Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "sulawesi selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "sulawesi selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-017",
                        "name": "Tumis Sayur Sulawesi Tengah",
                        "origin": "Sulawesi Tengah",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Sulawesi Tengah.",
                        "description_ind": "Hidangan Tumis Sayur Sulawesi Tengah tradisional khas Sulawesi Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "sulawesi tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "sulawesi tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-018",
                        "name": "Kerupuk Sulawesi Tenggara",
                        "origin": "Sulawesi Tenggara",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Sulawesi Tenggara.",
                        "description_ind": "Hidangan Kerupuk Sulawesi Tenggara tradisional khas Sulawesi Tenggara yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "sulawesi tenggara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "sulawesi tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-019",
                        "name": "Kue Basah Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Sulawesi Barat.",
                        "description_ind": "Hidangan Kue Basah Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-020",
                        "name": "Kopi Khas Sulawesi Tenggara",
                        "origin": "Sulawesi Tenggara",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Sulawesi Tenggara.",
                        "description_ind": "Hidangan Kopi Khas Sulawesi Tenggara tradisional khas Sulawesi Tenggara yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "sulawesi tenggara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "sulawesi tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-021",
                        "name": "Kopi Khas Sulawesi Tengah",
                        "origin": "Sulawesi Tengah",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Sulawesi Tengah.",
                        "description_ind": "Hidangan Kopi Khas Sulawesi Tengah tradisional khas Sulawesi Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "sulawesi tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "sulawesi tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-022",
                        "name": "Sambal Sulawesi Tengah",
                        "origin": "Sulawesi Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Sulawesi Tengah.",
                        "description_ind": "Hidangan Sambal Sulawesi Tengah tradisional khas Sulawesi Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "sulawesi tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "sulawesi tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-023",
                        "name": "Kopi Khas Sulawesi Tengah",
                        "origin": "Sulawesi Tengah",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Sulawesi Tengah.",
                        "description_ind": "Hidangan Kopi Khas Sulawesi Tengah tradisional khas Sulawesi Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "sulawesi tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "sulawesi tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-024",
                        "name": "Sambal Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Sulawesi Utara.",
                        "description_ind": "Hidangan Sambal Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-025",
                        "name": "Ayam Bakar Gorontalo",
                        "origin": "Gorontalo",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Gorontalo.",
                        "description_ind": "Hidangan Ayam Bakar Gorontalo tradisional khas Gorontalo yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "gorontalo",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "gorontalo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-026",
                        "name": "Nasi Goreng Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Sulawesi Utara.",
                        "description_ind": "Hidangan Nasi Goreng Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-027",
                        "name": "Tumis Sayur Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Sulawesi Utara.",
                        "description_ind": "Hidangan Tumis Sayur Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-028",
                        "name": "Sate Gorontalo",
                        "origin": "Gorontalo",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Gorontalo marinade.",
                        "description_ind": "Hidangan Sate Gorontalo tradisional khas Gorontalo yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "gorontalo",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "gorontalo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-029",
                        "name": "Kerupuk Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Sulawesi Barat.",
                        "description_ind": "Hidangan Kerupuk Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-030",
                        "name": "Sate Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Sulawesi Barat marinade.",
                        "description_ind": "Hidangan Sate Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-031",
                        "name": "Kue Basah Gorontalo",
                        "origin": "Gorontalo",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Gorontalo.",
                        "description_ind": "Hidangan Kue Basah Gorontalo tradisional khas Gorontalo yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "gorontalo",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "gorontalo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-032",
                        "name": "Ikan Bakar Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Sulawesi Utara signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Red Chili",
                            "Shallots",
                            "Tomato",
                            "Lime",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Tomat",
                            "Jeruk Nipis",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Dabu-dabu",

                    "price_range_ind": "Rp30.000 - Rp85.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5965169/5-warung-seafood-enak-di-jakarta-favorit-netizen-tiktok-mampir-yuk",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297721-d10297294-Reviews-Ikan_Bakar_Kinamang-Manado_North_Sulawesi_Sulawesi.html",
                    "rating_note": null
                    },
                    {
                        "id": "sl-033",
                        "name": "Bubur Ayam Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Sulawesi Barat.",
                        "description_ind": "Hidangan Bubur Ayam Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp8.000 - Rp12.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-034",
                        "name": "Sate Sulawesi Tenggara",
                        "origin": "Sulawesi Tenggara",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Sulawesi Tenggara marinade.",
                        "description_ind": "Hidangan Sate Sulawesi Tenggara tradisional khas Sulawesi Tenggara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "sulawesi tenggara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "sulawesi tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://jadesta.kemenpar.go.id/paket/sate_pokea_dan_gogos",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-035",
                        "name": "Tumis Sayur Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Sulawesi Utara.",
                        "description_ind": "Hidangan Tumis Sayur Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-036",
                        "name": "Ikan Bakar Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Sulawesi Barat signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp30.000 - Rp85.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5965169/5-warung-seafood-enak-di-jakarta-favorit-netizen-tiktok-mampir-yuk",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-037",
                        "name": "Ikan Bakar Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Sulawesi Barat signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp30.000 - Rp85.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5965169/5-warung-seafood-enak-di-jakarta-favorit-netizen-tiktok-mampir-yuk",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-038",
                        "name": "Tumis Sayur Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Sulawesi Utara.",
                        "description_ind": "Hidangan Tumis Sayur Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-039",
                        "name": "Es Campur Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Sulawesi Utara.",
                        "description_ind": "Hidangan Es Campur Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://video.tribunnews.com/news/957435/jual-es-campur-rp12-ribu-pasangan-ini-berhasil-sekolahkan-anak-hingga-lulus-pkn-stan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-040",
                        "name": "Bubur Ayam Sulawesi Utara",
                        "origin": "Sulawesi Utara",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Sulawesi Utara.",
                        "description_ind": "Hidangan Bubur Ayam Sulawesi Utara tradisional khas Sulawesi Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "sulawesi utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "sulawesi utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp8.000 - Rp12.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-041",
                        "name": "Es Campur Gorontalo",
                        "origin": "Gorontalo",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Gorontalo.",
                        "description_ind": "Hidangan Es Campur Gorontalo tradisional khas Gorontalo yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "gorontalo",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "gorontalo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://video.tribunnews.com/news/957435/jual-es-campur-rp12-ribu-pasangan-ini-berhasil-sekolahkan-anak-hingga-lulus-pkn-stan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-042",
                        "name": "Kopi Khas Sulawesi Tengah",
                        "origin": "Sulawesi Tengah",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Sulawesi Tengah.",
                        "description_ind": "Hidangan Kopi Khas Sulawesi Tengah tradisional khas Sulawesi Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "sulawesi tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "sulawesi tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-043",
                        "name": "Mie Kuah Gorontalo",
                        "origin": "Gorontalo",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Gorontalo.",
                        "description_ind": "Hidangan Mie Kuah Gorontalo tradisional khas Gorontalo yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "gorontalo",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "gorontalo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp8.000 - Rp12.000",
                    "price_source": "https://finance.detik.com/berita-ekonomi-bisnis/d-6230809/heboh-harga-mi-instan-naik-indomie-di-warkop-tembus-rp-12-000-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-044",
                        "name": "Es Campur Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Sulawesi Barat.",
                        "description_ind": "Hidangan Es Campur Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://video.tribunnews.com/news/957435/jual-es-campur-rp12-ribu-pasangan-ini-berhasil-sekolahkan-anak-hingga-lulus-pkn-stan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-045",
                        "name": "Soto Sulawesi Tenggara",
                        "origin": "Sulawesi Tenggara",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Sulawesi Tenggara.",
                        "description_ind": "Hidangan Soto Sulawesi Tenggara tradisional khas Sulawesi Tenggara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "sulawesi tenggara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "sulawesi tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp6.000 - Rp15.000",
                    "price_source": "https://jatim.idntimes.com/food/dining-guide/warung-soto-ayam-termurah-di-probolinggo-c1c2-01-n55lj-gj4wfx",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-046",
                        "name": "Nasi Goreng Sulawesi Barat",
                        "origin": "Sulawesi Barat",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Sulawesi Barat.",
                        "description_ind": "Hidangan Nasi Goreng Sulawesi Barat tradisional khas Sulawesi Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "sulawesi barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "sulawesi barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-047",
                        "name": "Es Campur Sulawesi Tengah",
                        "origin": "Sulawesi Tengah",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Sulawesi Tengah.",
                        "description_ind": "Hidangan Es Campur Sulawesi Tengah tradisional khas Sulawesi Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "sulawesi tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "sulawesi tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://video.tribunnews.com/news/957435/jual-es-campur-rp12-ribu-pasangan-ini-berhasil-sekolahkan-anak-hingga-lulus-pkn-stan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-048",
                        "name": "Nasi Goreng Gorontalo",
                        "origin": "Gorontalo",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Gorontalo.",
                        "description_ind": "Hidangan Nasi Goreng Gorontalo tradisional khas Gorontalo yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "gorontalo",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "gorontalo"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-049",
                        "name": "Es Campur Sulawesi Tenggara",
                        "origin": "Sulawesi Tenggara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Sulawesi Tenggara.",
                        "description_ind": "Hidangan Es Campur Sulawesi Tenggara tradisional khas Sulawesi Tenggara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "sulawesi tenggara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "sulawesi tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://video.tribunnews.com/news/957435/jual-es-campur-rp12-ribu-pasangan-ini-berhasil-sekolahkan-anak-hingga-lulus-pkn-stan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "sl-050",
                        "name": "Bubur Ayam Sulawesi Selatan",
                        "origin": "Sulawesi Selatan",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Sulawesi Selatan.",
                        "description_ind": "Hidangan Bubur Ayam Sulawesi Selatan tradisional khas Sulawesi Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "sulawesi selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "sulawesi selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp8.000 - Rp12.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "nama": "Papua",
        "ibukota": "Jayapura",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Guinea%20Topography.png?width=400",
        "provinsi": [
            "Papua",
            "Papua Barat",
            "Papua Selatan",
            "Papua Tengah",
            "Papua Pegunungan",
            "Papua Barat Daya"
        ],
        "deskripsi": "Pulau terbesar di Indonesia dengan keanekaragaman hayati dan budaya yang luar biasa.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "pp-001",
                        "name": "Papeda Kuah Kuning",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Sticky sago porridge served with yellow turmeric fish soup made from tuna or snapper and lime.",
                        "description_ind": "Papeda kuah kuning adalah makanan khas Papua berupa bubur sagu kenyal yang disajikan dengan kuah kuning ikan tuna atau kakap beraroma kunyit dan jeruk nipis.",
                        "ingredients_eng": [
                            "Sago Starch",
                            "Tuna",
                            "Turmeric",
                            "Lime",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Tepung Sagu",
                            "Ikan Tuna",
                            "Kunyit",
                            "Jeruk Nipis",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Sour",
                            "Savory",
                            "Fresh"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "papeda",
                            "sagu",
                            "kuah kuning",
                            "papua",
                            "ikan"
                        ],
                        "search_keywords_eng": [
                            "papeda",
                            "sago",
                            "yellow soup",
                            "papua",
                            "fish"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Papeda%20Kuah%20Kuning%20Ternate-3.jpg?width=800",
                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g680181-d7974155-Reviews-Yougwa_Restaurant-Jayapura_Papua.html",
                    "rating_note": null
                    },
                    {
                        "id": "pp-002",
                        "name": "Kue Lontar",
                        "origin": "Papua",
                        "category": "Dessert",
                        "description_eng": "Soft, sweet custard milk pie baked in a traditional ceramic plate with a fragrant aroma and rich creamy texture.",
                        "description_ind": "Kue pai susu khas Papua yang lembut dan manis, dipanggang di piring keramik khusus dengan aroma harum dan tekstur creamy.",
                        "ingredients_eng": [
                            "Wheat Flour",
                            "Egg",
                            "Condensed Milk",
                            "Sugar",
                            "Margarine"
                        ],
                        "ingredients_ind": [
                            "Tepung Terigu",
                            "Telur",
                            "Susu Kental Manis",
                            "Gula",
                            "Margarin"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Fragrant",
                            "Soft"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue lontar",
                            "pai susu",
                            "papua",
                            "kue manis",
                            "dessert"
                        ],
                        "search_keywords_eng": [
                            "kue lontar",
                            "papua dessert",
                            "lontar cake",
                            "milk pie",
                            "custard tart"
                        ],
                        "image": null,
                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": 5,
                    "rating_platform": "Tokopedia",
                    "rating_source": "https://www.tokopedia.com/ale-shanum/kue-lontar-susu-khas-papua-kue-lontar-papua-tart-susu-original/review",
                    "rating_note": null
                    },
                    {
                        "id": "pp-003",
                        "name": "Ikan Bakar Manokwari",
                        "origin": "Manokwari",
                        "category": "Main Dish",
                        "description_eng": "Fresh grilled fish seasoned with special coarsely ground chili spices, offering a smoky, fiery, and savory taste.",
                        "description_ind": "Ikan bakar segar khas Manokwari yang dilumuri sambal cabai giling kasar khas Papua, memberikan sensasi rasa gurih, pedas, dan aroma bakaran asap yang nikmat.",
                        "ingredients_eng": [
                            "Fresh Fish",
                            "Raw Red Chili",
                            "Shallots",
                            "Garlic",
                            "Lime",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Ikan Segar",
                            "Cabai Rawit Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Jeruk Nipis",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Spicy",
                            "Smoky"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar manokwari",
                            "ikan bakar",
                            "manokwari",
                            "sambal manokwari",
                            "papua"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "grilled fish",
                            "manokwari",
                            "papua",
                            "seafood"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "price_range_ind": "Rp40.000 - Rp60.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": 4.5,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g680178-d10031736-Reviews-Warung_Lamongan_ikan_Bakar-Manokwari_West_Papua.html",
                    "rating_note": null
                    },
                    {
                        "id": "pp-004",
                        "name": "Sagu Lempeng",
                        "origin": "Papua",
                        "category": "Snack",
                        "description_eng": "Hard, dry sago flatbread baked in a traditional clay mold, usually dipped in warm tea, coffee, or fish soup before eating.",
                        "description_ind": "Roti pipih sagu tradisional Papua yang dibakar dalam cetakan tanah liat, bertekstur padat dan renyah, nikmat dicelupkan ke teh manis, kopi, atau kuah ikan.",
                        "ingredients_eng": [
                            "Sago Starch",
                            "Water",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Tepung Sagu",
                            "Air",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Neutral",
                            "Earthy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sagu lempeng",
                            "roti sagu",
                            "papua",
                            "camilan sagu",
                            "kue kering papua"
                        ],
                        "search_keywords_eng": [
                            "sagu lempeng",
                            "sago flatbread",
                            "papua sago",
                            "traditional bread",
                            "snack"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sago%20starch%20product%20sagu%20lempeng%20from%20Maluku%2CID%20feb2002.jpg?width=800",
                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-005",
                        "name": "Sate Ulat Sagu",
                        "origin": "Papua",
                        "category": "Snack",
                        "description_eng": "Skewered sago palm grubs grilled over charcoal, rich in protein with a creamy, nutty taste and a crisp skin.",
                        "description_ind": "Sate ulat pohon sagu khas Papua yang dibakar di atas arang, kaya protein dengan rasa gurih manis berlemak dan kulit yang renyah.",
                        "ingredients_eng": [
                            "Sago Palm Grubs",
                            "Salt",
                            "Lime Juice",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Ulat Sagu",
                            "Garam",
                            "Jeruk Nipis",
                            "Cabai Rawit"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Creamy",
                            "Smoky"
                        ],
                        "is_halal": false,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate ulat sagu",
                            "ulat sagu",
                            "kuliner ekstrim papua",
                            "sate papua",
                            "protein tinggi"
                        ],
                        "search_keywords_eng": [
                            "sate ulat sagu",
                            "sago grubs",
                            "papua satay",
                            "traditional snack",
                            "exotic food"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20ulat%20sagu.webp?width=800",
                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-006",
                        "name": "Udang Selingkuh",
                        "origin": "Wamena",
                        "category": "Main Dish",
                        "description_eng": "Prawns 'cheated on' with cuttlefish tentacles, battered and fried — a legendary Jayapura specialty.",
                        "description_ind": "Udang yang 'ditusuki' tentakel sotong lalu digoreng tepung, sajian khas Jayapura yang unik dan legendaris.",
                        "ingredients_eng": [
                            "Prawns",
                            "Cuttlefish Tentacles",
                            "Flour Batter",
                            "Egg",
                            "Garlic",
                            "Chili Sauce"
                        ],
                        "ingredients_ind": [
                            "Udang",
                            "Tentakel Sotong",
                            "Tepung",
                            "Telur",
                            "Bawang Putih",
                            "Saus Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "udang selingkuh",
                            "wamena",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "udang selingkuh",
                            "traditional",
                            "wamena"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Danau%20Paniai.%20Danau%20Paniai%20adalah%20danau%20yang%20berada%20di%20kabupaten%20Paniai.%20Danau%20ini%20memiliki%20banyak%20keanekaragaman%20hayati%20yang%20sangat%20banyak.%20Salah%20satu%20spesies%20endemiknya%20adalah%20udang%20selingkuh.jpg?width=800",
                    "ingredients_source": "https://www.indonesia.travel/id/id/travel-ideas/gastronomy/udang-selingkuh",

                    "price_range_ind": "Rp100.000 - Rp250.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-007",
                        "name": "Keladi Tumbuk",
                        "origin": "Biak",
                        "category": "Main Dish",
                        "description_eng": "Boiled taro pounded with coconut and salt, a chewy savory snack from Papua.",
                        "description_ind": "Keladi rebus yang ditumbuk bersama kelapa dan garam, camilan khas Papua yang kenyal dan gurih.",
                        "ingredients_eng": [
                            "Taro",
                            "Grated Coconut",
                            "Salt",
                            "Chili",
                            "Anchovies",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Keladi",
                            "Kelapa Parut",
                            "Garam",
                            "Cabai",
                            "Teri",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "keladi tumbuk",
                            "biak",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "keladi tumbuk",
                            "traditional",
                            "biak"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Keladi_tumbuk",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-008",
                        "name": "Ikan Kuah Hitam",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Sentani lake fish (hebehelo) cooked with kluwek and taro leaves into a dark, earthy broth, traditionally served in clay pottery.",
                        "description_ind": "Ikan danau khas Sentani (hebehelo) yang dimasak dengan kluwek dan daun keladi hingga kuahnya gelap pekat, disajikan dalam wadah gerabah.",
                        "ingredients_eng": [
                            "Lake Fish",
                            "Kluwek",
                            "Taro Leaves",
                            "Kemangi",
                            "Chili",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Ikan Danau",
                            "Kluwek",
                            "Daun Keladi",
                            "Kemangi",
                            "Cabai",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan kuah hitam",
                            "papua",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ikan kuah hitam",
                            "traditional",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sup%20Ikan%20Siakap.jpg?width=800",
                    "ingredients_source": "https://papua.tribunnews.com/2022/11/18/wisata-papua-sajian-kuliner-khas-ikan-kuah-hitam",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://travel.kompas.com/read/2019/12/03/170200627/icip-icip-makanan-khas-papua-keladi-tumbuk",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-009",
                        "name": "Aunu Senebre",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Anchovies and rice mixed with turmeric-spiced grated coconut, a West Papua specialty.",
                        "description_ind": "Teri dan nasi yang dicampur kelapa parut berbumbu kunyit, makanan khas Papua Barat.",
                        "ingredients_eng": [
                            "Anchovies",
                            "Rice",
                            "Turmeric",
                            "Grated Coconut",
                            "Garlic",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Teri Nasi",
                            "Beras",
                            "Kunyit",
                            "Kelapa Parut",
                            "Bawang Putih",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "aunu senebre",
                            "papua",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "aunu senebre",
                            "traditional",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Stamp%20of%20Indonesia%20-%202006%20-%20Colnect%20385078%20-%20Indonesian%20Traditional%20Foods%20-%20Aunu%20Senebre.jpeg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Aunu_senebre",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-010",
                        "name": "Abon Gulung",
                        "origin": "Manokwari",
                        "category": "Snack",
                        "description_eng": "A Papua street snack: soft bread rolls buttered and filled with sweet-savory shredded beef.",
                        "description_ind": "Roti gulung khas Papua yang dilumuri mentega dan mayones lalu diisi abon sapi manis gurih.",
                        "ingredients_eng": [
                            "Shredded Beef",
                            "Bread Roll",
                            "Butter",
                            "Milk",
                            "Sugar",
                            "Mayonnaise"
                        ],
                        "ingredients_ind": [
                            "Abon Sapi",
                            "Roti Gulung",
                            "Mentega",
                            "Susu",
                            "Gula",
                            "Mayones"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "abon gulung",
                            "manokwari",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "abon gulung",
                            "traditional",
                            "manokwari"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Abon_gulung",

                    "price_range_ind": "Rp80.000 - Rp100.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.co.id/Restaurant_Review-g680178-d7983075-Reviews-Hawai_Bakery_Coffee_Shop-Manokwari_West_Papua.html",
                    "rating_note": null
                    },
                    {
                        "id": "pp-011",
                        "name": "Es Kelapa Asam",
                        "origin": "Papua",
                        "category": "Beverage",
                        "description_eng": "Fresh young coconut served over shaved ice with pandan-scented sugar syrup, a Papua refreshment.",
                        "description_ind": "Kelapa muda segar yang disajikan dengan es serut dan air gula beraroma pandan, minuman khas Papua.",
                        "ingredients_eng": [
                            "Young Coconut",
                            "Tamarind",
                            "Syrup",
                            "Shaved Ice",
                            "Pandan",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Kelapa Muda",
                            "Asam Jawa",
                            "Sirup",
                            "Es Serut",
                            "Pandan",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es kelapa asam",
                            "papua",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "es kelapa asam",
                            "traditional",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Kelapa%20Muda.JPG?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-012",
                        "name": "Sambal Colo-Colo Papua",
                        "origin": "Papua",
                        "category": "Condiment",
                        "description_eng": "A Papua sambal of bird's eye chilies and shallots cut with lime juice and sweet soy sauce.",
                        "description_ind": "Sambal khas Papua yang dibuat dari cabai rawit dan bawang merah yang dipecah dengan jeruk nipis dan kecap manis.",
                        "ingredients_eng": [
                            "Bird's Eye Chili",
                            "Shallots",
                            "Lime",
                            "Sweet Soy Sauce",
                            "Kemangi",
                            "Tomato"
                        ],
                        "ingredients_ind": [
                            "Cabai Rawit",
                            "Bawang Merah",
                            "Jeruk Nipis",
                            "Kecap Manis",
                            "Kemangi",
                            "Tomat"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sambal colo-colo papua",
                            "papua",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sambal colo-colo papua",
                            "traditional",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Colo-colo",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6155625/10-makanan-khas-manokwari-yang-wajib-dicoba-pencinta-kuliner-nusantara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-013",
                        "name": "Sate Kerang Papua",
                        "origin": "Papua",
                        "category": "Snack",
                        "description_eng": "Jayapura clam satay served with a spicy peanut sauce and a squeeze of lime.",
                        "description_ind": "Sate kerang khas Jayapura yang disajikan dengan bumbu kacang pedas dan perasan jeruk nipis.",
                        "ingredients_eng": [
                            "Clams",
                            "Peanut Sauce",
                            "Shallots",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Kerang",
                            "Bumbu Kacang",
                            "Bawang Merah",
                            "Cabai",
                            "Kecap Manis",
                            "Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate kerang papua",
                            "papua",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate kerang papua",
                            "traditional",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Kerang%20Tampak%20Atas.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate_kerang",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-014",
                        "name": "Sup Ikan Red Snapper",
                        "origin": "Jayapura",
                        "category": "Main Dish",
                        "description_eng": "A Papua red snapper soup in a tangy golden broth of turmeric, ginger, and kemangi basil.",
                        "description_ind": "Sup kakap merah khas Papua dengan kuah kuning asam berrempah kunyit, jahe, dan kemangi.",
                        "ingredients_eng": [
                            "Red Snapper",
                            "Turmeric",
                            "Tamarind",
                            "Basil",
                            "Tomato",
                            "Ginger"
                        ],
                        "ingredients_ind": [
                            "Kakap Merah",
                            "Kunyit",
                            "Asam",
                            "Kemangi",
                            "Tomat",
                            "Jahe"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sup ikan red snapper",
                            "jayapura",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sup ikan red snapper",
                            "traditional",
                            "jayapura"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sup%20Ikan%20Siakap.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sup_ikan",

                    "price_range_ind": "Rp55.000 - Rp70.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-8693243/kabar-baru-dari-warung-mak-beng-harga-berubah-buka-cabang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-015",
                        "name": "Ayam Goreng Mambri",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Sorong-style chicken simmered in spiced coconut milk then fried until dry and crisp.",
                        "description_ind": "Ayam goreng khas Sorong yang direbus dalam santan berrempah lalu digoreng hingga kering dan renyah.",
                        "ingredients_eng": [
                            "Chicken",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Chili",
                            "Coconut Milk"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Cabai",
                            "Santan"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam goreng mambri",
                            "papua",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ayam goreng mambri",
                            "traditional",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20goreng%20(2).JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_goreng",

                    "price_range_ind": "Rp25.000 - Rp35.000",
                    "price_source": "https://kupang.tribunnews.com/editorial/983528/opini-seporsi-ayam-dua-jam-kerja",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-016",
                        "name": "Kopi Khas Papua",
                        "origin": "Papua",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Papua.",
                        "description_ind": "Hidangan Kopi Khas Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-017",
                        "name": "Nasi Goreng Papua Barat Daya",
                        "origin": "Papua Barat Daya",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Papua Barat Daya.",
                        "description_ind": "Hidangan Nasi Goreng Papua Barat Daya tradisional khas Papua Barat Daya yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "papua barat daya",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "papua barat daya"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://travel.tribunnews.com/2021/07/14/nasi-goreng-murah-meriah-di-pati-harganya-cuma-rp-3000-per-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-018",
                        "name": "Tumis Sayur Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Papua Selatan.",
                        "description_ind": "Hidangan Tumis Sayur Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-019",
                        "name": "Tumis Sayur Papua Tengah",
                        "origin": "Papua Tengah",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Papua Tengah.",
                        "description_ind": "Hidangan Tumis Sayur Papua Tengah tradisional khas Papua Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "papua tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "papua tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-020",
                        "name": "Kopi Khas Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Papua Pegunungan.",
                        "description_ind": "Hidangan Kopi Khas Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-021",
                        "name": "Sate Papua Barat",
                        "origin": "Papua Barat",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Papua Barat marinade.",
                        "description_ind": "Hidangan Sate Papua Barat tradisional khas Papua Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "papua barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "papua barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-022",
                        "name": "Tumis Sayur Papua",
                        "origin": "Papua",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Papua.",
                        "description_ind": "Hidangan Tumis Sayur Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-023",
                        "name": "Ayam Bakar Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Papua Pegunungan.",
                        "description_ind": "Hidangan Ayam Bakar Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-024",
                        "name": "Soto Papua Barat",
                        "origin": "Papua Barat",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Papua Barat.",
                        "description_ind": "Hidangan Soto Papua Barat tradisional khas Papua Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "papua barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "papua barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://travel.tribunnews.com/2021/06/08/viral-soto-murah-rp-1000-di-sragen-tiap-jumat-tak-perlu-bayar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-025",
                        "name": "Mie Kuah Papua Barat",
                        "origin": "Papua Barat",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Papua Barat.",
                        "description_ind": "Hidangan Mie Kuah Papua Barat tradisional khas Papua Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "papua barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "papua barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp5.000 - Rp25.000",
                    "price_source": "https://www.suara.com/lifestyle/2020/08/06/090056/mie-ayam-cuma-lima-ribu-porsi-bikin-kenyang-ini-ada-di-yogya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-026",
                        "name": "Sambal Papua Tengah",
                        "origin": "Papua Tengah",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Papua Tengah.",
                        "description_ind": "Hidangan Sambal Papua Tengah tradisional khas Papua Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "papua tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "papua tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-027",
                        "name": "Bubur Ayam Papua",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Papua.",
                        "description_ind": "Hidangan Bubur Ayam Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp18.000 - Rp26.000",
                    "price_source": "https://jogja.tribunnews.com/2025/04/08/7-warung-bubur-lezat-di-jogja-cocok-untuk-sarapan-atau-kuliner-malam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-028",
                        "name": "Kerupuk Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Papua Pegunungan.",
                        "description_ind": "Hidangan Kerupuk Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://food.detik.com/berita-boga/d-6039515/sah-harga-kerupuk-warung-naik-jadi-rp-2-000-setelah-lebaran",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-029",
                        "name": "Soto Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Papua Pegunungan.",
                        "description_ind": "Hidangan Soto Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://travel.tribunnews.com/2021/06/08/viral-soto-murah-rp-1000-di-sragen-tiap-jumat-tak-perlu-bayar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-030",
                        "name": "Sambal Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Papua Pegunungan.",
                        "description_ind": "Hidangan Sambal Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-031",
                        "name": "Bubur Ayam Papua",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Papua.",
                        "description_ind": "Hidangan Bubur Ayam Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp18.000 - Rp26.000",
                    "price_source": "https://jogja.tribunnews.com/2025/04/08/7-warung-bubur-lezat-di-jogja-cocok-untuk-sarapan-atau-kuliner-malam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-032",
                        "name": "Sate Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Papua Selatan marinade.",
                        "description_ind": "Hidangan Sate Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-033",
                        "name": "Kue Basah Papua Barat Daya",
                        "origin": "Papua Barat Daya",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Papua Barat Daya.",
                        "description_ind": "Hidangan Kue Basah Papua Barat Daya tradisional khas Papua Barat Daya yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "papua barat daya",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "papua barat daya"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp5.000",
                    "price_source": "https://aceh.tribunnews.com/video/1054409/video-harga-tepung-kanji-melonjak-pengusaha-penggilingan-bakso-di-aceh-tamiang-menjerit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-034",
                        "name": "Kue Basah Papua Barat Daya",
                        "origin": "Papua Barat Daya",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Papua Barat Daya.",
                        "description_ind": "Hidangan Kue Basah Papua Barat Daya tradisional khas Papua Barat Daya yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "papua barat daya",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "papua barat daya"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp5.000",
                    "price_source": "https://aceh.tribunnews.com/video/1054409/video-harga-tepung-kanji-melonjak-pengusaha-penggilingan-bakso-di-aceh-tamiang-menjerit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-035",
                        "name": "Sambal Papua",
                        "origin": "Papua",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Papua.",
                        "description_ind": "Hidangan Sambal Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-036",
                        "name": "Ayam Bakar Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Papua Selatan.",
                        "description_ind": "Hidangan Ayam Bakar Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-037",
                        "name": "Tumis Sayur Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Papua Selatan.",
                        "description_ind": "Hidangan Tumis Sayur Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-038",
                        "name": "Kerupuk Papua Tengah",
                        "origin": "Papua Tengah",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Papua Tengah.",
                        "description_ind": "Hidangan Kerupuk Papua Tengah tradisional khas Papua Tengah yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "papua tengah",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "papua tengah"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://food.detik.com/berita-boga/d-6039515/sah-harga-kerupuk-warung-naik-jadi-rp-2-000-setelah-lebaran",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-039",
                        "name": "Sate Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Papua Selatan marinade.",
                        "description_ind": "Hidangan Sate Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-040",
                        "name": "Sambal Papua Barat",
                        "origin": "Papua Barat",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Papua Barat.",
                        "description_ind": "Hidangan Sambal Papua Barat tradisional khas Papua Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "papua barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "papua barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-041",
                        "name": "Soto Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Papua Selatan.",
                        "description_ind": "Hidangan Soto Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://travel.tribunnews.com/2021/06/08/viral-soto-murah-rp-1000-di-sragen-tiap-jumat-tak-perlu-bayar",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-042",
                        "name": "Sambal Papua",
                        "origin": "Papua",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Papua.",
                        "description_ind": "Hidangan Sambal Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-043",
                        "name": "Mie Kuah Papua Selatan",
                        "origin": "Papua Selatan",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Papua Selatan.",
                        "description_ind": "Hidangan Mie Kuah Papua Selatan tradisional khas Papua Selatan yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "papua selatan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "papua selatan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp5.000 - Rp25.000",
                    "price_source": "https://www.suara.com/lifestyle/2020/08/06/090056/mie-ayam-cuma-lima-ribu-porsi-bikin-kenyang-ini-ada-di-yogya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-044",
                        "name": "Sambal Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Papua Pegunungan.",
                        "description_ind": "Hidangan Sambal Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SAMBAL%20BAWANG.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-045",
                        "name": "Mie Kuah Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Papua Pegunungan.",
                        "description_ind": "Hidangan Mie Kuah Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp5.000 - Rp25.000",
                    "price_source": "https://www.suara.com/lifestyle/2020/08/06/090056/mie-ayam-cuma-lima-ribu-porsi-bikin-kenyang-ini-ada-di-yogya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-046",
                        "name": "Kue Basah Papua Barat",
                        "origin": "Papua Barat",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Papua Barat.",
                        "description_ind": "Hidangan Kue Basah Papua Barat tradisional khas Papua Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "papua barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "papua barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp5.000",
                    "price_source": "https://aceh.tribunnews.com/video/1054409/video-harga-tepung-kanji-melonjak-pengusaha-penggilingan-bakso-di-aceh-tamiang-menjerit",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-047",
                        "name": "Kopi Khas Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Papua Pegunungan.",
                        "description_ind": "Hidangan Kopi Khas Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-048",
                        "name": "Sate Papua",
                        "origin": "Papua",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Papua marinade.",
                        "description_ind": "Hidangan Sate Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://video.tribunnews.com/travel/972435/cicipi-sate-kambing-pak-pur-tawangmangu-harga-rp21-ribu-dapat-10-tusuk-dengan-bumbu-yang-meresap",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-049",
                        "name": "Kopi Khas Papua",
                        "origin": "Papua",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Papua.",
                        "description_ind": "Hidangan Kopi Khas Papua tradisional khas Papua yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "papua",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "papua"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp3.000 - Rp5.000",
                    "price_source": "https://www.detik.com/jatim/berita/d-6110234/harga-mewah-secangkir-kopi-di-warkop-pangku-gresik",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "pp-050",
                        "name": "Es Campur Papua Pegunungan",
                        "origin": "Papua Pegunungan",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Papua Pegunungan.",
                        "description_ind": "Hidangan Es Campur Papua Pegunungan tradisional khas Papua Pegunungan yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "papua pegunungan",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "papua pegunungan"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://video.tribunnews.com/news/957435/jual-es-campur-rp12-ribu-pasangan-ini-berhasil-sekolahkan-anak-hingga-lulus-pkn-stan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "nama": "Bali",
        "ibukota": "Denpasar",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/Bali%20Locator%20Topography.png?width=400",
        "provinsi": [
            "Bali"
        ],
        "deskripsi": "Pulau Dewata, pusat pariwisata internasional dengan budaya Hindu yang kental.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "bl-001",
                        "name": "Ayam Betutu",
                        "origin": "Gilimanuk",
                        "category": "Main Dish",
                        "description_eng": "Slow-cooked whole chicken richly spiced with Balinese bumbu genep, wrapped in banana leaves and roasted until tender.",
                        "description_ind": "Ayam utuh khas Gilimanuk yang dibumbui rempah genep Bali yang pekat, dibungkus pelepah pinang atau daun pisang, lalu dipanggang hingga sangat empuk dan meresap.",
                        "ingredients_eng": [
                            "Chicken",
                            "Bumbu Genep Spices",
                            "Lemongrass",
                            "Shallot",
                            "Garlic",
                            "Chili",
                            "Banana Leaf"
                        ],
                        "ingredients_ind": [
                            "Ayam Utuh",
                            "Bumbu Genep Bali",
                            "Serai",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Daun Pisang"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Savory",
                            "Aromatic",
                            "Rich"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam betutu",
                            "betutu bali",
                            "ayam gilimanuk",
                            "pedas bali",
                            "kuliner bali"
                        ],
                        "search_keywords_eng": [
                            "ayam betutu",
                            "betutu chicken",
                            "balinese chicken",
                            "gilimanuk",
                            "spicy roasted chicken"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20betutu%20khas%20Gilimanuk.jpg?width=800",
                    "price_range_ind": "Rp15.000 - Rp50.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-7355730/5-rekomendasi-warung-ayam-betutu-di-denpasar-harganya-mulai-rp-25-ribuan",
                    "rating": 4.3,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g1592983-d4799827-Reviews-Ayam_Betutu_Men_Tempeh-Gilimanuk_Bali.html",
                    "rating_note": null
                    },
                    {
                        "id": "bl-002",
                        "name": "Sate Lilit",
                        "origin": "Klungkung",
                        "category": "Main Dish",
                        "description_eng": "Minced fish or chicken seasoned with grated coconut, coconut milk, and aromatic spices, wrapped around lemongrass stalks and grilled.",
                        "description_ind": "Sate khas Klungkung dari daging ikan tenggiri atau ayam cincang yang diaduk bersama kelapa parut dan santan bumbu Bali, dililitkan pada batang serai lalu dibakar.",
                        "ingredients_eng": [
                            "Minced Fish",
                            "Minced Chicken",
                            "Grated Coconut",
                            "Coconut Milk",
                            "Lemongrass Stalks",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Daging Ikan Cincang",
                            "Daging Ayam Cincang",
                            "Kelapa Parut",
                            "Santan",
                            "Batang Serai",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Sweet",
                            "Aromatic",
                            "Smoky"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate lilit",
                            "sate lilit bali",
                            "sate batang serai",
                            "klungkung",
                            "sate ikan"
                        ],
                        "search_keywords_eng": [
                            "sate lilit",
                            "balinese satay",
                            "lemongrass skewers",
                            "minced satay",
                            "grilled fish satay"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Lilit.jpg?width=800",
                    "price_range_ind": "Rp15.000 - Rp30.000",
                    "price_source": "https://travel.tribunnews.com/kuliner/145825/5-sate-lilit-enak-di-denpasar-bali-harga-mulai-rp-15000",
                    "rating": 4.5,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g1953908-d3191633-Reviews-Warung_Lesehan_Merta_Sari-Klungkung_Bali.html",
                    "rating_note": null
                    },
                    {
                        "id": "bl-003",
                        "name": "Babi Guling",
                        "origin": "Gianyar",
                        "category": "Main Dish",
                        "description_eng": "Traditional roasted suckling pig seasoned with turmeric, coriander, and herbs, celebrated for its crackling crispy skin.",
                        "description_ind": "Babi panggang guling khas Gianyar berbalur bumbu rempah kunyit dan ketumbar dengan kulit luar yang super renyah dan daging yang gurih juicy.",
                        "ingredients_eng": [
                            "Pork",
                            "Bumbu Genep",
                            "Turmeric",
                            "Coriander",
                            "Lemongrass",
                            "Cassava Leaves"
                        ],
                        "ingredients_ind": [
                            "Daging Babi",
                            "Bumbu Genep",
                            "Kunyit",
                            "Ketumbar",
                            "Serai",
                            "Daun Singkong"
                        ],
                        "flavor_profile": [
                            "Crispy",
                            "Savory",
                            "Spicy",
                            "Rich"
                        ],
                        "is_halal": false,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "babi guling",
                            "kulit krispi",
                            "gianyar",
                            "babi panggang bali",
                            "kuliner bali"
                        ],
                        "search_keywords_eng": [
                            "babi guling",
                            "suckling pig",
                            "crispy pork skin",
                            "gianyar",
                            "balinese pork"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Babi%20Guling.jpg?width=800",
                    "price_range_ind": "Rp25.000 - Rp40.000",
                    "price_source": "https://food.detik.com/tempat-makan/d-8553950/5-warung-babi-guling-legendaris-bali-rasanya-autentik-dan-selalu-ramai",
                    "rating": 3.5,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297701-d3680515-Reviews-Warung_Babi_Guling_Ibu_Oka_3-Ubud_Gianyar_Regency_Bali.html",
                    "rating_note": null
                    },
                    {
                        "id": "bl-004",
                        "name": "Lawar",
                        "origin": "Bali",
                        "category": "Side Dish",
                        "description_eng": "Traditional Balinese mixture of finely chopped green vegetables, grated coconut, and spices seasoned with lime juice.",
                        "description_ind": "Sayuran khas Bali berupa cincangan kacang panjang, kelapa parut bakar, dan rempah harum yang diberi perasan jeruk limau segar.",
                        "ingredients_eng": [
                            "Long Beans",
                            "Grated Coconut",
                            "Chicken",
                            "Shallot",
                            "Garlic",
                            "Chili",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Kacang Panjang",
                            "Kelapa Parut",
                            "Daging Ayam",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Jeruk Limau"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Fresh",
                            "Spicy",
                            "Herbal"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "lawar",
                            "lawar bali",
                            "lawar ayam",
                            "kacang panjang kelapa",
                            "sayur bali"
                        ],
                        "search_keywords_eng": [
                            "lawar",
                            "balinese salad",
                            "long beans",
                            "bali side dish",
                            "traditional salad"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lawar%20getih(balinese%20culture%20food)%20.jpg?width=800",
                    "price_range_ind": "Rp12.000 - Rp40.000",
                    "price_source": "https://kumparan.com/seputar-bali/4-nasi-lawar-di-bali-yang-enak-beserta-kisaran-harga-menunya-21pwSanO7xG",
                    "rating": 4.1,
                    "rating_platform": "Restaurant Guru",
                    "rating_source": "https://restaurantguru.com/Warung-Men-Rangeng-Gianyar",
                    "rating_note": null
                    },
                    {
                        "id": "bl-005",
                        "name": "Nasi Tepeng",
                        "origin": "Gianyar",
                        "category": "Main Dish",
                        "description_eng": "Soft spiced rice cooked with rich turmeric broth, topped with shredded chicken, jackfruit, beans, and fiery sambal.",
                        "description_ind": "Nasi lembek kuning gurih berempah khas Gianyar yang disajikan dengan suwiran ayam, lawar nangka, kacang panjang, dan sambal pedas menggigit.",
                        "ingredients_eng": [
                            "Rice",
                            "Turmeric",
                            "Chicken",
                            "Long Beans",
                            "Young Jackfruit",
                            "Grated Coconut",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Beras",
                            "Kunyit",
                            "Daging Ayam",
                            "Kacang Panjang",
                            "Nangka Muda",
                            "Kelapa Parut",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Savory",
                            "Soft",
                            "Aromatic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi tepeng",
                            "nasi gianyar",
                            "nasi lembek kuning",
                            "sarapan bali",
                            "tepeng"
                        ],
                        "search_keywords_eng": [
                            "nasi tepeng",
                            "spiced rice porridge",
                            "gianyar",
                            "bali breakfast",
                            "turmeric rice"
                        ],
                        "image": null,
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-006",
                        "name": "Sate Plecing",
                        "origin": "Singaraja",
                        "category": "Main Dish",
                        "description_eng": "Balinese satay served with a fresh, fiery tomato-chili plecing sambal.",
                        "description_ind": "Sate khas Bali yang disajikan dengan sambal plecing tomat cabai pedas segar.",
                        "ingredients_eng": [
                            "Beef",
                            "Tomato Chili Sambal",
                            "Garlic",
                            "Kaffir Lime Leaves",
                            "Coconut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Sambal Tomat Cabai",
                            "Bawang Putih",
                            "Daun Jeruk",
                            "Kelapa",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate plecing",
                            "singaraja",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate plecing",
                            "traditional",
                            "singaraja"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Plecing.jpg?width=800",
                    "ingredients_source": "https://www.idntimes.com/food/recipe/resep-sate-plecing-khas-bali-c1c2-01-mtn6k-zmkgrq",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.3,
                    "rating_platform": "LokasiBali (agregat Google)",
                    "rating_source": "https://lokasibali.com/lokasi/sate-plecing-siobak-singaraja-warung-dharmasanti",
                    "rating_note": null
                    },
                    {
                        "id": "bl-007",
                        "name": "Nasi Campur Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "A Balinese mixed rice plate with shredded chicken, sate lilit, urab vegetables, and sambal matah over steamed rice.",
                        "description_ind": "Nasi campur khas Bali berisi ayam suwir, sate lilit, sayur urab, dan sambal matah di atas nasi putih.",
                        "ingredients_eng": [
                            "Steamed Rice",
                            "Shredded Chicken",
                            "Sate Lilit",
                            "Sambal Matah",
                            "Vegetables",
                            "Peanut Sauce"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Ayam Suwir",
                            "Sate Lilit",
                            "Sambal Matah",
                            "Sayuran",
                            "Bumbu Kacang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi campur bali",
                            "bali",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "nasi campur bali",
                            "traditional",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20Campur%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_campur",

                    "price_range_ind": "Rp15.000 - Rp30.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-6738434/5-rekomendasi-nasi-campur-terpopuler-di-bali",
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.co.uk/Restaurant_Review-g297700-d9718254-Reviews-Warung_KKN_Nasi_Campur-Sanur_Denpasar_Bali.html",
                    "rating_note": null
                    },
                    {
                        "id": "bl-008",
                        "name": "Tum Ayam",
                        "origin": "Bali",
                        "category": "Side Dish",
                        "description_eng": "Balinese tum: minced chicken seasoned with base genep, wrapped in banana leaf and steamed.",
                        "description_ind": "Tum khas Bali: ayam giling berbumbu basa genep yang dibungkus daun pisang lalu dikukus.",
                        "ingredients_eng": [
                            "Minced Chicken",
                            "Banana Leaf",
                            "Basa Genep",
                            "Coconut",
                            "Chili",
                            "Lime Leaves"
                        ],
                        "ingredients_ind": [
                            "Ayam Giling",
                            "Daun Pisang",
                            "Basa Genep",
                            "Kelapa",
                            "Cabai",
                            "Daun Jeruk"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tum ayam",
                            "bali",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "tum ayam",
                            "traditional",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20goreng%20(2).JPG?width=800",
                    "ingredients_source": "https://www.goodnewsfromindonesia.id/ragam/budaya/tum-ayam-khas-bali",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-009",
                        "name": "Rujak Bulung",
                        "origin": "Bali",
                        "category": "Snack",
                        "description_eng": "A fresh Balinese seaweed salad tossed in a sweet-hot dressing of palm sugar and lime.",
                        "description_ind": "Rujak rumput laut segar khas Bali yang diberi bumbu pedas manis dari gula merah dan jeruk nipis.",
                        "ingredients_eng": [
                            "Seaweed",
                            "Shallots",
                            "Chili",
                            "Lime",
                            "Palm Sugar",
                            "Tamarind"
                        ],
                        "ingredients_ind": [
                            "Rumput Laut",
                            "Bawang Merah",
                            "Cabai",
                            "Jeruk Nipis",
                            "Gula Merah",
                            "Asam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "rujak bulung",
                            "bali",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "rujak bulung",
                            "traditional",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rujak%20Bulung%20Buni.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Rujak_bulung",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://bali.tribunnews.com/2022/08/23/kuliner-bali-rujak-bulung-perpaduan-kenyal-dan-segar-yang-istimewa-harga-mulai-rp-10-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-010",
                        "name": "Serombotan",
                        "origin": "Klungkung",
                        "category": "Side Dish",
                        "description_eng": "A Klungkung salad of blanched vegetables dressed in kalas coconut sauce and spicy crushed peanuts.",
                        "description_ind": "Sayuran rebus khas Klungkung yang disiram bumbu kalas santan dan taburan kacang goreng pedas.",
                        "ingredients_eng": [
                            "Boiled Vegetables",
                            "Kalas Sauce",
                            "Shrimp Paste",
                            "Chili",
                            "Fried Tofu",
                            "Kencur"
                        ],
                        "ingredients_ind": [
                            "Sayuran Rebus",
                            "Bumbu Kalas",
                            "Terasi",
                            "Cabai",
                            "Tahu Goreng",
                            "Kencur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "serombotan",
                            "klungkung",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "serombotan",
                            "traditional",
                            "klungkung"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Serombotan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Serombotan",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://bali.suara.com/read/2025/04/16/170627/di-balik-nama-serombotan-kuliner-khas-bali-hidangan-para-raja-yang-kini-dijual-rp-5-ribuan",
                    "rating": 4.6,
                    "rating_platform": "Cybo",
                    "rating_source": "https://www.cybo.com/ID-biz/warung-serombotan-bu-awi",
                    "rating_note": null
                    },
                    {
                        "id": "bl-011",
                        "name": "Bebek Bengil",
                        "origin": "Ubud",
                        "category": "Main Dish",
                        "description_eng": "Ubud-style crispy fried duck marinated in Bali's base genep spice mix until the skin crackles.",
                        "description_ind": "Bebek goreng khas Ubud yang dibumbui base genep rempah Bali lalu digoreng hingga kulitnya renyah.",
                        "ingredients_eng": [
                            "Duck",
                            "Turmeric",
                            "Galangal",
                            "Lemongrass",
                            "Garlic",
                            "Coriander"
                        ],
                        "ingredients_ind": [
                            "Bebek",
                            "Kunyit",
                            "Lengkuas",
                            "Serai",
                            "Bawang Putih",
                            "Ketumbar"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bebek bengil",
                            "ubud",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "bebek bengil",
                            "traditional",
                            "ubud"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bebek%20bengil%2C%20Ubud%2C%20Bali.JPG?width=800",
                    "ingredients_source": "https://www.bebekbengil.co.id/",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 3.5,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297701-d991554-Reviews-Bebek_Bengil_Ubud-Ubud_Gianyar_Regency_Bali.html",
                    "rating_note": null
                    },
                    {
                        "id": "bl-012",
                        "name": "Sate Kakul",
                        "origin": "Ubud",
                        "category": "Main Dish",
                        "description_eng": "Balinese snail satay grilled with a spiced grated coconut and kencur marinade.",
                        "description_ind": "Sate keong (kakul) khas Bali yang dibakar dengan bumbu parutan kelapa, kencur, dan cabai.",
                        "ingredients_eng": [
                            "Snails",
                            "Grated Coconut",
                            "Kencur",
                            "Chili",
                            "Lime Leaves",
                            "Sweet Soy Sauce"
                        ],
                        "ingredients_ind": [
                            "Keong",
                            "Kelapa Parut",
                            "Kencur",
                            "Cabai",
                            "Daun Jeruk",
                            "Kecap Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate kakul",
                            "ubud",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate kakul",
                            "traditional",
                            "ubud"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://bali.idntimes.com/food/recipe/resep-sate-kakul-khas-bali-bikin-ketagihan-00-z9kr1-m06lzx",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.4,
                    "rating_platform": "Restaurant Guru",
                    "rating_source": "https://restaurantguru.com/Warung-Sate-Kakul-Singakerta",
                    "rating_note": null
                    },
                    {
                        "id": "bl-013",
                        "name": "Tipat Cantok",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Balinese rice cake and bean sprouts with peanut sauce (cantok) and soy sauce, a popular vegetarian street food.",
                        "description_ind": "Ketupat dan tauge khas Bali yang disiram bumbu kacang (cantok) dan kecap, sajian vegetarian jalanan.",
                        "ingredients_eng": [
                            "Rice Cake",
                            "Bean Sprouts",
                            "Peanut Sauce",
                            "Sweet Soy Sauce",
                            "Tofu",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Ketupat",
                            "Tauge",
                            "Bumbu Kacang",
                            "Kecap Manis",
                            "Tahu",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tipat cantok",
                            "bali",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "tipat cantok",
                            "traditional",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tipat%20Cantok%20Khas%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tipat_cantok",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://bali.tribunnews.com/2022/01/13/warung-tipat-cantok-ibu-dayu-denpasar-seporsi-hanya-rp-7-ribu-dengan-proses-pembuatan-tradisional",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-014",
                        "name": "Jukut Undis",
                        "origin": "Buleleng",
                        "category": "Main Dish",
                        "description_eng": "Black-eyed peas slowly simmered in base genep-spiced coconut milk until the sauce thickens, a Bali classic.",
                        "description_ind": "Kacang tolo khas Bali yang dimasak lama dalam santan berbumbu base genep hingga kuah mengental.",
                        "ingredients_eng": [
                            "Black-eyed Peas",
                            "Coconut Milk",
                            "Turmeric",
                            "Shallots",
                            "Garlic",
                            "Chicken Stock"
                        ],
                        "ingredients_ind": [
                            "Kacang Tolo",
                            "Santan",
                            "Kunyit",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Kaldu Ayam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "jukut undis",
                            "buleleng",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "jukut undis",
                            "traditional",
                            "buleleng"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kacang_tolo",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 3.5,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com.au/Restaurant_Review-g297700-d7930396-Reviews-Warung_Jukut_Undis-Sanur_Denpasar_Bali.html",
                    "rating_note": null
                    },
                    {
                        "id": "bl-015",
                        "name": "Sambal Matah",
                        "origin": "Bali",
                        "category": "Condiment",
                        "description_eng": "Bali's raw sambal of finely sliced shallots, bird's eye chilies, lemongrass, and lime leaves in coconut oil.",
                        "description_ind": "Sambal khas Bali yang diiris mentah dari bawang merah, cabai rawit, serai, dan daun jeruk berminyak kelapa.",
                        "ingredients_eng": [
                            "Shallots",
                            "Bird's Eye Chili",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Coconut Oil",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Bawang Merah",
                            "Cabai Rawit",
                            "Serai",
                            "Daun Jeruk",
                            "Minyak Kelapa",
                            "Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sambal matah",
                            "bali",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sambal matah",
                            "traditional",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sambal%20Matah%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal_matah",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-016",
                        "name": "Kerupuk Bali",
                        "origin": "Bali",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Bali.",
                        "description_ind": "Hidangan Kerupuk Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://food.detik.com/berita-boga/d-6039515/sah-harga-kerupuk-warung-naik-jadi-rp-2-000-setelah-lebaran",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-017",
                        "name": "Kopi Khas Bali",
                        "origin": "Bali",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Bali.",
                        "description_ind": "Hidangan Kopi Khas Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-018",
                        "name": "Sambal Bali",
                        "origin": "Bali",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Bali.",
                        "description_ind": "Hidangan Sambal Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Shallots",
                            "Bird's Eye Chili",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Coconut Oil",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Bawang Merah",
                            "Cabai Rawit",
                            "Serai",
                            "Daun Jeruk",
                            "Minyak Kelapa",
                            "Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal_matah",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-019",
                        "name": "Sate Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Bali marinade.",
                        "description_ind": "Hidangan Sate Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-020",
                        "name": "Ikan Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Bali signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp15.000 - Rp40.000",
                    "price_source": "https://www.detik.com/jateng/kuliner/d-8093019/8-tempat-makan-ikan-bakar-di-semarang-terenak-dan-murah-menu-dan-harganya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-021",
                        "name": "Soto Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Bali.",
                        "description_ind": "Hidangan Soto Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6629724/murah-meriah-di-5-warung-soto-ini-bisa-jajan-soto-mulai-rp-1-000-per-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-022",
                        "name": "Ikan Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Bali signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp15.000 - Rp40.000",
                    "price_source": "https://www.detik.com/jateng/kuliner/d-8093019/8-tempat-makan-ikan-bakar-di-semarang-terenak-dan-murah-menu-dan-harganya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-023",
                        "name": "Ayam Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Bali.",
                        "description_ind": "Hidangan Ayam Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-024",
                        "name": "Bubur Ayam Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Bali.",
                        "description_ind": "Hidangan Bubur Ayam Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-025",
                        "name": "Ayam Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Bali.",
                        "description_ind": "Hidangan Ayam Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-026",
                        "name": "Bubur Ayam Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Bali.",
                        "description_ind": "Hidangan Bubur Ayam Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-027",
                        "name": "Bubur Ayam Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Bali.",
                        "description_ind": "Hidangan Bubur Ayam Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-028",
                        "name": "Ikan Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Bali signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp15.000 - Rp40.000",
                    "price_source": "https://www.detik.com/jateng/kuliner/d-8093019/8-tempat-makan-ikan-bakar-di-semarang-terenak-dan-murah-menu-dan-harganya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-029",
                        "name": "Kerupuk Bali",
                        "origin": "Bali",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Bali.",
                        "description_ind": "Hidangan Kerupuk Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://food.detik.com/berita-boga/d-6039515/sah-harga-kerupuk-warung-naik-jadi-rp-2-000-setelah-lebaran",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-030",
                        "name": "Sate Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Bali marinade.",
                        "description_ind": "Hidangan Sate Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-031",
                        "name": "Ikan Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Bali signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp15.000 - Rp40.000",
                    "price_source": "https://www.detik.com/jateng/kuliner/d-8093019/8-tempat-makan-ikan-bakar-di-semarang-terenak-dan-murah-menu-dan-harganya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-032",
                        "name": "Sate Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Bali marinade.",
                        "description_ind": "Hidangan Sate Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-033",
                        "name": "Es Campur Bali",
                        "origin": "Bali",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Bali.",
                        "description_ind": "Hidangan Es Campur Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6967038/slurpp-5-es-campur-di-jakarta-ini-kelezatannya-melegenda",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-034",
                        "name": "Kopi Khas Bali",
                        "origin": "Bali",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Bali.",
                        "description_ind": "Hidangan Kopi Khas Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-035",
                        "name": "Kopi Khas Bali",
                        "origin": "Bali",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Bali.",
                        "description_ind": "Hidangan Kopi Khas Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-036",
                        "name": "Kerupuk Bali",
                        "origin": "Bali",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Bali.",
                        "description_ind": "Hidangan Kerupuk Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://food.detik.com/berita-boga/d-6039515/sah-harga-kerupuk-warung-naik-jadi-rp-2-000-setelah-lebaran",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-037",
                        "name": "Ikan Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Bali signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp15.000 - Rp40.000",
                    "price_source": "https://www.detik.com/jateng/kuliner/d-8093019/8-tempat-makan-ikan-bakar-di-semarang-terenak-dan-murah-menu-dan-harganya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-038",
                        "name": "Kopi Khas Bali",
                        "origin": "Bali",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Bali.",
                        "description_ind": "Hidangan Kopi Khas Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-039",
                        "name": "Ayam Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Bali.",
                        "description_ind": "Hidangan Ayam Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-040",
                        "name": "Bubur Ayam Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Bali.",
                        "description_ind": "Hidangan Bubur Ayam Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6599561/5-tempat-makan-bubur-ayam-sultan-harganya-sampai-rp-100-ribu-seporsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-041",
                        "name": "Ayam Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Bali.",
                        "description_ind": "Hidangan Ayam Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp23.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-042",
                        "name": "Tumis Sayur Bali",
                        "origin": "Bali",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Bali.",
                        "description_ind": "Hidangan Tumis Sayur Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-043",
                        "name": "Mie Kuah Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Bali.",
                        "description_ind": "Hidangan Mie Kuah Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://jakarta.tribunnews.com/2024/11/25/kesulitan-ekonomi-bikin-atik-jual-mi-ayam-rp-2-ribu-perporsi-keuntungan-bersih-perhari-rp-200-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-044",
                        "name": "Soto Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Bali.",
                        "description_ind": "Hidangan Soto Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6629724/murah-meriah-di-5-warung-soto-ini-bisa-jajan-soto-mulai-rp-1-000-per-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-045",
                        "name": "Sate Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Bali marinade.",
                        "description_ind": "Hidangan Sate Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-046",
                        "name": "Kue Basah Bali",
                        "origin": "Bali",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Bali.",
                        "description_ind": "Hidangan Kue Basah Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp5.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5957317/4-tempat-beli-kue-subuh-di-jakarta-harga-mulai-rp-1-000",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-047",
                        "name": "Tumis Sayur Bali",
                        "origin": "Bali",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Bali.",
                        "description_ind": "Hidangan Tumis Sayur Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-048",
                        "name": "Sambal Bali",
                        "origin": "Bali",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Bali.",
                        "description_ind": "Hidangan Sambal Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Shallots",
                            "Bird's Eye Chili",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Coconut Oil",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Bawang Merah",
                            "Cabai Rawit",
                            "Serai",
                            "Daun Jeruk",
                            "Minyak Kelapa",
                            "Jeruk Nipis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal_matah",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-049",
                        "name": "Kerupuk Bali",
                        "origin": "Bali",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Bali.",
                        "description_ind": "Hidangan Kerupuk Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp1.000 - Rp2.000",
                    "price_source": "https://food.detik.com/berita-boga/d-6039515/sah-harga-kerupuk-warung-naik-jadi-rp-2-000-setelah-lebaran",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "bl-050",
                        "name": "Ikan Bakar Bali",
                        "origin": "Bali",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Bali signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Bali tradisional khas Bali yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "bali",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "bali"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp15.000 - Rp40.000",
                    "price_source": "https://www.detik.com/jateng/kuliner/d-8093019/8-tempat-makan-ikan-bakar-di-semarang-terenak-dan-murah-menu-dan-harganya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "nama": "Nusa Tenggara",
        "ibukota": "Mataram",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/IndonesiaSundaKecil.png?width=400",
        "provinsi": [
            "Nusa Tenggara Barat",
            "Nusa Tenggara Timur"
        ],
        "deskripsi": "Gugusan pulau di timur Bali, termasuk Lombok, Sumbawa, Flores, dan Komodo.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "nt-001",
                        "name": "Ayam Taliwang",
                        "origin": "Lombok",
                        "category": "Main Dish",
                        "description_eng": "Young spring chicken grilled or fried, seasoned with fiery red chili, shrimp paste, and fresh lime juice.",
                        "description_ind": "Ayam kampung muda khas Lombok yang dibakar atau digoreng, dilumuri sambal cabai merah bakar, terasi khas Lombok, dan perasan jeruk limau pedas gurih.",
                        "ingredients_eng": [
                            "Young Chicken",
                            "Red Chili",
                            "Bird's Eye Chili",
                            "Lombok Shrimp Paste",
                            "Garlic",
                            "Shallot",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Ayam Kampung Muda",
                            "Cabai Merah",
                            "Cabai Rawit",
                            "Terasi Lombok",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Jeruk Limau"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Savory",
                            "Smoky",
                            "Tangy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam taliwang",
                            "taliwang lombok",
                            "ayam bakar pedas",
                            "kuliner lombok",
                            "ntb"
                        ],
                        "search_keywords_eng": [
                            "ayam taliwang",
                            "taliwang chicken",
                            "lombok grilled chicken",
                            "spicy chicken",
                            "nusa tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20bakar%20khas%20Taliwang%202.JPG?width=800",
                    "price_range_ind": "Rp15.000 - Rp50.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6578194/siang-ini-bisa-makan-ayam-taliwang-rp-15-ribuan-di-5-tempat-ini",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297734-d7972161-Reviews-Ayam_Taliwang_Raya-Mataram_Lombok_West_Nusa_Tenggara.html",
                    "rating_note": null
                    },
                    {
                        "id": "nt-002",
                        "name": "Se'i Sapi",
                        "origin": "Kupang",
                        "category": "Main Dish",
                        "description_eng": "Traditional cured beef slowly smoked over burning kosambi wood, served with fiery sambal lu'at.",
                        "description_ind": "Daging sapi asap khas Kupang yang diasap perlahan di atas bara kayu kosambi selama berjam-jam, menghasilkan aroma asap harum dan disajikan dengan sambal lu'at segar.",
                        "ingredients_eng": [
                            "Beef",
                            "Smoked Wood",
                            "Salt",
                            "Chili",
                            "Garlic",
                            "Lime Leaves"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Asap Kayu",
                            "Garam",
                            "Cabai",
                            "Bawang Putih",
                            "Daun Jeruk"
                        ],
                        "flavor_profile": [
                            "Smoky",
                            "Savory",
                            "Tender",
                            "Aromatic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sei sapi",
                            "daging asap kupang",
                            "sambal luat",
                            "kuliner ntt",
                            "daging sei"
                        ],
                        "search_keywords_eng": [
                            "sei sapi",
                            "smoked beef",
                            "kupang beef",
                            "sambal luat",
                            "kosambi wood smoked"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sei%20sapi%20Pj%20DSC%202925.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Se%27i",

                    "price_range_ind": "Rp15.000 - Rp30.000",
                    "price_source": "https://www.tribunnews.com/travel/2020/09/14/nikmatnya-sei-sapi-daging-asap-cita-rasa-tradisional-ala-sei-sapiku",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-003",
                        "name": "Plecing Kangkung",
                        "origin": "Lombok",
                        "category": "Side Dish",
                        "description_eng": "Blanched crunchy water spinach served cold with a spicy tomato-shrimp paste sambal and fried peanuts.",
                        "description_ind": "Kangkung khas Lombok bertekstur renyah yang direbus sebentar, disiram sambal tomat terasi pedas segar, serta ditaburi kacang tanah dan kedelai goreng.",
                        "ingredients_eng": [
                            "Lombok Water Spinach",
                            "Tomato",
                            "Chili",
                            "Shrimp Paste",
                            "Fried Peanuts",
                            "Soybeans",
                            "Lime"
                        ],
                        "ingredients_ind": [
                            "Kangkung Lombok",
                            "Tomat",
                            "Cabai",
                            "Terasi",
                            "Kacang Tanah Goreng",
                            "Kedelai Goreng",
                            "Jeruk Limau"
                        ],
                        "flavor_profile": [
                            "Spicy",
                            "Fresh",
                            "Savory",
                            "Tangy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "plecing kangkung",
                            "plecing lombok",
                            "sayur kangkung pedas",
                            "sambal plecing",
                            "lombok"
                        ],
                        "search_keywords_eng": [
                            "plecing kangkung",
                            "water spinach",
                            "lombok salad",
                            "spicy sambal salad",
                            "nusa tenggara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pelecing%20kangkung%20Lombok.JPG?width=800",
                    "price_range_ind": "Rp5.000 - Rp15.000",
                    "price_source": "https://www.kompas.com/food/read/2022/10/30/210600175/7-tempat-makan-plecing-kangkung-enak-di-lombok-harga-mulai-rp-5.000",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-004",
                        "name": "Catemak Jagung",
                        "origin": "East Nusa Tenggara",
                        "category": "Dessert",
                        "description_eng": "Hearty, comforting dish made from sweet corn, kidney beans, green beans, and pumpkin cooked until tender.",
                        "description_ind": "Masakan berkuah khas Nusa Tenggara Timur dari jagung manis, kacang merah, kacang hijau, dan labu kuning yang dimasak empuk dengan rasa gurih alami.",
                        "ingredients_eng": [
                            "Sweet Corn",
                            "Kidney Beans",
                            "Mung Beans",
                            "Pumpkin",
                            "Salt",
                            "Water"
                        ],
                        "ingredients_ind": [
                            "Jagung Manis",
                            "Kacang Merah",
                            "Kacang Hijau",
                            "Labu Kuning",
                            "Garam",
                            "Air"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Mildly Sweet",
                            "Earthy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "catemak jagung",
                            "jagung ntt",
                            "bubur jagung kacang",
                            "kuliner sehat ntt",
                            "catemak"
                        ],
                        "search_keywords_eng": [
                            "catemak jagung",
                            "corn stew",
                            "ntt traditional",
                            "sweet corn soup",
                            "savory porridge"
                        ],
                        "image": null,
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-005",
                        "name": "Kolo (Nasi Bakar Bambu)",
                        "origin": "Manggarai",
                        "category": "Main Dish",
                        "description_eng": "Seasoned rice stuffed into green bamboo stalks lined with banana leaves and roasted over an open flame.",
                        "description_ind": "Nasi gurih berempah khas Manggarai (Flores) yang dimasak di dalam bilah bambu beralaskan daun pisang dan dibakar perlahan di atas bara api.",
                        "ingredients_eng": [
                            "Rice",
                            "Coconut Milk",
                            "Shallot",
                            "Garlic",
                            "Salt",
                            "Green Bamboo",
                            "Banana Leaf"
                        ],
                        "ingredients_ind": [
                            "Beras",
                            "Santan",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Garam",
                            "Bambu Hijau",
                            "Daun Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Aromatic",
                            "Smoky"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kolo",
                            "nasi bakar bambu",
                            "nasi kolo flores",
                            "manggarai",
                            "kuliner adat flores"
                        ],
                        "search_keywords_eng": [
                            "kolo",
                            "bamboo roasted rice",
                            "flores rice",
                            "manggarai",
                            "traditional bamboo rice"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ensemble%20%22Kolo%22%20dancing%20folk%20dance%20of%20Gnjilane.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-006",
                        "name": "Jagung Bose",
                        "origin": "Timor",
                        "category": "Main Dish",
                        "description_eng": "A Timor corn porridge cooked with mung beans, spinach, and coconut milk, a staple carbohydrate of the Timorese.",
                        "description_ind": "Bubur jagung khas Timor yang dimasak dengan kacang hijau, bayam, dan santan, sumber karbohidrat utama masyarakat Timor.",
                        "ingredients_eng": [
                            "Corn",
                            "Mung Beans",
                            "Peanuts",
                            "Spinach",
                            "Coconut Milk",
                            "Dried Fish"
                        ],
                        "ingredients_ind": [
                            "Jagung",
                            "Kacang Hijau",
                            "Kacang Tanah",
                            "Bayam",
                            "Santan",
                            "Ikan Asin"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "jagung bose",
                            "timor",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "jagung bose",
                            "traditional",
                            "timor"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jagung%20Bose.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Jagung_bose",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-007",
                        "name": "Rumpu Rampe",
                        "origin": "Flores",
                        "category": "Side Dish",
                        "description_eng": "A Sumbawa dish of snails and papaya leaves cooked in a spicy-sour spiced broth.",
                        "description_ind": "Masakan keong dan daun pepaya khas Sumbawa yang dimasak berkuah asam pedas berrempah.",
                        "ingredients_eng": [
                            "Snails",
                            "Papaya Leaves",
                            "Tamarind",
                            "Chili",
                            "Coconut Milk",
                            "Turmeric"
                        ],
                        "ingredients_ind": [
                            "Keong",
                            "Daun Pepaya",
                            "Asam",
                            "Cabai",
                            "Santan",
                            "Kunyit"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "rumpu rampe",
                            "flores",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "rumpu rampe",
                            "traditional",
                            "flores"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Rumpu_rampe",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-008",
                        "name": "Ikan Kuah Asam",
                        "origin": "Kupang",
                        "category": "Main Dish",
                        "description_eng": "A refreshing sour fish soup from Nusa Tenggara with tomato and tamarind broth.",
                        "description_ind": "Sup ikan asam segar khas Nusa Tenggara dengan kuah tomat dan asam yang menyegarkan.",
                        "ingredients_eng": [
                            "Fish",
                            "Tamarind",
                            "Tomato",
                            "Turmeric",
                            "Chili",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Asam",
                            "Tomat",
                            "Kunyit",
                            "Cabai",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan kuah asam",
                            "kupang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ikan kuah asam",
                            "traditional",
                            "kupang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20Kuah%20Asam%20Ternate.jpg?width=800",
                    "ingredients_source": "https://www.idntimes.com/food/recipe/resep-ikan-kuah-asam-kuning-khas-nusa-tenggara-timur-00-mk1yf-1kfggt",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4.2,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g679582-d12856111-Reviews-RM_Ikan_Kuah_Asam_Tenau-Kupang_West_Timor_East_Nusa_Tenggara.html",
                    "rating_note": null
                    },
                    {
                        "id": "nt-009",
                        "name": "Sate Bulayak",
                        "origin": "Lombok",
                        "category": "Main Dish",
                        "description_eng": "Lombok beef satay in coconut milk gravy served with bulayak — small rice cakes wrapped in banana leaf.",
                        "description_ind": "Sate sapi berkuah santan khas Lombok yang disajikan dengan bulayak, ketan kecil dibungkus daun pisang.",
                        "ingredients_eng": [
                            "Beef",
                            "Coconut Milk",
                            "Turmeric",
                            "Glutinous Rice",
                            "Banana Leaf",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Daging Sapi",
                            "Santan",
                            "Kunyit",
                            "Beras Ketan",
                            "Daun Pisang",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate bulayak",
                            "lombok",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate bulayak",
                            "traditional",
                            "lombok"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Bulayak.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate_bulayak",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://superapps.kompas.com/read/1527996/travel-update-berburu-sate-bulayak-kuliner-khas-lombok-seporsi-cuma-rp-20-ribu",
                    "rating": 3.9,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g17632799-d6739621-Reviews-Sate_Bulayak_Suranadi-Suranadi_Lombok_West_Nusa_Tenggara.html",
                    "rating_note": null
                    },
                    {
                        "id": "nt-010",
                        "name": "Nasi Puyung",
                        "origin": "Lombok",
                        "category": "Main Dish",
                        "description_eng": "Puyung rice from Central Lombok served with shredded chicken, serundeng coconut flakes, and spicy shrimp paste sambal.",
                        "description_ind": "Nasi khas Puyung, Lombok Tengah, yang disajikan dengan ayam suwir, serundeng, dan sambal terasi pedas.",
                        "ingredients_eng": [
                            "Steamed Rice",
                            "Shredded Chicken",
                            "Fried Soybeans",
                            "Serundeng",
                            "Sambal",
                            "Grated Coconut"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Ayam Suwir",
                            "Kacang Kedelai Goreng",
                            "Serundeng",
                            "Sambal",
                            "Kelapa Parut"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi puyung",
                            "lombok",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "nasi puyung",
                            "traditional",
                            "lombok"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://travel.detik.com/domestic-destination/d-3184067/nikmatnya-kuliner-nasi-puyung-khas-lombok",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://www.detik.com/bali/kuliner/d-8311448/nasi-puyung-rp-10-ribu-di-lombok-barat-warga-antre-meski-penjual-belum-buka",
                    "rating": 3.6,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297733-d13485128-Reviews-Nasi_Balap_Puyung_Inaq_Esun-Lombok_West_Nusa_Tenggara.html",
                    "rating_note": null
                    },
                    {
                        "id": "nt-011",
                        "name": "Bebalung",
                        "origin": "Lombok",
                        "category": "Main Dish",
                        "description_eng": "A Lombok beef rib soup simmered with spices until the meat falls off the bone.",
                        "description_ind": "Sup iga sapi khas Lombok yang dimasak berrempah hingga daging lepas dari tulang.",
                        "ingredients_eng": [
                            "Beef Ribs",
                            "Turmeric",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Peppercorns"
                        ],
                        "ingredients_ind": [
                            "Iga Sapi",
                            "Kunyit",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bebalung",
                            "lombok",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "bebalung",
                            "traditional",
                            "lombok"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bebalung%20Lombok.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bebalung",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://ntb.idntimes.com/food/recipe/kuliner-legendaris-di-lombok-01-twm5y-hy3y9d",
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g297733-d10137323-Reviews-RM_Sukma_Rasa-Lombok_West_Nusa_Tenggara.html",
                    "rating_note": null
                    },
                    {
                        "id": "nt-012",
                        "name": "Beberuk Terong",
                        "origin": "Lombok",
                        "category": "Side Dish",
                        "description_eng": "Steamed eggplant salad from Lombok tossed in a fresh tomato-chili sambal with lime.",
                        "description_ind": "Lalapan terong kukus khas Lombok yang dicampur sambal tomat cabai segar berjeruk nipis.",
                        "ingredients_eng": [
                            "Eggplant",
                            "Shallots",
                            "Garlic",
                            "Red Chili",
                            "Lime",
                            "Tomato"
                        ],
                        "ingredients_ind": [
                            "Terong",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai Merah",
                            "Jeruk Nipis",
                            "Tomat"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "beberuk terong",
                            "lombok",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "beberuk terong",
                            "traditional",
                            "lombok"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Beberuk_terong",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://flores.tribunnews.com/manggarai-barat/58794/wisata-kuliner-labuan-bajo-ikan-kuah-asam-lapak-mama-mawar-jadi-primadona",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-013",
                        "name": "Jawada",
                        "origin": "Flores",
                        "category": "Snack",
                        "description_eng": "A Lombok moist cake of flour and coconut milk baked in small tins until golden.",
                        "description_ind": "Kue basah khas Lombok dari tepung dan santan yang dipanggang dalam loyang kecil hingga keemasan.",
                        "ingredients_eng": [
                            "Wheat Flour",
                            "Coconut Milk",
                            "Sugar",
                            "Banana",
                            "Vanilla",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Tepung Terigu",
                            "Santan",
                            "Gula",
                            "Pisang",
                            "Vanila",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "jawada",
                            "flores",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "jawada",
                            "traditional",
                            "flores"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Jawada",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-014",
                        "name": "Daging Se'i Babi",
                        "origin": "Kupang",
                        "category": "Main Dish",
                        "description_eng": "Rote-style pork slowly smoked over kosambi wood fire until dry and red.",
                        "description_ind": "Daging babi khas Rote yang diasap perlahan di atas api kayu kosambi hingga kering merah.",
                        "ingredients_eng": [
                            "Pork",
                            "Smoked Wood",
                            "Salt",
                            "Chili",
                            "Garlic",
                            "Lime Leaves"
                        ],
                        "ingredients_ind": [
                            "Daging Babi",
                            "Asap Kayu",
                            "Garam",
                            "Cabai",
                            "Bawang Putih",
                            "Daun Jeruk"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": false,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "daging se'i babi",
                            "kupang",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "daging se'i babi",
                            "traditional",
                            "kupang"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Se'i%20Babi%203.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Se%27i",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": 4,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g679582-d8468010-Reviews-Sei_Babi_Om_Bai_Baun-Kupang_West_Timor_East_Nusa_Tenggara.html",
                    "rating_note": null
                    },
                    {
                        "id": "nt-015",
                        "name": "Sate Susu",
                        "origin": "Lombok",
                        "category": "Main Dish",
                        "description_eng": "Mataram satay of grilled beef udder served with sweet soy sauce and bird's eye chilies.",
                        "description_ind": "Sate khas Mataram dari tetelan susu sapi yang dibakar dan disajikan dengan kecap dan cabai rawit.",
                        "ingredients_eng": [
                            "Beef Udder",
                            "Sweet Soy Sauce",
                            "Chili",
                            "Shallots",
                            "Lime",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Tetelan Susu Sapi",
                            "Kecap Manis",
                            "Cabai",
                            "Bawang Merah",
                            "Jeruk Nipis",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate susu",
                            "lombok",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sate susu",
                            "traditional",
                            "lombok"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate_susu",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-016",
                        "name": "Mie Kuah Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Mie Kuah Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://jateng.tribunnews.com/travel/1230098/viral-mi-ayam-rasa-premium-cuma-rp5000-seporsi-solusi-jajan-ekonomis-di-pati",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-017",
                        "name": "Ayam Bakar Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Ayam Bakar Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8668273/sinar-surya-laris-manis-ikan-bakar-padang-tendaan-rp33-ribu-di-benhil",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-018",
                        "name": "Es Campur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-019",
                        "name": "Ikan Bakar Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Nusa Tenggara Timur signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp25.000 - Rp40.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8668273/sinar-surya-laris-manis-ikan-bakar-padang-tendaan-rp33-ribu-di-benhil",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-020",
                        "name": "Kue Basah Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Kue Basah Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-021",
                        "name": "Tumis Sayur Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Tumis Sayur Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Rp2.000 - Rp5.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5591618/7-menu-warteg-favorit-dengan-harga-murah-cuma-rp-2-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-022",
                        "name": "Es Campur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-023",
                        "name": "Tumis Sayur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Tumis Sayur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Rp2.000 - Rp5.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5591618/7-menu-warteg-favorit-dengan-harga-murah-cuma-rp-2-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-024",
                        "name": "Ayam Bakar Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Ayam Bakar Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8668273/sinar-surya-laris-manis-ikan-bakar-padang-tendaan-rp33-ribu-di-benhil",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-025",
                        "name": "Es Campur Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-026",
                        "name": "Bubur Ayam Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Bubur Ayam Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp20.000",
                    "price_source": "https://superapps.kompas.com/read/2446601/bubur-ayam-murah-dengan-topping-melimpah-di-jakarta-utara-seporsi-cuma-rp-15-ribu",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-027",
                        "name": "Es Campur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-028",
                        "name": "Sambal Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-029",
                        "name": "Sambal Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-030",
                        "name": "Tumis Sayur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Tumis Sayur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Rp2.000 - Rp5.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-5591618/7-menu-warteg-favorit-dengan-harga-murah-cuma-rp-2-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-031",
                        "name": "Mie Kuah Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Mie Kuah Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://jateng.tribunnews.com/travel/1230098/viral-mi-ayam-rasa-premium-cuma-rp5000-seporsi-solusi-jajan-ekonomis-di-pati",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-032",
                        "name": "Nasi Goreng Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Nasi Goreng Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-033",
                        "name": "Es Campur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-034",
                        "name": "Mie Kuah Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Mie Kuah Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://jateng.tribunnews.com/travel/1230098/viral-mi-ayam-rasa-premium-cuma-rp5000-seporsi-solusi-jajan-ekonomis-di-pati",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-035",
                        "name": "Es Campur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-036",
                        "name": "Es Campur Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-037",
                        "name": "Sambal Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-038",
                        "name": "Sate Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Nusa Tenggara Barat marinade.",
                        "description_ind": "Hidangan Sate Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://ntb.idntimes.com/food/recipe/kuliner-legendaris-di-lombok-01-twm5y-hy3y9d",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-039",
                        "name": "Sambal Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-040",
                        "name": "Ayam Bakar Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Ayam Bakar Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp30.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8668273/sinar-surya-laris-manis-ikan-bakar-padang-tendaan-rp33-ribu-di-benhil",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-041",
                        "name": "Nasi Goreng Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Nasi Goreng Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-042",
                        "name": "Sambal Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-043",
                        "name": "Nasi Goreng Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Nasi Goreng Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-044",
                        "name": "Kopi Khas Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Kopi Khas Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://jakarta.suara.com/read/2026/04/26/175417/7-kopi-susu-gula-aren-murah-di-jakarta-yang-masih-ramah-di-kantong-ada-yang-cuma-rp15-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-045",
                        "name": "Sambal Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-046",
                        "name": "Es Campur Nusa Tenggara Barat",
                        "origin": "Nusa Tenggara Barat",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Nusa Tenggara Barat.",
                        "description_ind": "Hidangan Es Campur Nusa Tenggara Barat tradisional khas Nusa Tenggara Barat yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "nusa tenggara barat",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "nusa tenggara barat"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-047",
                        "name": "Ikan Bakar Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Nusa Tenggara Timur signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Sweet Soy Sauce",
                            "Garlic",
                            "Coriander",
                            "Lime",
                            "Sambal"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Kecap Manis",
                            "Bawang Putih",
                            "Ketumbar",
                            "Jeruk Nipis",
                            "Sambal"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ikan_bakar",

                    "price_range_ind": "Rp25.000 - Rp40.000",
                    "price_source": "https://food.detik.com/warung-makan/d-8668273/sinar-surya-laris-manis-ikan-bakar-padang-tendaan-rp33-ribu-di-benhil",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-048",
                        "name": "Nasi Goreng Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Main Dish",
                        "description_eng": "Savory fried rice unique to Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Nasi Goreng Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice",
                            "Shallots",
                            "Garlic",
                            "Chili",
                            "Sweet Soy Sauce",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Nasi Putih",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Cabai",
                            "Kecap Manis",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "nasi goreng",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "nasi goreng",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Nasi_goreng",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://food.detik.com/online-food/d-6086724/nasi-goreng-rp-18-000-vs-rp-140-000-mana-yang-lebih-enak",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-049",
                        "name": "Kue Basah Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Kue Basah Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "nt-050",
                        "name": "Sambal Nusa Tenggara Timur",
                        "origin": "Nusa Tenggara Timur",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Nusa Tenggara Timur.",
                        "description_ind": "Hidangan Sambal Nusa Tenggara Timur tradisional khas Nusa Tenggara Timur yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "nusa tenggara timur",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "nusa tenggara timur"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://food.detik.com/warung-makan/d-7568097/warung-sambal-atom-pedas-nendang-8-jenis-sambal-yang-sedap-di-warung-makan-24-jam",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "nama": "Maluku",
        "ibukota": "Ambon",
        "bentuk_pulau": "https://commons.wikimedia.org/wiki/Special:FilePath/Maluku%20Islands%20en.png?width=400",
        "provinsi": [
            "Maluku",
            "Maluku Utara"
        ],
        "deskripsi": "Kepulauan Rempah legendaris, kaya akan cengkeh, pala, dan budaya bahari.",
        "menu": [
            {
                "total": 50,
                "data": [
                    {
                        "id": "ml-001",
                        "name": "Ikan Kuah Pala Banda",
                        "origin": "Banda Neira",
                        "category": "Main Dish",
                        "description_eng": "Historic Spice Islands fish soup simmered with fresh local nutmeg, turmeric, basil, and chilies.",
                        "description_ind": "Sup ikan rempah legendaris dari Banda Neira yang dimasak dengan buah pala segar Maluku, kunyit, daun kemangi, dan cabai dengan kuah asam pedas harum.",
                        "ingredients_eng": [
                            "Fresh Fish",
                            "Fresh Nutmeg",
                            "Turmeric",
                            "Lemon Basil",
                            "Lime",
                            "Chili",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ikan Segar",
                            "Buah Pala Segar",
                            "Kunyit",
                            "Daun Kemangi",
                            "Jeruk Nipis",
                            "Cabai",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Tangy",
                            "Spicy",
                            "Aromatic",
                            "Fresh"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan kuah pala",
                            "pala banda",
                            "banda neira",
                            "sup ikan maluku",
                            "kepulauan rempah"
                        ],
                        "search_keywords_eng": [
                            "ikan kuah pala",
                            "nutmeg fish soup",
                            "banda neira",
                            "spice islands soup",
                            "maluku fish"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sup%20Ikan%20Siakap.jpg?width=800",
                    "price_range_ind": "Rp25.000 - Rp50.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6177151/4-kuliner-khas-ternate-berbahan-dasar-seafood-dan-rempah-lokal-yang-menggoda-selera",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-002",
                        "name": "Gohu Ikan",
                        "origin": "Ternate",
                        "category": "Main Dish",
                        "description_eng": "Ternate-style sashimi featuring fresh yellowfin tuna tossed with lime, chilies, basil, and hot coconut oil with pili nuts.",
                        "description_ind": "Sashimi khas Ternate dari potongan ikan tuna sirip kuning segar yang dicampur perasan jeruk nipis, cabai rawit, daun kemangi, disiram minyak kelapa panas dan taburan kacang kenari.",
                        "ingredients_eng": [
                            "Yellowfin Tuna",
                            "Calamansi Lime",
                            "Bird's Eye Chili",
                            "Shallots",
                            "Basil",
                            "Hot Coconut Oil",
                            "Kenari Nuts"
                        ],
                        "ingredients_ind": [
                            "Ikan Tuna Sirip Kuning",
                            "Jeruk Nipis/Cui",
                            "Cabai Rawit",
                            "Bawang Merah",
                            "Kemangi",
                            "Minyak Kelapa Panas",
                            "Kacang Kenari"
                        ],
                        "flavor_profile": [
                            "Fresh",
                            "Tangy",
                            "Spicy",
                            "Nutty"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "gohu ikan",
                            "sashimi ternate",
                            "tuna ternate",
                            "gohu maluku utara",
                            "ikan mentah segar"
                        ],
                        "search_keywords_eng": [
                            "gohu ikan",
                            "ternate sashimi",
                            "raw yellowfin tuna",
                            "maluku ceviche",
                            "kenari nut tuna"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gohu%20Ikan%20in%20Ternate.jpg?width=800",
                    "price_range_ind": "Rp25.000 - Rp35.000",
                    "price_source": "https://travel.tribunnews.com/2016/08/12/kuliner-ternate-maluku-nikmatnya-gohu-ikan-khas-pulau-rempah-rempah",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-003",
                        "name": "Nasi Lapola",
                        "origin": "Ambon",
                        "category": "Main Dish",
                        "description_eng": "Aromatic steamed rice mixed with red tolo beans, grated coconut, and fragrant pandan leaves.",
                        "description_ind": "Nasi gurih khas Ambon yang dimasak bersama kacang tolo merah, parutan kelapa muda, dan daun pandan wangi, biasa disantap dengan ikan asar dan sambal colo-colo.",
                        "ingredients_eng": [
                            "Rice",
                            "Red Tolo Beans",
                            "Grated Coconut",
                            "Pandan Leaves",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Beras",
                            "Kacang Tolo Merah",
                            "Kelapa Parut Muda",
                            "Daun Pandan",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Nutty",
                            "Fragrant"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "nasi lapola",
                            "nasi kacang tolo",
                            "nasi gurih ambon",
                            "kuliner ambon",
                            "makanan pokok maluku"
                        ],
                        "search_keywords_eng": [
                            "nasi lapola",
                            "red bean coconut rice",
                            "ambon rice",
                            "maluku traditional rice",
                            "fragrant rice"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20goreng%20indonesia.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-004",
                        "name": "Sambal Colo-Colo",
                        "origin": "Ambon",
                        "category": "Condiment",
                        "description_eng": "Signature raw relish made from diced fresh tomatoes, shallots, bird's eye chilies, sweet soy sauce, and calamansi lime.",
                        "description_ind": "Sambal iris mentah segar khas Ambon yang terbuat dari potongan tomat segar, bawang merah, cabai rawit pedas, kecap manis gurih, dan perasan jeruk cui/nipis.",
                        "ingredients_eng": [
                            "Fresh Tomato",
                            "Shallots",
                            "Bird's Eye Chili",
                            "Sweet Soy Sauce",
                            "Calamansi Lime Juice",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Tomat Segar",
                            "Bawang Merah",
                            "Cabai Rawit",
                            "Kecap Manis",
                            "Jeruk Cui/Nipis",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Spicy",
                            "Tangy",
                            "Fresh"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal colo-colo",
                            "colo-colo",
                            "sambal kecap ambon",
                            "sambal mentah maluku",
                            "cocolan ikan bakar"
                        ],
                        "search_keywords_eng": [
                            "sambal colo-colo",
                            "colo-colo relish",
                            "ambon dipping sauce",
                            "fresh spicy dip",
                            "maluku condiment"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "price_range_ind": "Rp50.000 - Rp85.000",
                    "price_source": "https://www.indonesia.travel/id/id/travel-ideas/gastronomy/colo-colo",
                    "rating": 4.1,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g608477-d10062497-Reviews-RM_Ikan_Bakar_Rasa_Gurih-Ambon_Maluku_Islands.html",
                    "rating_note": null
                    },
                    {
                        "id": "ml-005",
                        "name": "Bagea Kenari",
                        "origin": "Maluku",
                        "category": "Snack",
                        "description_eng": "Traditional crispy sago cookies spiced with cinnamon and nutmeg, studded with crunchy native pili nuts (kenari).",
                        "description_ind": "Kue kering tradisional khas Maluku dari tepung sagu dengan perpaduan rempah kayu manis dan pala, ditaburi renyahnya kacang kenari asli Maluku.",
                        "ingredients_eng": [
                            "Sago Flour",
                            "Kenari (Pili) Nuts",
                            "Palm Sugar",
                            "Cinnamon",
                            "Nutmeg",
                            "Egg"
                        ],
                        "ingredients_ind": [
                            "Tepung Sagu",
                            "Kacang Kenari",
                            "Gula Merah",
                            "Kayu Manis",
                            "Pala",
                            "Telur"
                        ],
                        "flavor_profile": [
                            "Sweet",
                            "Nutty",
                            "Spiced",
                            "Crunchy"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "bagea kenari",
                            "kue bagea",
                            "kue sagu maluku",
                            "kacang kenari",
                            "oleh-oleh ambon"
                        ],
                        "search_keywords_eng": [
                            "bagea kenari",
                            "sago cookies",
                            "nutmeg cinnamon cookie",
                            "kenari biscuits",
                            "maluku snack"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bagea%20Kenari%20Manado.jpg?width=800",
                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-006",
                        "name": "Ikan Asar",
                        "origin": "Ambon",
                        "category": "Main Dish",
                        "description_eng": "Salted and sun-dried (asar) skipjack tuna from Maluku, cooked in a spicy yellow broth.",
                        "description_ind": "Ikan cakalang yang diasinkan dan dijemur (asar) khas Maluku, dimasak berkuah kuning pedas.",
                        "ingredients_eng": [
                            "Tuna",
                            "Salt",
                            "Turmeric",
                            "Chili",
                            "Lime Leaves",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan Cakalang",
                            "Garam",
                            "Kunyit",
                            "Cabai",
                            "Daun Jeruk",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan asar",
                            "ambon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ikan asar",
                            "traditional",
                            "ambon"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Smoked%20tuna%20from%20Maluku.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Cakalang",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://ambon.tribunnews.com/2023/04/25/ikan-asar-di-batu-meja-harga-mulai-rp-15-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-007",
                        "name": "Kasbi Kompa",
                        "origin": "Maluku",
                        "category": "Snack",
                        "description_eng": "Maluku cassava steamed with sweet grated coconut, a traditional snack of the Spice Islands.",
                        "description_ind": "Singkong khas Maluku yang dikukus dengan kelapa parut manis, camilan tradisional kepulauan rempah.",
                        "ingredients_eng": [
                            "Cassava",
                            "Grated Coconut",
                            "Palm Sugar",
                            "Salt",
                            "Pandan",
                            "Banana Leaf"
                        ],
                        "ingredients_ind": [
                            "Singkong",
                            "Kelapa Parut",
                            "Gula Merah",
                            "Garam",
                            "Pandan",
                            "Daun Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "kasbi kompa",
                            "maluku",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "kasbi kompa",
                            "traditional",
                            "maluku"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kasbi",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-008",
                        "name": "Kohu-Kohu",
                        "origin": "Ambon",
                        "category": "Side Dish",
                        "description_eng": "A Maluku fish salad mixed with kemangi basil, chili, and toasted coconut with a touch of tamarind.",
                        "description_ind": "Salad ikan khas Maluku yang dicampur kemangi, cabai, dan kelapa sangrai dengan sedikit asam.",
                        "ingredients_eng": [
                            "Salted Fish",
                            "Tamarind",
                            "Basil",
                            "Chili",
                            "Shallots",
                            "Toasted Coconut"
                        ],
                        "ingredients_ind": [
                            "Ikan Asin",
                            "Asam",
                            "Kemangi",
                            "Cabai",
                            "Bawang Merah",
                            "Kelapa Sangrai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "kohu-kohu",
                            "ambon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "kohu-kohu",
                            "traditional",
                            "ambon"
                        ],
                        "image": null,
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kohu-kohu",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-009",
                        "name": "Roti Kenari",
                        "origin": "Ambon",
                        "category": "Snack",
                        "description_eng": "An Ambon sweet-savory bread studded with roasted candlenuts, a colonial-era heritage bake.",
                        "description_ind": "Roti khas Ambon yang gurih manis berisi kenari panggang, warisan kuliner kolonial Ambon.",
                        "ingredients_eng": [
                            "Candlenuts",
                            "Wheat Flour",
                            "Eggs",
                            "Sugar",
                            "Butter",
                            "Vanilla"
                        ],
                        "ingredients_ind": [
                            "Kenari",
                            "Tepung Terigu",
                            "Telur",
                            "Gula",
                            "Mentega",
                            "Vanila"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "roti kenari",
                            "ambon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "roti kenari",
                            "traditional",
                            "ambon"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Roti%20Kenari%20(top%20view).jpg?width=800",
                    "ingredients_source": "https://www.tempo.co/gaya-hidup/4-kuliner-khas-ambon-berbahan-kacang-kenari-enak-sekali-239412",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-010",
                        "name": "Es Kacang Merah Ambon",
                        "origin": "Ambon",
                        "category": "Dessert",
                        "description_eng": "Ambon's red bean ice: sweet stewed red beans over shaved ice with condensed milk.",
                        "description_ind": "Es kacang merah khas Ambon: kacang merah rebus manis disajikan dengan es serut dan susu kental manis.",
                        "ingredients_eng": [
                            "Red Beans",
                            "Shaved Ice",
                            "Condensed Milk",
                            "Sugar",
                            "Cocoa",
                            "Jelly"
                        ],
                        "ingredients_ind": [
                            "Kacang Merah",
                            "Es Serut",
                            "Susu Kental Manis",
                            "Gula",
                            "Cokelat",
                            "Selatin"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es kacang merah ambon",
                            "ambon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "es kacang merah ambon",
                            "traditional",
                            "ambon"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20kacang%20merah%20Ternate.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_kacang_merah",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://ambon.tribunnews.com/2022/04/20/resep-es-kacang-merah-minuman-segar-untuk-buka-puasa-yang-sering-ditemukan-di-ambon",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-011",
                        "name": "Halua Kenari",
                        "origin": "Maluku",
                        "category": "Snack",
                        "description_eng": "Maluku candlenut sweets coated in caramelized palm sugar and sprinkled with sesame.",
                        "description_ind": "Permen kenari khas Maluku yang dilapisi gula merah karamel dan taburan wijen.",
                        "ingredients_eng": [
                            "Candlenuts",
                            "Palm Sugar",
                            "Water",
                            "Salt",
                            "Pandan",
                            "Sesame"
                        ],
                        "ingredients_ind": [
                            "Kenari",
                            "Gula Merah",
                            "Air",
                            "Garam",
                            "Pandan",
                            "Wijen"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "halua kenari",
                            "maluku",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "halua kenari",
                            "traditional",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Halua%20Kenari.jpg?width=800",
                    "ingredients_source": "https://indonesiakaya.com/pustaka-indonesia/halua-kenari-camilan-khas-manado-yang-kaya-nutrisi-dan-rasa/",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-012",
                        "name": "Ikan Bakar Dabu-dabu",
                        "origin": "Ambon",
                        "category": "Main Dish",
                        "description_eng": "Manado-Maluku grilled fish served with dabu-dabu — a fresh relish of sliced chili, tomato, and shallots.",
                        "description_ind": "Ikan bakar khas Manado-Maluku yang disajikan dengan dabu-dabu: irisan cabai, tomat, dan bawang segar.",
                        "ingredients_eng": [
                            "Fish",
                            "Red Chili",
                            "Shallots",
                            "Tomato",
                            "Lime",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Tomat",
                            "Jeruk Nipis",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar dabu-dabu",
                            "ambon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar dabu-dabu",
                            "traditional",
                            "ambon"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20Bakar%20Dabu-dabu%20Ternate%203.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Dabu-dabu",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://ambon.antaranews.com/berita/169632/nikmatnya-ikan-bakar-sambal-colo-colo-khas-maluku",
                    "rating": 4.1,
                    "rating_platform": "TripAdvisor",
                    "rating_source": "https://www.tripadvisor.com/Restaurant_Review-g608477-d7396514-Reviews-Dua_Ikan-Ambon_Maluku_Islands.html",
                    "rating_note": null
                    },
                    {
                        "id": "ml-013",
                        "name": "Sagu Gula",
                        "origin": "Maluku",
                        "category": "Snack",
                        "description_eng": "Maluku sago pearls cooked with palm sugar and coconut milk into a sticky sweet dessert.",
                        "description_ind": "Bola-bola sagu khas Maluku yang dimasak dengan gula merah dan santan hingga lengket manis.",
                        "ingredients_eng": [
                            "Sago",
                            "Palm Sugar",
                            "Coconut Milk",
                            "Pandan",
                            "Water",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Sagu",
                            "Gula Merah",
                            "Santan",
                            "Pandan",
                            "Air",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sagu gula",
                            "maluku",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sagu gula",
                            "traditional",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sagu%20gula%20melaka.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sagu",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://www.antarafoto.com/id/view/1468630/sagu-gula-makanan-khas-maluku",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-014",
                        "name": "Pisang Asar",
                        "origin": "Ambon",
                        "category": "Snack",
                        "description_eng": "Smoked bananas from Central Maluku served with sweet-salted grated coconut (gula garam).",
                        "description_ind": "Pisang yang diasap khas Maluku Tengah dan disajikan dengan kelapa parut manis (gula garam).",
                        "ingredients_eng": [
                            "Bananas",
                            "Smoked Wood",
                            "Grated Coconut",
                            "Palm Sugar",
                            "Pandan",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Pisang",
                            "Asap Kayu",
                            "Kelapa Parut",
                            "Gula Merah",
                            "Pandan",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "pisang asar",
                            "ambon",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "pisang asar",
                            "traditional",
                            "ambon"
                        ],
                        "image": null,
                    "ingredients_source": "https://www.liputan6.com/regional/read/6029217/fakta-unik-pisang-asar-khas-ambon-simak-resepnya",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-015",
                        "name": "Sayur Lilin",
                        "origin": "Ternate",
                        "category": "Side Dish",
                        "description_eng": "A Maluku fish ball soup in spiced yellow coconut milk broth with fresh vegetables.",
                        "description_ind": "Sup bakso ikan khas Maluku dalam kuah santan kuning berrempah, disajikan dengan sayuran segar.",
                        "ingredients_eng": [
                            "Fish Balls",
                            "Coconut Milk",
                            "Turmeric",
                            "Chili",
                            "Galangal",
                            "Vegetables"
                        ],
                        "ingredients_ind": [
                            "Bakso Ikan",
                            "Santan",
                            "Kunyit",
                            "Cabai",
                            "Lengkuas",
                            "Sayuran"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sayur lilin",
                            "ternate",
                            "kuliner"
                        ],
                        "search_keywords_eng": [
                            "sayur lilin",
                            "traditional",
                            "ternate"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayori%20lilin%20(Saccharum%20edule).jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sayur_lilin",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-016",
                        "name": "Ayam Bakar Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Maluku Utara.",
                        "description_ind": "Hidangan Ayam Bakar Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp2.000 - Rp5.000",
                    "price_source": "https://ambon.tribunnews.com/2022/04/06/nikmatnya-berbuka-puasa-dengan-pisang-asar-khas-ambon",
                    "rating": 4.4,
                    "rating_platform": "Google Maps (via Restaurant Guru)",
                    "rating_source": "https://restaurantguru.com/Ayam-Bakar-Pak-RT-Ternate",
                    "rating_note": null
                    },
                    {
                        "id": "ml-017",
                        "name": "Sambal Maluku",
                        "origin": "Maluku",
                        "category": "Condiment",
                        "description_eng": "Spicy signature chili paste from Maluku.",
                        "description_ind": "Hidangan Sambal Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Red Chili",
                            "Shallots",
                            "Garlic",
                            "Tomato",
                            "Tamarind",
                            "Salt"
                        ],
                        "ingredients_ind": [
                            "Cabai Merah",
                            "Bawang Merah",
                            "Bawang Putih",
                            "Tomat",
                            "Asam",
                            "Garam"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "sambal",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sambal",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Balinese%20Fish%20Sambal%20-%20Balinese%20House%2C%20Brighton%202026-05-17.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sambal",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-018",
                        "name": "Es Campur Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Maluku Utara.",
                        "description_ind": "Hidangan Es Campur Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-019",
                        "name": "Mie Kuah Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Maluku.",
                        "description_ind": "Hidangan Mie Kuah Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8731384/7-mie-ayam-legendaris-di-jakarta-barat-harganya-mulai-rp15-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-020",
                        "name": "Bubur Ayam Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Maluku.",
                        "description_ind": "Hidangan Bubur Ayam Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6574135/bubur-ayam-rp-95-000-vs-rp-15-000-enak-yang-mana",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-021",
                        "name": "Sate Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Maluku Utara marinade.",
                        "description_ind": "Hidangan Sate Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp40.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-022",
                        "name": "Tumis Sayur Maluku",
                        "origin": "Maluku",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Maluku.",
                        "description_ind": "Hidangan Tumis Sayur Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-023",
                        "name": "Es Campur Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Maluku Utara.",
                        "description_ind": "Hidangan Es Campur Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-024",
                        "name": "Kerupuk Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Maluku Utara.",
                        "description_ind": "Hidangan Kerupuk Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp4.000 - Rp6.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-025",
                        "name": "Kue Basah Maluku",
                        "origin": "Maluku",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Maluku.",
                        "description_ind": "Hidangan Kue Basah Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp25.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6287517/12-rekomendasi-tempat-beli-kue-basah-di-jakarta-dari-pasar-subuh-hingga-toko-premium",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-026",
                        "name": "Ikan Bakar Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Maluku Utara signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Red Chili",
                            "Shallots",
                            "Tomato",
                            "Lime",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Tomat",
                            "Jeruk Nipis",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Dabu-dabu",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://ambon.antaranews.com/berita/169632/nikmatnya-ikan-bakar-sambal-colo-colo-khas-maluku",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-027",
                        "name": "Kopi Khas Maluku",
                        "origin": "Maluku",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Maluku.",
                        "description_ind": "Hidangan Kopi Khas Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-028",
                        "name": "Soto Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Maluku.",
                        "description_ind": "Hidangan Soto Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6629724/murah-meriah-di-5-warung-soto-ini-bisa-jajan-soto-mulai-rp-1-000-per-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-029",
                        "name": "Sate Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Grilled skewers with local Maluku marinade.",
                        "description_ind": "Hidangan Sate Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Shallots",
                            "Coriander",
                            "Peanut Sauce",
                            "Rice Cakes"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Merah",
                            "Ketumbar",
                            "Bumbu Kacang",
                            "Lontong"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "sate",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "sate",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sate%20Ayam%20Panggang.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Sate",

                    "price_range_ind": "Rp20.000 - Rp40.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6387256/sate-ayam-rp-165-000-vs-rp-35-000-begini-tampilan-dan-rasanya",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-030",
                        "name": "Tumis Sayur Maluku",
                        "origin": "Maluku",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Maluku.",
                        "description_ind": "Hidangan Tumis Sayur Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-031",
                        "name": "Es Campur Maluku",
                        "origin": "Maluku",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Maluku.",
                        "description_ind": "Hidangan Es Campur Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "ingredients_ind": [
                            "es campur",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-032",
                        "name": "Tumis Sayur Maluku",
                        "origin": "Maluku",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Maluku.",
                        "description_ind": "Hidangan Tumis Sayur Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-033",
                        "name": "Kopi Khas Maluku",
                        "origin": "Maluku",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Maluku.",
                        "description_ind": "Hidangan Kopi Khas Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-034",
                        "name": "Mie Kuah Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Warm noodle soup native to Maluku.",
                        "description_ind": "Hidangan Mie Kuah Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Noodles",
                            "Chicken Broth",
                            "Garlic",
                            "Spring Onion",
                            "Vegetables",
                            "Chili"
                        ],
                        "ingredients_ind": [
                            "Mie",
                            "Kaldu Ayam",
                            "Bawang Putih",
                            "Daun Bawang",
                            "Sayuran",
                            "Cabai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "mie kuah",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "mie kuah",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mie%20kuah%20telor%20cabe.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Mie",

                    "price_range_ind": "Rp15.000 - Rp20.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8731384/7-mie-ayam-legendaris-di-jakarta-barat-harganya-mulai-rp15-ribuan",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-035",
                        "name": "Kopi Khas Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Maluku Utara.",
                        "description_ind": "Hidangan Kopi Khas Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-036",
                        "name": "Ayam Bakar Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Maluku Utara.",
                        "description_ind": "Hidangan Ayam Bakar Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": 4.4,
                    "rating_platform": "Google Maps (via Restaurant Guru)",
                    "rating_source": "https://restaurantguru.com/Ayam-Bakar-Pak-RT-Ternate",
                    "rating_note": null
                    },
                    {
                        "id": "ml-037",
                        "name": "Bubur Ayam Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Maluku.",
                        "description_ind": "Hidangan Bubur Ayam Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6574135/bubur-ayam-rp-95-000-vs-rp-15-000-enak-yang-mana",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-038",
                        "name": "Soto Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Maluku.",
                        "description_ind": "Hidangan Soto Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6629724/murah-meriah-di-5-warung-soto-ini-bisa-jajan-soto-mulai-rp-1-000-per-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-039",
                        "name": "Kerupuk Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Snack",
                        "description_eng": "Crispy traditional crackers from Maluku Utara.",
                        "description_ind": "Hidangan Kerupuk Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Tapioca Flour",
                            "Garlic",
                            "Salt",
                            "White Pepper"
                        ],
                        "ingredients_ind": [
                            "Tepung Tapioka",
                            "Bawang Putih",
                            "Garam",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kerupuk",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kerupuk",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Menjemur%20Kerupuk%20Ikan.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kerupuk",

                    "price_range_ind": "Rp4.000 - Rp6.000",
                    "price_source": "https://jateng.tribunnews.com/umkm/1272082/curhat-pedagang-kerupuk-di-semarang-harga-rp5000-ukuran-makin-mini-dan-isi-berkurang",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-040",
                        "name": "Kue Basah Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Snack",
                        "description_eng": "Traditional sweet snack from Maluku Utara.",
                        "description_ind": "Hidangan Kue Basah Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Flour",
                            "Coconut Milk",
                            "Palm Sugar",
                            "Pandan",
                            "Salt",
                            "Banana"
                        ],
                        "ingredients_ind": [
                            "Tepung Beras",
                            "Santan",
                            "Gula Merah",
                            "Pandan",
                            "Garam",
                            "Pisang"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kue basah",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kue basah",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kue%20basah%20kue%20pisang%20kue%20ku.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kue",

                    "price_range_ind": "Rp1.000 - Rp25.000",
                    "price_source": "https://www.liputan6.com/lifestyle/read/6287517/12-rekomendasi-tempat-beli-kue-basah-di-jakarta-dari-pasar-subuh-hingga-toko-premium",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-041",
                        "name": "Soto Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Main Dish",
                        "description_eng": "Aromatic traditional soup from Maluku Utara.",
                        "description_ind": "Hidangan Soto Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken Broth",
                            "Rice Cakes",
                            "Lemongrass",
                            "Kaffir Lime Leaves",
                            "Turmeric",
                            "Fried Shallots"
                        ],
                        "ingredients_ind": [
                            "Kaldu Ayam",
                            "Lontong",
                            "Serai",
                            "Daun Jeruk",
                            "Kunyit",
                            "Bawang Goreng"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "soto",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "soto",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Soto%20ayam.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Soto",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-6629724/murah-meriah-di-5-warung-soto-ini-bisa-jajan-soto-mulai-rp-1-000-per-porsi",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-042",
                        "name": "Ikan Bakar Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Main Dish",
                        "description_eng": "Grilled fish with Maluku Utara signature spices.",
                        "description_ind": "Hidangan Ikan Bakar Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Fish",
                            "Red Chili",
                            "Shallots",
                            "Tomato",
                            "Lime",
                            "Basil"
                        ],
                        "ingredients_ind": [
                            "Ikan",
                            "Cabai Merah",
                            "Bawang Merah",
                            "Tomat",
                            "Jeruk Nipis",
                            "Kemangi"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ikan bakar",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ikan bakar",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ikan%20kakap%20bakar%20madu.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Dabu-dabu",

                    "price_range_ind": "Rp15.000 - Rp25.000",
                    "price_source": "https://ambon.antaranews.com/berita/169632/nikmatnya-ikan-bakar-sambal-colo-colo-khas-maluku",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-043",
                        "name": "Es Campur Maluku",
                        "origin": "Maluku",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Maluku.",
                        "description_ind": "Hidangan Es Campur Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-044",
                        "name": "Es Campur Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Maluku Utara.",
                        "description_ind": "Hidangan Es Campur Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-045",
                        "name": "Es Campur Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Dessert",
                        "description_eng": "Refreshing mixed ice dessert from Maluku Utara.",
                        "description_ind": "Hidangan Es Campur Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Shaved Ice",
                            "Mixed Fruits",
                            "Grass Jelly",
                            "Coconut Milk",
                            "Palm Sugar Syrup",
                            "Condensed Milk"
                        ],
                        "ingredients_ind": [
                            "Es Serut",
                            "Buah Campur",
                            "Cincau",
                            "Santan",
                            "Sirup Gula Merah",
                            "Susu Kental Manis"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "es campur",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "es campur",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Es%20Campur%2C%202019.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Es_campur",

                    "price_range_ind": "Rp12.000 - Rp30.000",
                    "price_source": "https://food.detik.com/info-kuliner/d-8671106/slurpp-ini-7-es-legendaris-berumur-puluhan-tahun-di-jakarta",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-046",
                        "name": "Kopi Khas Maluku Utara",
                        "origin": "Maluku Utara",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Maluku Utara.",
                        "description_ind": "Hidangan Kopi Khas Maluku Utara tradisional khas Maluku Utara yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "maluku utara",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "maluku utara"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-047",
                        "name": "Tumis Sayur Maluku",
                        "origin": "Maluku",
                        "category": "Side Dish",
                        "description_eng": "Stir-fried local vegetables from Maluku.",
                        "description_ind": "Hidangan Tumis Sayur Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Vegetables",
                            "Garlic",
                            "Shallots",
                            "Chili",
                            "Oyster Sauce",
                            "Pepper"
                        ],
                        "ingredients_ind": [
                            "Sayuran",
                            "Bawang Putih",
                            "Bawang Merah",
                            "Cabai",
                            "Saus Tiram",
                            "Merica"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "tumis sayur",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "tumis sayur",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sayur%20tumis.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Tumis",

                    "price_range_ind": "Harga bervariasi",
                    "price_source": null,
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-048",
                        "name": "Ayam Bakar Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Sweet and savory grilled chicken from Maluku.",
                        "description_ind": "Hidangan Ayam Bakar Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Turmeric",
                            "Garlic",
                            "Candlenut",
                            "Lemongrass"
                        ],
                        "ingredients_ind": [
                            "Ayam",
                            "Kecap Manis",
                            "Kunyit",
                            "Bawang Putih",
                            "Kemiri",
                            "Serai"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "ayam bakar",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "ayam bakar",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayam%20Bakar%20Bali.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Ayam_bakar",

                    "price_range_ind": "Rp20.000 - Rp35.000",
                    "price_source": "https://food.detik.com/rumah-makan/d-8576320/5-ayam-bakar-enak-di-jakarta-mulai-rp-23-ribuan-dengan-sambal-juara",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-049",
                        "name": "Bubur Ayam Maluku",
                        "origin": "Maluku",
                        "category": "Main Dish",
                        "description_eng": "Comforting chicken congee from Maluku.",
                        "description_ind": "Hidangan Bubur Ayam Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Rice Porridge",
                            "Chicken",
                            "Sweet Soy Sauce",
                            "Fried Shallots",
                            "Crackers",
                            "Boiled Egg"
                        ],
                        "ingredients_ind": [
                            "Bubur Nasi",
                            "Ayam",
                            "Kecap Manis",
                            "Bawang Goreng",
                            "Kerupuk",
                            "Telur Rebus"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": false,
                        "search_keywords_ind": [
                            "bubur ayam",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "bubur ayam",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bubur%20ayam%20chicken%20porridge.JPG?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Bubur_ayam",

                    "price_range_ind": "Rp10.000 - Rp15.000",
                    "price_source": "https://food.detik.com/pengalaman-bersantap/d-6574135/bubur-ayam-rp-95-000-vs-rp-15-000-enak-yang-mana",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    },
                    {
                        "id": "ml-050",
                        "name": "Kopi Khas Maluku",
                        "origin": "Maluku",
                        "category": "Beverage",
                        "description_eng": "Traditional brewed coffee from Maluku.",
                        "description_ind": "Hidangan Kopi Khas Maluku tradisional khas Maluku yang sangat digemari.",
                        "ingredients_eng": [
                            "Ground Coffee",
                            "Hot Water",
                            "Sugar"
                        ],
                        "ingredients_ind": [
                            "Bubuk Kopi",
                            "Air Panas",
                            "Gula"
                        ],
                        "flavor_profile": [
                            "Savory",
                            "Authentic"
                        ],
                        "is_halal": true,
                        "is_vegetarian": true,
                        "search_keywords_ind": [
                            "kopi khas",
                            "maluku",
                            "indonesia"
                        ],
                        "search_keywords_eng": [
                            "kopi khas",
                            "food",
                            "maluku"
                        ],
                        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi%20O.jpg?width=800",
                    "ingredients_source": "https://id.wikipedia.org/wiki/Kopi_tubruk",

                    "price_range_ind": "Rp5.000 - Rp10.000",
                    "price_source": "https://finance.detik.com/solusiukm/d-7268710/warkop-tongkrongan-anak-muda-jajan-rp-5-000-duduk-berjam-jam-omzetnya-berapa",
                    "rating": null,
                    "rating_platform": null,
                    "rating_source": null,
                    "rating_note": null
                    }
                ]
            }
        ]
    }
]

export default DATA_PULAU
