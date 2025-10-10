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
    let isLoadingComplete = false;
    let savedHash = window.location.hash;
    
    // --- FUNGSI-FUNGSI LOGIKA ---
    
    // Fungsi untuk memuat progress dari localStorage
    const loadProgress = () => {
        const savedCount = localStorage.getItem('alMatsurat_counter');
        if (savedCount !== null) {
            count = parseInt(savedCount, 10);
            ui.updateCounterView(count);
        }
    };
    
    // Fungsi untuk menyimpan progress ke localStorage
    const saveProgress = () => {
        localStorage.setItem('alMatsurat_counter', count);
    };
    
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
        saveProgress(); // Simpan otomatis setiap perubahan
        
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
        if (savedHash) {
            const targetElement = document.querySelector(savedHash);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    };
    
    // Mencegah navigasi hash sampai loading selesai
    const preventHashNavigation = (e) => {
        if (!isLoadingComplete) {
            e.preventDefault();
            return false;
        }
    };
    
    // Blokir hash navigation saat loading
    window.addEventListener('hashchange', preventHashNavigation);
    
    // Fungsi loading dengan progress tracking
    const startLoading = async () => {
        const filesToLoad = [
            'rsc/opus/Al.Matsurat.Pagi-000.opus',
            'rsc/opus/Al.Matsurat.Pagi-001.opus',
            'rsc/opus/Al.Matsurat.Petang-Trim.opus',
            'rsc/opus/Rabithah_ai.opus',
            'rsc/opus/ast.opus',
            'rsc/opus/kafaratul.opus',
            'rsc/wav/nav_boost',
            'rsc/wav/info_boost',
            'rsc/wav/recycle_boost'
        ];
        
        let loadedCount = 0;
        let totalSize = 0;
        let loadedSize = 0;
        let allFromCache = true;
        
        elements.loadingInfo.textContent = 'Memuat file...';
        
        // Preload semua audio files dengan progress tracking
        const loadPromises = filesToLoad.map(async (file) => {
            try {
                const response = await fetch(file);
                
                // Check if from cache
                const fromCache = response.headers.get('x-cache') === 'HIT' || 
                                 response.type === 'basic';
                if (!fromCache) allFromCache = false;
                
                const contentLength = response.headers.get('content-length');
                const fileSize = contentLength ? parseInt(contentLength, 10) : 0;
                totalSize += fileSize;
                
                const reader = response.body.getReader();
                let receivedLength = 0;
                const chunks = [];
                
                while (true) {
                    const {done, value} = await reader.read();
                    if (done) break;
                    
                    chunks.push(value);
                    receivedLength += value.length;
                    loadedSize += value.length;
                    
                    // Update progress
                    const totalProgress = totalSize || (filesToLoad.length * 1024 * 1024); // Estimate if unknown
                    const percentComplete = Math.min(Math.round((loadedSize / totalProgress) * 100), 100);
                    elements.progressBarFill.style.width = percentComplete + '%';
                    elements.percentageText.textContent = percentComplete + '%';
                }
                
                loadedCount++;
                elements.fileSizeInfo.textContent = `File ${loadedCount}/${filesToLoad.length}`;
                
                const fileName = file.split('/').pop();
                elements.loadingInfo.textContent = `${fromCache ? '✓ Cache' : '⬇ Download'}: ${fileName}`;
                
                // Update overall progress based on file count
                const fileProgress = Math.round((loadedCount / filesToLoad.length) * 100);
                elements.progressBarFill.style.width = fileProgress + '%';
                elements.percentageText.textContent = fileProgress + '%';
                
                // Combine chunks into blob
                const blob = new Blob(chunks);
                return URL.createObjectURL(blob);
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
                loadedCount++;
                elements.fileSizeInfo.textContent = `File ${loadedCount}/${filesToLoad.length}`;
                return null;
            }
        });
        
        await Promise.all(loadPromises);
        
        const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
        elements.totalNetworkSizeInfo.textContent = allFromCache 
            ? `✓ Semua file dari cache (${sizeInMB} MB)`
            : `Total terdownload: ${sizeInMB} MB`;
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

    // #### ALUR LOADING DAN INISIALISASI ####
    (async () => {
        const startTime = Date.now();
        const minimumLoadingTime = 1500; // Minimum 1.5 detik untuk loading screen
        
        // 1. Load saved progress
        loadProgress();
        
        // 2. Generate content
        ui.generateContent();
        
        // 3. Start loading files
        await startLoading();
        
        // 4. Ensure minimum loading time (agar user bisa melihat progress)
        const elapsedTime = Date.now() - startTime;
        const remainingTime = minimumLoadingTime - elapsedTime;
        if (remainingTime > 0) {
            elements.loadingInfo.textContent = 'Menyelesaikan...';
            await new Promise(resolve => setTimeout(resolve, remainingTime));
        }
        
        // 5. Set flag loading complete
        isLoadingComplete = true;
        
        // 6. Remove hash navigation blocker
        window.removeEventListener('hashchange', preventHashNavigation);
        
        // 7. Handle action params
        handleActionParam();
        
        // 8. Show app and handle hash scroll
        ui.showApp(() => {
            handleHashScroll();
        });
    })();
});
