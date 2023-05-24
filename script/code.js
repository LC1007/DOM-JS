//  =================================================================
//  About
//  =================================================================

let about = document.querySelector('section#about .row:last-child')

let aboutContent = [
    "My name is Justin Scholtz and web development has been a passion of mine ever since 2016 when I attended a intro to web development at a company called Rlabs, we did a month long course where we were introduced to HTML and CSS. What made me realize it was my passion was the amount of times I could of given up but didn't, I still had that fire in me to succeed the challenges and become a front end web developer.",
    " My journey consists of me joining a bootcamp and self studing, over my journey I've reached a point where I'm very comfortable with HTML and CSS but I'm still learning the ropes of JavaScript, I would love to then grow my VUE JS skills as my JS framework to broaden my skill set. I now feel like I'm ready to take on the next step in my journey and find employement as front end developer, Life Choices prepared me well for the next stage of my life so I'm ready for anything and everything."
]

//  =================================================================
//  Loop through the content (array) 
//  ================================================================= 

aboutContent.forEach( (content)=>{
    about.innerHTML += `<p class="lead">${content}</p>`
})

//  =================================================================
//  Education
//  ================================================================= 

// Education
let education = [
    {
        id: 1,
        year: "2023 - Current",
        description: "I'm currently attending a 12 month coding bootcamp at Life Choices which will prepare me to become a web developer, I'm learning all the necessary skills thrive as a front end developer.",
        place: 'Life Choices',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: "Mar 2022 - Nov 2023",
        description: "I worked at Business Technology for 9 months as a Systems Engineer and my daily tasks were as following seeing to clients hardware and software issues, doing client visits and setting up PCs for clients. The reason why I left was because I felt like it wasn't what I wanted to do and needed to do something else.",
        place: 'Business Technology',
        type: 'Work',
        certificate: ''
    },
    {
        id: 3,
        year: 'Jun 2019 - Nov 2019',
        description: "I worked at First Technology for 5 months and my daily tasks were creating power apps and power flows for clients, seeing to clients SharePoint Sites, creating custom sharepoint sites. The reason why I left was because I felt like I wasn't ready and needed to studying further.",
        place: 'First Technology',
        type: 'Work',
        certificate: ''
    },
    {
        id: 4,
        year: 2016,
        description: "My high school period wasn't the best but I'm proud of the person I become after I graduated.",
        place: 'Rhodes High School',
        type: 'certificate',
        certificate: ''
    }
]

let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-6 text-white">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" class="text-decoration-none border border-3 rounded p-1 m-1" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})