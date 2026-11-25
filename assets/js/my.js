
var typed = new Typed("#typed", {
    strings: ["I'm a Developer.", "I'm a Designer.", "I'm a Freelancer."],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });
  

  function handleSectionClick(section) {
    console.log(`${section} section clicked`);
   
  }
  
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
  
        
        switch (this.hash) {
          case '#home':
            handleSectionClick('Home');
            break;
          case '#about':
            handleSectionClick('About Me');
            break;
          case '#contact':
            handleSectionClick('Contact');
            break;
            case '#education':
          handleEducationClick();
          break;
        case '#hobby':
          handleHobbyClick();
          break;
        case '#skills':
          handleSkillsClick();
          break;
        }
      }
    });
  });
  