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

     // 메인 화면 - 깃털 / 스타트 버튼 / 언어변경 호버시
     $(".fa_feather,.start_text,.tr_com_lang").hover(
          function () {
               $(this).css("cursor", "url('img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );


      // 스테이지 화면 - 포스터받기 / 포스터 / 마지막 책 호버시
      $(".poster_dl,.ask_poster_wrap div, .final_book").hover(
          function () {
               $(this).css("cursor", "url('img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );



});
