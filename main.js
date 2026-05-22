const input = document.getElementById("input");
const submit = document.getElementById("submit");
const display = document.getElementById("content-parent");
const salah = document.getElementById("warning");
const kosong = document.getElementById("kosong");

// 1. Fungsi untuk menambah list baru
submit.addEventListener("click", () => {
    // .trim() digunakan untuk menghapus spasi kosong di awal/akhir ketikan
    if (input.value.trim() === "") {
        salah.textContent = "jangan dikosongi, mosok isine kosong!";
        kosong.textContent = "kosongan";
        return; // Berhenti di sini jika kosong
    }



    // Jika ada isinya, hapus pesan peringatan
    salah.textContent = "";
    kosong.textContent = "";
    
    // 2. Membuat element div baru untuk membungkus satu baris list
    const itemBaru = document.createElement("div");
    itemBaru.className = "flex justify-between items-center border border-slate-400 rounded mt-2";
    itemBaru.id = "content";

    // 3. Memasukkan struktur HTML list (checkbox, teks, dan tombol hapus)
    itemBaru.innerHTML = `
        <div class="flex flex-row gap-3 p-3">
            <input type="checkbox" class="checkbox-task" id="checkbox">
            <p class="text-white font-sans task-text">${input.value}</p>
        </div>
        <div class="flex flex-row gap-3 p-3">
            <button class="bg-gray-800 text-white py-2 px-6 rounded btn-delete">
                Hapus
            </button>
        </div>
    `;

    const chek = document.getElementById("checkbox")
    itemBaru.addEventListener("click", () => {
        chek.checked = true;
    })

    chek.checked = false;

    // 4. Masukkan list baru tersebut ke dalam container (content-parent)
    display.appendChild(itemBaru);

    // 5. Kosongkan kembali kolom input setelah menambah list
    input.value = "";

    // 6. Fitur Hapus: Beri event listener pada tombol hapus yang baru dibuat
    const tombolHapus = itemBaru.querySelector(".btn-delete");
    tombolHapus.addEventListener("click", () => {
        itemBaru.remove(); // Menghapus baris list ini dari layar
    });

    // Bonus Fitur: Coret teks jika checkbox dicentang
    const checkbox = itemBaru.querySelector(".checkbox-task");
    const teksTugas = itemBaru.querySelector(".task-text");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            teksTugas.classList.add("line-through", "text-slate-400");
        } else {
            teksTugas.classList.remove("line-through", "text-slate-400");
        }
    });
});