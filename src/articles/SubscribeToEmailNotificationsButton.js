import React, { useState, useEffect } from "react";
import * as s from "./SubscribeSearchButton.sc";
import useSelectInterest from "../hooks/useSelectInterest";
import { toast } from "react-toastify";

export default function SubscribeToEmailNotificationsButton({
  api,
  subscribedSearch,
}) {
  const { subscribedSearches, subscribeToEmail, unsubscribeFromEmail } =
    useSelectInterest(api);
  const [buttonText, setButtonText] = useState("");
  const [isSubscribedToEmail, setIsSubscribedToEmail] = useState();

  useEffect(() => {
    if (subscribedSearches) {
      const subscribedSearchElement = subscribedSearches.find(
        (search) => search.search === subscribedSearch,
      );
      if (subscribedSearchElement) {
        setIsSubscribedToEmail(subscribedSearchElement.receive_email);
      }
    }
  }, [subscribedSearches, subscribedSearch]);

  useEffect(() => {
    setButtonText(
      isSubscribedToEmail
        ? " remove email notifications!"
        : " want email notifications?",
    );
  }, [isSubscribedToEmail]);

  const toggleEmailSubscription = () => {
    if (isSubscribedToEmail) {
      unsubscribeFromEmail(subscribedSearch);
      api.logUserActivity(
        api.UNSUBSCRIBE_FROM_EMAIL_NOTIFICATIONS,
        "",
        subscribedSearch,
        "",
      );
      setIsSubscribedToEmail(false);
      toast("You will no longer receive update emails!");
    } else {
      subscribeToEmail(subscribedSearch);
      api.logUserActivity(
        api.SUBSCRIBE_TO_EMAIL_NOTIFICATIONS,
        "",
        subscribedSearch,
        "",
      );
      setIsSubscribedToEmail(true);
      toast("You will now receive emails whenever there are new articles!");
    }
  };

  return (
    <s.AddRemoveButton
      onClick={toggleEmailSubscription}
      style={{ fontWeight: "normal" }}
    >
      {buttonText}
    </s.AddRemoveButton>
  );
}
