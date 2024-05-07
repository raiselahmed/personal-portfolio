// preloader
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
  });


const trget = document.querySelector(".mn");
const mnbx = document.querySelector(".mn-bx");
const drpDwn = document.querySelector(".drp-mnu");

// slidr
// const slideImg = document.querySelector("#slideImg");

// let images = new Array (
//     "accest/images/img1.jpg",
//     "accest/images/img2.jpg",
//     "accest/images/img3.jpg",
//     "accest/images/img4.png",
//     "accest/images/img5.jpg",
//     "accest/images/img6.jpg"
// );


// let len = images.length;
// let  i = 0;

// function slide() {
//     if (i > len-1) {
//         i = 0;
//     }
//     slideImg.src = images[i];
//     i++;
//     setTimeout(slide(), 3000)
// };

   // Start the slideshow

trget.addEventListener("click", ()=>{
    trget.classList.toggle("active");
    mnbx.classList.toggle('opn-mnu');
})

drpDwn.addEventListener("click", ()=>{
    drpDwn.classList.toggle('sowDrpMnu')
})



const toggleSrch = () =>{
    const srchBar = document.getElementById("tpyearia"),
        srchBtn = document.getElementById("srchBtn")
        srchBtn2 = document.querySelector("#srchBtn2");
         inptAria2 = document.querySelector("#tpyearia2");

    srchBtn.addEventListener("click", ()=>{
        srchBar.classList.toggle("shw-srch")
    });   

    srchBtn2.addEventListener("click", ()=>{
        inptAria2.classList.toggle("shw-srch2")
    })   
}    
toggleSrch();

