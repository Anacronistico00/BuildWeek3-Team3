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
  DropdownToggle,
  DropdownItem,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import CreateNewPostComponent from "./CreateNewPostComponent";
import {
  Bookmark,
  ChatDots,
  CodeSlash,
  EyeSlashFill,
  FlagFill,
  Globe,
  HandThumbsUp,
  Link45deg,
  Pencil,
  PlusCircleFill,
  SendFill,
  ThreeDots,
  XLg,
} from "react-bootstrap-icons";
import { BiShare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { GetComments, postHomeComment } from "../actions/Comments";
import { FaRegImage } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { fetchPosts } from "../actions/GetPosts";

const URL = "https://striveschool-api.herokuapp.com/api/posts/";

const PostsComponent = () => {
  const token = useSelector((state) => state.token.token);

  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const profile = useSelector((state) => state.profileInfo);
  const [commentValues, setCommentValues] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [openComments, setOpenComments] = useState({});
  const posts = useSelector((state) => state.posts.posts);

  const isOpenFunc = () => {
    setIsOpen(!isOpen);
  };

  const handleCommentChange = (postId, value) => {
    setCommentValues((prevValues) => ({
      ...prevValues,
      [postId]: value,
    }));
  };

  const handlePostComment = (postId) => {
    const commentValue = commentValues[postId];
    if (commentValue) {
      dispatch(postHomeComment(token, commentValue, postId));
      setCommentValues((prevValues) => ({
        ...prevValues,
        [postId]: "",
      }));
      dispatch(GetComments());
    }
  };

  const toggleComments = (postId) => {
    setOpenComments(postId);
    console.log(openComments);
    isOpenFunc();
  };

  useEffect(() => {
    dispatch(GetComments());
    dispatch(fetchPosts(token));
  }, []);

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${URL}${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        dispatch(fetchPosts(token));
        alert("Post eliminato");
      } else {
        throw new Error("Non puoi eliminare questo post");
      }
    } catch (error) {
      alert(error.message);
      console.log("Errore nella fetch dei dati", error);
    }
  };

  const editPost = async (postId, newText) => {
    try {
      const response = await fetch(`${URL}${postId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
      });

      if (response.ok) {
        dispatch(fetchPosts(token));
        setShowEditModal(false);
        setPostToEdit(null);
        setEditText("");
      } else {
        throw new Error("Non puoi modificare questo post");
      }
    } catch (error) {
      alert(error.message);
      console.log("Errore nella fetch dei dati", error);
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

  return (
    <Container>
      <Row>
        <Col>
          <CreateNewPostComponent />

          {posts.length === 0 ? (
            <p>Nessun post disponibile</p>
          ) : (
            posts.map((post) => (
              <Card className="mt-2" key={post._id}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex justify-content-start align-items-center">
                      <Card.Img
                        variant="top"
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src={post.user.image}
                      />

                      <div className="ms-1">
                        <Card.Title>{post.username}</Card.Title>
                        <Card.Subtitle className="smallertext mb-2 text-muted align-baseline">
                          {new Date(post.createdAt).toLocaleString()}
                          <span className="ms-1">
                            <Globe />
                          </span>
                        </Card.Subtitle>
                      </div>
                    </div>
                    <div className=" d-flex">
                      <Dropdown>
                        <Dropdown.Toggle className=" btn bg-transparent text-black border-0 p-0 me-3">
                          <ThreeDots className=" me-2" />
                        </Dropdown.Toggle>
                        <DropdownMenu
                          style={{ width: "240px", height: "280px" }}
                          className=" py-3"
                        >
                          <Dropdown.Item href="#/action-1">
                            <Bookmark className=" me-2" /> Salva
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <Link45deg className=" me-2" /> Copia link al post
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <CodeSlash className=" me-2" /> Incorpora questo
                            post
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <EyeSlashFill className=" me-2" /> Non mi interessa
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleEdit(post)}>
                            <Pencil className=" me-2" /> Modifica Post
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <PlusCircleFill className=" me-2" /> Smetti di
                            seguire {post.username}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <FlagFill className=" me-2" /> Segnala post
                          </Dropdown.Item>
                        </DropdownMenu>
                      </Dropdown>

                      <div>
                        <Button
                          className="bg-transparent text-black border-0 p-0 me-3"
                          onClick={() => handleDelete(post._id)}
                        >
                          <XLg />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className=" m-2 ">
                    <Card.Text>{post.text}</Card.Text>
                  </div>
                  <div>
                    <img src={post.image} className=" w-100 img-fluid" />
                  </div>
                  <div className=" d-flex justify-content-between border-top p-2 mt-4">
                    <Button className=" text-secondary bg-transparent border-0">
                      <HandThumbsUp /> <span>Consiglia</span>
                    </Button>
                    <Button
                      className=" text-secondary bg-transparent border-0"
                      onClick={() => toggleComments(post._id)}
                    >
                      <ChatDots /> <span>Commenta</span>
                    </Button>
                    <Button className=" text-secondary bg-transparent border-0">
                      <BiShare /> <span>Diffondi il post</span>
                    </Button>
                    <Button className=" text-secondary bg-transparent border-0">
                      <SendFill /> <span>Invia</span>
                    </Button>
                  </div>
                </Card.Body>
                {isOpen && post._id === openComments && (
                  <Card.Footer>
                    <div className="d-flex align-items-center justify-content-between position-relative mb-2">
                      <img
                        src={profile.profileInfo.image}
                        alt=""
                        className="rounded-circle"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <FormControl
                        as="textarea"
                        value={commentValues[post._id] || ""}
                        onChange={(e) =>
                          handleCommentChange(post._id, e.target.value)
                        }
                        className="rounded-pill ms-2"
                        style={{ height: "40px", paddingRight: "150px" }}
                      />
                      {!commentValues[post._id] && (
                        <div className="commentIcons d-flex align-items-center position-absolute fs-5 text-secondary">
                          <FaRegFaceSmile />
                          <FaRegImage className="ms-3" />
                        </div>
                      )}
                      {commentValues[post._id] && (
                        <div className="commentIcons d-flex align-items-center position-absolute fs-5 text-secondary">
                          <FaRegFaceSmile />
                          <FaRegImage className="ms-3" />
                          <Button
                            className="bg-transparent border-0 text-primary"
                            onClick={() => handlePostComment(post._id)}
                          >
                            Pubblica
                          </Button>
                        </div>
                      )}
                    </div>
                    {comments.comments.length > 0 &&
                      openComments === post._id &&
                      comments.comments
                        .filter((comment) => comment.elementId === post._id)
                        .map((comment) => (
                          <div key={comment._id} className=" mb-4">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center mt-2">
                                <img
                                  src="public\epicode.png"
                                  alt=""
                                  className="rounded-circle"
                                  style={{ width: "30px", height: "30px" }}
                                />

                                <p className="fw-medium ms-2">
                                  {comment.author}
                                </p>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-secondary smallertext">
                                  {comment.createdAt.slice(5, 10)} alle{" "}
                                  {comment.createdAt.slice(11, 16)}
                                </p>
                                <Dropdown>
                                  <DropdownToggle className=" bg-transparent text-black border-0 p-2">
                                    <ThreeDots />
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem href="#">
                                      <Link45deg /> Copia il link nel commento{" "}
                                    </DropdownItem>
                                    <DropdownItem href="#">
                                      <FlagFill /> Segnala
                                    </DropdownItem>
                                    <DropdownItem href="#">
                                      <EyeSlashFill /> Non voglio vederlo
                                    </DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>
                              </div>
                            </div>
                            <div className="CommentStyle">
                              <Card.Text>{comment.comment}</Card.Text>
                            </div>
                            <div className="d-flex text-secondary mb-1 mt-3 smallertext CommentStyle">
                              <p className=" border-end pe-2">Consiglia</p>
                              <p className=" ps-2 ">Rispondi</p>
                            </div>
                          </div>
                        ))}
                  </Card.Footer>
                )}
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
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
            as="textarea"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={confirmEdit}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostsComponent;
