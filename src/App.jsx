import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

// Function to generate random pie chart data
const generateRandomPieData = () => {
  return [
    { name: 'New Leads', value: Math.floor(Math.random() * 500) },
    { name: 'Qualified Leads', value: Math.floor(Math.random() * 500) },
    { name: 'Proposals', value: Math.floor(Math.random() * 500) },
    { name: 'Closed Deals', value: Math.floor(Math.random() * 500) },
  ]
}

// Function to generate random bar chart data
const generateRandomBarData = () => {
  return [
    { name: 'Jan', value: Math.floor(Math.random() * 5000) },
    { name: 'Feb', value: Math.floor(Math.random() * 5000) },
    { name: 'Mar', value: Math.floor(Math.random() * 5000) },
    { name: 'Apr', value: Math.floor(Math.random() * 5000) },
    { name: 'May', value: Math.floor(Math.random() * 5000) },
    { name: 'Jun', value: Math.floor(Math.random() * 5000) },
  ]
}

const fetchData = (timeWindow) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        pieData: generateRandomPieData(),
        barData: generateRandomBarData(),
        totalCustomers: Math.floor(Math.random() * 2000),
        totalRevenue: Math.floor(Math.random() * 1000000),
        conversionRate: Math.floor(Math.random() * 100),
      })
    }, 500)
  })
}

export default function CRMStatistics() {
  const [timeWindow, setTimeWindow] = useState('1d')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchData(timeWindow).then((result) => {
      setData(result)
      setLoading(false)
    })
  }, [timeWindow])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">CRM Statistics</h1>

        <div className="mb-6">
          <select
            value={timeWindow}
            onChange={(e) => setTimeWindow(e.target.value)}
            className="block w-full max-w-xs px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="1d">Last 24 hours</option>
            <option value="1w">Last week</option>
            <option value="1m">Last month</option>
            <option value="1y">Last year</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Customers</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{data.totalCustomers}</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">${data.totalRevenue.toLocaleString()}</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Conversion Rate</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{data.conversionRate}%</dd>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Sales Pipeline</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
