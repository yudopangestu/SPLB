var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleSatelliteHybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_PetaDasarATRBPN_3 = new ol.layer.Tile({
            'title': 'Peta Dasar ATRBPN',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://petadasar.atrbpn.go.id/main/wms/{x}/{y}/{z}'
            })
        });
var format_RTRWLABUHANBATUUTARANo5Tahun2015_4 = new ol.format.GeoJSON();
var features_RTRWLABUHANBATUUTARANo5Tahun2015_4 = format_RTRWLABUHANBATUUTARANo5Tahun2015_4.readFeatures(json_RTRWLABUHANBATUUTARANo5Tahun2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRWLABUHANBATUUTARANo5Tahun2015_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRWLABUHANBATUUTARANo5Tahun2015_4.addFeatures(features_RTRWLABUHANBATUUTARANo5Tahun2015_4);
var lyr_RTRWLABUHANBATUUTARANo5Tahun2015_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRWLABUHANBATUUTARANo5Tahun2015_4, 
                style: style_RTRWLABUHANBATUUTARANo5Tahun2015_4,
                popuplayertitle: 'RTRW LABUHANBATU UTARA No 5 Tahun 2015',
                interactive: true,
    title: 'RTRW LABUHANBATU UTARA No 5 Tahun 2015<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_0.png" /> Badan Air<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_1.png" /> Hutan Lindung<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_2.png" /> Hutan Produksi<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_3.png" /> Hutan Produksi Konversi<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_4.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_5.png" /> Hutan Suaka Alam<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_6.png" /> Perkebunan<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_7.png" /> Permukiman<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_8.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_9.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/RTRWLABUHANBATUUTARANo5Tahun2015_4_10.png" /> <br />' });
var format_RTRWLABUHANBATUNo3Tahun2016_5 = new ol.format.GeoJSON();
var features_RTRWLABUHANBATUNo3Tahun2016_5 = format_RTRWLABUHANBATUNo3Tahun2016_5.readFeatures(json_RTRWLABUHANBATUNo3Tahun2016_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRWLABUHANBATUNo3Tahun2016_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRWLABUHANBATUNo3Tahun2016_5.addFeatures(features_RTRWLABUHANBATUNo3Tahun2016_5);
var lyr_RTRWLABUHANBATUNo3Tahun2016_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRWLABUHANBATUNo3Tahun2016_5, 
                style: style_RTRWLABUHANBATUNo3Tahun2016_5,
                popuplayertitle: 'RTRW LABUHANBATU No 3 Tahun 2016',
                interactive: true,
    title: 'RTRW LABUHANBATU No 3 Tahun 2016<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_0.png" /> Bandar Udara<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_1.png" /> HL<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_2.png" /> HP<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_3.png" /> Hutan Mangrove<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_4.png" /> Kawasan Industri<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_5.png" /> Perkebunan<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_6.png" /> Permukiman Pedesaan<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_7.png" /> Permukiman Perkotaan<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_8.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_9.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_10.png" /> Resapan Air<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_11.png" /> Sempadan Pantai<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_12.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/RTRWLABUHANBATUNo3Tahun2016_5_13.png" /> <br />' });
