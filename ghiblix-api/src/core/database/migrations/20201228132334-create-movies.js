'use strict';
const path = require('path');
let fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fileBuffer = fs.readFileSync(path.resolve(__dirname, '..', '..', '..', '..', 'data.json'), 'utf8');
    const contentJson = JSON.parse(fileBuffer);

    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      actors: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      producer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      release_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rt_score: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      trailer_url: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });

    let data = [];
    let dados = {};

    for (let film in contentJson.films) {
      dados = {};
      dados.title = contentJson.films[film].title;
      dados.description = contentJson.films[film].description;
      dados.producer = contentJson.films[film].producer;
      dados.release_date = contentJson.films[film].release_date;
      dados.rt_score = contentJson.films[film].rt_score;
      
      data.push(dados);
    }

    // Castle in the Sky
    data[0].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSDdi883BwohXTFiD7QwgF-KJfT2tkfRBk8MiEGwxXNKE7BtflpLJBkYi1F4iyRK4ygndzf1IIzp5imYiaOWnhKP5eQ.jpg?r=1d8';
    data[0].trailer_url = 'https://www.youtube.com/watch?v=cos8fmZraIE';
    data[0].actors = 'Mayumi Tanaka, Keiko Yokozawa, Kotoe Hatsui, Minori Terada';
    // Grave of the Fireflies
    data[1].image_url = 'https://metagalaxia.com.br/wp-content/uploads/2020/06/Captura-de-tela-2020-06-11-03.11.29-1-1024x546.png';
    data[1].trailer_url = 'https://www.youtube.com/watch?v=4vPeTSRd580';
    data[1].actors = 'Tsutomu Tatsumi, Ayano Shiraishi, Yoshiko Shinohara, Akemi Yamaguchi';
    // My Neighbor Totoro
    data[2].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQTS8nv5RykSAFyLi7LnmrljOSi9k9EmV2qcuXtHlpOvg72B9s1QDhJA0zTtPGB7pBzN7E_Yr29GR1pkUGnE-b9y9OU.jpg?r=314';
    data[2].trailer_url = 'https://www.youtube.com/watch?v=92a7Hj0ijLs';
    data[2].actors = 'Chika Sakamoto, Noriko Hidaka, Hitoshi Takagi';
    // Kiki's Delivery Service
    data[3].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd6nwmndxhc2EPnHykZgb9glYJV4hRx1HaDRkOA_vhH2kqglnx6_bvj62mq3zNtRqYsjB7ZJcXhozl5N8FhVcTlkI1Y.jpg?r=0a8';
    data[3].trailer_url = 'https://www.youtube.com/watch?v=4bG17OYs-GA';
    data[3].actors = 'Minami Takayama, Rei Sakuma, Kappei Yamaguchi';
    // Only Yesterday
    data[4].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU06kHldHQdigWOk74j5Pl3casX4XojxMSoX_konGvBZlD8A5eSrPunNFz-iblEzvirsBJrtftKkwxVi4dN-WO2WEr0.webp?r=1ff';
    data[4].trailer_url = 'youtube.com/watch?v=x0ZrjocXVJ4';
    data[4].actors = 'Miki Imai, Toshirō Yanagiba, Yōko Honna';
    // Porco Rosso
    data[5].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSspLe67pb2OyZUlffjaImSmx5WXMCqS4SP5iM1m_x7TTIVr3r85RCWDRIG0_HE1MeodOiOQtR3YVgtoxN870EAstyI.jpg?r=702';
    data[5].trailer_url = 'https://www.youtube.com/watch?v=awEC-aLDzjs';
    data[5].actors = 'Shūichirō Moriyama, Tokiko Kato, Akemi Okamura, Akio Ōtsuka';
    // Pom Poko
    data[6].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYobisCIcOg_r9t7zhqByqRJ0ENjCjGprL-TCK7r2Z7fEefIl_17MXs_fDktmmr8Fr9IyCaO1EZFDq9AZky7YIq8ddQ.jpg?r=0e0';
    data[6].trailer_url = 'https://www.youtube.com/watch?v=_7cowIHjCD4';
    data[6].actors = 'Kokontei Shinchou, Makoto Nonomura, Yuriko Ishida';
    // Whisper of the Heart
    data[7].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYQpZb6N4j3FltbQcmgdBwnzMN-QCNEJBFbRroyTjbdeQmZe4Rkmw0yYTB_MSkg80tA2JjWkL5Tb9SWjZ5y7ytAdMPE.jpg?r=bf4';
    data[7].trailer_url = 'youtube.com/watch?v=0pVkiod6V0U';
    data[7].actors = 'Yōko Honna, Issei Takahashi, Takashi Tachibana, Shigeru Muroi, Shigeru Tsuyuguchi, Keiju Kobayashi';
    // Princess Mononoke
    data[8].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbFohYlzlURSj0dq0V6NqI_0OPS6owYhyWSahTi6hq_9-2GNUMlmGHgX4pKqAWCpdMhCvi_mWtqv90VVcu1GvdzVp6c.jpg?r=5e4';
    data[8].trailer_url = 'youtube.com/watch?v=4OiMOHRDs14';
    data[8].actors = 'Yōji Matsuda, Yuriko Ishida, Yūko Tanaka, Kaoru Kobayashi, Masahiko Nishimura, Tsunehiko Kamijo, Akihiro Miwa, Mitsuko Mori, Hisaya Morishige';
    // My Neighbors the Yamadas
    data[9].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVasHc8gUinq-z9j40r4CyKnLeEt5u6GYkaRk4wb0YWI32oqfA9DLthcNHxrgoojlZ_N8VZ_EIKskzFyF3HAOz5fk5g.jpg?r=cdf';
    data[9].trailer_url = 'https://www.youtube.com/watch?v=1C9ujuCPlnY';
    data[9].actors = 'Hayato Isobata, Masako Araki, Naomi Uno, Touru Masuoka';
    // Spirited Away
    data[10].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY6wcg_lmxTW_OXk58KluaZbGTG52ScyelZUxnckBZLNustfnabN_hMgGnyIRiihAAwteBRlyO0kpelaGKyVl8-MSlg.jpg?r=a62';
    data[10].trailer_url = 'https://www.youtube.com/watch?v=ByXuk9QqQkk';
    data[10].actors = 'Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takeshi Naito, Yasuko Sawaguchi, Tsunehiko Kamijō, Takehiko Ono, Bunta Sugawara';
    // The Cat Returns
    data[11].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTk_CMct4mQKYIee6H-yp0oA7pWT9ykEKwaXzYPWU7-LjeidXL3Un4VtcIDA-JLePDvq-p7XCI7uW2YREc7xTWOU-30.jpg?r=ee4';
    data[11].trailer_url = 'https://www.youtube.com/watch?v=Gp-H_YOcYTM';
    data[11].actors = 'Chizuru Ikewaki, Yoshihiko Hakamada, Tetsu Watanabe, Yosuke Saito, Aki Maeda, Tetsurō Tamba';
    // Howl's Moving Castle
    data[12].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf9yq2W8WqVXUXc_hDue4dtw9Ipbfv-CyOwp9NuPIfgTRH_sZtiP_jsuvFE7YoR_qBSVtCHVgIu-1NGl-4LNA_3TuRM.jpg?r=994';
    data[12].trailer_url = 'https://www.youtube.com/watch?v=iwROgK94zcM';
    data[12].actors = 'Chieko Baisho, Takuya Kimura, Akihiro Miwa';
    // Tales from Earthsea
    data[13].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVFSGkSnXL475kPK6Sz9S-e8Yta3k-zTWODGT1SCOwbi-Pk5oWrHjCZuecroaLkh5EyVvpIl4cGSvF3gjgV44zDS3i4.webp?r=f8e';
    data[13].trailer_url = 'https://www.youtube.com/watch?v=8hxYx3Jq3kI';
    data[13].actors = 'Bunta Sugawara, Junichi Okada, Aoi Teshima, Yūko Tanaka';
    // Ponyo
    data[14].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQNZPK8l0gRwLhA2q5YOxJdsXmq-vEo-NcyxlAS3MiPvs4E0Z2h7gN7kifYf7B4enzfbkfCRqOoW9lNmETjsScEIzs8.jpg?r=13d';
    data[14].trailer_url = 'https://www.youtube.com/watch?v=CsR3KVgBzSM';
    data[14].actors = 'Tomoko Yamaguchi, Kazushige Nagashima, Yūki Amami, George Tokoro, Yuria Nara, Hiroki Doi, Rumi Hiiragi, Akiko Yano, Kazuko Yoshiyuki, Tomoko Naraoka';
    // Arrietty
    data[15].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXVEpdweF_Jmyr6F5UcynPyEASKaec8-eVSdcXOuvqW_p8GlXyenf6LNBVVlQS0V5ZrqcxcEJltO1UhR9VOsSVmyiIY.jpg?r=777';
    data[15].trailer_url = 'https://www.youtube.com/watch?v=9CtIXPhPo0g';
    data[15].actors = 'Mirai Shida, Ryunosuke Kamiki, Shinobu Otake, Keiko Takeshita, Tatsuya Fujiwara, Tomokazu Miura, Kirin Kiki';
    // From Up on Poppy Hill
    data[16].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU9jh7_nLlpm7LrS5IWiin7Wjy9uMmYmaIU81M7LQsl6aZPKE1J3iNdfuOW7vdUb_5PLrIDN4qz2JghnYixFSH_G7VY.webp?r=62c';
    data[16].trailer_url = 'https://www.youtube.com/watch?v=9nzpk_Br6yo';
    data[16].actors = 'Masami Nagasawa, Junichi Okada, Keiko Takeshita, Yuriko Ishida, Jun Fubuki, Takashi Naito, Shunsuke Kazama, Nao Omori, Teruyuki Kagawa';
    // The Wind Rises
    data[17].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXdl6HooxlHlQDt5WYk_5254d7YtuYoETqSD4FqYFL7w2_KRbeHnNt9imUHb5zNZ5GoYks45PAHJ9H7bXWZFEH63LOI.jpg?r=0ac';
    data[17].trailer_url = 'youtube.com/watch?v=imtdgdGOB6Q';
    data[17].actors = 'Hideaki Anno, Miori Takimoto, Hidetoshi Nishijima, Masahiko Nishimura, Morio Kazama, Keiko Takeshita, Mirai Shida, Jun Kunimura, Shinobu Otake, Nomura Mansai';
    // The Tale of the Princess Kaguya
    data[18].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdhRa5ynFO6Sm32z48oC4abRor6N_g3OYuh-749nNyUdQim_dhaM83rJWRSvZM4mVsbeUOzEfMgrkNVeNLZgSWR9hGI.jpg?r=323';
    data[18].trailer_url = 'https://www.youtube.com/watch?v=W71mtorCZDw';
    data[18].actors = 'Aki Asakura, Kengo Kora, Takeo Chii, Nobuko Miyamoto';
    //
    data[19].image_url = 'https://occ-0-2125-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcb0GsJaMNRjcmz49LqlRbeh7HprPusNA09j1D6ijA7MGM7rOjd3qhY8a8n9SSxGgEAYVWuOMU4vf4vFv29y7pvs5BM.jpg?r=c80';
    data[19].trailer_url = 'https://www.youtube.com/watch?v=iNEDAjcaJ1M';
    data[19].actors = 'Sara Takatsuki, Kasumi Arimura';

    await queryInterface.bulkInsert('movies', data);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};
