//header

let scrollHeader = () => {
    let header = document.querySelector('#header');
    //pageYOffset >=50 ?A :B; //조건문이 참이면 A가 실행되고 거짓이면 B가 실행된다.
    pageYOffset >=50
    ?header.classList.add('bg-header')
    :header.classList.remove('bg-header');
}
window.addEventListener('scroll',scrollHeader)  //scrollHeader에 괄호 넣지말것 //콜백함수는 ()사용X


//배경테마 변경
let themeButton = document.getElementById('theme-button');
let iconTheme = "ri-sun-fill";
let darkTheme = "dark-theme";

let getCurrentTheme = ()=>{
    //document.body.classList.contains('darkTheme'),
    //==> body가 클래스명 darkTheme를 가지고 있는가? ==> true/false
    let result = document.body.classList.contains(darkTheme)?"dark":"light";
    return result;

};

let getCurrentIcon = () => {
    let result = themeButton.classList.contains(iconTheme)
    ?"ri-moon-line"
    :iconTheme;

    return result;
}





//웹의 스토어에 값셋팅
//localStorage.setItem() --> 웹 스토어에 값을 입력
//localStorage.getItem() --> 웹스토어의 값을 가져올때


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedTheme)




if(selectedTheme){
    if(selectedTheme == "dark"){
        document.body.classList.add(darkTheme)
    }else{
        document.body.classList.remove(darkTheme)
    }
    
    if(selectedIcon == "ri-moon-line"){
        themeButton.classList.add(iconTheme);
    }else{
        themeButton.classList.remove(iconTheme);
    }
}



//모바일 메뉴 보이기
let navToggle = document.getElementById('nav_toggle'),
    navMenu = document.getElementById('nav_menu'),
    navClose = document.getElementById('nav_close');


navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu');
});

navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
});



//전체 화면 애니메이션
ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.section_subtitle,.section_title,.popular_card,.recently_img,.recently .recently_container .section_subtitle',{
    delay: 400,
    duration: 2500,
    origin: "top",
    distance: '60px',
    reset: true,
});

ScrollReveal().reveal('.home_data,.popular_card', {origin: "bottom"});
ScrollReveal().reveal('.about_data', {origin: "left"});
ScrollReveal().reveal('.about_img,.recently_img', {origin: "right"});
ScrollReveal().reveal('.popular_card', { interval: 100 });