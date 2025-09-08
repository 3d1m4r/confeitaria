// Course modules data
const courseModules = [
    { 
        emoji: "🧁", 
        title: "Chantininho", 
        description: "Receitas exclusivas do doce que mais vende em festas e eventos especiais",
        profit: "R$ 300-600/dia",
        difficulty: "Fácil"
    },
    { 
        emoji: "🌈", 
        title: "Macarrons", 
        description: "O segredo dos macarrons franceses que vendem por R$ 8-12 cada um",
        profit: "R$ 400-800/dia",
        difficulty: "Intermediário"
    },
    { 
        emoji: "💍", 
        title: "Bem Casado", 
        description: "Fature alto em casamentos com esta receita tradicional e lucrativa",
        profit: "R$ 500-1000/evento",
        difficulty: "Fácil"
    },
    { 
        emoji: "🍮", 
        title: "Pudim", 
        description: "Variações do pudim que conquistam qualquer paladar e garantem recompra",
        profit: "R$ 200-400/dia",
        difficulty: "Muito Fácil"
    },
    { 
        emoji: "🍩", 
        title: "Donuts", 
        description: "Donuts artesanais que vendem como água no mercado atual",
        profit: "R$ 350-700/dia",
        difficulty: "Fácil"
    },
    { 
        emoji: "🧁", 
        title: "Cupcake", 
        description: "Cupcakes gourmet com técnicas profissionais de decoração",
        profit: "R$ 250-500/dia",
        difficulty: "Fácil"
    },
    { 
        emoji: "🎄", 
        title: "Panetone & Chocotone", 
        description: "Doces natalinos que geram renda extra no fim do ano",
        profit: "R$ 800-2000/mês",
        difficulty: "Intermediário"
    },
    { 
        emoji: "🎂", 
        title: "Bolos Caseiros", 
        description: "Bolos irresistíveis para aniversários e comemorações",
        profit: "R$ 400-800/dia",
        difficulty: "Fácil"
    },
    { 
        emoji: "🍫", 
        title: "Brigadeiro Gourmet", 
        description: "Brigadeiros sofisticados que vendem por R$ 3-6 cada unidade",
        profit: "R$ 300-900/dia",
        difficulty: "Muito Fácil"
    },
    { 
        emoji: "🍿", 
        title: "Pipoca Gourmet", 
        description: "Negócio da pipoca gourmet com margem de lucro de até 400%",
        profit: "R$ 200-600/dia",
        difficulty: "Muito Fácil"
    }
];

// Benefits data
const benefits = [
    { 
        icon: "dollar-sign", 
        title: "Lucro de até 40x o investimento", 
        description: "Invista R$ 9,90 e fature até R$ 4.000/mês. ROI comprovado de nossas alunas!", 
        bgGradient: "from-green-100 to-green-200",
        iconColor: "text-green-600",
        stat: "+890% ROI médio"
    },
    { 
        icon: "zap", 
        title: "Resultados em 7 Dias", 
        description: "Método testado que garante sua primeira venda na primeira semana", 
        bgGradient: "from-blue-100 to-blue-200",
        iconColor: "text-blue-600",
        stat: "97% vendem em 7 dias"
    },
    { 
        icon: "heart", 
        title: "Suporte Vitalício", 
        description: "Comunidade exclusiva de apoio com mentoria contínua", 
        bgGradient: "from-purple-100 to-purple-200",
        iconColor: "text-purple-600",
        stat: "Suporte 24/7"
    },
    { 
        icon: "target", 
        title: "Método Validado", 
        description: "Fórmula testada e aprovada por +5.247 alunas em todo o Brasil", 
        bgGradient: "from-orange-100 to-orange-200",
        iconColor: "text-orange-600",
        stat: "98% de aprovação"
    }
];

