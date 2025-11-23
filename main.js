document.addEventListener("DOMContentLoaded", function () {
                const hero = document.getElementById("hero");
                const video = document.createElement("video");
                video.classList.add("bg-video");
                video.src = "Gym.mp4";
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                hero.appendChild(video);
            });


            // Mobile Menu Side

            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector(".mobail-menu");
            const icons = document.querySelectorAll("i");

             hamburger.addEventListener("click", function (event) {
            const isVisible = mobileMenu.getAttribute('data-visible');
            if (isVisible == "true") {
                // qari hiding
                mobileMenu.setAttribute('data-visible', "false");
                icons[0].setAttribute('data-visible', "true");
                icons[1].setAttribute('data-visible', "false");
            } else if (isVisible == "false") {
                // soo bandhig showing
                mobileMenu.setAttribute('data-visible', "true");
                icons[0].setAttribute('data-visible', "false");
                icons[1].setAttribute('data-visible', "true");
            }
        });
        
        // fun part
        function closeMobileMenu() {
            const links = mobileMenu.querySelectorAll('a');

            links.forEach(link => {
                link.addEventListener('click', function () {
                    // show only the clicked anchor, hide the others
                    links.forEach(l => {
                        if (l === link) {
                            l.style.display = ''; // visible (reset)
                            l.classList.add('active');
                        } else {
                            l.style.display = 'flex';
                            l.classList.remove('active');
                        }
                    });

                    // close mobile menu UI (optional)
                    mobileMenu.setAttribute('data-visible', 'false');
                    icons[0].setAttribute('data-visible', 'true');
                    icons[1].setAttribute('data-visible', 'false');
                });
            });
        }

        closeMobileMenu();

        document.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const a = document.querySelectorAll('.menu a');
            a.forEach(link => {
                link.style.color = '#232d39';
            });
            header.style.backgroundColor = 'rgb(35, 45, 57)';
            // header.style.color = 'rgb(237, 86, 59)';
            if (window.scrollY > 50) {
                
                header.style.backgroundColor = 'rgba(225, 225, 225, 0.8)';
                // a.style.color = 'rgb(237, 86, 59)';
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
                // header.style.color = 'rgb(237, 86, 59)';
                // header.style.backgroundColor = 'transparent';
            }
        });
        