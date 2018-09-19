import React, { Component } from 'react';
import axios from 'axios';
export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo = {}
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(res => {
      console.log(res)
      this.setState({
        studentInfo = res.data
      })
    })
  }
  render() {
    return (
      <div className="box">
        <h1>Student</h1>
      </div>
    )
  }
}