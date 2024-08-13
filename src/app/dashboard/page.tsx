"use client"
import React from 'react';

const Dashboard = () => {
  const [ name, setName ] = React.useState("");
  console.log('Console log of the dashboard page, look browser console.');

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <h2>Hello{name ? `, ${name}!`: "!"}</h2>
    </div>
  )
}

export default Dashboard;