importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "erp-bat-frontend",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.bb376f6fa8333f5ae6e6.js",
    "revision": "915af97e492d271aff6a99a611446905"
  },
  {
    "url": "/_nuxt/layouts/default.d0f93e317a3e0aa663dc.js",
    "revision": "c9c1cf2881329e24daf35d0c6bfa3035"
  },
  {
    "url": "/_nuxt/layouts/login.ec8c804c4af3a78c7d1e.js",
    "revision": "6facc99bf431eb1156666c4612a6190b"
  },
  {
    "url": "/_nuxt/manifest.40afabf7e6b90c162c22.js",
    "revision": "529d6a295de46c6f4d86e3ca5595f25f"
  },
  {
    "url": "/_nuxt/pages/approval/sppb/_id/detail.61c06b07a31bf6ee068e.js",
    "revision": "593dd3c5d8607673519dab6b78b7c2c3"
  },
  {
    "url": "/_nuxt/pages/approval/sppb/index.b75ad0ee349b0207c2d4.js",
    "revision": "fe4b234992ee8d1afd5b5e3b64ab08cc"
  },
  {
    "url": "/_nuxt/pages/barang/_id/edit.c7ff7843fb1269ee739b.js",
    "revision": "8a91c0fc2917401b197e3d6046be772e"
  },
  {
    "url": "/_nuxt/pages/barang/create.5fd011420ca346522a2b.js",
    "revision": "3b0ac13c297a6411fc148848e3f6e5af"
  },
  {
    "url": "/_nuxt/pages/barang/index.6c2caaf52614fd935b82.js",
    "revision": "707ff2e4ca004c3789c73cc89f36856e"
  },
  {
    "url": "/_nuxt/pages/barang/jenis/_id/edit.93606e7f93ddb9293023.js",
    "revision": "78e6149702c8c528be3477f48d0110f8"
  },
  {
    "url": "/_nuxt/pages/barang/jenis/create.38a338c3559db9cb8973.js",
    "revision": "6889dc01baa40808ca5015ca2264eaca"
  },
  {
    "url": "/_nuxt/pages/barang/jenis/index.e12c80342e02324fce4c.js",
    "revision": "1befccb768b4f74d23058a159ed48640"
  },
  {
    "url": "/_nuxt/pages/barang/kategori/_id/edit.12d8ea220fbb66fd4917.js",
    "revision": "cf09b6e84d30e8872b59ffc7432c892e"
  },
  {
    "url": "/_nuxt/pages/barang/kategori/create.97b9543f6dd02ab8b8ed.js",
    "revision": "718e492141f3f38c40366b0eb11d73cd"
  },
  {
    "url": "/_nuxt/pages/barang/kategori/index.746813b531140210c561.js",
    "revision": "4fed0c1df11557b7ae324372bba934ac"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-barang/_id/detail.8f42ae895412d0d5a9f3.js",
    "revision": "ff87adbe937f14b17d077016eea5e6b3"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-barang/_id/edit.125b8282c459c5156359.js",
    "revision": "ff7c56cafc746c06b5409abab11d54bf"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-barang/create.e133e28d812fafaaf311.js",
    "revision": "a365a9ad5fb500e23d3223b5e90ff5fe"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-barang/index.5ed76e9d4762d09ac8ee.js",
    "revision": "ea539f6d5eb7373a753223ee88df7a87"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-hasil-produksi/_id/detail.698f8ce9cc5f5aaf230c.js",
    "revision": "e0cb22c6eb31c44a942bc0fdc85b4d84"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-hasil-produksi/_id/edit.fd45991916c3d25bbe16.js",
    "revision": "d3da16464c3693bcdf9ff5f608411e39"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-hasil-produksi/create.baf02006f811c8c42667.js",
    "revision": "89c6ffbcaf5ee23d9b2a2c70dcade7e4"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-penerimaan-hasil-produksi/index.80a5738ef245b925cc2c.js",
    "revision": "3aa4f6a9418ce0d50ec53d00217ff62b"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-bahan-baku/_id/detail.353643473db330173767.js",
    "revision": "01672b115e24ef8e09fd207bd85f38a4"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-bahan-baku/_id/edit.50fcf3c02209a37b991d.js",
    "revision": "d24dc4530699d14acc8f267cb7c237c5"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-bahan-baku/create.3e3cfe4b498bb75abaf0.js",
    "revision": "0de7da24cf8200d4ca380a892d13ab7e"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-bahan-baku/index.67c38d991b1b96cf2001.js",
    "revision": "61901d5ffe2a3292c336f6f2ff727510"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-barang/_id/detail.96b6fd01aeda475a0e41.js",
    "revision": "8da5c2dd2e011ad3c0c07b522d90533c"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-barang/_id/edit.2e406f0aa2e520958c24.js",
    "revision": "2cce0a0240b1976059c6648ba719ba2c"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-barang/create.b12076b272ac5da65c55.js",
    "revision": "838d35e521011762fc50136043be1ef2"
  },
  {
    "url": "/_nuxt/pages/gudang/bukti-pengeluaran-barang/index.c716f214795a200235f0.js",
    "revision": "3229df2c5d135edc5f4830d5ed8c7594"
  },
  {
    "url": "/_nuxt/pages/index.2b4449fc210b890272b8.js",
    "revision": "bc824da2cd6186f9c541ecf2a50e18ae"
  },
  {
    "url": "/_nuxt/pages/inventory/index.845c83a9a3f219508189.js",
    "revision": "2c4ffd9af467db6eb64655c652bcae4e"
  },
  {
    "url": "/_nuxt/pages/inventory/register-barang-keluar.55834227a9056e5f00b1.js",
    "revision": "3ea0cefb68782ece21325d61563e6cc6"
  },
  {
    "url": "/_nuxt/pages/inventory/register-barang-masuk.a0bb4d7206e95f53eec3.js",
    "revision": "674d9c02172236bed9ecb6c85a2febe1"
  },
  {
    "url": "/_nuxt/pages/inventory/stock.22b2d34cd249ca7ca84c.js",
    "revision": "b60e6f3e2acfabc6155dc58e7853a7dd"
  },
  {
    "url": "/_nuxt/pages/inventory/transaksi-barang.f500fb4748b908be8516.js",
    "revision": "2e94b2257f029045d2fbb52b221ba96b"
  },
  {
    "url": "/_nuxt/pages/login.450b9496ba6d2a64962b.js",
    "revision": "884c483fcdcaa9ec25096bcdec845321"
  },
  {
    "url": "/_nuxt/pages/logistik/spp/_id/detail.662b8298cfec0b9d04f5.js",
    "revision": "ca1e702ecc0bb8644e0543d39e23fdc2"
  },
  {
    "url": "/_nuxt/pages/logistik/spp/_id/edit.c2912b2b71632582c93d.js",
    "revision": "2b94f1c93ab1b5024564f562d132c07b"
  },
  {
    "url": "/_nuxt/pages/logistik/spp/create.9f9b21956a2c8e6a5a01.js",
    "revision": "615071118dfc271532f9f13bb8dc8932"
  },
  {
    "url": "/_nuxt/pages/logistik/spp/index.13ef4af90649a282d13a.js",
    "revision": "26971b0365557581003c803edfafc119"
  },
  {
    "url": "/_nuxt/pages/logistik/surat-jalan/_id/detail.fa66e7316dc9eb7b79d8.js",
    "revision": "ad84abba1de801822c8dab829b74570f"
  },
  {
    "url": "/_nuxt/pages/logistik/surat-jalan/_id/edit.a855a911b9abcac5aa6c.js",
    "revision": "0fecf3151882e07cdf27c7622833995d"
  },
  {
    "url": "/_nuxt/pages/logistik/surat-jalan/create.2b4226f8ea9daf294173.js",
    "revision": "ae79ed97855417386dd6577da28166f2"
  },
  {
    "url": "/_nuxt/pages/logistik/surat-jalan/index.c7f43410e8fa462ee2f1.js",
    "revision": "305a048e3364c03915395db12a667f07"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-penerimaan-bahan-baku/_id/detail.986d3a1615971f1a6ee3.js",
    "revision": "2ccb1a06526e6a908fe1f017eba70023"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-penerimaan-bahan-baku/_id/edit.39be767081893ece89c7.js",
    "revision": "0c17c4fc33d005cf3fd77c6eeda11bea"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-penerimaan-bahan-baku/create.c82a5047bb367d3946a0.js",
    "revision": "70c3e712efb71b7ea3024171bb5fc5a5"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-penerimaan-bahan-baku/index.d17c2583eaf368ca541e.js",
    "revision": "cdd0241d34c959208eb5c58778c2d366"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-pengeluaran-hasil-produksi/_id/detail.60c540ee25b34fcc8b5b.js",
    "revision": "64b93a3edca716751de28f243198d755"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-pengeluaran-hasil-produksi/_id/edit.194c8d7d4f4d4fa53d1f.js",
    "revision": "c01b0746d6690b7ec8de5735651076c9"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-pengeluaran-hasil-produksi/create.191bb62b834b9e6218c3.js",
    "revision": "3be62855d9db9c3addb4421ef8114ab9"
  },
  {
    "url": "/_nuxt/pages/manufaktur/bukti-pengeluaran-hasil-produksi/index.6c64b7a45f8e860551c1.js",
    "revision": "200ed6cdb7eaa8674ba0060de76e7596"
  },
  {
    "url": "/_nuxt/pages/manufaktur/permintaan-material/_id/detail.a4abbe801b4bfe94f9fb.js",
    "revision": "2909163fa18a976ac8d97840b2053ccb"
  },
  {
    "url": "/_nuxt/pages/manufaktur/permintaan-material/_id/edit.ae12e724f935ae15efa2.js",
    "revision": "39cef2f14be0ba33959bfdc3c4502713"
  },
  {
    "url": "/_nuxt/pages/manufaktur/permintaan-material/create.c2b0867f7e407ea6a082.js",
    "revision": "43122e8d1bb35fd2dd080550bd052684"
  },
  {
    "url": "/_nuxt/pages/manufaktur/permintaan-material/index.2f69aebfe0f61f1e8c55.js",
    "revision": "d2b5932e6978a45d64b69f43f05fb59a"
  },
  {
    "url": "/_nuxt/pages/manufaktur/produksi-barang/_id/detail.4d68a539ce838f7876e4.js",
    "revision": "888a8b4c6176782d2715ecb438c7e525"
  },
  {
    "url": "/_nuxt/pages/manufaktur/produksi-barang/_id/edit.fcd59f6b50e934900349.js",
    "revision": "db585b04000eb3ff18d5de6d58b966ab"
  },
  {
    "url": "/_nuxt/pages/manufaktur/produksi-barang/create.81f9198e09af1004a75c.js",
    "revision": "533befa1d89e09d51c0884cf96e911ac"
  },
  {
    "url": "/_nuxt/pages/manufaktur/produksi-barang/index.6aaa4874ac1ea7606680.js",
    "revision": "a1e942f972384d11d5b709c1a7c07755"
  },
  {
    "url": "/_nuxt/pages/notification.e0384b519ffad66553b8.js",
    "revision": "0924b23268736fdb3f23271275cb97b5"
  },
  {
    "url": "/_nuxt/pages/project/sppb/_id/detail.e24f75fa53b9480d1788.js",
    "revision": "57c43bc9d42017e6941be772a1de981b"
  },
  {
    "url": "/_nuxt/pages/project/sppb/_id/edit.658146e879af870b46c4.js",
    "revision": "8a03417099310be7aa1f44ebd7138839"
  },
  {
    "url": "/_nuxt/pages/project/sppb/create.9bc8b3393545bb0761a8.js",
    "revision": "06ec371eb480e194f0b2bf9697837eed"
  },
  {
    "url": "/_nuxt/pages/project/sppb/index.2620e77a5ecbf96b3424.js",
    "revision": "3f10dd8a6dd75aa720f6826132215bf8"
  },
  {
    "url": "/_nuxt/pages/trading/_id/detail.a033a4e6e0689ace9273.js",
    "revision": "011453f79a10192cbc53cb12e6f9707c"
  },
  {
    "url": "/_nuxt/pages/trading/_id/edit.73852fa7ce08eb4fb45f.js",
    "revision": "6f6172bd3de84e82c78f126ccbe38deb"
  },
  {
    "url": "/_nuxt/pages/trading/create.e22f139bc6c579be65b6.js",
    "revision": "44ea001ba0fd7f93284dd24be79e7f44"
  },
  {
    "url": "/_nuxt/pages/trading/index.f1ccb1d1cc353915d009.js",
    "revision": "8fa1ce12f0c2f518905fa2eac67e50d3"
  },
  {
    "url": "/_nuxt/pages/trading/penawaran/_id/detail.dde7c190f38c6afd654d.js",
    "revision": "a81ce359baae4741af831832627e6f5e"
  },
  {
    "url": "/_nuxt/pages/trading/penawaran/_id/edit.b81d10592b00a012dac2.js",
    "revision": "aa54b1854afc40aa5b7f83ae4f7acd43"
  },
  {
    "url": "/_nuxt/pages/trading/penawaran/create.9cf02964afd114b42ecd.js",
    "revision": "d6a691440ee06a850225e8b1e5e53177"
  },
  {
    "url": "/_nuxt/pages/trading/penawaran/index.090b23e8f80e14179721.js",
    "revision": "13787186bd04fd27e28abc07f4855381"
  },
  {
    "url": "/_nuxt/pages/trading/permintaan/_id/detail.21dd5a68871aa674cb3f.js",
    "revision": "5a5a36a3cac72ce38278db84f9fabe3f"
  },
  {
    "url": "/_nuxt/pages/trading/permintaan/_id/edit.f7957cb1250ff23cead1.js",
    "revision": "8c7ce6de711516dd9f9b49a29f951963"
  },
  {
    "url": "/_nuxt/pages/trading/permintaan/create.07771af53f0885ab2836.js",
    "revision": "acf9f636619687bf141568475953895a"
  },
  {
    "url": "/_nuxt/pages/trading/permintaan/index.fcd221dbf7c190cff8fe.js",
    "revision": "3f09477f5b31f0b0acbdf30742e125e5"
  },
  {
    "url": "/_nuxt/pages/trading/sppb/_id/detail.5e0e1a11b97a3a1c4aa0.js",
    "revision": "3321a4a111548a08762ae40a1e4ea199"
  },
  {
    "url": "/_nuxt/pages/trading/sppb/_id/edit.23b96055e280e97dafb8.js",
    "revision": "26f53655d3784e2f49854eb817abd66f"
  },
  {
    "url": "/_nuxt/pages/trading/sppb/create.b5af9fa9fafafcc84fd3.js",
    "revision": "7f9b83b71898ea8f3191ba80b52ca380"
  },
  {
    "url": "/_nuxt/pages/trading/sppb/index.06d00aea48fd75f406ea.js",
    "revision": "337be67a80a0eee336d6af2f746e5ff4"
  },
  {
    "url": "/_nuxt/pages/user/_id/detail.2856544c27aa26d31fdd.js",
    "revision": "74ea11695d842051298e9091967aaa08"
  },
  {
    "url": "/_nuxt/pages/user/index.37cd01aa40067d54a2fa.js",
    "revision": "fe9bf5846af9d4acd06707ae6a0ab16a"
  },
  {
    "url": "/_nuxt/vendor.47ba5692bd317d62d6d9.js",
    "revision": "2b10894fae1809419c65f058f30cb94c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

