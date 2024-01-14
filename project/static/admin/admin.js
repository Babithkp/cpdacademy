class User {
    constructor(ID, f_name, l_name, email) {
        this.ID = ID
        this.f_name = f_name
        this.l_name = l_name
        this.email = email
        this.courses = []
    }

}

class Admin {
    constructor() {
        this.users = []
        this.courses = null
        this.container = document.querySelector("#users")
    }

    async init() {
        await this.get_users()
        await this.get_courses()
        this.show_users()
    }

    show_users() {
        for (let i = 0; i < this.users.length; i++) {
            let user = this.users[i]
            this.create_user_row(i + 1, user)
        }
    }

    open_progress(ID) {
        console.log(ID)
    }

    async get_users() {
        let all_users = await this.fetch_data("users")

        for (let i = 0; i < all_users.length; i++) {
            let new_user = new User(all_users[i].id, all_users[i].f_name, all_users[i].l_name, all_users[i].email)
            this.users.push(new_user)
        }
    }

    async get_courses() {
        this.courses = await this.fetch_data("courses")
    }

    async get_user_progress(ID) {
        return await this.fetch_data("user_progress/" + ID)
    }

    async fetch_data(URL) {
        return await fetch(`/fetch/${URL}`)
            .then(resp => resp.json())
            .then(json => {
                return json
            })
    }

    create_user_row(i, user) {
        let tr = document.createElement("tr")
        let num = document.createElement("td")
        let name = document.createElement("td")
        let email = document.createElement("td")
        let progress = document.createElement("td")
        let a_email = document.createElement("a")
        let btn_progress = document.createElement("button")

        num.innerText = i
        name.innerText = user.f_name + " " + user.l_name
        email.appendChild(a_email)
        a_email.href = "mailto:" + user.email
        progress.appendChild(btn_progress)
        btn_progress.innerText = "OPEN"
        btn_progress.classList.add("open_progress")
        btn_progress.onclick = () => {
            this.open_progress(user.ID)
        }

        tr.appendChild(num)
        tr.appendChild(name)
        tr.appendChild(email)
        tr.appendChild(progress)

        this.container.appendChild(tr)
    }

}


async function init(admin) {
    await admin.init()
}

var admin = new Admin()
init(admin)