//scrl prgress//
let calcScrollValue = () =>{
    let scrlPrgress = document.querySelector("#progress");
    let PrgressVlue = document.querySelector("#prgrss-vlue");

    let pos = document.documentElement.scrollTop;
    let calcHieght = document.documentElement.scrollHeight -document.documentElement.clientHeight;
    
    let scrlValue = Math.round((pos * 100) / calcHieght);

    if (pos > 100) {
        scrlPrgress.style.display = 'grid'
    }else{
        scrlPrgress.style.display = 'none'
    }
    scrlPrgress.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    })
    scrlPrgress.style.background = `conic-gradient(#0d9835 ${scrlValue}%, black ${scrlValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
//scrl prgresse end//

// cntct chnnl
const cntctBTn =document.querySelector(".cnt-icn");
const shwAllsIcn = document.querySelector('.contact-chnel-bmble');
const siCn = document.querySelector('.fa-phone-volume');
// const clswhap = document.querySelector('.fa-xmark');
function scrlHnS(params) {
let posY = document.documentElement.scrollTop;
if (posY > 100) {
    cntctBTn.style.display = 'flow-root'
    shwAllsIcn.style.display = 'block'
}else{
    cntctBTn.style.display = 'none'
    shwAllsIcn.style.display = 'none'
}
}

cntctBTn.addEventListener("click", ()=>{
    shwAllsIcn.classList.toggle("shw_cntct-icn");
    
   if (siCn.classList.contains('fa-phone-volume')) {
    siCn.classList.replace('fa-phone-volume', 'fa-xmark')
   }else{
    siCn.classList.replace('fa-xmark', 'fa-phone-volume')
   }

})

window.addEventListener('scroll', scrlHnS);

//cnt chnel end

//stikcy mnu
const stkyMnu = document.querySelector(".mnustky");
window.addEventListener("scroll", ()=>{
    if (this.scrollY > 200) {
        stkyMnu.classList.add("stkySw");
    }else{
        stkyMnu.classList.remove("stkySw");
    }
})


//bg scrol and gloing big img
const sldrr = document.querySelector(".big-img");
const xm = document.querySelector(".nja");
const fdlft = document.querySelector(".bnner-cntent");
const fdrghtt = document.querySelector(".vsblt");

window.addEventListener("scroll", () => {
    sldrr.style.backgroundSize = 100 - window.pageYOffset / 12 + "%";
    sldrr.style.opacity = Math.max(0, 1 - window.pageYOffset / 700);
   
    if (window.pageYOffset > 300) {
        //xm.style.transform = 'scale(0)';
        fdlft.style. transform="translateX(-200%)";
        fdrghtt.style. transform="translateX(200%)";

    } else {
     //xm.style.transform = 'scale(1)';
      fdlft.style. transform="translateX(0)";
      fdrghtt.style. transform="translateX(0)";
    }
});
//
// sldrr.addEventListener("mousemove", (em)=>{
//     let x = em.pageX - sldrr.offsetLeft;
//     let y = em.pageY - sldrr.offsetTop;

//     sldrr.style.setProperty('--x', x + 'px')
//     sldrr.style.setProperty('--y', y + 'px')
// })



// let focus = document.querySelector('.focuss');
// let fcsMv = focus.offsetWidth/2;

// document.onmousemove = function (ev) {
//     focus.style.left = ev.pageX - fcsMv   + 'px';
//     focus.style.top = ev.pageY - fcsMv   + 'px';
// }




// vdo play
const plybtn = document.querySelector(".banner_video_btn");
const clp = document.querySelector(".clip");
const clsee = document.querySelector(".clser");
const vsblt = document.querySelector(".vsblt");
const ifrm = document.querySelector(".ifrmm")
const plytm = document.querySelector(".pltn")

plybtn.addEventListener("click", ()=>{
    plybtn.classList.add("played");
    clp.classList.add("clp_avtv");
    clsee.classList.add("dBlck")
    vsblt.classList.add("hdne")
    ifrm.classList.add("scle")
    plytm.classList.add("blll")
});

clsee.addEventListener("click", ()=>{
    clsee.classList.remove("dBlck");
    plybtn.classList.remove("played");
    clp.classList.remove("clp_avtv");
    vsblt.classList.remove("hdne");
    plytm.classList.remove("blll")
});

//txt fadeY
const fadeY = document.querySelectorAll(".has-animation");

document.addEventListener("scroll", ()=>{
    fadeY.forEach(element =>{
        if (isInVw(element)) {
            element.classList.add("has-animation-vsbl");
        }
    });
});

function isInVw(element) {
    let rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150);
};

//cntnt fadeX
// const fadeX = document.querySelectorAll(".has-animationX");

// document.addEventListener("scroll", () => {
//     fadeX.forEach(element => {
//         if (fdeXf(element)) {
//             element.classList.add("has-animationX-vsbl");
//         }
//     });
// });

// function fdeXf(element) {
//     let rect2 = element.getBoundingClientRect();
//     return rect2.left > 0 && rect2.right < (window.innerWidth - 100 || document.documentElement.clientWidth - 100);
// };

document.addEventListener("DOMContentLoaded", function() {
    const fadeX = document.querySelectorAll(".has-animationX");

    function isInHv(element) {
        let rect = element.getBoundingClientRect();
        return rect.left < window.innerWidth && rect.right > 0;
    }

    function handleScroll() {
        fadeX.forEach(element => {
            if (!element.dataset.isAnimated && isInHv(element)) {
                element.dataset.isAnimated = true;
                element.classList.add("has-animationX-vsbl");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});


//counter amimataion
const shwNum = document.querySelectorAll(".num");
const speed = 2000;

function isInvwPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startAnim(cnter) {
    shwNum.forEach(counter => {
        if (isInvwPort(counter)) {
            let startValue = 0;
            let endValue = parseInt(counter.getAttribute("data-cnt"));
            let duration = Math.floor(speed / endValue);
            let counterInterval = setInterval(() => {
                startValue += 1;
                counter.textContent = startValue;
                if (startValue === endValue) {
                    clearInterval(counterInterval);
                }
            }, duration);
        }
    });
}

window.addEventListener("scroll", () => {
    startAnim();
});


// tabs 
const tabs = document.querySelectorAll(".btn-tab");
const allCntnt = document.querySelectorAll(".bslt");

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", (e)=>{
        tabs.forEach(tab=>{tab.classList.remove("Tb-Actv")});
        tab.classList.add("Tb-Actv");

        let line = document.querySelector(".bd-lne")
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        allCntnt.forEach(content => {
            content.classList.remove('actve-cntnt');
        });
        allCntnt[index].classList.add('actve-cntnt');
        

    })
})


//progressBar
const sklBar = document.querySelector("#prgress-section");
const prgressBar = document.querySelectorAll(".prgress-bar");


function showProgress(params) {
    prgressBar.forEach(prgressBar => {
        let pValue = prgressBar.dataset.progress;
        prgressBar.style.opacity = 1;
        prgressBar.style.width = `${pValue}%`;
    });
}

function hideProgress() {
    prgressBar.forEach(b =>{
        b.style.opacity = 0;
        b.style.width = 0;
    })
}


window.addEventListener("scroll", () => {
    let sectionPos = sklBar.getBoundingClientRect().top;
    let screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

// circel prgress
const crclbr = document.querySelector("#prgress-section");
const circleProgressBars = document.querySelectorAll(".circle-prgress");

function shwBall(params) {
    circleProgressBars.forEach(circleProgress => {
        const circleProgressValue = circleProgress.querySelector(".circle-prgress-value");
        
        let circleProgressStart = 0;
        let circleProgressEnd = Number(circleProgressValue.getAttribute('data-vli'));
        let speed = 10;
        let progressSet = setInterval(() => {
            circleProgressStart++;
            circleProgress.style.background = `conic-gradient(#0d9835 ${circleProgressStart * 3.6}deg, gray 0deg)`;
            circleProgressValue.textContent = `${circleProgressStart}%`;
            if (circleProgressStart === circleProgressEnd) {
                clearInterval(progressSet); 
            }
        }, speed);
    });
    
}


window.addEventListener("scroll", () => {
    let sectionPos = crclbr.getBoundingClientRect().top;
    let screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
        shwBall();
    } else {
        hideball();
    }
});






//work
const vItms = document.querySelector("#prItm1");
const vItms2 = document.querySelector("#prItm2");
const modal = document.getElementById('video-modal');
const modal2 = document.getElementById('video-modal2');
const closeBtn = document.querySelector('.closew');
const closeBtn2 = document.querySelector('.closew2');
const clpF = document.querySelector('.clip-g')
const clpF2 = document.querySelector('.clip-g2')

vItms.addEventListener("click", ()=>{
    modal.classList.add("actv-modal");
    clpF.classList.add("clp-ff")
})
closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("actv-modal")
})
//2
vItms2.addEventListener("click", ()=>{
    modal2.classList.add("actv-modal2");
    clpF2.classList.add("clp-ff2")
})
closeBtn2.addEventListener("click", ()=>{
    modal2.classList.remove("actv-modal2")
})

//img -gallary
document.querySelectorAll(".g-img img").forEach(image =>{
    image.onclick = ()=>{
        document.querySelector(".popup-imgs").style.display = "block";
        document.querySelector(".popup-imgs img").src = image.getAttribute("src");
    }
});
document.querySelector(".closeww").onclick = ()=>{
    document.querySelector(".popup-imgs").style.display = "none";
}