/* Image fallback: local project images take priority; if a local file is missing, use a web fallback. */
document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
        const fallback = img.dataset.fallback;
        if (!fallback || img.dataset.fallbackUsed === 'true') return;
        img.dataset.fallbackUsed = 'true';
        img.src = fallback;
    });
});

const mobileMenuButton=document.getElementById('mobileMenuButton');
const mobileMenu=document.getElementById('mobileMenu');
if(mobileMenuButton&&mobileMenu){mobileMenuButton.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');mobileMenuButton.setAttribute('aria-expanded',String(open));mobileMenuButton.textContent=open?'×':'☰';});mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');mobileMenuButton.setAttribute('aria-expanded','false');mobileMenuButton.textContent='☰';}));}
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const packages={
 lua:{eyebrow:'PACOTE LUA DE MEL',title:'🌴 Lua de Mel',subtitle:'7 dias e 6 noites · Para 2 pessoas',intro:'Porque algumas viagens merecem ser inesquecíveis. O Pacote Lua de Mel foi criado para casais que desejam combinar praias paradisíacas, privacidade, gastronomia e experiências românticas no litoral de Moçambique.',meta:[['Perfil','Casal'],['Destinos','Vilanculos + Benguerra'],['Hospedagem','5 estrelas']],sections:[{title:'Hospedagem',html:'<p><strong>Vilanculos:</strong> Bahia Mar Boutique Hotel<br><strong>Benguerra:</strong> Azura Benguerra Island</p><p>Hospedagem à beira-mar, spa, villas privadas, serviço personalizado e experiências no arquipélago.</p>'},{title:'Roteiro',itinerary:[['DIA 1 — CHEGADA','Voo de Belo Horizonte para Maputo, com conexão. Recepção e traslado para conexão doméstica até Vilanculos. Check-in no Bahia Mar. Jantar no hotel.'],['DIA 2 — VILANCULOS','Manhã livre. Almoço no hotel. Passeio de barco ao pôr do sol. Jantar romântico.'],['DIA 3 — VILANCULOS → BENGUERRA','Transfer organizado até Benguerra. Check-in no Azura. Tarde livre. Dhow ao pôr do sol. Jantar à beira-mar.'],['DIA 4 — BENGUERRA','Praias e snorkeling. Tarde livre. Spa para o casal. Jantar especial.'],['DIA 5 — BAZARUTO','Passeio de barco para ilhas e bancos de areia. Piquenique. Retorno ao resort.'],['DIA 6 — DIA ROMÂNTICO','Manhã e tarde livres. Jantar romântico privado.'],['DIA 7 — RETORNO','Transfer Benguerra → Vilanculos → aeroporto. Retorno ao Brasil.']]},{title:'Alimentação',html:'<ul><li>Café da manhã todos os dias.</li><li>Almoços conforme regime contratado.</li><li>Jantares.</li><li>Jantar romântico especial.</li><li>Piquenique em passeio de ilha.</li></ul>'}],price:'R$ 65.000 por casal'},
 'premium-family':{eyebrow:'PACOTE PREMIUM',title:'💎 Premium · Família',subtitle:'8 dias e 7 noites · 4 pessoas',intro:'Conforto, exclusividade e experiências especiais para toda a família.',meta:[['Perfil','Família'],['Pessoas','4'],['Categoria','Premium']],sections:[{title:'Hospedagem',html:'<p><strong>Maputo:</strong> Hotel Cardoso<br><strong>Bazaruto:</strong> Anantara Bazaruto Island Resort</p>'},{title:'Roteiro',itinerary:[['DIA 1 — MAPUTO','Chegada, traslado privado, check-in, almoço, tarde livre e jantar.'],['DIA 2 — MAPUTO','City tour privado, FEIMA, tempo para compras e artesanato.'],['DIA 3 — MAPUTO → BAZARUTO','Voo para Vilanculos, transferência ao resort, praia e jantar.'],['DIA 4 — BAZARUTO','Passeio de barco, snorkeling, atividades para crianças e tempo livre.'],['DIA 5 — BAZARUTO','Passeio privado pelas ilhas, almoço e tarde livre.'],['DIA 6 — EXPERIÊNCIAS','Atividade aquática, almoço, experiência culinária opcional e jantar.'],['DIA 7 — RELAXAMENTO','Spa para adultos, atividades para crianças e jantar especial.'],['DIA 8 — RETORNO','Transfer Bazaruto → Vilanculos → Maputo e conexão para o Brasil.']] }],price:'R$ 95.000 por família'},
 'premium-solo':{eyebrow:'PACOTE PREMIUM',title:'💎 Premium · Solo',subtitle:'7 dias e 6 noites · 1 pessoa',intro:'Uma viagem para quem busca conforto, privacidade e experiências exclusivas.',meta:[['Perfil','Solo'],['Pessoas','1'],['Categoria','Luxo']],sections:[{title:'Roteiro',itinerary:[['DIA 1','Belo Horizonte → Maputo → traslado privado → hotel 5 estrelas.'],['DIA 2','City tour privado, almoço, tarde livre e jantar.'],['DIA 3','Voo para Vilanculos, traslado para Bazaruto, praia e jantar.'],['DIA 4','Passeio privado pelas ilhas, almoço, spa e jantar.'],['DIA 5','Passeio de barco, almoço, tarde livre e jantar.'],['DIA 6','Experiência gastronômica e jantar especial.'],['DIA 7','Retorno ao Brasil.']]}],price:'R$ 48.000 por pessoa'},
 amigos:{eyebrow:'PACOTE AMIGOS',title:'🥳 Amigos',subtitle:'7 dias e 6 noites · 6 pessoas',intro:'Uma viagem para conhecer, explorar e aproveitar Moçambique em grupo.',meta:[['Perfil','Amigos'],['Pessoas','6'],['Destinos','Tofo + Vilanculos']],sections:[{title:'Hospedagem',html:'<p><strong>Tofo:</strong> Kumba Lodge<br><strong>Vilanculos:</strong> Bahia Mar Boutique Hotel</p>'},{title:'Roteiro',itinerary:[['DIA 1','Brasil → Maputo → Inhambane → Tofo. Check-in e noite livre.'],['DIA 2','Praia, atividades recreativas e jantar.'],['DIA 3','Experiência de observação da vida marinha e tempo livre.'],['DIA 4','Traslado para Vilanculos, check-in, praia e piscina.'],['DIA 5','Passeio de barco em Bazaruto, praia e snorkeling.'],['DIA 6','Mercado local e dhow ao pôr do sol.'],['DIA 7','Traslado ao aeroporto e retorno.']]}],price:'R$ 58.000 por grupo de 6 pessoas'},
 'aventura-family':{eyebrow:'PACOTE AVENTURA',title:'🧭 Aventura · Família',subtitle:'7 dias e 6 noites · 4 pessoas',intro:'Natureza, vida selvagem e experiências ao ar livre para famílias que querem explorar.',meta:[['Perfil','Família'],['Pessoas','4'],['Destinos','Gorongosa + Tofo']],sections:[{title:'Hospedagem',html:'<p><strong>Gorongosa:</strong> Montebelo Gorongosa Lodge<br><strong>Tofo:</strong> Kumba Lodge</p>'},{title:'Roteiro',itinerary:[['DIA 1 — MAPUTO','Chegada, traslado ao hotel e tarde livre.'],['DIA 2 — GORONGOSA','Transfer, check-in e primeira experiência de natureza.'],['DIA 3 — GORONGOSA','Safári guiado e experiência de conservação.'],['DIA 4 — GORONGOSA','Segundo safári e atividade de natureza.'],['DIA 5 — TOFO','Transfer para Tofo, check-in e tarde livre.'],['DIA 6 — TOFO','Observação da vida marinha, praia e jantar.'],['DIA 7 — RETORNO','Check-out, aeroporto e retorno.']]}],price:'R$ 43.000 por família'},
 'aventura-solo':{eyebrow:'PACOTE AVENTURA',title:'🧭 Aventura · Solo',subtitle:'7 dias e 6 noites · 1 pessoa',intro:'Para viajantes em busca de aventura, natureza e novas experiências.',meta:[['Perfil','Solo'],['Pessoas','1'],['Estilo','Aventura']],sections:[{title:'Roteiro',itinerary:[['DIA 1','Chegada a Maputo → hotel → livre.'],['DIA 2','Maputo → Gorongosa → check-in → atividade de natureza.'],['DIA 3','Safári guiado → almoço → conservação → jantar.'],['DIA 4','Safári → almoço → tarde livre.'],['DIA 5','Gorongosa → Tofo → check-in.'],['DIA 6','Experiência marinha → almoço → praia.'],['DIA 7','Retorno.']]}],price:'R$ 32.000 por pessoa'},
 'cultural-family':{eyebrow:'PACOTE CULTURAL',title:'🏛️ Cultural · Família',subtitle:'7 dias e 6 noites · 4 pessoas',intro:'Uma viagem pela história, arte, arquitetura e gastronomia de Moçambique.',meta:[['Perfil','Família'],['Pessoas','4'],['Destinos','Maputo + Ilha de Moçambique']],sections:[{title:'Hospedagem',html:'<p><strong>Maputo:</strong> Hotel Cardoso<br><strong>Ilha de Moçambique:</strong> Feitoria Boutique Hotel</p>'},{title:'Roteiro',itinerary:[['DIA 1 — MAPUTO','Chegada, traslado, check-in e tarde livre.'],['DIA 2 — MAPUTO','City tour, FEIMA e Museu de História Natural.'],['DIA 3 — ILHA DE MOÇAMBIQUE','Voo para Nampula, transfer e caminhada pelo centro histórico.'],['DIA 4 — ILHA','Fortaleza, Palácio, museus, mercado e artesanato.'],['DIA 5 — GASTRONOMIA','Mercado tradicional e experiência gastronômica.'],['DIA 6 — ILHA','Cidade, artesanato e jantar de despedida.'],['DIA 7 — RETORNO','Transfer, voo e conexão para o Brasil.']]}],price:'R$ 42.000 por família'},
 'cultural-solo':{eyebrow:'PACOTE CULTURAL',title:'🏛️ Cultural · Solo',subtitle:'7 dias e 6 noites · 1 pessoa',intro:'Para quem quer conhecer um destino além dos pontos turísticos.',meta:[['Perfil','Solo'],['Pessoas','1'],['Estilo','Cultural']],sections:[{title:'Roteiro',itinerary:[['DIA 1','Chegada a Maputo → hotel.'],['DIA 2','City tour → FEIMA → Museu.'],['DIA 3','Maputo → Nampula → Ilha.'],['DIA 4','Centro histórico → Fortaleza → museus → mercado.'],['DIA 5','Gastronomia → visita cultural → tarde livre.'],['DIA 6','Mercados → artesanato → jantar de despedida.'],['DIA 7','Retorno.']]}],price:'R$ 16.500 por pessoa'},
 economico:{eyebrow:'PACOTE ECONÔMICO',title:'💰 Econômico',subtitle:'7 dias e 6 noites · Solo ou família',intro:'Conheça Moçambique sem pagar por uma programação fechada. A liberdade faz parte do pacote.',meta:[['Perfil','Solo ou família'],['Hospedagem','Econômica'],['Estilo','Livre']],sections:[{title:'Importante',html:'<p><strong>ESTE PACOTE NÃO INCLUI PASSEIOS NEM ALIMENTAÇÃO.</strong></p><p>Os viajantes são encorajados a explorar a cultura local, conhecer restaurantes e escolher atividades de acordo com seus interesses.</p>'},{title:'Roteiro-base',itinerary:[['DIA 1 — CHEGADA','Voo Brasil → Maputo. Traslado simples. Restante do dia livre.'],['DIA 2 — MAPUTO','Dia livre. Sugestões: Mercado Central, Praça da Independência, FEIMA, Jardim Tunduru, Casa de Ferro e Estação dos CFM.'],['DIA 3 — MAPUTO','Dia completamente livre.'],['DIA 4 — EXPLORAÇÃO','Dia livre.'],['DIA 5 — CULTURA LOCAL','Dia livre para mercados, artesanato e culinária.'],['DIA 6 — ÚLTIMO DIA','Compras, praias, mercados ou atividades escolhidas.'],['DIA 7 — RETORNO','Check-out, aeroporto e voo.']]},{title:'Não inclui',html:'<ul><li>Café da manhã</li><li>Almoço</li><li>Jantar</li><li>Passeios</li><li>Guias</li><li>Ingressos</li><li>Atividades</li><li>Experiências extras</li><li>Transporte adicional</li></ul>'}],price:'R$ 7.500 por pessoa · R$ 25.000 por família de 4'}
};

