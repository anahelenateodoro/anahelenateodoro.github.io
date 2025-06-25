document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 600 });

  // Typewriter…
  const nameText = 'Ana Helena';
  const nameEl = document.getElementById('typed-name');
  let idx = 0;
  function typeWriter() {
    if (!nameEl) return;
    if (idx < nameText.length) {
      nameEl.textContent += nameText[idx++];
      setTimeout(typeWriter, 150);
    } else {
      nameEl.style.borderRight = 'none';
    }
  }
  setTimeout(typeWriter, 800);
  // Skills por categoria
  const skillsByCat = {
    frameworks: [
      { name: 'WordPress', slug: 'wordpress' }
    ],
    languages: [
      { name: 'C',      slug: 'c'      },
      { name: 'Java',   slug: 'java'   },
      { name: 'Python', slug: 'python' },
      { name: 'Golang', slug: 'go'     },
      { name: 'SQL',    slug: 'mysql'  }
    ],
    tools: [
      { name: 'AWS',                   slug: 'amazonaws'         },
      { name: 'Google Cloud Platform',slug: 'googlecloud'      },
      { name: 'Docker',                slug: 'docker'           },
      { name: 'Databricks',            slug: 'databricks'        },
      { name: 'MongoDB',               slug: 'mongodb'          },
      { name: 'Firebase',              slug: 'firebase'         },
      { name: 'Git',                   slug: 'git'              },
      { name: 'GitHub',                slug: 'github'           },
      { name: 'VS Code',               slug: 'visualstudiocode' },
      { name: 'Postman',               slug: 'postman'          }
    ],
    competencies: [
      { name: 'Problem Solving'   },
      { name: 'Presentations'     },
      { name: 'Oratory'           }
    ]
  };

  Object.entries(skillsByCat).forEach(([catId, skills], ci) => {
    const grid = document.querySelector(`#${catId} .skills-grid`);
    if (!grid) {
      console.error(`Wrapper #${catId} não encontrado`);
      return;
    }
    skills.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.setAttribute('data-aos', 'flip-up');
      card.setAttribute('data-aos-delay', ci * 200 + i * 100);

      // Se tiver slug, coloca ícone; senão só o texto
      let inner = '';
      if (s.slug) {
        const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${s.slug}.svg`;
        inner += `<img src="${iconUrl}" alt="${s.name}" />`;
      }
      inner += `<span>${s.name}</span>`;
      card.innerHTML = inner;

      grid.appendChild(card);
    });
  });
});