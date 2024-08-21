import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { NavLink } from "react-router-dom";
import Tag from "../info_page_shared/Tag";
import TagContainer from "../info_page_shared/TagContainer";
import useSelectInterest from "../../hooks/useSelectInterest";
import InfoPage from "../info_page_shared/InfoPage";

import { PageTitle } from "../../components/PageTitle";
import strings from "../../i18n/definitions";

export default function Interests({ api }) {
  const { allTopics, toggleTopicSubscription, isSubscribed } =
    useSelectInterest(api);
  return (
    <InfoPage pageLocation={"settings"}>
      <NavLink to="/account_settings/options">
        <ArrowBackRoundedIcon />
      </NavLink>{" "}
      <PageTitle>{strings.interests}</PageTitle>
      <TagContainer>
        {allTopics.map((topic) => (
          <Tag
            key={topic.id}
            className={isSubscribed(topic) && "selected"}
            onClick={() => toggleTopicSubscription(topic)}
          >
            {" "}
            {topic.title}
          </Tag>
        ))}
      </TagContainer>
    </InfoPage>
  );
}