const packageModal=document.getElementById('packageModal');const modalBody=document.getElementById('modalBody');const modalClose=document.getElementById('modalClose');const modalOverlay=document.getElementById('modalOverlay');
function openPackageModal(key){const data=packages[key];if(!data)return;let html=`<div class="modal-eyebrow">${data.eyebrow}</div><h2 class="modal-title">${data.title}</h2><div class="modal-subtitle">${data.subtitle}</div><p class="modal-intro">${data.intro}</p>`;if(data.meta){html+='<div class="modal-meta-grid">';data.meta.forEach(x=>html+=`<div class="modal-meta-card"><span>${x[0]}</span><strong>${x[1]}</strong></div>`);html+='</div>';}data.sections.forEach(s=>{html+=`<section class="modal-section"><h4>${s.title}</h4>`;if(s.html)html+=s.html;if(s.itinerary){s.itinerary.forEach(d=>html+=`<div class="itinerary-day"><h5>${d[0]}</h5><p>${d[1]}</p></div>`);}html+='</section>';});html+=`<div class="price-box"><span>PREÇO ESTIMADO</span><strong>${data.price}</strong><p>Valor apresentado para o projeto. Tarifas reais podem variar conforme datas, temporada, disponibilidade, câmbio e fornecedores.</p></div>`;modalBody.innerHTML=html;packageModal.classList.add('open');packageModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closePackageModal(){packageModal.classList.remove('open');packageModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('[data-package]').forEach(b=>b.addEventListener('click',()=>openPackageModal(b.dataset.package)));modalClose.addEventListener('click',closePackageModal);modalOverlay.addEventListener('click',closePackageModal);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&packageModal.classList.contains('open'))closePackageModal();});

