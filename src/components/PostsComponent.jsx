import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownMenu,
  Row,
  Modal,
  FormControl,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CreateNewPostComponent from './CreateNewPostComponent';
import {
  ChatDots,
  Globe,
  HandThumbsUp,
  SendFill,
  ThreeDots,
  XLg,
} from 'react-bootstrap-icons';
import { BiShare } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { GetComments } from '../actions/Comments';

const URL = 'https://striveschool-api.herokuapp.com/api/posts/';

const PostsComponent = () => {
  const token = useSelector((state) => state.token.token);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    fetchPosts();
    dispatch(GetComments());
  }, [dispatch]);

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

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${URL}${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== postId));
        setShowModal(false);
        setPostToDelete(null);
        alert('Post eliminato');
      } else {
        throw new Error('Non puoi eliminare questo post');
      }
    } catch (error) {
      setError(error.message);
      alert(error.message);
      console.log('Errore nella fetch dei dati', error);
    }
  };

  const editPost = async (postId, newText) => {
    try {
      const response = await fetch(`${URL}${postId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText }),
      });

      if (response.ok) {
        const updatedPost = await response.json();
        setPosts(
          posts.map((post) => (post._id === postId ? updatedPost : post))
        );
        setShowEditModal(false);
        setPostToEdit(null);
        setEditText('');
      } else {
        throw new Error('Non puoi modificare questo post');
      }
    } catch (error) {
      alert(error.message);
      console.log('Errore nella fetch dei dati', error);
    }
  };

  const handleDelete = (postId) => {
    setPostToDelete(postId);
    setShowModal(true);
  };

  const handleEdit = (post) => {
    setPostToEdit(post);
    setEditText(post.text);
    setShowEditModal(true);
  };

  const confirmDelete = async () => {
    if (postToDelete) {
      await deletePost(postToDelete);
    }
  };

  const confirmEdit = async () => {
    if (postToEdit) {
      await editPost(postToEdit._id, editText);
    }
  };

  if (error) {
    return <div>Errore: {error}</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <CreateNewPostComponent fetchPosts={fetchPosts} />

          {posts.length === 0 ? (
            <p>Nessun post disponibile</p>
          ) : (
            posts.map((post) => (
              <Card className='mt-2' key={post._id}>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-start'>
                    <div className='d-flex justify-content-start align-items-center'>
                      <Card.Img
                        variant='top'
                        className='rounded-circle'
                        style={{ width: '40px', height: '40px' }}
                        src={post.user.image}
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
                    <div className=' d-flex'>
                      <Dropdown>
                        <Dropdown.Toggle className=' btn bg-transparent text-black border-0 p-0 me-3'>
                          <ThreeDots />
                        </Dropdown.Toggle>
                        <DropdownMenu>
                          <Dropdown.Item href='#/action-1'>Salva</Dropdown.Item>
                          <Dropdown.Item href='#/action-2'>
                            Copia link al post
                          </Dropdown.Item>
                          <Dropdown.Item href='#/action-3'>
                            Incorpora questo post
                          </Dropdown.Item>
                          <Dropdown.Item href='#/action-3'>
                            Non mi interessa
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleEdit(post)}>
                            Modifica Post
                          </Dropdown.Item>
                          <Dropdown.Item href='#/action-3'>
                            Smetti di seguire {post.username}
                          </Dropdown.Item>
                          <Dropdown.Item href='#/action-3'>
                            Segnala post
                          </Dropdown.Item>
                        </DropdownMenu>
                      </Dropdown>
                      <div>
                        <Button
                          className='bg-transparent text-black border-0 p-0 me-3'
                          onClick={() => handleDelete(post._id)}
                        >
                          <XLg />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className=' m-4 '>
                    <Card.Text>{post.text}</Card.Text>
                  </div>
                  <div>
                    <img src={post.image} className=' w-100 img-fluid' />
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
                <Card.Footer>
                  {comments.comments.length > 0 &&
                    comments.comments
                      .filter(
                        (comment) => comment.comments.elementId === post._id
                      )
                      .map((comment) => (
                        <div
                          key={comment.comments._id}
                          className='d-flex justify-content-between'
                        >
                          <div>
                            <p className='fw-medium'>
                              {comment.comments.author}
                            </p>
                          </div>
                          <div>
                            <Card.Text>{comment.comments.text}</Card.Text>
                          </div>
                        </div>
                      ))}
                </Card.Footer>
              </Card>
            ))
          )}
        </Col>
      </Row>

      {/* MODALE PER ELIMINA POST */}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminazione post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler eliminare questo post</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant='danger' onClick={confirmDelete}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODALE PER MODIFICA POST */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            as='textarea'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowEditModal(false)}>
            Annulla
          </Button>
          <Button variant='primary' onClick={confirmEdit}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostsComponent;
