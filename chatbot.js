let jawaban = document.querySelector('input');
let sendBtn = document.querySelector('.btn-bot');
const firstPertanyaan = document.getElementById('firstPertanyaan');
const firstContentPertanyaan = document.getElementById('firstContentPertanyaan');

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');
const timeHome = document.querySelector('.text-icon-date');
const timeSticker = document.querySelector('.time-sticker');

/* MENGKLONING CONTENT*/

let originalElementPertanyaan = document.querySelector('#contentPertanyaan .chatPertanyaans');
let clonedElementPertanyaan = originalElementPertanyaan.cloneNode(true);
let contentPertanyaan = document.querySelector('#contentPertanyaan');
let clonedContentPertanyaan = contentPertanyaan.cloneNode(true);

let arrowQuest = clonedElementPertanyaan.querySelector('.arrowQuest');

const originalElementJawaban = document.querySelector('#contentJawaban .chatJawaban');
const clonedElementJawaban = originalElementJawaban.cloneNode(true);
console.log(clonedElementJawaban)
console.log(clonedElementPertanyaan)
let arrowA = clonedElementJawaban.querySelector('.arrowAsk');

/* VALIDASI ELEMENT CLONING WARNA CHAT */
/*
if (localStorage.getItem("theme") === "blue") {
 if (clonedElementJawaban.classList.contains('styleAsk')) {
  clonedElementJawaban.classList.remove('styleAsk');
  clonedElementPertanyaan.classList.remove('styleQuest');
  console.log('masuk ke sini');
 }
 clonedElementPertanyaan.classList.add('chatBot');
 clonedElementJawaban.classList.add('chatUser');
}

/* MENGKLONING CHAT*/
const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);

const clonedTimeQuestion = clonedElementPertanyaan.querySelector('#timeQuestion');
const originalTimeQuestion = originalElementPertanyaan.querySelector('#timeQuestion');
const originalTimeAsk = originalElementJawaban.querySelector('#timeAsk');
const clonedTimeAsk = clonedElementJawaban.querySelector('#timeAsk');

const barier = document.querySelector('.barier');
const textMengetik = document.querySelector('.botStatus');

const containerLinear = document.querySelector('.container-linear');
const containerLove = document.querySelector('.container-love');

const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#textPertanyaan');
const originalTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');

let initSticker = 0;
let imgSticker = document.createElement('img');
imgSticker.setAttribute('class','imgSticker');

let initGuess = 0;
let imgPicture = document.createElement('img');
imgPicture.setAttribute('class','imgPicture');

const stickers = clonedContentPertanyaan.querySelector('.sticker-chat');
const guessPicture = clonedContentPertanyaan.querySelector('.guess-picture');
const clonedTimeSticker = stickers.querySelector('.time-sticker');
const clonedTimeGuess = stickers.querySelector('.time-guess');

guessPicture.appendChild(imgPicture);
stickers.appendChild(imgSticker);

stickers.style.display = "block";
guessPicture.style.display = "block";

function checkInput() {
 let jawaban = document.querySelector('.input-jawaban');
 let sendBtn = document.querySelector('.btn-bot');

 if (jawaban.value.length >= 2) {
  sendBtn.disabled = false;
 } else {
  sendBtn.disabled = true;
 }
}

let img = document.createElement('img');
img.src = 'boticon.webp';
document.getElementById('imgBox').appendChild(img);

function reactBot() {
 if (localStorage.getItem("theme") === "basic") {
  let img = document.createElement('img');
  img.src = 'xd.webp';
  document.getElementById('imgBox').appendChild(img);
  setTimeout(() => {
   let img = document.createElement('img');
   img.src = 'boticon.webp';
   document.getElementById('imgBox').appendChild(img);
  }, 1000);
 } else {
  img.src = 'xdBlue.webp';
  document.getElementById('imgBox').appendChild(img);
  setTimeout(() => {
   let img = document.createElement('img');
   img.src = 'fablue.webp';

  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
	}, 500)
		setTimeout(curang, 500);
});

let userSays = [];
let fullData = [];
let lengthFullData;

const botSay = (data) => {
 return [
  `Hi. namaku adalah Fabot, nama kamu ${fullName} ya?`, /*0*/
  `halo ${namaDepan} aku adalah chatJavaScript dasar`, /*1*/
  `kamu kan lahirnya tanggal ${ultah}, berarti umur kamu sekarang brp?`,/*2*/
  `owh sekarang umur kamu udh ${umurNow} tahun, berarti kamu udh kelas ${kelas} ya`, /*3*/
  `btw kamu`, /*4*/
  `hmm apa yaa, bingung mau ngomong apa lagi sama kamu`, /*5*/
  `dari pada bingung, gimana klo kita main game aja?`, /*6*/
  `nh gitu dong ${namaDepan}, aku kan masih pengen ngobrol sma kamu😇`, //7
  ``, /*8*/
  `${data?.siap}, siap yaa ${userSays[0]} klo gitu`, /*9*/
  `hmm aku rasa kaya nya kita sampe sini aja ya ${userSays[0]} main nya?`, /*10*/
  `makasih yaa ${userSays[0]}🥺 di tunggu ya next updatenya dari aku, nanti kita main bareng lagi😉`, /*11*/
 ]
};


const userSay = (data) => {
 return [
  `${data?.nama}`, /*0*/
  `${data?.nanyas}`, /*1*/
  `${data?.umurs}`, /*2*/
  `${data?.pacar}`, /*3*/
  `${data?.maaf}`, /*4*/
  `${data?.game}`, /*5*/
  `${data?.ok}`, /*6*/
  `${data?.siap}`, /*7*/
  `${data?.az}`, /*8*/
  `${data?.userSay}`, /*9*/
  `${data?.end}`, /*10*/
  ``, /*11*/
 ]
};

const kataKasar = [`kontol`, `memek`, `anjing`, `bangsat`, `ngentot`, `bajingan`, `coli`, `asu`, `komtol`, `anjg`, `ajg`, `tolol`, `bacot`, `bacod`, `bacots`, `bego`, `goblok`, `coly`, `desah`, `colmek`, `colmex`, `kontil`, `babi`, `anjying`, `ngewe`, `sange`, `ashu`, `tholol`, `fuck`, `jancok`, `bangsad`, `begok`, `badjingan`, `memex`, `kontols`, `kontolz`, `sangean`, `colli`, `colly`, `babik`, `gay`, `ngegay`, `bokep`, `bokeps`, `porno`, `xnxx`, `porn`, `lesbian`, `lesbi`, `pornhub`, `yandex`, `hentai`, `ngentots`, `ngecrot`, `ngecrot`, `nyepong`, `kntl`, `kontl`, `kntol`, `ngocok`, `ngocoks`, `cabul`, 'memeq', 'memew', 'tholol', 'begok', 'LGBTQ', 'lesbian', 'ngegay', 'gay', 'transgender', 'biseksual', 'sex', `kintil`];

const kataGamau = [`gak`, `engga`, `apasih`, `apasi`, `kepo`, `sok asik`, `ga boleh`, `lah lu siapa`, `masalah`, `gamau`, `lu siapa`, `boong`, `bodo amat`, `gak mau`, `ga mau`, `ga peduli`, `tapi boong`, `boong`, `gamau`, `maksa`, `kamu siapa`, `udahan`, `lah ngancem`, `marah`];

const kataNetral = [`farid`, `${namaDepan}`, `gpp`, `yaudah`, `boleh`, `gapapa`, `yauda`, `oke`, `baiklah`, `terserah`, `gmna`, `gimana`, `gmana`, `iya iya`, `iya dah iya`, `iya deh iya`];

const kataBatal = [`gajadi`, `engga jadi`, `ga jadi`, `udahan`, `gamau main`, `capek`];

const kataHeran = [`ko bisa tau`, `ko tau`, `tau sih`, `kok bisa tau`, `bisa tau`, `sebentar`];

const kataCurang = ['curang', 'licik', 'bodo', 'peduli', 'suka suka', 'terserah'];

const kataGame = ['hadiah', 'dapet', 'makasih', 'tebak', 'abis', `mau`, 'tantangan','challenge','ngerti', 'paham', 'maksudnya', 'gajadi'];

