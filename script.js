document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.menu-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // 🎯 Scroll navbar agar tab yang diklik berada di tengah
            scrollTabToCenter(this);

            // 🔁 Jika ada data-link, redirect ke halaman lain
            const link = this.getAttribute('data-link');
            if (link) {
                // Delay agar scroll navbar selesai dulu sebelum redirect
                setTimeout(() => {
                    window.location.href = link;
                }, 300);
                return;
            }

            // ✅ Jika bukan redirect, lanjut ke fungsi tab switching
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            const tabId = this.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Fungsi untuk scroll navbar ke tab yang diklik
    function scrollTabToCenter(clickedTab) {
        // Scroll langsung ke posisi tab yang diklik
        clickedTab.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    // Auto scroll navbar ke tab active saat halaman dimuat
    const activeTab = document.querySelector('.menu-tab.active');
    if (activeTab) {
        setTimeout(() => {
            scrollTabToCenter(activeTab);
        }, 100);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk modal image
    const menuImages = document.querySelectorAll('.menu-item-img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close-modal');

    // Pastikan semua elemen ditemukan
    if (menuImages && modal && modalImg && closeModal) {
        menuImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;

                // Hapus caption
                // const menuItemName = this.closest('.menu-item').querySelector('.menu-item-name').textContent;
                // captionText.innerHTML = menuItemName;
            });
        });

        // Close modal when clicking on X
        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
        });

        // Close modal when clicking outside the image
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});