const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes } = require("firebase/storage");
const fs = require("fs");

// Firebaseのプロジェクト設定
const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// アップロードするPNGファイルのパス
const filePath = "back.png";

// ファイルを読み込む
const fileData = fs.readFileSync(filePath);

// アップロードするファイルの参照パスとファイルオブジェクト
const fileRef = ref(storage, 'back.png');
const file = new Uint8Array(fileData);

uploadBytes(fileRef, file)
  .then((snapshot) => {
    console.log('PNGファイルがアップロードされました。');
  })
  .catch((error) => {
    console.error('アップロードエラー:', error);
  })
  .finally(() => {
    console.log('プログラムを終了します。');
    process.exit(0);
  });