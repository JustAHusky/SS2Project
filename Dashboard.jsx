import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../components/Footer';
const FeaturePageContainer = styled.div`
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 160px;
  height: auto;
  background-color: #f0f0f0;
  padding: 20px;
  border-right: 1px solid #000000;
`;

const SidebarLinkContainer = styled.div`
  margin-bottom: 10px;
`;

const SidebarLink = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000000;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e0f7fa;
  }
`;

const SidebarLinkActive = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  background-color: #e8f4d9;
  cursor: pointer;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
`;

const ActivityContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const ActivityItem = styled.div`
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #fff;
`;

const ActivityInput = styled.div`
  font-weight: bold;
`;

const ActivityOutput = styled.div`
  margin-top: 10px;
`;

const NoActivityMessage = styled.p`
  color: #777;
  font-style: italic;
  text-align: center;
`;

const Dashboard = ({ user }) => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3080/api/activity/${user.name}`)
        .then(response => {
          setActivities(response.data);
        })
    } else {
    }
  }, [user]);

  return (
    <FeaturePageContainer>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'between'}}>
      <Sidebar>
        <SidebarLinkContainer>
          <SidebarLink to="/grammar-checker">Grammar Checker</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/plagiarism-checker">Plagiarism Checker</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/text-completion">Text Completion</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/paraphraser">Paraphraser</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLinkActive to="/dashboard">Dashboard</SidebarLinkActive>
        </SidebarLinkContainer>
      </Sidebar>
      <MainContent>
        <h1>Recent Activities</h1>
        <ActivityContainer>
          {activities.length === 0 ? (
            <NoActivityMessage>No recent activity.</NoActivityMessage>
          ) : (
            activities.map((activity, index) => (
              <ActivityItem key={index}>
                <ActivityInput>Input: {activity.input_text}</ActivityInput>
                <ActivityOutput>Output: {activity.output_text}</ActivityOutput>
              </ActivityItem>
            ))
          )}
        </ActivityContainer>
      </MainContent>
      </div>
      <Footer></Footer>
    </FeaturePageContainer>
  );
};

export default Dashboard;
