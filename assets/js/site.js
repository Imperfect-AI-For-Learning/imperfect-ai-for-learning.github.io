/**
 * CHI 2027 Workshop: Imperfect AI as New Learning Opportunities
 * Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  if (menuBtn && mobileDrawer) {
    const toggleDrawer = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        mobileDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    menuBtn.addEventListener('click', () => toggleDrawer());

    // Close on backdrop click
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        toggleDrawer(false);
      }
    });

    // Close on link click
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => toggleDrawer(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        toggleDrawer(false);
        menuBtn.focus();
      }
    });
  }

  // 2. Header elevation on scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Active Link Highlight (IntersectionObserver Scrollspy)
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-drawer .mobile-drawer-link');
  const observedSections = document.querySelectorAll('section[id]');

  if (observedSections.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'true');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  // 4. 1-Click Copy for BibTeX
  const copyBibBtn = document.getElementById('copyBibBtn');
  const bibtexCode = document.getElementById('bibtexCode');

  if (copyBibBtn && bibtexCode) {
    copyBibBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bibtexCode.innerText);
        const originalText = copyBibBtn.innerText;
        copyBibBtn.innerText = 'Copied to Clipboard!';
        copyBibBtn.style.background = '#0284c7';
        copyBibBtn.style.color = '#ffffff';

        setTimeout(() => {
          copyBibBtn.innerText = originalText;
          copyBibBtn.style.background = '';
          copyBibBtn.style.color = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy BibTeX: ', err);
      }
    });
  }
});
