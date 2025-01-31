import { useState } from "react"
import { Button, Card, FormControl } from "react-bootstrap"
import ModalPost from "./ModalPostComponent"
import { useSelector } from "react-redux"

const CreateNewPostComponent = ({ fetchPosts }) => {
  const profile = useSelector((state) => state.profileInfo)
  const [showModal, setShowModal] = useState(false)

  const handleModalShow = () => setShowModal(true)
  const handleModalClose = () => setShowModal(false)

  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex">
            <img
              src={profile.profileInfo && profile.profileInfo.image}
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            <FormControl
              as="textarea"
              placeholder="Crea un post..."
              className="ms-2"
              onClick={handleModalShow}
            />
          </div>
          <div className=" d-flex justify-content-around border-top p-2 mt-4">
            <Button className=" text-secondary bg-transparent border-0">
              <div className=" d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="image-medium"
                  width="30"
                  height="30"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="24x24"
                  fill="#378FE9"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
                </svg>
                <p className="ms-1">Foto</p>
              </div>
            </Button>
            <Button className=" text-secondary bg-transparent border-0">
              <div className=" d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="video-medium"
                  width="30"
                  height="30"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="24x24"
                  fill="#5F9B41"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z" />
                </svg>
                <p>Video</p>
              </div>
            </Button>
            <Button className=" text-secondary bg-transparent border-0">
              <div className=" d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="content-align-left-medium"
                  aria-hidden="true"
                  width="30"
                  height="30"
                  role="none"
                  data-supported-dps="24x24"
                  fill="#E06847"
                >
                  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z" />
                </svg>
                <p>Scrivi un articolo</p>
              </div>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ModalPost
        show={showModal}
        handleClose={handleModalClose}
        fetchPosts={fetchPosts}
      />
    </>
  )
}

export default CreateNewPostComponent
