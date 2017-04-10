export class AppService {
    
    getStudent() {
        return this.studentList;
    }

    addStudent(student) {
        this.studentList.push(student);
    }

    deleteStudent(student) {
        let index = this.studentList.indexOf(student);
        if (index >= 0) {
            this.studentList.splice(index, 1);
        }
    }

    createNewUser(user) {
        let status = true;
        this.userList.forEach(function(item) {
            if (item.username === user.username) {
                status = false
            }
        });
        
        if (status) {
            this.userList.push(user);
            return status;
        } else {
            return status;
        }
    }

    validateLogin(user) {
        let status = false;
        this.userList.forEach(function(item) {
            if (item.username === user.username && item.password === user.password) {
                status = true;
            }
        });
        
        return status;
    }

    changeStudentAbsence(student) {
        let index = this.studentList.indexOf(student);
        this.studentList.forEach(function(item) {
            if (item.id === student.id) {
                if (item.absence === "true") {
                    item.absence = "false";
                } else {
                    item.absence = "true";
                }
            }
        });
    }

    userList = [
        {
            username: "username123",
            password: "pass123"
        },
        {
            username: "recluse2",
            password: "f34t3q"
        }
    ];

    studentList = [
        {
            id: 1,
            name: "Student one",
            birthdate: "1999-11-02",
            gender: "Male",
            grade: "3rd Grade",
            absence: "false"
        },
        {
            id: 2,
            name: "Student two",
            birthdate: "2000-12-23",
            gender: "Female",
            grade: "6th Grade",
            absence: "false"
        },
    ];
}