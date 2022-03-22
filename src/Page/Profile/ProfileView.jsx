import React, { Component } from "react";
import axios from "axios";

class ProfileView extends Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/user/106").then((res) => {
      const data = res.data;
      this.setState({
        userData: data,
      });
    });
  }

  numberWithCommas(x) {
      if(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    return undefined;
    }

  render() {
    return (
      <div>
        <h1>ข้อมูลสมาชิก</h1>

          <p>{this.state.userData.name}</p>
          <p>{`เลขที่สมาชิก ${this.state.userData.memberId}`}</p>
          <p>{`เลขที่บัตรประชาชน ${this.state.userData.citizenId}`}</p>
          <p>{`วันเกิด ${this.state.userData.birthDate}`}</p>
          <p>{`อายุ ${this.state.userData.age}`}</p>
          <p>{`วันที่เป็นสมาชิก ${this.state.userData.memberStartDate}`}</p>
          <p>{`เงินเดือน ${this.numberWithCommas(this.state.userData.salary)}`}</p>
          <p>{`มูลค่าหุ้นที่ถือ ${this.numberWithCommas(this.state.userData.bondTotal)}`}</p>
          <p>{`ชำระค่าหุ้นเดือนละ ${this.numberWithCommas(this.state.userData.bondPerMonth)}`}</p>

      </div>
    );
  }
}

export default ProfileView;