const kataPertanyaan = [
 `kasih tau`,`ngasih tau`,`dapet apa`,`buat apa`,`diapain`,`guna`, `jawab`];

const listKasar = kataKasar;

footerEmail.innerHTML = `Kirimkan email kepada developer.`;

containerLove.style.opacity = "0";
containerLove.style.display = "none";
contentPertanyaan.style.display = "none";
contentJawaban.style.display = "none";
firstContentPertanyaan.style.display = "none";

let init = 0;
let chatRepeatInit = 0;
let chatRepeats = false;
let jawabanBenar = false;
let chatRepeated = false;
let noRepeatChat = false;
let alreadySticker = false;
let chatValidation = false;
let chatRepeatInitIs = false;

//flag untuk validasi game

let isChattan = true;
let gameWinIs = false;
let guessGame = false;
let typingGame = false;
let guessGameIs = false;
let typingGameIs = false;

let isTantangan = false;
let botAnswerExecuted = false;

//flag untuk animasi bg

let isRainLove = false;
let isRainLinear = true;

function botStart(data) {
 init ++;
 sendBtn.disabled = true;
 lengthFullData = fullData.reduce((acc, element) => acc + element.length, 0);

 console.log(`masuk ke init `,init,`😎`);
 console.log("chatRepeatInit is :", chatRepeatInit);
 console.log("chatValidation is :", chatValidation);
 console.log("chatRepeated is :", chatRepeated);
 console.log("chatRepeats is :", chatRepeats);
 console.log("chatRepeatInitIs is :", chatRepeatInitIs);
 console.log("alreadySticker is :", alreadySticker);
 console.log("guessGame is :", guessGame);
 console.log("typingGame is :", typingGame);
 console.log(fullData, `ini adalah balasan chat dari ${namaDepan}`)
 console.log(lengthFullData, `huruf yang di ketikan ${namaDepan}`)
 
 jawabanValue = jawaban.value.toLowerCase();
 cekKata = jawaban.value.toLowerCase();

 let kalimat = jawabanValue;
 let angka = kalimat.match(/\d+/);
 let nilaiAngkaIs = false;
 let umurT = false;
 let umurM = false;
 let nilaiAngka;
 console.log("nilaiAngkaIs adalah :", nilaiAngkaIs)

 if (angka !== null) {
  nilaiAngkaIs = true;
  nilaiAngka = parseInt(angka[0]).toString();
  if (nilaiAngka < umurNow) {
   umurM = true;
  } else if (nilaiAngka > umurNow) {
   umurT = true;
  }
 } else {
  console.log(nilaiAngka, "Tidak ada angka dalam string ini.");
 }
 let umurTrue = umurNow -1;
 console.log("nilai angka adalah :", nilaiAngka)

 if (listKasar.some((kata) => cekKata.includes(kata))) {
  jawaban.style.color = "red";
  barier.style.display = "block";

  if (init > 1) {
   init = 0;
   textLoad();
   setTimeout(() => {
    textMengetik.innerHTML = "Online";

    setTimeout(() => {
     textLoad()}, 1500);
    clonedTextPertanyaan.innerHTML = "tolong ya kalo ngetik kata kata nya di jaga, walaupun aku cuma chat bot tapi aku tau kamu ngetik kata yang engga sepantasnya.";
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     setTimeout(() => {
      textMengetik.innerHTML = "Online"
     }, 1500);
     
     clonedTextPertanyaan.innerHTML = "lain kali klo ngetik di jaga kata katanya. ga baik tau😒";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      textMengetik.innerHTML = "Offline";
     }, 5500);
     
     setTimeout(() => {
      infoAlert.innerHTML = "Pesan dari system !";
      blurLayer.style.display = "block";
      myAlert.style.display = "block";
      myAlertText.innerHTML = 'bot males melanjutkan chatting dengan kamu tolong di jaga ketikan nya dan juga dia ingin me refresh<br>browsernya secara paksa';
      btnAlert.addEventListener('click', toxicAlert);
     }, 10000);
    }, 6000);
   }, 4000);
  } else if (init <= 1) {
   init = -1;
   setTimeout(() => {
    setTimeout(() => {
     textMengetik.innerHTML = "Offline"
    }, 700);
    infoAlert.innerHTML = "Tolong di jaga ketikan nya !";
    blurLayer.style.display = "block";
    myAlert.style.display = "block";
    myAlertText.innerHTML = 'bot mendeteksi kamu berkata kata yang tidak sepantasnya. tolong untuk berkata kata yang baik & sopan, <br>dan bot ingin merefresh website nya secara paksa';
    btnAlert.addEventListener('click', toxicAlert);
   }, 2000);
  }
 }

 startTime();
 clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
 clonedTimeAsk.innerHTML = timeAsk.innerHTML;
 clonedTimeSticker.innerHTML = timeSticker.innerHTML;

 barier.style.display = "block";
 originalPertanyaan.style.display = "none";

 if (init === 1) {
  console.log({ nama: jawaban.value });
  chatValue = userSay({ nama: jawaban.value })[0];
  userDelay({ nama: jawaban.value });
  init = 5;
  typingGame = true;
  typingGameIs = true;
  clonedTextJawaban.innerHTML = userSay({ nama: jawabanValue })[0];
  contentJawaban.style.display = "none";
  clonedElementJawaban.style.display = "block";
  footerEmail.innerHTML = `Berikan kritik & saranya ${userSays[0]}.`;
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (jawabanValue.includes(`${namaDepan}`) || jawabanValue.includes(`${namaBelakang}`)) {
    chatRepeatInit = 0;
    contentPertanyaan.style.display = "block";
    
    if (!chatRepeatInitIs) {
     clonedTextPertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = `salam kenal ya ${namaDepan}, gpp kan selama chat aku nanyain tentang kamu?`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     }, 1000);
    } else {
     chatRepeatInitIs = false;
     clonedTextPertanyaan.innerHTML = `dari tadi ke bisa ga si ${namaDepan}?!? btw kenalin aku adalah chat bot biasa, klo ngeselin salahin developer nya`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = `salam kenal ya ${namaDepan}, btw gapapa kan selama chat aku nanyain tentang kamu?`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    }
    
   } else {
    init = 0;
    chatRepeatInit++;
    if (chatRepeatInit === 1) {
     contentPertanyaan.style.display = "block";
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = "bener bukan itu nama kamu yang aku sebut tadi?";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (chatRepeatInit === 2) {
     contentPertanyaan.style.display = "block";
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = "coba dong sebut nama kamu biar aku bisa mastiin bener apa engga";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (chatRepeatInit === 3) {
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = `kamu gapunya nama ya? wkwk dasar ${namaDepan} aneh, tinggal nyebut nama sendiri aja susah`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (chatRepeatInit === 7) {
     chatRepeatInitIs = true;
     clonedTextPertanyaan.innerHTML = `emang nya enaq di diemin? wkwkwk<br>tinggal nyebut nama aja susah`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    } else if (chatRepeatInit >= 7) {
     /......./
    }
   }
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000);
 } else if (init === 2) {
  console.log({ nanyas: jawaban.value });
  chatValue = userSay({ nanyas: nilaiAngka })[1];
  fullData.push(chatValue);
  
  botDelay({ nanyas: nilaiAngka });
  clonedTextJawaban.innerHTML = userSay({ nanyas: jawabanValue })[1];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   originalTimeQuestion.innerHTML = timeQuestion.innerHTML;
   
   if (kataGamau.some((kata) => jawabanValue.includes(kata)) || kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
    init = 1;
    chatRepeatInit++;
    
    if (chatRepeatInit === 1) {
     clonedTextPertanyaan.innerHTML = `ko gitu, emng nya knapa ${namaDepan}?`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    } else if (chatRepeatInit === 2) {
     
     clonedTextPertanyaan.innerHTML = `ya tapi kan aku dibuat untuk nanyain hal tentang kamu`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      
      clonedTextPertanyaan.innerHTML = `jadi mau gimana lagi ${namaDepan}?, cuma jawab pertanyaan aku doang ko simpel`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (chatRepeatInit === 3) {
     
     if (kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
      
      clonedTextPertanyaan.innerHTML = `ya udah aku kan cuma pengen tau kamu aja`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else {
      clonedTextPertanyaan.innerHTML = `intinya aku gamau tau kamu harus jawab apa yang aku tanyain titik😠`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       
       clonedTextPertanyaan.innerHTML = `klo kamu tetep gamau, aku bakalan diem`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1000);
     }
    } else if (chatRepeatInit >= 4) {
     chatRepeatInitIs = true;
     alert("masuk ke chatRepeatInit >= 4, init ke 2");
    }
    
   } else {
    if (!chatRepeatInitIs) {
     chatRepeatInit++;
     if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
      init = 1;
      chatRepeatInit = 0;
      clonedTextPertanyaan.innerHTML = `yaudah ya berarti skrng udh di bolehin ni??`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else {
      chatRepeatInit = 0;
      genderValidation();
      setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `okee ${namaDepan} ${genderSay} 😇`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = botSay({ nanyas: jawabanValue })[2];
       
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1000);
      }, 1000);
     }
    } else {
     chatRepeatInit++;
     if (chatRepeatInit > 4 && kataNetral.some((kata) => jawabanValue.includes(kata))) {
      clonedTextPertanyaan.innerHTML = `nah gitu dong ${namaDepan}, aku kan cuma nanya doang ga gigit kamu🙄`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       chatRepeatInit = 0;
       clonedTextPertanyaan.innerHTML = botSay({
        nanyas: jawabanValue
       })[2];
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1000);
      
     } else if (chatRepeatInit >= 4) {
      init = 1;
      alert("masuk ke sudah chatRepeatInitIs, chatRepeatInit >= 4");
     }
    }
   }
  }, 1000);
 } else if (init === 3) {
  console.log({ umurs: jawabanValue });
  chatValue = userSay({ umurs: jawabanValue })[2];

  userDelay({ umurs: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ umurs: jawabanValue })[2];

  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   img.src = 'reactIdk.webp';
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
    alert("user bertanya mengapa bisa tau");
    init = 2;
    clonedTextPertanyaan.innerHTML = `sebenernya saat kamu login aku udah tau hal hal tentang kamu`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     clonedTextPertanyaan.innerHTML = `jadi jangan heran dan nanya nanya lagi ya ${namaDepan} 😇`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1000);
    
   } else {
    if (jawabanValue.includes(`${nilaiAngka}`)) {
      chatRepeatInit = 0;
      chatRepeated = false;
      alreadySticker = false;
     alert("masuk ke validasi kode saat user menyebut angka");
     
     if (jawabanValue.includes(`${umurNow}`) && nilaiAngka.length === 2) {
      
      if (!chatRepeatInitIs) {
       clonedTextPertanyaan.innerHTML = botSay({ umurs: jawabanValue })[3];
      
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      } else {
       clonedTextPertanyaan.innerHTML = `owh gitu ya umur kamu skrng ${umurNow} 😒`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }
      
     } else if (jawabanValue.includes(`${umurTrue}`) && nilaiAngka.length === 2) {
      
      let bulanUltah = ultah.split(' ')[1]
      
      if (!chatRepeatInitIs) {
       clonedTextPertanyaan.innerHTML = `owh skrng masi ${nilaiAngka} tahun ya, karna skrng blom bulan ${bulanUltah} jadi umur kamu blom ${umurNow} tahun`;
      
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      } else {
       clonedTextPertanyaan.innerHTML = `owh umur kamu skrng ${umurTrue},  nh gitu dong ${namaDepan} 😒`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }
      
     } else if (jawabanValue.includes(`${nilaiAngka}`) || umurT || umurM) {
      init = 2;
      
      if (nilaiAngka.length > 2) {
       alert("Umur Vampir");
       clonedTextPertanyaan.innerHTML = `buset seriusan umur kamu ${nilaiAngka} tahun?, lucu banget sih kamu ${namaDepan} 🙄`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      } else {
       alert("KAMU BOHONG YA?!?!");
       clonedTextPertanyaan.innerHTML = `srius dong kamu jangan bohong, umur kamu kan bukan ${nilaiAngka}`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }
     }
    } else {
     init = 2;
     alert("masuk ke validasi kode  saat user tidak menyebut angka");
     if (!chatRepeatInitIs) {
      if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
       
       chatRepeatInit++;
       if (chatRepeatInit === 1) {
        clonedTextPertanyaan.innerHTML = `sebut dong umur kamu berapa ${namaDepan}`;
       
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       } else if (chatRepeatInit === 2) {
        clonedTextPertanyaan.innerHTML = `kamu gimana si ${namaDepan}?`;
       
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `tadi kamu bilang dibolehin, sekarang knapa ga di bolehin??`;
       
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "sad.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        }, 1000);
       } else if (chatRepeatInit === 3) {
        clonedTextPertanyaan.innerHTML = `malesin ${namaDepan} ga nempatin omongan nya 😔`;
         
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       } else {
        if (!chatRepeated) {
         chatRepeated = true;
         clonedTextPertanyaan.innerHTML = `malesin nih ${namaDepan} 😞`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `yaudah mending aku diem aja.`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1000);
        } else {
         alert("bot tidak mengirimkan chat lagi karna chat sebelumnya");
        }
       }
      } else {
       if(chatRepeatInit >= 4 && !chatRepeated) {
        chatRepeatInit = 0;
       } else {
        chatRepeatInit++;
       }
       
       if (!chatRepeated) {
        if (chatRepeatInit === 1) {
         clonedTextPertanyaan.innerHTML = `iya kasi tau dong ${namaDepan}`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else if (chatRepeatInit === 2){
         clonedTextPertanyaan.innerHTML = `sebut dong umur kamu berapa, aku pengen tau`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else if (chatRepeatInit === 3){
         clonedTextPertanyaan.innerHTML = `aku kan pengen tau tentang kamu, masa gamau kasi tau`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        setTimeout(() => {
          if (!alreadySticker) {
           initSticker++;
           alreadySticker = true;
           imgSticker.src = "sad.webp";
           document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
          } else {
           alreadySticker = false;
          }
         }, 2500);
        } else if (chatRepeatInit === 4){
         clonedTextPertanyaan.innerHTML = `sekali lagi. skrng umur kamu berapa?`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else {
         chatRepeated = true;
         clonedTextPertanyaan.innerHTML = `sebut donggg ${namaDepan} 😤`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       } else {
        chatRepeatInitIs = true;
        clonedTextPertanyaan.innerHTML = `klo kamu ga ngasih tau. aku akan diem sampe kamu kasi tau`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
        setTimeout(() => {
         initSticker++;
         imgSticker.src = "badmood.webp";
         document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
        }, 2500);
       }
      }
     } else { //else ketika tidak sudah !chatRepeatInitIs
      alert("masuk ke else ketika bot sudah menanyakan pertanyaan");
     }
    }
   }
  }, 1000);
 } else if (init === 4) {
  console.log({ pacar: jawabanValue });
  chatValue = userSay({ pacar: jawabanValue })[3];
  
  img.src = 'boticon.webp';
  userDelay({ umurs: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ pacar: jawabanValue })[3];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   barier.style.display = "none";
   if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
    init = 3;
    clonedTextPertanyaan.innerHTML = `sebenernya saat kamu login aku udah tau hal hal tentang kamu`;
    alert("user bertanya mengapa bisa tau");
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     clonedTextPertanyaan.innerHTML = `jadi jangan heran dan nanya nanya lagi ya ${namaDepan} 😇`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1000);
    
   } else {
    if (!chatRepeatInitIs) {
     clonedTextPertanyaan.innerHTML = botSay({ pacar: jawabanValue })[4];
   
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    } else {
     init = 3;
     if (!chatRepeated) {
      chatRepeated = true;
      clonedTextPertanyaan.innerHTML = `kamu masih mau lanjut lagi ga nih chat nya? 😒`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else {
      chatRepeatInit++;
     
      if (!chatRepeats) {
       if (kataGamau.some((kata) => jawabanValue.includes(kata)) && chatRepeatInit >= 1) {
         
        if (!chatValidation) {
         chatValidation = true;
         clonedTextPertanyaan.innerHTML = `serius kamu gamau lanjutin chat nya? 🥺`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else {
         chatRepeats = true;
         clonedTextPertanyaan.innerHTML = `ok klo ${namaDepan} maunya itu`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       } else {//kata gamau && chatInit 1
        if (kataBatal.some((kata) => jawabanValue.includes(kata))) {
        
         chatRepeatInit = 0;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         chatRepeatInitIs = false;
         
         clonedTextPertanyaan.innerHTML = `ok kita lanjutin ya chat nya ${namaDepan}.`;
        
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else {
         if (chatRepeatInit === 1) {
          
          clonedTextPertanyaan.innerHTML = `yaudah aku lanjutin yaa, tapi kmu jangan kaya tadi lagi`;
        
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         } else if(chatRepeatInit === 2){
          clonedTextPertanyaan.innerHTML = `ok janji dulu 🤞`;
        
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (chatRepeatInit >= 3){
          
          if (jawabanValue.includes('janji')) {
           chatRepeats = false;
           chatRepeated = false;
           chatValidation = false;
           chatRepeatInitIs = false;
           
           clonedTextPertanyaan.innerHTML = `okey 🥳`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
            initSticker++;
            imgSticker.src = "horee.webp";
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
           }, 2500);
          } else {
           init = 3;
           chatRepeatInit = 2;
           clonedTextPertanyaan.innerHTML = `kamu blom janji ${namaDepan} 🥺`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          }
         }
        }
       }
      } else { // else chatRepeats
       if (!noRepeatChat) {
        noRepeatChat = true;
        clonedTextPertanyaan.innerHTML = `ok 😔`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
        setTimeout(() => {
         initSticker++;
         imgSticker.src = "clown.webp";
         document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
        }, 2500);
       } else {
        if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
         chatRepeatInit = 0;
         chatRepeats = false;
         noRepeatChat = false;
         
         clonedTextPertanyaan.innerHTML = `kamu mah malesin banget tau 😓`;
          
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "sadcorner.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
         
        } else {
         alert("bot tidak akan membalas sampai user mengucapkan kataNetral");
        }
       }
      }
     }
    }
   }
  }, 1000);
 } else if (init === 5) {
  console.log({ maaf: jawabanValue });
  chatValue = userSay({ maaf: jawabanValue })[4];
  
  userDelay({ maaf: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ maaf: jawabanValue })[4];

  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));

  textLoad();

  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (!chatRepeatInitIs) {
    if (!chatValidation) {
     init = 4;
     chatRepeatInit = 0;
     chatValidation = true;
     chatRepeatInitIs = true;
     clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[5];
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      initSticker++;
      imgSticker.src = "hmm.webp";
      document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
     }, 2500);
    } else {
     chatRepeatInit = 0;
     chatValidation = false;
     
     if (guessGame) {
      
      clonedTextPertanyaan.innerHTML = `ok, kamu jangan main curang ya liat google atau apa. karna aku bakalan tauu`;
    
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     } else if (typingGame) {
      
      clonedTextPertanyaan.innerHTML = `okk, ${namaDepan} jangan copy paste ya😁 karna aku pasti tau wkkw`;
    
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     } else if (isChattan) {
      
      clonedTextPertanyaan.innerHTML = `is Chatatan`;
      
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
    }
   } else {
    init = 4;
    chatRepeatInit++;
    if (chatRepeatInit === 1) {
     clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[6];
    
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    } else if (chatRepeatInit === 2) {
     clonedTextPertanyaan.innerHTML = `klo ${namaDepan} mau nya main game atau lanjut chatan aja?`;
    
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      clonedTextPertanyaan.innerHTML = `klo mau chatan bilang 'chatan' klo mau main game bilang 'game' `;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (chatRepeatInit === 3) {
     if (jawabanValue.includes(`chatan`)) {
      isChattan = true;
      clonedTextPertanyaan.innerHTML = `yaudah klo ${namaDepan} maunya lanjut chatan`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else if (jawabanValue.includes(`game`)) {
      clonedTextPertanyaan.innerHTML = `ok ${namaDepan}. btw aku ada 2 pilihan game`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = `ada game tebak gambar dan ada game cepet cepetan ngetik dari a - z`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `${namaDepan} mau main game yang mana yang ke 1 atau 2?`;
       
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1000);
      }, 1000);
     } else {
      chatRepeatInit = 2;
      clonedTextPertanyaan.innerHTML = `${namaDepan} mau yang mana? bilang aja`;
       
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
    } else if (chatRepeatInit === 4) {
     if ((jawabanValue.includes(`1`) && nilaiAngka.length === 1)) {
      guessGame = true;
      guessGameIs = true;
      chatRepeatInitIs = false;
      
      clonedTextPertanyaan.innerHTML = `ok skrng kita main tebak tebakan ya`;
       
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else if ((jawabanValue.includes(`2`) && nilaiAngka.length === 1)){
      typingGame = true;
      typingGameIs = true;
      chatRepeatInitIs = false;
      
      clonedTextPertanyaan.innerHTML = `ok skrng kita main game cepet cepetan ngetik dari a - z ya`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else {
      chatRepeatInit = 3;
      if (!chatRepeated || jawabanValue.includes(`${nilaiAngka}`)) {
       chatRepeated = true;
       clonedTextPertanyaan.innerHTML = `${namaDepan} yang bener dong kan gada pilihan yang ke ${nilaiAngka} 🙄`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
      } else {
       clonedTextPertanyaan.innerHTML = `yaudah kamu mau pilih yang mana ${namaDepan}?`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        initSticker++;
        imgSticker.src = "hmm.webp";
        document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
       }, 2500);
      }
     }
    } else {
     chatRepeatInitIs = false;
     alert("chatRepeatInitIs = false;")
    }
   }
  }, 1000);
 } else if (init === 6 && guessGameIs) {
  console.log({ game: jawabanValue });
  chatValue = userSay({ game: jawabanValue })[5];
  
  userDelay({ game: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ game: jawabanValue })[5];

  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (!chatRepeatInitIs) {
    if (!chatValidation) {
     init = 5;
     chatValidation = true;
     chatRepeatInitIs = true;
     
     clonedTextPertanyaan.innerHTML = `oke siapp ya ${namaDepan}`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    } else {// !chatValidation
     init = 5;
     if (noRepeatChat) {
      if (gameWinIs && kataGame((kata) => jawabanValue.some(kata))) {
      
       isRainLove = true;
       isRainLinear = false;
       clonedTextPertanyaan.innerHTML = `owh iya karna kamu udh bisa jawab semua ini hadiah buat kamu ❤️😁`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
      } else {
       guessGame = false;
       chatRepeats = false;
       chatRepeated = false;
       chatValidation = false;
       chatRepeatInitIs = true;
       
       clonedTextPertanyaan.innerHTML = `yaudah ${namaDepan} lanjut chattan aja? 😇`;
      
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }
     } else {
      if (!chatRepeats) {
       if (!jawabanBenar) {
        if (jawabanValue.includes('ulang')) {
         chatRepeated = false;
         chatRepeatInitIs = true;
         
         if (chatRepeatInit === 1) {
          chatRepeatInit = 0;
          clonedTextPertanyaan.innerHTML = `jangan pantang menyerah ya ${namaDepan} jawabnya😆`;
          
         } else if(chatRepeatInit === 2){
          chatRepeatInit = 1;
          clonedTextPertanyaan.innerHTML = `semangat ${namaDepan} aku tau kamu pasti bisa jawabnya😁`;
          
         } else if(chatRepeatInit === 3){
          chatRepeatInit = 2;
          clonedTextPertanyaan.innerHTML = `ayo ${namaDepan} aku tau kamu pasti bisa`;
         }
       
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else if (jawabanValue.includes('udahan')) {
         chatRepeats = true;
         clonedTextPertanyaan.innerHTML = `yhh ga seru ah ${namaDepan} ngajak udahan😒`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else {
         chatRepeats = true;
         clonedTextPertanyaan.innerHTML = `${namaDepan} kamu pilih mana lanjut main apa engga?`;
       
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       } else {
        chatRepeats = true;
        clonedTextPertanyaan.innerHTML = `${namaDepan} mau lanjut main lagi ga? aku masih ada tebak gambar lagi, mau ketik 'iya' gamau ketik 'gamau'`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }
      } else { //true chatRepeats
       if (!jawabanBenar) {
        noRepeatChat = true;
        clonedTextPertanyaan.innerHTML = `yaudah deh gpp klo gitu`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
       } else {
        if (jawabanValue.includes('iya')) {
         
         chatRepeated = false;
         chatValidation = true;
         chatRepeatInitIs = true;
         
         if (chatRepeatInit === 1) {
          chatRepeatInit = 1;
          chatRepeats = false;
          clonedTextPertanyaan.innerHTML = `okkey ${namaDepan} tebak gambar selanjutnya ya 😁`;
         
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }else if(chatRepeatInit === 2) {
          chatRepeatInit = 2;
          chatRepeats = false;
          clonedTextPertanyaan.innerHTML = `kamu hebat ${namaDepan} bisa jawab tebak gambar tadi, ok next yaa`;
         
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }else if(chatRepeatInit === 3) {
          chatRepeatInit = 3;
          chatRepeats = false;
          clonedTextPertanyaan.innerHTML = `pinter banget si kamu ${namaDepan}, bikin aku kagum aja 🤭`;
         
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        } else if (jawabanValue.includes('engga')) {
         guessGame = false;
         chatRepeatInit = 0;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         chatRepeatInitIs = true;
         
         clonedTextPertanyaan.innerHTML = `okk klo ${namaDepan} udh gamau😉`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else {
         clonedTextPertanyaan.innerHTML = `yang jelas ${namaDepan} mau gmna?`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       }
      }
     }
    }
   } else {//!chatRepeatInitIs || main lg
    init = 5;
    chatRepeatInit++;
    if (guessGame) {
     if (chatRepeatInit >= 1) {
      if (!chatRepeated) {
       if (!gameWinIs) {
        if (chatRepeatInit === 1) {
         initGuess++;
         chatRepeatInit = 0;
         chatRepeated = true;
         imgPicture.src = 'tekananbatin.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `hayo hayoo tebak gambar apa di atas?😆`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else if (chatRepeatInit === 2){
         initGuess++;
         chatRepeatInit = 1;
         chatRepeated = true;
         imgPicture.src = 'pulangsekolah.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `hayo tebak gambar diatas??, gampang ko jawaban nya 😁`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else if (chatRepeatInit === 3){
         initGuess++;
         chatRepeatInit = 2;
         chatRepeated = true;
         imgPicture.src ='lukadalam.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `tebak gambar ini susah banget tau, aku aja sampe gatau🤔`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        }
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `ingett yaa ${namaDepan} ${genderSay} baik hati dan suka ${hobby3}, jangan curangg😼`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 2500);
       } else {
        noRepeatChat = true;
        chatValidation = true;
        chatRepeatInitIs = false;
        
        clonedTextPertanyaan.innerHTML = `whh selamat ya ${namaDepan} kamu keren bisa jawab semua tebak gambarnya🥶`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }
      } else {//!chatRepeated
       if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
        chatRepeatInitIs = false;
        noRepeatChat = true;
        
        clonedTextPertanyaan.innerHTML = `yhh yaudah deh klo kamu ngajak udahan main nya🥺`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
       } else {
        if (!gameWinIs) {
         if (chatRepeatInit === 1 && jawabanValue.includes('tekanan batin')) {
          
          chatRepeats = false;
          jawabanBenar = true;
          chatRepeatInitIs = false;
          clonedTextPertanyaan.innerHTML = `whh jawaban kamu benar ${namaDepan} 😁`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (chatRepeatInit === 2 && jawabanValue.includes('pulang sekolah')) {
          
          chatRepeats = false;
          jawabanBenar = true;
          chatRepeatInitIs = false;
          clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${namaDepan} jawaban kamu bener pulang sekolah😅`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (chatRepeatInit === 3 && jawabanValue.includes('luka dalam')) {
          
          gameWinIs = true;
          chatRepeats = false;
          jawabanBenar = true;
          chatRepeatInitIs = false;
          clonedTextPertanyaan.innerHTML = `pinter banget sii kamu ${namaDepan} jawaban kamu benar🥳`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else {
          if (chatRepeatInit >= 1 && kataCurang.some((kata) => jawabanValue.includes(kata))){
          	chatRepeated = true;
           chatRepeatInitIs = true;
           
           if (chatRepeatInit === 1) {
            chatRepeatInit = 0;
           } else if (chatRepeatInit === 2) {
            chatRepeatInit = 1;
           } else if (chatRepeatInit === 3) {
            chatRepeatInit = 2;
           }
           
           clonedTextPertanyaan.innerHTML = `ya klo kamu main curang aku bakalan tau, jadi percyuma percyumaaa😝`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
           	clonedTextPertanyaan.innerHTML = `yaudah coba tebak gambar apa diatas🤪`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1000);
          } else {
           chatRepeats = false;
           jawabanBenar = false;
           chatRepeatInitIs = false;
           clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan} jawaban kamu salah`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
            clonedTextPertanyaan.innerHTML = `jika ingin menjawab ulang ketikan 'ulang' tidak ingin melanjutkan ketikan 'udahan'`;
            
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1000);
          }
         }
        } else {
         guessGame = false;
         alert("game selesai")
        }
       }
      }
     }
    } else if (!guessGame) {
     if (!chatValidation) {
      chatRepeatInit = 0;
      chatValidation = true;
      
      if (gameWinIs) {
       clonedTextPertanyaan.innerHTML = `mau kan lanjut chatan atau main game yang lain?`;
      } else {
       clonedTextPertanyaan.innerHTML = `yaudah klo kamu pilih udahan main nya, kita lanjut chtan ya`;
      }
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else {
      if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
       
       if (chatRepeatInit === 1) {
        clonedTextPertanyaan.innerHTML = `ko gamau lanjut chatan juga?, aku kan blom selsai ngobrolnya`;
       
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       } else if (chatRepeatInit === 2) {
        clonedTextPertanyaan.innerHTML = `klo ${namaDepan} tetep gamau aku bakalan diem selamanya😠`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       } else if (chatRepeatInit >= 3) {
        if (!chatRepeated) {
         chatRepeated = true;
         chatRepeats = false;
         clonedTextPertanyaan.innerHTML = `kali ini aku serius. klo kamu tetep gamau aku akan diem`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else {
         alert("masuk ke validasi bot tidak mengirim chat lagi")
        }
       }
      } else {
       if (gameWinIs) {
        if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
        
         init = 6;
         guessGame = false;
         guessGameIs = false;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         chatRepeatInitIs = false;
         
         clonedTextPertanyaan.innerHTML = `ok kamu mau pilih main game apa abis ini?`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else {
         init = 6;
         guessGame = false;
         guessGameIs = false;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         chatRepeatInitIs = false;
         
         if (jawabanValue.includes(`main`, `game`, `lanjut`)) {
          clonedTextPertanyaan.innerHTML = `ok main game lagi nih yaa`;
         } else {
          clonedTextPertanyaan.innerHTML = `ok klo begitu, kita lanjut chat aja ya😇`;
         }
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       } else {//!gameWinIs
        if (!chatRepeats) {
         if (chatRepeated) {
          if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
           
           chatRepeats = true;
           chatRepeated = false;
           chatValidation = true;
           chatRepeatInitIs = true;
           
           clonedTextPertanyaan.innerHTML = `makanya ${namaDepan} jangan  begitu, aku kan masi pengen ngobrol`;
          
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
          } else {
           alert("bot tidk akan menjawab sampai user mengatakan kata netral")
          }
         } else {
          chatRepeats = true;
          clonedTextPertanyaan.innerHTML = `okeh ${namaDepan} lanjut chat ya😇`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        } else {
         init = 6;
         guessGame = false;
         guessGameIs = false;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         chatRepeatInitIs = false;
         
         clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[7];
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       }
      }
     }
    } else {
     alert("wahhh lu ngecit ya? sampe bisa ga milih opsi😠😠")
    }
   }
  }, 1000);
 } else if (init === 6 && typingGameIs) {
  console.log({ ok: jawabanValue });
  chatValue = userSay({ ok: jawabanValue })[6];
  
  userDelay({ ok: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (!chatRepeatInitIs) {
   	init = 5;
   	chatRepeatInit++
    if (!chatValidation) {
     if (chatRepeatInit === 1) {
      if (!alreadySticker) {
      	alreadySticker = true;
       clonedTextPertanyaan.innerHTML = `oke btw ${namaDepan} main nya mau ada tantangan ga klo kalah?, ngerti kan maksud aku`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
		     setTimeout(() => {
		      clonedTextPertanyaan.innerHTML = `klo engga ngerti bilang aja`;
		      
		      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
		     }, 1000);
      
      } else {
		     setTimeout(() => {
		     	chatRepeatInit = 2;
		      clonedTextPertanyaan.innerHTML = `klo kamu mau ada tantangan nya bilang 'iya', engga bilang 'gamau'`;
		      
		      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
	      setTimeout(() => {
	       initSticker++;
	       imgSticker.src = "hmm.webp";
	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
	       }, 2500);
		     }, 1000);
      }
      
     } else if (chatRepeatInit === 2) {
     	if (kataGame.some((kata) => jawabanValue.includes(kata))) {
     		chatRepeatInit = 0;
     		
       clonedTextPertanyaan.innerHTML = `gini aku jelasin deh ${namaDepan}, misal kamu kalah nh nanti aku kasih kamu bbrp opsi tantangan yang bisa kamu pilih buat kamu`;
     		
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `begitu juga klo aku kalah, nnti kamu bisa kasi aku tantangan di opsi yang ada`;
       	
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1000);
     	} else {
     		clonedTextPertanyaan.innerHTML = `klo kamu mau ada tantangan nya bilang 'iya', engga bilang 'gamau' 😇`;
     		
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     	}
     	
     } else if (chatRepeatInit === 3) {
     	if (jawabanValue.includes('iya')) {
     		
     		isTantangan = true;
     		clonedTextPertanyaan.innerHTML = `ok ya ini adalah list tantangan klo ${namaDepan} kalah	:<br><br>1).	${namaDepan} harus ngetik 200 huruf tanpa copy paste, harus di ketik.<br><br>2). ngetik 1 sampai 30 contoh 1 2 3 dan seterusnya.<br><br>3). ketikan 25 kata tentang aku.`;
     		
     	} else if (jawabanValue.includes('gamau')) {
     		clonedTextPertanyaan.innerHTML = `hmmm ${namaDepan} takut kalah kh?😏 yaudah klo gitu kita main tanpa pake tantangan.`;
     	} else {
     	 chatRepeatInit = 2;
     		clonedTextPertanyaan.innerHTML = `okk klo gitu kita main tanpa tantangan ya🙃`;
     	}
     	
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else if (chatRepeatInit >= 4) {
     	chatRepeatInit = 0;
     	chatValidation = true;
     	if (kataGame.some((kata) => jawabanValue.includes(kata))) {
    	 	isTantangan = true;
     		clonedTextPertanyaan.innerHTML = `ok aku pikir kamu takut main ada tantangan nya😏`;
     	} else {
     	 if (isTantangan) {
     		clonedTextPertanyaan.innerHTML = `mau kan ${namaDepan}?, klo kamu berubah pikiran gajadi juga gpp`;
     	 } else {
     		clonedTextPertanyaan.innerHTML = `ok ${namaDepan}, lain kali pake tantangan ya biar seru😁`;
     	 }
     	}
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
    } else {
     alert("masuk ke validasi true chatValidation")
     if (!chatRepeated) {
      chatRepeated = true;
      chatRepeatInitIs = true;
     	clonedTextPertanyaan.innerHTML = `okk siap ya ${namaDepan} dalam hitungan 3 kita cepet cepetan`;
    	
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else {
     	if (isTantangan) {
     	 if (!chatRepeats) {
     	 	if (!alreadySticker) {
     	 	 alreadySticker = true;
     	  	clonedTextPertanyaan.innerHTML = `ayo di pilih ${namaDepan}	:<br><br>1).	${namaDepan} harus ngetik 200 huruf tanpa copy paste. harus di ketik<br><br>2). ngetik 1 sampai 30 contoh 1 2 3 dan seterusnya.<br><br>3). buatin cerita dongeng minimal terdiri dari 25 kata`;
     	  	
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     	  	} else {
     	 	  if (nilaiAngkaIs && jawabanValue == "1") {
     	 	   
     	 	  } else if (nilaiAngkaIs && jawabanValue == "2") {
     	 	   
     	 	  } else if (nilaiAngkaIs && jawabanValue == "3") {
     	 	   
     	 	  } else {
     	 	   alert("angka pililhan tidak match 1 2 ataupun 3")
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     	 	 }
     	 	}
     	 } else {
       	if (chatRepeatInit === 1) {
      	  
       	} else {
       	 
       	}
     	 }
     	} else {// ketika user tidak ingin tantangan
     		
     	}
     }
    }
   } else {
   	init = 5;
    if (!chatRepeats) {
     chatRepeats = true;
     chatRepeatInit = 0;
     
     clonedTextPertanyaan.innerHTML = `sebelum main inget ya ${namaDepan} jangan main copy paste. karna itu curang😇`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    } else {
     chatRepeatInit++;
     if (chatRepeatInit === 1) {
    		clonedTextPertanyaan.innerHTML = `okeh, siappp ya`;
    		
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
    		setTimeout(() => {
     		clonedTextPertanyaan.innerHTML = `satuuuuu`;
    			
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
     		setTimeout(() => {
      		clonedTextPertanyaan.innerHTML = `duaaaa`;
     			
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
	     		setTimeout(() => {
	     		 barier.style.display = "none";
	      		clonedTextPertanyaan.innerHTML = `tiggaaaa`;
	     			
	        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
	        
	        function jawabanBot() {
          botAnswerExecuted = true;
          textMengetik.innerHTML = "Online"
          clonedTextPertanyaan.innerHTML = "abcdefghijklmnopqrstuvwxyz";
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
         setTimeout(jawabanBot, 6900);
	     		}, 2500);
     		}, 3000);
    		}, 2500);
    	} else if (chatRepeatInit === 2) {
    		if (!botAnswerExecuted && jawabanValue === 'abcdefghijklmnopqrstuvwxyz') {
    	 alert("masuk ke chatRepeatInit 2 dan tidak botAnswerExecuted")
     		function userFirst() {
				    setTimeout(() => {
				     
				     clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${namaDepan} bisa ngalahin aku🥳`;
				     
				     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
				     
				     setTimeout(() => {
				      isRainLove = true;
				      isRainLinear = false;
				      JawabanValue = jawaban.value;
				      barier.style.display = "none";
				      textMengetik.innerHTML = "Online";
				      clonedTextPertanyaan.innerHTML = "karna kamu bisa ngalahin aku, ini buat kamu ❤️";
				      
				      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
				     }, 4000);
				    }, 4000);
				   }
		    setTimeout(userFirst, 250);
    		} else {
   			function botFirst() {
			    JawabanValue = jawaban.value;
			    
			    if (chatRepeatInit === 2 && jawabanValue !== "abcdefghijklmnopqrstuvwxyz") {
         clonedTextPertanyaan.innerHTML = `lucu banget sih kamu ${namaDepan} ngetik aja ga bene🤭`;
       	} else {
			      clonedTextPertanyaan.innerHTML = "wleee😝 aku duluan, kamuu kalah yahahaha lucu banget sih";
       	}
			     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        	
			    setTimeout(() => {
			     barier.style.display = "none";
			     textMengetik.innerHTML = "Online";
			     clonedTextPertanyaan.innerHTML = `kalo ${userSays[0]} mau mencoba lagi. ketik 'coba lagi'`;
			     
			     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
			     }, 9500);
			    }
		     setTimeout(botFirst, 4000);
    		}
    	} else {
      chatRepeatInit = 0;
    	 if (botAnswerExecuted) {
    	  if(jawabanValue.includes('coba lagi')){
        chatRepeatInitIs = true;
        botAnswerExecuted = false;
        clonedTextPertanyaan.innerHTML = `ok klo kamu masi mau coba kalahin aku😏`
     	 } else {
    	   chatRepeats = false;
     	  chatValidation = true;
        alreadySticker = false;
        chatRepeatInitIs = false;
        clonedTextPertanyaan.innerHTML = `ok karna ${namaDepan} kalah berarti kamu harus lakuin 1 opsi tantangan😂`;
    	  }
    	 } else {
       clonedTextPertanyaan.innerHTML = `yhh ga seru klo ${namaDepan} menang`;
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = `karna aku kalah kamu bisa kasih aku 1 opsi tantangan buat aku`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
	       initSticker++;
	       imgSticker.src = "sadcorner.webp";
	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
	       }, 2500);
       }, 1000);
    	 }
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
   	}
   }
  }, 1000);
  
 } else if (init === 7) {
  console.log({ ok: jawabanValue });
  chatValue =userSay({ ok: jawabanValue })[6];
  
  userDelay({ ok: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (gameWinIs) {
    
   } else {
    
   }
   
   clonedTextPertanyaan.innerHTML = botSay()[8];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  }, 1000);
  
 } else if (init === 8) {
  console.log({ siap: jawabanValue }, `siap siappp`)
  chatValue = userSay({  siap: jawabanValue })[7];

  textLoad();
  userDelay({ siap: jawabanValue });

  if (!chatRepeated) {
   clonedTextJawaban.innerHTML = userSay({ siap: jawabanValue })[7];

   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  }

  if (chatRepeated) {

   setTimeout(() => {
    clonedTextPertanyaan.innerHTML = `okk siap siap yaa ${userSays[0]}`;

    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     
     containerLinear.style.opacity = "1";
     containerLinear.style.transition = "1s";
     
     containerLove.style.opacity = "0";
     containerLove.style.transition = "1s";
    }, 1000);
   }, 2000);
  } else {
   setTimeout(() => {
    clonedTextPertanyaan.innerHTML = botSay({ siap: jawabanValue })[9];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 1000);
  }

  setTimeout(() => {
   textLoad();
   clonedTextPertanyaan.innerHTML = "satuuuu";

   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   
   setTimeout(() => {
    barier.style.display = "none";
    clonedTextPertanyaan.innerHTML = "duuaaaaa";
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     
     textLoad();
     botAnswerExecuted = false;
     clonedTextPertanyaan.innerHTML = "tiggaaaaaa";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     
     
    }, 1500);
   }, 2000);
  }, 3000);
 } else if (init === 9 && jawabanValue.toLowerCase() === "abcdefghijklmnopqrstuvwxyz") {
  console.log({ az: jawabanValue });
  chatValue = userSay({ az: jawabanValue })[8];

  userDelay({ az: jawabanValue });
  textLoad();
  
  clonedTextJawaban.innerHTML = userSay({
   az: jawabanValue
  })[8];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  if (!botAnswerExecuted) {
   console.log('user menjawab lebih cepat')
   function userFirst() {
    setTimeout(() => {
     
     clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${userSays[0]} bisa ngalahin aku🥳`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      
      JawabanValue = jawaban.value;
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      clonedTextPertanyaan.innerHTML = "karna kamu bisa ngalahin aku, ini buat kamu ❤️";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       containerLinear.style.opacity = "0";
       containerLinear.style.transition = "1s";
       
       containerLove.style.opacity = "1";
       containerLove.style.transition = "1s";
      }, 2000);
     }, 4000);
    }, 4000);
   }
   
   setTimeout(userFirst, 0);
  } else {
   textLoad();
   function botFirst() {
    JawabanValue = jawaban.value;
    
    clonedTextPertanyaan.innerHTML = "wleee😝 aku duluan, kamuu kalah yahahaha lucu banget sih";
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     clonedTextPertanyaan.innerHTML = `kalo ${userSays[0]} mau mencoba lagi. ketik coba lagi`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 9500);
   };
   setTimeout(botFirst, 2000);
   
   if (!chatRepeated) {
    textLoad();
    setTimeout(() => {
     
     textLoad();
     JawabanValue = jawaban.value;
     clonedTextPertanyaan.innerHTML = `yhhh maaf yaa ${userSays[0]}🥺 walaupun jawaban kamu bener tapi aku dluan yang paling cepet`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      
      clonedTextPertanyaan.innerHTML = `tapi karna kamu udah jawab bener gada yang salah. ini buat kamu ❤️`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       
       barier.style.display = "none";
       textMengetik.innerHTML = "Online";
       
       containerLinear.style.opacity = "0";
       containerLinear.style.transition = "1s";
       
       containerLove.style.opacity = "1";
       containerLove.style.transition = "1s";
      }, 2000);
     }, 4500);
    }, 5000);
   } else {
    console.log('user sudah menjawab benar dan tidak ingin mencoba lagi');
   }
  }
 } /* else if init 9 end kurawa*/
 
 else if (init === 9 && jawabanValue.toLowerCase() !== "abcdefghijklmnopqrstuvwxyz") {
  console.log('jawaban nya kurang bener')
  chatValue = userSay({ az: jawabanValue })[8];
  
  userDelay({ az: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ az: jawabanValue })[8];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  function botFirst() {
   JawabanValue = jawaban.value
   textMengetik.innerHTML = "Online";
   
   clonedTextPertanyaan.innerHTML = `wleee😝 aku duluan, kamu kalah yahhaha lucu banget sihh kamu ${userSays[0]} ngetik aja gak bener🤪`;
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  };
  setTimeout(botFirst, 2000);

  if (!chatRepeated) {
   setTimeout(() => {
    textLoad();
    JawabanValue = jawaban.value;

    clonedTextPertanyaan.innerHTML = `maaf yaa ${userSays[0]} jawaban kamu ${userSays[7]} kurang bener`;

    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     clonedTextPertanyaan.innerHTML = `maaf ya ${userSays[0]} kamu kalah, klo mau ketik coba lagi, untuk mencoba kembali`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 7000);
   }, 10000);
  } /*if kurawa end*/
  
  else {
   setTimeout(() => {
    
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    clonedTextPertanyaan.innerHTML = `maaf yaa ${userSays[0]} cepetan aku, klo mau ketik coba lagi`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 7000);
  }
 } else if (init === 10) {
  console.log({ userSay: jawabanValue });
  chatValue = userSay({ userSay: jawabanValue })[9];
  
  userDelay({
   userSay: JawabanValue
  });
  if (init === 10 && jawabanValue.toLowerCase() === "coba lagi") {
   
   chatRepeated = true;
   clonedTextJawaban.innerHTML = userSay({
    userSay: jawabanValue
   })[9];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   init = 7;
   
   botStart();
  } else {
   console.log('user tidak mau coba lagi')
   
   clonedTextJawaban.innerHTML = userSay({
    userSay: jawabanValue
   })[9];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    clonedTextPertanyaan.innerHTML = botSay({ userSay: jawabanValue })[10];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     textLoad();
     
     clonedTextPertanyaan.innerHTML = `makasih yaa ${userSays[0]} udah main bareng sama aku😇, asik juga ya main sama kamu wksk`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      
      clonedTextPertanyaan.innerHTML = `btw nanti kapan kapan kita ${userSays[1]} bareng yaa klo aku bisa :)`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 4000);
    }, 8000);
   }, 4000);
  }
 } else if (init === 11) {
  console.log({ end: jawabanValue });
  chatValue = userSay({ end: jawabanValue })[10];
  
  userDelay({ end: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ end: jawabanValue })[10];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
   statusDeveloper.innerHTML = "Online";
   setTimeout(() => {
    statusDeveloper.innerHTML = "Offline";
    statusDeveloper.innerHTML = "Do Not Disturb";
   }, 2000);
   
   clonedTextPertanyaan.innerHTML = botSay({ end: jawabanValue })[11];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  }, 4000);
 }
 if (initSticker >= 1 || initGuess >= 1){
  console.log("sticker bertambah :", initSticker, "dan tebak gambar :", initGuess);
 }
 
 if (isRainLinear) {
  containerLinear.style.opacity = "1";
 } else {
  containerLinear.style.opacity = "0";
 }
 
 if (isRainLove) {
  containerLove.style.opacity = "1";
 } else {
  containerLove.style.opacity = "0";
 }
}/*kurawa end botStart*/

