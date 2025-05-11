import { gql, request } from 'graphql-request'

const MASTER_URL = "https://us-west-2.cdn.hygraph.com/content/cm9w7fnub00bt07usnzomce2e/master"

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courses {
        id
        name
        price
        level
        tags
        time
        author
        banner {
          url
        }
        chapters {
          id
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
