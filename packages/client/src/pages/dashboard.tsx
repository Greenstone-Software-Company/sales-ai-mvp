// src/pages/dashboard.tsx

import { GetServerSideProps } from 'next';
import api from '../utils/api';

// Define the interface for the data expected from the API response
interface DashboardData {
  id: string;
  name: string;
  // Add other fields that you expect from the API response
}

interface DashboardProps {
  data: DashboardData | null;  // Data can be null in case of an error
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await api.get('/dashboard-data');  // API call to fetch data
    return {
      props: { data: res.data },  // Return the data as props to the component
    };
  } catch (error) {
    // If there's an error, return null for data
    return {
      props: { data: null },
    };
  }
};

// Functional component to display dashboard
const Dashboard = ({ data }: DashboardProps) => {
  if (!data) {
    return <div>Error loading data</div>;  // Handle case where data is null
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>ID: {data.id}</p>  {/* Displaying the ID from data */}
      <p>Name: {data.name}</p>  {/* Displaying the Name from data */}
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Dashboard;
