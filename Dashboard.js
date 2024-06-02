import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FeaturePageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 160px;
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
`;

const Dashboard = () => {
  // This would be replaced by real activity data from your app's state or a server
  const activities = [
    { input: "This is an example input text.", output: "This is an EXAMPLE input text." },
    { input: "Another input text.", output: "ANOTHER input text." }
    // Add more activities as needed
  ];

  return (
    <FeaturePageContainer>
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
                <ActivityInput>Input: {activity.input}</ActivityInput>
                <ActivityOutput>Output: {activity.output}</ActivityOutput>
              </ActivityItem>
            ))
          )}
        </ActivityContainer>
      </MainContent>
    </FeaturePageContainer>
  );
};

export default Dashboard;