// Testimonials data
const testimonials = [
    {
        id: 1,
        text: "Em 30 dias já estava faturando R$ 2.500 por mês! As receitas são incríveis e realmente funcionam.",
        name: "Maria Silva",
        location: "São Paulo, SP"
    },
    {
        id: 2,
        text: "Consegui sair do desemprego e hoje tenho minha própria confeitaria. Gratidão eterna!",
        name: "Ana Costa",
        location: "Rio de Janeiro, RJ"
    },
    {
        id: 3,
        text: "Os brigadeiros gourmet são meu carro-chefe. Faturei R$ 3.800 só no último mês!",
        name: "Carla Oliveira",
        location: "Belo Horizonte, MG"
    }
];

// FAQ data
const faqs = [
    {
        question: "Meus dados estão protegidos nesse site?",
        answer: "Sim, utilizamos sistemas de pagamento com certificação de segurança SSL e criptografia de dados de nível bancário para proteger todas as suas informações."
    },
    {
        question: "Quanto tempo tenho para acessar o conteúdo?",
        answer: "O acesso é vitalício! Você pode baixar as apostilas e acessar o conteúdo quando quiser, quantas vezes precisar."
    },
    {
        question: "Preciso de experiência prévia em confeitaria?",
        answer: "Não! O curso foi desenvolvido para iniciantes. Todas as receitas têm passo a passo detalhado e dicas para garantir o sucesso mesmo de quem nunca fez doces antes."
    },
    {
        question: "Existe garantia de satisfação?",
        answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro."
    },
    {
        question: "Como recebo o material após a compra?",
        answer: "Imediatamente após a aprovação do pagamento, você recebe por email o link para download de todas as apostilas em PDF e acesso à área de membros exclusiva."
    }
];

// Purchase notifications data
const notifications = [
    { id: 1, name: "Maria S.", location: "São Paulo, SP", timeAgo: "3 min" },
    { id: 2, name: "Ana C.", location: "Rio de Janeiro, RJ", timeAgo: "7 min" },
    { id: 3, name: "Lucia P.", location: "Belo Horizonte, MG", timeAgo: "12 min" },
    { id: 4, name: "Carmen R.", location: "Salvador, BA", timeAgo: "18 min" },
    { id: 5, name: "Rosa M.", location: "Fortaleza, CE", timeAgo: "25 min" },
    { id: 6, name: "Fatima L.", location: "Brasília, DF", timeAgo: "31 min" },
    { id: 7, name: "Sandra O.", location: "Curitiba, PR", timeAgo: "38 min" },
    { id: 8, name: "Vera A.", location: "Recife, PE", timeAgo: "45 min" }
];

// Countdown Timer
let countdownInterval;

function initCountdownTimer() {
    let timeLeft = {
        hours: 23,
        minutes: 59,
        seconds: 59
    };

    countdownInterval = setInterval(() => {
        if (timeLeft.seconds > 0) {
            timeLeft.seconds--;
        } else if (timeLeft.minutes > 0) {
            timeLeft.seconds = 59;
            timeLeft.minutes--;
        } else if (timeLeft.hours > 0) {
            timeLeft.seconds = 59;
            timeLeft.minutes = 59;
            timeLeft.hours--;
        } else {
            // Reset to 24 hours when countdown reaches 0
            timeLeft.hours = 23;
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
        }

        // Update display
        document.getElementById('countdown-hours').textContent = timeLeft.hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = timeLeft.minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = timeLeft.seconds.toString().padStart(2, '0');
    }, 1000);
}

// Testimonial Carousel
let currentTestimonialIndex = 0;
let testimonialInterval;

