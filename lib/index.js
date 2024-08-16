// 🖱️ Dreamcatcher Cursor 
// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     cursor change
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {

     /* default 상태 */
     $("html").on("mouseover", "body", function () {
          $(this).css("cursor", "url('img/DC_cursor/1.Nomal Select_일반선택.png'), pointer");
     });



     /* active 상태 */
     // 깃털  호버시
     $(".fa_feather").hover(
          function () {
               $(this).css("cursor", "url('img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );
     // 스타트 버튼 호버시
     $(".start_text").hover(
          function () {
               $(this).css("cursor", "url('img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );

     // 언어변경 호버시
     $(".tr_com_lang").hover(
          function () {
               $(this).css("cursor", "url('img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );

});