const steps=[...document.querySelectorAll('.builder-step')];const next=document.getElementById('builderNext');const back=document.getElementById('builderBack');const progressFill=document.getElementById('progressFill');const progressText=document.getElementById('progressText');const count=document.getElementById('peopleCount');const result=document.getElementById('builderResult');let step=1;let trip={traveler:'Sozinho',people:1,experiences:[],duration:'7 dias',budget:'Intermediário'};
function showStep(n){step=n;steps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===n));progressFill.style.width=`${n*20}%`;progressText.textContent=`${n} / 5`;back.style.visibility=n===1?'hidden':'visible';next.style.display=n===5?'none':'inline-flex';}
showStep(1);
document.querySelectorAll('[data-step="1"] .choice-button').forEach(b=>b.addEventListener('click',()=>{trip.traveler=b.dataset.value;document.querySelectorAll('[data-step="1"] .choice-button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');}));
document.getElementById('increasePeople').addEventListener('click',()=>{if(trip.people<12){trip.people++;count.textContent=trip.people}});document.getElementById('decreasePeople').addEventListener('click',()=>{if(trip.people>1){trip.people--;count.textContent=trip.people}});
document.querySelectorAll('.experience-button').forEach(b=>b.addEventListener('click',()=>{const x=b.dataset.experience;const i=trip.experiences.indexOf(x);if(i<0){trip.experiences.push(x);b.classList.add('selected')}else{trip.experiences.splice(i,1);b.classList.remove('selected')}}));
document.querySelectorAll('[data-step="4"] .choice-button').forEach(b=>b.addEventListener('click',()=>{trip.duration=b.dataset.value;document.querySelectorAll('[data-step="4"] .choice-button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')}));
document.querySelectorAll('.budget-button').forEach(b=>b.addEventListener('click',()=>{trip.budget=b.dataset.budget;document.querySelectorAll('.budget-button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');showResult()}));
next.addEventListener('click',()=>{if(step<5){showStep(step+1)}});back.addEventListener('click',()=>{if(step>1)showStep(step-1)});
function routeFor(){const e=trip.experiences;if(e.includes('Safári'))return['Maputo → Gorongosa → Tofo','Natureza, vida selvagem e mar.'];if(e.includes('Cultura e história')&&e.includes('Praias e ilhas'))return['Maputo → Ilha de Moçambique → Bazaruto','História, cultura e praias na mesma jornada.'];if(e.includes('Cultura e história'))return['Maputo → Ilha de Moçambique','Uma jornada pela história, arquitetura, mercados e gastronomia.'];if(e.includes('Luxo e relaxamento'))return['Vilanculos → Benguerra → Bazaruto','Praias exclusivas e experiências sofisticadas.'];if(e.includes('Aventura'))return['Gorongosa → Tofo','Safári, natureza e experiências ao ar livre.'];if(e.includes('Gastronomia'))return['Maputo → Ilha de Moçambique → Vilanculos','Cultura, mercados e sabores locais.'];return['Vilanculos → Bazaruto → Benguerra','Praias, ilhas, águas cristalinas e tempo para relaxar.'];}
function estimate(){const base={Econômico:7500,Intermediário:11500,Premium:18000}[trip.budget];const dur={'3 dias':.48,'5 dias':.72,'7 dias':1,'10 dias':1.38,Personalizado:1.15}[trip.duration]||1;const people=1+(trip.people-1)*.72;const exp=1+Math.max(0,trip.experiences.length-1)*.09;return Math.round(base*dur*people*exp/100)*100;}
function showResult(){const [route,text]=routeFor();document.getElementById('resultPeople').textContent=`${trip.people} ${trip.people===1?'pessoa':'pessoas'}`;document.getElementById('resultExperiences').textContent=trip.experiences.length?trip.experiences.join(', '):'Experiências livres';document.getElementById('resultDuration').textContent=trip.duration;document.getElementById('resultBudget').textContent=trip.budget;document.getElementById('resultRoute').textContent=route;document.getElementById('resultText').textContent=text;document.getElementById('resultPrice').textContent=`R$ ${estimate().toLocaleString('pt-BR')}`;result.classList.add('visible');result.scrollIntoView({behavior:'smooth',block:'center'});}

