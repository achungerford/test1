/* explaining the concept of CLOSURE */

(function counter() {
  var cnt = 0,
      item1 = document.querySelector("#item1"),
      item1 = document.querySelector("#item2");

  var print = function print() {
    console.log(cnt);
  }

  item1.addEventListener("click", function count1() {
    cnt++;
    print();
  })
  
  item2.addEventListener("click", function count2() {
    cnt++;
    print();
  })
}())