function createTestimonials() {
    const testimonialTrack = document.getElementById('testimonial-track');
    const testimonialDots = document.getElementById('testimonial-dots');
    
    testimonials.forEach((testimonial, index) => {
        // Create testimonial slide
        const slide = document.createElement('div');
        slide.className = 'w-full flex-shrink-0 bg-white p-8 mx-2 rounded-2xl shadow-lg';
        slide.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 flex items-center justify-center">
                    <i data-lucide="user" class="text-white text-2xl"></i>
                </div>
                <p class="text-lg mb-4 italic">"${testimonial.text}"</p>
                <h4 class="font-bold text-primary">${testimonial.name}</h4>
                <span class="text-muted-foreground">${testimonial.location}</span>
            </div>
        `;
        testimonialTrack.appendChild(slide);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-primary opacity-100' : 'bg-muted-foreground opacity-50'}`;
        dot.setAttribute('data-testid', `carousel-dot-${index}`);
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDots.appendChild(dot);
    });
}

function updateTestimonialCarousel() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('#testimonial-dots button');
    
    track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        if (index === currentTestimonialIndex) {
            dot.className = 'w-3 h-3 rounded-full transition-all bg-primary opacity-100';
        } else {
            dot.className = 'w-3 h-3 rounded-full transition-all bg-muted-foreground opacity-50';
        }
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialCarousel();
}

function previousTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialCarousel();
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateTestimonialCarousel();
}

function initTestimonialCarousel() {
    createTestimonials();
    
    // Auto-rotate testimonials
    testimonialInterval = setInterval(nextTestimonial, 5000);
    
    // Event listeners for navigation
    document.getElementById('testimonial-prev').addEventListener('click', previousTestimonial);
    document.getElementById('testimonial-next').addEventListener('click', nextTestimonial);
    
    // Reinitialize Lucide icons for testimonials
    lucide.createIcons();
}

// FAQ Functionality
let openFAQIndex = null;

function createFAQs() {
    const faqSection = document.getElementById('faq-section');
    
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'border border-border rounded-lg overflow-hidden';
        faqItem.innerHTML = `
            <button class="w-full px-6 py-4 text-left bg-muted hover:bg-muted/80 transition-colors flex justify-between items-center" data-testid="faq-question-${index}">
                <span class="font-semibold">${faq.question}</span>
                <i data-lucide="chevron-down" class="transition-transform duration-300"></i>
            </button>
            <div class="px-6 overflow-hidden transition-all duration-300 max-h-0" data-testid="faq-answer-${index}">
                <p class="text-muted-foreground py-4">${faq.answer}</p>
            </div>
        `;
        
        const button = faqItem.querySelector('button');
        const answer = faqItem.querySelector('[data-testid^="faq-answer"]');
        const icon = faqItem.querySelector('[data-lucide="chevron-down"]');
        
        button.addEventListener('click', () => {
            const isOpen = openFAQIndex === index;
            
            // Close all FAQs
            document.querySelectorAll('#faq-section [data-testid^="faq-answer"]').forEach(el => {
                el.style.maxHeight = '0';
            });
            document.querySelectorAll('#faq-section [data-lucide="chevron-down"]').forEach(el => {
                el.style.transform = 'rotate(0deg)';
            });
            
            if (!isOpen) {
                // Open this FAQ
                answer.style.maxHeight = '24rem';
                icon.style.transform = 'rotate(180deg)';
                openFAQIndex = index;
            } else {
                openFAQIndex = null;
            }
        });
        
        faqSection.appendChild(faqItem);
    });
}

// Course Modules
function createCourseModules() {
    const modulesContainer = document.getElementById('course-modules');
    
    courseModules.forEach((module, index) => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/20 scale-hover';
        moduleCard.setAttribute('data-testid', `module-${index}`);
        moduleCard.style.animationDelay = `${index * 0.1}s`;
        
        moduleCard.innerHTML = `
            <div class="text-5xl mb-4 animate-bounce" style="animation-delay: ${index * 0.1}s">${module.emoji}</div>
            <h3 class="text-2xl font-black mb-3 text-primary">${module.title}</h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">${module.description}</p>
            
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-green-600">💰 Potencial:</span>
                    <span class="text-sm font-bold text-green-700">${module.profit}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-blue-600">📊 Dificuldade:</span>
                    <span class="text-sm font-bold text-blue-700">${module.difficulty}</span>
                </div>
            </div>
            
            <div class="mt-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <p class="text-xs text-center font-bold text-primary">
                    ✅ Receita testada por +500 alunas
                </p>
            </div>
        `;
        
        modulesContainer.appendChild(moduleCard);
    });
}

