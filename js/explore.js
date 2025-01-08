//for문으로 12개 돌리기
for(i=1; i<13; i++){
 let exploreWrap = document.querySelector(".explore_wrap")
 let explore = document.createElement("div")
 explore.className = "explore_box"
 /*  explore.style.background=`url(../img/feed_img${1}.JPG)` */
 explore.innerHTML=`
  <div class="explore_img">
     <img src="./img/feed_img${i}.JPG" alt="x">
    </div>
     <div class="icon">
     <ul>
      <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
      <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
     </ul>
    </div>
 `
exploreWrap.appendChild(explore)
}