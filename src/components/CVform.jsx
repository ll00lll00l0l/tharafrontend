import React, { useState } from "react";
import "../styles/Cvform.css";
import { Link } from "react-router-dom";
import baseURL from "../config/config";

const CVForm = () => {
  const [cvFile, setCVFile] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCVFile(file);
  };

  const handleButtonAction = () => {
    if (cvFile) {
      console.log("File uploaded:", cvFile);

      setShowSuccessPopup(handleSubmit(true));

      setCVFile(null);
    } else {
      document.getElementById("cvFileInput").click();
    }
  };

  const handleSubmit = async (e) => {
    if (!cvFile) {
      console.log("No file selected.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("cv_file", cvFile);

      const response = await fetch(`${baseURL}/api/CV/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully.");

        setShowSuccessPopup(true);
      } else {
        console.error("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);

    window.location.reload();
  };

  return (
    <>
      <div className="cvform ">
        <h2>Apply Now</h2>
        <div className="row">
          <div className="colp col-md-6">
            <p>
              We have some excellent openings for aspiring individuals who think
              that they have got the potential and skills that can be combined
              to bombard the ongoing revolution in the food industry.
            </p>
          </div>
          <div className="row col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="colp2 ">
                <input
                  type="file"
                  id="cvFileInput"
                  name="cvFile"
                  accept=".pdf, .doc, .docx"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  id="customButton"
                  onClick={handleButtonAction}
                  className="upsubtn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M5.42204 17.3031C3.47439 17.3031 1.89551 15.9747 1.89551 14.0271C1.89551 12.0795 3.47439 10.5006 5.42204 10.5006C5.55448 10.5006 5.68522 10.5079 5.81388 10.5221V10.5006H5.86238C5.83037 10.2438 5.81388 9.9823 5.81388 9.7169C5.81388 6.25441 8.62078 3.44751 12.0833 3.44751C14.428 3.44751 16.472 4.73465 17.5474 6.64088C17.8102 6.60223 18.0791 6.5822 18.3527 6.5822C21.3823 6.5822 23.8384 9.03824 23.8384 12.0679C23.8384 14.5619 22.1741 16.4631 19.8955 17.0898M12.6938 22.0475V13.0475M12.6938 13.0475L9.09551 16.7592M12.6938 13.0475L16.2955 16.7592"
                      stroke="#450079"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {cvFile ? "Submit " : "Upload CV "}
                </button>
                <span>or</span>
                <button type="button" className="upsubtn">
                  <Link to="https://www.linkedin.com/company/thara-group?trk=feed_main-feed-card_feed-actor-name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_462_4150)">
                        <path
                          d="M21.5945 0.747559H4.13991C2.33244 0.747559 0.867188 2.21281 0.867188 4.02029V21.4748C0.867188 23.2823 2.33244 24.7476 4.13991 24.7476H21.5945C23.4019 24.7476 24.8672 23.2823 24.8672 21.4748V4.02029C24.8672 2.21281 23.4019 0.747559 21.5945 0.747559Z"
                          fill="#0077B5"
                        />
                        <path
                          d="M9.51279 7.29301C9.51279 7.69757 9.39282 8.09303 9.16806 8.42941C8.94331 8.76578 8.62385 9.02795 8.25009 9.18277C7.87633 9.33758 7.46506 9.37809 7.06828 9.29916C6.6715 9.22024 6.30704 9.02543 6.02098 8.73937C5.73491 8.45331 5.5401 8.08884 5.46118 7.69206C5.38225 7.29528 5.42276 6.88401 5.57758 6.51025C5.73239 6.13649 5.99456 5.81704 6.33094 5.59228C6.66731 5.36752 7.06278 5.24756 7.46733 5.24756C8.00982 5.24756 8.53009 5.46306 8.91369 5.84666C9.29728 6.23026 9.51279 6.75052 9.51279 7.29301Z"
                          fill="white"
                        />
                        <path
                          d="M9.04898 10.7021V19.7389C9.04934 19.8056 9.03651 19.8717 9.01125 19.9334C8.98599 19.9951 8.94878 20.0511 8.90177 20.0984C8.85475 20.1457 8.79886 20.1832 8.7373 20.2088C8.67574 20.2344 8.60973 20.2476 8.54307 20.2476H6.38716C6.32049 20.2477 6.25445 20.2347 6.19282 20.2093C6.13119 20.1839 6.0752 20.1465 6.02806 20.0994C5.98092 20.0522 5.94356 19.9962 5.91813 19.9346C5.8927 19.873 5.8797 19.8069 5.87988 19.7403V10.7021C5.87988 10.5676 5.93333 10.4385 6.02846 10.3434C6.12359 10.2483 6.25262 10.1948 6.38716 10.1948H8.54307C8.67737 10.1952 8.80604 10.2488 8.90088 10.3439C8.99572 10.439 9.04898 10.5678 9.04898 10.7021Z"
                          fill="white"
                        />
                        <path
                          d="M20.3179 15.4067V19.7813C20.3181 19.8426 20.3062 19.9033 20.2828 19.96C20.2594 20.0166 20.2251 20.0681 20.1817 20.1115C20.1384 20.1548 20.0869 20.1891 20.0302 20.2125C19.9736 20.2359 19.9129 20.2478 19.8516 20.2477H17.5334C17.4721 20.2478 17.4114 20.2359 17.3547 20.2125C17.298 20.1891 17.2466 20.1548 17.2032 20.1115C17.1599 20.0681 17.1255 20.0166 17.1022 19.96C17.0788 19.9033 17.0668 19.8426 17.067 19.7813V15.5417C17.067 14.909 17.2525 12.7708 15.4129 12.7708C13.9879 12.7708 13.6975 14.234 13.6402 14.8913V19.7813C13.6402 19.9038 13.592 20.0214 13.506 20.1087C13.42 20.1959 13.3032 20.2459 13.1807 20.2477H10.9416C10.8804 20.2477 10.8198 20.2356 10.7633 20.2121C10.7068 20.1887 10.6555 20.1543 10.6123 20.111C10.5691 20.0676 10.5349 20.0162 10.5116 19.9597C10.4883 19.9031 10.4764 19.8425 10.4766 19.7813V10.6626C10.4764 10.6015 10.4883 10.5409 10.5116 10.4843C10.5349 10.4277 10.5691 10.3763 10.6123 10.333C10.6555 10.2896 10.7068 10.2553 10.7633 10.2318C10.8198 10.2084 10.8804 10.1963 10.9416 10.1963H13.1807C13.3043 10.1963 13.423 10.2454 13.5104 10.3329C13.5979 10.4203 13.647 10.539 13.647 10.6626V11.4508C14.1761 10.6572 14.9602 10.0449 16.6334 10.0449C20.3397 10.0449 20.3179 13.5058 20.3179 15.4067Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_462_4150">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.867188 0.747559)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Apply in LinkedIn
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          className="modal fade show"
          id="successPopup"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Success
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeSuccessPopup}
                ></button>
              </div>
              <div className="success-popup modal-body">
                <p className="text-light">
                  Your application was submitted successfully!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn upsubtn"
                  data-bs-dismiss="modal"
                  onClick={closeSuccessPopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVForm;
