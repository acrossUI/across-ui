import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Spin, Modal, Form, Input } from 'antd';
import { v4 as uuid } from 'uuid';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Icon from '../../components/Icon';

import app from '../../config/firebase';
import { Container, Wrapper, AddProject } from './styles';
import { useAuth } from '../../hooks/auth';

const Projects: React.FC = () => {
  const { Meta } = Card;
  const { currentUser } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const db = app.firestore();

  const loadProjects = () => {
    setLoading(true);

    const localProjects = [];
    db.collection('projects')
      // .where('userID', '==', currentUser.uid) // remove coment to load only user projects
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) =>
          localProjects.push({ id: doc.id, data: doc.data() }),
        ),
      )
      .then(() => setProjects(localProjects as any))
      .then(() => setLoading(false));
  };

  const handleAddProject = () => {
    setModalVisible(true);
    /*

      */
  };

  useEffect(() => {
    loadProjects();
    db.collection('projects').onSnapshot(() => loadProjects());
  }, []);

  const onCreate = (values) => {
    db.collection('projects')
      .doc()
      .set({
        projectID: uuid(),
        userID: currentUser.uid,
        name: values.title,
        created_at: new Date(),
        modified_at: new Date(),
        reportData: {
          version: '3.6.3',
          objects: [],
          background: '#f3f3f3',
        },
      })
      .then(function () {
        console.log('Document successfully written!');
        setModalVisible(false);
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };

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
                              projectDocID: project.id,
                            })
                          }
                        />,

                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        title={project.data.name}
                        description={`Last publish: ${project.data.created_at}`}
                      />
                    </Card>
                  </Col>
                </>
              ))}
            <Col
              span={6}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Modal
                visible={isModalVisible}
                title="Create a new Project"
                okText="Create"
                cancelText="Cancel"
                onCancel={() => setModalVisible(false)}
                onOk={() => {
                  form
                    .validateFields()
                    .then((values) => {
                      form.resetFields();
                      onCreate(values);
                    })
                    .catch((info) => {
                      console.log('Validate Failed:', info);
                    });
                }}
              >
                <Form form={form}>
                  <Form.Item name="title" label="Title">
                    <Input placeholder="project title" />
                  </Form.Item>
                </Form>
              </Modal>
              <AddProject>
                <Icon name="docAdd" onClick={handleAddProject} />
              </AddProject>
            </Col>
          </Row>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