function botDelay(pertanyaanBot) {
 textPertanyaan.innerHTML = botSay(pertanyaanBot)[init];
 jawaban.value = "";
}

function userDelay(jawabanUser) {
 userSays.push(jawaban.value);
 fullData.push(chatValue);
 
 textJawaban.innerHTML = userSay(jawabanUser)[init];
 
 jawaban.value = "";
}

const textLoad = () => {
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik";
 }, [0]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik.";
 }, [1000]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik..";
 }, [1800]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik...";
 }, [2600]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik....";
 }, [3400]);
}
/*
if (localStorage.getItem("theme") === "basic" || theme === "basic") {
   userStatus.classList.add('statusUser');
   userStatus.classList.remove('userStatus');
  }
if (localStorage.getItem("theme") === "blue" || theme === "blue") {
   userStatus.classList.add('statusUser');
  }*/


const statusUser = () => {
 statusDeveloper.innerHTML = "Online";
 setTimeout(() => {
  statusDeveloper.innerHTML = "Do not disturb";
  setTimeout(() => {
   statusDeveloper.innerHTML = "Online";
  }, 10000);
 }, 10000);
}

statusUser();
setInterval(statusUser, 20000);

/*kode validasi JAM*/

function startTime() {
 let today = new Date();
 let h = today.getHours();
 let m = today.getMinutes();
 let s = today.getSeconds();
 let d = today.getDate();
 m = checkTime(m);
 s = checkTime(s);
 h = checkTime(h);
 d = checkTime(d);
 timeAsk.innerHTML = `${h}.${m}`;
 timeQuestion.innerHTML = `${h}.${m}`;
 timeSticker.innerHTML = `${dayNames[dayIndex]} | ${d} | ${h}.${m}`;
}

