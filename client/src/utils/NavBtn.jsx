const btns = ["Đề thi online", "Game", "Blog"];

function getBtn() {
  return btns.map((btn, index) => <button key={index}>{btn}</button>);
}
export default { getBtn }