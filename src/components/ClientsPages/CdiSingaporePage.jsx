import React from "react";
import TextDisplayCard from "./TextDisplayCard";
import manufacturingBusiness from '../../Assests/Images/manufacturingbusiness3.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CdiSingaporePage = () => {
  return (
    <section className="CdiSingaporePage">
      <div className="container">
        <h2 className=" CdiSingaporePageHead text-center my-4" >We have worked for Manufacturing and Sales units at cdi singapore</h2>
        <div className="mt-4">
          <h2 className="text-center">Scope of Manufacturing</h2>
          <div className="d-flex row justify-content-around" >
          <ul className="ScopeManufacturing col-11 col-lg-7 ">
            <li ><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Manufacturing Orders (MO) Printing and Release to Production
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} /> Production Outstanding Orders Report (ORR) preparation</li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Production Outstanding Orders Report (ORR), MOs Status update
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Update Bonded Seal products (ZXP, ZXHD, BS, SV, WI) info
              (Machining batch, H/N & S/N) into MO text in M3
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Update Sub-MO and Sub-items for Casing Hanger (CH) products</li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Raise Non-Inventory Purchase Orders (PO) to suppliers, PO Issuance
              and Liason with Suppliers
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Update FA MOs for the Production orders Meeting</li>
          </ul>
          <img className=" col-8 col-lg-4" src={manufacturingBusiness} />
          </div>
          <h3 className=" ms-5">Reports :</h3>
          <ul className="cdiSingaporeReports ms-5">
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Number of Manufacturing Orders (MO) imported to Outstanding Orders
              Report
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Number of Manufacturing Orders (MO) released to Production</li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Manufacturing Orders Weekly Status postproduction meeting</li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Purchase Orders (PO) Issuance Report</li>
          </ul>
        </div>

        <div className="SingaporePoints">
          <TextDisplayCard
            Heading={
              "Manufacturing Orders (MO) Printing And Release To Production"
            }
            ListItems={[
              "Generating the Manufacturing Orders (MO) from M3 Infor System",
              "Merging the Manufacturing Orders (MO) with the internal forms based upon the type of material and sequence of work instructions",
              "Stamping the Manufacturing Orders (MO) as indicating it is Approved for Manufacturing",
              "Placing the final Manufacturing Orders (MO) in the folders   specified by the type of material",
              "Releasing the Manufacturing Orders (MO) to the Production Team   by sending an E-mail",
            ]}
          />
          <TextDisplayCard
            Heading={"Production Outstanding Orders Report (ORR) Preparation"}
            ListItems={[
              "Generating and downloading the PX_NC_CO Line Analysis Report from the M3 Infor System",
              "Segregating, arranging the data and preparing as per the LBI Report",
              "Importing the Manufacturing Orders (MO) to the Outstanding  Orders Report (ORR) File",
              "Arranging the Manufacturing Orders (MO) by the specified type of  material",
              "Verifying the Manufacturing Orders (MO) printed status, quantity with reference to the Item number by checking in M3 Infor System",
              "Verifying the Latest Manufacturing Orders (MO) Finish date and  CO due date with reference to the Item number by checking in M3 Infor System",
            ]}
          />
          <TextDisplayCard
            Heading={
              "Production Outstanding Orders Report (ORR), Mos Status Update"
            }
            ListItems={[
              "Verifying the Manufacturing Orders (MO) status in M3 Infor System using PMS100 and PMS050",
              "Checking the workflow of the Manufacturing Orders (MO) and pending status",
              "Updating the Manufacturing Orders (MO) status with respect to the pending WorkCentre in the M3 Infor  System",
              "Preparing the Outstanding Orders Report (ORR) ready for the Production Open Orders Meetings by updating the Manufacturing Orders (MO) status to the Latest MO finish date",
            ]}
          />

          <TextDisplayCard
            Heading={
              "Update Bonded Seal Products (ZXP, ZXHD, BS, SV, WI) Info (Machining Batch, H/N & S/N) Into MO Text In M3"
            }
            ListItems={[
              "For Printing Manufacturing Orders (MO) related to Bonded Seal Products, need to input the Machining batch, Heat number and Serial number according to the file",
              "Input the Machining batch, Heat number and Serial number from the report using M3 Infor System in the text page of the Bonded Seal MO",
              "Then, saving the text, printing the Manufacturing Order (MO) and releasing the same to Production",
            ]}
          />

          <TextDisplayCard
            Heading={
              "Update Sub-MO And Sub-items For Casing Hanger (CH) Products"
            }
            ListItems={[
              "Casing Hanger (CH) products related Manufacturing Orders (MO) contains Sub-MO for various Moulding and Machining Processes.",
              "Updating the Sub-MO and Sub-items related to Casing Hanger (CH) MOs in the Outstanding Orders Report (ORR) File ",
              "Verifying the Manufacturing Orders (MO) and adding the data such as MO quantity, MO finish date, Remarks etc from the M3 Infor System and the Casing Hanger (CH) Outstanding File to the Outstanding Orders Report (ORR) File ",
            ]}
          />

          <TextDisplayCard
            Heading={
              "Raise Non-inventory Purchase Order (PO) To Suppliers,PO Issuance And Liason With Suppliers"
            }
            ListItems={[
              "Reviewing the Quotation and internal mail clearly for PO Issuance with respect to Supplier, Material/required and supply date",
              "Creating the data to raise Purchase Order (PO) in M3 Infor System with respect to the received mail and Quotation by the supplier",
              "Verifying the item number, quantity, amount clearly with respect to quotation and mentioning the same accordingly",
              "Saving the created Purchase Order (PO) and sending mail to the Head",
              "Seeking approval from the head of the department to raise the Purchase Order ",
              "After approval of Purchase Order (PO), printing the Purchase Order (PO) from M3 Infor System and save in the folder for reference",
              "Sending the Purchase Order (PO) created with respect to the given Quotation to the supplier and asking for best delivery date of the items",
            ]}
          />

          <TextDisplayCard
            Heading={"Update FA MO’s For The Production Orders Meeting"}
            ListItems={[
              "Generating and downloading the PX_NC_CO Line Analysis Report from the M3 Infor System",
              "Segregating the FA related mails and adding the Manufacturing Orders (MO) with respect to the LBI Report prepared ",
              "Updating the FA Manufacturing Orders (MO), CO number, MO quantity, MO finish date, CO due date etc from the LBI Report ",
              "Saving the updated file in the folder for Productions orders Meeting ",
              "Printing the FA related Manufacturing Orders (MO) added in the file, as on priority basis",
            ]}
          />
          <TextDisplayCard
            Heading={"Reports"}
            ListItems={[
              "Number of Manufacturing Orders (MO) imported to Outstanding Orders Report",
              "Number of Manufacturing Orders (MO) released to Production",
              "Manufacturing Orders Weekly Status postproduction meeting",
              "Purchase Orders (PO) Issuance Report",
              "Segregating the workflow and data, updating the report file for ease of reference and meetings",
              "Graphical representation and preparing pivot tables for easy and clear understanding ",
              "Sending the Reports on weekly basis to Manager for the track and reference",
            ]}
          />

          <TextDisplayCard Heading={"Tenders "} ListItems={[
            "Raising Request for Costing – After receiving RFQ based on BOM after checking the availability of required material, Manual and Automated formats are used for providing RFC for next costing Executive.",
            "Reviewing Customer order Request, coordinating and ensuring the orders are reviewed",
            "Reviewing cost information for the tenders if parts are existing or manufacturing before and submitting the same information to the Inside sales teams",
            "For new parts working with the engineering team to ensure the cost and technical requirements are met",
            "Supporting the tender's team to ensure all the cost and tenders are processed"
          ]}/>
          
          <TextDisplayCard  Heading={"Planning & Master data update"} ListItems={[
            "As the CDI systems are now getting moved from ERP to Oracle, master data update includes the following",
            "Dimensions along with their tolerances",
            "Data extraction from their GSS(Global Shop Solutions) such as units of measurements, Bill of materials etc.",
            "Cross reference and associated specifications listing for each part",
            "Attaching of corresponding drawings in the GSS for each part.",
            "Verifying the Dimensions as per DWGS/Customer Drawings and Reporting the same in Excel from where it can be moved to Oracle",
            "Other Master Data information required"
          ]}/>

        </div>


        <div className="mt-4">
          <h2 className="text-center">CDI Sales</h2>
          <ul className="ScopeManufacturing">
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Raising Request for Costing : After receiving RFQ based on BOM
              after checking the availability of required material, Manual and
              Automated formats are used for providing RFC for next costing
              Executive.
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Processing Purchase Order : M3 software used for Master Material
              plan and customer order processing.
            </li>
            <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />
              Preparation Of commercial Invoice : once the part is ready for
              shipping, Dimension and Weight details are received from store to
              prepare commercial Invoice and Packing List
            </li>
          </ul>
        </div>
        <div className="SingaporePoints">
          <TextDisplayCard Heading={"Sales"} ListItems={[
            "Processing Purchase Order – used for Master Material plan and customer order processing.",
            "Preparation Of commercial Invoice – once the part is ready for shipping, Dimension and Weight details are received from store to prepare  commercial Invoice  and Packing List.",
            "Other data entry activities and reports required by the sales team"
          ]} />
        </div>
      </div>
    </section>
  );
};

export default CdiSingaporePage;
