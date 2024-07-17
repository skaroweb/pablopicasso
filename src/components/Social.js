import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialContext from "../contexts/socialContext";

const Social = () => {
  let socialList = useContext(SocialContext);
  return (
    <section className="mt-3">
      <div className="container">
        <div className="justify-content-center align-items-center text-center row">
          {socialList.map((socialItem, id) => (
            <div key={id} className="col-2">
              <a
                href={socialItem.socialMediaLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={socialItem.socialMediaIcon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