var format_RDTRRANTAUPRAPATNo21Tahun2022_6 = new ol.format.GeoJSON();
var features_RDTRRANTAUPRAPATNo21Tahun2022_6 = format_RDTRRANTAUPRAPATNo21Tahun2022_6.readFeatures(json_RDTRRANTAUPRAPATNo21Tahun2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RDTRRANTAUPRAPATNo21Tahun2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RDTRRANTAUPRAPATNo21Tahun2022_6.addFeatures(features_RDTRRANTAUPRAPATNo21Tahun2022_6);
var lyr_RDTRRANTAUPRAPATNo21Tahun2022_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RDTRRANTAUPRAPATNo21Tahun2022_6, 
                style: style_RDTRRANTAUPRAPATNo21Tahun2022_6,
                popuplayertitle: 'RDTR RANTAUPRAPAT No 21 Tahun 2022',
                interactive: true,
    title: 'RDTR RANTAUPRAPAT No 21 Tahun 2022<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_0.png" /> Badan Air<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_2.png" /> Jalur Hijau<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_3.png" /> Pariwisata<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_4.png" /> Pemakaman<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_5.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_6.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_7.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_8.png" /> Pergudangan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_9.png" /> Perkantoran<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_10.png" /> Perkebunan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_11.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_12.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_13.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_14.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_15.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_16.png" /> Rimba Kota<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_17.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_18.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_19.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_20.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_21.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_22.png" /> Taman Kota<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_23.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_24.png" /> Transportasi<br />\
    <img src="styles/legend/RDTRRANTAUPRAPATNo21Tahun2022_6_25.png" /> <br />' });
var format_KawasanHutanSK6609_7 = new ol.format.GeoJSON();
var features_KawasanHutanSK6609_7 = format_KawasanHutanSK6609_7.readFeatures(json_KawasanHutanSK6609_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutanSK6609_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutanSK6609_7.addFeatures(features_KawasanHutanSK6609_7);
var lyr_KawasanHutanSK6609_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanHutanSK6609_7, 
                style: style_KawasanHutanSK6609_7,
                popuplayertitle: 'Kawasan Hutan SK.6609',
                interactive: true,
    title: 'Kawasan Hutan SK.6609<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_0.png" /> HL<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_1.png" /> HP<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_2.png" /> HPK<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_3.png" /> HPT<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_4.png" /> KSA/KPA<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_5.png" /> Tubuh Air<br />\
    <img src="styles/legend/KawasanHutanSK6609_7_6.png" /> <br />' });
var format_PIPPIB2025_8 = new ol.format.GeoJSON();
var features_PIPPIB2025_8 = format_PIPPIB2025_8.readFeatures(json_PIPPIB2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPPIB2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPPIB2025_8.addFeatures(features_PIPPIB2025_8);
var lyr_PIPPIB2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIPPIB2025_8, 
                style: style_PIPPIB2025_8,
                popuplayertitle: 'PIPPIB 2025',
                interactive: true,
                title: '<img src="styles/legend/PIPPIB2025_8.png" /> PIPPIB 2025'
            });
var format_Komoditas_9 = new ol.format.GeoJSON();
var features_Komoditas_9 = format_Komoditas_9.readFeatures(json_Komoditas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Komoditas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Komoditas_9.addFeatures(features_Komoditas_9);
var lyr_Komoditas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Komoditas_9, 
                style: style_Komoditas_9,
                popuplayertitle: 'Komoditas',
                interactive: true,
    title: 'Komoditas<br />\
    <img src="styles/legend/Komoditas_9_0.png" /> Karet<br />\
    <img src="styles/legend/Komoditas_9_1.png" /> Kelapa Sawit<br />' });
var format_HGU_10 = new ol.format.GeoJSON();
var features_HGU_10 = format_HGU_10.readFeatures(json_HGU_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HGU_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGU_10.addFeatures(features_HGU_10);
var lyr_HGU_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HGU_10, 
                style: style_HGU_10,
                popuplayertitle: 'HGU',
                interactive: true,
    title: 'HGU<br />\
    <img src="styles/legend/HGU_10_0.png" /> Badan Usaha Milik Negara (BUMN)<br />\
    <img src="styles/legend/HGU_10_1.png" /> Badan Usaha Milik Swasta (BUMS)<br />' });
var format_Batas_Administrasi_11 = new ol.format.GeoJSON();
var features_Batas_Administrasi_11 = format_Batas_Administrasi_11.readFeatures(json_Batas_Administrasi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_11.addFeatures(features_Batas_Administrasi_11);
var lyr_Batas_Administrasi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_11, 
                style: style_Batas_Administrasi_11,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_11.png" /> Batas_Administrasi'
            });
