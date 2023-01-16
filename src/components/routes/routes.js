import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import ErrorElem from "../ErrorElem";
import Staticties from "../Staticties/Staticties";
import Topics from "../Topics/Topics";
import TopicsDetails from "../Topics/TopicsDetails";
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Main></Main>,
    errorElement: <ErrorElem></ErrorElem>,
    children: [
      {
        path: "/",
        element: <Topics></Topics>,
      },
      {
        path: "/topics",
        element: <Topics></Topics>,
      },
      {
        path: "/staticties",
        element: <Staticties></Staticties>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      // dynamic routes
      {
        path: "/topic/:topicId",
        element: <TopicsDetails></TopicsDetails>,
        loader: async (params) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/4`);
        },
      },
    ],
  },
]);

export default router;
