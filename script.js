function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('visible');
    sec.classList.add('hidden');
  });
  const target = document.getElementById(id);
  target.classList.remove('hidden');
  setTimeout(() => target.classList.add('visible'), 10);
}

const gameInfo = {
  'DragonBall Sparking Zero': {
    title: 'DragonBall Sparking Zero',
    desc: 'Un emocionante juego de lucha basado en el universo de DragonBall.',
    release: '22 de diciembre de 2004',
    requirements: 'Windows XP, 1 GB RAM, GPU compatible con DirectX 9',
    download: 'https://gofile.io/d/vXn1Yr'
  },
  'Mortal Kombat 9': {
    title: 'Mortal Kombat 9',
    desc: 'Un juego de lucha que revive la serie clásica con nuevos personajes y movimientos.',
    release: '19 de abril de 2011',
    requirements: 'Windows Vista, 2 GB RAM, GPU compatible con DirectX 9',
    download: 'https://www.mediafire.com/file/797gmgieqsz7buz/Mortal+Kombat+9+Opti+V2.7z/file'
  },
  'DragonBall Xenoverse 2': {
    title: 'DragonBall Xenoverse 2',
    desc: 'Un RPG de acción en el que puedes crear tu propio personaje y luchar junto a los héroes de DragonBall.',
    release: '25 de octubre de 2016',
    requirements: 'Windows 7, 4 GB RAM, GPU compatible con DirectX 11',
    download: 'https://gofile.io/d/rICiCM'
  },
  'DragonBall Xenoverse 1': {
    title: 'DragonBall Xenoverse 1',
    desc: 'El primer título de la serie Xenoverse que permite a los jugadores interactuar con el mundo de DragonBall.',
    release: '17 de febrero de 2015',
    requirements: 'Windows 7, 4 GB RAM, GPU compatible con DirectX 11',
    download: 'https://www.mediafire.com/file/wwq4806ffsvv15f/Dragonball+XV.7z/file'
  },
  'The Long Drive': {
    title: 'The Long Drive',
    desc: 'Un juego de conducción en un mundo abierto donde la exploración es clave.',
    release: '23 de octubre de 2019',
    requirements: 'Windows 7, 4 GB RAM, GPU compatible con DirectX 10',
    download: 'https://www.mediafire.com/file/um66a5b7o7tvj1c'
  },
  'Red Dead Redemption 1': {
    title: 'Red Dead Redemption 1',
    desc: 'Un juego de acción y aventura ambientado en el viejo oeste estadounidense.',
    release: '18 de mayo de 2010',
    requirements: 'Windows 7, 4 GB RAM, GPU compatible con DirectX 9',
    download: 'https://www.mediafire.com/file/q7ugs0i9m0xfwq9'
  },
  'Resident Evil 6': {
    title: 'Resident Evil 6',
    desc: 'Un juego de horror y acción donde los jugadores enfrentan a diversas criaturas.',
    release: '2 de octubre de 2012',
    requirements: 'Windows 7, 4 GB RAM, GPU compatible con DirectX 9',
    download: 'https://www.mediafire.com/file/r2wqqpdem6odxaz'
  },
  'Tomb Raider 2013': {
    title: 'Tomb Raider 2013',
    desc: 'Una reinvención del clásico juego de aventuras con Lara Croft.',
    release: '5 de marzo de 2013',
    requirements: 'Windows 7, 4 GB RAM, GPU compatible con DirectX 9',
    download: 'https://littletest-sorryplease.hf.space/Tomb%20Raider%20Optimized.zip?download=true'
  },
  'South Park - The Stick of Truth': {
    title: 'South Park - The Stick of Truth',
    desc: 'Un juego de rol basado en la popular serie de televisión.',
    release: '4 de marzo de 2014',
    requirements: 'Windows 7, 2 GB RAM, GPU compatible con DirectX 9',
    download: 'https://www.mediafire.com/file/2bg0859dwmz5e01'
  },
  'Call Of Duty: Black Ops 2': {
    title: 'Call Of Duty: Black Ops 2',
    desc: 'Un shooter en primera persona con una campaña emocionante y multijugador.',
    release: '13 de noviembre de 2012',
    requirements: 'Windows Vista, 2 GB RAM, GPU compatible con DirectX 9',
    download: 'https://littletest-sorryplease.hf.space/Call%20of%20Duty%20Black%20Ops%202%20OptiPana.zip?download=true'
  },
  'Optimizar Pc': {
    title: 'Optimizar Pc',
    desc: 'Un programa diseñado para mejorar el rendimiento de tu computadora.',
    release: 'Fecha no especificada',
    requirements: 'Windows 7 o superior',
    download: 'https://gofile.io/d/GfKHbE'
  },
  'Photoshop 2022': {
    title: 'Photoshop 2022',
    desc: 'El software líder para la edición de imágenes y diseño gráfico.',
    release: '23 de octubre de 2021',
    requirements: 'Windows 10, 8 GB RAM, GPU compatible con DirectX 12',
    download: 'https://www.mediafire.com/file/4mz72e83ymmzrgf'
  }
};

function openModal(name, card) {
  const modal = document.getElementById('gameModal');
  const content = document.getElementById('modalContent');
  const data = gameInfo[name];

  // Remover aura de otras tarjetas
  document.querySelectorAll('.game-card').forEach(c => c.classList.remove('selected'));
  // Agregar aura a la tarjeta seleccionada
  card.classList.add('selected');

  if (!data) return;

  content.innerHTML = `
    <h2>${data.title}</h2>
    <p><strong>Descripción:</strong> ${data.desc}</p>
    <p><strong>Lanzamiento:</strong> ${data.release}</p>
    <p><strong>Requisitos:</strong> ${data.requirements}</p>
    <a href="${data.download}" class="download-btn" target="_blank">Descargar</a>
  `;
  modal.style.display = 'flex';
}

document.getElementById('gameModal').addEventListener('click', function(e) {
  if (e.target === this)
