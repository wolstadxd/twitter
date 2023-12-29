import React, { useState } from "react";
import "./signup.scss";
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedDay, setSelectedDay] = useState("31");
  const monthDays = 31;

  const navigate = useNavigate()

  const months = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const handleSelectMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSelectDay = (event) => {
    setSelectedDay(event.target.value);
  };

  const year = new Date().getFullYear();

  const submitForm = (e) => {
    e.preventDefault();
    const blog = {
      username,
      email,
      phone,
      selectedMonth,
      selectedYear,
      selectedDay,
    };
    console.log(blog);
    setUsername("");
    setPhone("");
    setEmail("");
    navigate("/home");
  };

  return (
    <>
      <div className="header_signup">
        <div className="header_signup">
          <form onSubmit={submitForm}>
            <h1 className="form_title">Create an account</h1>
            <Link to='/'>
            <div className="back_to_login">Back to login</div>
          </Link>
            <div className="divider"></div>
            <div className="form">
              <div className="field">
                <input
                  type="text"
                  required
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="phone"
                  required
                  name="number"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <a
                href="https://www.instagram.com/"
                className="email_signup-link"
              >
                Use email
              </a>
              <h2>Date of birth</h2>
              <p>
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </p>

              <div className="dates_block">
                <select
                  className="dates_form form_moths"
                  onChange={handleSelectMonth}
                >
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
                {/* <p>{selectedMonth}</p> */}
                <select
                  className="dates_form form_year"
                  onChange={handleSelectYear}
                >
                  {Array.from(new Array(50), (v, i) => (
                    <option key={i} value={year - i}>
                      {year - i}
                    </option>
                  ))}
                </select>
                {/* <p>{selectedYear}</p> */}
                <select
                  className="dates_form form_days"
                  onChange={handleSelectDay}
                >
                  {Array.from(new Array(31), (v, i) => (
                    <option key={i} value={monthDays - i}>
                      {monthDays - i}
                    </option>
                  ))}
                </select>
                {/* <p>{selectedDay}</p> */}
              </div>
                <button>Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
