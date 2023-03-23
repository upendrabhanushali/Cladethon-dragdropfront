import { Link } from "react-router-dom";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import {deletePage} from "../redux/actions/pageAction";
import { Modal, Button } from "react-bootstrap";


function PageDetail({ page }) {
  const [show, setShow] = useReducer((show) => !show, false);
  const dispatch = useDispatch();
  const { name } = page;
  const closeModal = () => {
    setShow();
  };
  const deleteThePage = () => {
    deletePage(page._id)(dispatch);
    closeModal();
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link className="text-decoration-none" to={`/editor/${page._id}`}>
        {name}
      </Link>
      <div>
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        onClick={() => setShow(!show)}
      >
         <i className="fa fa-trash"></i>
      </button>
      <form id="create-page">
        <Modal
          show={show}
          onHide={setShow}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-auto">
              <label htmlFor="name" className="form-label">
                Are you sure that you want to delete this page?
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteThePage}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
      </div>
    </li>
  );
}

export default PageDetail;
