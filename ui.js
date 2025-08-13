const ui = {
    // Inisialisasi untuk menyimpan referensi elemen dari script.js
    init(elements) {
        this.elements = elements;
    },

    // Membuat konten dzikir dari data
    generateContent() {
        if (typeof dzikirData === 'undefined') {
            console.error('dzikirData is not loaded. Make sure data.js is included.');
            return;
        }
        dzikirData.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `content-item`;
            itemDiv.id = item.id || '';
            if (item.displayClass) itemDiv.classList.add(item.displayClass);
            if (item.containerClass) itemDiv.classList.add(item.containerClass);

            itemDiv.innerHTML = `
                <div class="content-header ${item.headerClass}">
                    <button class="play-button" data-audio-file="${item.audioFile}" data-start-pagi="${item.audio.pagi.start}" data-end-pagi="${item.audio.pagi.end}" data-start-sore="${item.audio.sore.start}" data-end-sore="${item.audio.sore.end}" data-type="play">
                        <span class="material-symbols-outlined">play_circle</span>
                    </button>
                    <button class="stop-button" data-type="stop">
                        <span class="material-symbols-outlined">stop_circle</span>
                    </button>
                    <p>${item.title}</p>
                    ${item.link ? `<a href="${item.link}"><span class="material-symbols-outlined">read_more</span></a>` : ''}
                    <p>${item.count}</p>
                </div>
                <p class="indopak" dir="rtl">${item.arabic}</p>
                <p class="text-justify mb-6">${item.translation}</p>
            `;
            this.elements.contentContainer.appendChild(itemDiv);
        });
    },

    // Fungsi utilitas untuk menampilkan/menyembunyikan elemen
    toggleElements(displayMap) {
        for (const key in displayMap) {
            const collection = this.elements[key + 'Elements'] || document.getElementsByClassName(key);
            for (let el of collection) {
                el.style.display = displayMap[key];
            }
        }
    },

    // Menampilkan UI mode Pagi
    showPagi() {
        this.toggleElements({ pagi: 'block', 'pagi-dis': 'block', sore: 'none', home: 'none' });
        document.title = "Al Matsurat Pagi";
        const bodyEl = this.elements.bdyElements[0];
        bodyEl.style.backgroundColor = "#E6F7FF";
        bodyEl.style.color = "#333333";
        bodyEl.classList.add('light-mode');
    },

    // Menampilkan UI mode Sore
    showSore() {
        this.toggleElements({ pagi: 'block', 'pagi-dis': 'none', sore: 'block', home: 'none' });
        document.title = "Al Matsurat Sore";
        const bodyEl = this.elements.bdyElements[0];
        bodyEl.style.backgroundColor = "#FFEADD";
        bodyEl.style.color = "#333333";
        bodyEl.classList.add('light-mode');
    },

    // Menampilkan UI mode Home (default)
    showHome() {
        this.toggleElements({ pagi: 'none', sore: 'none', home: 'block' });
        document.title = "Al Matsurat";
        const bodyEl = this.elements.bdyElements[0];
        bodyEl.style.backgroundColor = "black";
        bodyEl.style.color = "white";
        bodyEl.classList.remove('light-mode');
    },

    // Memperbarui tampilan counter
    updateCounterView(count) {
        this.elements.counter.querySelector('b').textContent = count;
        if (count === 0) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    },
    
    // #### PERUBAHAN DI SINI ####
    // Menampilkan layar loading selesai dan menjalankan callback jika ada
    showApp(callback) {
        this.elements.loadingInfo.textContent = "All Files Loaded! Let's go...";
        this.elements.dotting.innerHTML = "PASS";
        this.elements.progressBarFill.style.width = '100%';
        this.elements.percentageText.textContent = '100%';
        setTimeout(() => {
            this.elements.loadingScreen.style.display = 'none';
            this.elements.utama.style.display = 'block';
            // Jalankan fungsi callback setelah #utama ditampilkan
            if (callback) {
                callback();
            }
        }, 1000);
    }
};
