window.onload=()=>
{
    if(localStorage.getItem('id')=='home'||
     localStorage.getItem('id')=='about'
     || localStorage.getItem('id')=='contact')
    {
        createVideo();
    }
    
    createBioText();
    createAboutText();
    
}
var createVideo=()=>
{
    const box = document.getElementById('box');
    if(typeof box!='undefined')
    {
        const video = document.createElement('video');
        video.autoplay = false;
        video.controls = true;
        video.muted = true;
        video.loop=true;
      
        if (video.canPlayType('video/mp4')) 
        {
            video.src = 'assets/vid/graphic design.mp4';
        }
    
        const  div_row = document.createElement('div');
        div_row.className='row';
        
        div_row.append(video);
    
        box.append(div_row);
    }
    
}

var createBioText=()=>{

    if(typeof box2!='undefined')
    {
    
    bio=[
        'I would describe myself as a hard working person who thrives at',
        'the chance of challenge at work. I am an Energetic, Ambitious',
        'person who has developed a mature and responsible approach to',
        'any task that I undertake, or situation that I am presented',
        'with. I always like to work quickly but neatly so that I can get',
        'the task I am working on done in a professional and efficient',
        'manner.</br>',
        'I took a part at the Hackathon 2018 Health hack where I was',
        'developing a system, which will help patients to make online',
        'appointments before going to the health facilities. I like to',
        'think I am someone who works well alongside others and easy to',
        'get along with as I am a sociable person.'
    ];

    const box2 = document.getElementById('box2');
    var divCol1=document.createElement('div');
    divCol1.className='col-lg-6';
    var h1_=document.createElement('h1');
    h1_.innerHTML="MULALO C TSHIGOBA";
    var p_=document.createElement('p');
    for (let index = 0; index < bio.length; index++) {
        p_.innerHTML+=bio[index];
    }

    divCol1.append(h1_);
    divCol1.append(p_);

    const  div_row = document.createElement('div');
    div_row.className='row';


    div_row.append(divCol1);
    div_row.append(createProfileImage());


    box2.append(div_row);

    }

};

var createAboutText=()=>
{
    h4s=['Personal Information','Educational Background','Work Experince'];
    personal=['Name and Surname: Mulalo C Tshigoba',
    'Gender: Male',
'Date of Birth: 22 March 1996',
'ID: 9603225585084',
'Nationality: South African',
'Race: Black African',];
    education=['High School: Mukhwantheli Secondary',
    'Tertiary: Advanced Technology Training Institute'];
    skills=['Back Office Support Technician At Limpopo Connexion For A Period of 1 Year </div',
    'Network Engineer At ZaWit For A Period Of 6 Months'

    ];
    //About me
    var box3 = document.getElementById('box3');
    
    var h1_about=document.createElement('h1');
    
    h1_about.innerHTML='About Me';
    var divCol3=document.createElement('div');
    divCol3.className='col-lg-6';
    var ol=document.createElement('ol');
    const  div_row = document.createElement('div');
    div_row.className='row';
    
    divCol3.append(h1_about);

    for (let parentindex = 0; parentindex < h4s.length; parentindex++) {
        var h4_=document.createElement('h4');
        h4_.innerHTML=h4s[parentindex];
        ol.append(h4_);

        //sub data personal details
        if(parentindex==0)
        {
            for (let index = 0; index < personal.length; index++) {

                let li=document.createElement('li');
                li.innerHTML=personal[index];
                ol.append(li);    
            }
        }
        if(parentindex==1)
        {
            for (let i = 0; i < education.length; i++) {

                let l=document.createElement('li');
                l.innerHTML=education[i];
                ol.append(l);   
            } 
        }
        if(parentindex==2)
        {
            for (let i = 0; i < skills.length; i++) {

                let l=document.createElement('li');
                l.innerHTML=skills[i];
                ol.append(l);
                
            }
            
        }

    }
    divCol3.append(ol);


    div_row.append(divCol3);
    //apend anoter
    div_row.append(createProfileImage());

    box3.append(div_row);

}

function createProfileImage()
{
    var divCol2=document.createElement('div');
    divCol2.className='col-lg-6';
    var img=document.createElement('img');
    img.className='profImg';
    img.alt="profile image";
    img.width="300";
    img.height="300";
    img.src='assets/img/mul.jfif';
    divCol2.append(img);
    return (divCol2);
}






