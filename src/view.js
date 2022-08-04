const jigsawTpl = `<div class="jigsaw">
<div class="pos-0"></div>
<div class="pos-1"></div>
<div class="pos-2"></div>
<div class="pos-3"></div>
</div>`;

export const displayPuzzle = (w, h, puzzles, $board) => {
  $board.empty();
  $board.width(52 * w).height(52 * h);
  puzzles.forEach((p) => {
    const $jigsaw = $(jigsawTpl);
    $jigsaw.find(".pos-0").text(p[0]);
    $jigsaw.find(".pos-1").text(p[1]);
    $jigsaw.find(".pos-2").text(p[2]);
    $jigsaw.find(".pos-3").text(p[3]);

    $board.append($jigsaw);
  });
};