// Benefits Section
function createBenefits() {
    const benefitsContainer = document.getElementById('benefits-section');
    
    benefits.forEach((benefit, index) => {
        const benefitCard = document.createElement('div');
        benefitCard.className = `p-6 rounded-2xl bg-gradient-to-br ${benefit.bgGradient} border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 scale-hover text-center`;
        benefitCard.setAttribute('data-testid', `benefit-${index}`);
        
        benefitCard.innerHTML = `
            <div class="w-16 h-16 ${benefit.iconColor} bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i data-lucide="${benefit.icon}" style="width: 32px; height: 32px;"></i>
            </div>
            <h3 class="text-2xl font-black mb-3 text-gray-800">${benefit.title}</h3>
            <p class="text-gray-700 mb-4 leading-relaxed">${benefit.description}</p>
            <div class="inline-block ${benefit.iconColor} bg-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                ${benefit.stat}
            </div>
        `;
        
        benefitsContainer.appendChild(benefitCard);
    });
}

// Purchase Notifications
let currentNotification = null;
let notificationTimeout;

function showPurchaseNotification() {
    const notification = document.getElementById('purchase-notification');
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    
    // Update notification content
    document.getElementById('notification-name').textContent = randomNotification.name;
    document.getElementById('notification-location').textContent = randomNotification.location;
    document.getElementById('notification-time').textContent = randomNotification.timeAgo;
    
    // Show notification
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Hide notification after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, 4000);
}

function initPurchaseNotifications() {
    // Show first notification after 8 seconds
    setTimeout(showPurchaseNotification, 8000);
    
    // Then show notifications every 15-25 seconds
    setInterval(() => {
        showPurchaseNotification();
    }, Math.random() * 10000 + 15000); // Random between 15-25 seconds
}

// Sticky CTA
function initStickyCTA() {
    const stickyCTA = document.getElementById('sticky-cta');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            stickyCTA.style.display = 'block';
        } else {
            stickyCTA.style.display = 'none';
        }
    });
}

// Scroll Functions
function scrollToVideo() {
    document.getElementById('video').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToOffer() {
    document.getElementById('oferta').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Purchase Functions
function comprarAgora() {
    // Replace with your actual payment link
    window.open('https://pay.hotmart.com/seu-link-de-pagamento', '_blank');
}

function comprarPix() {
    // Replace with your actual PIX payment link
    window.open('https://pay.hotmart.com/seu-link-pix', '_blank');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initCountdownTimer();
    initTestimonialCarousel();
    createFAQs();
    createCourseModules();
    createBenefits();
    initPurchaseNotifications();
    initStickyCTA();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add click event listeners for CTA buttons
    document.querySelectorAll('button[onclick="scrollToVideo()"]').forEach(button => {
        button.addEventListener('click', scrollToVideo);
    });
    
    document.querySelectorAll('button[onclick="scrollToOffer()"]').forEach(button => {
        button.addEventListener('click', scrollToOffer);
    });
    
    document.querySelectorAll('button[onclick="comprarAgora()"]').forEach(button => {
        button.addEventListener('click', comprarAgora);
    });
    
    document.querySelectorAll('button[onclick="comprarPix()"]').forEach(button => {
        button.addEventListener('click', comprarPix);
    });
});

// Cleanup intervals when page unloads
window.addEventListener('beforeunload', function() {
    if (countdownInterval) clearInterval(countdownInterval);
    if (testimonialInterval) clearInterval(testimonialInterval);
    if (notificationTimeout) clearTimeout(notificationTimeout);
});