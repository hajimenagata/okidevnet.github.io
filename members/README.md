## OkiDevメンバーページの追加方法

簡単ではありますが、ページ追加の方法を下記しておきます。

### ページ作成手順

- githubアカウントでloginする
- `https://github.com/okidevnet/okidevnet.github.io` を自分リポジトリへforkする
- forkしたリポジトリをローカル環境へcloneする
- `members`ディレクトリ内の`_starter`ディレクトリをコピーし、希望の名前にリネームし自分用ディレクトリを作成
- 自分ディレクトリへ入り以下のコマンドを実行
```
npm install
gulp
```
- http://localhost:8085 へアクセス("Hello OkiDev!" の表記が確認できていれば正常です)
- `index.html` と `src/sass/*.sass` と `js/*.js` を編集してページを作成して下さい。


### 作成後OkiDevページへ反映させるまで

- 以下のコマンドで作成したページを自分リポジトリへ反映させます
```
git add .
git commit -m "add my page"
git push
```
- githubへログイン後自分リポジトリページの左上にあるNew pull requestからOkiDevへ追加依頼を送る。
- 承認され次第、ページが反映されます。
