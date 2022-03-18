/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
var users = [{

        name: "roni prawijaya",
        age: 22,
        major: "teknik informasi",


    },
    {

        name: "burhan",
        age: 19,
        major: "ipa",


    },
    {

        name: "ayu",
        age: 20,
        major: "sistem informasi",


    },
    {

        name: "joko",
        age: 22,
        major: "teknik informasi",


    },
    {

        name: "rizqa",
        age: 30,
        major: "hukum",


    },
];



/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
        for (const key in users) {
            console.log(`${key}: ${users[key]}`);
        };
    }
    /**
     * TODO 3
     * Buat function store: Menambahkan user baru.
     * Hint: Gunakan method push.
     * Note: Ubah function menggunakan arrow function.
     */
const store = user => {
    // ambil variabel user lalu hubungkan dengan method push dan diisi value dari parameter `user`
    users.push(user);
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
    // dikarenkan variabel users berbentuk object array maka bisa kit manipulasikan posisi dari array dengan menambahkan [] yang disi dengan parameter index lalu digantikan value dengan variable users 
    users[index] = user;
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
//  ambil variabel user lalu hubungkan dengan method splise  dan diisi index yang mau dihapus dengan jumbalah yang dihapus adalah 1
const destroy = (index) => {
    users.splice(index, 1);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
    /**
     * Test function index
     */
    console.log("# Get All Users");
    all();

    /**
     * Test function store
     */
    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics",
    };
    store(newUser);

    /**
     * Test function update
     */
    console.log("# Edit User: Isfa");
    const editedIndex = 1;
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    };
    update(editedIndex, editedUser);

    /**
     * Test function destroy
     */
    console.log("# Delete User: Nurul");
    const deletedIndex = 2;
    destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };