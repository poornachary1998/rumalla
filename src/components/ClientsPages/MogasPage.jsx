import React from "react";
import MogasLogo from "../../Assests/Images/MogasLogo.jpg";
import "./MogasPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const MogasPage = () => {
  return (
    <section className="MogasPage">
      <div className="container">
        <div className="row d-flex align-items-center m-auto justify-content-center">
          <img className="col-3 my-5" src={MogasLogo} />
          <h2 className="text-center">Our work for Mogas</h2>
          <ul className="ScopeManufacturing col-10">
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Review raw materials and component documentation provided by MOGAS
              suppliers, ensure conformance to MOGAS and customer
              specifications, standards, ITP and other requirements as well as
              POs issued by MOGAS and certify that suppliers can be authorized
              by MOGAS to ship.
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
            
              Create  MOGAS internal and customer documentation packages; verify
              correctness, completeness and conformance to specification and
              requirements.
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Notify MOGAS QA on a timely basis and as agreed upon of any
              non-conformance identified, providing all information and
              objective evidence required to issue non-conformance reports.
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Review the Non-Destructive Examination (NDE) reports, which is a
              valuable and versatile technique used to evaluate the properties
              of a material, component, structure or system and help to identify
              problems or defects in material or structures without causing any
              damage.
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              NDE reports includes the following Test reports to be reviewed by
              the MOGAS suppliers:
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Radiographic Testing (RT), Magnetic Particles Testing (MT),
              Penetrant Testing (PT), Positive Material Identification (PMI)
              Testing, Hardness Testing, Ferrite Testing, Ultrasonic Testing
              (UT) etc
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Review the Piping inspection, Weld maps and welder logs of the
              various components as per the ISO (International Organization for
              Standardization)
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Review the documents and NDE reports provided by MOGAS suppliers,
              highlight the errors for not matching cases as per the standard
              data and send back the documents to the customer to rectify the
              errors.
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Re-evaluate the documents and NDE reports to find out the major
              and minor errors for better efficiency and Quality Assurance
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Follow up with the customer to rectify the errors, obtain the
              corrected/revised documents as per the ITP.
            </li>
            <li>
              <FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Review and re-evaluate the corrected documents, as per the
              standard data conformances, approve the documents and submit to
              MOGAS within estimated submission date.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MogasPage;
