const subjects = {
   mathematics: {
       students: 200,
       teachers: 6
   },
   biology: {
       students: 120,
       teachers: 6
   },
   geography: {
       students: 60,
       teachers: 2
   },
   chemistry: {
       students: 100,
       teachers: 3
   }
}

const subjectnames = Object.keys(subjects);
const Itemnames = subjectnames.join(', ');
console.log("Названия предметов ", Itemnames);

function averagenumberofstudents(subjects) {
   const totalstudents = subjectnames.reduce((sum, subjectName) => sum + subjects[subjectName].students, 0);
   return totalstudents / subjectnames.length;
}

const averagestudents = averagenumberofstudents(subjects);
console.log("Среднее количество студентов ", averagestudents);

function Allstudents(subjects) {
   const allstudents = subjectnames.reduce((sum, subjectName) => sum + subjects[subjectName].students, 0);
   return allstudents;
}

const allstudents = Allstudents(subjects);
console.log("Общее количество студентов ", allstudents);

function Allteachers(subjects) {
   const allTeachers = subjectnames.reduce((sum, subjectName) => sum + subjects[subjectName].teachers, 0);
   return allTeachers;
}

const allteachers = Allteachers(subjects);
console.log("Общее количество преподавателей ", allteachers);

const Arrayofitems = Object.keys(subjects).map(subjectName => ({ name: subjectName, ...subjects[subjectName] }));
console.log("Массив объектов предметов", Arrayofitems);

const Sortingthearraybyteachers = Object.keys(subjects).sort((a, b) => subjects[b].teachers - subjects[a].teachers);
console.log("Отсортировка массива по количеству преподавателям", Sortingthearraybyteachers);