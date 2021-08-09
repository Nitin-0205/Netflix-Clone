export default function Fun(){
    let accordance = document.getElementsByClassName("FAQ_buttons");
      console.log(accordance);

      for (let i = 0; i < accordance.length; i++) {

        accordance[i].addEventListener("click", function () {
          if (this.childNodes[1].iconList.contain("faPlus")) {
            this.childNodes[1].iconList.remove("faPlus");
            this.childNodes[1].iconList.add("faTimes");
          }
          else {
            this.childNodes[1].iconList.remove("faTimes");
            this.childNodes[1].iconList.add("faPlus");
          }

          let contain = this.nextElementSibling;
          if(contain.style.maxHeight){
            contain.style.maxHeight = null;
          }else{
            contain.style.maxHeight = contain.scrollHeight + "px";

          }

        });
}
}