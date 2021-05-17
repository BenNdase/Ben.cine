import { useState } from "react";
import ReactPlayer from "react-player"

const Modal = (props) => {
    const [isOpen,setIsOpen] = useState(true);
    const playing = () => {
        setIsOpen(false)
    };
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-danger position-absolute bottom-0"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Bande d'annoce
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <ReactPlayer
                    className="container-fluid"
                    url={props.url}
                    playing={isOpen}
                    width="100%"
                >

                </ReactPlayer>
                {props.modalBody}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={playing}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