var format_PETA_12 = new ol.format.GeoJSON();
var features_PETA_12 = format_PETA_12.readFeatures(json_PETA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETA_12.addFeatures(features_PETA_12);
cluster_PETA_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PETA_12
});
var lyr_PETA_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PETA_12, 
                style: style_PETA_12,
                popuplayertitle: 'PETA',
                interactive: true,
                title: '<img src="styles/legend/PETA_12.png" /> PETA'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(false);lyr_PetaDasarATRBPN_3.setVisible(false);lyr_RTRWLABUHANBATUUTARANo5Tahun2015_4.setVisible(false);lyr_RTRWLABUHANBATUNo3Tahun2016_5.setVisible(false);lyr_RDTRRANTAUPRAPATNo21Tahun2022_6.setVisible(false);lyr_KawasanHutanSK6609_7.setVisible(false);lyr_PIPPIB2025_8.setVisible(false);lyr_Komoditas_9.setVisible(false);lyr_HGU_10.setVisible(true);lyr_Batas_Administrasi_11.setVisible(true);lyr_PETA_12.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleTerrain_1,lyr_OpenStreetMap_2,lyr_PetaDasarATRBPN_3,lyr_RTRWLABUHANBATUUTARANo5Tahun2015_4,lyr_RTRWLABUHANBATUNo3Tahun2016_5,lyr_RDTRRANTAUPRAPATNo21Tahun2022_6,lyr_KawasanHutanSK6609_7,lyr_PIPPIB2025_8,lyr_Komoditas_9,lyr_HGU_10,lyr_Batas_Administrasi_11,lyr_PETA_12];
