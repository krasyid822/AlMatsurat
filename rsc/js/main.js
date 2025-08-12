document.addEventListener('DOMContentLoaded', () => {

    // --- SELECTORS --- //
    const B = document.body;
    const Root = document.documentElement;
    const Selectors = {
        loadingScreen: document.getElementById('loading-screen'),
        loadingInfo: document.getElementById('loading-info'),
        loadingMessage: document.getElementById('loading-message'),
        progressBarFill: document.getElementById('progress-bar-fill'),
        percentageText: document.getElementById('percentage'),
        mainContent: document.getElementById('utama'),
        homeView: document.getElementById('home-view'),
        dzikirView: document.getElementById('dzikir-view'),
        dzikirTitle: document.getElementById('dzikir-title'),
        dzikirSubtitle: document.getElementById('dzikir-subtitle'),
        contentContainer: document.getElementById('content-container'),
        counter: document.getElementById('counter'),
        clickButton: document.getElementById('clickButton'),
        resetButton: document.getElementById('resetButton'),
        darkToggle: document.getElementById('darkToggle'),
        fontSlider: document.getElementById('fontSlider'),
        listenContainer: document.getElementById('listen-container'),
    };

    const AudioElements = {
        pagi: document.getElementById('audioPagi'),
        pagi2: document.getElementById('audioPagi2'),
        sore: document.getElementById('audioSore'),
        rabithah: document.getElementById('audioRabithah'),
        istighfar: document.getElementById('audioIstighfar'),
        kafaratul: document.getElementById('audioKafaratul'),
        sfx: { nav: document.getElementById('sfxNav'), info: document.getElementById('sfxInfo'), reset: document.getElementById('sfxReset'), }
    };

    // --- STATE --- //
    const State = {
        count: 0,
        activeAudio: null,
        activeListener: null,
        currentView: 'home',
        loadingMessageInterval: null,
    };
    
    // --- ASSETS & LOADING --- //
    const ASSETS_TO_LOAD = [ "rsc/css/style.css", "rsc/js/main.js", "manifest.json", "service-worker.js", "rsc/png/icon.png", "rsc/woff2/AlQuran-IndoPak-by-QuranWBW.v.4.2.2-WL.woff2", "rsc/opus/Al.Matsurat.Pagi-000.opus", "rsc/opus/Al.Matsurat.Pagi-001.opus", "rsc/opus/Al.Matsurat.Petang-Trim.opus", "rsc/opus/Rabithah_ai.opus", "rsc/opus/ast.opus", "rsc/opus/kafaratul.opus", "rsc/wav/nav_boost.wav", "rsc/wav/info_boost.wav", "rsc/wav/recycle_boost.wav" ];
    const LOADING_MESSAGES = [ "Mengumpulkan berkah...", "Menyiapkan ketenangan jiwa...", "Memuat dzikir pagi & petang...", "Sedang mengunduh kebaikan...", "Menghubungkan hati dengan Ilahi...", "Hampir selesai..." ];

    // --- AUDIO CONTROLLER --- //
    const AudioController = {
        play: (audioElement, startTime, endTime, isLoop = false) => {
            AudioController.stop();
            if (!audioElement) return;
            audioElement.currentTime = startTime;
            audioElement.play();
            State.activeAudio = audioElement;
            if (isLoop) {
                audioElement.loop = true;
            } else {
                audioElement.loop = false;
                State.activeListener = () => { if (audioElement.currentTime >= endTime) { audioElement.currentTime = startTime; audioElement.play(); } };
                audioElement.addEventListener('timeupdate', State.activeListener);
            }
        },
        stop: () => {
            if (State.activeAudio) {
                State.activeAudio.pause();
                if (State.activeListener) {
                    State.activeAudio.removeEventListener('timeupdate', State.activeListener);
                }
                State.activeAudio.loop = false;
                State.activeAudio = null;
                State.activeListener = null;
            }
            Object.values(AudioElements).forEach(audio => { if (typeof audio.pause === 'function' && !audio.paused) { audio.pause(); } });
        },
        playSoundEffect: (sfx) => { if (sfx) { sfx.currentTime = 0; sfx.play(); } }
    };

    // --- UI CONTROLLER --- //
    const UI = {
        setView: (view) => {
            State.currentView = view;
            window.location.hash = '';
            if (view === 'home') {
                Selectors.homeView.classList.remove('hidden');
                Selectors.dzikirView.classList.add('hidden');
                document.title = "Al Matsurat";
                AudioController.stop();
            } else {
                Selectors.homeView.classList.add('hidden');
                Selectors.dzikirView.classList.remove('hidden');
                B.className = B.className.replace(/view-\w+/g, '').trim();
                B.classList.add(`view-${view}`);
                if (view === 'pagi') {
                    Selectors.dzikirTitle.textContent = "Al Matsurat Sugro Pagi";
                    Selectors.dzikirSubtitle.textContent = "Biasakan membaca setiap pagi";
                    document.title = "Al Matsurat Pagi";
                } else {
                    Selectors.dzikirTitle.textContent = "Al Matsurat Sugro Sore";
                    Selectors.dzikirSubtitle.textContent = "Biasakan membaca setiap sore";
                    document.title = "Al Matsurat Sore";
                }
            }
        },
        toggleDarkMode: (isDark) => {
            B.classList.toggle('dark', isDark);
            Selectors.loadingScreen.classList.toggle('dark', isDark);
            localStorage.setItem('darkMode', isDark);
        },
        updateCounter: () => {
            Selectors.counter.querySelector('b').textContent = State.count;
            B.classList.toggle('no-scroll', State.count !== 0);
        },
        updateFontSize: (size) => {
            Root.style.setProperty('--arabic-font-size', `${size}px`);
            localStorage.setItem('arabicFontSize', size);
        }
    };

    // --- COUNTER LOGIC --- //
    const Counter = {
        increment: () => {
            State.count++;
            UI.updateCounter();
            AudioController.playSoundEffect(AudioElements.sfx.nav);
            if (navigator.vibrate) navigator.vibrate(50);
            if ([3, 10, 30, 100].includes(State.count)) {
                AudioController.playSoundEffect(AudioElements.sfx.info);
                if (navigator.vibrate) navigator.vibrate([100, 30, 100]);
            }
        },
        reset: () => {
            State.count = 0;
            UI.updateCounter();
            AudioController.playSoundEffect(AudioElements.sfx.reset);
            if (navigator.vibrate) navigator.vibrate(200);
        }
    };

    // --- EVENT HANDLERS --- //
    const Handlers = {
        handleMainClick: (e) => {
            const target = e.target.closest('[data-action], .play-btn');
            if (!target) return;
            if (target.dataset.action === 'setView') {
                UI.setView(target.dataset.view);
                return;
            }
            if (target.classList.contains('play-btn')) {
                const item = target.closest('.dzikir-item');
                const icon = target.querySelector('.material-symbols-outlined');
                if (State.activeAudio && State.activeAudio.dataset.sourceId === item.dataset.audioId) {
                    AudioController.stop();
                    icon.textContent = 'play_circle';
                } else {
                    document.querySelectorAll('.play-btn .material-symbols-outlined').forEach(i => i.textContent = 'play_circle');
                    const audioId = item.dataset.audioId;
                    const audioEl = document.getElementById(audioId);
                    if (audioEl) {
                        audioEl.dataset.sourceId = audioId;
                        const start = parseFloat(item.dataset.start || 0);
                        const end = parseFloat(item.dataset.end || audioEl.duration);
                        const isLoop = item.dataset.loop === 'true';
                        AudioController.play(audioEl, start, end, isLoop);
                        icon.textContent = 'stop_circle';
                    }
                }
                return;
            }
            if (target.dataset.action === 'listen') {
                const wrapper = target.parentElement;
                const audioPlayer = wrapper.querySelector('audio');
                const isVisible = audioPlayer.classList.toggle('visible');
                if (isVisible) {
                    audioPlayer.play();
                    target.innerHTML = `<span class="material-symbols-outlined">volume_off</span> Sembunyikan`;
                } else {
                    audioPlayer.pause();
                    target.innerHTML = `<span class="material-symbols-outlined">speaker</span> Dengarkan`;
                }
            }
        },
        handleKeyDown: (e) => {
            if (State.currentView === 'home') return;
            if (e.key === 'ArrowRight') { e.preventDefault(); Counter.increment(); }
            else if (e.key.toLowerCase() === 'control') { e.preventDefault(); Counter.reset(); }
        }
    };

    // --- INITIALIZATION --- //
    const init = () => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js')
                    .then(reg => console.log('ServiceWorker registration successful:', reg.scope))
                    .catch(err => console.log('ServiceWorker registration failed:', err));
            });
        }
        
        Selectors.listenContainer.innerHTML = `
            <div class="listen-wrapper" data-listen="pagi">
                <button class="listen-btn" data-action="listen"><span class="material-symbols-outlined">speaker</span> Dengarkan</button>
                <audio src="https://github.com/krasyid822/AlMatsurat/releases/download/1/Al.Matsurat.Pagi.opus" controlslist="nodownload" preload="none"></audio>
            </div>
            <div class="listen-wrapper" data-listen="sore">
                <button class="listen-btn" data-action="listen"><span class="material-symbols-outlined">speaker</span> Dengarkan</button>
                <audio src="https://github.com/krasyid822/AlMatsurat/releases/download/1/Al.Matsurat.Petang.opus" controlslist="nodownload" preload="none"></audio>
            </div>
        `;

        Selectors.mainContent.addEventListener('click', Handlers.handleMainClick);
        Selectors.clickButton.addEventListener('click', Counter.increment);
        Selectors.resetButton.addEventListener('click', Counter.reset);
        Selectors.darkToggle.addEventListener('change', (e) => UI.toggleDarkMode(e.target.checked));
        Selectors.fontSlider.addEventListener('input', (e) => UI.updateFontSize(e.target.value));
        document.addEventListener('keydown', Handlers.handleKeyDown);

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('darkMode');
        const isDark = savedTheme !== null ? savedTheme === 'true' : prefersDark;
        Selectors.darkToggle.checked = isDark;
        UI.toggleDarkMode(isDark);
        
        const savedFontSize = localStorage.getItem('arabicFontSize') || 28;
        Selectors.fontSlider.value = savedFontSize;
        UI.updateFontSize(savedFontSize);
        
        startLoadingSequence();
    };

    async function fetchWithProgress(url, index, total) {
        try {
            await fetch(url);
        } catch (error) {
            console.warn(`Could not fetch ${url}:`, error);
        } finally {
            const progress = ((index + 1) / total) * 100;
            Selectors.progressBarFill.style.width = `${progress}%`;
            Selectors.percentageText.textContent = `${Math.round(progress)}%`;
        }
    }

    async function startLoadingSequence() {
        B.classList.add('loading');
        Selectors.loadingInfo.textContent = "Memuat Aset...";
        State.loadingMessageInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * LOADING_MESSAGES.length);
            Selectors.loadingMessage.textContent = LOADING_MESSAGES[randomIndex];
        }, 2000);
        for (let i = 0; i < ASSETS_TO_LOAD.length; i++) {
            await fetchWithProgress(ASSETS_TO_LOAD[i], i, ASSETS_TO_LOAD.length);
        }
        clearInterval(State.loadingMessageInterval);
        Selectors.loadingInfo.textContent = "Semua file siap!";
        Selectors.loadingMessage.textContent = "Selamat berdzikir...";
        setTimeout(() => {
            Selectors.loadingScreen.style.opacity = '0';
            Selectors.mainContent.classList.remove('hidden');
            B.classList.remove('loading');
            handleUrlParams();
            setTimeout(() => { Selectors.loadingScreen.classList.add('hidden'); }, 500);
        }, 1000);
    }
    
    function handleUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const action = params.get('action');
        const hash = window.location.hash;
        if (action === 'pagi' || action === 'sore') { UI.setView(action); }
        if (hash) {
            setTimeout(() => {
                const targetElement = document.querySelector(hash);
                if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
            }, 100);
        }
    }

    init();
});
