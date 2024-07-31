import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { serverUrl } from "../services/serverUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editProjectApi } from "../services/allApi";

function EditProject({ project }) {
  // Modal use states
  const [show, setShow] = useState(false);
  // usestate for the key component in input
  const [key, setkey] = useState(0);
  const handleClose = () => {
    setShow(false);
    handleClose1();
  };
  const handleShow = () => setShow(true);

  // usestate for project details
  const [projectDetails, setProjectDetails] = useState({
    id: project?._id,
    title: project?.title,
    language: project?.language,
    github: project?.github,
    website: project?.website,
    overview: project?.overview,
    projectImage: "",
  });

  const [preview, setpreview] = useState("");
  // console.log(projectDetails);
  const handleFileUpload = (e) => {
    e.preventDefault();
    setProjectDetails({ ...projectDetails, projectImage: e.target.files[0]});
  };

  // Useeffect to convert image into URL
  useEffect(() => {
    if (projectDetails.projectImage) {
      // createObject - method is used to convert files into URL
      //  console.log(URL.createObjectURL(projectDetails.projectImage));
      setpreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  const handleClose1 = () => {
    setProjectDetails({
      title: project.title,
      language: project.language,
      github: project.github,
      website: project.website,
      overview: project.overview,
      projectImage: "",
    });
    setpreview("");
    if (key == 0) {
      setkey(1);
    } else {
      setkey(0);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { id, title, language, github, website, overview, projectImage } =
      projectDetails;
    if (!title || !language || !github || !website || !overview) {
      toast.info("Please fill all the fields");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      preview
        ? reqBody.append("projImage", projectImage)
        : reqBody.append("projImage", project.projectImage);

      // get the token from sessionstorage
      const token = sessionStorage.getItem("token");
      // create the request headers
      if (preview) {
        /* if there is new image is uploaded */
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
        const result = await editProjectApi(id, reqBody, reqHeader);
        console.log(result);
        if (result.status == 200) {
          toast.success("Project updated successfully");
          handleClose();
        } else {
          toast.error("Failed to update project");
        }
      } else {
        /* no new image is uploaded */
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };
        const result = await editProjectApi(id, reqBody, reqHeader);
        console.log(result);
        if (result.status == 200) {
          toast.success("Project updated successfully");
          handleClose();
        } else {
          toast.error("Failed to update project");
        }
      }
    }
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faFilePen}
        className="text-info"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            Add Project Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <label htmlFor="projImg">
                <input
                  id="projImg"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e)}
                />
                <img
                  src={
                    preview
                      ? preview
                      : `${serverUrl}/uploads/${project.projImage}`
                  }
                  alt=""
                  width={"100%"}
                />
              </label>
            </Col>

            <Col sm={12} md={6}>
              <form className="p-3" action="">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    value={projectDetails.title}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Language"
                    className="form-control"
                    value={projectDetails.language}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        language: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Github"
                    className="form-control"
                    value={projectDetails.github}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        github: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Website"
                    className="form-control"
                    value={projectDetails.website}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        website: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name=""
                    value={projectDetails.overview}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        overview: e.target.value,
                      });
                    }}
                    placeholder="Overview"
                    className="form-control"
                    rows={"4"}
                  ></textarea>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            className="rounded-5"
            onClick={handleClose1}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="rounded-5"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose="2000" />
    </>
  );
}

export default EditProject;
