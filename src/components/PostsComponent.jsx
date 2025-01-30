import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CreateNewPostComponent from './CreateNewPostComponent';
import { ChatDots, Globe, HandThumbsUp, SendFill } from 'react-bootstrap-icons';
import { BiShare } from 'react-icons/bi';

const URL = 'https://striveschool-api.herokuapp.com/api/posts/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk5ZjdjZDgyOWJmOTAwMTU3NDRkZmIiLCJpYXQiOjE3MzgxNDM2OTQsImV4cCI6MTczOTM1MzI5NH0.IVEhy_DlI9ekspeZcpWVOvnjtHfKQOlUF8ohccK_0kQ';

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('SONO DATA', data);
          setPosts(data.reverse().slice(0, 30));
        } else {
          throw new Error('Errore nel recupero dei dati');
        }
      } catch (error) {
        setError(error.message);
        console.log('Errore nella fetch dei dati', error);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Errore: {error}</div>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={7}>
          <CreateNewPostComponent />

          {posts.length === 0 ? (
            <p>Nessun post disponibile</p>
          ) : (
            posts.map((post) => (
              <Card className='mt-2' key={post._id}>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Card.Img
                      variant='top'
                      className='rounded-circle'
                      style={{ width: '40px', height: '40px' }}
                      src='https://cdn.pixabay.com/photo/2019/02/23/15/31/cats-4015832_1280.jpg'
                    />
                    <div className='ms-1'>
                      <Card.Title>{post.username}</Card.Title>
                      <Card.Subtitle className='smallertext mb-2 text-muted align-baseline'>
                        {new Date(post.createdAt).toLocaleString()}
                        <span className='ms-1'>
                          <Globe />
                        </span>
                      </Card.Subtitle>
                    </div>
                  </div>
                  <div className=' m-4 '>
                    <Card.Text>{post.text}</Card.Text>
                  </div>
                  <div className=' d-flex justify-content-between border-top p-2 mt-4'>
                    <Button className=' text-secondary bg-transparent border-0'>
                      <HandThumbsUp /> <span>Consiglia</span>
                    </Button>
                    <Button className=' text-secondary bg-transparent border-0'>
                      <ChatDots /> <span>Commenta</span>
                    </Button>
                    <Button className=' text-secondary bg-transparent border-0'>
                      <BiShare /> <span>Diffondi il post</span>
                    </Button>
                    <Button className=' text-secondary bg-transparent border-0'>
                      <SendFill /> <span>Invia</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
};

export default PostsComponent;
