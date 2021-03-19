import React from "react";
import "./card.css";
import CreateIcon from "@material-ui/icons/Create";
const Card = () => {
  return (
    <div className="card1 d-flex justify-content-between p-5 ml-1 mr-3">
      <div className="card1_left d-flex flex-column justify-content-center">
        <div className="img_div mb-3 ml-4">
          <img
            className="card_img d-flex justify-content-center"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          />
          <CreateIcon className="edit_icon" />
        </div>
        <h3
          contentEditable="true"
          className="card_name mt-2 d-flex justify-content-center "
        >
          John Doe
        </h3>
        <hr className="line_break  "></hr>
        <h4
          contentEditable="true"
          className="card_name mt-2 d-flex justify-content-center"
        >
          03487414542
        </h4>
        <hr className="line_break"></hr>
      </div>

      {/* center */}
      <div class="vl"></div>

      {/* right */}
      <div className="card1_right mt-2 d-flex flex-column p-1">
        <div className="d-flex justify-content-between align-items-center">
          {/* Each Item */}
          <div className="d-flex flex-column justify-content-center align-items-center mr-2">
            <h6 className="text_color">Number of Orders</h6>
            <h3 className="text-danger text_color">79</h3>
          </div>

          {/* Each Item */}
          <div className="d-flex flex-column justify-content-center align-items-center mr-2">
            <h6 className="text_color">Burning Capacigty</h6>
            <h3 className="text-danger text_color">$ 200</h3>
          </div>

          {/* Each Item */}
          <div className="d-flex flex-column justify-content-center align-items-center mr-2">
            <h6 className="text_color">Total Amount Shoped</h6>
            <h3 className="text-danger text_color">$ 1930</h3>
          </div>
        </div>

        {/* Phone NUmber */}
        <div>
          <h5 className="right_label text_color text_color">Phone Number</h5>
          <h4
            contentEditable="true"
            className="right_number mt-2 d-flex justify-content-start"
          >
            03487414542
          </h4>
        </div>

        {/* Driving License Number */}
        <div>
          <h5 className="right_label text_color">Driving License Number</h5>
          <h4
            contentEditable="true"
            className="right_number mt-2 d-flex justify-content-start"
          >
            03487414542
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
