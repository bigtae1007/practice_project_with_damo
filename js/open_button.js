let bt = document.getElementById('bt1');

bt.addEventListener('click', () => {
  const box = document.getElementById("textbox");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const text = document.createTextNode("인증하기");
  const id = document.createAttribute("id");
  id.value = "next"

  button.setAttributeNode(id);
  button.appendChild(text);
  box.appendChild(input);
  box.appendChild(button);

  
document.getElementById('next').addEventListener("click",function(){
  alert("인증 완료");

  document.getElementById('bt2').disabled = false;
  document.getElementById('bt2').style.backgroundColor ="rgb(1, 61, 160)";
})

}, { once : true});

