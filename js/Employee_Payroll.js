class EmployeePayrollData {
  // getter and setter method
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw alert("Name is Incorrect!");
    }
  }

  get profilePic() {
    return this._profilePic;
  }
  set profilePic(profilePic) {
    this._profilePic = profilePic;
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }

  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get note() {
    return this._note;
  }
  set note(note) {
    this._note = note;
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    if (startDate > new Date()) throw alert("Start Date is a Future Date!");
    var now = new Date();
    var timestamp = Math.abs(new Date().getTime() - startDate.getTime());
    if ((timestamp) / 24 * 60 * 60 * 1000 > 30){
        throw alert("start date is beyond 30 days!");
    }
    this._startDate = startDate;
  }
  // To string method
  toString() {
    return (
      "id = " +
      this.id +
      ", name = " +
      this.name +
      ", gender = " +
      this.gender +
      ", profilePic = " +
      this.profilePic +
      ", department=" +
      this.department +
      ", salary = " +
      this.salary +
      ", startDate = " +
      this.startDate +
      ", note=" +
      this.note
    );
  }
}
