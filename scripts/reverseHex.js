var checkpoints = {
  // Mainnet
  // 100000: 'c0fb4e2c6b96e6871a2acfd12299fdbb95c71b0887b03469fb2e313e75a749fd',
  // 200000: 'a939b5c2f2a9d7430f833a9ffc1ecd7eb433add3671677809cbf6b8bdc1430ec',
  // 300000: '77ec9ac7085e351acd58a103ba3c8b207e9ae3afcc4f348fece25908129040fc',
  // 400000: '7ece07533f8ef9366121865219d2cf3d2ec4c4cd1cebc8f80493a66ebc0e2c67',
  // 500000: 'fec49695e922d3842feb28bbdd4219ab4704a61083a4d4b87229f27626ba1b0c',
  // 600000: '6592f6f6ad67d29c07ce993c8167ed2d4713976b9de701b0edb95da67e5b4fd2',
  // 700000: 'ca10962bb25a4184bb3cb6432efaa9b4bb0c743e1130527443912d87c360459a',
  // 800000: 'af8cb31e71ba877d0d8c95c580d6980cd14fe605c81e79a35b4acba9980c9307',
  // 900000: '8debc9619c2e204fdeaa996b9917b6b95b965f4a2635981cb626d8780c4a43af',
  // 1000000: 'b68bd62db4374adf1ba626edc90580aca90e4cad53c1920b697d45c4df0994fd',
  // 1100000: 'a6d51d335b9a382ca8683c849b819fe5f9cec43a5f51beaa7e2f44457bf5ed16',
  // 1200000: 'f2161c0da5ab6af306bbb8b4da3d5b768d17cd93178d27d414b77d9eb4398f08',
  // 1300000: '3751cc16a35f91c61a6e9fcdf3cbdbbf631a92cad2221a9e36e6fb8833162b91',
  // 1400000: '705aa04e6bc0a9ecac1fb2e37eccb3cccc0ae1e3f1f558cbe9791cad1fca565f',
  // 1500000: '30961f1a45cd0b6a7d58c28769d6b77babc068d09db4934ff9aa4922ee0551f2',
  // 1600000: '5b0d109822240bcdaa73c89c21c974563405f3b10949a8ed56d8e6c67e97eeca',
  // 1700000: '684818f8534c7f8ef941ce02e7c34cb44d7ede5cace36cb6f2d70532283dbafe',
  // 1800000: 'cc560b5cf3ff15d57cc1d34fff827eceee69cd068a949cc8f84fc4a541980390',
  // 1900000: '60912e3b6cd7aee10705a683d6653e5862800a5b8e4ea12ea587238db2c75b6d',
  // 2000000: '4a8cb5ca397b7c92c270ccfa9139ffb93f7c5b9515e52486c635c7a1dee9d221',
  // 2100000: 'ceb4ddb46a9385096bd161bd84b68af29670958d942c7ef85c95ec796cce5f01',
  // 2200000: 'ae999db0281b4b0238da15f116b929fc332cb1b19629d4355958220508787558',
  // 2300000: 'a0ac730ed5961f231d7312f3d910fa8707e91455405c0232486c974651a10838',
  // 2400000: '2dfb9b767428dbd02995074635e3aa54c044fe130dde85dd5e9a533d329be1d2',
  // 2500000: '478b768a963bd4357df2a94f633774ffb0e586726c10fedff79bf0293b21512e',
  // 2600000: 'a35101676beabefa360239eeab2b99c05a458f2b6bd614154fc740792ed1ba77',
  // 2700000: '9e9f0e1b199aa6a506ce359928ca4fbde61b69368bacefa37f8bafa967f48443',
  // 2800000: 'fcbc1e5553bd81177477578dd94f567fd4f06442ef94cf04b67d5c343ff1c1bd',
  // 2900000: '4e30a7ac9b5f24f57c98f603c41c849ba1eb41fec17fa7d48fa9fda81fd59305',
  // 3000000: '5ad3a302e3b1c681f0177411384ea03ee595a80a530c23a61f22839fae948e7f'
  // 3100000: 'db81ac8d65c4ab92c160e8e7102f547813e588b54d92b8e2a6e7a22bd1bd07fd',
  // 3200000: '8cb2be5dc584757a669fe2b12cb1648e08417a5f27a8ed2552493a547a7aa3e9',
  // 3300000: '96cd2d29f76b32c01c7fc63862a5df636e1c6c2418fb2ec8ab57f8f530baf23d',
  // 3400000: 'dded264a4c804036a05c0ceb4829bb1e2eaea99253958dc69f44f0dc190c533e',
  // 3500000: '25aa1145525023f7d81f662cb2edfcc6446ab05ec467522207f1203202674401',
  // 3549123: 'f6c3730950b5d8a22e41fffcbccb27dae2e2f2c0b6dc1ae1cc1bbb743af97e76',
  // 3550000: '',

  // Testnet
  2056: 'd3334db071731beaa651f10624c2fea1a5e8c6f9e50f0e602f86262938374148',
  10000: '9068605f2cd1ec5206f835e337ef53e1e5ac1a0ccb834923064d3b184afd3879',
  50000: '629a1c3f692fd1e4c9a711d85a31a0861e6b551edf993c8c5b20619130f30c07',
  75000: 'a26dbb93c13b1238a406afe378abd3b9a2235dcd0aec0cc16e2d61eb17b4b65a',
  100000: '915b751b06e655fe224f06341cf58cafd90fd0d0f5169dc06f3e1b0276cf1388',
  150000: '2d9ae7c05a962ff10a5904d7d78f36d37cb15b789f7dab580cf09807d5afe1c5',
  200000: 'ac569d0dee91b8e9dd1a428ae7f9be9bbe82b646f9dca89604871c13c220b39f',
  225000: '2735e9c90420163275908fb09a52dd5b5373e13fadaf98f56dc0c5c969147112',
  245000: 'd3bfc53d65985948f09c3c722966981db1755dfdfcd671db60356bfabeb99c15'
  300000: '244d7e4bb021c6899a1de24bac2ff3d76c815a0244b461d098cdb78e5e5202f6',
  400000: '0705bd4fa97fca140153b7fafc8f54ca08d1c0bb16b67d563ff8cd34fffc1457',
  500000: 'ffe2fbe9bc744c26f180906190c53231d186696d682f8dd0b50a7cb3c3dd8789',
  600000: '1d002a640eb5ad7ceb5c9f84b7495220199d329cda5de126df85e4bc26f5353e',
  686000: '9ba779f1ab8120d69164b86c41125b7db32c6f3bfee8c0c853f2eedfad5f41ba'
}

var reversedCheckpoints = {}

for (var height in checkpoints){
  var checkStr = checkpoints[height];

  reversedCheckpoints[height] = Buffer.from(checkStr, 'hex').reverse().toString('hex');
}

console.log(reversedCheckpoints)