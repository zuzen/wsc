/**
 * Copyright 2017 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ----------------------------------------------------------------------------
 */
'use strict';

const m = require('mithril');

const text = {
  welcome: 'Selamat datang di',
  berasnet: 'BerasNet',
  blurb1: ' dibangun menggunakan teknologi blockchain Hyperledger Sawtooth untuk melacak rantai pasok beras mulai dari asal-usul, ' +
    'penyimpanan, pengangkutan dan penjualan beras dari petani sampai konsumen.',
  startBlurb: 'Untuk menggunakan BerasNet, buat akun dengan mengklik tombol Masuk di bilah navigasi atas. ' +
    'Setelah masuk, Anda dapat menambahkan produk beras ke blockchain, melacak lokasi terkini dan riwayat perpindahan kepemilikannya. ' +
    'Selain itu, Anda dapat memberi izin kepada pengelola lain di blockchain untuk melacak dan mengalihkan kepemilikan beras tersebut kepada pihak lain dalam rantai pasok.'
};

const Dashboard = {
  view (vnode) {
    return [
      m('.header.text-center.mb-4',
        m('h4', text.welcome),
        m('h1.mb-3', text.berasnet)),
      m('.blurb',
        m('p.text-justify',
          m('strong', text.berasnet), text.blurb1),
        m('p.text-justify', text.startBlurb)
      )
    ];
  }
};

module.exports = Dashboard;
