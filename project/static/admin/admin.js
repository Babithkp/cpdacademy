class User {
    constructor(f_name, l_name, email, enrolled) {
        this.f_name = f_name
        this.l_name = l_name
        this.email = email
        this.enrolled = enrolled
        this.progress = null
    }

}

class Admin {
    constructor() {
        this.users = {}
        this.courses = null
        this.container = document.querySelector("#users")
        this.courses_container = document.querySelector("#courses")
        this.progress_dialog = document.querySelector("#progress_dialog")
        this.progress_data = document.querySelector("#progress_data")
        this.overlay = document.querySelector("#overlay")
    }

    async init() {
        this.overlay.style.display = "block"
        show_loading()
        await this.get_users()
        await this.get_courses()
        this.show_users()
        this.show_courses()
        hide_loading()
        this.overlay.style.display = "none"
    }

    show_users() {
        // Remove all previous users
        while (this.container.firstChild) {
            this.container.removeChild(this.container.lastChild);
        }
        let users_id = Object.keys(this.users)
        for (let i = 0; i < users_id.length; i++) {
            let user_id = users_id[i]
            let user = this.users[user_id]
            this.create_user_row(i + 1, user, user_id)
        }
    }

    async open_progress(ID) {
        this.overlay.style.display = "block"
        show_loading()
        let prg = this.progress_dialog
        let user = this.users[ID]
        await this.user_progress(ID)

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
        hide_loading()
    }

    close_progress() {
        this.overlay.style.display = "none"
        this.progress_dialog.close()
    }

    async get_users() {
        this.users = {}
        let all_users = await this.fetch_data("users")

        for (let i = 0; i < all_users.length; i++) {
            let new_user = new User(all_users[i].f_name, all_users[i].l_name, all_users[i].email, all_users[i].enrolled)
            this.users[all_users[i].id] = new_user
        }
    }

    async get_courses() {
        this.courses = await this.fetch_data("courses")
    }

    show_courses() {
        // Remove all previous courses
        while (this.courses_container.firstChild) {
            this.courses_container.removeChild(this.courses_container.lastChild);
        }
        let course_ids = Object.keys(this.courses)
        for (let i = 0; i < course_ids.length; i++) {
            let course_id = course_ids[i]
            this.create_course_row(i + 1, this.courses[course_id], course_id)
        }
    }

    create_course_row(i, title, course_id) {
        let tr = document.createElement("tr")
        let num = document.createElement("td")
        let title_td = document.createElement("td")
        let view = document.createElement("td")
        let a_view = document.createElement("a")

        num.innerText = i
        title_td.innerText = title
        a_view.innerText = "VIEW"
        a_view.className = "btn"
        a_view.href = course_id == "6" ? "/lms/care-certificate" : `/course/${course_id}`
        view.appendChild(a_view)

        tr.append(num, title_td, view)
        this.courses_container.appendChild(tr)
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
        let enrolled = document.createElement("td")
        let progress = document.createElement("td")
        let a_email = document.createElement("a")
        let btn_progress = document.createElement("button")

        num.innerText = i
        name.innerText = user.f_name + " " + user.l_name
        email.appendChild(a_email)
        a_email.innerText = user.email
        a_email.href = "mailto:" + user.email
        a_email.target = "_blank"
        enrolled.innerText = user.enrolled
        progress.appendChild(btn_progress)
        btn_progress.innerText = "OPEN"
        btn_progress.className = "btn open_progress"
        btn_progress.onclick = () => {
            this.open_progress(user_id)
        }

        tr.append(num, name, email, enrolled, progress)

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
