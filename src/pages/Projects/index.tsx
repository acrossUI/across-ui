import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Row, Col, Spin } from 'antd';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import app from '../../config/firebase';
import { Container, Wrapper } from './styles';
import { useAuth } from '../../hooks/auth';

const Projects: React.FC = () => {
  const { Meta } = Card;
  const { currentUser } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = app.firestore();
    const localProjects = [];
    db.collection('projects')
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => localProjects.push(doc.data())),
      )
      .then(() => setProjects(localProjects))
      .then(() => setLoading(false));

    /*

    db.collection('projects')
      .doc()
      .set({
        userId: currentUser.uid,
        name: 'Test Project',
        created_at: new Date(),
        modified_at: new Date(),
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
      */
  }, []);
  return (
    <Container>
      <Wrapper>
        {loading ? (
          <Spin size="large" className="custom-spin" />
        ) : (
          <Row gutter={[24, 16]}>
            {projects &&
              projects.map((project) => (
                <>
                  <Col span={6} style={{ minWidth: 250 }}>
                    <Card
                      hoverable
                      bordered={false}
                      cover={
                        <img
                          alt="example"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                      }
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined
                          key="edit"
                          onClick={() =>
                            history.push('/app', {
                              projectID: project.projectID,
                            })
                          }
                        />,

                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        title={project.name}
                        description={`Last publish: ${project.created_at}`}
                      />
                    </Card>
                  </Col>
                </>
              ))}
          </Row>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
