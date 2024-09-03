import { GetServerSideProps } from 'next';
import api from '../utils/api';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await api.get('/dashboard-data');
    return {
      props: { data: res.data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};

const Dashboard = ({ data }) => {
  // Render your dashboard using the data
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render dashboard content */}
    </div>
  );
};

export default Dashboard;