function startTimeHome() {
 let today = new Date();
 let h = today.getHours();
 let m = today.getMinutes();
 let s = today.getSeconds();
 m = checkTime(m);
 s = checkTime(s);
 h = checkTime(h);
 timeHome.innerHTML = `${h}.${m}`;
 let t = setTimeout(startTimeHome, 1000);
}

function checkTime(i) {
 if (i < 10) {
  i = "0" + i;
 }
 return i;
}

window.onload = startTime();
window.onload = startTimeHome();

/*JAVASCRIPT CODE BACKGROUND ANIMATION*/

function hujanLinear() {
 let amount = 10;
 let containerLinear = document.querySelector('.container-linear');
 let i = 0;
 while (i < amount) {
  let drop = document.createElement('i');

  let size = Math.random() * 4;
  let posX = Math.floor(Math.random() * window.innerWidth);
  let delay = Math.random() * -150;
  let duration = Math.random() * 30;

  drop.style.width = 2 + size +'px';
  drop.style.left = posX + 'px';
  drop.style.animationDelay = delay+'s';
  drop.style.animationDuration = 25 + duration + 's';
  containerLinear.appendChild(drop);
  i ++;
 }
}

hujanLinear();

function rainLove() {
 let amount = 15;
 let containerLove = document.querySelector('.container-love');
 let i = 0;
 while (i < amount) {
  let dropLove = document.createElement('i');
  dropLove.classList.add('fas');
  dropLove.classList.add('fa-heart');

  let sizeLove = Math.random() * 16;
  let posXLove = Math.floor(Math.random() * 100);
  let delayLove = Math.random() * -115;
  let durationLove = Math.random() * 30;

  dropLove.style.fontSize = 13 + sizeLove + 'px';
  dropLove.style.left = posXLove + '%';
  dropLove.style.animationDelay = delayLove + 's';
  dropLove.style.animationDuration = 25 + durationLove + 's';
  containerLove.appendChild(dropLove);
  i ++;
 }
}

