function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) { 
    console.log ("Error: Student has been expelled" );
    return;
  } 
  for (const mark of marksToAdd) {
    if (typeof mark !== 'number') {
      console.error('Оценка должна быть числом');
      return;
    }
  }
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length) {
    return 0;
  }
  const sum = this.marks.reduce((acc, curr) => acc + curr);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject; // Удаляем свойство subject
  delete this.marks; // Удаляем свойство marks
  this.excluded = reason; // Добавляем свойство excluded со значением reason
};



let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}