
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-btn");
const menuCloseButton = document.querySelector(".menu-close-btn");
const menuLinks = menu.querySelectorAll("a");
const submitBtn = document.getElementById("submit-btn");
const projectCtn = document.querySelector(".all-projects");
const slidingImagesCtn = document.getElementById("sliding-projects");
const frontendSkills = document.getElementById("frontend-skills");
const practiceSkills = document.getElementById("practice-skills");
const skillTools = document.getElementById("skill-tools")



menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.add("active");
    if (menu.classList.contains("active")) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
    }
        
});

menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = '';
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = '';
    })
})


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})


const reveals = document.querySelectorAll(".reveal");

// Prevent browser from restoring previous scroll position on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    })
}, { thereshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));

const form = document.getElementById("contact-form");
const modal = document.getElementById("success-modal");
const closeBtn = document.getElementById("close-modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  // Lock the button
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      form.reset();
      modal.classList.remove("hidden");
    })
    .catch((err) => {
      alert("Message failed to send.");
      console.error(err);
    })
    .finally(() => {
      // Restore the button either way
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.add("hidden");
});

//render projects card dynamically


/*
sliding project object template:
{
    imgUrl: '',
    imgAlt: ''
}
*/

const slidingImages = [
    {
        imgUrl: './images/twigNotes-ss.png',
        imgAlt: 'Image of Twig notes app'
    },
    {
        imgUrl: './images/roundup-ss.png',
        imgAlt: 'Image of Roundup app'
    },
    {
        imgUrl: './images/synthera-ss.png',
        imgAlt: 'Image of synthera official website landing page'
    },
    {
        imgUrl: './images/siteSpring-ss.png',
        imgAlt: 'Image of SiteSpring official website landing page'
    },
    {
        imgUrl: './images/monexa-ss.png',
        imgAlt: 'Image of Monexa official website landing page'
    },
    {
        imgUrl: './images/voteza-ss.png',
        imgAlt: 'Image of Voteza official website landing page'
    }
]

slidingImagesCtn.innerHTML = slidingImages.map((card) => `
<div class="slide-project shrink-0 card">
    <div class="w-full h-full rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.35)]">
        <img src="${card.imgUrl}" alt="${card.imgAlt}" loading="lazy" class="w-full h-full rounded-[10px]">
    </div>
</div>
`).join("")



/*
project object template:
{
    title: '',
    description: '',
    techs: '',
    imgUrl: '',
    imgAlt: '',
    liveLink: ''
}
*/

const projects = [
    {
        title: 'Roundup',
        description: 'A task tracking tool built for university class reps to manage student submissions, payments, and attendance — with real-time sync, CSV and Excel roster imports, and a clean mobile-friendly interface.',
        techs: 'React + Vite + Supabase + JavaScript',
        imgUrl: './images/roundup-ss.png',
        imgAlt: 'Image of Roundup dashboard',
        liveLink: 'https://roundup-mu.vercel.app/'
    },
    {
        title: 'Twig Notes',
        description: 'An all-in-one notes and tasks app designed for fast capture and organization. Includes full item management, favorites, smart search, and persistent data so users never lose their progress',
        techs: 'HTML + CSS + JavaScript',
        imgUrl: './images/twigNotes-ss.png',
        imgAlt: 'Image of Twig notes app',
        liveLink: 'https://notes-app-six-drab.vercel.app/'
    },
    {
        title: 'Synthera',
        description: 'A curated library of tools and articles focused on inclusive design, presented in a clear and structured interface that encourages easy exploration and learning.',
        techs: 'HTML + CSS + JavaScript',
        imgUrl: './images/synthera-ss.png',
        imgAlt: 'Image of Synthera official landing page',
        liveLink: 'https://twigstin.github.io/Stark-Website-Clone/'
    },
    {
        title: 'SiteSpring',
        description: 'An integrated online platform for domain services, site building, and hosting, crafted to simplify getting a business online with straightforward navigation and clear resource access.',
        techs: 'HTML + CSS + JavaScript',
        imgUrl: './images/siteSpring-ss.png',
        imgAlt: 'Image of SiteSpring official landing page',
        liveLink: 'https://twigstin.github.io/GoDaddy-Website-Clone/'
    },
    {
        title: 'Modexa',
        description: 'A polished marketplace for creative hardware and accessories, featuring an organized product catalog and smooth browsing experience tailored to designers, editors, and digital professionals.',
        techs: 'HTML + JavaScript + Tailwind CSS',
        imgUrl: './images/monexa-ss.png',
        imgAlt: 'Image of Monexa official landing page',
        liveLink: 'https://twigstin.github.io/Monogram/'
    },
    {
        title: 'Voteza',
        description: 'A lightweight voting site built to collect and display votes for candidates in an organized and transparent way, making participation fast and accessible for users.',
        techs: 'HTML + CSS + JavaScript',
        imgUrl: './images/voteza-ss.png',
        imgAlt: 'Image of Voteza official landing page',
        liveLink: 'https://twigstin.github.io/Voting-Site/'
    }
]

