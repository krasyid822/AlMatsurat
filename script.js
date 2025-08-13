document.addEventListener('DOMContentLoaded', () => {

    // --- DEFINISI SEMUA ELEMEN DOM ---
    const elements = {
        loadingScreen: document.getElementById('loading-screen'),
        utama: document.getElementById('utama'),
        loadingInfo: document.getElementById('loading-info'),
        fileSizeInfo: document.getElementById('file-size'),
        totalNetworkSizeInfo: document.getElementById('total-network-size'),
        progressBarFill: document.getElementById('progress-bar-fill'),
        percentageText: document.getElementById('percentage'),
        dotting: document.getElementById('dotting'),
        contentContainer: document.getElementById('content-container'),
        btnPagi: document.getElementById('btn-pagi'),
        btnSore: document.getElementById('btn-sore'),
        btnKembali: document.getElementById('btn-kembali'),
        darkToggle: document.getElementById('darkToggle'),
        clickButton: document.getElementById('clickButton'),
        resetButton: document.getElementById('resetButton'),
        counter: document.getElementById('counter'),
        pagiElements: document.getElementsByClassName('pagi'),
        pagiDisElements: document.getElementsByClassName('pagi-dis'),
        soreElements: document.getElementsByClassName('sore'),
        homeElements: document.getElementsByClassName('home'),
        bdyElements: document.getElementsByClassName('bdy'),
        btnListenPagi: document.getElementById('btn-listenn'),
        audioListenPagi: document.getElementById('aud-listenn'),
        btnListenSore: document.getElementById('btn-listenn-sore'),
        audioListenSore: document.getElementById('aud-listenn-sore'),
        audios: {
            audioF: document.getElementById('audioF'),
            audioF2: document.getElementById('audioF2'),
            audioFSore: document.getElementById('audioFSore'),
            robitoh: document.getElementById('robitohAudio'),
            istighfar: document.getElementById('istighfarAudio'),
            kafaratul: document.getElementById('kafaratulAudio'),
            nav: document.getElementById('navAudio'),
            info: document.getElementById('infoAudio'),
            recycle: document.getElementById('recycleAudio')
        }
    };
    
    // --- INISIALISASI UI MODULE ---
    ui.init(elements);
    
    // --- STATE & LOGIKA APLIKASI ---
    let count = 0;
    let stopPlaybackListener = null;
    let currentAudio = null;
    
    // --- FUNGSI-FUNGSI LOGIKA ---
    
    const playSegment = (audio, startTime, endTime) => {
        currentAudio = audio;
        if (stopPlaybackListener) currentAudio.removeEventListener('timeupdate', stopPlaybackListener);
        
        currentAudio.currentTime = startTime;
        currentAudio.play();

        stopPlaybackListener = () => {
            if (currentAudio.currentTime >= endTime) {
                currentAudio.currentTime = startTime;
                currentAudio.play();
            }
        };
        currentAudio.addEventListener('timeupdate', stopPlaybackListener);
    };

    const pauseAudio = () => {
        if (currentAudio) {
            currentAudio.pause();
            if (stopPlaybackListener) currentAudio.removeEventListener('timeupdate', stopPlaybackListener);
            stopPlaybackListener = null;
        }
    };
    
    const updateCounter = (value) => {
        count = value;
        ui.updateCounterView(count);
        
        if (navigator.vibrate) navigator.vibrate(value === 0 ? 200 : 50);

        if (count === 0) {
            elements.audios.recycle.play();
        } else {
            elements.audios.nav.play();
        }

        if ([3, 10, 100].includes(count)) {
            if (navigator.vibrate) navigator.vibrate([100, 30, 100]);
            elements.audios.info.play();
        }
    };
    
    // #### PERUBAHAN DI SINI: Memisahkan logika URL dan Scroll ####
    const handleActionParam = () => {
        const params = new URLSearchParams(window.location.search);
        const action = params.get('action');
        if (action === 'pagi') ui.showPagi();
        if (action === 'sore') ui.showSore();
    };

    const handleHashScroll = () => {
        if (window.location.hash) {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                // Beri jeda 100ms agar browser siap sepenuhnya
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    };

    // --- EVENT LISTENERS ---
    
    elements.btnPagi.addEventListener('click', () => ui.showPagi());
    elements.btnSore.addEventListener('click', () => ui.showSore());
    elements.btnKembali.addEventListener('click', () => ui.showHome());
    
    elements.clickButton.addEventListener('click', () => updateCounter(count + 1));
    elements.resetButton.addEventListener('click', () => updateCounter(0));

    elements.darkToggle.addEventListener('change', function () {
        if (this.checked) {
            const bodyEl = elements.bdyElements[0];
            bodyEl.style.backgroundColor = "black";
            bodyEl.style.color = "white";
            bodyEl.classList.remove('light-mode');
            setTimeout(() => { this.checked = false; }, 500);
        }
    });

    elements.contentContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const parentHeader = button.parentElement;
        const playButton = parentHeader.querySelector('.play-button');
        const stopButton = parentHeader.querySelector('.stop-button');

        document.querySelectorAll('.stop-button').forEach(btn => {
            if (btn !== stopButton && btn.style.display === 'block') btn.click();
        });

        if (button.dataset.type === 'play') {
            const isSore = elements.soreElements[0].style.display === 'block';
            const audioFileKey = playButton.dataset.audioFile;
            if (!audioFileKey || !elements.audios[audioFileKey]) return;
            const audioFile = elements.audios[audioFileKey];
            const startTime = isSore ? parseFloat(playButton.dataset.startSore) : parseFloat(playButton.dataset.startPagi);
            const endTime = isSore ? parseFloat(playButton.dataset.endSore) : parseFloat(playButton.dataset.endPagi);

            if (!isNaN(startTime) && !isNaN(endTime)) {
                playSegment(audioFile, startTime, endTime);
                playButton.style.display = 'none';
                stopButton.style.display = 'block';
            }
        } else if (button.dataset.type === 'stop') {
            pauseAudio();
            playButton.style.display = 'block';
            stopButton.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            elements.clickButton.click();
        }
        if (e.key === 'Control' || e.key === 'r') {
            e.preventDefault();
            elements.resetButton.click();
        }
    });
    
    const setupListenButton = (btn, audio) => {
        btn.addEventListener('click', () => {
            audio.style.display = 'block';
            audio.play();
            btn.style.display = 'none';
        });
    };
    setupListenButton(elements.btnListenPagi, elements.audioListenPagi);
    setupListenButton(elements.btnListenSore, elements.audioListenSore);

    // --- INISIALISASI APLIKASI ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(reg => console.log('ServiceWorker registration successful.', reg.scope))
                .catch(err => console.log('ServiceWorker registration failed.', err));
        });
    }

    // #### PERUBAHAN ALUR LOGIKA DI SINI ####
    ui.generateContent();
    handleActionParam(); // 1. Atur tampilan pagi/sore terlebih dahulu
    ui.showApp(() => { // 2. Tampilkan aplikasi, lalu jalankan scroll sebagai callback
        handleHashScroll();
    });
});
