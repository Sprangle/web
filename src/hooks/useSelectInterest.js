import { useEffect, useState } from "react";
import Feature from "../features/Feature";

export default function useSelectInterest(api) {
  const useNewTopics = Feature.new_topics();
  const [availableTopics, setAvailableTopics] = useState([]);
  const [subscribedTopics, setSubscribedTopics] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [subscribedSearches, setSubscribedSearches] = useState([]);
  const [showingSpecialInterestModal, setshowingSpecialInterestModal] =
    useState(false);

  useEffect(() => {
    if (useNewTopics) {
      api.getAvailableNewTopics((data) => {
        setAvailableTopics(data);
      });

      api.getSubscribedNewTopics((data) => {
        setSubscribedTopics(data);
      });
    } else {
      api.getAvailableTopics((data) => {
        setAvailableTopics(data);
      });

      api.getSubscribedTopics((data) => {
        setSubscribedTopics(data);
      });
    }

    //custom interest filters
    api.getSubscribedSearchers((data) => {
      setSubscribedSearches(data);
    });
  }, [api]);

  useEffect(() => {
    let newAllTopics = [...availableTopics, ...subscribedTopics];
    newAllTopics.sort((a, b) => a.title.localeCompare(b.title));
    setAllTopics(newAllTopics);
  }, [availableTopics, subscribedTopics]);

  function subscribeToTopic(topic) {
    setSubscribedTopics([...subscribedTopics, topic]);
    setAvailableTopics(availableTopics.filter((each) => each.id !== topic.id));
    if (useNewTopics) api.subscribeToNewTopic(topic);
    else api.subscribeToTopic(topic);
  }

  function unsubscribeFromTopic(topic) {
    setSubscribedTopics(
      subscribedTopics.filter((each) => each.id !== topic.id),
    );
    setAvailableTopics([...availableTopics, topic]);
    if (useNewTopics) api.unsubscribeFromNewTopic(topic);
    else api.unsubscribeFromTopic(topic);
  }

  function toggleTopicSubscription(topic) {
    if (subscribedTopics.includes(topic)) {
      unsubscribeFromTopic(topic);
    } else {
      subscribeToTopic(topic);
    }
  }

  //subscribe to custom interest filter
  function subscribeToSearch(response) {
    api.subscribeToSearch(response, (data) => {
      setSubscribedSearches([...subscribedSearches, data]);
    });
  }

  //remove custom interest filter
  function removeSearch(search) {
    console.log("unsubscribing from search" + search);
    setSubscribedSearches(
      subscribedSearches.filter((each) => each.id !== search.id),
    );
    api.unsubscribeFromSearch(search);
  }

  function isSubscribed(topic) {
    return subscribedTopics
      .map((subscribedTopic) => subscribedTopic.id)
      .includes(topic.id)
      ? true
      : false;
  }

  return {
    allTopics,

    availableTopics,
    subscribedTopics,
    toggleTopicSubscription,
    isSubscribed,

    subscribedSearches,
    setSubscribedSearches,
    subscribeToSearch,
    removeSearch,

    showingSpecialInterestModal,
    setshowingSpecialInterestModal,
  };
}
