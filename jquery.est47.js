/*
  est47.js (easy select todofuken 47) ver1.0.3 H26.1.23
  The MIT License (MIT)
  Copyright (c) 2014 @circle_retas
*/

;(function($){
    $.fn.est47 = function(options){
        
        var elements = this;
        
        elements.each(function(){
            
            var opts = $.extend({}, $.fn.est47.defaults, options);
            
            var preColor; // 直前の選択した部分の色
            var bindTfkn = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
            
            var selectedValue; // 選択した都道府県 名前
            var selectedIndex; // 選択した都道府県 番号
            var $hud;
            var callback = opts.callback; //選択時のコールバック関数
            
            $(this).click(function(event) {
                /* SVG地図をポップアップ */
                $("body").prepend('<div id="est47-overlay"></div>');
                $("#est47-overlay").append(map).css({
                    "position": "fixed",
                    "background": "rgba(0, 0, 0, 0.5)",
                    "min-width": "100%",
                    "min-height": "100%",
                    "margin": "0",
                    "top": "0",
                    "left": "0"
                }).click(function(event) {
                    // クリックしたら消去
                    $(this).remove();
                });
                $("#est47-jpmap").css({
                    "width": "100%",
                    "height": "100%",
                    "position": "fixed"
                });
                init();
                return false;
            });
            
            function init (){
                $hud = $("#est47-overing_tfkn");
                
                $("#est47-jpmap .map-47tfkn").hover(function(event){
                    /* mouse over */
                    preColor = $(this).attr("fill");
                    $(this).attr("fill", "#ff0000");
                    
                    selectedIndex = parseInt($(this).attr('id').substr(1,2), 10)-1;
                    selectedValue = bindTfkn[selectedIndex];
                    
                    $("html").mousemove(function(event) {
                        $hud.css({
                            "display"       : "block",
                            "position"      : "absolute",
                            "background"    : "rgba(0, 0, 0, 0.5)",
                            "color"         : "#fff",
                            "padding"       : ".5em",
                            "border-radius" : "10%",
                            "left"          : event.clientX+5,
                            "top"           : event.clientY+5,
                        }).text(selectedValue);
                    });
                }, function(event) {
                    /* mouse leave */
                    $(this).attr("fill", preColor);
                    $("html").unbind();
                    $hud.css("display","none");
                }).click(function(event){
                    /* click event */
                    $("html").unbind();
                    callback(selectedIndex+1, selectedValue);
                }).css("cursor", "pointer");
            }
            
            var map = '<div id="est47-wrapper" style="position: relative;"><svg version="1.1" id="est47-jpmap" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">  <g id="c0-nippon">        <!-- fill -->    <g id="map-fill">      <g id="c8-kyushu-f">        <rect id="f47-okinawa" class="map-47tfkn" x="246.1" y="187" fill="#B9F081" width="115.8" height="50.7"/>        <rect id="f46-kagoshima" class="map-47tfkn" x="183.9" y="876.2" fill="#B9F081" width="51.5" height="60.5"/>        <rect id="f45-miyazaki" class="map-47tfkn" x="235.4" y="876.2" fill="#B9F081" width="46.5" height="60.5"/>        <rect id="f44-oita" class="map-47tfkn" x="235.4" y="814.2" fill="#B9F081" width="46.5" height="62"/>        <polygon id="f43-kumamoto" class="map-47tfkn" fill="#B9F081" points="235.4,814.2 210.4,814.2 183.9,814.2 183.9,876.2 235.4,876.2"/>        <rect id="f42-nagasaki" class="map-47tfkn" x="150.9" y="765.7" fill="#B9F081" width="25" height="79"/>        <rect id="f41-saga" class="map-47tfkn" x="175.9" y="765.7" fill="#B9F081" width="34.5" height="48.5"/>        <polygon id="f40-fukuoka" class="map-47tfkn" fill="#B9F081" points="235.4,814.2 281.9,814.2 281.9,765.7 210.4,765.7 210.4,814.2"/>      </g>      <g id="c7-shikoku-f">        <rect id="f39-kochi" class="map-47tfkn" x="312.9" y="805.8" fill="#B9F081" width="78" height="34.9"/>        <rect id="f38-ehime" class="map-47tfkn" x="312.9" y="765.7" fill="#B9F081" width="78" height="40.1"/>        <rect id="f37-kagawa" class="map-47tfkn" x="390.9" y="765.7" fill="#B9F081" width="46" height="40.1"/>        <rect id="f36-tokushima" class="map-47tfkn" x="390.9" y="805.8" fill="#B9F081" width="46" height="34.9"/>      </g>      <g id="c6-chugoku-f">        <polygon id="f35-yamaguchi" class="map-47tfkn" fill="#B9F081" points="273.6,672.5 232.2,672.5 232.2,746.7 273.6,746.7 273.6,711.2"/>        <rect id="f34-hiroshima" class="map-47tfkn" x="273.6" y="711.2" fill="#B9F081" width="69" height="35.5"/>        <rect id="f33-okayama" class="map-47tfkn" x="342.6" y="711.2" fill="#B9F081" width="57.3" height="35.5"/>        <rect id="f32-shimane" class="map-47tfkn" x="273.6" y="672.5" fill="#B9F081" width="69" height="38.6"/>        <rect id="f31-tottori" class="map-47tfkn" x="342.6" y="672.5" fill="#B9F081" width="57.3" height="38.6"/>      </g>      <g id="c5-kinki-f">        <rect id="f30-wakayama" class="map-47tfkn" x="455.9" y="772.7" fill="#B9F081" width="45" height="29"/>        <polygon id="f29-nara" class="map-47tfkn" fill="#B9F081" points="493.2,730.2 493.2,715.8 471.4,715.8 471.4,772.7 500.9,772.7           500.9,730.2"/>        <polygon id="f28-hyogo" class="map-47tfkn" fill="#B9F081" points="446.6,715.8 446.6,672.5 399.9,672.5 399.9,714.4 399.9,746.7           455.9,746.7 455.9,715.8"/>        <rect id="f27-osaka" class="map-47tfkn" x="455.9" y="715.8" fill="#B9F081" width="15.5" height="56.9"/>        <rect id="f26-kyoto" class="map-47tfkn" x="446.6" y="672.5" fill="#B9F081" width="46.7" height="43.3"/>        <polygon id="f25-shiga" class="map-47tfkn" fill="#B9F081" points="526.9,696.8 526.9,672.5 493.2,672.5 493.2,730.2 539.9,730.2           539.9,696.8"/>        <rect id="f24-mie" class="map-47tfkn" x="500.9" y="730.2" fill="#B9F081" width="39" height="71.5"/>      </g>      <g id="c4-chubu-f">        <rect id="f23-aichi" class="map-47tfkn" x="539.9" y="696.8" fill="#B9F081" width="47.3" height="49.9"/>        <polygon id="f22-shizuoka" class="map-47tfkn" fill="#B9F081" points="587.2,696.8 587.2,746.7 625.2,746.7 625.2,721.7 648.6,721.7           648.6,746.7 663.2,746.7 663.2,696.8"/>        <rect id="f21-gifu" class="map-47tfkn" x="526.9" y="626.6" fill="#B9F081" width="60.3" height="70.2"/>        <polygon id="f20-nagano" class="map-47tfkn" fill="#B9F081" points="587.2,602.7 587.2,643.4 587.2,696.8 613.2,696.8 613.2,656.4           663.2,656.4 663.2,602.7"/>        <rect id="f19-yamanashi" class="map-47tfkn" x="613.2" y="656.4" fill="#B9F081" width="50" height="40.4"/>        <rect id="f18-fukui" class="map-47tfkn" x="483.9" y="626.6" fill="#B9F081" width="43" height="46"/>        <rect id="f17-ishikawa" class="map-47tfkn" x="518.9" y="537.2" fill="#B9F081" width="34" height="89.4"/>        <polygon id="f16-toyama" class="map-47tfkn" fill="#B9F081" points="606.6,571.7 587.2,571.7 574.9,571.7 552.9,571.7 552.9,626.6           587.2,626.6 587.2,602.7 606.6,602.7"/>        <polygon id="f15-niigata" class="map-47tfkn" fill="#B9F081" points="649.2,531.7 649.2,571.7 606.6,571.7 606.6,602.7 649.2,602.7           659.9,602.7 697.4,602.7 697.4,531.7"/>      </g>      <g id="c3-kanto-f">        <rect id="f14-kanagawa" class="map-47tfkn" x="663.2" y="709.8" fill="#B9F081" width="53.2" height="23.9"/>        <rect id="f13-tokyo" class="map-47tfkn" x="663.2" y="688.7" fill="#B9F081" width="74.3" height="21.1"/>        <polygon id="f12-chiba" class="map-47tfkn" fill="#B9F081" points="794.9,656.4 757.6,656.4 737.5,656.4 737.5,675.7 737.5,696.8           737.5,749.7 794.9,749.7"/>        <polygon id="f11-saitama" class="map-47tfkn" fill="#B9F081" points="737.5,656.4 706.9,656.4 663.2,656.4 663.2,688.7 737.5,688.7"/>        <rect id="f10-gunma" class="map-47tfkn" x="663.2" y="602.7" fill="#B9F081" width="43.7" height="53.7"/>        <polygon id="f09-tochigi" class="map-47tfkn" fill="#B9F081" points="737.5,656.4 757.6,656.4 757.6,602.7 706.9,602.7 706.9,656.4"/>        <rect id="f08-ibaraki" class="map-47tfkn" x="757.6" y="602.7" fill="#B9F081" width="37.3" height="53.7"/>      </g>      <g id="c2-tohoku-f">        <rect id="f07-fukushima" class="map-47tfkn" x="697.4" y="531.7" fill="#B9F081" width="97.5" height="71"/>        <rect id="f06-yamagata" class="map-47tfkn" x="663.2" y="470.2" fill="#B9F081" width="68.4" height="61.5"/>        <rect id="f05-akita" class="map-47tfkn" x="663.2" y="379.4" fill="#B9F081" width="68.4" height="90.8"/>        <rect id="f04-miyagi" class="map-47tfkn" x="731.6" y="470.2" fill="#B9F081" width="63.3" height="61.5"/>        <rect id="f03-iwate" class="map-47tfkn" x="731.6" y="379.4" fill="#B9F081" width="63.3" height="90.8"/>        <rect id="f02-aomori" class="map-47tfkn" x="663.2" y="307.7" fill="#B9F081" width="131.7" height="71.7"/>      </g>      <g id="c1-hokkaido-f">        <polygon id="f01-hokkaido" class="map-47tfkn" fill="#B9F081" points="887.8,136.7 807.5,136.7 807.5,87.3 693.9,87.3 693.9,123.9           664.8,123.9 664.8,265.2 697.1,265.2 697.1,207.5 776.3,207.5 776.3,247.9 824.1,247.9 824.1,207.5 887.8,207.5"/>      </g>    </g><!-- end fill -->        <!-- stroke -->    <g id="map-stroke">      <g id="c8-kyushu-s">        <rect id="s47-okinawa" x="246.1" y="187" fill="none" stroke="#000000" stroke-miterlimit="10" width="115.8" height="50.7"/>        <rect id="s46-kagoshima" x="183.9" y="876.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="51.5" height="60.5"/>        <rect id="s45-miyazaki" x="235.4" y="876.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="46.5" height="60.5"/>        <rect id="s44-oita" x="235.4" y="814.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="46.5" height="62"/>        <polygon id="s43-kumamoto" fill="none" stroke="#000000" stroke-miterlimit="10" points="235.4,814.2 210.4,814.2         183.9,814.2 183.9,876.2 235.4,876.2"/>        <rect id="s42-nagasaki" x="150.9" y="765.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="25" height="79"/>        <rect id="s41-saga" x="175.9" y="765.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="34.5" height="48.5"/>        <polygon id="s40-fukuoka" fill="none" stroke="#000000" stroke-miterlimit="10" points="235.4,814.2 281.9,814.2           281.9,765.7 210.4,765.7 210.4,814.2"/>      </g>      <g id="c7-shikoku-s">        <rect id="s39-kochi" x="312.9" y="805.8" fill="none" stroke="#000000" stroke-miterlimit="10" width="78" height="34.9"/>        <rect id="s38-ehime" x="312.9" y="765.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="78" height="40.1"/>        <rect id="s37-kagawa" x="390.9" y="765.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="46" height="40.1"/>        <rect id="s36-tokushima" x="390.9" y="805.8" fill="none" stroke="#000000" stroke-miterlimit="10" width="46" height="34.9"/>      </g>      <g id="c6-chugoku-s">        <polygon id="s35-yamaguchi" fill="none" stroke="#000000" stroke-miterlimit="10" points="273.6,672.5 232.2,672.5           232.2,746.7 273.6,746.7 273.6,711.2"/>        <rect id="s34-hiroshima" x="273.6" y="711.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="69" height="35.5"/>        <rect id="s33-okayama" x="342.6" y="711.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="57.3" height="35.5"/>        <rect id="s32-shimane" x="273.6" y="672.5" fill="none" stroke="#000000" stroke-miterlimit="10" width="69" height="38.6"/>        <rect id="s31-tottori" x="342.6" y="672.5" fill="none" stroke="#000000" stroke-miterlimit="10" width="57.3" height="38.6"/>      </g>      <g id="c5-kinki-s">        <rect id="s30-wakayama" x="455.9" y="772.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="45" height="29"/>        <polygon id="s29-nara" fill="none" stroke="#000000" stroke-miterlimit="10" points="493.2,730.2 493.2,715.8         471.4,715.8 471.4,772.7 500.9,772.7 500.9,730.2"/>        <polygon id="s28-hyogo" fill="none" stroke="#000000" stroke-miterlimit="10" points="446.6,715.8 446.6,672.5         399.9,672.5 399.9,714.4 399.9,746.7 455.9,746.7 455.9,715.8"/>        <rect id="s27-osaka" x="455.9" y="715.8" fill="none" stroke="#000000" stroke-miterlimit="10" width="15.5" height="56.9"/>        <rect id="s26-kyoto" x="446.6" y="672.5" fill="none" stroke="#000000" stroke-miterlimit="10" width="46.7" height="43.3"/>        <polygon id="s25-shiga" fill="none" stroke="#000000" stroke-miterlimit="10" points="526.9,696.8 526.9,672.5         493.2,672.5 493.2,730.2 539.9,730.2 539.9,696.8"/>        <rect id="s24-mie" x="500.9" y="730.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="39" height="71.5"/>      </g>      <g id="c4-chubu-s">        <rect id="s23-aichi" x="539.9" y="696.8" fill="none" stroke="#000000" stroke-miterlimit="10" width="47.3" height="49.9"/>        <polygon id="s22-shizuoka" fill="none" stroke="#000000" stroke-miterlimit="10" points="587.2,696.8 587.2,746.7         625.2,746.7 625.2,721.7 648.6,721.7 648.6,746.7 663.2,746.7 663.2,696.8"/>        <rect id="s21-gifu" x="526.9" y="626.6" fill="none" stroke="#000000" stroke-miterlimit="10" width="60.3" height="70.2"/>        <polygon id="s20-nagano" fill="none" stroke="#000000" stroke-miterlimit="10" points="587.2,602.7 587.2,643.4         587.2,696.8 613.2,696.8 613.2,656.4 663.2,656.4 663.2,602.7"/>        <rect id="s19-yamanashi" x="613.2" y="656.4" fill="none" stroke="#000000" stroke-miterlimit="10" width="50" height="40.4"/>        <rect id="s18-fukui" x="483.9" y="626.6" fill="none" stroke="#000000" stroke-miterlimit="10" width="43" height="46"/>        <rect id="s17-ishikawa" x="518.9" y="537.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="34" height="89.4"/>        <polygon id="s16-toyama" fill="none" stroke="#000000" stroke-miterlimit="10" points="606.6,571.7 587.2,571.7         574.9,571.7 552.9,571.7 552.9,626.6 587.2,626.6 587.2,602.7 606.6,602.7"/>        <polygon id="s15-niigata" fill="none" stroke="#000000" stroke-miterlimit="10" points="649.2,531.7 649.2,571.7           606.6,571.7 606.6,602.7 649.2,602.7 659.9,602.7 697.4,602.7 697.4,531.7"/>      </g>      <g id="c3-kanto-s">        <rect id="s14-kanagawa" x="663.2" y="709.8" fill="none" stroke="#000000" stroke-miterlimit="10" width="53.2" height="23.9"/>        <rect id="s13-tokyo" x="663.2" y="688.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="74.3" height="21.1"/>        <polygon id="s12-chiba" fill="none" stroke="#000000" stroke-miterlimit="10" points="794.9,656.4 757.6,656.4         737.5,656.4 737.5,675.7 737.5,696.8 737.5,749.7 794.9,749.7"/>        <polygon id="s11-saitama" fill="none" stroke="#000000" stroke-miterlimit="10" points="737.5,656.4 706.9,656.4           663.2,656.4 663.2,688.7 737.5,688.7"/>        <rect id="s10-gunma" x="663.2" y="602.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="43.7" height="53.7"/>        <polygon id="s09-tochigi" fill="none" stroke="#000000" stroke-miterlimit="10" points="737.5,656.4 757.6,656.4         757.6,602.7 706.9,602.7 706.9,656.4"/>        <rect id="s08-ibaraki" x="757.6" y="602.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="37.3" height="53.7"/>      </g>      <g id="c2-tohoku-s">        <rect id="s07-fukushima" x="697.4" y="531.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="97.5" height="71"/>        <rect id="s06-yamagata" x="663.2" y="470.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="68.4" height="61.5"/>        <rect id="s05-akita" x="663.2" y="379.4" fill="none" stroke="#000000" stroke-miterlimit="10" width="68.4" height="90.8"/>        <rect id="s04-miyagi" x="731.6" y="470.2" fill="none" stroke="#000000" stroke-miterlimit="10" width="63.3" height="61.5"/>        <rect id="s03-iwate" x="731.6" y="379.4" fill="none" stroke="#000000" stroke-miterlimit="10" width="63.3" height="90.8"/>        <rect id="s02-aomori" x="663.2" y="307.7" fill="none" stroke="#000000" stroke-miterlimit="10" width="131.7" height="71.7"/>      </g>      <g id="c1-hokkaido-s">        <polygon id="s01-hokkaido" fill="none" stroke="#000000" stroke-miterlimit="10" points="887.8,136.7 807.5,136.7           807.5,87.3 693.9,87.3 693.9,123.9 664.8,123.9 664.8,265.2 697.1,265.2 697.1,207.5 776.3,207.5 776.3,247.9 824.1,247.9           824.1,207.5 887.8,207.5"/>      </g>    </g><!-- end stroke -->      </g>    <polyline id="div" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" points="539.9,95.5 455.9,373     210.4,488.5 "/><!-- okinawa honsyu div --></svg><div id="est47-overing_tfkn"></div></div>'
            
        });
        
        return this;
    };
    
    $.fn.est47.defaults = {
        callback: function(index, value){
                alert("番号：" + index + "\n名前：" + value);
            }
    };
    
})(jQuery);