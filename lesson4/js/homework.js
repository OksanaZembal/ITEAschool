const academy = {
    students: []
};


Object.defineProperty(academy, 'addStudent', {
    set: function(name) {

        let Name = name.split(' ');
        this.students.push({
            date: new Date(),
            firstName: Name[0],
            surname: Name[1]
        })
    }
});

academy.addStudent = "Oksana Zembal";
console.log(academy.students);