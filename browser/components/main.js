import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get("/student");
      const data = response.data;
      this.setState({ students: data });
    } catch (error) {
      console.log("something");
    }
  }
  render() {
    const students = this.state.students;
    console.log(students);
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.fullName}</li>
          ))}
        </ul>
      </div>
    );
  }
}