/* =====================================================
   FIXED SITE INTERACTIONS
===================================================== */

// 1) Start journey chooser
const startJourneyButton = document.getElementById('startJourneyButton');
const journeyModal = document.getElementById('journeyModal');
const journeyModalClose = document.getElementById('journeyModalClose');
const journeyModalOverlay = document.getElementById('journeyModalOverlay');
const startExplorePackages = document.getElementById('startExplorePackages');
const startBuildTrip = document.getElementById('startBuildTrip');

function openJourneyModal() {
    if (!journeyModal) return;
    journeyModal.classList.add('open');
    journeyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeJourneyModal() {
    if (!journeyModal) return;
    journeyModal.classList.remove('open');
    journeyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

startJourneyButton?.addEventListener('click', openJourneyModal);
journeyModalClose?.addEventListener('click', closeJourneyModal);
journeyModalOverlay?.addEventListener('click', closeJourneyModal);
startExplorePackages?.addEventListener('click', closeJourneyModal);
startBuildTrip?.addEventListener('click', () => {
    closeJourneyModal();
});


// 2) Format itinerary text so literal \\n sequences never appear in the modal.
function formatItineraryText(value) {
    const normalized = String(value ?? '')
        .replace(/\\n/g, '\n')
        .replace(/\r\n/g, '\n');

    return normalized
        .split(/\n+/)
        .filter(Boolean)
        .map(part => `<p>${part}</p>`)
        .join('');
}


// 3) Rebind package modal with clean itinerary formatting.
function openPackageModalFixed(key) {
    const data = packages[key];
    if (!data || !modalBody || !packageModal) return;

    let html = `
        <div class="modal-eyebrow">${data.eyebrow}</div>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-subtitle">${data.subtitle}</div>
        <p class="modal-intro">${data.intro}</p>
    `;

    if (data.meta) {
        html += '<div class="modal-meta-grid">';
        data.meta.forEach(item => {
            html += `
                <div class="modal-meta-card">
                    <span>${item[0]}</span>
                    <strong>${item[1]}</strong>
                </div>
            `;
        });
        html += '</div>';
    }

    data.sections.forEach(section => {
        html += `<section class="modal-section"><h4>${section.title}</h4>`;

        if (section.html) {
            html += section.html;
        }

        if (section.itinerary) {
            section.itinerary.forEach(day => {
                const dayTitle = Array.isArray(day) ? day[0] : day.day;
                const dayText = Array.isArray(day) ? day[1] : day.text;

                html += `
                    <div class="itinerary-day">
                        <h5>${dayTitle}</h5>
                        <div class="itinerary-copy">
                            ${formatItineraryText(dayText)}
                        </div>
                    </div>
                `;
            });
        }

        html += '</section>';
    });

    html += `
        <div class="price-box">
            <span>PREÇO ESTIMADO</span>
            <strong>${data.price}</strong>
            <p>
                Valor apresentado para o projeto. Tarifas reais podem variar
                conforme datas, temporada, disponibilidade, câmbio e fornecedores.
            </p>
        </div>
    `;

    modalBody.innerHTML = html;
    packageModal.classList.add('open');
    packageModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

document.querySelectorAll('[data-package]').forEach(button => {
    button.onclick = () => openPackageModalFixed(button.dataset.package);
});


// 4) Generate a unique personalized-package result modal.
const generatedModal = document.getElementById('generatedModal');
const generatedModalOverlay = document.getElementById('generatedModalOverlay');
const generatedModalClose = document.getElementById('generatedModalClose');
const generatedSummary = document.getElementById('generatedSummary');
const generatedExplore = document.getElementById('generatedExplore');
const generatedRestart = document.getElementById('generatedRestart');
const generatePackageButton = document.getElementById('generatePackage');

function openGeneratedModal() {
    if (!generatedModal || !generatedSummary) return;

    const [route, description] = routeFor();
    const estimateValue = estimate();
    const experiences = trip.experiences.length ? trip.experiences.join(', ') : 'Experiências livres';

    generatedSummary.innerHTML = `
        <div class="generated-summary-card">
            <span>PERFIL</span>
            <strong>${trip.traveler} · ${trip.people} ${trip.people === 1 ? 'pessoa' : 'pessoas'}</strong>
        </div>

        <div class="generated-summary-card">
            <span>EXPERIÊNCIAS</span>
            <strong>${experiences}</strong>
        </div>

        <div class="generated-summary-card">
            <span>ROTA SUGERIDA</span>
            <strong>${route}</strong>
            <p>${description}</p>
        </div>

        <div class="generated-summary-card">
            <span>VIAGEM</span>
            <strong>${trip.duration} · ${trip.budget}</strong>
            <p>Estimativa: <strong>R$ ${estimateValue.toLocaleString('pt-BR')}</strong></p>
        </div>
    `;

    generatedModal.classList.add('open');
    generatedModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeGeneratedModal() {
    if (!generatedModal) return;
    generatedModal.classList.remove('open');
    generatedModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

generatePackageButton?.addEventListener('click', openGeneratedModal);
generatedModalClose?.addEventListener('click', closeGeneratedModal);
generatedModalOverlay?.addEventListener('click', closeGeneratedModal);

generatedExplore?.addEventListener('click', () => {
    closeGeneratedModal();
    document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' });
});

generatedRestart?.addEventListener('click', () => {
    closeGeneratedModal();
    trip = { traveler: 'Sozinho', people: 1, experiences: [], duration: '7 dias', budget: 'Intermediário' };
    if (count) count.textContent = '1';
    document.querySelectorAll('.choice-button,.experience-button,.budget-button').forEach(b => b.classList.remove('selected'));
    result?.classList.remove('visible');
    showStep(1);
    document.getElementById('montar')?.scrollIntoView({ behavior: 'smooth' });
});


// 5) Keyboard close for both modal types.
document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeJourneyModal();
    closeGeneratedModal();
    if (packageModal?.classList.contains('open')) {
        closePackageModal();
    }
});
