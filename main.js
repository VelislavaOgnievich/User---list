function createNode(element){
    return document.createElement(element);
};

function append(parent,el){
    return parent.appendChild(el);
};
const ul = document.getElementById("users");
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let authors = data.results;
    return authors.map(function(user){
        console.log(authors);
        let li = createNode('li'),
        img = createNode('img'),
        pLast = createNode('p'),
        pFirst = createNode('p'),
        pUsername = createNode('p'),
        pPhone = createNode('p'),
        pLocation = createNode('p'); 

        let userInfo = createNode('div');
        userInfo.innerHTML = '<b>Email:</b>'+ user.email + '<br>' + '<b>Gender:</b>'+ user.gender + '<br>' +'<b>Birthday:</b>' + user.dob.date +'<br>' +'<b>Age:</b>' + user.dob.age;
        userInfo.classList.add('user__info');
        userInfo.classList.add('close');


        img.src = user.picture.medium;
        pLast.innerHTML = user.name.last;
        pFirst.innerHTML = user.name.first;
        pUsername.innerHTML = user.login.username;
        pPhone.innerHTML = user.phone;
        pLocation.innerHTML = user.location.city;

        li.classList.add('users__item');

        append(li,img);
        append(li,pFirst);
        append(li,pLast);
        append(li,pUsername);
        append(li,pPhone);
        append(li,pLocation);
        append(ul,li);

        append(ul,userInfo);
    })
});


function closeUserInfo(a){  
    for (var i = a;i<userInfo.length; i++) {
        userInfo[i].classList.remove('open');
        userInfo[i].classList.add('close');
    }
}
let liUser = document.getElementsByTagName('li');
let userInfo = document.getElementsByClassName('user__info');
ul.onclick=function(event){
    let target=event.target;
    if (target.className=="users__item") {
        for (var i = 0; i < liUser.length; i++) { 
            if (target==liUser[i]) {  
                openUserInfo(i);
                break;
            }
        }
    }
}

function openUserInfo(b){//
    if(userInfo[b].classList.contains('close')){
        closeUserInfo(0);
        userInfo[b].classList.remove('close');
        userInfo[b].classList.add('open');
    }else if(userInfo[b].classList.contains('open')){
        userInfo[b].classList.remove('open');
        userInfo[b].classList.add('close');
    }
};
let modal = document.getElementById('myModal');
                    let btn = document.getElementById('mybtn');
                    let span = document.getElementsByClassName("closeModal")[0];

                    btn.onclick = function(){  
                        modal.style.display = "block";
                    }
                    span.onclick = function(){ 
                        modal.style.display = "none";
                    }
                    window.onclick = function(event){  
                        if(event.target == modal){
                            modal.style.display = "none";
                        }
                    }

function filter(element){
        var value = $(element).val();

        $("#users > li").each(function(){
            if($(this).text().search(value) > -1){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    }











