import { useHistory } from "react-router-dom";

export const useCloseSideBar = (closeSideBar) => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      // logic to close sidebar
      closeSideBar();
    });

    return () => {
      unlisten();
    };
  }, []);
};