lyr_RTRWLABUHANBATUUTARANo5Tahun2015_4.set('fieldAliases', {'POLA_RUANG': 'POLA_RUANG', 'luas': 'luas', });
lyr_RTRWLABUHANBATUNo3Tahun2016_5.set('fieldAliases', {'STRING': 'STRING', 'TEXTSTRING': 'TEXTSTRING', 'TOPONIM': 'TOPONIM', 'POLA_RUANG': 'POLA_RUANG', 'LUAS_1': 'LUAS_1', });
lyr_RDTRRANTAUPRAPATNo21Tahun2022_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'NAMZON': 'NAMZON', 'KODZON': 'KODZON', 'NAMSZN': 'NAMSZN', 'KODSZN': 'KODSZN', 'JNSRPR': 'JNSRPR', 'KODEWP': 'KODEWP', 'KODSWP': 'KODSWP', 'KODBLK': 'KODBLK', 'KODSBL': 'KODSBL', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'KKOP_1': 'KKOP_1', 'LP2B_2': 'LP2B_2', 'KRB_03': 'KRB_03', 'TOD_04': 'TOD_04', 'TEB_05': 'TEB_05', 'PUSLIT': 'PUSLIT', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'TPZ_00': 'TPZ_00', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'PEMOHON': 'PEMOHON', });
lyr_KawasanHutanSK6609_7.set('fieldAliases', {'KODEPROV': 'KODEPROV', 'FUNGSIKWS': 'FUNGSIKWS', 'NOSKPNJK': 'NOSKPNJK', 'TGLSKPNJK': 'TGLSKPNJK', 'F_KK': 'F_KK', 'FUNGSI': 'FUNGSI', 'LUAS_HA': 'LUAS_HA', 'No_SK': 'No_SK', 'Tentang': 'Tentang', });
lyr_PIPPIB2025_8.set('fieldAliases', {'PIPPIB': 'PIPPIB', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'REMARK': 'REMARK', });
lyr_Komoditas_9.set('fieldAliases', {'PEMILIK': 'PEMILIK', 'TIPEPEMILI': 'TIPEPEMILI', 'GUNATANAHK': 'GUNATANAHK', });
lyr_HGU_10.set('fieldAliases', {'PROPINSI': 'PROPINSI', 'KABUPATEN': 'KABUPATEN', 'NIB': 'NIB', 'TIPEHAK': 'TIPEHAK', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'PEMILIK': 'PEMILIK', 'TIPEPEMILI': 'TIPEPEMILI', 'GUNATANAHK': 'GUNATANAHK', 'GUNATANAHU': 'GUNATANAHU', 'TERPETAKAN': 'TERPETAKAN', 'NO': 'NO', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NIBEL_NIB': 'NIBEL_NIB', 'NO_SK_HGU': 'NO_SK_HGU', 'NO_SU_PLL': 'NO_SU_PLL', 'KW': 'KW', 'NO_HAK': 'NO_HAK', 'MULAI_BERL': 'MULAI_BERL', 'BERAKHIR': 'BERAKHIR', 'BUKU_TANAH': 'BUKU_TANAH', 'SURAT_UKUR': 'SURAT_UKUR', 'BUKU_TAN_1': 'BUKU_TAN_1', 'SURAT_UK_1': 'SURAT_UK_1', 'STATUS_HAK': 'STATUS_HAK', 'Keterangan': 'Keterangan', });
lyr_Batas_Administrasi_11.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_PETA_12.set('fieldAliases', {'id': 'id', 'Peta': 'Peta', });
lyr_RTRWLABUHANBATUUTARANo5Tahun2015_4.set('fieldImages', {'POLA_RUANG': 'TextEdit', 'luas': 'TextEdit', });
lyr_RTRWLABUHANBATUNo3Tahun2016_5.set('fieldImages', {'STRING': 'TextEdit', 'TEXTSTRING': 'TextEdit', 'TOPONIM': 'TextEdit', 'POLA_RUANG': 'TextEdit', 'LUAS_1': 'TextEdit', });
lyr_RDTRRANTAUPRAPATNo21Tahun2022_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'TextEdit', 'NAMSZN': 'TextEdit', 'KODSZN': 'TextEdit', 'JNSRPR': 'TextEdit', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'TextEdit', 'LP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'TOD_04': 'TextEdit', 'TEB_05': 'TextEdit', 'PUSLIT': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'PEMOHON': 'TextEdit', });
lyr_KawasanHutanSK6609_7.set('fieldImages', {'KODEPROV': 'TextEdit', 'FUNGSIKWS': 'TextEdit', 'NOSKPNJK': 'TextEdit', 'TGLSKPNJK': 'DateTime', 'F_KK': 'TextEdit', 'FUNGSI': 'TextEdit', 'LUAS_HA': 'TextEdit', 'No_SK': 'TextEdit', 'Tentang': 'TextEdit', });
lyr_PIPPIB2025_8.set('fieldImages', {'PIPPIB': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Komoditas_9.set('fieldImages', {'PEMILIK': 'TextEdit', 'TIPEPEMILI': 'TextEdit', 'GUNATANAHK': 'TextEdit', });
lyr_HGU_10.set('fieldImages', {'PROPINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'NIB': 'TextEdit', 'TIPEHAK': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'PEMILIK': 'TextEdit', 'TIPEPEMILI': 'TextEdit', 'GUNATANAHK': 'TextEdit', 'GUNATANAHU': 'TextEdit', 'TERPETAKAN': 'TextEdit', 'NO': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NIBEL_NIB': 'TextEdit', 'NO_SK_HGU': 'TextEdit', 'NO_SU_PLL': 'TextEdit', 'KW': 'TextEdit', 'NO_HAK': 'TextEdit', 'MULAI_BERL': 'DateTime', 'BERAKHIR': 'DateTime', 'BUKU_TANAH': 'TextEdit', 'SURAT_UKUR': 'TextEdit', 'BUKU_TAN_1': 'TextEdit', 'SURAT_UK_1': 'TextEdit', 'STATUS_HAK': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Batas_Administrasi_11.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_PETA_12.set('fieldImages', {'id': 'TextEdit', 'Peta': 'ExternalResource', });
lyr_RTRWLABUHANBATUUTARANo5Tahun2015_4.set('fieldLabels', {'POLA_RUANG': 'no label', 'luas': 'no label', });
lyr_RTRWLABUHANBATUNo3Tahun2016_5.set('fieldLabels', {'STRING': 'no label', 'TEXTSTRING': 'no label', 'TOPONIM': 'no label', 'POLA_RUANG': 'no label', 'LUAS_1': 'no label', });
lyr_RDTRRANTAUPRAPATNo21Tahun2022_6.set('fieldLabels', {'NAMOBJ': 'no label', 'NAMZON': 'no label', 'KODZON': 'no label', 'NAMSZN': 'no label', 'KODSZN': 'no label', 'JNSRPR': 'no label', 'KODEWP': 'no label', 'KODSWP': 'no label', 'KODBLK': 'no label', 'KODSBL': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'KKOP_1': 'no label', 'LP2B_2': 'no label', 'KRB_03': 'no label', 'TOD_04': 'no label', 'TEB_05': 'no label', 'PUSLIT': 'no label', 'CAGBUD': 'no label', 'RESAIR': 'no label', 'KSMPDN': 'no label', 'HANKAM': 'no label', 'KKARST': 'no label', 'PTBGMB': 'no label', 'MGRSAT': 'no label', 'RDBUMI': 'no label', 'TPZ_00': 'no label', 'REMARK': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'PEMOHON': 'no label', });
lyr_KawasanHutanSK6609_7.set('fieldLabels', {'KODEPROV': 'hidden field', 'FUNGSIKWS': 'hidden field', 'NOSKPNJK': 'inline label - always visible', 'TGLSKPNJK': 'inline label - always visible', 'F_KK': 'hidden field', 'FUNGSI': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', 'No_SK': 'inline label - always visible', 'Tentang': 'inline label - always visible', });
lyr_PIPPIB2025_8.set('fieldLabels', {'PIPPIB': 'inline label - always visible', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'SRS_ID': 'hidden field', 'METADATA': 'hidden field', 'REMARK': 'inline label - always visible', });
lyr_Komoditas_9.set('fieldLabels', {'PEMILIK': 'inline label - always visible', 'TIPEPEMILI': 'inline label - always visible', 'GUNATANAHK': 'inline label - always visible', });
lyr_HGU_10.set('fieldLabels', {'PROPINSI': 'inline label - always visible', 'KABUPATEN': 'inline label - always visible', 'NIB': 'inline label - always visible', 'TIPEHAK': 'inline label - always visible', 'LUASTERTUL': 'inline label - always visible', 'LUASPETA': 'inline label - always visible', 'PEMILIK': 'inline label - always visible', 'TIPEPEMILI': 'inline label - always visible', 'GUNATANAHK': 'inline label - always visible', 'GUNATANAHU': 'inline label - always visible', 'TERPETAKAN': 'hidden field', 'NO': 'hidden field', 'KECAMATAN': 'inline label - always visible', 'DESA': 'inline label - always visible', 'NIBEL_NIB': 'inline label - always visible', 'NO_SK_HGU': 'inline label - always visible', 'NO_SU_PLL': 'inline label - always visible', 'KW': 'hidden field', 'NO_HAK': 'inline label - always visible', 'MULAI_BERL': 'inline label - always visible', 'BERAKHIR': 'inline label - always visible', 'BUKU_TANAH': 'hidden field', 'SURAT_UKUR': 'inline label - always visible', 'BUKU_TAN_1': 'hidden field', 'SURAT_UK_1': 'hidden field', 'STATUS_HAK': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_Batas_Administrasi_11.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_PETA_12.set('fieldLabels', {'id': 'hidden field', 'Peta': 'header label - always visible', });
lyr_PETA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});