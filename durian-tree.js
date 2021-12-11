class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let res = 0
    let currObj = this;
    while(currObj.boss != null){
     currObj= currObj.boss;
     res++;
    }
    return res;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);
const simon = new Employee("simon", "software engineer", 60000);
const ali = new Employee("ali", "software engineer", 60000);


ada.addSubordinate(craig);
ada.addSubordinate(arvinder); 
ada.addSubordinate(angela);
ada.addSubordinate(phil); 
craig.addSubordinate(simon);
craig.addSubordinate(ali);

console.log(ali.numberOfPeopleToCEO);
console.log(ada.numberOfPeopleToCEO);
console.log(phil.numberOfSubordinates);



