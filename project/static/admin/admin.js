class User {
    constructor(f_name, l_name, email) {
        this.f_name = f_name
        this.l_name = l_name
        this.email = email
        this.progress = null
    }

}

class Admin {
    constructor() {
        this.users = {}
        this.courses = null
        this.container = document.querySelector("#users")
        this.progress_dialog = document.querySelector("#progress_dialog")
        this.progress_data = document.querySelector("#progress_data")
        this.overlay = document.querySelector("#overlay")
    }

    async init() {
        await this.get_users()
        await this.get_courses()
        this.show_users()
    }

    show_users() {
        let users_id = Object.keys(this.users)
        for (let i = 0; i < users_id.length; i++) {
            let user_id = users_id[i]
            let user = this.users[user_id]
            this.create_user_row(i + 1, user, user_id)
        }
    }

    async open_progress(ID) {
        let prg = this.progress_dialog
        let user = this.users[ID]
        await this.user_progress(ID)

        this.overlay.style.display = "block"
        prg.showModal()
        prg.querySelector("#close_div > button").onclick = () => {
            this.close_progress()
        }

        // Remove all previous courses
        while (this.progress_data.firstChild) {
            this.progress_data.removeChild(this.progress_data.lastChild);
        }

        // set name and email
        let name = prg.querySelector("#name")
        name.innerText = user.f_name + " " + user.l_name
        let email = prg.querySelector("#email")
        email.innerText = user.email
        email.href = "mailto:" + user.email

        for (let i = 0; i < user.progress.length; i++) {
            this.create_progress_row(i + 1, user.progress[i])
        }
    }

    close_progress() {
        this.overlay.style.display = "none"
        this.progress_dialog.close()
    }

    async get_users() {
        let all_users = await this.fetch_data("users")

        for (let i = 0; i < all_users.length; i++) {
            let new_user = new User(all_users[i].f_name, all_users[i].l_name, all_users[i].email)
            this.users[all_users[i].id] = new_user
        }
    }

    async get_courses() {
        this.courses = await this.fetch_data("courses")
    }

    async user_progress(ID) {
        let user = this.users[ID]
        if (!user.progress) {
            let progress = await this.fetch_data("user_progress/" + ID)
            user.progress = progress
        }
    }

    async fetch_data(URL) {
        return await fetch(`/fetch/${URL}`)
            .then(resp => resp.json())
            .then(json => {
                return json
            })
    }

    create_user_row(i, user, user_id) {
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
        a_email.innerText = user.email
        a_email.href = "mailto:" + user.email
        a_email.target = "_blank"
        progress.appendChild(btn_progress)
        btn_progress.innerText = "OPEN"
        btn_progress.className = "btn open_progress"
        btn_progress.onclick = () => {
            this.open_progress(user_id)
        }

        tr.append(num, name, email, progress)

        this.container.appendChild(tr)
    }

    create_progress_row(i, course) {
        let tr = document.createElement("tr")
        let num = document.createElement("td")
        let title = document.createElement("td")
        let progress = document.createElement("td")
        let status = document.createElement("td")

        num.innerText = i
        title.innerText = this.courses[course.ID]
        progress.innerText = `${course.completed} / ${course.total}`
        if (course.completed != course.total) {
            status.className = "not-done"
            status.innerText = "PENDING"
        } else {
            status.className = "done"
            status.innerText = "DONE"
        }

        tr.append(num, title, progress, status)
        this.progress_data.appendChild(tr)
    }
}


async function init(admin) {
    await admin.init()
}

var admin = new Admin()
init(admin)