projectCtn.innerHTML = projects.map((p) => `
    <div class="reveal project">
    <div class="w-full h-37.5 m-auto shadow-[0_10px_30px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.35)] rounded-[10px] mb-5">
        <img src="${p.imgUrl}" alt="${p.imgAlt}" loading="lazy" class="card w-full h-full rounded-[10px]">
    </div>
    <div class="block">
        <h3 class="text-3xl font-[Montserrat] mt-[10px]">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <p>${p.techs}</p>
        <a href="${p.liveLink}" target="_blank" rel="noopener"><button type="button" class="btn">View Project <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
    </div>
</div>
`).join("")

projectCtn.querySelectorAll(".reveal").forEach(el => observer.observe(el));



//add skills card
/*
skills card template:
{
    title: '',
    svg: ''
}

*/

const frontendSkillsList = [
    {
        title: 'HTML',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#E34F26]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/'
    },
    {
        title: 'CSS',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#663399]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS</title><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/'
    },
    {
        title: 'Javascript',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#F7DF1E]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/'
    },
    {
        title: 'React',
        svg: 'role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/'
    },
    {
        title: 'Tailwind CSS',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#06B6D4]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/'
    },
    {
        title: 'Vite',
        svg: 'role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vite</title><path d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"/'
    }
]

const practicesList = [
    {
        text: 'Clean Code',
    },
    {
        text: 'Spacing & Typography',
    },
    {
        text: 'Debugging',
    },
    {
        text: 'Design-to-Code Accuracy'
    }
]

const toolsList = [
    {
        title: 'Git',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#F05032]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/'
    }, 
    {
        title: 'GitHub',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#181717]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/'
    },
    {
        title: 'Figma',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#F24E1E]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/'
    },
    {
        title: 'Supabase',
        svg: 'role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Supabase</title><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/'
    },
    {
        title: 'Vercel',
        svg: 'role="img" class="w-full h-full rounded-20px fill-[#000000]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="m12 1.608 12 20.784H0Z"/'
    },
    {
        title: 'Netlify',
        svg: 'role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Netlify</title><path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"/'
    }
]

frontendSkills.innerHTML = frontendSkillsList.map((skill) => `
    <div class="skill-slide">
    <div class="w-[200px] h-[200px] rounded-[20px] mb-[20px]">
        <svg ${skill.svg}></svg>                                
    </div>
    <p class="text-center text-black font-[Montserrat] text-xl">${skill.title}</p>
</div>
`).join("")


practiceSkills.innerHTML = practicesList.map((skill) => `
    <div class="slide-skill">
    <div class="text-black font-[Montserrat] text-xl">
        <p>${skill.text}</p>
    </div>
    </div>
`).join("")

skillTools.innerHTML = toolsList.map((tool) => `
<div class="skill-slide">
    <div class="w-[200px] h-[200px] rounded-[20px] mb-[20px]">
        <svg ${tool.svg}></svg>
    </div>
    <p class="text-center text-black font-[Montserrat] text-xl">${tool.title}</p>
</div>
`).join("")



/*
<div class="skill-slide">
    <div class="w-[200px] h-[200px] rounded-[20px] mb-[20px]">
        <svg role="img" class="w-full h-full rounded-20px fill-[#000000]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="m12 1.608 12 20.784H0Z"/></svg>
    </div>
    <p class="text-center text-black font-[Montserrat] text-xl">Vercel</p>
</div>
*/