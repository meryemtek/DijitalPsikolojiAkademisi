import { gql, request } from 'graphql-request'

const MASTER_URL = "https://us-west-2.cdn.hygraph.com/content/cm9w7fnub00bt07usnzomce2e/master"

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList($level: CourseLevel!) {
      courses(where: { level: $level }) {
        id
        name
        price
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
  `

  const variables = { level };

  const result = await request(MASTER_URL, query, variables);
  return result;
}
