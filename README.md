est47.js
========

日本の47都道府県を地図でグラフィカルに選択できるようにするjQueryプラグイン

## デモページ / demo
http://retasretas.github.io/est47.js/

## 特徴 / future
![est47.js ss](https://raw.github.com/retasretas/est47.js/master/preview.png)  
47都道府県をセレクト要素で一列に並べると視認性が落ちますが、当プラグインを使えば地図を使ってグラフィカルで簡単に都道府県を選択できるよようになります。  
導入もとっても簡単。  
**easy use ! easy select !**

## 使用法 / usage
コールバックには引数で `JIS X0401` に準拠した都道府県の番号と名前が返ってきますので、コールバックを利用してHTML側の `<select>` 要素等に反映することを想定しています。

```html
<!-- target element -->
<a href="#" class="map_select">地図から選択</a>

<!-- load jquery and est47 -->
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="jquery.est47.js"></script>
<!-- run -->
<script>
    $(function () {
        // defaults run
        $(".map_select").est47();
        
        // [option] set callback in hash. callback arg 1:index 2:value
        $(".map_select").est47({ callback: function(i, v){ alert("wahaa"+i+v); } });
    });
</script>
```
