function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', function () {
            const scrollUpButton = document.getElementById('scrollUpButton');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollUpButton.style.display = 'block';
            } else {
                scrollUpButton.style.display = 'none';
            }
        });

        document.getElementById('scrollUpButton').addEventListener('click', scrollToTop);