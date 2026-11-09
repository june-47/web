// 채점 도우미 (수정하지 마세요)
// check(번호, 내가 만든 값, 기대하는 값) -> 화면에 정답/오답 표시
function check(no, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  const box = document.getElementById('result') || (() => {
    const d = document.createElement('div');
    d.id = 'result';
    document.body.appendChild(d);
    return d;
  })();
  const p = document.createElement('p');
  p.className = ok ? 'ok' : 'ng';
  p.textContent = `${ok ? '✅' : '❌'} 문제 ${no} | 내 값: ${JSON.stringify(actual)}` +
    (ok ? '' : ` | 기대값: ${JSON.stringify(expected)}`);
  box.appendChild(p);
}