rainLove();

let linearClr1 = getComputedStyle(document.querySelector('.container-linear i:nth-child(2n+1)')).getPropertyValue('background');

let linearClr2 = getComputedStyle(document.querySelector('.container-linear i:nth-child(2n+2)')).getPropertyValue('background');

const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

let firstOpenWeb = localStorage.getItem("automaticTheme");
let openedTheme = false;

function validationTheme() {

 if (firstOpenWeb === "automaticTheme") {
  /***/
 } else {
  console.log("peryama kali membuka web dengan tema yang automatis");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
   console.log('kamu masuk ke theme default dari website ini');
   localStorage.setItem("automaticTheme", "automaticTheme");
   localStorage.setItem("theme", "basic")

  } else {
   localStorage.setItem("automaticTheme", "automaticTheme")
   localStorage.setItem("theme", "blue");
   let img = document.createElement('img');
   img.src = 'fablue.webp';
   document.getElementById('imgBox').appendChild(img);
   fablue.innerHTML = "Fablue Bot";
   containerLinear.style.opacity = "0";
   /*containerHome.style.backgroundImage = "url('background-dino-light.webp')";*/

   profileSection.forEach(function(profileSection) {
    profileSection.classList.add('profileBg');
   });
   boxHobby.forEach(function(boxHobby) {
    boxHobby.classList.add('boxHobbyClr');
   });
   blueBg.forEach(function(blueBg) {
    blueBg.classList.add('blueBg');
   });
   cardsColor.forEach(function(desc) {
    desc.classList.add('cardsColorBg');
   });
   textWhite.forEach(function(txt) {
    txt.classList.add('textWhite');
   });
   rowFav.forEach(function(rows) {
    rows.classList.add('rowBg');
   });
   cardsColor.forEach(function(desc) {
    desc.classList.add('cards-color');
   });
   arrow.forEach(function(arrows) {
    arrows.classList.add('arrowBg');
   });
   desk.forEach(function(descrip) {
    descrip.classList.add('descBg');
   });
   descText.forEach(function(desctexts) {
    desctexts.classList.add('textBg');
   });
   wrapper.forEach(function(wrap) {
    wrap.classList.add('wrapperBg');
   });
   bio.forEach(function(biotxt) {
    biotxt.classList.add('bioClr');
   });
   favItem.forEach(function(favItems) {
    favItems.classList.add('favItems');
   });
   myButton.forEach(function(myButtons) {
    myButtons.classList.add('myButtonBg');
   });
   icon.forEach(function(icons) {
    icons.classList.add('icons-koleksi');
   });
   myDescription.forEach(function(myDescriptionBg) {
    myDescriptionBg.classList.add('myDescriptionBg');
   });
   /*).forEach(function(inputEdits) {
    inputEdits.classList.add('inputEditable');
   });*/
   containerId.forEach(function(container) {
    container.classList.add('containerBg');
   });
   input.forEach(function(inputBg) {
    inputBg.classList.add('inputBg');
   });
   myKoleksi.forEach(function(myKoleksis) {
    myKoleksis.classList.add('myKoleksiClr');
   });
   footers.forEach(function(footer) {
    footer.classList.add('footers');
   });
   mainIcon.forEach(function(mainIcons) {
    mainIcons.classList.add('menuIcon');
   });
   imgProfile.forEach(function(imgProfile) {
    imgProfile.classList.add('brderProf');
   });
   userStatus.forEach(function(userStatus) {
    userStatus.classList.add('userStatus');
   });
   nameUser.forEach(function(nameUser) {
    nameUser.classList.add('nameUsers');
   });


   html.style.backgroundColor = "#d1d1d1";
   blueBg[1].classList.add('blueBg2');
   menuSidebar.classList.add('sidebarClr');
   menu.classList.add('menuBg');
   arrowA.classList.add('arrowAClr');
   arrowAsk.classList.add('arrowAskClr');
   arrowQ.classList.add('arrowQClr');
   arrowQuest.classList.add('arrowQClr');
   chatBot.classList.add('chatBot');
   clonedElementJawaban.classList.add('chatUser');
   clonedElementPertanyaan.classList.add('chatBot');
   infoAlert.classList.add('colorAlert');
   imgBox.classList.add('borderBg');
   chatUser.classList.add('chatUser');
   about.classList.add('aboutBg');
   wrapInput.classList.add('footerBg');
   arrowButon.classList.add('menuIcon');
   nemBots.classList.add('nameBotClr');
   botStat.classList.add('botStatClr');
   header.classList.add('headerBg');
  }
 }

}
setTimeout(validationTheme, 700);
/*
 putih oren oren, putih ijo biru, putih biru ijo, putih coklat coklat

 const spotifyUri = 'https://spotify.link/4eMIG4pJsDb';
 
Buka aplikasi Spotify
window.location.href = spotifyUri;*/