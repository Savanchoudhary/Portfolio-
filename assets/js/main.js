window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hide');
    }
  }, 500);
});


/* =========================
   PROFILE IMAGE
========================= */

const profileImg = document.getElementById('profileImg');

if (profileImg) {
  profileImg.addEventListener('error', () => {
    profileImg.style.display = 'none';
  });

  profileImg.addEventListener('load', () => {
    const fb = document.querySelector('.profile-fallback');

    if (fb) {
      fb.style.display = 'none';
    }
  });
}


/* =========================
   THEME TOGGLE
========================= */

const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;

if (themeBtn) {
  themeBtn.addEventListener('click', () => {

    const cur = root.getAttribute('data-theme');

    root.setAttribute(
      'data-theme',
      cur === 'light' ? 'dark' : 'light'
    );

    themeBtn.textContent =
      cur === 'light' ? '◐' : '◑';

  });
}


/* =========================
   NAVIGATION ACTIVE SECTION
========================= */

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObs = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {
          link.classList.remove('active');
        });

        const active = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );

        if (active) {
          active.classList.add('active');
        }

      }

    });

  },
  {
    rootMargin: '-40% 0px -50% 0px'
  }
);

sections.forEach(section => {
  navObs.observe(section);
});


/* =========================
   REVEAL ANIMATION
========================= */

const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('in');

        io.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);

revealEls.forEach(el => {
  io.observe(el);
});


/* =========================
   SKILL METERS
========================= */

const meters = document.querySelectorAll('.meter');

const mio = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const pct =
          entry.target.getAttribute('data-pct');

        const meterBar =
          entry.target.querySelector('i');

        if (meterBar) {
          meterBar.style.width = pct + '%';
        }

        mio.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.4
  }
);

meters.forEach(el => {
  mio.observe(el);
});


/* =========================
   FORMSPREE CONTACT FORM
========================= */

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    if (status) {
      status.textContent = 'Sending...';
    }

    const formData = new FormData(form);

    try {

      const response = await fetch(
        'https://formspree.io/f/xppayaap',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      if (response.ok) {

        if (status) {
          status.textContent = 'Message sent successfully! ✓';
        }

        form.reset();

      } else {

        if (status) {
          status.textContent =
            'Something went wrong. Please try again.';
        }

      }

    } catch (error) {

      console.error('Formspree Error:', error);

      if (status) {
        status.textContent =
          'Unable to send message. Please try again.';
      }

    }

  });

}
