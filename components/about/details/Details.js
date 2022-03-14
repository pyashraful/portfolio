import { BiChevronRight } from "react-icons/bi";
import { ChevronRight } from "react-bootstrap-icons";

export default function Details() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ul>
          <li>
            <BiChevronRight />
            <strong>Website:</strong> <span>www.example.com</span>
          </li>
          <li>
            <BiChevronRight /> <strong>Phone:</strong>{" "}
            <span>+123 456 7890</span>
          </li>
          <li>
            <BiChevronRight /> <strong>City:</strong> <span>New York, USA</span>
          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul>
          <li>
            <BiChevronRight /> <strong>Degree:</strong> <span>Master</span>
          </li>
          <li>
            <BiChevronRight /> <strong>PhEmailone:</strong>
            <span>email@example.com</span>
          </li>
          <li>
            <BiChevronRight /> <strong>Freelance:</strong>{" "}
            <span>Available</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
